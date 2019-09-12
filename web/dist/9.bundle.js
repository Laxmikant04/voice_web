(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./src/components/pages/dashboard/awards/awards.css":
/*!**********************************************************!*\
  !*** ./src/components/pages/dashboard/awards/awards.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/dashboard/awards/awards.tsx":
/*!**********************************************************!*\
  !*** ./src/components/pages/dashboard/awards/awards.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AwardsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_store_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../hooks/store-hooks */ "./src/hooks/store-hooks.ts");
/* harmony import */ var _stores_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../stores/user */ "./src/stores/user.ts");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../urls */ "./src/urls.ts");
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/icons */ "./src/components/ui/icons.tsx");
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/ui */ "./src/components/ui/ui.tsx");
/* harmony import */ var _awards_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./awards.css */ "./src/components/pages/dashboard/awards/awards.css");
/* harmony import */ var _awards_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_awards_css__WEBPACK_IMPORTED_MODULE_6__);








const NoAwardsPage = ({ dashboardLocale }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "no-awards-page" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: __webpack_require__(/*! ./stars.svg */ "./src/components/pages/dashboard/awards/stars.svg"), alt: "Stars" }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "Earn your first award, create a goal"),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_5__["LinkButton"], { rounded: true, to: _urls__WEBPACK_IMPORTED_MODULE_3__["default"].DASHBOARD +
            (dashboardLocale ? '/' + dashboardLocale : '') +
            _urls__WEBPACK_IMPORTED_MODULE_3__["default"].GOALS }, "Get started with goals"),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "When you complete a personal goal, your awards will show up here.")));
const INTERVAL_LABELS = {
    1: 'Daily',
    7: 'Weekly',
};
const Wave = () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { className: "wave", width: "172", height: "70", viewBox: "0 0 172 70" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("linearGradient", { id: "wave-b", x1: "50%", x2: "50%", y1: "100%", y2: "0%" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("stop", { offset: "0%", stopColor: "#040101", stopOpacity: "0" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("stop", { offset: "100%", stopColor: "#000", stopOpacity: "0.3" })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { id: "wave-a", d: "M0 49.237c22.655-18.809 30.755-2.594 58.986-2.594C89.25 46.643 100.896 10 128 10c21 0 26 9 44 16.117V80H0V49.237z" })),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", { fill: "url(#wave-b)", fillRule: "evenodd", opacity: ".5", transform: "matrix(-1 0 0 1 172 -10)", xlinkHref: "#wave-a" })));
const AwardBox = ({ award }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: 'award-box ' + award.type },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Wave, null),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { className: "star", src: __webpack_require__(/*! ./star.svg */ "./src/components/pages/dashboard/awards/star.svg"), alt: "Star" }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "interval" }, INTERVAL_LABELS[award.days_interval] || award.days_interval),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "line" }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "amount" },
        award.amount,
        " Clips"),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "type" }, award.type[0].toUpperCase() + award.type.slice(1)),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "icon" }, { speak: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_4__["MicIcon"], null), listen: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_4__["PlayOutlineIcon"], null) }[award.type])));
function AwardsPage({ dashboardLocale }) {
    const account = Object(_hooks_store_hooks__WEBPACK_IMPORTED_MODULE_1__["useAccount"])();
    const api = Object(_hooks_store_hooks__WEBPACK_IMPORTED_MODULE_1__["useAPI"])();
    const refreshUser = Object(_hooks_store_hooks__WEBPACK_IMPORTED_MODULE_1__["useAction"])(_stores_user__WEBPACK_IMPORTED_MODULE_2__["User"].actions.refresh);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        api.seenAwards().then(() => {
            refreshUser();
        });
    }, []);
    if (!account) {
        return null;
    }
    const awards = account.awards.filter(a => !dashboardLocale || a.locale == dashboardLocale);
    if (awards.length == 0) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NoAwardsPage, Object.assign({}, { dashboardLocale }));
    }
    const buckets = awards.reduce((buckets, award) => {
        const bucket = buckets[award.days_interval];
        buckets[award.days_interval] = bucket ? [...bucket, award] : [award];
        return buckets;
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "award-lists" }, buckets.map((bucket, i) => bucket ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], { key: i },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, INTERVAL_LABELS[i] || i),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null, bucket.map((award, i) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](AwardBox, { key: i, award: award })))))) : null)));
}


/***/ }),

/***/ "./src/components/pages/dashboard/awards/star.svg":
/*!********************************************************!*\
  !*** ./src/components/pages/dashboard/awards/star.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6da66396a441e5698d0067a10c1ed2fe.svg";

/***/ }),

/***/ "./src/components/pages/dashboard/awards/stars.svg":
/*!*********************************************************!*\
  !*** ./src/components/pages/dashboard/awards/stars.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fe78694a26ed01b4d4f25c4d8d87c585.svg";

/***/ }),

/***/ "./src/components/pages/dashboard/dashboard.css":
/*!******************************************************!*\
  !*** ./src/components/pages/dashboard/dashboard.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/dashboard/dashboard.tsx":
/*!******************************************************!*\
  !*** ./src/components/pages/dashboard/dashboard.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dashboard; });
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "../node_modules/react-router/esm/react-router.js");
/* harmony import */ var _hooks_store_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/store-hooks */ "./src/hooks/store-hooks.ts");
/* harmony import */ var _hooks_use_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/use-router */ "./src/hooks/use-router.ts");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../urls */ "./src/urls.ts");
/* harmony import */ var _language_select_language_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../language-select/language-select */ "./src/components/language-select/language-select.tsx");
/* harmony import */ var _locale_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../locale-helpers */ "./src/components/locale-helpers.tsx");
/* harmony import */ var _stats_stats__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stats/stats */ "./src/components/pages/dashboard/stats/stats.tsx");
/* harmony import */ var _goals_goals__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./goals/goals */ "./src/components/pages/dashboard/goals/goals.tsx");
/* harmony import */ var _awards_awards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./awards/awards */ "./src/components/pages/dashboard/awards/awards.tsx");
/* harmony import */ var _dashboard_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard.css */ "./src/components/pages/dashboard/dashboard.css");
/* harmony import */ var _dashboard_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_dashboard_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _services_localization__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/localization */ "./src/services/localization.ts");














