(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/components/pages/contribution/contribution.css":
/*!************************************************************!*\
  !*** ./src/components/pages/contribution/contribution.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/contribution/contribution.tsx":
/*!************************************************************!*\
  !*** ./src/components/pages/contribution/contribution.tsx ***!
  \************************************************************/
/*! exports provided: SET_COUNT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_COUNT", function() { return SET_COUNT; });
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _services_tracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/tracker */ "./src/services/tracker.ts");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../urls */ "./src/urls.ts");
/* harmony import */ var _locale_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../locale-helpers */ "./src/components/locale-helpers.tsx");
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modal/modal */ "./src/components/modal/modal.tsx");
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/icons */ "./src/components/ui/icons.tsx");
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/ui */ "./src/components/ui/ui.tsx");
/* harmony import */ var _primary_buttons_primary_buttons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../primary-buttons/primary-buttons */ "./src/components/primary-buttons/primary-buttons.tsx");
/* harmony import */ var _share_modal_share_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../share-modal/share-modal */ "./src/components/share-modal/share-modal.tsx");
/* harmony import */ var _report_report__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./report/report */ "./src/components/pages/contribution/report/report.tsx");
/* harmony import */ var _success__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./success */ "./src/components/pages/contribution/success.tsx");
/* harmony import */ var _wave__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./wave */ "./src/components/pages/contribution/wave.ts");
/* harmony import */ var _contribution_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contribution.css */ "./src/components/pages/contribution/contribution.css");
/* harmony import */ var _contribution_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_contribution_css__WEBPACK_IMPORTED_MODULE_14__);



const { Tooltip } = __webpack_require__(/*! react-tippy */ "../node_modules/react-tippy/dist/react-tippy.js");












