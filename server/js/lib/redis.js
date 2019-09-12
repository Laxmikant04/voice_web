"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Redis = require("ioredis");
const Redlock = require("redlock");
const config_helper_1 = require("../config-helper");
exports.redis = new Redis(config_helper_1.getConfig().REDIS_URL);
exports.redlock = new Redlock([exports.redis], { retryCount: -1 });
exports.useRedis = new Promise(resolve => {
    exports.redis.on('ready', () => {
        resolve(true);
    });
    exports.redis.on('error', err => {
        resolve(false);
        return exports.redis.quit();
    });
}).then(val => {
    console.log('Cache is', val ? 'redis' : 'in-memory');
    return val;
});
//# sourceMappingURL=redis.js.map