const TITLE_BAR_LOCALE_COUNT = 3;
const TopBar = ({ dashboardLocale }) => {
    const { history, location } = Object(_hooks_use_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
    const [, toLocaleRoute] = Object(_locale_helpers__WEBPACK_IMPORTED_MODULE_7__["useLocale"])();
    const account = Object(_hooks_store_hooks__WEBPACK_IMPORTED_MODULE_3__["useAccount"])();
    const [showTitleBarLocales, setShowTitleBarLocales] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
    function setLocale(value) {
        const pathParts = location.pathname.split('/');
        history.push([toLocaleRoute(_urls__WEBPACK_IMPORTED_MODULE_5__["default"].DASHBOARD), value, pathParts[pathParts.length - 1]]
            .filter(Boolean)
            .join('/'));
    }
    const unseenAwards = account
        ? account.awards.filter(a => !a.seen_at).length
        : 0;
    const locales = [''].concat((account ? account.locales : [])
        .map(({ locale }) => locale)
        .filter(l => Object(_locale_helpers__WEBPACK_IMPORTED_MODULE_7__["isContributable"])(l)));
    const titleBarLocales = showTitleBarLocales
        ? locales.slice(0, TITLE_BAR_LOCALE_COUNT)
        : [];
    const dropdownLocales = showTitleBarLocales
        ? locales.slice(TITLE_BAR_LOCALE_COUNT)
        : locales;
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
        const checkSize = () => {
            setShowTitleBarLocales(window.innerWidth > 992);
        };
        window.addEventListener('resize', checkSize);
        return () => {
            window.removeEventListener('resize', checkSize);
        };
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "top-bar" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("nav", null,
            [['stats', _urls__WEBPACK_IMPORTED_MODULE_5__["default"].STATS], ['goals', _urls__WEBPACK_IMPORTED_MODULE_5__["default"].GOALS]].map(([label, path]) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_locale_helpers__WEBPACK_IMPORTED_MODULE_7__["LocaleNavLink"], { key: path, to: _urls__WEBPACK_IMPORTED_MODULE_5__["default"].DASHBOARD +
                    (dashboardLocale ? '/' + dashboardLocale : '') +
                    path },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: label },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null))))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_locale_helpers__WEBPACK_IMPORTED_MODULE_7__["LocaleNavLink"], { to: _urls__WEBPACK_IMPORTED_MODULE_5__["default"].DASHBOARD +
                    (dashboardLocale ? '/' + dashboardLocale : '') +
                    _urls__WEBPACK_IMPORTED_MODULE_5__["default"].AWARDS },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "awards" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)),
                    ' ',
                    unseenAwards > 0 && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "badge" }, unseenAwards > 9 ? '9+' : unseenAwards))))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "languages" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "your-languages" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)),
                ":"),
            titleBarLocales.map(l => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { key: l },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "radio", name: "language", checked: l == dashboardLocale, onChange: () => setLocale(l) }),
                l ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, _services_localization__WEBPACK_IMPORTED_MODULE_12__["NATIVE_NAMES"][l])) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: _language_select_language_select__WEBPACK_IMPORTED_MODULE_6__["ALL_LOCALES"] },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)))))),
            dropdownLocales.length > 0 && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("select", { className: dropdownLocales.includes(dashboardLocale) ? 'selected' : '', name: "language", value: dashboardLocale, onChange: ({ target: { value } }) => {
                    if (value) {
                        setLocale(value);
                    }
                } },
                titleBarLocales.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "" }),
                dropdownLocales.map(l => l ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { key: l, value: l }, _services_localization__WEBPACK_IMPORTED_MODULE_12__["NATIVE_NAMES"][l])) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { key: _language_select_language_select__WEBPACK_IMPORTED_MODULE_6__["ALL_LOCALES"], id: l },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: l })))))))));
};
function DashboardContent({ Page, dashboardLocale, }) {
    const api = Object(_hooks_store_hooks__WEBPACK_IMPORTED_MODULE_3__["useAPI"])();
    const [allGoals, setAllGoals] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
        api.fetchGoals(dashboardLocale || null).then(setAllGoals);
    }, [dashboardLocale]);
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Page, Object.assign({}, { allGoals, dashboardLocale }));
}
const PAGES = [
    { subPath: _urls__WEBPACK_IMPORTED_MODULE_5__["default"].STATS, Page: _stats_stats__WEBPACK_IMPORTED_MODULE_8__["default"] },
    { subPath: _urls__WEBPACK_IMPORTED_MODULE_5__["default"].GOALS, Page: _goals_goals__WEBPACK_IMPORTED_MODULE_9__["default"] },
    { subPath: _urls__WEBPACK_IMPORTED_MODULE_5__["default"].AWARDS, Page: _awards_awards__WEBPACK_IMPORTED_MODULE_10__["default"] },
];
function Dashboard() {
    const { match } = Object(_hooks_use_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
    const account = Object(_hooks_store_hooks__WEBPACK_IMPORTED_MODULE_3__["useAccount"])();
    const [, toLocaleRoute] = Object(_locale_helpers__WEBPACK_IMPORTED_MODULE_7__["useLocale"])();
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
        if (!account) {
            sessionStorage.setItem('redirectURL', location.pathname);
            window.location.href = '/login';
        }
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "dashboard" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "inner" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_2__["Switch"], null,
                PAGES.map(({ subPath, Page }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], { key: subPath, exact: true, path: match.path + subPath, render: () => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](TopBar, { dashboardLocale: "" }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](DashboardContent, Object.assign({ dashboardLocale: "" }, { Page })))) }))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: match.path + '/:dashboardLocale', render: ({ match: { params: { dashboardLocale }, }, }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](TopBar, Object.assign({}, { dashboardLocale })),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_2__["Switch"], null,
                            PAGES.map(({ subPath, Page }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], { key: subPath, exact: true, path: match.path + '/' + dashboardLocale + subPath, render: () => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](DashboardContent, Object.assign({}, { dashboardLocale, Page }))) }))),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], { render: () => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: toLocaleRoute(_urls__WEBPACK_IMPORTED_MODULE_5__["default"].DASHBOARD + '/' + dashboardLocale + _urls__WEBPACK_IMPORTED_MODULE_5__["default"].STATS) })) })))) }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], { render: () => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: toLocaleRoute(_urls__WEBPACK_IMPORTED_MODULE_5__["default"].DASHBOARD + _urls__WEBPACK_IMPORTED_MODULE_5__["default"].STATS) })) })))));
}


/***/ }),

/***/ "./src/components/pages/dashboard/goals/custom-goal-steps.tsx":
/*!********************************************************************!*\
  !*** ./src/components/pages/dashboard/goals/custom-goal-steps.tsx ***!
  \********************************************************************/
/*! exports provided: ViewGoal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewGoal", function() { return ViewGoal; });
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../urls */ "./src/urls.ts");
/* harmony import */ var _hooks_store_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../hooks/store-hooks */ "./src/hooks/store-hooks.ts");
/* harmony import */ var _hooks_use_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../hooks/use-router */ "./src/hooks/use-router.ts");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utility */ "./src/utility.ts");
/* harmony import */ var _locale_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../locale-helpers */ "./src/components/locale-helpers.tsx");
/* harmony import */ var _share_modal_share_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../share-modal/share-modal */ "./src/components/share-modal/share-modal.tsx");
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/icons */ "./src/components/ui/icons.tsx");
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/ui */ "./src/components/ui/ui.tsx");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ui */ "./src/components/pages/dashboard/ui.tsx");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};












