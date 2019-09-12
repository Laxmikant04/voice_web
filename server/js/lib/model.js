"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request-promise-native");
const db_1 = require("./model/db");
const lazy_cache_1 = require("./lazy-cache");
const locales = require('locales/all.json');
const contributableLocales = require('locales/contributable.json');
// based on the latest dataset
const AVG_CLIP_SECONDS = 4.7;
const AVG_CLIP_SECONDS_PER_LOCALE = {
    en: 4.36,
    de: 4.17,
    fr: 4.1,
    cy: 4.51,
    br: 3.02,
    cv: 4.29,
    tr: 3.88,
    tt: 3.68,
    ky: 4.59,
    'ga-IE': 3.45,
    kab: 3.61,
    ca: 4.54,
    'zh-TW': 2.94,
    sl: 3.93,
    it: 4.85,
    nl: 3.81,
    cnh: 3.78,
    eo: 4.56,
    et: 6.69,
    fa: 4.5,
    eu: 5.08,
    es: 4.14,
    'zh-CN': 6.53,
    mn: 5.46,
    sah: 5.97,
    dv: 5.41,
    rw: 4.63,
    'sv-SE': 3.05,
    ru: 5.18,
};
const getAvgSecondsPerClip = (locale) => AVG_CLIP_SECONDS_PER_LOCALE[locale] || AVG_CLIP_SECONDS;
function fetchLocalizedPercentagesByLocale() {
    return request({
        uri: 'https://pontoon.mozilla.org/graphql',
        method: 'POST',
        json: true,
        body: {
            query: `{
            project(slug: "common-voice") {
              localizations {
                totalStrings
                approvedStrings
                locale {
                  code
                }
              }
            }
          }`,
            variables: null,
        },
    }).then(({ data }) => data.project.localizations.reduce((obj, l) => {
        obj[l.locale.code] = Math.round((100 * l.approvedStrings) / l.totalStrings);
        return obj;
    }, {}));
}
const MINUTE = 1000 * 60;
const DAY = MINUTE * 60 * 24;
/**
 * The Model loads all clip and user data into memory for quick access.
 */
class Model {
    constructor() {
        this.db = new db_1.default();
        this.getValidatedHours = lazy_cache_1.default('validated-hours', async () => {
            const english = (await this.db.getValidClipCount(['en']))[0];
            return Math.round(((english ? english.count : 0) * getAvgSecondsPerClip('en')) / 3600);
        }, DAY);
        this.getLanguageStats = lazy_cache_1.default('language-stats', async () => {
            const inProgressLocales = locales.filter(locale => !contributableLocales.includes(locale));
            function indexCountByLocale(rows) {
                return rows.reduce((obj, { count, locale }) => {
                    obj[locale] = count;
                    return obj;
                }, {});
            }
            const [localizedPercentages, sentenceCounts, validClipsCounts, speakerCounts,] = await Promise.all([
                fetchLocalizedPercentagesByLocale(),
                this.db
                    .getSentenceCountByLocale(inProgressLocales)
                    .then(indexCountByLocale),
                this.db
                    .getValidClipCount(contributableLocales)
                    .then(indexCountByLocale),
                this.db.getSpeakerCount(contributableLocales).then(indexCountByLocale),
            ]);
            return {
                inProgress: inProgressLocales.map(locale => ({
                    locale,
                    localizedPercentage: localizedPercentages[locale] || 0,
                    sentencesCount: sentenceCounts[locale] || 0,
                })),
                launched: contributableLocales.map(locale => ({
                    locale,
                    seconds: Math.floor((validClipsCounts[locale] || 0) * getAvgSecondsPerClip(locale)),
                    speakers: speakerCounts[locale] || 0,
                })),
            };
        }, 20 * MINUTE);
        this.getClipsStats = lazy_cache_1.default('clips-stats', async (locale) => (await this.db.getClipsStats(locale)).map(stat => (Object.assign({}, stat, { total: Math.round(stat.total * getAvgSecondsPerClip(locale)), valid: Math.round(stat.valid * getAvgSecondsPerClip(locale)) }))), DAY);
        this.getVoicesStats = lazy_cache_1.default('voice-stats', (locale) => this.db.getVoicesStats(locale), 20 * MINUTE);
        this.getContributionStats = lazy_cache_1.default('contribution-stats', (locale) => this.db.getContributionStats(locale), 20 * MINUTE);
    }
    /**
     * Fetch a random clip but make sure it's not the user's.
     */
    async findEligibleClips(client_id, locale, count) {
        return this.db.findClipsWithFewVotes(client_id, locale, Math.min(count, 50));
    }
    async findEligibleSentences(client_id, locale, count) {
        return this.db.findSentencesWithFewClips(client_id, locale, Math.min(count, 50));
    }
    /**
     * Ensure the database is properly set up.
     */
    async ensureDatabaseSetup() {
        await this.db.ensureSetup();
    }
    /**
     * Upgrade to the latest version of the db.
     */
    async performMaintenance() {
        await this.db.ensureLatest();
    }
    /**
     * Perform any cleanup work to the model before shutting down.
     */
    cleanUp() {
        this.db.endConnection();
    }
    async saveClip(clipData) {
        await this.db.saveClip(clipData);
    }
}
exports.default = Model;
//# sourceMappingURL=model.js.map