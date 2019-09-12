"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = async function (db) {
    return db.runSql(`
      CREATE TABLE reported_clips (
        id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
        client_id CHAR(36) NOT NULL,
        clip_id BIGINT(20) UNSIGNED NOT NULL,
        reason VARCHAR(255) NOT NULL,
        created_at DATETIME DEFAULT now(),
        FOREIGN KEY (client_id) REFERENCES user_clients (client_id),
        FOREIGN KEY (clip_id) REFERENCES clips (id)
      );

      CREATE TABLE reported_sentences (
        id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
        client_id CHAR(36) NOT NULL,
        sentence_id VARCHAR(255) NOT NULL,
        reason VARCHAR(255) NOT NULL,
        created_at DATETIME DEFAULT now(),
        FOREIGN KEY (client_id) REFERENCES user_clients (client_id),
        FOREIGN KEY (sentence_id) REFERENCES sentences (id)
      );
    `);
};
exports.down = function () {
    return null;
};
//# sourceMappingURL=20190708095144-reported-clips-and-reported-sentences.js.map