const Buttons = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object.assign({ className: "buttons padded" }, props),
        children,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "filler" })));
};
const ArrowButton = (props) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", Object.assign({ className: "arrow-button", type: 'button' }, props),
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_8__["ArrowLeft"], null)));
const CloseButton = (props) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", Object.assign({ type: 'button', className: "close-button" }, props),
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_8__["CrossIcon"], null)));
const ViewGoal = ({ locale, onNext, customGoal: { amount, current, days_interval }, }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "padded view-goal" },
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "top" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Custom Goals"),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "edit-button", type: "button", onClick: onNext },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_8__["PenIcon"], null))),
    Object.keys(current).map(key => {
        const value = current[key];
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: key, className: 'goal-box ' + key },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui__WEBPACK_IMPORTED_MODULE_10__["Fraction"], { numerator: value, denominator: amount }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "relative" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui__WEBPACK_IMPORTED_MODULE_10__["CircleProgress"], { value: value / amount }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "interval" }, days_interval == 7 ? 'Of weekly goal' : 'Of daily goal')),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_9__["LinkButton"], { className: "cta", rounded: true, absolute: true, to: '/' + locale + (key == 'speak' ? _urls__WEBPACK_IMPORTED_MODULE_2__["default"].SPEAK : _urls__WEBPACK_IMPORTED_MODULE_2__["default"].LISTEN) }, key[0].toUpperCase() + key.slice(1))));
    })));
/* harmony default export */ __webpack_exports__["default"] = ([
    Object(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["withLocalization"])(({ getString, dashboardLocale, nextButtonProps }) => {
        const { history } = Object(_hooks_use_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
        const [, toLocaleRoute] = Object(_locale_helpers__WEBPACK_IMPORTED_MODULE_6__["useLocale"])();
        const [locale, setLocale] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "text" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "build-custom-goal" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: dashboardLocale ? 'help-reach-hours' : 'help-reach-hours-general', "$hours": 10000, "$language": getString(dashboardLocale) },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "sub-head" }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "waves" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { className: "mars", src: "/img/mars.svg", alt: "Mars Robot" })),
            !dashboardLocale && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "select-wrap" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "request-language-form-language", attrs: { label: true } },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_9__["LabeledSelect"], { value: locale, onChange: (event) => setLocale(event.target.value) },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { key: "empty", value: "" }),
                        _locale_helpers__WEBPACK_IMPORTED_MODULE_6__["contributableLocales"].map(l => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: l },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { key: l, value: l })))))))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "set-a-goal" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_9__["Button"], Object.assign({ className: "get-started-button", rounded: true }, nextButtonProps, { disabled: !dashboardLocale && !locale, onClick: dashboardLocale
                        ? nextButtonProps.onClick
                        : () => {
                            history.push(toLocaleRoute(_urls__WEBPACK_IMPORTED_MODULE_2__["default"].DASHBOARD + '/' + locale + _urls__WEBPACK_IMPORTED_MODULE_2__["default"].GOALS + '?start'));
                        } })))));
    }),
    ({ closeButtonProps, currentFields, nextButtonProps }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "padded" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "What kind of goal do you want to build?"),
            currentFields),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Buttons, { style: { marginBottom: 20 } },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](CloseButton, Object.assign({}, closeButtonProps)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ArrowButton, Object.assign({}, nextButtonProps))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "waves" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { className: "mars", src: "/img/mars.svg", alt: "Mars Robot" }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "text" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "cant-decide" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h4", null)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "activity-needed-calculation", "$totalHours": 10000, "$periodMonths": 6, "$people": 1000, "$clipsPerDay": 45 },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null)))))),
    ({ closeButtonProps, completedFields, currentFields, nextButtonProps, state, }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "padded" },
            completedFields,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: state.daysInterval == 7 ? 'how-many-a-week' : 'how-many-per-day' },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null)),
            currentFields),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Buttons, null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](CloseButton, Object.assign({}, closeButtonProps)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ArrowButton, Object.assign({}, nextButtonProps))))),
    ({ closeButtonProps, completedFields, currentFields, nextButtonProps }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "padded" },
            completedFields,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "which-goal-type" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null)),
            currentFields),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Buttons, null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](CloseButton, Object.assign({}, closeButtonProps)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ArrowButton, Object.assign({}, nextButtonProps))))),
    ({ closeButtonProps, completedFields, nextButtonProps, subscribed, setSubscribed, }) => {
        const account = Object(_hooks_store_hooks__WEBPACK_IMPORTED_MODULE_3__["useAccount"])();
        const [privacyAgreed, setPrivacyAgreed] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
        const isSubscribed = Object(_hooks_store_hooks__WEBPACK_IMPORTED_MODULE_3__["useIsSubscribed"])();
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "padded" },
            completedFields,
            account.basket_token ? (isSubscribed !== null && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: isSubscribed
                        ? 'receiving-emails-info'
                        : 'not-receiving-emails-info', bold: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("b", null) },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "subscription-info" })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "manage-subscriptions", href: Object(_utility__WEBPACK_IMPORTED_MODULE_5__["getManageSubscriptionURL"])(account), target: "__blank", rel: "noopener noreferrer" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "manage-email-subscriptions" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_8__["SettingsIcon"], null))))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "box" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "checkbox", checked: subscribed, onChange: event => setSubscribed(event.target.checked) }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "email-opt-in-info" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "content" }))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "box" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "checkbox", checked: privacyAgreed, onChange: event => setPrivacyAgreed(event.target.checked) }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "content" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "accept-privacy", privacyLink: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_locale_helpers__WEBPACK_IMPORTED_MODULE_6__["LocaleLink"], { to: _urls__WEBPACK_IMPORTED_MODULE_2__["default"].PRIVACY, blank: true }) },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "read-terms-q" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_locale_helpers__WEBPACK_IMPORTED_MODULE_6__["LocaleLink"], { to: _urls__WEBPACK_IMPORTED_MODULE_2__["default"].TERMS, className: "terms", blank: true })))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Buttons, null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](CloseButton, Object.assign({}, closeButtonProps)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_9__["Button"], Object.assign({ rounded: true, className: "submit" }, nextButtonProps, { disabled: subscribed && !privacyAgreed }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_8__["CheckIcon"], null),
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "confirm-goal" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null))))));
    },
    Object(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["withLocalization"])(({ getString, nextButtonProps, state }) => {
        const [showShareModal, setShowShareModal] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
        const isWeekly = state.daysInterval == 7;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "padded" },
            showShareModal && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_share_modal_share_modal__WEBPACK_IMPORTED_MODULE_7__["default"], { title: getString('help-share-goal'), text: getString(isWeekly
                    ? 'share-n-weekly-contribution-goal'
                    : 'share-n-daily-contribution-goal', {
                    count: state.amount,
                    type: getString('share-goal-type-' + state.type),
                }), shareTextId: "goal-share-text", onRequestClose: () => {
                    setShowShareModal(false);
                    const { onClick } = nextButtonProps;
                    if (onClick) {
                        onClick();
                    }
                } })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "check" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "shadow" }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_8__["CheckIcon"], null)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: isWeekly ? 'weekly-goal-created' : 'daily-goal-created' },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "track-progress" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "return-to-edit-goal" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_9__["Button"], { rounded: true, className: "share-button", onClick: () => setShowShareModal(true) },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_8__["ShareIcon"], null),
                ' ',
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "share-goal" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](CloseButton, Object.assign({}, nextButtonProps))));
    }),
]);


/***/ }),