const HAS_SEEN_ACCOUNT_MODAL_KEY = 'hasSeenAccountModal2';
const AccountModal = (props) => {
    const [locale] = Object(_locale_helpers__WEBPACK_IMPORTED_MODULE_5__["useLocale"])();
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_modal_modal__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, props, { innerClassName: "account-modal" }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "images" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { src: __webpack_require__(/*! ./waves.svg */ "./src/components/pages/contribution/waves.svg"), alt: "Waves", className: "bg" }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { src: __webpack_require__(/*! ./mars-blue.svg */ "./src/components/pages/contribution/mars-blue.svg"), alt: "Mars Robot", className: "mars" })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "keep-track-profile" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "login-to-get-started" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "login-signup" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_8__["LinkButton"], { rounded: true, href: "/login", onClick: () => {
                    sessionStorage.setItem('redirectURL', location.pathname);
                    Object(_services_tracker__WEBPACK_IMPORTED_MODULE_3__["trackProfile"])('contribution-conversion-modal', locale);
                } }))));
};
const SET_COUNT = 5;
class ContributionPage extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            selectedPill: null,
            showAccountModal: false,
            showReportModal: false,
            showShareModal: false,
            showShortcutsModal: false,
        };
        this.canvasRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        this.startWaving = () => {
            const canvas = this.canvasRef.current;
            if (this.wave) {
                if (!canvas) {
                    this.wave.idle();
                    this.wave = null;
                }
                return;
            }
            if (canvas) {
                this.wave = new _wave__WEBPACK_IMPORTED_MODULE_13__["default"](canvas);
            }
        };
        this.toggleShareModal = () => this.setState({ showShareModal: !this.state.showShareModal });
        this.toggleShortcutsModal = () => {
            const showShortcutsModal = !this.state.showShortcutsModal;
            if (showShortcutsModal) {
                const { locale, type } = this.props;
                (type == 'listen' ? _services_tracker__WEBPACK_IMPORTED_MODULE_3__["trackListening"] : _services_tracker__WEBPACK_IMPORTED_MODULE_3__["trackRecording"])('view-shortcuts', locale);
            }
            return this.setState({ showShortcutsModal });
        };
        this.handleKeyDown = (event) => {
            const { getString, isSubmitted, locale, onReset, onSubmit, type, } = this.props;
            if (event.ctrlKey ||
                event.altKey ||
                event.shiftKey ||
                this.state.showReportModal) {
                return;
            }
            const isEnter = event.key === 'Enter';
            if (isSubmitted && isEnter) {
                onReset();
                return;
            }
            if (this.isDone) {
                if (isEnter && onSubmit)
                    onSubmit();
                return;
            }
            const shortcut = this.shortcuts.find(({ key }) => getString(key).toLowerCase() === event.key);
            if (!shortcut)
                return;
            shortcut.action();
            (type === 'listen' ? _services_tracker__WEBPACK_IMPORTED_MODULE_3__["trackListening"] : _services_tracker__WEBPACK_IMPORTED_MODULE_3__["trackRecording"])('shortcut', locale);
            event.preventDefault();
        };
    }
    get showAccountModalDefault() {
        const { flags, user } = this.props;
        return (flags.showAccountConversionModal &&
            !user.account &&
            !JSON.parse(localStorage.getItem(HAS_SEEN_ACCOUNT_MODAL_KEY)));
    }
    componentDidMount() {
        this.startWaving();
        window.addEventListener('keydown', this.handleKeyDown);
        // preload account modal images to prevent layout shifting
        if (this.showAccountModalDefault) {
            new Image().src = __webpack_require__(/*! ./waves.svg */ "./src/components/pages/contribution/waves.svg");
            new Image().src = __webpack_require__(/*! ./mars-blue.svg */ "./src/components/pages/contribution/mars-blue.svg");
        }
    }
    componentDidUpdate(prevProps) {
        this.startWaving();
        const { activeIndex, isPlaying, isSubmitted, onReset, user } = this.props;
        if (activeIndex == 1 && prevProps.activeIndex != activeIndex) {
            const showAccountModal = this.showAccountModalDefault;
            this.setState({ showAccountModal });
            if (showAccountModal) {
                localStorage.setItem(HAS_SEEN_ACCOUNT_MODAL_KEY, JSON.stringify(true));
            }
        }
        if (this.wave) {
            isPlaying ? this.wave.play() : this.wave.idle();
        }
        if (isSubmitted && user.account && user.account.skip_submission_feedback) {
            onReset();
        }
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
        if (this.wave)
            this.wave.idle();
    }
    get isLoaded() {
        return this.props.sentences.length > 0;
    }
    get isDone() {
        return this.isLoaded && this.props.activeIndex === -1;
    }
    get shortcuts() {
        const { onSkip, shortcuts } = this.props;
        return shortcuts.concat({
            key: 'shortcut-skip',
            label: 'skip',
            action: onSkip,
        });
    }
    selectPill(i) {
        this.setState({ selectedPill: i });
    }
    render() {
        const { errorContent, flags, getString, isSubmitted, onSkip, reportModalProps, type, user, } = this.props;
        const { showAccountModal, showReportModal, showShareModal, showShortcutsModal, } = this.state;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "contribution-wrapper", onClick: () => this.selectPill(null) },
            showShareModal && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_share_modal_share_modal__WEBPACK_IMPORTED_MODULE_10__["default"], { onRequestClose: this.toggleShareModal })),
            showShortcutsModal && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_modal_modal__WEBPACK_IMPORTED_MODULE_6__["default"], { innerClassName: "shortcuts-modal", onRequestClose: this.toggleShortcutsModal },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "shortcuts" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "shortcuts" }, this.shortcuts.map(({ key, label }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: key, className: "shortcut" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("kbd", null, getString(key).toUpperCase()),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "label" }, getString(label)))))))),
            showReportModal && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_report_report__WEBPACK_IMPORTED_MODULE_11__["ReportModal"], Object.assign({ onRequestClose: () => this.setState({ showReportModal: false }), onSubmitted: onSkip }, reportModalProps))),
            showAccountModal && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](AccountModal, { onRequestClose: () => this.setState({ showAccountModal: false }) })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: [
                    'contribution',
                    type,
                    this.isDone ? 'submittable' : '',
                ].join(' ') },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "top" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_locale_helpers__WEBPACK_IMPORTED_MODULE_5__["LocaleLink"], { to: user.account ? _urls__WEBPACK_IMPORTED_MODULE_4__["default"].DASHBOARD : _urls__WEBPACK_IMPORTED_MODULE_4__["default"].ROOT, className: "back" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_7__["ArrowLeft"], null)),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "links" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "speak" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_locale_helpers__WEBPACK_IMPORTED_MODULE_5__["LocaleNavLink"], { to: _urls__WEBPACK_IMPORTED_MODULE_4__["default"].SPEAK })),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "listen" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_locale_helpers__WEBPACK_IMPORTED_MODULE_5__["LocaleNavLink"], { to: _urls__WEBPACK_IMPORTED_MODULE_4__["default"].LISTEN }))),
                    this.isLoaded && !errorContent ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'counter ' + (isSubmitted ? 'done' : '') },
                        isSubmitted && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_7__["CheckIcon"], null),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "clips-with-count", bold: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("b", null), "$count": this.renderClipCount() },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "text" })))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null)),
                    isSubmitted && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "open-share", onClick: this.toggleShareModal },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_7__["ShareIcon"], null)))),
                this.renderContent())));
    }
    renderClipCount() {
        const { activeIndex, isSubmitted } = this.props;
        return ((isSubmitted ? SET_COUNT : activeIndex + 1 || SET_COUNT) + '/' + SET_COUNT);
    }
    renderContent() {
        const { activeIndex, errorContent, getString, instruction, isFirstSubmit, isSubmitted, onReset, onSkip, onSubmit, pills, primaryButtons, sentences, type, } = this.props;
        const { selectedPill } = this.state;
        return isSubmitted ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_success__WEBPACK_IMPORTED_MODULE_12__["default"], { onReset: onReset, type: type })) : (errorContent ||
            (this.isLoaded && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "cards-and-pills" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "cards-and-instruction" },
                        instruction({
                            $actionType: getString('action-click'),
                            children: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "instruction hidden-sm-down" }),
                        }) || react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "instruction hidden-sm-down" }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "cards" }, sentences.map((sentence, i) => {
                            const activeSentenceIndex = this.isDone
                                ? SET_COUNT - 1
                                : activeIndex;
                            const isActive = i === activeSentenceIndex;
                            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: sentence, className: 'card card-dimensions ' + (isActive ? '' : 'inactive'), style: {
                                    transform: [
                                        `scale(${isActive ? 1 : 0.9})`,
                                        `translateX(${(document.dir == 'rtl' ? -1 : 1) *
                                            (i - activeSentenceIndex) *
                                            -130}%)`,
                                    ].join(' '),
                                    opacity: i < activeSentenceIndex ? 0 : 1,
                                } },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { margin: 'auto', width: '100%' } }, sentence)));
                        }))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "pills" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "inner" },
                            !errorContent && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "counter" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "clips-with-count", bold: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("b", null), "$count": this.renderClipCount() },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "text" })))),
                            this.isDone && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "review-instructions" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "review-instruction" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)))),
                            pills.map((pill, i) => pill({
                                isOpen: this.isDone || selectedPill === i,
                                key: i,
                                num: i + 1,
                                onClick: () => this.selectPill(i),
                                onShare: this.toggleShareModal,
                                style: selectedPill !== null &&
                                    Math.abs(Math.min(Math.max(selectedPill, 1), pills.length - 2) - i) > 1
                                    ? { display: 'none' }
                                    : {},
                            }))))),
                instruction({
                    $actionType: getString('action-tap'),
                    children: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "instruction hidden-md-up" }),
                }) || react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "instruction hidden-md-up" }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "primary-buttons" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("canvas", { ref: this.canvasRef }),
                    primaryButtons),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "buttons" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_8__["Button"], { rounded: true, outline: true, className: "hidden-sm-down", onClick: this.toggleShortcutsModal },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_7__["KeyboardIcon"], null),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "shortcuts" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null))),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "extra-button" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_report_report__WEBPACK_IMPORTED_MODULE_11__["ReportButton"], { onClick: () => this.setState({ showReportModal: true }) }))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_8__["Button"], { rounded: true, outline: true, className: "skip", disabled: !this.isLoaded, onClick: onSkip },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "skip" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)),
                            ' ',
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_7__["SkipIcon"], null)),
                        onSubmit && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Tooltip, { arrow: true, disabled: !this.isDone, open: isFirstSubmit || undefined, title: getString('record-submit-tooltip', {
                                actionType: getString('action-tap'),
                            }) },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "submit-form-action" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_primary_buttons_primary_buttons__WEBPACK_IMPORTED_MODULE_9__["PrimaryButton"], { className: "submit", disabled: !this.isDone, onClick: onSubmit, type: "submit" }))))))))));
    }
}
ContributionPage.defaultProps = {
    isFirstSubmit: false,
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(({ flags, locale, user }) => ({
    flags,
    locale,
    user,
}))(Object(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["withLocalization"])(ContributionPage)));


