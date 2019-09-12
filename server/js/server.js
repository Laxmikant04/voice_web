"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('newrelic');
const fs = require("fs");
const path = require("path");
const express = require("express");
const import_locales_1 = require("./lib/model/db/import-locales");
const model_1 = require("./lib/model");
const leaderboard_1 = require("./lib/model/leaderboard");
const api_1 = require("./lib/api");
const logger_1 = require("./lib/logger");
const redis_1 = require("./lib/redis");
const utility_1 = require("./lib/utility");
const import_sentences_1 = require("./lib/model/db/import-sentences");
const config_helper_1 = require("./config-helper");
const auth_router_1 = require("./auth-router");
const fetch_legal_document_1 = require("./fetch-legal-document");
require('source-map-support').install();
const contributableLocales = require('locales/contributable.json');
const MAINTENANCE_VERSION_KEY = 'maintenance-version';
const FULL_CLIENT_PATH = path.join(__dirname, '..', '..', 'web');
const CSP_HEADER = [
    `default-src 'none'`,
    `style-src 'self' https://fonts.googleapis.com https://optimize.google.com 'unsafe-inline'`,
    `img-src 'self' www.google-analytics.com www.gstatic.com https://optimize.google.com https://www.gstatic.com https://gravatar.com data:`,
    `media-src data: blob: https://*.amazonaws.com https://*.amazon.com http://minio:9000 http://localhost:9001`,
    // Note: we allow unsafe-eval locally for certain webpack functionality.
    `script-src 'self' 'unsafe-eval' 'sha256-yybRmIqa26xg7KGtrMnt72G0dH8BpYXt7P52opMh3pY=' 'sha256-jfhv8tvvalNCnKthfpd8uT4imR5CXYkGdysNzQ5599Q=' https://www.google-analytics.com https://pontoon.mozilla.org https://optimize.google.com https://sentry.io`,
    `font-src 'self' https://fonts.gstatic.com`,
    `connect-src 'self' https://pontoon.mozilla.org/graphql https://*.amazonaws.com https://*.amazon.com https://www.gstatic.com https://www.google-analytics.com https://sentry.io https://basket.mozilla.org https://basket-dev.allizom.org http://minio:9000 http://localhost:9001`,
    `frame-src https://optimize.google.com`,
].join(';');
class Server {
    get version() {
        const { ENVIRONMENT, RELEASE_VERSION } = config_helper_1.getConfig();
        return ENVIRONMENT + RELEASE_VERSION;
    }
    constructor(options) {
        options = Object.assign({ bundleCrossLocaleMessages: true }, options);
        this.model = new model_1.default();
        this.api = new api_1.default(this.model);
        this.logger = new logger_1.default();
        this.isLeader = null;
        // Make console.log output json.
        if (config_helper_1.getConfig().PROD) {
            this.logger.overrideConsole();
        }
        const app = (this.app = express());
        app.use((request, response, next) => {
            // redirect to omit trailing slashes
            if (request.path.substr(-1) == '/' && request.path.length > 1) {
                const query = request.url.slice(request.path.length);
                response.redirect(301, request.path.slice(0, -1) + query);
            }
            else {
                next();
            }
        });
        app.use(auth_router_1.default);
        app.use('/api/v1', this.api.getRouter());
        const staticOptions = {
            setHeaders: (response) => {
                // Only use CSP locally. In production, Apache handles CSP headers.
                // See path: nubis/puppet/web.pp
                !config_helper_1.getConfig().PROD &&
                    response.set('Content-Security-Policy', CSP_HEADER);
            },
        };
        app.use(express.static(FULL_CLIENT_PATH, staticOptions));
        app.use('/contribute.json', express.static(path.join(__dirname, '..', 'contribute.json')));
        app.use('/apple-app-site-association', express.static(path.join(FULL_CLIENT_PATH, 'apple-app-site-association.json')));
        if (options.bundleCrossLocaleMessages) {
            this.setupCrossLocaleRoute();
        }
        this.setupPrivacyAndTermsRoutes();
        app.use(/(.*)/, express.static(FULL_CLIENT_PATH + '/index.html', staticOptions));
        app.use((error, request, response, next) => {
            console.log(error.message, error.stack);
            const isAPIError = error instanceof utility_1.APIError;
            if (!isAPIError) {
                console.error(request.url, error.message, error.stack);
            }
            response
                .status(error instanceof utility_1.ClientError ? 400 : 500)
                .json({ message: isAPIError ? error.message : '' });
        });
    }
    setupCrossLocaleRoute() {
        const localesPath = path.join(FULL_CLIENT_PATH, 'locales');
        const crossLocaleMessages = fs
            .readdirSync(localesPath)
            .reduce((obj, locale) => {
            const filePath = path.join(localesPath, locale, 'cross-locale.ftl');
            if (fs.existsSync(filePath)) {
                obj[locale] = fs.readFileSync(filePath, 'utf-8');
            }
            return obj;
        }, {});
        this.app.get('/cross-locale-messages.json', (request, response) => {
            response.json(crossLocaleMessages);
        });
    }
    setupPrivacyAndTermsRoutes() {
        this.app.get('/privacy/:locale.html', async ({ params: { locale } }, response) => {
            response.send(await fetch_legal_document_1.default('Privacy_Notice', locale));
        });
        this.app.get('/terms/:locale.html', async ({ params: { locale } }, response) => {
            response.send(await fetch_legal_document_1.default('Terms', locale));
        });
    }
    /**
     * Log application level messages in a common format.
     */
    print(...args) {
        args.unshift('APPLICATION --');
        console.log.apply(console, args);
    }
    /**
     * Perform any scheduled maintenance on the data model.
     */
    async performMaintenance(doImport) {
        const start = Date.now();
        this.print('performing Maintenance');
        try {
            await this.model.performMaintenance();
            await import_locales_1.importLocales();
            if (doImport) {
                await import_sentences_1.importSentences(await this.model.db.mysql.createPool());
            }
            this.print('Maintenance complete');
        }
        catch (err) {
            this.print('Maintenance error', err);
        }
        finally {
            this.print(`${utility_1.getElapsedSeconds(start)}s to perform maintenance`);
        }
    }
    /**
     * Kill the http server if it's running.
     */
    kill() {
        if (this.server) {
            this.server.close();
            this.server = null;
        }
        this.model.cleanUp();
    }
    /**
     * Boot up the http server.
     */
    listen() {
        // Begin handling requests before clip list is loaded.
        let port = config_helper_1.getConfig().SERVER_PORT;
        this.server = this.app.listen(port, () => this.print(`listening at http://localhost:${port}`));
    }
    /**
     * Make sure we have a connection to the database.
     */
    async ensureDatabase() {
        try {
            await this.model.ensureDatabaseSetup();
        }
        catch (err) {
            console.error('could not connect to db', err);
        }
    }
    async hasMigrated() {
        const result = await redis_1.redis.get(MAINTENANCE_VERSION_KEY);
        const hasMigrated = result && JSON.parse(result) == this.version;
        if (hasMigrated) {
            this.print('maintenance already performed');
        }
        return hasMigrated;
    }
    /**
     * Start up everything.
     */
    async run(options) {
        options = Object.assign({ doImport: true }, options);
        this.print('starting');
        await this.ensureDatabase();
        this.listen();
        const { ENVIRONMENT } = config_helper_1.getConfig();
        if (!ENVIRONMENT || ENVIRONMENT === 'default') {
            await this.performMaintenance(options.doImport);
            // await this.warmUpCaches();
            return;
        }
        if (await this.hasMigrated()) {
            return;
        }
        const lock = await redis_1.redlock.lock('maintenance-lock', 1000 * 60 * 60 * 60 /*1 hour*/);
        // we need to check again after the lock was acquired, as another instance
        // might've already migrated in the meantime
        if (await this.hasMigrated()) {
            return;
        }
        try {
            await this.performMaintenance(options.doImport);
            await redis_1.redis.set(MAINTENANCE_VERSION_KEY, this.version);
        }
        catch (e) {
            this.print('error during maintenance', e);
        }
        await lock.unlock();
        // await this.warmUpCaches();
    }
    async warmUpCaches() {
        this.print('warming up caches');
        const start = Date.now();
        for (const locale of [null].concat(contributableLocales)) {
            await this.model.getClipsStats(locale);
            await this.model.getVoicesStats(locale);
            await this.model.getContributionStats(locale);
            await leaderboard_1.getFullVoteLeaderboard(locale);
            await leaderboard_1.getFullClipLeaderboard(locale);
        }
        this.print(`took ${utility_1.getElapsedSeconds(start)}s to warm up caches`);
    }
    /**
     * Reset the database to initial factory settings.
     */
    async resetDatabase() {
        await this.model.db.drop();
        await this.model.ensureDatabaseSetup();
    }
    async emptyDatabase() {
        await this.model.db.empty();
    }
}
exports.default = Server;
// Handle any top-level exceptions uncaught in the app.
process.on('uncaughtException', function (err) {
    if (err.code === 'EADDRINUSE') {
        // For now, do nothing when we are unable to start the http server.
        console.error('ERROR: server already running');
    }
    else {
        // We will crash the app when getting unknown top-level exceptions.
        console.error('uncaught exception', err);
        process.exit(1);
    }
});
process.on('unhandledRejection', r => console.error('unhandled promise rejection', r));
// If this file is run directly, boot up a new server instance.
if (require.main === module) {
    let server = new Server();
    server
        .run({ doImport: config_helper_1.getConfig().IMPORT_SENTENCES })
        .catch(e => console.error(e));
}
//# sourceMappingURL=server.js.map