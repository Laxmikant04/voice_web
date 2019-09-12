"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
const stream_1 = require("stream");
const PromiseRouter = require('express-promise-router');
const config_helper_1 = require("../config-helper");
const aws_1 = require("./aws");
const leaderboard_1 = require("./model/leaderboard");
const Basket = require("./basket");
const bucket_1 = require("./bucket");
const utility_1 = require("./utility");
const awards_1 = require("./model/awards");
const goals_1 = require("./model/goals");
const Transcoder = require('stream-transcoder');
const SALT = '8hd3e8sddFSdfj';
exports.hash = (str) => crypto
    .createHmac('sha256', SALT)
    .update(str)
    .digest('hex');
/**
 * Clip - Responsibly for saving and serving clips.
 */
class Clip {
    constructor(model) {
        this.serveClip = async ({ params }, response) => {
            response.redirect(await this.bucket.getClipUrl(params.clip_id));
        };
        this.saveClipVote = async ({ client_id, body, params }, response) => {
            const id = params.clipId;
            const { isValid } = body;
            const clip = await this.model.db.findClip(id);
            if (!clip || !client_id) {
                throw new utility_1.ClientParameterError();
            }
            try {
                console.log(id, client_id, isValid);
                await this.model.db.saveVote(id, client_id, isValid);
                await awards_1.default.checkProgress(client_id, { id: clip.locale_id });
            }
            catch (err) {
                console.log("error while saving votes" + err);
            }
            const glob = clip.path.replace('.mp3', '');
            const voteFile = glob + '-by-' + client_id + '.vote';
            await this.s3
                .putObject({
                Bucket: config_helper_1.getConfig().BUCKET_NAME,
                Key: voteFile,
                Body: isValid.toString(),
            })
                .promise();
            console.log('clip vote written to s3', voteFile);
            response.json(glob);
            await goals_1.checkGoalsAfterContribution(client_id, { id: clip.locale_id });
            Basket.sync(client_id).catch(e => console.error(e));
        };
        /**
         * Save the request body as an audio file.
         */
        this.saveClip = async (request, response) => {
            const { client_id, headers, params } = request;
            const sentence = decodeURIComponent(headers.sentence);
            if (!client_id || !sentence) {
                throw new utility_1.ClientParameterError();
            }
            // Where is our audio clip going to be located?
            const folder = client_id + '/';
            const filePrefix = exports.hash(sentence);
            const clipFileName = folder + filePrefix + '.mp3';
            const sentenceFileName = folder + filePrefix + '.txt';
            // if the folder does not exist, we create it
            try {
                await this.s3
                    .putObject({ Bucket: config_helper_1.getConfig().BUCKET_NAME, Key: folder })
                    .promise();
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
                    this.s3
                        .putObject({
                        Bucket: config_helper_1.getConfig().BUCKET_NAME,
                        Key: sentenceFileName,
                        Body: sentence,
                    })
                        .promise(),
                ]);
                console.log('file written to s3', clipFileName);
                await this.model.saveClip({
                    client_id: client_id,
                    locale: params.locale,
                    original_sentence_id: filePrefix,
                    path: clipFileName,
                    sentence,
                    sentenceId: headers.sentence_id,
                });
                await awards_1.default.checkProgress(client_id, { name: params.locale });
                await goals_1.checkGoalsAfterContribution(client_id, { name: params.locale });
                Basket.sync(client_id).catch(e => console.error(e));
                response.json(filePrefix);
            }
            catch (error) {
                console.error(error);
                response.statusCode = error.statusCode || 500;
                response.statusMessage = 'save_clip_error';
                response.json(error);
            }
        };
        this.serveRandomClips = async ({ client_id, params, query }, response) => {
            const clips = await this.bucket.getRandomClips(client_id, params.locale, parseInt(query.count, 10) || 1);
            response.json(clips);
        };
        this.serveValidatedHoursCount = async (request, response) => {
            response.json(await this.model.getValidatedHours());
        };
        this.serveDailyCount = async (request, response) => {
            response.json(await this.model.db.getDailyClipsCount(request.params.locale));
        };
        this.serveDailyVotesCount = async (request, response) => {
            response.json(await this.model.db.getDailyVotesCount(request.params.locale));
        };
        this.serveClipsStats = async ({ params }, response) => {
            response.json(await this.model.getClipsStats(params.locale));
        };
        this.serveVoicesStats = async ({ params }, response) => {
            response.json(await this.model.getVoicesStats(params.locale));
        };
        this.serveClipLeaderboard = async ({ client_id, params, query }, response) => {
            response.json(await leaderboard_1.default({
                type: 'clip',
                client_id,
                cursor: query.cursor ? JSON.parse(query.cursor) : null,
                locale: params.locale,
            }));
        };
        this.serveVoteLeaderboard = async ({ client_id, params, query }, response) => {
            response.json(await leaderboard_1.default({
                type: 'vote',
                client_id,
                cursor: query.cursor ? JSON.parse(query.cursor) : null,
                locale: params.locale,
            }));
        };
        this.s3 = aws_1.AWS.getS3();
        this.model = model;
        this.bucket = new bucket_1.default(this.model, this.s3);
    }
    getRouter() {
        const router = PromiseRouter({ mergeParams: true });
        router.use(({ client_id, params }, response, next) => {
            const { locale } = params;
            if (client_id && locale) {
                this.model.db
                    .saveActivity(client_id, locale)
                    .catch((error) => console.error('activity save error', error));
            }
            next();
        });
        router.post('/:clipId/votes', this.saveClipVote);
        router.post('*', this.saveClip);
        router.get('/validated_hours', this.serveValidatedHoursCount);
        router.get('/daily_count', this.serveDailyCount);
        router.get('/stats', this.serveClipsStats);
        router.get('/leaderboard', this.serveClipLeaderboard);
        router.get('/votes/leaderboard', this.serveVoteLeaderboard);
        router.get('/voices', this.serveVoicesStats);
        router.get('/votes/daily_count', this.serveDailyVotesCount);
        router.get('/:clip_id', this.serveClip);
        router.get('*', this.serveRandomClips);
        return router;
    }
}
exports.default = Clip;
//# sourceMappingURL=clip.js.map