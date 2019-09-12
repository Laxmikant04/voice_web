"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendRequest = require("request-promise-native");
const config_helper_1 = require("../config-helper");
const mysql_1 = require("./model/db/mysql");
const goals_1 = require("./model/goals");
const { BASKET_API_KEY, ENVIRONMENT } = config_helper_1.getConfig();
const db = mysql_1.getMySQLInstance();
exports.API_URL = ENVIRONMENT == 'prod' || ENVIRONMENT == 'stage'
    ? 'https://basket.mozilla.org'
    : 'https://basket-dev.allizom.org';
function toISO(date) {
    return date ? new Date(date).toISOString().slice(0, -5) + 'Z' : null;
}
async function sync(client_id) {
    await goals_1.computeGoals(client_id);
    const [[row]] = await db.query(`
      SELECT
        email,
        basket_token,
        LEAST(
          (SELECT MIN(clips.created_at) FROM clips WHERE client_id = user_clients.client_id),
          (SELECT MIN(votes.created_at) FROM votes WHERE client_id = user_clients.client_id)
        ) AS first_contribution_date,
        current_goal.created_at AS goal_created_at,
        current_goal.days_interval,
        MAX(awards.created_at) AS goal_reached_at,
        NOW() AS last_active_date,
        (
          NOT EXISTS(
            SELECT 1
            FROM reached_goals
            WHERE type = 'streak' AND client_id = user_clients.client_id
              AND count = 3  
          ) AND EXISTS(
            SELECT 1
            FROM streaks
            WHERE client_id = user_clients.client_id
              AND DATEDIFF(NOW(), started_at) >= 2
              AND DATEDIFF(NOW(), last_activity_at) <= 1
          )
        ) AS two_day_streak
      FROM user_clients
      LEFT JOIN custom_goals goals ON user_clients.client_id = goals.client_id
                                      AND goals.locale_id = 1
      LEFT JOIN custom_goals current_goal ON (
        user_clients.client_id = current_goal.client_id AND
        current_goal.created_at >= goals.created_at
      )
      LEFT JOIN awards ON current_goal.id = awards.custom_goal_id
      WHERE user_clients.client_id = ? AND has_login
      GROUP BY user_clients.client_id
    `, [client_id]);
    if (!row ||
        !row.basket_token ||
        (!row.first_contribution_date && !row.goal_created_at)) {
        return;
    }
    const data = {
        email: row.email,
        first_contribution_date: toISO(row.first_contribution_date),
        created_at: toISO(row.goal_created_at),
        days_interval: row.days_interval,
        goal_reached_at: toISO(row.goal_reached_at),
    };
    if (config_helper_1.getConfig().ENVIRONMENT != 'prod') {
        Object.assign(data, {
            last_active_date: toISO(row.last_active_date),
            two_day_streak: row.two_day_streak,
        });
    }
    console.log('basket', JSON.stringify(data, null, 2));
    await sendRequest({
        uri: exports.API_URL + '/news/common-voice-goals/',
        method: 'POST',
        headers: {
            'x-api-key': BASKET_API_KEY,
        },
        form: data,
    });
}
exports.sync = sync;
//# sourceMappingURL=basket.js.map