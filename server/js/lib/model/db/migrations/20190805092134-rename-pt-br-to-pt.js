"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = async function (db) {
    return db.runSql(`
      # We can ignore failing updates for portuguese as it doesn't have related
      # rows yet anyway 
      UPDATE IGNORE locales SET name = 'pt' WHERE name = 'pt-BR';
    `);
};
exports.down = function () {
    return null;
};
//# sourceMappingURL=20190805092134-rename-pt-br-to-pt.js.map