"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_js_1 = require("crypto-js");
const omit = require("lodash.omit");
const db_1 = require("./db");
const config_helper_1 = require("../../config-helper");
const lazy_cache_1 = require("../lazy-cache");
const mysql_1 = require("./db/mysql");
const bucket_1 = require("../bucket");
const aws_1 = require("../aws");
const model_1 = require("../model");
const s3 = aws_1.AWS.getS3();
const model = new model_1.default();
const bucket = new bucket_1.default(model, s3);
const db = mysql_1.getMySQLInstance();
async function getClipLeaderboard(locale) {
    const [rows] = await db.query(`
      SELECT client_id,
             avatar_url,
             avatar_clip_url,
             username,
             total,
             valid,
             ROUND(100 * valid / validated, 2) AS rate
      FROM (
        SELECT user_clients.*,
               COUNT(clip_id) AS total,
               COALESCE(SUM(upvotes >= 2 AND upvotes > downvotes), 0) AS valid,
               COALESCE(SUM(
                 (upvotes >= 2 OR downvotes >= 2) AND upvotes <> downvotes
               ), 0) AS validated
        FROM (
          SELECT user_clients.*,
                 clips.id AS clip_id,
                 SUM(votes.is_valid) AS upvotes,
                 SUM(!votes.is_valid) AS downvotes
          FROM user_clients
          LEFT JOIN clips ON user_clients.client_id = clips.client_id
          LEFT JOIN votes ON clips.id = votes.clip_id
          WHERE visible
          ${locale ? 'AND clips.locale_id = :locale_id' : ''}
          GROUP BY user_clients.client_id, clips.id
        ) user_clients
        GROUP BY client_id
        HAVING total > 0
      ) t
      ORDER BY valid DESC, rate DESC, total DESC
    `, { locale_id: locale ? await db_1.getLocaleId(locale) : null });
    return rows;
}
async function getVoteLeaderboard(locale) {
    const [rows] = await db.query(`
      SELECT client_id,
             avatar_url,
             avatar_clip_url,
             username,
             total,
             valid,
             ROUND(100 * valid / validated, 2) AS rate
      FROM (
        SELECT user_clients.*,
               COUNT(vote_id) AS total,
               COALESCE(SUM(agree_count > disagree_count), 0) AS valid,
               COALESCE(SUM(
                 (agree_count >= 1 OR disagree_count >= 2)
                 AND agree_count <> disagree_count
               ), 0) AS validated
        FROM (
          SELECT user_clients.*,
                 votes.id AS vote_id,
                 SUM(votes.is_valid = other_votes.is_valid) AS agree_count,
                 SUM(votes.is_valid <> other_votes.is_valid) AS disagree_count
          FROM user_clients
          LEFT JOIN votes ON user_clients.client_id = votes.client_id
          LEFT JOIN clips ON votes.clip_id = clips.id
          LEFT JOIN votes other_votes ON clips.id = other_votes.clip_id
            AND other_votes.id <> votes.id
          WHERE visible
          ${locale ? 'AND clips.locale_id = :locale_id' : ''}
          GROUP BY user_clients.client_id, votes.id
        ) user_clients
        GROUP BY client_id
        HAVING total > 0
      ) t
      ORDER BY valid DESC, rate DESC, total DESC
    `, { locale_id: locale ? await db_1.getLocaleId(locale) : null });
    return rows;
}
const CACHE_TIME_MS = 1000 * 60 * 20;
exports.getFullClipLeaderboard = lazy_cache_1.default('clip-leaderboard', async (locale) => {
    return (await getClipLeaderboard(locale)).map((row, i) => (Object.assign({ position: i }, row)));
}, CACHE_TIME_MS);
exports.getFullVoteLeaderboard = lazy_cache_1.default('vote-leaderboard', async (locale) => {
    return (await getVoteLeaderboard(locale)).map((row, i) => (Object.assign({ position: i }, row)));
}, CACHE_TIME_MS);
async function getLeaderboard({ type, client_id, cursor, locale, }) {
    const prepareRows = (rows) => rows.map(row => (Object.assign({}, omit(row, 'client_id', 'avatar_clip_url'), { avatarClipUrl: row.avatar_clip_url
            ? bucket.getAvatarClipsUrl(row.avatar_clip_url)
            : null, clientHash: crypto_js_1.SHA256(row.client_id + config_helper_1.getConfig().SECRET).toString(), you: row.client_id == client_id })));
    const leaderboard = await (type == 'clip'
        ? exports.getFullClipLeaderboard
        : exports.getFullVoteLeaderboard)(locale);
    if (cursor) {
        return prepareRows(leaderboard.slice(cursor[0], cursor[1]));
    }
    const userIndex = leaderboard.findIndex(row => row.client_id == client_id);
    const userRegion = userIndex == -1 ? [] : leaderboard.slice(userIndex - 1, userIndex + 2);
    const partialBoard = [
        ...leaderboard.slice(0, 10 + Math.max(0, 10 - userRegion.length)),
        ...userRegion,
    ];
    return prepareRows(partialBoard.filter(({ position }, i) => i == partialBoard.findIndex(row => row.position == position)));
}
exports.default = getLeaderboard;
//# sourceMappingURL=leaderboard.js.map