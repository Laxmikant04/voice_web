"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_helper_1 = require("../../config-helper");
const utility_1 = require("../utility");
const mysql_1 = require("./db/mysql");
const schema_1 = require("./db/schema");
const clip_table_1 = require("./db/tables/clip-table");
const vote_table_1 = require("./db/tables/vote-table");
// When getting new sentences/clips we need to fetch a larger pool and shuffle it to make it less
// likely that different users requesting at the same time get the same data
const SHUFFLE_SIZE = 500;
let localeIds;
async function getLocaleId(locale) {
    if (!localeIds) {
        const [rows] = await mysql_1.getMySQLInstance().query('SELECT id, name FROM locales');
        localeIds = rows.reduce((obj, { id, name }) => (Object.assign({}, obj, { [name]: id })), {});
    }
    return localeIds[locale];
}
exports.getLocaleId = getLocaleId;
class DB {
    constructor() {
        this.mysql = mysql_1.getMySQLInstance();
        this.clip = new clip_table_1.default(this.mysql);
        this.vote = new vote_table_1.default(this.mysql);
        this.schema = new schema_1.default(this.mysql);
    }
    /**
     * Normalize email address as input.
     */
    formatEmail(email) {
        if (!email) {
            return '';
        }
        return email.toLowerCase();
    }
    /**
     * Ensure the database is setup.
     */
    async ensureSetup() {
        return this.schema.ensure();
    }
    /**
     * I hope you know what you're doing.
     */
    async drop() {
        if (!config_helper_1.getConfig().PROD) {
            await this.schema.dropDatabase();
        }
    }
    async getSentenceCountByLocale(locales) {
        const [rows] = await this.mysql.query(`
        SELECT COUNT(*) AS count, locales.name AS locale
        FROM sentences
        LEFT JOIN locales ON sentences.locale_id = locales.id
        WHERE locales.name IN (?) AND sentences.is_used
        GROUP BY locale
      `, [locales]);
        return rows;
    }
    async getClipCount() {
        return this.clip.getCount();
    }
    async getSpeakerCount(locales) {
        return (await this.mysql.query(`
        SELECT locales.name AS locale, COUNT(DISTINCT clips.client_id) AS count
        FROM clips
        LEFT JOIN locales ON clips.locale_id = locales.id
        WHERE locales.name IN (?)
        GROUP BY locale
      `, [locales]))[0];
    }
    /**
     * Make sure we have a fully updated schema.
     */
    async ensureLatest() {
        await this.schema.upgrade();
    }
    /**
     * End connection to the database.
     */
    endConnection() {
        this.mysql.endConnection();
    }
    async findSentencesWithFewClips(client_id, locale, count) {
        const [rows] = await this.mysql.query(`
        SELECT *
        FROM (
          SELECT id, text
          FROM sentences
          WHERE is_used AND locale_id = ? AND NOT EXISTS (
            SELECT *
            FROM clips
            WHERE clips.original_sentence_id = sentences.id AND
                  clips.client_id = ?
          )
          ORDER BY clips_count ASC
          LIMIT ?
        ) t
        ORDER BY RAND()
        LIMIT ?
      `, [await getLocaleId(locale), client_id, SHUFFLE_SIZE, count]);
        return (rows || []).map(({ id, text }) => ({ id, text }));
    }
    async findClipsWithFewVotes(client_id, locale, count) {
        const [clips] = await this.mysql.query(`
      SELECT *
      FROM (
        SELECT clips.*
        FROM clips
        LEFT JOIN sentences on clips.original_sentence_id = sentences.id
        WHERE is_valid IS NULL AND clips.locale_id = ? AND client_id <> ? AND
              NOT EXISTS(
                SELECT *
                FROM votes
                WHERE votes.clip_id = clips.id AND client_id = ?
              )
        ORDER BY sentences.clips_count ASC, clips.created_at ASC
        LIMIT ?
      ) t
      ORDER BY RAND()
      LIMIT ?
    `, [await getLocaleId(locale), client_id, client_id, SHUFFLE_SIZE, count]);
        for (const clip of clips) {
            clip.voters = clip.voters ? clip.voters.split(',') : [];
        }
        return clips;
    }
    async saveUserClient(id) {
        await this.mysql.query('INSERT INTO user_clients (client_id) VALUES (?) ON DUPLICATE KEY UPDATE client_id = client_id', [id]);
    }
    async saveVote(id, client_id, is_valid) {
        await this.saveUserClient(client_id);
        await this.mysql.query(`
      INSERT INTO votes (clip_id, client_id, is_valid) VALUES (?, ?, ?)
      ON DUPLICATE KEY UPDATE is_valid = VALUES(is_valid)
    `, [id, client_id, is_valid ? 1 : 0]);
        await this.mysql.query(`
        UPDATE clips updated_clips
        SET is_valid = (
          SELECT
            CASE
              WHEN upvotes_count >= 2 AND upvotes_count > downvotes_count
                THEN TRUE
              WHEN downvotes_count >= 2 AND downvotes_count > upvotes_count
                THEN FALSE
              ELSE NULL
              END
          FROM (
                 SELECT
                   clips.id AS id,
                   COALESCE(SUM(votes.is_valid), 0)     AS upvotes_count,
                   COALESCE(SUM(NOT votes.is_valid), 0) AS downvotes_count
                 FROM clips
                 LEFT JOIN votes ON clips.id = votes.clip_id
                 WHERE clips.id = ?
                 GROUP BY clips.id
               ) t
        )
        WHERE updated_clips.id = ?
      `, [id, id]);
    }
    async saveClip({ client_id, locale, original_sentence_id, path, sentence, sentenceId, }) {
        try {
            sentenceId = sentenceId || utility_1.hash(sentence);
            const localeId = await getLocaleId(locale);
            await this.mysql.query(`
          INSERT INTO clips (client_id, original_sentence_id, path, sentence, locale_id)
          VALUES (?, ?, ?, ?, ?)
          ON DUPLICATE KEY UPDATE created_at = NOW()
        `, [client_id, sentenceId, path, sentence, localeId]);
            await this.mysql.query(`
          UPDATE sentences
          SET clips_count = clips_count + 1
          WHERE id = ?
        `, [sentenceId]);
        }
        catch (e) {
            console.error('error saving clip', e);
        }
    }
    async getValidClipCount(locales) {
        const [rows] = await this.mysql.query(`
        SELECT locale, COUNT(*) AS count
        FROM (
         SELECT locales.name AS locale
         FROM clips
         LEFT JOIN locales ON clips.locale_id = locales.id
         WHERE locales.name IN (?) AND is_valid
         GROUP BY clips.id
        ) AS valid_clips
        GROUP BY locale
      `, [locales]);
        return rows;
    }
    async getClipsStats(locale) {
        const localeId = locale ? await getLocaleId(locale) : null;
        const intervals = [
            '100 YEAR',
            '1 YEAR',
            '6 MONTH',
            '1 MONTH',
            '1 WEEK',
            '0 HOUR',
        ];
        const ranges = intervals
            .map(interval => 'NOW() - INTERVAL ' + interval)
            .reduce((ranges, interval, i, intervals) => i + 1 === intervals.length
            ? ranges
            : [...ranges, [interval, intervals[i + 1]]], []);
        const results = await Promise.all(ranges.map(([from, to]) => Promise.all([
            this.mysql.query(`
              SELECT COUNT(*) AS total, ${to} AS date
              FROM clips
              WHERE created_at BETWEEN ${from} AND ${to} ${locale ? 'AND locale_id = ?' : ''}
            `, [localeId]),
            this.mysql.query(`
              SELECT SUM(upvotes_count >= 2 AND upvotes_count > downvotes_count) AS valid
              FROM (
                SELECT
                  SUM(votes.is_valid) AS upvotes_count,
                  SUM(NOT votes.is_valid) AS downvotes_count
                FROM clips
                LEFT JOIN votes ON clips.id = votes.clip_id
                WHERE NOT clips.is_valid IS NULL AND (
                  SELECT created_at
                  FROM votes
                  WHERE votes.clip_id = clips.id
                  ORDER BY created_at DESC
                  LIMIT 1
                ) BETWEEN ${from} AND ${to} ${locale ? 'AND locale_id = ?' : ''}
                GROUP BY clips.id
              ) t;
            `, [localeId]),
        ])));
        return results.reduce((totals, [[[{ date, total }]], [[{ valid }]]], i) => {
            const last = totals[totals.length - 1];
            return totals.concat({
                date,
                total: (last ? last.total : 0) + (Number(total) || 0),
                valid: (last ? last.valid : 0) + (Number(valid) || 0),
            });
        }, []);
    }
    async getVoicesStats(locale) {
        const hours = Array.from({ length: 10 }).map((_, i) => i);
        const [rows] = await this.mysql.query(`
        SELECT date, COUNT(DISTINCT client_id) AS value
        FROM (
          SELECT (TIMESTAMP(DATE_FORMAT(NOW(), '%Y-%m-%d %H:00')) - INTERVAL hour HOUR) AS date
          FROM (${hours.map(i => `SELECT ${i} AS hour`).join(' UNION ')}) hours
        ) date_alias
        LEFT JOIN user_client_activities ON created_at BETWEEN date AND (date + INTERVAL 1 HOUR) ${locale ? 'AND locale_id = ?' : ''}
        GROUP BY date
    `, [locale ? await getLocaleId(locale) : '']);
        return rows;
    }
    async getContributionStats(locale, client_id) {
        const hours = Array.from({ length: 10 }).map((_, i) => i);
        const [rows] = await this.mysql.query(`
        SELECT date,
        (
          SELECT COUNT(*)
          FROM clips
          WHERE clips.created_at BETWEEN date AND (date + INTERVAL 1 HOUR)
          ${locale ? 'AND clips.locale_id = :locale_id' : ''}
          ${client_id ? 'AND clips.client_id = :client_id' : ''}
        ) + (
          SELECT COUNT(*)
          FROM votes
          LEFT JOIN clips on clips.id = votes.clip_id
          WHERE votes.created_at BETWEEN date AND (date + INTERVAL 1 HOUR)
          ${locale ? 'AND clips.locale_id = :locale_id' : ''}
          ${client_id ? 'AND votes.client_id = :client_id' : ''}
        ) AS value
        FROM (
          SELECT (TIMESTAMP(DATE_FORMAT(NOW(), '%Y-%m-%d %H:00')) - INTERVAL hour HOUR) AS date
          FROM (${hours.map(i => `SELECT ${i} AS hour`).join(' UNION ')}) hours
        ) date_alias
        ORDER BY date ASC
      `, {
            locale_id: locale ? await getLocaleId(locale) : null,
            client_id,
        });
        return rows;
    }
    async empty() {
        const [tables] = await this.mysql.rootExec('SHOW TABLES');
        const tableNames = tables
            .map((table) => Object.values(table)[0])
            .filter((tableName) => tableName !== 'migrations');
        await this.mysql.rootExec('SET FOREIGN_KEY_CHECKS = 0');
        for (const tableName of tableNames) {
            await this.mysql.rootExec('TRUNCATE TABLE ' + tableName);
        }
        await this.mysql.rootExec('SET FOREIGN_KEY_CHECKS = 1');
    }
    async findClip(id) {
        return (await this.mysql.query('SELECT * FROM clips WHERE id = ? LIMIT 1', [
            id,
        ]))[0][0];
    }
    async getRequestedLanguages() {
        const [rows] = await this.mysql.query('SELECT language FROM requested_languages');
        return rows.map((row) => row.language);
    }
    async findRequestedLanguageId(language) {
        const [[row]] = await this.mysql.query('SELECT * FROM requested_languages WHERE LOWER(language) = LOWER(?) LIMIT 1', [language]);
        return row ? row.id : null;
    }
    async createLanguageRequest(language, client_id) {
        language = language.trim();
        let requestedLanguageId = await this.findRequestedLanguageId(language);
        if (!requestedLanguageId) {
            await this.mysql.query('INSERT INTO requested_languages (language) VALUES (?)', [language]);
            requestedLanguageId = await this.findRequestedLanguageId(language);
        }
        await this.mysql.query(`
        INSERT INTO language_requests (requested_languages_id, client_id)
        VALUES (?, ?)
        ON DUPLICATE KEY UPDATE client_id = client_id
      `, [requestedLanguageId, client_id]);
    }
    async getUserClient(client_id) {
        const [[row]] = await this.mysql.query('SELECT * FROM user_clients WHERE client_id = ?', [client_id]);
        return row;
    }
    async getDailyClipsCount(locale) {
        return (await this.mysql.query(`
        SELECT COUNT(id) AS count
        FROM clips
        WHERE created_at >= CURDATE() AND created_at < CURDATE() + INTERVAL 1 DAY
        ${locale ? 'AND locale_id = ?' : ''}
      `, locale ? [await getLocaleId(locale)] : []))[0][0].count;
    }
    async getDailyVotesCount(locale) {
        return (await this.mysql.query(`
        SELECT COUNT(votes.id) AS count
        FROM votes
        LEFT JOIN clips on votes.clip_id = clips.id
        WHERE votes.created_at >= CURDATE() AND votes.created_at < CURDATE() + INTERVAL 1 DAY
        ${locale ? 'AND locale_id = ?' : ''}
      `, locale ? [await getLocaleId(locale)] : []))[0][0].count;
    }
    async saveAccents(client_id, accents) {
        await Promise.all(Object.entries(accents).map(async ([locale, accent]) => this.mysql.query(`
        INSERT INTO user_client_accents (client_id, locale_id, accent) VALUES (?, ?, ?)
          ON DUPLICATE KEY UPDATE accent = VALUES(accent)
      `, [client_id, await getLocaleId(locale), accent])));
    }
    async createSkippedSentence(id, client_id) {
        await this.mysql.query(`
        INSERT INTO skipped_sentences (sentence_id, client_id) VALUES (?, ?) 
      `, [id, client_id]);
    }
    async saveActivity(client_id, locale) {
        await this.mysql.query(`
        INSERT INTO user_client_activities (client_id, locale_id) VALUES (?, ?)
      `, [client_id, await getLocaleId(locale)]);
    }
    async insertDownloader(locale, email) {
        await this.mysql.query(`
        INSERT IGNORE INTO downloaders (locale_id, email) VALUES (?, ?)
      `, [await getLocaleId(locale), email]);
    }
    async createReport(client_id, { kind, id, reasons, }) {
        const [table, column] = kind == 'clip'
            ? ['reported_clips', 'clip_id']
            : ['reported_sentences', 'sentence_id'];
        for (const reason of reasons) {
            await this.mysql.query(`INSERT INTO ${table} (client_id, ${column}, reason) VALUES (?, ?, ?)`, [client_id, id, reason]);
        }
    }
}
exports.default = DB;
//# sourceMappingURL=db.js.map