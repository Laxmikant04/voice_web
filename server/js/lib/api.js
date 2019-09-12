"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const crypto_js_1 = require("crypto-js");
const sendRequest = require("request-promise-native");
const config_helper_1 = require("../config-helper");
const awards_1 = require("./model/awards");
const custom_goal_1 = require("./model/custom-goal");
const goals_1 = require("./model/goals");
const user_client_1 = require("./model/user-client");
const Basket = require("./basket");
const clip_1 = require("./clip");
const prometheus_1 = require("./prometheus");
const utility_1 = require("./utility");
const stream_1 = require("stream");
const aws_1 = require("./aws");
const bucket_1 = require("./bucket");
const Transcoder = require('stream-transcoder');
const PromiseRouter = require('express-promise-router');
class API {
    constructor(model) {
        this.getRandomSentences = async (request, response) => {
            const { client_id, params } = request;
            const sentences = await this.model.findEligibleSentences(client_id, params.locale, parseInt(request.query.count, 10) || 1);
            response.json(sentences);
        };
        this.getRequestedLanguages = async (request, response) => {
            response.json(await this.model.db.getRequestedLanguages());
        };
        this.createLanguageRequest = async (request, response) => {
            await this.model.db.createLanguageRequest(request.body.language, request.client_id);
            response.json({});
        };
        this.createSkippedSentence = async (request, response) => {
            const { client_id, params: { id }, } = request;
            await this.model.db.createSkippedSentence(id, client_id);
            response.json({});
        };
        this.getLanguageStats = async (request, response) => {
            response.json(await this.model.getLanguageStats());
        };
        this.getUserClients = async ({ client_id, user }, response) => {
            if (!user) {
                response.json([]);
                return;
            }
            const email = user.emails[0].value;
            const userClients = [
                { email },
                ...(await user_client_1.default.findAllWithLocales({
                    email,
                    client_id,
                })),
            ];
            response.json(userClients);
        };
        this.saveAccount = async ({ body, user }, response) => {
            if (!user) {
                throw new utility_1.ClientParameterError();
            }
            response.json(await user_client_1.default.saveAccount(user.emails[0].value, body));
        };
        this.getAccount = async ({ user }, response) => {
            let userData = null;
            if (user) {
                userData = await user_client_1.default.findAccount(user.emails[0].value);
            }
            if (userData !== null && userData.avatar_clip_url !== null) {
                userData.avatar_clip_url = await this.bucket.getAvatarClipsUrl(userData.avatar_clip_url);
            }
            response.json(user ? userData : null);
        };
        this.subscribeToNewsletter = async (request, response) => {
            const { BASKET_API_KEY, PROD } = config_helper_1.getConfig();
            if (!BASKET_API_KEY) {
                response.json({});
                return;
            }
            const { email } = request.params;
            const basketResponse = await sendRequest({
                uri: Basket.API_URL + '/news/subscribe/',
                method: 'POST',
                form: {
                    'api-key': BASKET_API_KEY,
                    newsletters: 'common-voice',
                    format: 'H',
                    lang: 'en',
                    email,
                    source_url: request.header('Referer'),
                    sync: 'Y',
                },
            });
            await user_client_1.default.updateBasketToken(email, JSON.parse(basketResponse).token);
            response.json({});
        };
        this.saveAvatar = async ({ body, headers, params, user }, response) => {
            let avatarURL;
            let error;
            switch (params.type) {
                case 'default':
                    avatarURL = null;
                    break;
                case 'gravatar':
                    try {
                        avatarURL =
                            'https://gravatar.com/avatar/' +
                                crypto_js_1.MD5(user.emails[0].value).toString() +
                                '.png';
                        await sendRequest(avatarURL + '&d=404');
                    }
                    catch (e) {
                        if (e.name != 'StatusCodeError') {
                            throw e;
                        }
                        error = 'not_found';
                    }
                    break;
                case 'file':
                    avatarURL =
                        'data:' +
                            headers['content-type'] +
                            ';base64,' +
                            body.toString('base64');
                    console.log(avatarURL.length);
                    if (avatarURL.length > 8000) {
                        error = 'too_large';
                    }
                    break;
                default:
                    response.sendStatus(404);
                    return;
            }
            if (!error) {
                await user_client_1.default.updateAvatarURL(user.emails[0].value, avatarURL);
            }
            response.json(error ? { error } : {});
        };
        this.saveAvatarClip = async (request, response) => {
            const { client_id, headers, user } = request;
            const folder = client_id;
            const clipFileName = folder + '.mp3';
            try {
                // If upload was base64, make sure we decode it first.
                let transcoder;
                if (headers['content-type'].includes('base64')) {
                    // If we were given base64, we'll need to concat it all first
                    // So we can decode it in the next step.
                    const chunks = [];
                    await new Promise(resolve => {
                        request.on('data', (chunk) => {
                            chunks.push(chunk);
                        });
                        request.on('end', resolve);
                    });
                    const passThrough = new stream_1.PassThrough();
                    passThrough.end(Buffer.from(Buffer.concat(chunks).toString(), 'base64'));
                    transcoder = new Transcoder(passThrough);
                }
                else {
                    // For non-base64 uploads, we can just stream data.
                    transcoder = new Transcoder(request);
                }
                await Promise.all([
                    this.s3
                        .upload({
                        Bucket: config_helper_1.getConfig().BUCKET_NAME,
                        Key: clipFileName,
                        Body: transcoder
                            .audioCodec('mp3')
                            .format('mp3')
                            .stream(),
                    })
                        .promise(),
                ]);
                await user_client_1.default.updateAvatarClipURL(user.emails[0].value, clipFileName);
                response.json(clipFileName);
            }
            catch (error) {
                console.error(error);
                response.statusCode = error.statusCode || 500;
                response.statusMessage = 'save avatar clip error';
                response.json(error);
            }
        };
        this.getAvatarClip = async (request, response) => {
            try {
                const { user } = request;
                let path = await user_client_1.default.getAvatarClipURL(user.emails[0].value);
                path = path[0][0].avatar_clip_url;
                let avatarclip = await this.bucket.getAvatarClipsUrl(path);
                response.json(avatarclip);
            }
            catch (err) {
                response.json(null);
            }
        };
        this.getContributionActivity = async ({ client_id, params: { locale }, query }, response) => {
            response.json(await (query.from == 'you'
                ? this.model.db.getContributionStats(locale, client_id)
                : this.model.getContributionStats(locale)));
        };
        this.createCustomGoal = async (request, response) => {
            await custom_goal_1.default.create(request.client_id, request.params.locale, request.body);
            response.json({});
            Basket.sync(request.client_id).catch(e => console.error(e));
        };
        this.getGoals = async ({ client_id, params: { locale } }, response) => {
            response.json({ globalGoals: await goals_1.default(client_id, locale) });
        };
        this.claimUserClient = async ({ client_id, params }, response) => {
            if (!(await user_client_1.default.hasSSO(params.client_id)) && client_id) {
                await user_client_1.default.claimContributions(client_id, [params.client_id]);
            }
            response.json({});
        };
        this.insertDownloader = async ({ client_id, params }, response) => {
            await this.model.db.insertDownloader(params.locale, params.email);
            response.json({});
        };
        this.seenAwards = async ({ client_id, query }, response) => {
            await awards_1.default.seen(client_id, query.hasOwnProperty('notification') ? 'notification' : 'award');
            response.json({});
        };
        this.createReport = async ({ client_id, body }, response) => {
            await this.model.db.createReport(client_id, body);
            response.json({});
        };
        this.model = model;
        this.clip = new clip_1.default(this.model);
        this.metrics = new prometheus_1.default();
        this.s3 = aws_1.AWS.getS3();
        this.bucket = new bucket_1.default(this.model, this.s3);
    }
    getRouter() {
        const router = PromiseRouter();
        router.use(bodyParser.json());
        router.use(async (request, response, next) => {
            this.metrics.countRequest(request);
            const client_id = request.headers.client_id;
            if (request.user) {
                const accountClientId = await user_client_1.default.findClientId(request.user.emails[0].value);
                if (accountClientId) {
                    request.client_id = accountClientId;
                    next();
                    return;
                }
            }
            if (client_id) {
                if (await user_client_1.default.hasSSO(client_id)) {
                    response.sendStatus(401);
                    return;
                }
                else {
                    await this.model.db.saveUserClient(client_id);
                }
                request.client_id = client_id;
            }
            next();
        });
        router.get('/metrics', (request, response) => {
            this.metrics.countPrometheusRequest(request);
            const { registry } = this.metrics;
            response
                .type(registry.contentType)
                .status(200)
                .end(registry.metrics());
        });
        router.use((request, response, next) => {
            this.metrics.countApiRequest(request);
            next();
        });
        router.get('/golem', (request, response) => {
            console.log('Received a Golem request', {
                referer: request.header('Referer'),
                query: request.query
            });
            response.redirect('/');
        });
        router.get('/user_clients', this.getUserClients);
        router.post('/user_clients/:client_id/claim', this.claimUserClient);
        router.get('/user_client', this.getAccount);
        router.patch('/user_client', this.saveAccount);
        router.post('/user_client/avatar/:type', bodyParser.raw({ type: 'image/*' }), this.saveAvatar);
        router.post('/user_client/avatar_clip', this.saveAvatarClip);
        router.get('/user_client/avatar_clip', this.getAvatarClip);
        router.post('/user_client/:locale/goals', this.createCustomGoal);
        router.get('/user_client/goals', this.getGoals);
        router.get('/user_client/:locale/goals', this.getGoals);
        router.post('/user_client/awards/seen', this.seenAwards);
        router.get('/:locale/sentences', this.getRandomSentences);
        router.post('/skipped_sentences/:id', this.createSkippedSentence);
        router.use('/:locale?/clips', (request, response, next) => {
            this.metrics.countClipRequest(request);
            next();
        }, this.clip.getRouter());
        router.get('/contribution_activity', this.getContributionActivity);
        router.get('/:locale/contribution_activity', this.getContributionActivity);
        router.get('/requested_languages', this.getRequestedLanguages);
        router.post('/requested_languages', this.createLanguageRequest);
        router.get('/language_stats', this.getLanguageStats);
        router.post('/newsletter/:email', this.subscribeToNewsletter);
        router.post('/:locale/downloaders/:email', this.insertDownloader);
        router.post('/reports', this.createReport);
        router.use('*', (request, response) => {
            response.sendStatus(404);
        });
        return router;
    }
}
exports.default = API;
//# sourceMappingURL=api.js.map