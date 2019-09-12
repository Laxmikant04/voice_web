(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./src/components/pages/contribution/speak/appstore.svg":
/*!**************************************************************!*\
  !*** ./src/components/pages/contribution/speak/appstore.svg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d0558d91063038236b60e3ef71fdc1fd.svg";

/***/ }),

/***/ "./src/components/pages/contribution/speak/recording-pill.css":
/*!********************************************************************!*\
  !*** ./src/components/pages/contribution/speak/recording-pill.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/contribution/speak/recording-pill.tsx":
/*!********************************************************************!*\
  !*** ./src/components/pages/contribution/speak/recording-pill.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_tracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/tracker */ "./src/services/tracker.ts");
/* harmony import */ var _locale_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../locale-helpers */ "./src/components/locale-helpers.tsx");
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/icons */ "./src/components/ui/icons.tsx");
/* harmony import */ var _pill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pill */ "./src/components/pages/contribution/pill.tsx");
/* harmony import */ var _recording_pill_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recording-pill.css */ "./src/components/pages/contribution/speak/recording-pill.css");
/* harmony import */ var _recording_pill_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_recording_pill_css__WEBPACK_IMPORTED_MODULE_6__);
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








const { Tooltip } = __webpack_require__(/*! react-tippy */ "../node_modules/react-tippy/dist/react-tippy.js");
function RecordingPill(_a) {
    var { children, clip, getString, onRerecord, onShare, status } = _a, props = __rest(_a, ["children", "clip", "getString", "onRerecord", "onShare", "status"]);
    const [locale] = Object(_locale_helpers__WEBPACK_IMPORTED_MODULE_3__["useLocale"])();
    const [isPlaying, setIsPlaying] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
    const [showSentenceTooltip, setShowSentenceTooltip] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
    const audioRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    const toggleIsPlaying = () => {
        const { current: audio } = audioRef;
        let nextIsPlaying = !isPlaying;
        if (nextIsPlaying) {
            Object(_services_tracker__WEBPACK_IMPORTED_MODULE_2__["trackRecording"])('listen', locale);
            audio.play();
        }
        else {
            audio.pause();
            audio.currentTime = 0;
        }
        setIsPlaying(nextIsPlaying);
    };
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_pill__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, props, { className: "recording", openable: true, status: status }),
        children,
        !children && status === 'active' && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "record-cta" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "text" }))),
        !children && status === 'done' && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("audio", { src: clip.recording.url, preload: "auto", onEnded: toggleIsPlaying, ref: audioRef }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Tooltip, { arrow: true, open: isPlaying || showSentenceTooltip, theme: "grey-tooltip", title: clip.sentence.text },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "play", type: "button", onClick: toggleIsPlaying, onMouseEnter: () => setShowSentenceTooltip(true), onMouseLeave: () => setShowSentenceTooltip(false) },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "padder" }, isPlaying ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_4__["StopIcon"], null) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_4__["PlayOutlineIcon"], null)))),
            isPlaying ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "placeholder" })) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Tooltip, { arrow: true, title: getString('review-tooltip') },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "redo", type: "button", onClick: onRerecord },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "padder" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_4__["RedoIcon"], null)))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "share", type: "button", onClick: onShare },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "padder" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_4__["ShareIcon"], null)))))))));
}
/* harmony default export */ __webpack_exports__["default"] = (Object(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["withLocalization"])(RecordingPill));


/***/ }),