/***/ "./src/components/pages/dashboard/goals/custom-goal.css":
/*!**************************************************************!*\
  !*** ./src/components/pages/dashboard/goals/custom-goal.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/dashboard/goals/custom-goal.tsx":
/*!**************************************************************!*\
  !*** ./src/components/pages/dashboard/goals/custom-goal.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomGoal; });
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_store_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../hooks/store-hooks */ "./src/hooks/store-hooks.ts");
/* harmony import */ var _stores_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../stores/user */ "./src/stores/user.ts");
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../modal/modal */ "./src/components/modal/modal.tsx");
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/icons */ "./src/components/ui/icons.tsx");
/* harmony import */ var _custom_goal_steps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom-goal-steps */ "./src/components/pages/dashboard/goals/custom-goal-steps.tsx");
/* harmony import */ var _custom_goal_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-goal.css */ "./src/components/pages/dashboard/goals/custom-goal.css");
/* harmony import */ var _custom_goal_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_custom_goal_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_use_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../hooks/use-router */ "./src/hooks/use-router.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};










const STATE_KEYS = [
    null,
    'daysInterval',
    'amount',
    'type',
];
const STEPS = {
    INTRO: 0,
    EDIT_START: 1,
    SUBMIT: 4,
    COMPLETED: 5,
};
const Radio = (_a) => {
    var { children, onChecked } = _a, props = __rest(_a, ["children", "onChecked"]);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "box" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", Object.assign({ type: "radio", onChange: event => event.target.checked && onChecked && onChecked() }, props)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "content" }, children)));
};
function StepButtons({ setStepIndex, state, stepIndex, touchedStepIndex, }) {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "padded step-buttons" }, stepIndex > 0 &&
        stepIndex < 5 &&
        [...Array(4).keys()].map(i => {
            const n = i + 1;
            const isCompleted = state[STATE_KEYS[n]] != null && touchedStepIndex >= n;
            const isActive = n == stepIndex;
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], { key: i },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: [
                        'step-button',
                        isActive ? 'active' : '',
                        isCompleted ? 'completed' : '',
                    ].join(' ') },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { type: "button", onClick: () => setStepIndex(n), disabled: n > 1 && state[STATE_KEYS[n - 1]] == null }, n)),
                n < 4 && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'line ' + (isCompleted || isActive ? 'fill' : '') }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'line ' + (isCompleted ? 'fill' : '') })))));
        })));
}
function CompletedFields({ setStepIndex, state, states, stepIndex, }) {
    const completedStates = stepIndex > STEPS.SUBMIT ? [] : STATE_KEYS.slice(1, stepIndex);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "fields completed" }, completedStates.map(stateKey => {
        if (!states[stateKey])
            return null;
        const [labelId, value] = states[stateKey].find(([, value]) => value == state[stateKey]);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Radio, { key: stateKey, checked: true, disabled: true },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], Object.assign({}, (stateKey == 'amount'
                ? { id: 'n-clips', $count: value }
                : {
                    id: stateKey == 'type' && value == 'both'
                        ? 'both-speak-and-listen-long'
                        : labelId,
                })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { type: "button", onClick: () => setStepIndex(STATE_KEYS.findIndex(k => k == stateKey)) },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_5__["PenIcon"], null))));
    })));
}
function CurrentFields({ setState, state, states, stepIndex, }) {
    const currentStateKey = STATE_KEYS[stepIndex];
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "fields" }, (states[currentStateKey] || []).map(([labelId, value]) => value == null ? null : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Radio, { key: value, name: currentStateKey, checked: value == state[currentStateKey], onChecked: () => setState(Object.assign({}, state, { [currentStateKey]: value }, STATE_KEYS.slice(stepIndex + 1).reduce((obj, key) => {
            obj[key] = null;
            return obj;
        }, {}))) }, currentStateKey == 'amount' ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "n-clips", "$count": value },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: labelId },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "right" })))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: labelId },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null))))))));
}
function CustomGoal({ dashboardLocale, }) {
    const { history, location } = Object(_hooks_use_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
    const api = Object(_hooks_store_hooks__WEBPACK_IMPORTED_MODULE_2__["useAPI"])();
    const account = Object(_hooks_store_hooks__WEBPACK_IMPORTED_MODULE_2__["useAccount"])();
    const { custom_goals, email } = account;
    const customGoal = custom_goals.find(g => g.locale == dashboardLocale);
    const refreshUser = Object(_hooks_store_hooks__WEBPACK_IMPORTED_MODULE_2__["useAction"])(_stores_user__WEBPACK_IMPORTED_MODULE_3__["User"].actions.refresh);
    const saveAccount = Object(_hooks_store_hooks__WEBPACK_IMPORTED_MODULE_2__["useAction"])(_stores_user__WEBPACK_IMPORTED_MODULE_3__["User"].actions.saveAccount);
    const hasStartParam = location.search.includes('start');
    const [stepIndex, setStepIndex] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(!customGoal && hasStartParam ? STEPS.EDIT_START : STEPS.INTRO);
    if (hasStartParam) {
        history.replace(location.pathname);
    }
    const [touchedStepIndex, setTouchedStepIndex] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(STEPS.INTRO);
    const [subscribed, setSubscribed] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
    const initialState = customGoal
        ? {
            daysInterval: customGoal.days_interval,
            amount: customGoal.amount,
            type: Object.keys(customGoal.current).length == 1
                ? Object.keys(customGoal.current)[0]
                : 'both',
        }
        : {
            daysInterval: null,
            amount: null,
            type: null,
        };
    const [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialState);
    const [showOverwriteModal, setShowOverwriteModal] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
    const [showAbortEditModal, setShowAbortEditModal] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
    const Step = _custom_goal_steps__WEBPACK_IMPORTED_MODULE_6__["default"][stepIndex];
    const states = {
        daysInterval: [['daily-goal', 1], ['weekly-goal', 7]],
        amount: [['easy', 15], ['average', 30], ['difficult', 45], ['pro', 60]].map(([labelId, value]) => [
            labelId + '-difficulty',
            (state.daysInterval || 0) * value,
        ]),
        type: [
            ['speak', 'speak'],
            ['listen', 'listen'],
            ['both-speak-and-listen', 'both'],
        ],
    };
    function handleNext(confirmed = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const nextIndex = (stepIndex + 1) % _custom_goal_steps__WEBPACK_IMPORTED_MODULE_6__["default"].length;
            if (customGoal && !confirmed && nextIndex == STEPS.EDIT_START) {
                setShowOverwriteModal(true);
                return;
            }
            setStepIndex(nextIndex);
            setTouchedStepIndex(Math.max(touchedStepIndex, nextIndex));
            if (nextIndex == STEPS.COMPLETED) {
                setTouchedStepIndex(STEPS.INTRO);
                yield api.createGoal(dashboardLocale, state);
                if (!account.locales.some(l => l.locale == dashboardLocale)) {
                    yield saveAccount(Object.assign({}, account, { locales: account.locales.concat({
                            locale: dashboardLocale,
                            accent: '',
                        }) }));
                }
                if (subscribed) {
                    yield api.subscribeToNewsletter(email);
                }
                refreshUser();
            }
        });
    }
    const showViewGoal = stepIndex == STEPS.INTRO && customGoal;
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'custom-goal ' + (showViewGoal ? '' : 'step-' + stepIndex) },
        showOverwriteModal && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_modal_modal__WEBPACK_IMPORTED_MODULE_4__["default"], { buttons: {
                Cancel: () => setShowOverwriteModal(false),
                Yes: () => {
                    setShowOverwriteModal(false);
                    handleNext(true);
                },
            }, onRequestClose: () => setShowOverwriteModal(false) },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "lose-goal-progress-warning" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "want-to-continue" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)))),
        showAbortEditModal && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_modal_modal__WEBPACK_IMPORTED_MODULE_4__["default"], { buttons: {
                Exit: () => setShowAbortEditModal(false),
                Yes: () => {
                    setShowAbortEditModal(false);
                    setState(initialState);
                    setTouchedStepIndex(STEPS.INTRO);
                    setStepIndex(STEPS.INTRO);
                },
            }, onRequestClose: () => setShowAbortEditModal(false) },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "finish-editing" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "lose-changes-warning" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StepButtons, Object.assign({ setStepIndex: i => {
                setTouchedStepIndex(Math.max(touchedStepIndex, i));
                setStepIndex(i);
            } }, { state, stepIndex, touchedStepIndex })),
        showViewGoal ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_custom_goal_steps__WEBPACK_IMPORTED_MODULE_6__["ViewGoal"], { locale: dashboardLocale, onNext: () => handleNext(), customGoal: customGoal })) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Step, Object.assign({ closeButtonProps: {
                onClick: () => {
                    setShowAbortEditModal(true);
                },
                style: customGoal ? {} : { visibility: 'hidden' },
            }, completedFields: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](CompletedFields, Object.assign({}, { setStepIndex, state, states, stepIndex })), currentFields: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](CurrentFields, Object.assign({}, { setState, state, states, stepIndex })), nextButtonProps: {
                disabled: stepIndex > STEPS.INTRO &&
                    stepIndex < STEPS.SUBMIT &&
                    state[STATE_KEYS[stepIndex]] == null,
                onClick: () => handleNext(),
            }, state: state }, { dashboardLocale, subscribed, setSubscribed })))));
}