/***/ }),

/***/ "./src/components/pages/contribution/mars-blue.svg":
/*!*********************************************************!*\
  !*** ./src/components/pages/contribution/mars-blue.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d9045f1485c51d73c64d437fc1a503af.svg";

/***/ }),

/***/ "./src/components/pages/contribution/pill.css":
/*!****************************************************!*\
  !*** ./src/components/pages/contribution/pill.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/contribution/pill.tsx":
/*!****************************************************!*\
  !*** ./src/components/pages/contribution/pill.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pill_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pill.css */ "./src/components/pages/contribution/pill.css");
/* harmony import */ var _pill_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pill_css__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (({ className = '', children, isOpen, num, onClick, openable = false, status, style, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: ['pill', isOpen ? 'open' : '', status, className].join(' '), onClick: openable
        ? event => {
            if (status === 'pending')
                return;
            event.stopPropagation();
            if (isOpen)
                return;
            onClick();
        }
        : null, style: style },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "contents" }, children),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "num" }, num))));


/***/ }),

/***/ "./src/components/pages/contribution/report/report.css":
/*!*************************************************************!*\
  !*** ./src/components/pages/contribution/report/report.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/contribution/report/report.tsx":
/*!*************************************************************!*\
  !*** ./src/components/pages/contribution/report/report.tsx ***!
  \*************************************************************/