/***/ "./src/components/pages/contribution/speak/speak.css":
/*!***********************************************************!*\
  !*** ./src/components/pages/contribution/speak/speak.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/contribution/speak/speak.tsx":
/*!***********************************************************!*\
  !*** ./src/components/pages/contribution/speak/speak.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "../node_modules/react-router/esm/react-router.js");
/* harmony import */ var _stores_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../stores/notifications */ "./src/stores/notifications.ts");
/* harmony import */ var _stores_sentences__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../stores/sentences */ "./src/stores/sentences.ts");
/* harmony import */ var _stores_uploads__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../stores/uploads */ "./src/stores/uploads.ts");
/* harmony import */ var _stores_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../stores/user */ "./src/stores/user.ts");
/* harmony import */ var _services_tracker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/tracker */ "./src/services/tracker.ts");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../urls */ "./src/urls.ts");
/* harmony import */ var _locale_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../locale-helpers */ "./src/components/locale-helpers.tsx");
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../modal/modal */ "./src/components/modal/modal.tsx");
/* harmony import */ var _terms_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../terms-modal */ "./src/components/terms-modal.tsx");
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../ui/icons */ "./src/components/ui/icons.tsx");
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../ui/ui */ "./src/components/ui/ui.tsx");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../utility */ "./src/utility.ts");
/* harmony import */ var _contribution__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../contribution */ "./src/components/pages/contribution/contribution.tsx");
/* harmony import */ var _primary_buttons_primary_buttons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../primary-buttons/primary-buttons */ "./src/components/primary-buttons/primary-buttons.tsx");
/* harmony import */ var _audio_ios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./audio-ios */ "./src/components/pages/contribution/speak/audio-ios.ts");
/* harmony import */ var _audio_web__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./audio-web */ "./src/components/pages/contribution/speak/audio-web.ts");
/* harmony import */ var _recording_pill__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./recording-pill */ "./src/components/pages/contribution/speak/recording-pill.tsx");
/* harmony import */ var _speak_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./speak.css */ "./src/components/pages/contribution/speak/speak.css");
/* harmony import */ var _speak_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_speak_css__WEBPACK_IMPORTED_MODULE_21__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const NavigationPrompt = __webpack_require__(/*! react-router-navigation-prompt */ "../node_modules/react-router-navigation-prompt/es/index.js").default;


















