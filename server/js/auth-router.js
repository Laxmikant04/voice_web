"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = require("url");
const crypto_js_1 = require("crypto-js");
const Auth0Strategy = require('passport-auth0');
const PromiseRouter = require('express-promise-router');
const session = require("express-session");
const MySQLStore = require('express-mysql-session')(session);
const passport = require("passport");
const user_client_1 = require("./lib/model/user-client");
const config_helper_1 = require("./config-helper");
const { ENVIRONMENT, MYSQLHOST, MYSQLDBNAME, MYSQLUSER, MYSQLPASS, PROD, SECRET, AUTH0: { DOMAIN, CLIENT_ID, CLIENT_SECRET }, } = config_helper_1.getConfig();
const CALLBACK_URL = '/callback';
const router = PromiseRouter();
router.use(require('cookie-parser')());
router.use(session({
    cookie: {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        secure: PROD,
    },
    secret: SECRET,
    store: new MySQLStore({
        host: MYSQLHOST,
        user: MYSQLUSER,
        password: MYSQLPASS,
        database: MYSQLDBNAME,
        createDatabaseTable: false,
    }),
    proxy: true,
    resave: false,
    saveUninitialized: false,
}));
router.use(passport.initialize());
router.use(passport.session());
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((sessionUser, done) => done(null, sessionUser));
if (DOMAIN) {
    Auth0Strategy.prototype.authorizationParams = function (options) {
        var options = options || {};
        const params = {};
        if (options.connection && typeof options.connection === 'string') {
            params.connection = options.connection;
        }
        if (options.audience && typeof options.audience === 'string') {
            params.audience = options.audience;
        }
        params.account_verification = true;
        return params;
    };
    const strategy = new Auth0Strategy({
        domain: DOMAIN,
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        callbackURL: ({
            stage: 'https://voice.allizom.org',
            prod: 'https://voice.mozilla.org',
        }[ENVIRONMENT] || '') + CALLBACK_URL,
        scope: 'openid email',
    }, (accessToken, refreshToken, extraParams, profile, done) => done(null, profile));
    passport.use(strategy);
}
else {
    console.log('No Auth0 configuration found');
}
router.get(CALLBACK_URL, passport.authenticate('auth0', { failureRedirect: '/login' }), async ({ user, query: { state }, session }, response) => {
    const { locale, old_user, old_email } = JSON.parse(crypto_js_1.AES.decrypt(state, SECRET).toString(crypto_js_1.enc.Utf8));
    const basePath = locale ? '/' + locale + '/' : '/';
    if (!user) {
        response.redirect(basePath + 'login-failure');
    }
    else if (old_user) {
        const success = await user_client_1.default.updateSSO(old_email, user.emails[0].value);
        if (!success) {
            session.passport.user = old_user;
        }
        response.redirect('/profile/settings?success=' + success.toString());
    }
    else {
        response.redirect(basePath + 'login-success');
    }
});
router.get('/login', (request, response) => {
    const { headers, user, query } = request;
    let locale = '';
    if (headers.referer) {
        const pathParts = url_1.parse(headers.referer).pathname.split('/');
        locale = pathParts[1] || '';
    }
    passport.authenticate('auth0', {
        state: crypto_js_1.AES.encrypt(JSON.stringify(Object.assign({ locale }, (user && query.change_email !== undefined
            ? {
                old_user: request.user,
                old_email: user.emails[0].value,
            }
            : {}))), SECRET).toString(),
    })(request, response);
});
router.get('/logout', (request, response) => {
    response.clearCookie('connect.sid');
    response.redirect('/');
});
exports.default = router;
//# sourceMappingURL=auth-router.js.map