/***/ }),

/***/ "./src/components/pages/dashboard/goals/goal-row.css":
/*!***********************************************************!*\
  !*** ./src/components/pages/dashboard/goals/goal-row.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/dashboard/goals/goal-row.tsx":
/*!***********************************************************!*\
  !*** ./src/components/pages/dashboard/goals/goal-row.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GoalRow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _goal_row_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goal-row.css */ "./src/components/pages/dashboard/goals/goal-row.css");
/* harmony import */ var _goal_row_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_goal_row_css__WEBPACK_IMPORTED_MODULE_2__);



const Wave = () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { width: "160", height: "70", viewBox: "0 0 160 70" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("linearGradient", { id: "wave-b", x1: "50%", x2: "50%", y1: "100%", y2: "0%" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("stop", { offset: "0%", stopColor: "#FF4F5E", stopOpacity: "0" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("stop", { offset: "100%", stopColor: "rgba(0,0,0,.4)" })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { id: "wave-a", d: "M0 45.229c21.074-18.809 28.61-2.594 54.87-2.594C83.025 42.635 86.378 21 111.59 21c27.04 0 29.061 20.902 48.41 24.229V91H0V45.229z" })),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", { fill: "url(#wave-b)", fillRule: "evenodd", opacity: ".5", style: { mixBlendMode: 'multiply' }, transform: "matrix(-1 0 0 1 160 -21)", xlinkHref: "#wave-a" })));
const GoalBox = ({ date, goal, isNext, type, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'goal-box ' + type + (date ? ' done' : '') },
    (date || isNext) && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Wave, null),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "goal" }, goal),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", null),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_1__["Localized"], { id: {
            streaks: 'days',
            clips: 'recordings',
            votes: 'validations',
        }[type], "$count": goal },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "unit" })),
    date && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "date" }, new Date(date).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })))));
function GoalRow({ goalInfo: [type, [current, goals]], }) {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "goal-row" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_1__["Localized"], { id: { clips: 'speak', votes: 'listen' }[type] || type },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "goal-boxes" }, goals.map((goal, i) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](GoalBox, Object.assign({ key: i }, goal, { type: type, isNext: (goals[i - 1] || {}).date })))))));
}


/***/ }),

/***/ "./src/components/pages/dashboard/goals/goals.css":
/*!********************************************************!*\
  !*** ./src/components/pages/dashboard/goals/goals.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/dashboard/goals/goals.tsx":
/*!********************************************************!*\
  !*** ./src/components/pages/dashboard/goals/goals.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _custom_goal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-goal */ "./src/components/pages/dashboard/goals/custom-goal.tsx");
/* harmony import */ var _goal_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goal-row */ "./src/components/pages/dashboard/goals/goal-row.tsx");
/* harmony import */ var _goals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./goals.css */ "./src/components/pages/dashboard/goals/goals.css");
/* harmony import */ var _goals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_goals_css__WEBPACK_IMPORTED_MODULE_3__);




const GoalsPage = ({ allGoals, dashboardLocale }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "goals-inner" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "goal-rows" }, allGoals &&
        Object.entries(allGoals.globalGoals).map((goalInfo, i) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_goal_row__WEBPACK_IMPORTED_MODULE_2__["default"], { key: i, goalInfo: goalInfo })))),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_custom_goal__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({ key: dashboardLocale }, { dashboardLocale }))));
/* harmony default export */ __webpack_exports__["default"] = (GoalsPage);


/***/ }),

/***/ "./src/components/pages/dashboard/stats/contribution-activity.tsx":
/*!************************************************************************!*\
  !*** ./src/components/pages/dashboard/stats/contribution-activity.tsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _plot_plot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../plot/plot */ "./src/components/plot/plot.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class ContributionActivity extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super(...arguments);
        this.state = { data: [] };
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            const { api, from, locale } = this.props;
            yield this.setState({
                data: yield api.fetchContributionActivity(from, locale),
            });
        });
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plot_plot__WEBPACK_IMPORTED_MODULE_2__["BarPlot"], { data: this.state.data });
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(({ api }) => ({ api }))(ContributionActivity));


/***/ }),

/***/ "./src/components/pages/dashboard/stats/leaderboard-card.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/pages/dashboard/stats/leaderboard-card.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LeaderboardCard; });
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_store_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../hooks/store-hooks */ "./src/hooks/store-hooks.ts");
/* harmony import */ var _services_tracker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/tracker */ "./src/services/tracker.ts");
/* harmony import */ var _stores_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../stores/user */ "./src/stores/user.ts");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../urls */ "./src/urls.ts");
/* harmony import */ var _locale_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../locale-helpers */ "./src/components/locale-helpers.tsx");
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/icons */ "./src/components/ui/icons.tsx");
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/ui */ "./src/components/ui/ui.tsx");
/* harmony import */ var _stats_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stats-card */ "./src/components/pages/dashboard/stats/stats-card.tsx");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../utility */ "./src/utility.ts");
/* harmony import */ var _leaderboard_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./leaderboard.css */ "./src/components/pages/dashboard/stats/leaderboard.css");
/* harmony import */ var _leaderboard_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_leaderboard_css__WEBPACK_IMPORTED_MODULE_12__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};














