"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eventStream = require("event-stream");
const fs = require("fs");
const path = require("path");
const stream_1 = require("stream");
const promisify_1 = require("../../../promisify");
const clip_1 = require("../../clip");
const redis_1 = require("../../redis");
const CWD = process.cwd();
const SENTENCES_FOLDER = path.resolve(CWD, 'server/data/');
function print(...args) {
    args.unshift('IMPORT --');
    console.log.apply(console, args);
}
async function getFilesInFolder(path) {
    const fileNames = await promisify_1.default(fs, fs.readdir, path);
    return fileNames.map((name) => {
        return path + '/' + name;
    });
}
const SENTENCES_PER_CHUNK = 500;
function streamSentences(localePath) {
    const stream = new stream_1.PassThrough({ objectMode: true });
    getFilesInFolder(localePath)
        .then(p => p.filter((name) => name.endsWith('.txt')))
        .then(async (filePaths) => {
        for (const filePath of filePaths) {
            const source = path.basename(filePath).split('.')[0];
            let sentences = [];
            function write() {
                stream.write({
                    sentences,
                    source,
                });
                sentences = [];
            }
            await new Promise(resolve => {
                const fileStream = fs
                    .createReadStream(filePath)
                    .pipe(eventStream.split())
                    .pipe(eventStream
                    .mapSync((line) => {
                    fileStream.pause();
                    sentences.push(line);
                    if (sentences.length >= SENTENCES_PER_CHUNK) {
                        write();
                    }
                    fileStream.resume();
                })
                    .on('end', () => {
                    if (sentences.length > 0) {
                        write();
                    }
                    resolve();
                }));
            });
        }
        stream.end();
    });
    return stream;
}
async function importLocaleSentences(pool, locale, version) {
    await pool.query('INSERT IGNORE INTO locales (name) VALUES (?)', [locale]);
    const [[{ localeId }]] = await pool.query('SELECT id AS localeId FROM locales WHERE name = ? LIMIT 1', [locale]);
    await new Promise(async (resolve) => {
        print('importing', locale);
        const stream = streamSentences(path.join(SENTENCES_FOLDER, locale));
        stream
            .on('data', async ({ sentences, source, }) => {
            stream.pause();
            try {
                await pool.query(`
              INSERT INTO sentences
              (id, text, is_used, locale_id, source, version)
              VALUES ${sentences
                    .map(sentence => `(${[
                    clip_1.hash(sentence),
                    sentence,
                    true,
                    localeId,
                    source,
                    version,
                ]
                    .map(v => pool.escape(v))
                    .join(', ')})`)
                    .join(', ')}
              ON DUPLICATE KEY UPDATE
                source = VALUES(source),
                version = VALUES(version),
                is_used = VALUES(is_used);
            `);
            }
            catch (e) {
                console.error('error when inserting sentence batch from "', sentences[0], '" to "', sentences[sentences.length - 1], '":', e);
            }
            stream.resume();
        })
            .on('end', resolve);
    });
}
async function importSentences(pool) {
    const oldVersion = Number((await redis_1.useRedis) ? await redis_1.redis.get('sentences-version') : 0);
    const version = ((oldVersion || 0) + 1) % 256; //== max size of version column
    const locales = (await new Promise(resolve => fs.readdir(SENTENCES_FOLDER, (_, names) => resolve(names)))).filter(name => name !== 'LICENSE');
    print('locales', locales.join(','));
    for (const locale of locales) {
        await importLocaleSentences(pool, locale, version);
    }
    (await redis_1.useRedis) &&
        (await redis_1.redis.set('sentences-version', version.toString()));
    await pool.query(`
      DELETE FROM sentences
      WHERE id NOT IN (SELECT original_sentence_id FROM clips) AND
            id NOT IN (SELECT sentence_id FROM skipped_sentences) AND
            version <> ?
    `, [version]);
    await pool.query(`
      UPDATE sentences
      SET is_used = FALSE
      WHERE version <> ?
    `, [version]);
    const [localeCounts] = (await pool.query(`
      SELECT locales.name AS locale, COUNT(*) AS count
      FROM sentences
      LEFT JOIN locales ON locale_id = locales.id
      WHERE is_used
      GROUP BY locale_id
    `));
    print('sentences', JSON.stringify(localeCounts.reduce((obj, { count, locale }) => {
        obj[locale] = count;
        return obj;
    }, {}), null, 2));
}
exports.importSentences = importSentences;
//# sourceMappingURL=import-sentences.js.map