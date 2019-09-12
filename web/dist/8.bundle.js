(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./src/components/pages/datasets/circle-stats.css":
/*!********************************************************!*\
  !*** ./src/components/pages/datasets/circle-stats.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/datasets/circle-stats.tsx":
/*!********************************************************!*\
  !*** ./src/components/pages/datasets/circle-stats.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/icons */ "./src/components/ui/icons.tsx");
/* harmony import */ var _dots__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dots */ "./src/components/pages/datasets/dots.tsx");
/* harmony import */ var _circle_stats_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./circle-stats.css */ "./src/components/pages/datasets/circle-stats.css");
/* harmony import */ var _circle_stats_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_circle_stats_css__WEBPACK_IMPORTED_MODULE_4__);
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





const CircleStat = (_a) => {
    var { className, label, value, icon } = _a, props = __rest(_a, ["className", "label", "value", "icon"]);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object.assign({ className: 'circle-stat ' + (className || '') }, props),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_dots__WEBPACK_IMPORTED_MODULE_3__["default"], { style: { width: 70 } }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "text" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: label },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "label" })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "value" }, value)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "circle" }, icon)));
};
/* harmony default export */ __webpack_exports__["default"] = ((_a) => {
    var { className, valid, total, languages } = _a, props = __rest(_a, ["className", "valid", "total", "languages"]);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object.assign({ className: 'circle-stats ' + className }, props),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](CircleStat, { className: "valid-hours", label: "validated-hours", value: valid, icon: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_2__["PlayOutlineIcon"], null) }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](CircleStat, { className: "total-hours", label: "recorded-hours", value: total, icon: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_2__["MicIcon"], null) }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](CircleStat, { className: "languages", label: "languages", value: languages, icon: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_2__["GlobeIcon"], null) })));
});


/***/ }),

/***/ "./src/components/pages/datasets/dataset-info.css":
/*!********************************************************!*\
  !*** ./src/components/pages/datasets/dataset-info.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/datasets/dataset-info.tsx":
/*!********************************************************!*\
  !*** ./src/components/pages/datasets/dataset-info.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _stores_demographics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../stores/demographics */ "./src/stores/demographics.ts");
/* harmony import */ var _locale_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../locale-helpers */ "./src/components/locale-helpers.tsx");
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/icons */ "./src/components/ui/icons.tsx");
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/ui */ "./src/components/ui/ui.tsx");
/* harmony import */ var _circle_stats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./circle-stats */ "./src/components/pages/datasets/circle-stats.tsx");
/* harmony import */ var _stats__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stats */ "./src/components/pages/datasets/stats.ts");
/* harmony import */ var _dataset_info_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dataset-info.css */ "./src/components/pages/datasets/dataset-info.css");
/* harmony import */ var _dataset_info_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_dataset_info_css__WEBPACK_IMPORTED_MODULE_9__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};











const msToHours = (ms) => Math.floor(ms / 1000 / 60 / 60);
const validHours = Object.entries(_stats__WEBPACK_IMPORTED_MODULE_8__["default"].locales).reduce((obj, [locale, localeStats]) => {
    const avgDuration = localeStats.duration / localeStats.clips;
    console.log(locale, avgDuration);
    obj[locale] = msToHours(localeStats.buckets.validated * avgDuration);
    return obj;
}, {});
const total = msToHours(Object.values(_stats__WEBPACK_IMPORTED_MODULE_8__["default"].locales).reduce((sum, l) => sum + l.duration, 0));
const valid = Object.values(validHours).reduce((sum, n) => sum + n, 0);
const languages = Object.keys(_stats__WEBPACK_IMPORTED_MODULE_8__["default"].locales).length;
const globalStats = { total, valid, languages };
const DEFAULT_CATEGORY_COUNT = 2;
const Splits = ({ category, values, locale, }) => {
    const [expanded, setExpanded] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
    const categories = Object.entries(values).filter(([key, value]) => key && key != 'other' && value > 0);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: category, className: "splits" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_locale_helpers__WEBPACK_IMPORTED_MODULE_4__["LocalizedGetAttribute"], { id: 'profile-form-' + category, attribute: "label" }, label => react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h5", null, label)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ol", { onClick: () => setExpanded(!expanded), tabIndex: 0, role: "button" },
            categories
                .sort((a, b) => (a[1] < b[1] ? 1 : -1))
                .slice(0, expanded ? categories.length : DEFAULT_CATEGORY_COUNT)
                .map(([key, value]) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: key },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("b", null,
                    Math.round(value * 100),
                    "%"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, " "),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ellipsis" }, category == 'gender' ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: key },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null))) : category == 'accent' ? (_stores_demographics__WEBPACK_IMPORTED_MODULE_3__["ACCENTS"][locale] ? (_stores_demographics__WEBPACK_IMPORTED_MODULE_3__["ACCENTS"][locale][key]) : (key)) : category == 'age' ? (_stores_demographics__WEBPACK_IMPORTED_MODULE_3__["AGES"][key]) : (key))))),
            !expanded && categories.length > DEFAULT_CATEGORY_COUNT && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: "more" }, "...")))));
};
class DatasetInfo extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(props, context) {
        super(props, context);
        this.emailInputRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        this.showEmailForm = () => this.setState({ hideEmailForm: false });
        this.handleInputChange = ({ target }) => {
            this.setState({
                [target.name]: target.type === 'checkbox' ? target.checked : target.value,
            });
        };
        this.saveHasDownloaded = () => __awaiter(this, void 0, void 0, function* () {
            const { email, locale } = this.state;
            console.log(Object.keys(_stats__WEBPACK_IMPORTED_MODULE_8__["default"].locales)
                .map(locale => _stats__WEBPACK_IMPORTED_MODULE_8__["default"].bundleURLTemplate.replace('{locale}', locale))
                .join(' '));
            yield this.props.api.forLocale(locale).saveHasDownloaded(email);
        });
        this.state = {
            locale: _stats__WEBPACK_IMPORTED_MODULE_8__["default"].locales[props.locale] ? props.locale : 'en',
            showIntroTextMdDown: false,
            hideEmailForm: true,
            email: '',
            confirmSize: false,
            confirmNoIdentify: false,
        };
    }
    render() {
        const { getString } = this.props;
        const { locale, showIntroTextMdDown, hideEmailForm, email, confirmSize, confirmNoIdentify, } = this.state;
        const localeStats = _stats__WEBPACK_IMPORTED_MODULE_8__["default"].locales[locale];
        const megabytes = Math.floor(localeStats.size / 1000 / 1000);
        const size = megabytes > 1000
            ? Math.floor(megabytes / 1000) + ' ' + getString('size-gigabyte')
            : megabytes + ' ' + getString('size-megabyte');
        const totalHours = msToHours(localeStats.duration);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "dataset-info" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "top" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "cloud-circle" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_5__["CloudIcon"], null)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "intro" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "datasets-headline" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null)),
                    !showIntroTextMdDown && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "show-wall-of-text" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_6__["TextButton"], { className: "hidden-lg-up", onClick: () => {
                                this.setState({ showIntroTextMdDown: true });
                            } }))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "datasets-positioning" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: showIntroTextMdDown ? '' : 'hidden-md-down' }))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "info" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "inner" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_6__["LabeledSelect"], { label: getString('language'), value: locale, onChange: (event) => this.setState({ locale: event.target.value }) }, Object.keys(_stats__WEBPACK_IMPORTED_MODULE_8__["default"].locales).map(locale => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { key: locale, id: locale },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: locale }))))),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", { className: "facts" }, Object.entries({
                            size,
                            'dataset-version': (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "version" }, [locale, totalHours + 'h', _stats__WEBPACK_IMPORTED_MODULE_8__["default"].date].join('_'))),
                            'validated-hr-total': validHours[locale],
                            'overall-hr-total': totalHours.toLocaleString(),
                            'cv-license': 'CC-0',
                            'number-of-voices': localeStats.users.toLocaleString(),
                            'audio-format': 'MP3',
                            splits: Object.entries(localeStats.splits)
                                .filter(([, values]) => Object.keys(values).length > 1)
                                .map(([category, values]) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Splits, Object.assign({ key: category }, { category, values, locale })))),
                        }).map(([id, value]) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: id },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: id },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "label" })),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "value" }, value))))),
                        hideEmailForm ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_6__["Button"], { className: "show-email-form", rounded: true, onClick: this.showEmailForm },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "email-to-download" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_5__["CloudIcon"], null)),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "why-email", b: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("b", null) },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "why-email" })))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "email-input", attrs: { label: true } },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_6__["LabeledInput"], { name: "email", onChange: this.handleInputChange, ref: this.emailInputRef, type: "email" })),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_6__["LabeledCheckbox"], { label: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "confirm-size", b: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("b", null), "$size": size },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)), name: "confirmSize", checked: confirmSize, onChange: this.handleInputChange, style: { marginBottom: 40 } }),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_6__["LabeledCheckbox"], { label: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "confirm-no-identify", b: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("b", null) },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)), name: "confirmNoIdentify", checked: confirmNoIdentify, onChange: this.handleInputChange, style: { marginBottom: 20 } }),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_6__["LinkButton"], { href: confirmSize &&
                                    confirmNoIdentify &&
                                    email &&
                                    this.emailInputRef.current.checkValidity()
                                    ? _stats__WEBPACK_IMPORTED_MODULE_8__["default"].bundleURLTemplate.replace('{locale}', locale)
                                    : null, onClick: this.saveHasDownloaded, rounded: true, className: "download-language", style: { minWidth: 300 } },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "download-language", "$language": getString(locale) },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_5__["CloudIcon"], null))))))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "description" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_circle_stats__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, globalStats, { className: "hidden-md-down" })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "text" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "line" }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "whats-inside" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null)),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_circle_stats__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, globalStats, { className: "hidden-lg-up" })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], Object.assign({ id: "dataset-description-hours", b: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("b", null) }, Object.entries(globalStats).reduce((obj, [key, value]) => {
                        obj['$' + key] = value;
                        return obj;
                    }, {})),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null))))));
    }
}
const mapStateToProps = ({ api }) => ({
    api,
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_locale_helpers__WEBPACK_IMPORTED_MODULE_4__["localeConnector"])(Object(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["withLocalization"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(DatasetInfo))));


/***/ }),