const Lottie = Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-lottie */ "../node_modules/react-lottie/dist/index.js", 7)));
const animationData = __webpack_require__(/*! ../../../layout/data.json */ "./src/components/layout/data.json");

const FETCH_SIZE = 5;
function formatNumber(n) {
    return n > 1000 ? Math.floor(n / 1000) + 'k' : n;
}
const FetchRow = (props) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { className: "more" },
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", Object.assign({}, props),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, "..."))));
const RateColumn = Object(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["withLocalization"])(({ getString, value }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "rate" },
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "exact" }, value == null ? getString('not-available-abbreviation') : value),
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "rounded" }, value == null
        ? getString('not-available-abbreviation')
        : Math.round(value)),
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "percent" }, '%'))));
class UnconnectedLeaderboard extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            rows: [],
            isAtEnd: false,
            playingClipIndex: null,
        };
        this.audioRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        this.scroller = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        this.youRow = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        this.playAvatarClip = function (clipUrl, position, self) {
            const { locale } = this.props;
            Object(_services_tracker__WEBPACK_IMPORTED_MODULE_4__["trackVoiceAvatar"])(self ? 'self-listen' : 'listen', locale);
            if (this.state.playingClipIndex === null) {
                this.setState({ playingClipIndex: position });
                this.audioRef.current.src = clipUrl;
                this.audioRef.current.play();
            }
            else {
                this.audioRef.current.pause();
                this.audioRef.current.currentTime = 0;
                this.setState({ playingClipIndex: null });
            }
        };
        this.scrollToUser = () => {
            const row = this.youRow.current;
            if (!row)
                return;
            const scroller = this.scroller.current;
            scroller.scrollTop = row.offsetTop - scroller.offsetTop;
            this.updateScrollIndicator();
        };
        this.updateScrollIndicator = () => {
            const SIZE = 32;
            const el = this.scroller.current;
            el.style.setProperty('--before-height', Math.min(el.scrollTop, SIZE) + 'px');
            el.style.setProperty('--after-height', Math.min(el.scrollHeight - el.scrollTop - el.clientHeight, SIZE) + 'px');
        };
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            const { api, locale, type } = this.props;
            this.setState({
                rows: yield api.forLocale(locale).fetchLeaderboard(type),
            }, this.scrollToUser);
        });
    }
    fetchMore(cursor) {
        return __awaiter(this, void 0, void 0, function* () {
            const { api, globalLocale, locale, type } = this.props;
            Object(_services_tracker__WEBPACK_IMPORTED_MODULE_4__["trackDashboard"])('leaderboard-load-more', globalLocale);
            const newRows = yield api.forLocale(locale).fetchLeaderboard(type, cursor);
            this.setState(({ rows }) => {
                const allRows = [
                    ...newRows,
                    ...rows.filter(r1 => !newRows.find((r2) => r1.clientHash == r2.clientHash)),
                ];
                allRows.sort((r1, r2) => (r1.position > r2.position ? 1 : -1));
                return {
                    rows: allRows,
                    isAtEnd: newRows.length == 0,
                };
            }, () => {
                this.updateScrollIndicator();
            });
        });
    }
    render() {
        const { rows, isAtEnd, playingClipIndex } = this.state;
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
            },
        };
        const items = rows.map((row, i) => {
            const prevPosition = i > 0 ? rows[i - 1].position : null;
            const nextPosition = i < rows.length - 1 ? rows[i + 1].position : isAtEnd ? 0 : Infinity;
            return [
                prevPosition && prevPosition + 1 < row.position ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](FetchRow, { key: row.position + 'prev', onClick: () => this.fetchMore([
                        Math.max(prevPosition + 1, row.position - FETCH_SIZE),
                        row.position,
                    ]) })) : null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: row.position, className: 'row ' + (row.you ? 'you' : ''), ref: row.you ? this.youRow : null },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "position" },
                        row.position < 9 && '0',
                        row.position + 1),
                    !Object(_utility__WEBPACK_IMPORTED_MODULE_11__["isProduction"])() ? (row.avatarClipUrl === null ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "avatar-container" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_9__["Avatar"], { url: row.avatar_url }))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("audio", { preload: "auto", ref: this.audioRef, onEnded: () => this.setState({ playingClipIndex: null }), onError: () => this.setState({ playingClipIndex: null }) }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "avatar-container", title: "Click to play avatar", onMouseEnter: () => this.playAvatarClip(row.avatarClipUrl, row.position, row.you), onMouseLeave: () => this.playAvatarClip(row.avatarClipUrl, row.position, row.you), onClick: () => this.playAvatarClip(row.avatarClipUrl, row.position, row.you) },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_9__["Avatar"], { url: row.avatar_url })))))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "avatar-container" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_9__["Avatar"], { url: row.avatar_url }))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "username", title: row.username },
                        row.username || '???',
                        row.you && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                            ' (',
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "you" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)),
                            ")"))),
                    playingClipIndex === row.position && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "lottie" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], { fallback: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null) },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "animation" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Lottie, { options: defaultOptions, eventListeners: [], height: 80, width: 250 }))),
                        ' ')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "total", title: row.total },
                        this.props.type == 'clip' ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_8__["MicIcon"], null)) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_8__["OldPlayIcon"], { className: "play" })),
                        formatNumber(row.total)),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "valid", title: row.valid },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_8__["CheckIcon"], null),
                        formatNumber(row.valid)),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](RateColumn, { value: row.rate })),
                nextPosition &&
                    nextPosition - 1 > row.position &&
                    nextPosition - FETCH_SIZE > row.position ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](FetchRow, { key: row.position + 'next', onClick: () => this.fetchMore([
                        row.position + 1,
                        Math.min(row.position + 1 + FETCH_SIZE, nextPosition - 1),
                    ]) })) : null,
            ];
        });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", { className: "leaderboard", ref: this.scroller, onScroll: this.updateScrollIndicator }, items));
    }
}
const Leaderboard = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(({ api, locale }) => ({
    api,
    globalLocale: locale,
}), null, null, { forwardRef: true })(UnconnectedLeaderboard);
const FilledCheckIcon = () => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "filled-check" },
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_8__["CheckIcon"], null)));
const Percentage = () => react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "percent" }, "%");
function LeaderboardCard() {
    const account = Object(_hooks_store_hooks__WEBPACK_IMPORTED_MODULE_3__["useAccount"])();
    const saveAccount = Object(_hooks_store_hooks__WEBPACK_IMPORTED_MODULE_3__["useAction"])(_stores_user__WEBPACK_IMPORTED_MODULE_5__["User"].actions.saveAccount);
    const [showInfo, setShowInfo] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
    const [showOverlay, setShowOverlay] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
    const leaderboardRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_stats_card__WEBPACK_IMPORTED_MODULE_10__["default"], { key: "leaderboard", className: 'leaderboard-card ' + (showOverlay ? 'has-overlay' : ''), title: "top-contributors", iconButtons: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "icon-buttons" },
            Boolean(account.visible) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { type: "button", onClick: () => {
                        leaderboardRef.current.scrollToUser();
                    } },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_8__["BookmarkIcon"], null),
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "show-ranking" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "text" }))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "icon-divider" }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { type: "button", onClick: () => setShowOverlay(true) },
                account.visible ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_8__["EyeIcon"], null) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_8__["EyeOffIcon"], null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "set-visibility" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "text" }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "icon-divider" }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "leaderboard-info", onMouseEnter: () => setShowInfo(true), onMouseLeave: () => setShowInfo(false) },
                showInfo && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "info-menu" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", null, [
                        { Icon: _ui_icons__WEBPACK_IMPORTED_MODULE_8__["MicIcon"], label: 'speak-goal-text' },
                        { Icon: _ui_icons__WEBPACK_IMPORTED_MODULE_8__["PlayOutlineIcon"], label: 'listen-goal-text' },
                        { Icon: FilledCheckIcon, label: 'total-approved' },
                        { Icon: Percentage, label: 'overall-accuracy' },
                    ].map(({ Icon, label }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: label },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "icon" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Icon, null)),
                        ' ',
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: label },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)))))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { height: 10 } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "triangle" })))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: showInfo ? 'active' : '', style: { display: 'flex' }, onClick: () => setShowInfo(!showInfo), type: "button" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_8__["InfoIcon"], null)))), overlay: showOverlay && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "leaderboard-overlay" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "close-overlay", type: "button", onClick: () => setShowOverlay(false) },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_8__["CrossIcon"], null)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_locale_helpers__WEBPACK_IMPORTED_MODULE_7__["LocalizedGetAttribute"], { id: "leaderboard-visibility", attribute: "label" }, label => react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, label)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_9__["Toggle"], { offText: "hidden", onText: "visible", defaultChecked: Boolean(account.visible), onChange: (event) => {
                    saveAccount({ visible: event.target.checked });
                } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "visibility-explainer", "$minutes": 20 },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "explainer" })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "info" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_8__["InfoIcon"], null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "visibility-overlay-note", profileLink: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_locale_helpers__WEBPACK_IMPORTED_MODULE_7__["LocaleLink"], { to: _urls__WEBPACK_IMPORTED_MODULE_6__["default"].PROFILE_INFO }) },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "note" }))))), tabs: {
            'recorded-clips': ({ locale }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Leaderboard, { key: 'c' + locale, locale: locale, type: "clip", ref: leaderboardRef })),
            'validated-clips': ({ locale }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Leaderboard, { key: 'v' + locale, locale: locale, type: "vote", ref: leaderboardRef })),
        } }));
}