/*! exports provided: ReportModal, ReportButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModal", function() { return ReportModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportButton", function() { return ReportButton; });
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_store_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../hooks/store-hooks */ "./src/hooks/store-hooks.ts");
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modal/modal */ "./src/components/modal/modal.tsx");
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/icons */ "./src/components/ui/icons.tsx");
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/ui */ "./src/components/ui/ui.tsx");
/* harmony import */ var _report_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report.css */ "./src/components/pages/contribution/report/report.css");
/* harmony import */ var _report_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_report_css__WEBPACK_IMPORTED_MODULE_6__);
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








const CheckboxRow = (_a) => {
    var { children, title } = _a, props = __rest(_a, ["children", "title"]);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "checkbox-row" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: title },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "reason-title" })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], Object.assign({}, props))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "detail" }, children)));
};
function ReportModal(_a) {
    var { kind, id, reasons, onSubmitted } = _a, props = __rest(_a, ["kind", "id", "reasons", "onSubmitted"]);
    const api = Object(_hooks_store_hooks__WEBPACK_IMPORTED_MODULE_2__["useAPI"])();
    const [selectedReasons, setSelectedReasons] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
    const [otherText, setOtherText] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
    const [submitStatus, setSubmitStatus] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
    if (submitStatus == 'submitted') {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_modal_modal__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, props, { innerClassName: "report-success-modal" }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { className: "check", src: __webpack_require__(/*! ./success.svg */ "./src/components/pages/contribution/report/success.svg"), alt: "Success" }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "success" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "report-success" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "continue" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_5__["Button"], { outline: true, rounded: true, onClick: props.onRequestClose }))));
    }
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_modal_modal__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, props, { innerClassName: "report-modal" }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "report-title" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "report-ask" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            reasons.map(reason => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](CheckboxRow, { key: reason, title: 'report-' + reason, value: selectedReasons[reason], onChange: (e) => setSelectedReasons(Object.assign({}, selectedReasons, { [reason]: e.target.checked })) },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: ['report', reason, 'detail'].join('-') },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null))))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](CheckboxRow, { title: "other", onChange: (e) => setOtherText(e.target.checked ? '' : null), value: otherText != null }, otherText != null && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "report-other-comment", attrs: { placeholder: true } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("textarea", { value: otherText, onChange: (e) => setOtherText(e.target.value), style: { marginTop: 8 } }))))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_5__["Button"], { rounded: true, disabled: submitStatus == 'submitting' ||
                otherText == '' ||
                (!Object.values(selectedReasons).some(Boolean) && otherText == null), onClick: () => {
                api.report({
                    kind,
                    id,
                    reasons: Object.entries(selectedReasons)
                        .filter(([key, value]) => value)
                        .map(([key]) => key)
                        .concat(otherText || []),
                });
                setSubmitStatus('submitted');
                onSubmitted();
            } },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "report" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_4__["ArrowLeft"], null))));
}
const ReportButton = (props) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_5__["Button"], Object.assign({ outline: true, rounded: true, className: "open-report-button" }, props),
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("svg", { width: "24", height: "24", viewBox: "0 0 24 24" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("defs", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("path", { id: "flag-a", d: "M20.4 2.1c-.4-.2-.8-.1-1.1.2 0 0-.9.7-3.3.7-1.3 0-2.4-.5-3.6-.9C11.1 1.5 9.7 1 8 1 4.8 1 3.5 2.1 3.3 2.3c-.2.2-.3.4-.3.7v19c0 .6.4 1 1 1s1-.4 1-1v-6.5c.4-.2 1.4-.5 3-.5 1.3 0 2.4.5 3.6.9 1.3.5 2.7 1.1 4.4 1.1 3.2 0 4.5-1.1 4.7-1.3.2-.2.3-.4.3-.7V3c0-.4-.2-.7-.6-.9zM19 14.5c-.4.2-1.4.5-3 .5-1.3 0-2.4-.5-3.6-.9C11.1 13.5 9.7 13 8 13c-1.3 0-2.3.2-3 .4V3.5c.4-.2 1.4-.5 3-.5 1.3 0 2.4.5 3.6.9C12.9 4.5 14.3 5 16 5c1.3 0 2.3-.2 3-.4v9.9z" })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("g", { fill: "none", fillRule: "evenodd" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("mask", { id: "flag-b", fill: "#fff" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("use", { xlinkHref: "#flag-a" })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("use", { fill: "#000", fillRule: "nonzero", xlinkHref: "#flag-a" }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("g", { fill: "#4A4A4A", mask: "url(#flag-b)" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("path", { d: "M0 0h24v24H0z" })))),
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "report" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null))));


/***/ }),

/***/ "./src/components/pages/contribution/report/success.svg":
/*!**************************************************************!*\
  !*** ./src/components/pages/contribution/report/success.svg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "93c40243e5dfa5d2315e217e32beea14.svg";

/***/ }),