/***/ "./src/components/pages/datasets/datasets.css":
/*!****************************************************!*\
  !*** ./src/components/pages/datasets/datasets.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/datasets/datasets.tsx":
/*!****************************************************!*\
  !*** ./src/components/pages/datasets/datasets.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utility */ "./src/utility.ts");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../urls */ "./src/urls.ts");
/* harmony import */ var _locale_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../locale-helpers */ "./src/components/locale-helpers.tsx");
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/icons */ "./src/components/ui/icons.tsx");
/* harmony import */ var _dataset_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dataset-info */ "./src/components/pages/datasets/dataset-info.tsx");
/* harmony import */ var _subscribe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subscribe */ "./src/components/pages/datasets/subscribe.tsx");
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resources */ "./src/components/pages/datasets/resources.tsx");
/* harmony import */ var _datasets_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./datasets.css */ "./src/components/pages/datasets/datasets.css");
/* harmony import */ var _datasets_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_datasets_css__WEBPACK_IMPORTED_MODULE_9__);











const SURVEY_KEY = 'showSurvey2';
/* harmony default export */ __webpack_exports__["default"] = (() => {
    const [locale] = Object(_locale_helpers__WEBPACK_IMPORTED_MODULE_4__["useLocale"])();
    const [surveyShown, setSurveyShown] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
    function showSurvey() {
        setSurveyShown(JSON.parse(localStorage.getItem(SURVEY_KEY)) !== false);
    }
    function hideSurvey() {
        setSurveyShown(false);
        localStorage.setItem(SURVEY_KEY, JSON.stringify(false));
    }
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
        document.addEventListener('scroll', showSurvey);
        return () => {
            document.removeEventListener('scroll', showSurvey);
        };
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "datasets-content" },
        !Object(_utility__WEBPACK_IMPORTED_MODULE_2__["isProduction"])() && locale == 'en' && surveyShown && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "survey" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { onClick: hideSurvey },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_5__["CloseIcon"], { black: true })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null, "Penny for your thoughts?"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "We would like to know how you plan on using the Common Voice dataset and if you have any ideas for improvement. Can you spare a few minutes to take a survey about the dataset?"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: "https://www.surveygizmo.com/s3/4446677/3a21d4a69b6b", target: "_blank", rel: "noopener noreferrer", onClick: hideSurvey }, "Go to survey"))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_dataset_info__WEBPACK_IMPORTED_MODULE_6__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subscribe__WEBPACK_IMPORTED_MODULE_7__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_resources__WEBPACK_IMPORTED_MODULE_8__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "mars-validate" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { src: __webpack_require__(/*! ./images/mars.svg */ "./src/components/pages/datasets/images/mars.svg"), alt: "" })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "cta-container" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_locale_helpers__WEBPACK_IMPORTED_MODULE_4__["LocaleLink"], { to: _urls__WEBPACK_IMPORTED_MODULE_3__["default"].LISTEN },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_5__["PlayOutlineIcon"], null)),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "ready-to-validate" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null)))))));
});


/***/ }),

/***/ "./src/components/pages/datasets/dots.tsx":
/*!************************************************!*\
  !*** ./src/components/pages/datasets/dots.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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
    var { backgroundColor, color, size, space, style } = _a, props = __rest(_a, ["backgroundColor", "color", "size", "space", "style"]);
    backgroundColor = backgroundColor || 'white';
    color = color || '#cbcbcb';
    size = size || 1.5;
    space = space || 10;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", Object.assign({ className: "dots", style: Object.assign({}, style, { background: [
                `linear-gradient(90deg, ${backgroundColor} ${space -
                    size}px, transparent 1%) center`,
                `linear-gradient(${backgroundColor} ${space -
                    size}px, transparent 1%) center`,
                color,
            ].join(', '), backgroundSize: `${space}px ${space}px` }) }, props)));
});


/***/ }),

/***/ "./src/components/pages/datasets/images sync recursive ^\\.\\/.*\\.png$":
/*!*****************************************************************!*\
  !*** ./src/components/pages/datasets/images sync ^\.\/.*\.png$ ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./deepspeech.png": "./src/components/pages/datasets/images/deepspeech.png",
	"./deepspeech@2x.png": "./src/components/pages/datasets/images/deepspeech@2x.png",
	"./deepspeech@3x.png": "./src/components/pages/datasets/images/deepspeech@3x.png",
	"./discourse.png": "./src/components/pages/datasets/images/discourse.png",
	"./discourse@2x.png": "./src/components/pages/datasets/images/discourse@2x.png",
	"./discourse@3x.png": "./src/components/pages/datasets/images/discourse@3x.png",
	"./email-bg.png": "./src/components/pages/datasets/images/email-bg.png",
	"./feedback.png": "./src/components/pages/datasets/images/feedback.png",
	"./feedback@2x.png": "./src/components/pages/datasets/images/feedback@2x.png",
	"./feedback@3x.png": "./src/components/pages/datasets/images/feedback@3x.png",
	"./intro-bg.png": "./src/components/pages/datasets/images/intro-bg.png",
	"./librispeech.png": "./src/components/pages/datasets/images/librispeech.png",
	"./tatoeba.png": "./src/components/pages/datasets/images/tatoeba.png",
	"./ted.png": "./src/components/pages/datasets/images/ted.png",
	"./voxforge.png": "./src/components/pages/datasets/images/voxforge.png",
	"./waves.png": "./src/components/pages/datasets/images/waves.png",
	"./waves@2x.png": "./src/components/pages/datasets/images/waves@2x.png",
	"./waves@3x.png": "./src/components/pages/datasets/images/waves@3x.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/components/pages/datasets/images sync recursive ^\\.\\/.*\\.png$";

/***/ }),

/***/ "./src/components/pages/datasets/images/deepspeech.png":
/*!*************************************************************!*\
  !*** ./src/components/pages/datasets/images/deepspeech.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "262b9a99934b6fd3989810d95a606e3a.png";

/***/ }),