/***/ }),

/***/ "./src/components/pages/dashboard/stats/leaderboard.css":
/*!**************************************************************!*\
  !*** ./src/components/pages/dashboard/stats/leaderboard.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/dashboard/stats/progress-card.css":
/*!****************************************************************!*\
  !*** ./src/components/pages/dashboard/stats/progress-card.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/dashboard/stats/progress-card.tsx":
/*!****************************************************************!*\
  !*** ./src/components/pages/dashboard/stats/progress-card.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProgressCard; });
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../constants */ "./src/constants.ts");
/* harmony import */ var _hooks_store_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../hooks/store-hooks */ "./src/hooks/store-hooks.ts");
/* harmony import */ var _services_tracker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/tracker */ "./src/services/tracker.ts");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../urls */ "./src/urls.ts");
/* harmony import */ var _locale_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../locale-helpers */ "./src/components/locale-helpers.tsx");
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/icons */ "./src/components/ui/icons.tsx");
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/ui */ "./src/components/ui/ui.tsx");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui */ "./src/components/pages/dashboard/ui.tsx");
/* harmony import */ var _progress_card_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./progress-card.css */ "./src/components/pages/dashboard/stats/progress-card.css");
/* harmony import */ var _progress_card_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_progress_card_css__WEBPACK_IMPORTED_MODULE_10__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};












function ProgressCard({ locale, personalCurrent, personalGoal, type, }) {
    const [globalLocale] = Object(_locale_helpers__WEBPACK_IMPORTED_MODULE_6__["useLocale"])();
    const { custom_goals: customGoals } = Object(_hooks_store_hooks__WEBPACK_IMPORTED_MODULE_3__["useAccount"])();
    let api = Object(_hooks_store_hooks__WEBPACK_IMPORTED_MODULE_3__["useAPI"])();
    const [overallCurrent, setOverallCurrent] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
    function fetchAndSetOverallCount() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!locale) {
                Object(_services_tracker__WEBPACK_IMPORTED_MODULE_4__["trackDashboard"])('change-language', globalLocale);
            }
            api = api.forLocale(locale || null);
            setOverallCurrent(yield (type === 'speak'
                ? api.fetchDailyClipsCount()
                : api.fetchDailyVotesCount()));
        });
    }
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
        fetchAndSetOverallCount();
    }, []);
    const overallGoal = _constants__WEBPACK_IMPORTED_MODULE_2__["DAILY_GOAL"][type];
    const isSpeak = type == 'speak';
    const customGoal = customGoals.find(g => g.locale == locale);
    const currentCustomGoal = customGoal ? customGoal.current[type] : undefined;
    const hasCustomGoalForThis = currentCustomGoal !== undefined;
    const goalsPath = _urls__WEBPACK_IMPORTED_MODULE_5__["default"].DASHBOARD + (locale ? '/' + locale : '') + _urls__WEBPACK_IMPORTED_MODULE_5__["default"].GOALS;
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'progress-card ' + type },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "personal" },
            hasCustomGoalForThis ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui__WEBPACK_IMPORTED_MODULE_9__["Fraction"], { numerator: currentCustomGoal, denominator: customGoal.amount })) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui__WEBPACK_IMPORTED_MODULE_9__["Fraction"], { numerator: typeof personalCurrent == 'number' ? personalCurrent : '?', denominator: (personalGoal == Infinity ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "infinity" }, "\u221E")) : (personalGoal)) || '?' })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: isSpeak ? 'clips-you-recorded' : 'clips-you-validated' },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "description" })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "custom-goal-section" }, customGoal && hasCustomGoalForThis ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_locale_helpers__WEBPACK_IMPORTED_MODULE_6__["LocaleLink"], { className: "custom-goal-link", to: goalsPath },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui__WEBPACK_IMPORTED_MODULE_9__["CircleProgress"], { value: currentCustomGoal / customGoal.amount }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "custom-goal-text" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "toward-next-goal" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null))))) : (!customGoal && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "create-custom-goal" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_8__["LinkButton"], { className: "custom-goal-button", rounded: true, to: goalsPath })))))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "progress-wrap" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "progress" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "icon-wrap" }, isSpeak ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_7__["MicIcon"], null)) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_7__["OldPlayIcon"], { style: { position: 'relative', left: 3 } }))))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "overall" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui__WEBPACK_IMPORTED_MODULE_9__["Fraction"], { numerator: overallCurrent == null ? '?' : overallCurrent, denominator: overallGoal }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: isSpeak ? 'todays-recorded-progress' : 'todays-validated-progress' },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "description" })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "help-reach-goal", "$goal": overallGoal },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_8__["LinkButton"], { rounded: true, outline: true, absolute: true, to: Object(_locale_helpers__WEBPACK_IMPORTED_MODULE_6__["toLocaleRouteBuilder"])(locale || globalLocale)(isSpeak ? _urls__WEBPACK_IMPORTED_MODULE_5__["default"].SPEAK : _urls__WEBPACK_IMPORTED_MODULE_5__["default"].LISTEN), onClick: () => Object(_services_tracker__WEBPACK_IMPORTED_MODULE_4__["trackDashboard"])(isSpeak ? 'speak-cta' : 'listen-cta', globalLocale) })))));
}