/***/ "./src/components/pages/contribution/success.css":
/*!*******************************************************!*\
  !*** ./src/components/pages/contribution/success.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/contribution/success.tsx":
/*!*******************************************************!*\
  !*** ./src/components/pages/contribution/success.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants */ "./src/constants.ts");
/* harmony import */ var _hooks_store_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/store-hooks */ "./src/hooks/store-hooks.ts");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../urls */ "./src/urls.ts");
/* harmony import */ var _locale_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../locale-helpers */ "./src/components/locale-helpers.tsx");
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/icons */ "./src/components/ui/icons.tsx");
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/ui */ "./src/components/ui/ui.tsx");
/* harmony import */ var _contribution__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contribution */ "./src/components/pages/contribution/contribution.tsx");
/* harmony import */ var _success_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./success.css */ "./src/components/pages/contribution/success.css");
/* harmony import */ var _success_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_success_css__WEBPACK_IMPORTED_MODULE_9__);











const COUNT_UP_MS = 500; // should be kept in sync with .contribution-success .done transition duration
const GoalPercentage = ({ current, final, }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "goal-percentage" },
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "final" },
        final,
        "%"),
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "current" },
        current,
        "%")));
function Success({ getString, onReset, type, }) {
    const api = Object(_hooks_store_hooks__WEBPACK_IMPORTED_MODULE_3__["useAPI"])();
    const account = Object(_hooks_store_hooks__WEBPACK_IMPORTED_MODULE_3__["useAccount"])();
    const [locale] = Object(_locale_helpers__WEBPACK_IMPORTED_MODULE_5__["useLocale"])();
    const hasAccount = Boolean(account);
    const customGoal = hasAccount && account.custom_goals.find(g => g.locale == locale);
    const goalValue = _constants__WEBPACK_IMPORTED_MODULE_2__["DAILY_GOAL"][type];
    const killAnimation = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
    const startedAt = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    const [contributionCount, setContributionCount] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
    const [currentCount, setCurrentCount] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
    function countUp(time) {
        if (killAnimation.current)
            return;
        if (!startedAt.current)
            startedAt.current = time;
        const newCount = Math.min(Math.ceil((contributionCount * (time - startedAt.current)) / COUNT_UP_MS), contributionCount);
        setCurrentCount(newCount);
        if (newCount < contributionCount) {
            requestAnimationFrame(countUp);
        }
    }
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
        (type === 'speak'
            ? api.fetchDailyClipsCount()
            : api.fetchDailyVotesCount()).then(value => {
            setContributionCount(value + _contribution__WEBPACK_IMPORTED_MODULE_8__["SET_COUNT"]);
        });
        return () => {
            killAnimation.current = true;
        };
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
        if (contributionCount != null) {
            countUp(performance.now());
        }
    }, [contributionCount]);
    const finalPercentage = Math.ceil((100 * (contributionCount || 0)) / goalValue);
    const ContributeMoreButton = (props) => hasAccount ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_7__["Button"], Object.assign({ className: "contribute-more-button", rounded: true, onClick: onReset }, props))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_7__["TextButton"], Object.assign({ className: "contribute-more-button secondary", onClick: onReset }, props)));
    const goalPercentage = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](GoalPercentage, { current: Math.ceil((100 * (currentCount === null ? 0 : currentCount)) / goalValue), final: finalPercentage }));
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "contribution-success" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "counter done" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_6__["CheckIcon"], null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "clips-with-count", bold: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("b", null), "$count": _contribution__WEBPACK_IMPORTED_MODULE_8__["SET_COUNT"] + '/' + _contribution__WEBPACK_IMPORTED_MODULE_8__["SET_COUNT"] },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "text" }))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: type === 'speak' ? 'goal-help-recording' : 'goal-help-validation', goalPercentage: goalPercentage, "$goalValue": goalValue },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "progress" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "done", style: {
                    width: Math.min(finalPercentage, 100) + '%',
                } })),
        hasAccount ? (!customGoal && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "info-card" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "help-reach-hours", "$hours": 10000, "$language": getString(locale) },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "get-started-goals" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_7__["LinkButton"], { rounded: true, href: _urls__WEBPACK_IMPORTED_MODULE_4__["default"].GOALS }))))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "info-card" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "profile-explanation" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "login-signup" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_7__["LinkButton"], { rounded: true, href: "/login" })))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ContributeMoreButton, null,
            type === 'speak' ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_6__["MicIcon"], null) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_6__["PlayOutlineIcon"], null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "contribute-more", "$count": _contribution__WEBPACK_IMPORTED_MODULE_8__["SET_COUNT"] },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null))),
        hasAccount && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "edit-profile" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_locale_helpers__WEBPACK_IMPORTED_MODULE_5__["LocaleLink"], { className: "secondary", to: _urls__WEBPACK_IMPORTED_MODULE_4__["default"].PROFILE_INFO })))));
}
/* harmony default export */ __webpack_exports__["default"] = (Object(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["withLocalization"])(Success));