/***/ "./src/components/pages/datasets/images/deepspeech@2x.png":
/*!****************************************************************!*\
  !*** ./src/components/pages/datasets/images/deepspeech@2x.png ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "12e500b223a504f7cd17a4433fc70650.png";

/***/ }),

/***/ "./src/components/pages/datasets/images/deepspeech@3x.png":
/*!****************************************************************!*\
  !*** ./src/components/pages/datasets/images/deepspeech@3x.png ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "53e940bcd8931461bd481fa3d845d15f.png";

/***/ }),

/***/ "./src/components/pages/datasets/images/discourse.png":
/*!************************************************************!*\
  !*** ./src/components/pages/datasets/images/discourse.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "36d1316c314bf51ac245822ceeaeb7ba.png";

/***/ }),

/***/ "./src/components/pages/datasets/images/discourse@2x.png":
/*!***************************************************************!*\
  !*** ./src/components/pages/datasets/images/discourse@2x.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d56b6fc93169b6ae3c5163e2440c6443.png";

/***/ }),

/***/ "./src/components/pages/datasets/images/discourse@3x.png":
/*!***************************************************************!*\
  !*** ./src/components/pages/datasets/images/discourse@3x.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d96d6cb814b2907cfdfb3063ee80d669.png";

/***/ }),

/***/ "./src/components/pages/datasets/images/email-bg.png":
/*!***********************************************************!*\
  !*** ./src/components/pages/datasets/images/email-bg.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7817f1af8353bd383899286cc393ff26.png";

/***/ }),

/***/ "./src/components/pages/datasets/images/feedback.png":
/*!***********************************************************!*\
  !*** ./src/components/pages/datasets/images/feedback.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4100d3ed112764351332e82c99c52135.png";

/***/ }),

/***/ "./src/components/pages/datasets/images/feedback@2x.png":
/*!**************************************************************!*\
  !*** ./src/components/pages/datasets/images/feedback@2x.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "99329db09297f37111c8939adb8b41c6.png";

/***/ }),

/***/ "./src/components/pages/datasets/images/feedback@3x.png":
/*!**************************************************************!*\
  !*** ./src/components/pages/datasets/images/feedback@3x.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "22efbc3ada63131956c31cd83ad8e55e.png";

/***/ }),

/***/ "./src/components/pages/datasets/images/intro-bg.png":
/*!***********************************************************!*\
  !*** ./src/components/pages/datasets/images/intro-bg.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ec86e6b924c551a58aab462d1a20b96b.png";

/***/ }),

/***/ "./src/components/pages/datasets/images/librispeech.png":
/*!**************************************************************!*\
  !*** ./src/components/pages/datasets/images/librispeech.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "96976a5eeebae26b30b3bc1cffb8ecf9.png";

/***/ }),

/***/ "./src/components/pages/datasets/images/mars.svg":
/*!*******************************************************!*\
  !*** ./src/components/pages/datasets/images/mars.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6182d5340dbbdce9e82a256065bd263b.svg";

/***/ }),

/***/ "./src/components/pages/datasets/images/tatoeba.png":
/*!**********************************************************!*\
  !*** ./src/components/pages/datasets/images/tatoeba.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1cf12a2e9ef7627ca0eb7d2661ece01d.png";

/***/ }),

/***/ "./src/components/pages/datasets/images/ted.png":
/*!******************************************************!*\
  !*** ./src/components/pages/datasets/images/ted.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "749f5e75b134a7c15a43ddc79542f05b.png";

/***/ }),

/***/ "./src/components/pages/datasets/images/voxforge.png":
/*!***********************************************************!*\
  !*** ./src/components/pages/datasets/images/voxforge.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ba742480df82ef5f5a326fa69e2117d1.png";

/***/ }),

/***/ "./src/components/pages/datasets/images/waves.png":
/*!********************************************************!*\
  !*** ./src/components/pages/datasets/images/waves.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1b55e4a2c7537deb181476f351a13bfa.png";

/***/ }),

/***/ "./src/components/pages/datasets/images/waves@2x.png":
/*!***********************************************************!*\
  !*** ./src/components/pages/datasets/images/waves@2x.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "871af0ac4eb98d7ca237666e2a2370fe.png";

/***/ }),

/***/ "./src/components/pages/datasets/images/waves@3x.png":
/*!***********************************************************!*\
  !*** ./src/components/pages/datasets/images/waves@3x.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9ea332099827ecd59edc1dd2a11d301a.png";

/***/ }),

/***/ "./src/components/pages/datasets/other-datasets.ts":
/*!*********************************************************!*\
  !*** ./src/components/pages/datasets/other-datasets.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
    {
        color: 'var(--red)',
        name: 'LibriSpeech',
        nick: 'librispeech',
        size: 57.2,
        url: 'https://www.openslr.org/12',
        download: null,
        license: {
            name: 'CC-BY-4.0',
            url: 'https://creativecommons.org/licenses/by/4.0/',
        },
    },
    {
        color: '#7e9ed2',
        nick: 'ted',
        size: 54,
        url: 'https://www.openslr.org/51/',
        download: 'https://www.openslr.org/resources/51/TEDLIUM_release-3.tgz',
        license: {
            name: 'CC-BY-NC-ND 3.0',
            url: 'https://creativecommons.org/licenses/by-nc-nd/3.0/',
        },
    },
    {
        color: '#7e2fff',
        name: 'VoxForge',
        nick: 'voxforge',
        size: 10.4,
        url: 'http://www.repository.voxforge1.org/downloads/SpeechCorpus/Trunk/',
        download: 'https://s3.us-east-2.amazonaws.com/common-voice-data-download/voxforge_corpus_v1.0.0.tar.gz',
        license: {
            name: 'GNU-GPL',
            url: 'https://www.gnu.org/licenses/gpl-3.0.en.html',
        },
    },
    {
        color: 'var(--valid-green)',
        name: 'Tatoeba',
        nick: 'tatoeba',
        size: 3.8,
        url: 'https://tatoeba.org/eng/downloads',
        download: 'https://downloads.tatoeba.org/audio/tatoeba_audio_eng.zip',
        license: {
            name: 'license-mixed',
            url: 'https://tatoeba.org/eng/downloads',
        },
    },
]);


/***/ }),

/***/ "./src/components/pages/datasets/resources.css":
/*!*****************************************************!*\
  !*** ./src/components/pages/datasets/resources.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/datasets/resources.tsx":
/*!*****************************************************!*\
  !*** ./src/components/pages/datasets/resources.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intersection-observer */ "../node_modules/react-intersection-observer/react-intersection-observer.esm.js");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../urls */ "./src/urls.ts");
/* harmony import */ var _locale_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../locale-helpers */ "./src/components/locale-helpers.tsx");
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/ui */ "./src/components/ui/ui.tsx");
/* harmony import */ var _dots__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dots */ "./src/components/pages/datasets/dots.tsx");
/* harmony import */ var _other_datasets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./other-datasets */ "./src/components/pages/datasets/other-datasets.ts");
/* harmony import */ var _resources_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resources.css */ "./src/components/pages/datasets/resources.css");
/* harmony import */ var _resources_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_resources_css__WEBPACK_IMPORTED_MODULE_8__);
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










