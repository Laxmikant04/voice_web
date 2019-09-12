"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = async function (db) {
    return db.runSql(`
      ALTER TABLE user_clients
        ADD COLUMN has_computed_goals BOOL NOT NULL DEFAULT FALSE;
    `);
};
exports.down = function () {
    return null;
};
//# sourceMappingURL=20190721130133-add-has-computed-goals-to-user-clients.js.map