/***/ }),

/***/ "./src/components/pages/contribution/wave.ts":
/*!***************************************************!*\
  !*** ./src/components/pages/contribution/wave.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Wave; });
const RATIO = window.devicePixelRatio;
const WIDTH = RATIO * 320;
const HEIGHT = RATIO * 100;
const IDLE_AMPLITUDE = 0.1;
const PLAY_AMPLITUDE = 0.6;
const LOW_FPS = 30;
const DISABLE_ANIMATION_LOW_FPS_THRESHOLD = 3;
class Curve {
    constructor(args) {
        Object.assign(this, args);
        this.tick = 0;
        this.respawn();
    }
    respawn() {
        this.amplitude = 0.3 + Math.random() * 0.7;
        this.seed = Math.random();
        this.openClass = (5 + Math.random() * 4) | 0;
    }
    equation(i) {
        const y = ((-1 *
            Math.abs(Math.sin(this.tick)) *
            this.baseAmplitude *
            this.amplitude *
            HEIGHT) /
            2) *
            (1 / Math.pow((1 + this.openClass * Math.pow(i, 2)), 2));
        if (Math.abs(y) < 0.001) {
            this.respawn();
        }
        return y;
    }
    _draw(direction) {
        this.tick += this.speed * (1 - 0.5 * Math.sin(this.seed * Math.PI));
        const ctx = this.ctx;
        ctx.beginPath();
        const xBase = WIDTH / 2 + (-WIDTH / 4 + this.seed * (WIDTH / 2));
        const yBase = HEIGHT / 2;
        let x;
        let y;
        let xInit;
        let i = -3;
        while (i <= 3) {
            x = xBase + (i * WIDTH) / 4;
            y = yBase + direction * this.equation(i);
            xInit = xInit || x;
            ctx.lineTo(x, y);
            i += 0.01;
        }
        const h = Math.abs(this.equation(0));
        const gradient = ctx.createRadialGradient(xBase, yBase, h * 2, xBase, yBase, h * 0.3);
        gradient.addColorStop(0, `rgba(${this.color.join(',')},0.1)`);
        gradient.addColorStop(1, `rgba(${this.color.join(',')},0.05)`);
        ctx.fillStyle = gradient;
        ctx.lineTo(xInit, yBase);
        ctx.closePath();
        ctx.fill();
    }
    draw() {
        this._draw(-1);
        this._draw(1);
    }
}
let lastFPSCheckAt = 0;
let lowFPSCount = 0;
let framesInLastSecond = [];
class Wave {
    constructor(canvas) {
        this.amplitude = IDLE_AMPLITUDE;
        this.colors = [[89, 203, 183], [177, 181, 229], [248, 144, 150]];
        this.shouldDraw = false;
        this.speed = 0.1;
        canvas.width = WIDTH;
        canvas.height = HEIGHT;
        canvas.style.width = `${WIDTH / RATIO}px`;
        canvas.style.height = `${HEIGHT / RATIO}px`;
        this.ctx = canvas.getContext('2d');
        this.curves = this.colors
            .reduce((arr, color) => [...arr, color, color], [])
            .map(color => new Curve({
            color: color,
            ctx: this.ctx,
            speed: this.speed,
            baseAmplitude: 2 * IDLE_AMPLITUDE,
        }));
        this.draw();
    }
    clear() {
        this.ctx.globalCompositeOperation = 'destination-out';
        this.ctx.fillRect(0, 0, WIDTH, HEIGHT);
        this.ctx.globalCompositeOperation = 'lighter';
    }
    draw() {
        if (lowFPSCount >= DISABLE_ANIMATION_LOW_FPS_THRESHOLD) {
            return;
        }
        this.clear();
        const baseAmplitude = this.curves[0].baseAmplitude * 0.9 + this.amplitude * 0.1;
        for (const curve of this.curves) {
            curve.baseAmplitude = baseAmplitude;
            curve.draw();
        }
        if (this.shouldDraw || Math.abs(baseAmplitude - this.amplitude) > 0.01) {
            requestAnimationFrame(this.draw.bind(this));
        }
        const now = performance.now();
        framesInLastSecond.push(now);
        if (now - lastFPSCheckAt < 1000)
            return;
        lastFPSCheckAt = now;
        const index = framesInLastSecond
            .slice()
            .reverse()
            .findIndex(t => now - t > 1000);
        if (index === -1) {
            return;
        }
        framesInLastSecond = framesInLastSecond.slice(framesInLastSecond.length - index - 1);
        if (framesInLastSecond.length < LOW_FPS) {
            lowFPSCount++;
        }
    }
    play() {
        this.amplitude = PLAY_AMPLITUDE;
        this.shouldDraw = true;
        this.draw();
    }
    idle() {
        this.shouldDraw = false;
        this.amplitude = IDLE_AMPLITUDE;
        framesInLastSecond = [];
    }
}


/***/ }),