const NAV_IDS = {
    getStarted: 'get-started',
    other: 'other-datasets',
    feedback: 'feedback',
};
const Dataset = react__WEBPACK_IMPORTED_MODULE_1__["memo"](({ color, name, nick, size, url, download, license }) => {
    const [collapsed, setCollapsed] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "other-dataset box" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "banner", style: { backgroundColor: color } }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { src: __webpack_require__("./src/components/pages/datasets/images sync recursive ^\\.\\/.*\\.png$")(`./${nick}.png`), alt: "" }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "dots-and-content" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_dots__WEBPACK_IMPORTED_MODULE_6__["default"], { backgroundColor: 'var(--lighter-grey)', space: 20 }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "content" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_5__["StyledLink"], { href: url, blank: true }, name || (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: 'data-other-' + nick + '-name' },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null))))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: 'data-other-' + nick + '-description' },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null)),
                !collapsed && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", null, [
                    [
                        'cv-license',
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: license.name },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_5__["StyledLink"], { href: license.url }, license.name)),
                    ],
                    [
                        'size',
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null,
                            size,
                            ' ',
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "size-gigabyte" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null))),
                    ],
                ].map(([label, value]) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: label },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: label },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "label" })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "value" }, value)))))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "buttons" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: collapsed ? 'more' : 'close' },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_5__["Button"], { onClick: () => setCollapsed(!collapsed), rounded: true, outline: true })),
                    !collapsed && download && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "download" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_5__["LinkButton"], { rounded: true, outline: true, className: "download", href: download }))))))));
});
const Section = react__WEBPACK_IMPORTED_MODULE_1__["memo"]((_a) => {
    var { name, onChangeIntersection } = _a, props = __rest(_a, ["name", "onChangeIntersection"]);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__["InView"], { onChange: (isVisible, entry) => {
            const { width, height } = entry.intersectionRect;
            onChangeIntersection(name, width * height);
        }, threshold: [0.1, 0.2, 0.3, 0.4, 0.5] },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { id: name }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("section", Object.assign({}, props))));
});
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1__["memo"](() => {
    const [intersections, setIntersections] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
    const handleIntersectionChange = (name, intersection) => setIntersections(Object.assign({}, intersections, { [name]: intersection }));
    const activeSection = Object.entries(intersections).reduce(([maxId, maxValue], [id, value]) => value > maxValue ? [id, value] : [maxId, maxValue], [null, 0])[0];
    const discourseURL = Object(_locale_helpers__WEBPACK_IMPORTED_MODULE_4__["useLocalizedDiscourseURL"])();
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "dataset-resources" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("nav", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", null, [
                ['get-started-speech', NAV_IDS.getStarted],
                ['other-datasets', NAV_IDS.other],
                ['feedback-q', NAV_IDS.feedback],
            ].map(([labelId, id]) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: id, className: id == activeSection ? 'active' : '' },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "line" }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: labelId, key: labelId },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: '#' + id }))))))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sections" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Section, { name: NAV_IDS.getStarted, onChangeIntersection: handleIntersectionChange, className: "get-started" }, [
                [
                    'DeepSpeech',
                    'deepspeech-info',
                    'deepspeech',
                    {
                        githubLink: (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_5__["StyledLink"], { href: "https://github.com/mozilla/DeepSpeech", blank: true })),
                        discourseLink: (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_5__["StyledLink"], { href: "https://discourse.mozilla.org/c/deep-speech", blank: true })),
                    },
                ],
                [
                    'Discourse',
                    'common-voice-info-new',
                    'discourse',
                    {
                        discourseLink: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_5__["StyledLink"], { href: discourseURL, blank: true }),
                    },
                ],
            ].map(([title, descriptionId, imgSrc, props]) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "box" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { src: __webpack_require__("./src/components/pages/datasets/images sync recursive ^\\.\\/.*\\.png$")(`./${imgSrc}.png`) }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "dots-and-content" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_dots__WEBPACK_IMPORTED_MODULE_6__["default"], { backgroundColor: 'var(--lighter-grey)', space: 20 }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "content" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"](props.discourseLink, {
                            children: title,
                        })),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], Object.assign({ id: descriptionId }, props),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null)))))))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Section, { name: NAV_IDS.other, onChangeIntersection: handleIntersectionChange, className: "other-datasets" }, _other_datasets__WEBPACK_IMPORTED_MODULE_7__["default"].map(props => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Dataset, Object.assign({ key: props.nick }, props))))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Section, { name: NAV_IDS.feedback, onChangeIntersection: handleIntersectionChange },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "box feedback" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { src: __webpack_require__(/*! ./images/feedback.png */ "./src/components/pages/datasets/images/feedback.png") }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "dots-and-content" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_dots__WEBPACK_IMPORTED_MODULE_6__["default"], { backgroundColor: 'var(--lighter-grey)', space: 20 }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "content" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "described-button" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "your-feedback" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null)),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "go-discourse" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_5__["LinkButton"], { href: discourseURL, blank: true, rounded: true, outline: true }))),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "described-button" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "missing-language" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null)),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "go-languages-page" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_5__["LinkButton"], { to: _urls__WEBPACK_IMPORTED_MODULE_3__["default"].LANGUAGES, rounded: true, outline: true }))))))))));
}));


/***/ }),

