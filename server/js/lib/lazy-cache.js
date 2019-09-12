"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("./redis");
function isExpired(at, timeMs) {
    return Date.now() - at > timeMs;
}
function memoryCache(f, timeMs) {
    const caches = {};
    return async (...args) => {
        const key = JSON.stringify(args);
        let cached = caches[key];
        if (cached) {
            const { at, promise, value } = cached;
            if (!isExpired(at, timeMs)) {
                return value;
            }
            if (promise)
                return value || promise;
        }
        else {
            caches[key] = cached = {};
        }
        return (cached.promise = new Promise(async (resolve) => {
            const hasOldCache = cached && cached.value;
            if (hasOldCache)
                resolve(cached.value);
            Object.assign(cached, {
                at: Date.now(),
                value: await f(...args),
                promise: null,
            });
            if (!hasOldCache)
                resolve(cached.value);
        }));
    };
}
function redisCache(cacheKey, f, timeMs) {
    return async (...args) => {
        const key = cacheKey + JSON.stringify(args);
        const result = await redis_1.redis.get(key);
        let value;
        let renewCache = true;
        if (result) {
            const cached = JSON.parse(result);
            value = cached.value;
            renewCache = isExpired(cached.at, timeMs);
        }
        if (!renewCache)
            return value;
        return new Promise(async (resolve) => {
            const lock = await redis_1.redlock.lock(key + '-lock', 1000 * 60 * 60 * 3 /*3 minutes*/);
            const result = await redis_1.redis.get(key);
            if (result) {
                const cached = JSON.parse(result);
                renewCache = isExpired(cached.at, timeMs);
                resolve(cached.value);
            }
            if (renewCache) {
                value = await f(...args);
                await redis_1.redis.set(key, JSON.stringify({ at: Date.now(), value }));
                resolve(value);
            }
            await lock.unlock();
        });
    };
}
function lazyCache(cacheKey, f, timeMs) {
    const memCache = memoryCache(f, timeMs);
    return async (...args) => ((await redis_1.useRedis) ? redisCache(cacheKey, f, timeMs) : memCache)(...args);
}
exports.default = lazyCache;
//# sourceMappingURL=lazy-cache.js.map