const MIN_RECORDING_MS = 1000;
const MAX_RECORDING_MS = 10000;
const MIN_VOLUME = 1;
var RecordingError;
(function (RecordingError) {
    RecordingError["TOO_SHORT"] = "TOO_SHORT";
    RecordingError["TOO_LONG"] = "TOO_LONG";
    RecordingError["TOO_QUIET"] = "TOO_QUIET";
})(RecordingError || (RecordingError = {}));
const UnsupportedInfo = () => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "unsupported" },
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "record-platform-not-supported" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null)),
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { key: "desktop" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "record-platform-not-supported-desktop" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { target: "_blank", href: "https://www.firefox.com/" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_13__["FontIcon"], { type: "firefox" }),
            "Firefox"),
        ' ',
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { target: "_blank", href: "https://www.google.com/chrome" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_13__["FontIcon"], { type: "chrome" }),
            "Chrome")),
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { key: "ios" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "record-platform-not-supported-ios", bold: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("b", null) },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null))),
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { target: "_blank", href: Object(_utility__WEBPACK_IMPORTED_MODULE_15__["getItunesURL"])() },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { src: __webpack_require__(/*! ./appstore.svg */ "./src/components/pages/contribution/speak/appstore.svg") }))));
const initialState = {
    clips: [],
    isSubmitted: false,
    error: null,
    recordingStatus: null,
    rerecordIndex: null,
    showPrivacyModal: false,
    showDiscardModal: false,
};
class SpeakPage extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor() {
        super(...arguments);
        this.state = initialState;
        this.isUnsupportedPlatform = false;
        this.maxVolume = 0;
        this.recordingStartTime = 0;
        this.recordingStopTime = 0;
        this.handleKeyUprerecording = (event) => __awaiter(this, void 0, void 0, function* () {
            let index = null;
            //for both sets of number keys on a keyboard with shift key
            if (event.code === 'Digit1' || event.code === 'Numpad1') {
                index = 0;
            }
            else if (event.code === 'Digit2' || event.code === 'Numpad2') {
                index = 1;
            }
            else if (event.code === 'Digit3' || event.code === 'Numpad3') {
                index = 2;
            }
            else if (event.code === 'Digit4' || event.code === 'Numpad4') {
                index = 3;
            }
            else if (event.code === 'Digit5' || event.code === 'Numpad5') {
                index = 4;
            }
            if (index !== null) {
                Object(_services_tracker__WEBPACK_IMPORTED_MODULE_8__["trackRecording"])('rerecord', this.props.locale);
                yield this.discardRecording();
                this.setState({
                    rerecordIndex: index,
                });
            }
        });
        this.releaseMicrophone = () => {
            if (!document.hidden) {
                return;
            }
            if (this.isRecording) {
                this.saveRecording();
            }
            this.audio.release();
        };
        this.processRecording = (info) => {
            const error = this.getRecordingError();
            if (error) {
                return this.setState({ error });
            }
            const { clips } = this.state;
            this.setState({
                clips: clips.map(({ recording, sentence }, i) => ({
                    recording: i === this.getRecordingIndex() ? info : recording,
                    sentence,
                })),
                rerecordIndex: null,
            });
            Object(_services_tracker__WEBPACK_IMPORTED_MODULE_8__["trackRecording"])('record', this.props.locale);
        };
        this.getRecordingError = () => {
            const length = this.recordingStopTime - this.recordingStartTime;
            if (length < MIN_RECORDING_MS) {
                return RecordingError.TOO_SHORT;
            }
            if (length > MAX_RECORDING_MS) {
                return RecordingError.TOO_LONG;
            }
            if (this.maxVolume < MIN_VOLUME) {
                return RecordingError.TOO_QUIET;
            }
            return null;
        };
        this.updateVolume = (volume) => {
            // For some reason, volume is always exactly 100 at the end of the
            // recording, even if it is silent; so ignore that.
            if (volume !== 100 && volume > this.maxVolume) {
                this.maxVolume = volume;
            }
        };
        this.rerecord = (i) => __awaiter(this, void 0, void 0, function* () {
            Object(_services_tracker__WEBPACK_IMPORTED_MODULE_8__["trackRecording"])('rerecord', this.props.locale);
            yield this.discardRecording();
            this.setState({
                rerecordIndex: i,
            });
        });
        this.handleRecordClick = () => __awaiter(this, void 0, void 0, function* () {
            if (this.state.recordingStatus === 'waiting')
                return;
            const isRecording = this.isRecording;
            this.setState({ recordingStatus: 'waiting' });
            if (isRecording) {
                this.saveRecording();
                return;
            }
            try {
                yield this.audio.init();
                yield this.startRecording();
            }
            catch (err) {
                if (err in _audio_web__WEBPACK_IMPORTED_MODULE_19__["AudioError"]) {
                    this.setState({ error: err });
                }
                else {
                    throw err;
                }
            }
        });
        this.startRecording = () => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.audio.start();
                this.maxVolume = 0;
                this.recordingStartTime = Date.now();
                this.recordingStopTime = 0;
                this.setState({
                    // showSubmitSuccess: false,
                    recordingStatus: 'recording',
                    error: null,
                });
            }
            catch (err) {
                this.setState({
                    recordingStatus: null,
                });
            }
        });
        this.saveRecording = () => {
            const RECORD_STOP_DELAY = 500;
            setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                const info = yield this.audio.stop();
                this.processRecording(info);
            }), RECORD_STOP_DELAY);
            this.recordingStopTime = Date.now();
            this.setState({
                recordingStatus: null,
            });
        };
        this.discardRecording = () => __awaiter(this, void 0, void 0, function* () {
            if (!this.isRecording)
                return;
            yield this.audio.stop();
            this.setState({ recordingStatus: null });
        });
        this.cancelReRecord = () => __awaiter(this, void 0, void 0, function* () {
            yield this.discardRecording();
            this.setState({ rerecordIndex: null });
        });
        this.handleSkip = () => __awaiter(this, void 0, void 0, function* () {
            const { api, removeSentences, sentences } = this.props;
            const { clips } = this.state;
            yield this.discardRecording();
            const current = this.getRecordingIndex();
            const { id } = clips[current].sentence;
            removeSentences([id]);
            this.setState({
                clips: clips.map((clip, i) => current === i ? { recording: null, sentence: null } : clip),
                error: null,
            });
            yield api.skipSentence(id);
        });
        this.upload = (hasAgreed = false) => {
            const { addNotification, addUploads, api, locale, removeSentences, tallyRecording, user, refreshUser, } = this.props;
            if (!hasAgreed && !(user.privacyAgreed || user.account)) {
                this.setState({ showPrivacyModal: true });
                return false;
            }
            const clips = this.state.clips.filter(clip => clip.recording);
            removeSentences(clips.map(c => c.sentence.id));
            this.setState({ clips: [], isSubmitted: true });
            addUploads([
                ...clips.map(({ sentence, recording }) => () => __awaiter(this, void 0, void 0, function* () {
                    let retries = 3;
                    while (retries) {
                        try {
                            yield api.uploadClip(recording.blob, sentence.id, sentence.text);
                            if (!user.account) {
                                tallyRecording();
                            }
                            retries = 0;
                        }
                        catch (error) {
                            let msg;
                            if (error.message === 'save_clip_error') {
                                msg =
                                    'Upload of this clip keeps failing at server, reload the page or try after sometime';
                            }
                            else {
                                msg = 'Upload of this clip keeps failing, keep retrying?';
                            }
                            retries--;
                            yield new Promise(resolve => setTimeout(resolve, 1000));
                            if (retries == 0 && confirm(msg)) {
                                retries = 3;
                            }
                        }
                    }
                })),
                () => __awaiter(this, void 0, void 0, function* () {
                    Object(_services_tracker__WEBPACK_IMPORTED_MODULE_8__["trackRecording"])('submit', locale);
                    refreshUser();
                    addNotification(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_13__["CheckIcon"], null),
                        ' ',
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "clips-uploaded" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null))));
                }),
            ]);
            return true;
        };
        this.resetState = (callback) => this.setState(initialState, callback);
        this.agreeToTerms = () => __awaiter(this, void 0, void 0, function* () {
            this.setState({ showPrivacyModal: false });
            this.props.updateUser({ privacyAgreed: true });
            this.upload(true);
        });
        this.toggleDiscardModal = () => {
            this.setState({
                showPrivacyModal: false,
                showDiscardModal: !this.state.showDiscardModal,
            });
        };
        this.resetAndGoHome = () => {
            const { history, toLocaleRoute } = this.props;
            this.resetState(() => {
                history.push(toLocaleRoute(_urls__WEBPACK_IMPORTED_MODULE_9__["default"].ROOT));
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            });
        };
    }
    static getDerivedStateFromProps(props, state) {
        if (state.clips.length > 0) {
            const sentenceIds = state.clips
                .map(({ sentence }) => (sentence ? sentence.id : null))
                .filter(Boolean);
            const unusedSentences = props.sentences.filter(s => !sentenceIds.includes(s.id));
            return {
                clips: state.clips.map(clip => clip.sentence
                    ? clip
                    : { recording: null, sentence: unusedSentences.pop() || null }),
            };
        }
        if (props.sentences.length > 0) {
            return {
                clips: props.sentences
                    .slice(0, _contribution__WEBPACK_IMPORTED_MODULE_16__["SET_COUNT"])
                    .map(sentence => ({ recording: null, sentence })),
            };
        }
        return null;
    }
    componentDidMount() {
        this.audio = Object(_utility__WEBPACK_IMPORTED_MODULE_15__["isNativeIOS"])() ? new _audio_ios__WEBPACK_IMPORTED_MODULE_18__["default"]() : new _audio_web__WEBPACK_IMPORTED_MODULE_19__["default"]();
        this.audio.setVolumeCallback(this.updateVolume.bind(this));
        document.addEventListener('visibilitychange', this.releaseMicrophone);
        document.addEventListener('keyup', this.handleKeyUprerecording);
        if (!this.audio.isMicrophoneSupported() ||
            !this.audio.isAudioRecordingSupported() ||
            Object(_utility__WEBPACK_IMPORTED_MODULE_15__["isFirefoxFocus"])()) {
            this.isUnsupportedPlatform = true;
        }
    }
    componentWillUnmount() {
        return __awaiter(this, void 0, void 0, function* () {
            document.removeEventListener('keyup', this.handleKeyUprerecording);
            document.removeEventListener('visibilitychange', this.releaseMicrophone);
            if (!this.isRecording)
                return;
            yield this.audio.stop();
        });
    }
    get isRecording() {
        return this.state.recordingStatus === 'recording';
    }
    getRecordingIndex() {
        const { rerecordIndex } = this.state;
        return rerecordIndex === null
            ? this.state.clips.findIndex(({ recording }) => !recording)
            : rerecordIndex;
    }
    render() {
        const { getString, user } = this.props;
        const { clips, isSubmitted, error, recordingStatus, rerecordIndex, showPrivacyModal, showDiscardModal, } = this.state;
        const recordingIndex = this.getRecordingIndex();
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](NavigationPrompt, { when: clips.filter(clip => clip.recording).length > 0 }, ({ onConfirm, onCancel }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_modal_modal__WEBPACK_IMPORTED_MODULE_11__["default"], { innerClassName: "record-abort", onRequestClose: onCancel },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "record-abort-title" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", { className: "title" })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "record-abort-text" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "text" })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_modal_modal__WEBPACK_IMPORTED_MODULE_11__["ModalButtons"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "record-abort-submit" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_14__["Button"], { outline: true, rounded: true, onClick: () => {
                                if (this.upload())
                                    onConfirm();
                            } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "record-abort-continue" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_14__["Button"], { outline: true, rounded: true, onClick: onCancel }))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "record-abort-delete" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_14__["TextButton"], { onClick: onConfirm }))))),
            showPrivacyModal && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_terms_modal__WEBPACK_IMPORTED_MODULE_12__["default"], { onAgree: this.agreeToTerms, onDisagree: this.toggleDiscardModal })),
            showDiscardModal && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "review-aborted" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_modal_modal__WEBPACK_IMPORTED_MODULE_11__["default"], { buttons: {
                        [getString('review-keep-recordings')]: this.toggleDiscardModal,
                        [getString('review-delete-recordings')]: this.resetAndGoHome,
                    } }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_contribution__WEBPACK_IMPORTED_MODULE_16__["default"], { activeIndex: recordingIndex, errorContent: this.isUnsupportedPlatform && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](UnsupportedInfo, null), instruction: props => error ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "error" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], Object.assign({ id: {
                            [RecordingError.TOO_SHORT]: 'record-error-too-short',
                            [RecordingError.TOO_LONG]: 'record-error-too-long',
                            [RecordingError.TOO_QUIET]: 'record-error-too-quiet',
                            [_audio_web__WEBPACK_IMPORTED_MODULE_19__["AudioError"].NOT_ALLOWED]: 'record-must-allow-microphone',
                            [_audio_web__WEBPACK_IMPORTED_MODULE_19__["AudioError"].NO_MIC]: 'record-no-mic-found',
                            [_audio_web__WEBPACK_IMPORTED_MODULE_19__["AudioError"].NO_SUPPORT]: 'record-platform-not-supported',
                        }[error] }, props)))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], Object.assign({ id: this.isRecording
                        ? 'record-stop-instruction'
                        : recordingIndex === _contribution__WEBPACK_IMPORTED_MODULE_16__["SET_COUNT"] - 1
                            ? 'record-last-instruction'
                            : ['record-instruction', 'record-again-instruction'][recordingIndex] || 'record-again-instruction2', recordIcon: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_13__["MicIcon"], null), stopIcon: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_13__["StopIcon"], null) }, props))), isFirstSubmit: user.recordTally === 0, isPlaying: this.isRecording, isSubmitted: isSubmitted, onReset: () => this.resetState(), onSkip: this.handleSkip, onSubmit: () => this.upload(), primaryButtons: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_primary_buttons_primary_buttons__WEBPACK_IMPORTED_MODULE_17__["RecordButton"], { status: recordingStatus, onClick: this.handleRecordClick }), pills: clips.map((clip, i) => (props) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_recording_pill__WEBPACK_IMPORTED_MODULE_20__["default"], Object.assign({}, props, { clip: clip, status: recordingIndex === i
                        ? 'active'
                        : clip.recording
                            ? 'done'
                            : 'pending', onRerecord: () => this.rerecord(i) }), rerecordIndex === i && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "record-cancel" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_14__["TextButton"], { onClick: this.cancelReRecord })))))), reportModalProps: {
                    reasons: [
                        'offensive-language',
                        'grammar-or-spelling',
                        'different-language',
                        'difficult-pronounce',
                    ],
                    kind: 'sentence',
                    id: recordingIndex == -1 ? null : clips[recordingIndex].sentence.id,
                }, sentences: clips.map(({ sentence }) => sentence && sentence.text), shortcuts: [
                    {
                        key: 'shortcut-record-toggle',
                        label: 'shortcut-record-toggle-label',
                        action: this.handleRecordClick,
                    },
                    {
                        key: 'shortcut-rerecord-toggle',
                        label: 'shortcut-rerecord-toggle-label',
                        action: this.handleRecordClick,
                    },
                ], type: "speak" })));
    }
}
const mapStateToProps = (state) => {
    return {
        api: state.api,
        locale: state.locale,
        sentences: _stores_sentences__WEBPACK_IMPORTED_MODULE_5__["Sentences"].selectors.localeSentences(state),
        user: state.user,
    };
};
const mapDispatchToProps = {
    addNotification: _stores_notifications__WEBPACK_IMPORTED_MODULE_4__["Notifications"].actions.addPill,
    addUploads: _stores_uploads__WEBPACK_IMPORTED_MODULE_6__["Uploads"].actions.add,
    removeSentences: _stores_sentences__WEBPACK_IMPORTED_MODULE_5__["Sentences"].actions.remove,
    tallyRecording: _stores_user__WEBPACK_IMPORTED_MODULE_7__["User"].actions.tallyRecording,
    refreshUser: _stores_user__WEBPACK_IMPORTED_MODULE_7__["User"].actions.refresh,
    updateUser: _stores_user__WEBPACK_IMPORTED_MODULE_7__["User"].actions.update,
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Object(_locale_helpers__WEBPACK_IMPORTED_MODULE_10__["localeConnector"])(Object(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["withLocalization"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(SpeakPage)))));


/***/ })

}]);
//# sourceMappingURL=15.bundle.js.map