/***/ "./src/components/pages/datasets/stats.ts":
/*!************************************************!*\
  !*** ./src/components/pages/datasets/stats.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    bundleURLTemplate: 'https://voice-prod-bundler-ee1969a6ce8178826482b88e843c335139bd3fb4.s3.amazonaws.com/cv-corpus-3/{locale}.tar.gz',
    date: '2019-06-12',
    locales: {
        en: {
            clips: 896823,
            splits: {
                accent: {
                    '': 0.52,
                    canada: 0.03,
                    england: 0.09,
                    us: 0.23,
                    indian: 0.04,
                    australia: 0.03,
                    malaysia: 0,
                    newzealand: 0.01,
                    african: 0.01,
                    ireland: 0,
                    philippines: 0,
                    singapore: 0,
                    scotland: 0.01,
                    hongkong: 0,
                    bermuda: 0,
                    southatlandtic: 0,
                    wales: 0,
                    other: 0.02,
                },
                age: {
                    '': 0.41,
                    twenties: 0.21,
                    sixties: 0.03,
                    thirties: 0.15,
                    teens: 0.05,
                    seventies: 0.01,
                    fourties: 0.08,
                    fifties: 0.04,
                    eighties: 0,
                    nineties: 0,
                },
                gender: { '': 0.41, male: 0.47, female: 0.11, other: 0.02 },
            },
            users: 39577,
            duration: 3914431152,
            buckets: {
                dev: 13178,
                invalidated: 78904,
                other: 173800,
                test: 13178,
                train: 63330,
                validated: 644119,
            },
            size: 30159205077,
        },
        de: {
            clips: 293932,
            splits: {
                accent: {
                    germany: 0.65,
                    russia: 0,
                    '': 0.3,
                    austria: 0.02,
                    liechtenstein: 0,
                    switzerland: 0.01,
                    france: 0,
                    other: 0,
                    poland: 0,
                    united_kingdom: 0,
                    hungary: 0,
                    netherlands: 0,
                    namibia: 0,
                    slovakia: 0,
                    united_states: 0,
                    italy: 0,
                },
                age: {
                    twenties: 0.28,
                    fourties: 0.17,
                    '': 0.22,
                    thirties: 0.18,
                    teens: 0.04,
                    sixties: 0.02,
                    fifties: 0.09,
                    seventies: 0,
                },
                gender: { male: 0.68, '': 0.22, female: 0.1, other: 0 },
            },
            users: 5007,
            duration: 1226382048,
            buckets: {
                dev: 5633,
                invalidated: 12721,
                other: 4,
                test: 5633,
                train: 8518,
                validated: 281207,
            },
            size: 9533851782,
        },
        fr: {
            clips: 162340,
            splits: {
                accent: {
                    '': 0.29,
                    france: 0.64,
                    germany: 0,
                    belgium: 0.03,
                    switzerland: 0.01,
                    guadeloupe: 0,
                    reunion: 0,
                    monaco: 0,
                    tunisia: 0,
                    canada: 0.02,
                    other: 0,
                    mayotte: 0,
                    algeria: 0,
                    netherlands: 0,
                    senegal: 0,
                    martinique: 0,
                    portugal: 0,
                    united_states: 0,
                    cote_d_ivoire: 0,
                    st_pierre_et_miquelon: 0,
                    french_guiana: 0,
                    benin: 0,
                    italy: 0,
                    united_kingdom: 0,
                    madagascar: 0,
                    cameroon: 0,
                },
                age: {
                    twenties: 0.24,
                    thirties: 0.22,
                    '': 0.22,
                    teens: 0.04,
                    fourties: 0.17,
                    fifties: 0.05,
                    sixties: 0.06,
                    seventies: 0,
                },
                gender: { male: 0.7, '': 0.2, female: 0.09, other: 0.01 },
            },
            users: 3005,
            duration: 665133624,
            buckets: {
                dev: 10366,
                invalidated: 9978,
                other: 0,
                test: 10366,
                train: 27498,
                validated: 152362,
            },
            size: 5176500440,
        },
        cy: {
            clips: 38646,
            splits: {
                accent: { united_kingdom: 0.43, '': 0.55, other: 0.02 },
                age: {
                    fourties: 0.12,
                    twenties: 0.09,
                    sixties: 0.13,
                    fifties: 0.07,
                    '': 0.49,
                    thirties: 0.07,
                    seventies: 0.01,
                    eighties: 0,
                    teens: 0.01,
                },
                gender: { male: 0.33, female: 0.18, '': 0.49, other: 0.01 },
            },
            users: 748,
            duration: 174368352,
            buckets: {
                dev: 484,
                invalidated: 1696,
                other: 2744,
                test: 484,
                train: 500,
                validated: 34188,
            },
            size: 1348150916,
        },
        br: {
            clips: 12155,
            splits: {
                accent: { other: 0, '': 1 },
                age: {
                    twenties: 0.14,
                    '': 0.5,
                    fifties: 0.08,
                    fourties: 0.11,
                    thirties: 0.13,
                    sixties: 0.04,
                },
                gender: { male: 0.47, '': 0.5, female: 0.03 },
            },
            users: 118,
            duration: 36714648,
            buckets: {
                dev: 1142,
                invalidated: 289,
                other: 7480,
                test: 1328,
                train: 1630,
                validated: 4386,
            },
            size: 279505456,
        },
        cv: {
            clips: 2355,
            splits: {
                accent: { other: 0.01, '': 0.99 },
                age: {
                    twenties: 0.04,
                    '': 0.53,
                    fourties: 0.38,
                    thirties: 0.04,
                    teens: 0.01,
                },
                gender: { male: 0.47, '': 0.53 },
            },
            users: 38,
            duration: 10101114,
            buckets: {
                dev: 78,
                invalidated: 108,
                other: 1220,
                test: 243,
                train: 566,
                validated: 1027,
            },
            size: 79035841,
        },
        tr: {
            clips: 9700,
            splits: {
                accent: { '': 0.92, other: 0.08 },
                age: {
                    '': 0.19,
                    thirties: 0.33,
                    twenties: 0.42,
                    teens: 0.04,
                    fourties: 0.02,
                    fifties: 0,
                },
                gender: { '': 0.19, male: 0.7, female: 0.11 },
            },
            users: 344,
            duration: 37589112,
            buckets: {
                dev: 1620,
                invalidated: 829,
                other: 0,
                test: 1621,
                train: 1802,
                validated: 8871,
            },
            size: 288370679,
        },
        tt: {
            clips: 25772,
            splits: {
                accent: { '': 1 },
                age: {
                    '': 0.16,
                    thirties: 0.79,
                    twenties: 0.05,
                    sixties: 0,
                    fifties: 0.01,
                    teens: 0,
                    fourties: 0,
                },
                gender: { '': 0.16, male: 0.83, female: 0.02 },
            },
            users: 132,
            duration: 94851408,
            buckets: {
                dev: 1949,
                invalidated: 251,
                other: 3438,
                test: 4070,
                train: 8264,
                validated: 22083,
            },
            size: 710269716,
        },
        ky: {
            clips: 15885,
            splits: {
                accent: { '': 0.91, other: 0.09 },
                age: {
                    thirties: 0.15,
                    '': 0.04,
                    fourties: 0.01,
                    twenties: 0.79,
                    teens: 0.01,
                },
                gender: { male: 0.44, '': 0.09, female: 0.47, other: 0 },
            },
            users: 97,
            duration: 72991440,
            buckets: {
                dev: 971,
                invalidated: 779,
                other: 8249,
                test: 1501,
                train: 2320,
                validated: 6857,
            },
            size: 525926969,
        },
        'ga-IE': {
            clips: 3764,
            splits: {
                accent: {
                    '': 0.29,
                    connachta: 0.4,
                    other: 0.1,
                    ulaidh: 0.09,
                    mumhain: 0.12,
                },
                age: {
                    twenties: 0.27,
                    '': 0.23,
                    thirties: 0.38,
                    fourties: 0.08,
                    sixties: 0.01,
                    teens: 0.03,
                },
                gender: { male: 0.62, '': 0.23, female: 0.15 },
            },
            users: 63,
            duration: 12982896,
            buckets: {
                dev: 462,
                invalidated: 202,
                other: 1033,
                test: 482,
                train: 522,
                validated: 2529,
            },
            size: 98312781,
        },
        kab: {
            clips: 192115,
            splits: {
                accent: { '': 0.79, other: 0.21 },
                age: {
                    fourties: 0.13,
                    thirties: 0.32,
                    '': 0.32,
                    twenties: 0.13,
                    fifties: 0.03,
                    eighties: 0,
                    teens: 0,
                    sixties: 0.05,
                    seventies: 0,
                },
                gender: { male: 0.57, '': 0.28, female: 0.15, other: 0.01 },
            },
            users: 584,
            duration: 693953592,
            buckets: {
                dev: 6646,
                invalidated: 9717,
                other: 1816,
                test: 6648,
                train: 11073,
                validated: 180582,
            },
            size: 5395733580,
        },
        ca: {
            clips: 95720,
            splits: {
                accent: {
                    valencian: 0.06,
                    central: 0.68,
                    '': 0.21,
                    other: 0.01,
                    balearic: 0.01,
                    northwestern: 0.03,
                    northern: 0,
                },
                age: {
                    thirties: 0.12,
                    fifties: 0.27,
                    fourties: 0.25,
                    twenties: 0.1,
                    '': 0.2,
                    sixties: 0.04,
                    teens: 0.02,
                    seventies: 0,
                    eighties: 0,
                },
                gender: { male: 0.37, '': 0.2, female: 0.43, other: 0 },
            },
            users: 1834,
            duration: 434964288,
            buckets: {
                dev: 8411,
                invalidated: 4694,
                other: 6208,
                test: 8410,
                train: 17011,
                validated: 84818,
            },
            size: 3377582268,
        },
        'zh-TW': {
            clips: 52677,
            splits: {
                accent: {
                    '': 0.65,
                    other: 0.14,
                    kaohsiung_city: 0.01,
                    new_taipei_city: 0.05,
                    yilan_county: 0.01,
                    taoyuan_city: 0,
                    hsinchu_city: 0.01,
                    taipei_city: 0.07,
                    chiayi_city: 0.01,
                    taichung_city: 0.01,
                    yunlin_county: 0,
                    nantou_county: 0,
                    tainan_city: 0.03,
                    changhua_county: 0,
                    pingtung_county: 0,
                    hsinchu_county: 0,
                },
                age: {
                    thirties: 0.32,
                    twenties: 0.38,
                    teens: 0.04,
                    '': 0.23,
                    fifties: 0.01,
                    seventies: 0,
                    fourties: 0.02,
                },
                gender: { male: 0.46, '': 0.23, female: 0.29, other: 0.03 },
            },
            users: 949,
            duration: 154923336,
            buckets: {
                dev: 1540,
                invalidated: 2667,
                other: 9330,
                test: 1540,
                train: 1698,
                validated: 40680,
            },
            size: 1198002255,
        },
        sl: {
            clips: 4714,
            splits: {
                accent: { other: 0.01, '': 0.99 },
                age: {
                    twenties: 0.75,
                    teens: 0,
                    '': 0.05,
                    sixties: 0,
                    fifties: 0.17,
                    fourties: 0.02,
                    thirties: 0.01,
                },
                gender: { female: 0.2, male: 0.75, '': 0.05 },
            },
            users: 42,
            duration: 18543912,
            buckets: {
                dev: 465,
                invalidated: 146,
                other: 2090,
                test: 339,
                train: 1178,
                validated: 2478,
            },
            size: 145009295,
        },
        it: {
            clips: 30274,
            splits: {
                accent: { '': 0.83, other: 0.17 },
                age: {
                    thirties: 0.11,
                    twenties: 0.32,
                    '': 0.2,
                    fifties: 0.19,
                    fourties: 0.1,
                    seventies: 0,
                    sixties: 0,
                    teens: 0.06,
                },
                gender: { female: 0.18, male: 0.62, '': 0.2, other: 0 },
            },
            users: 602,
            duration: 146844648,
            buckets: {
                dev: 4563,
                invalidated: 3211,
                other: 1,
                test: 4569,
                train: 6368,
                validated: 27062,
            },
            size: 1143749798,
        },
        nl: {
            clips: 22232,
            splits: {
                accent: { '': 0.25, netherlands: 0.65, belgium: 0.1, other: 0 },
                age: {
                    '': 0.22,
                    twenties: 0.28,
                    fourties: 0.14,
                    thirties: 0.11,
                    teens: 0.04,
                    fifties: 0.19,
                    sixties: 0.01,
                },
                gender: { '': 0.26, male: 0.72, female: 0.02, other: 0 },
            },
            users: 502,
            duration: 84629952,
            buckets: {
                dev: 1689,
                invalidated: 954,
                other: 4188,
                test: 1689,
                train: 1881,
                validated: 17090,
            },
            size: 651528448,
        },
        cnh: {
            clips: 4746,
            splits: {
                accent: { '': 0.82, other: 0.18 },
                age: {
                    '': 0.56,
                    twenties: 0.28,
                    fourties: 0.01,
                    teens: 0.02,
                    thirties: 0.1,
                    fifties: 0.03,
                },
                gender: { '': 0.56, male: 0.24, female: 0.2 },
            },
            users: 280,
            duration: 17936232,
            buckets: {
                dev: 688,
                invalidated: 463,
                other: 2034,
                test: 694,
                train: 750,
                validated: 2249,
            },
            size: 140129764,
        },
        eo: {
            clips: 13234,
            splits: {
                accent: { '': 0.51, internacia: 0.47, other: 0.02 },
                age: {
                    twenties: 0.65,
                    thirties: 0.05,
                    '': 0.11,
                    fourties: 0.16,
                    fifties: 0.01,
                    seventies: 0,
                    teens: 0.02,
                    sixties: 0,
                },
                gender: { male: 0.51, '': 0.38, female: 0.11, other: 0 },
            },
            users: 129,
            duration: 60410136,
            buckets: {
                dev: 1896,
                invalidated: 744,
                other: 1640,
                test: 1887,
                train: 2178,
                validated: 10850,
            },
            size: 468605004,
        },
        et: {
            clips: 6930,
            splits: {
                accent: { '': 1 },
                age: {
                    '': 0.05,
                    thirties: 0.11,
                    twenties: 0.7,
                    fourties: 0.13,
                    fifties: 0,
                    seventies: 0,
                    teens: 0,
                },
                gender: { '': 0.05, male: 0.57, female: 0.37, other: 0 },
            },
            users: 225,
            duration: 46332792,
            buckets: {
                dev: 1769,
                invalidated: 426,
                other: 58,
                test: 1783,
                train: 2016,
                validated: 6446,
            },
            size: 358541638,
        },
        fa: {
            clips: 56394,
            splits: {
                accent: { '': 1 },
                age: {
                    '': 0.39,
                    twenties: 0.31,
                    thirties: 0.16,
                    fifties: 0.07,
                    fourties: 0.03,
                    teens: 0.04,
                },
                gender: { '': 0.39, male: 0.47, female: 0.13, other: 0.01 },
            },
            users: 1240,
            duration: 253556208,
            buckets: {
                dev: 2103,
                invalidated: 2344,
                other: 0,
                test: 2103,
                train: 2409,
                validated: 54050,
            },
            size: 1940329402,
        },
        eu: {
            clips: 58920,
            splits: {
                accent: {
                    mendebalekoa: 0.23,
                    erdialdekoa_nafarra: 0.35,
                    '': 0.42,
                    nafarlapurtarra_zuberoatarra: 0.01,
                },
                age: {
                    fourties: 0.14,
                    thirties: 0.05,
                    fifties: 0.17,
                    twenties: 0.38,
                    '': 0.23,
                    teens: 0.01,
                    sixties: 0.01,
                    seventies: 0,
                },
                gender: { male: 0.53, female: 0.22, '': 0.24, other: 0.02 },
            },
            users: 508,
            duration: 299308320,
            buckets: {
                dev: 1981,
                invalidated: 2145,
                other: 23813,
                test: 1981,
                train: 2250,
                validated: 32962,
            },
            size: 2327699622,
        },
        es: {
            clips: 27329,
            splits: {
                accent: {
                    nortepeninsular: 0.29,
                    '': 0.29,
                    rioplatense: 0.07,
                    centrosurpeninsular: 0.04,
                    americacentral: 0.01,
                    surpeninsular: 0.03,
                    canario: 0.02,
                    andino: 0.11,
                    mexicano: 0.03,
                    chileno: 0.08,
                    caribe: 0.01,
                    filipinas: 0.01,
                },
                age: {
                    thirties: 0.12,
                    '': 0.18,
                    fifties: 0.17,
                    twenties: 0.32,
                    teens: 0.02,
                    fourties: 0.16,
                    sixties: 0.02,
                },
                gender: { male: 0.74, '': 0.16, other: 0.01, female: 0.09 },
            },
            users: 611,
            duration: 113152080,
            buckets: {
                dev: 2723,
                invalidated: 3566,
                other: 0,
                test: 2729,
                train: 3275,
                validated: 23763,
            },
            size: 868898656,
        },
        'zh-CN': {
            clips: 7013,
            splits: {
                accent: {
                    '110000': 0.12,
                    '130000': 0.01,
                    '210000': 0.03,
                    '220000': 0.01,
                    '230000': 0.04,
                    '310000': 0,
                    '320000': 0.08,
                    '330000': 0.07,
                    '340000': 0.03,
                    '350000': 0.03,
                    '360000': 0.01,
                    '370000': 0.03,
                    '410000': 0.01,
                    '420000': 0.01,
                    '430000': 0.01,
                    '440000': 0.03,
                    '450000': 0.01,
                    '500000': 0.01,
                    '510000': 0.05,
                    '520000': 0,
                    '610000': 0.01,
                    '620000': 0,
                    '650000': 0.01,
                    '710000': 0.02,
                    '': 0.36,
                },
                age: {
                    '': 0.23,
                    teens: 0.11,
                    twenties: 0.41,
                    thirties: 0.25,
                    fourties: 0,
                },
                gender: { '': 0.23, male: 0.76, female: 0 },
            },
            users: 288,
            duration: 45829032,
            buckets: {
                dev: 1954,
                invalidated: 779,
                other: 0,
                test: 1964,
                train: 2301,
                validated: 6234,
            },
            size: 359184757,
        },
        mn: {
            clips: 6306,
            splits: {
                accent: { '': 1 },
                age: {
                    thirties: 0.31,
                    '': 0.31,
                    twenties: 0.22,
                    fourties: 0.02,
                    teens: 0.02,
                    nineties: 0.11,
                },
                gender: { male: 0.35, '': 0.31, female: 0.22, other: 0.11 },
            },
            users: 230,
            duration: 34457088,
            buckets: {
                dev: 1407,
                invalidated: 479,
                other: 273,
                test: 1610,
                train: 2049,
                validated: 5554,
            },
            size: 269325609,
        },
        sah: {
            clips: 3793,
            splits: {
                accent: { '': 1 },
                age: {
                    '': 0.36,
                    twenties: 0.02,
                    fourties: 0.07,
                    thirties: 0.44,
                    teens: 0.11,
                    fifties: 0,
                },
                gender: { '': 0.36, male: 0.54, female: 0.1 },
            },
            users: 35,
            duration: 22638720,
            buckets: {
                dev: 0,
                invalidated: 51,
                other: 1850,
                test: 516,
                train: 1374,
                validated: 1892,
            },
            size: 173419827,
        },
        dv: {
            clips: 5944,
            splits: {
                accent: { '': 1 },
                age: {
                    '': 0.08,
                    twenties: 0.29,
                    thirties: 0.57,
                    fourties: 0.02,
                    teens: 0.04,
                },
                gender: { '': 0.08, male: 0.27, female: 0.65 },
            },
            users: 92,
            duration: 32169912,
            buckets: {
                dev: 1103,
                invalidated: 266,
                other: 1841,
                test: 1237,
                train: 1487,
                validated: 3837,
            },
            size: 247579967,
        },
        rw: {
            clips: 1470,
            splits: {
                accent: { '': 1 },
                age: { '': 0.87, twenties: 0.12, thirties: 0.01 },
                gender: { '': 0.87, male: 0.13 },
            },
            users: 32,
            duration: 6806688,
            buckets: {
                dev: 35,
                invalidated: 31,
                other: 1325,
                test: 34,
                train: 45,
                validated: 114,
            },
            size: 53219628,
        },
        'sv-SE': {
            clips: 4113,
            splits: {
                accent: { '': 1 },
                age: {
                    thirties: 0.38,
                    '': 0.21,
                    teens: 0.07,
                    fifties: 0.26,
                    twenties: 0.03,
                    fourties: 0.04,
                },
                gender: { male: 0.75, '': 0.21, female: 0.03 },
            },
            users: 44,
            duration: 12524424,
            buckets: {
                dev: 1237,
                invalidated: 118,
                other: 0,
                test: 1134,
                train: 1602,
                validated: 3995,
            },
            size: 89437571,
        },
        ru: {
            clips: 21598,
            splits: {
                accent: { '': 1 },
                age: {
                    twenties: 0.73,
                    teens: 0,
                    '': 0.02,
                    fourties: 0.15,
                    thirties: 0.02,
                    fifties: 0.07,
                },
                gender: { male: 0.55, '': 0.02, other: 0, female: 0.42 },
            },
            users: 64,
            duration: 111829272,
            buckets: {
                dev: 1748,
                invalidated: 784,
                other: 1559,
                test: 1676,
                train: 2113,
                validated: 19255,
            },
            size: 850506531,
        },
    },
});


/***/ }),