/***/ }),

/***/ "./src/components/pages/dashboard/stats/stats-card.css":
/*!*************************************************************!*\
  !*** ./src/components/pages/dashboard/stats/stats-card.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/dashboard/stats/stats-card.tsx":
/*!*************************************************************!*\
  !*** ./src/components/pages/dashboard/stats/stats-card.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StatsCard; });
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _language_select_language_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../language-select/language-select */ "./src/components/language-select/language-select.tsx");
/* harmony import */ var _stats_card_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stats-card.css */ "./src/components/pages/dashboard/stats/stats-card.css");
/* harmony import */ var _stats_card_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stats_card_css__WEBPACK_IMPORTED_MODULE_3__);





function StatsCard({ className, title, iconButtons, overlay, tabs, }) {
    const [locale, setLocale] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_language_select_language_select__WEBPACK_IMPORTED_MODULE_2__["ALL_LOCALES"]);
    const [selectedTab, setSelectedTab] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object.keys(tabs)[0]);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'stats-card ' + (className || '') },
        overlay,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "stats-card__inner" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "title-and-icon" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: title },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null)),
                iconButtons),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "filters" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "tabs" }, Object.keys(tabs).map(label => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { key: label, id: label },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { type: "button", className: label == selectedTab ? 'selected' : '', onClick: () => setSelectedTab(label) }))))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_language_select_language_select__WEBPACK_IMPORTED_MODULE_2__["default"], { value: locale, onChange: setLocale })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "content" }, tabs[selectedTab]({ locale: locale == _language_select_language_select__WEBPACK_IMPORTED_MODULE_2__["ALL_LOCALES"] ? null : locale })))));
}


/***/ }),

/***/ "./src/components/pages/dashboard/stats/stats.css":
/*!********************************************************!*\
  !*** ./src/components/pages/dashboard/stats/stats.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/dashboard/stats/stats.tsx":
/*!********************************************************!*\
  !*** ./src/components/pages/dashboard/stats/stats.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contribution_activity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contribution-activity */ "./src/components/pages/dashboard/stats/contribution-activity.tsx");
/* harmony import */ var _leaderboard_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leaderboard-card */ "./src/components/pages/dashboard/stats/leaderboard-card.tsx");
/* harmony import */ var _progress_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progress-card */ "./src/components/pages/dashboard/stats/progress-card.tsx");
/* harmony import */ var _stats_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stats-card */ "./src/components/pages/dashboard/stats/stats-card.tsx");
/* harmony import */ var _stats_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stats.css */ "./src/components/pages/dashboard/stats/stats.css");
/* harmony import */ var _stats_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_stats_css__WEBPACK_IMPORTED_MODULE_5__);






const StatsPage = ({ allGoals, dashboardLocale }) => allGoals ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "stats-page" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "cards" }, ['speak', 'listen'].map(type => {
        const [current, goals] = allGoals.globalGoals[type == 'speak' ? 'clips' : 'votes'];
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_progress_card__WEBPACK_IMPORTED_MODULE_3__["default"], { key: type + dashboardLocale, type: type, locale: dashboardLocale, personalCurrent: current, personalGoal: allGoals
                ? (goals.find(g => !g.date) || { goal: Infinity }).goal
                : null }));
    })),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "cards" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_stats_card__WEBPACK_IMPORTED_MODULE_4__["default"], { key: "contribution", title: "contribution-activity", tabs: ['you', 'everyone'].reduce((o, from) => (Object.assign({}, o, { [from]: ({ locale }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_contribution_activity__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({ key: locale + from }, { from, locale }))) })), {}) }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_leaderboard_card__WEBPACK_IMPORTED_MODULE_2__["default"], null)))) : null;
/* harmony default export */ __webpack_exports__["default"] = (StatsPage);


/***/ }),

/***/ "./src/components/pages/dashboard/ui.css":
/*!***********************************************!*\
  !*** ./src/components/pages/dashboard/ui.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/dashboard/ui.tsx":
/*!***********************************************!*\
  !*** ./src/components/pages/dashboard/ui.tsx ***!
  \***********************************************/
/*! exports provided: Fraction, CircleProgress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fraction", function() { return Fraction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleProgress", function() { return CircleProgress; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.css */ "./src/components/pages/dashboard/ui.css");
/* harmony import */ var _ui_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ui_css__WEBPACK_IMPORTED_MODULE_1__);


function Fraction({ numerator, denominator, }) {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "fraction" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "numerator" }, numerator),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "denominator" },
            ' / ',
            denominator)));
}
const RADIUS = 32;
const STROKE = 2;
const CENTER = RADIUS + STROKE;
const Circle = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", Object.assign({ strokeWidth: STROKE, r: RADIUS, cx: CENTER, cy: CENTER, fill: "transparent" }, props)));
const CIRCUM = 2 * Math.PI * RADIUS;
function CircleProgress({ value }) {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "circle-progress" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Circle, null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Circle, { className: "progress-circle", strokeDasharray: CIRCUM, strokeDashoffset: CIRCUM * Math.max(1 - value, 0) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("text", { x: CENTER, y: CENTER, textAnchor: "middle", dominantBaseline: "central" },
                Math.round(100 * value),
                "%"))));
}


/***/ }),

/***/ "./src/components/share-modal/share-modal.css":
/*!****************************************************!*\
  !*** ./src/components/share-modal/share-modal.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/share-modal/share-modal.tsx":
/*!****************************************************!*\
  !*** ./src/components/share-modal/share-modal.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal/modal */ "./src/components/modal/modal.tsx");
/* harmony import */ var _share_buttons_share_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../share-buttons/share-buttons */ "./src/components/share-buttons/share-buttons.tsx");
/* harmony import */ var _share_modal_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./share-modal.css */ "./src/components/share-modal/share-modal.css");
/* harmony import */ var _share_modal_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_share_modal_css__WEBPACK_IMPORTED_MODULE_4__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};





/* harmony default export */ __webpack_exports__["default"] = ((_a) => {
    var { shareTextId, title, text } = _a, props = __rest(_a, ["shareTextId", "title", "text"]);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_modal_modal__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({ innerClassName: "share-modal" }, props),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "image-container" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { className: "mars", src: "/img/mars.svg", alt: "Robot" })),
        title ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null, title)) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "share-title-new", bold: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("b", null) },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null))),
        text && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, text),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "share-buttons" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_share_buttons_share_buttons__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, { shareTextId })))));
});


/***/ }),

/***/ "./src/hooks/use-router.ts":
/*!*********************************!*\
  !*** ./src/hooks/use-router.ts ***!
  \*********************************/
/*! exports provided: useRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRouter", function() { return useRouter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "../node_modules/react-router/esm/react-router.js");


function useRouter() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(react_router__WEBPACK_IMPORTED_MODULE_1__["__RouterContext"]);
}


/***/ })

}]);
//# sourceMappingURL=9.bundle.js.map