/***/ "./src/components/pages/contribution/waves.svg":
/*!*****************************************************!*\
  !*** ./src/components/pages/contribution/waves.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a997774a58d37a722ef16fa7cc0d6c14.svg";

/***/ }),

/***/ "./src/components/primary-buttons/primary-buttons.css":
/*!************************************************************!*\
  !*** ./src/components/primary-buttons/primary-buttons.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/primary-buttons/primary-buttons.tsx":
/*!************************************************************!*\
  !*** ./src/components/primary-buttons/primary-buttons.tsx ***!
  \************************************************************/
/*! exports provided: PrimaryButton, RecordButton, RecordLink, Voice, PlayButton, PlayLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryButton", function() { return PrimaryButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordButton", function() { return RecordButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordLink", function() { return RecordLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Voice", function() { return Voice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayButton", function() { return PlayButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayLink", function() { return PlayLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../urls */ "./src/urls.ts");
/* harmony import */ var _locale_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../locale-helpers */ "./src/components/locale-helpers.tsx");
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/icons */ "./src/components/ui/icons.tsx");
/* harmony import */ var _primary_buttons_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./primary-buttons.css */ "./src/components/primary-buttons/primary-buttons.css");
/* harmony import */ var _primary_buttons_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_primary_buttons_css__WEBPACK_IMPORTED_MODULE_4__);
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





