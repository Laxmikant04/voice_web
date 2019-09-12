"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = async function (db) {
    return db.runSql(`
      ALTER TABLE custom_goals
        ADD COLUMN locale_id SMALLINT NOT NULL DEFAULT 1;
    `);
};
exports.down = function () {
    return null;
};
//# sourceMappingURL=20190722114654-add-locale-id-to-custom-goals.js.map