/***/ "./src/components/pages/datasets/subscribe.css":
/*!*****************************************************!*\
  !*** ./src/components/pages/datasets/subscribe.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/datasets/subscribe.tsx":
/*!*****************************************************!*\
  !*** ./src/components/pages/datasets/subscribe.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _stores_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../stores/notifications */ "./src/stores/notifications.ts");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../urls */ "./src/urls.ts");
/* harmony import */ var _locale_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../locale-helpers */ "./src/components/locale-helpers.tsx");
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/icons */ "./src/components/ui/icons.tsx");
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/ui */ "./src/components/ui/ui.tsx");
/* harmony import */ var _subscribe_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subscribe.css */ "./src/components/pages/datasets/subscribe.css");
/* harmony import */ var _subscribe_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_subscribe_css__WEBPACK_IMPORTED_MODULE_8__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









class Subscribe extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor() {
        super(...arguments);
        this.state = { email: '', privacyAgreed: false, submitStatus: null };
        this.emailInputRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        this.handleEmailChange = (event) => {
            this.setState({ email: event.target.value });
        };
        this.handlePrivacyAgreedChange = (event) => {
            this.setState({ privacyAgreed: event.target.checked });
        };
        this.handleSubmit = (event) => __awaiter(this, void 0, void 0, function* () {
            event.preventDefault();
            const { account, api, addNotification } = this.props;
            this.setState({ submitStatus: 'submitting' });
            try {
                yield api.subscribeToNewsletter(account ? account.email : this.state.email);
                addNotification(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "profile-form-submit-saved" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)));
                this.setState({ submitStatus: 'submitted' });
            }
            catch (e) {
                addNotification('Subscription failed', 'error');
                console.error(e);
                this.setState({ submitStatus: null });
            }
        });
    }
    render() {
        const { account } = this.props;
        const { submitStatus } = this.state;
        const isEditable = submitStatus == null;
        const email = account ? account.email : this.state.email;
        const privacyAgreed = account || this.state.privacyAgreed;
        const emailInput = this.emailInputRef.current;
        if ((account && account.basket_token) || submitStatus == 'submitted') {
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "dataset-subscribe" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "want-dataset-update" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", { onSubmit: this.handleSubmit },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "email-input", attrs: { label: true } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_7__["LabeledInput"], { value: email, onChange: this.handleEmailChange, disabled: !isEditable || account, type: "email", ref: this.emailInputRef })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_7__["Button"], { type: "submit", disabled: !isEditable ||
                            !privacyAgreed ||
                            !email ||
                            !emailInput ||
                            !emailInput.checkValidity() },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "subscribe" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "hidden-md-down" })),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_6__["ArrowLeft"], { className: "hidden-lg-up" }))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_7__["LabeledCheckbox"], { label: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "accept-privacy", privacyLink: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_locale_helpers__WEBPACK_IMPORTED_MODULE_5__["LocaleLink"], { to: _urls__WEBPACK_IMPORTED_MODULE_4__["default"].PRIVACY, blank: true }) },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)), disabled: !isEditable, checked: privacyAgreed, onChange: this.handlePrivacyAgreedChange }))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(({ api, user }) => ({
    account: user.account,
    api,
}), { addNotification: _stores_notifications__WEBPACK_IMPORTED_MODULE_3__["Notifications"].actions.addPill })(Subscribe));


