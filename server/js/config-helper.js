"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const DEFAULTS = {
    VERSION: null,
    RELEASE_VERSION: null,
    PROD: false,
    SERVER_PORT: 9000,
    DB_ROOT_USER: 'root',
    DB_ROOT_PASS: '',
    MYSQLUSER: 'voicecommons',
    MYSQLPASS: 'voicecommons',
    MYSQLDBNAME: 'voiceweb',
    MYSQLHOST: 'localhost',
    MYSQLPORT: 3306,
    BUCKET_NAME: 'common-voice-corpus',
    BUCKET_LOCATION: '',
    ENVIRONMENT: 'default',
    SECRET: 'TODO: Set a secure SECRET in config.json',
    ADMIN_EMAILS: '[]',
    S3_CONFIG: {
        signatureVersion: 'v4',
        useDualstack: true,
    },
    AUTH0: {
        DOMAIN: 'laxmikantm.auth0.com',
        CLIENT_ID: 'vFkoquj1R0RmtWuf45FNlG2hXnzW9TVx',
        CLIENT_SECRET: 'RafDCSrVavsPalcwA6Euk7-Z6VlVmBHdE2WkuKfG3-SSOJrZGJJm0WrLF9TqFYVp',
    },
    IMPORT_SENTENCES: true,
    REDIS_URL: null,
};
let injectedConfig;
function injectConfig(config) {
    injectedConfig = Object.assign({}, DEFAULTS, config);
}
exports.injectConfig = injectConfig;
let loadedConfig;
function getConfig() {
    if (injectedConfig) {
        return injectedConfig;
    }
    if (loadedConfig) {
        return loadedConfig;
    }
    let config = null;
    try {
        let config_path = process.env.SERVER_CONFIG_PATH || './config.json';
        config = JSON.parse(fs.readFileSync(config_path, 'utf-8'));
    }
    catch (err) {
        console.error(err, 'could not load config.json, using defaults');
    }
    loadedConfig = Object.assign({}, DEFAULTS, config);
    return loadedConfig;
}
exports.getConfig = getConfig;
//# sourceMappingURL=config-helper.js.map