const PrimaryButton = (_a) => {
    var { className, to } = _a, props = __rest(_a, ["className", "to"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: [
            'primary-button',
            className,
            props.disabled ? 'disabled' : '',
        ].join(' ') },
        to ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_locale_helpers__WEBPACK_IMPORTED_MODULE_2__["LocaleLink"], Object.assign({ to: to }, props))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", Object.assign({ type: "button" }, props))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "background" })));
};
const RecordButton = (_a) => {
    var { status } = _a, props = __rest(_a, ["status"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PrimaryButton, Object.assign({ className: status === null ? 'stop' : 'record' }, props, { disabled: status === 'waiting' }),
        status === null && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_3__["MicIcon"], null),
        status === 'recording' && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_3__["StopIcon"], null)));
};
const RecordLink = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PrimaryButton, Object.assign({ className: "stop", to: _urls__WEBPACK_IMPORTED_MODULE_1__["default"].SPEAK }, props),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_3__["MicIcon"], null)));
const Voice = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PrimaryButton, Object.assign({ className: "stop" }, props)));
const PlayButton = (_a) => {
    var { isPlaying } = _a, props = __rest(_a, ["isPlaying"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PrimaryButton, Object.assign({ className: isPlaying ? 'stop' : 'play' }, props), isPlaying ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_3__["StopIcon"], null) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_3__["OldPlayIcon"], null)));
};
const PlayLink = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PrimaryButton, Object.assign({ className: "play", to: _urls__WEBPACK_IMPORTED_MODULE_1__["default"].LISTEN }, props),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_3__["OldPlayIcon"], null)));


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

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: DAILY_GOAL, BENEFITS, WHATS_PUBLIC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAILY_GOAL", function() { return DAILY_GOAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BENEFITS", function() { return BENEFITS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WHATS_PUBLIC", function() { return WHATS_PUBLIC; });
const DAILY_GOAL = Object.freeze({ speak: 1200, listen: 2400 });
const BENEFITS = [
    'rich-data',
    'improve-audio',
    'keep-track',
    'compare-progress',
    'view-goals',
    'join-newsletter',
];
const WHATS_PUBLIC = [
    'email-not-public',
    'recordings-and-locale-public',
    'username-optin-public',
    'demographic-deidentified',
    'username-email-not-demographic',
];


/***/ })

}]);
//# sourceMappingURL=2.bundle.js.map