/***/ }),

/***/ "./src/stores/demographics.ts":
/*!************************************!*\
  !*** ./src/stores/demographics.ts ***!
  \************************************/
/*! exports provided: ACCENTS, AGES, SEXES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENTS", function() { return ACCENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGES", function() { return AGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEXES", function() { return SEXES; });
const ACCENTS = {
    ca: {
        balearic: 'balear',
        central: 'central',
        northwestern: 'nord-occidental',
        northern: 'septentrional',
        valencian: 'valencià',
    },
    cy: {
        united_kingdom: 'Y Deyrnas Unedig Cymraeg',
    },
    de: {
        germany: 'Deutschland Deutsch',
        netherlands: 'Niederländisch Deutsch',
        austria: 'Österreichisches Deutsch',
        poland: 'Polnisch Deutsch',
        switzerland: 'Schweizerdeutsch',
        united_kingdom: 'Britisches Deutsch',
        france: 'Französisch Deutsch',
        denmark: 'Dänisch Deutsch',
        belgium: 'Belgisches Deutsch',
        hungary: 'Ungarisch Deutsch',
        brazil: 'Brasilianisches Deutsch',
        czechia: 'Tschechisch Deutsch',
        united_states: 'Amerikanisches Deutsch',
        slovakia: 'Slowakisch Deutsch',
        russia: 'Russisch Deutsch',
        kazakhstan: 'Kasachisch Deutsch',
        italy: 'Italienisch Deutsch',
        finland: 'Finnisch Deutsch',
        slovenia: 'Slowenisch Deutsch',
        canada: 'Kanadisches Deutsch',
        bulgaria: 'Bulgarisch Deutsch',
        greece: 'Griechisch Deutsch',
        lithuania: 'Litauisch Deutsch',
        luxembourg: 'Luxemburgisches Deutsch',
        paraguay: 'Paraguayisch Deutsch',
        romania: 'Rumänisch Deutsch',
        liechtenstein: 'liechtensteinisches Deutscher',
        namibia: 'Namibisch Deutsch',
        turkey: 'Türkisch Deutsch',
    },
    en: {
        us: 'United States English',
        australia: 'Australian English',
        england: 'England English',
        canada: 'Canadian English',
        philippines: 'Filipino',
        hongkong: 'Hong Kong English',
        indian: 'India and South Asia (India, Pakistan, Sri Lanka)',
        ireland: 'Irish English',
        malaysia: 'Malaysian English',
        newzealand: 'New Zealand English',
        scotland: 'Scottish English',
        singapore: 'Singaporean English',
        southatlandtic: 'South Atlantic (Falkland Islands, Saint Helena)',
        african: 'Southern African (South Africa, Zimbabwe, Namibia)',
        wales: 'Welsh English',
        bermuda: 'West Indies and Bermuda (Bahamas, Bermuda, Jamaica, Trinidad)',
    },
    eo: {
        internacia: 'Internacia',
    },
    es: {
        nortepeninsular: 'España: Norte peninsular (Asturias, Castilla y León, Cantabria, País Vasco, Navarra, Aragón, La Rioja, Guadalajara, Cuenca)',
        centrosurpeninsular: 'España: Centro-Sur peninsular (Madrid, Toledo, Castilla-La Mancha)',
        surpeninsular: 'España: Sur peninsular (Andalucia, Extremadura, Murcia)',
        canario: 'España: Islas Canarias',
        mexicano: 'México',
        americacentral: 'América central',
        caribe: 'Caribe: Cuba, Venezuela, Puerto Rico, República Dominicana, Panamá, Colombia caribeña, México caribeño, Costa del golfo de México',
        andino: 'Andino-Pacífico: Colombia, Perú, Ecuador, oeste de Bolivia y Venezuela andina',
        rioplatense: 'Rioplatense: Argentina, Uruguay, este de Bolivia, Paraguay',
        chileno: 'Chileno: Chile, Cuyo',
        filipinas: 'Español de Filipinas',
    },
    eu: {
        mendebalekoa: 'Mendebalekoa (Araka, Bizkaia, Gipuzkoako mendebaleko herri batzuk)',
        erdialdekoa_nafarra: 'Erdialdekoa edo Nafarra (Gipuzkoa, Nafarroa)',
        nafarlapurtarra_zuberoatarra: 'Nafar-lapurtarra edo Zuberotarra (Lapurdi, Nafarroa Beherea, Zuberoa)',
    },
    fr: {
        france: 'Français de France',
        madagascar: 'Français de Madagascar',
        cameroon: 'Français du Cameroun',
        germany: 'Français d’Allemagne',
        united_kingdom: 'Français du Royaume-Uni',
        cote_d_ivoire: 'Français de Côte d’Ivoire',
        tunisia: 'Français de Tunisie',
        mali: 'Français du Mali',
        algeria: 'Français d’Algérie',
        canada: 'Français du Canada',
        morocco: 'Français du Maroc',
        burundi: 'Français du Burundi',
        senegal: 'Français du Sénégal',
        niger: 'Français du Niger',
        netherlands: 'Français des Pays-Bas',
        togo: 'Français de la République du Togo',
        burkina_faso: 'Français du Burkina-Faso',
        belgium: 'Français de Belgique',
        congo_brazzaville: 'Français du Congo (Brazzaville)',
        congo_kinshasa: 'Français du Congo (Kinshasa)',
        italy: 'Français d’Italie',
        benin: 'Français du Bénin',
        romania: 'Français de Roumanie',
        guinea: 'Français de Guinée',
        chad: 'Français du Tchad',
        central_african_republic: 'Français de République centrafricaine',
        united_states: 'Français des États-Unis',
        switzerland: 'Français de Suisse',
        portugal: 'Français du Portugal',
        gabon: 'Français du Gabon',
        syria: 'Français de Syrie',
        greece: 'Français de Grèce',
        austria: 'Français d’Autriche',
        ireland: 'Français d’Irlande',
        reunion: 'Français de La Réunion',
        mauritania: 'Français de Mauritanie',
        luxembourg: 'Français du Luxembourg',
        haiti: 'Français d’Haïti',
        comoros: 'Français des Comores',
        martinique: 'Français de Martinique',
        guadeloupe: 'Français de Guadeloupe',
        hungary: 'Français d’Hongrie',
        new_caledonia: 'Français de Nouvelle-Calédonie',
        french_polynesia: 'Français de Polynésie française',
        french_guiana: 'Français de Guyane',
        vanuatu: 'Français du Vanuatu',
        mayotte: 'Français de Mayotte',
        cyprus: 'Français de Chypre',
        equatorial_guinea: 'Français de Guinée équatoriale',
        seychelles: 'Français des Seychelles',
        malta: 'Français de Malte',
        mauritius: 'Français de l’Île Maurice',
        st_martin: 'Français de Saint-Martin',
        monaco: 'Français de Monaco',
        lebanon: 'Français du Liban',
        djibouti: 'Français de Djibouti',
        wallis_et_futuna: 'Français de Wallis et Futuna',
        st_barthelemy: 'Français de Saint-Barthélemy',
        andorra: 'Français d’Andorre',
        st_pierre_et_miquelon: 'Français de Saint-Pierre-et-Miquelon',
        rwanda: 'Français du Rwanda',
    },
    nl: {
        netherlands: 'Nederlands Nederlands',
        belgium: 'Belgisch Nederlands',
        suriname: 'Surinaams Nederlands',
        france: 'Frans Nederlands',
        germany: 'Duits Nederlands',
        curacao: 'Nederlands van Curaçao',
        aruba: 'Nederlands van Aruba',
        sint_maarten: 'Nederlands van Sint-Maarten',
        south_africa: 'Zuid-Afrikaans Nederlands',
        namibia: 'Namibisch Nederlands',
        indonesia: 'Indonesisch Nederlands',
    },
    'ga-IE': {
        mumhain: 'Gaeilge na Mumhan',
        connachta: 'Gaeilge Chonnacht',
        ulaidh: 'Gaeilge Uladh',
    },
    'zh-TW': {
        keelung_city: '出生地：基隆市',
        taipei_city: '出生地：臺北市',
        new_taipei_city: '出生地：新北市',
        taoyuan_city: '出生地：桃園市',
        hsinchu_county: '出生地：新竹縣',
        hsinchu_city: '出生地：新竹市',
        miaoli_county: '出生地：苗栗縣',
        taichung_city: '出生地：臺中市',
        changhua_county: '出生地：彰化縣',
        nantou_county: '出生地：南投縣',
        yunlin_county: '出生地：雲林縣',
        chiayi_county: '出生地：嘉義縣',
        chiayi_city: '出生地：嘉義市',
        tainan_city: '出生地：臺南市',
        kaohsiung_city: '出生地：高雄市',
        pingtung_county: '出生地：屏東縣',
        yilan_county: '出生地：宜蘭縣',
        hualien_county: '出生地：花蓮縣',
        taitung_county: '出生地：臺東縣',
        penghu_county: '出生地：澎湖縣',
        kinmen_county: '出生地：金門縣',
        lienchiang_county: '出生地：連江縣',
        hong_kong: '香港',
    },
    'zh-CN': {
        '110000': '出生地：11 北京市',
        '120000': '出生地：12 天津市',
        '130000': '出生地：13 河北省',
        '140000': '出生地：14 山西省',
        '150000': '出生地：15 内蒙古自治区',
        '210000': '出生地：21 辽宁省',
        '220000': '出生地：22 吉林省',
        '230000': '出生地：23 黑龙江省',
        '310000': '出生地：31 上海市',
        '320000': '出生地：32 江苏省',
        '330000': '出生地：33 浙江省',
        '340000': '出生地：34 安徽省',
        '350000': '出生地：35 福建省',
        '360000': '出生地：36 江西省',
        '370000': '出生地：37 山东省',
        '410000': '出生地：41 河南省',
        '420000': '出生地：42 湖北省',
        '430000': '出生地：43 湖南省',
        '440000': '出生地：44 广东省',
        '450000': '出生地：45 广西壮族自治区',
        '460000': '出生地：46 海南省',
        '500000': '出生地：50 重庆市',
        '510000': '出生地：51 四川省',
        '520000': '出生地：52 贵州省',
        '530000': '出生地：53 云南省',
        '540000': '出生地：54 西藏自治区',
        '610000': '出生地：61 陕西省',
        '620000': '出生地：62 甘肃省',
        '630000': '出生地：63 青海省',
        '640000': '出生地：64 宁夏回族自治区',
        '650000': '出生地：65 新疆维吾尔自治区',
        '710000': '出生地：71 台湾省',
        '810000': '出生地：81 香港特别行政区',
        '820000': '出生地：82 澳门特别行政区',
    },
};
const AGES = {
    '': '',
    teens: '< 19',
    twenties: '19 - 29',
    thirties: '30 - 39',
    fourties: '40 - 49',
    fifties: '50 - 59',
    sixties: '60 - 69',
    seventies: '70 - 79',
    eighties: '80 - 89',
    nineties: '> 89',
};
const SEXES = {
    '': '',
    male: 'Male',
    female: 'Female',
    other: 'Other',
};


/***/ })

}]);
//# sourceMappingURL=8.bundle.js.map