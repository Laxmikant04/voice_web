(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./src/components/pages/profile/avatar-setup/avatar-setup.css":
/*!********************************************************************!*\
  !*** ./src/components/pages/profile/avatar-setup/avatar-setup.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/profile/avatar-setup/avatar-setup.tsx":
/*!********************************************************************!*\
  !*** ./src/components/pages/profile/avatar-setup/avatar-setup.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _services_tracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/tracker */ "./src/services/tracker.ts");
/* harmony import */ var _stores_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../stores/notifications */ "./src/stores/notifications.ts");
/* harmony import */ var _stores_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../stores/user */ "./src/stores/user.ts");
/* harmony import */ var _stores_uploads__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../stores/uploads */ "./src/stores/uploads.ts");
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/icons */ "./src/components/ui/icons.tsx");
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/ui */ "./src/components/ui/ui.tsx");
/* harmony import */ var _primary_buttons_primary_buttons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../primary-buttons/primary-buttons */ "./src/components/primary-buttons/primary-buttons.tsx");
/* harmony import */ var _contribution_speak_audio_ios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../contribution/speak/audio-ios */ "./src/components/pages/contribution/speak/audio-ios.ts");
/* harmony import */ var _contribution_speak_audio_web__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../contribution/speak/audio-web */ "./src/components/pages/contribution/speak/audio-web.ts");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../utility */ "./src/utility.ts");
/* harmony import */ var _avatar_setup_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./avatar-setup.css */ "./src/components/pages/profile/avatar-setup/avatar-setup.css");
/* harmony import */ var _avatar_setup_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_avatar_setup_css__WEBPACK_IMPORTED_MODULE_13__);
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

function resizeImage(file, maxSize) {
    const reader = new FileReader();
    const image = new Image();
    const canvas = document.createElement('canvas');
    const dataURItoBlob = (dataURI) => {
        const bytes = dataURI.split(',')[0].indexOf('base64') >= 0
            ? atob(dataURI.split(',')[1])
            : unescape(dataURI.split(',')[1]);
        const mime = dataURI
            .split(',')[0]
            .split(':')[1]
            .split(';')[0];
        const max = bytes.length;
        const ia = new Uint8Array(max);
        for (var i = 0; i < max; i++)
            ia[i] = bytes.charCodeAt(i);
        return new Blob([ia], { type: mime });
    };
    const resize = () => {
        let width = image.width;
        let height = image.height;
        if (width > height) {
            if (width > maxSize) {
                height *= maxSize / width;
                width = maxSize;
            }
        }
        else {
            if (height > maxSize) {
                width *= maxSize / height;
                height = maxSize;
            }
        }
        canvas.width = width;
        canvas.height = height;
        canvas.getContext('2d').drawImage(image, 0, 0, width, height);
        let dataUrl = canvas.toDataURL('image/jpeg');
        return dataURItoBlob(dataUrl);
    };
    return new Promise((ok, no) => {
        if (!file.type.match(/image.*/)) {
            no(new Error('Not an image'));
            return;
        }
        reader.onload = (readerEvent) => {
            image.onload = () => ok(resize());
            image.src = readerEvent.target.result;
        };
        reader.readAsDataURL(file);
    });
}
class AvatarSetup extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            isSaving: false,
            isRecording: false,
            isPlaying: false,
            counter: 3,
            clipStatus: 'fetching',
            blobUrl: new Blob(),
            avatarClipUrl: null,
        };
        this.isUnsupportedPlatform = false;
        this.maxVolume = 0;
        this.recordingStartTime = 0;
        this.recordingStopTime = 0;
        this.avatarRecordedBlobUrl = null;
        this.audioRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        this.updateVolume = (volume) => {
            if (volume !== 100 && volume > this.maxVolume) {
                this.maxVolume = volume;
            }
        };
        this.playAvatarClip = () => __awaiter(this, void 0, void 0, function* () {
            const { locale } = this.props;
            Object(_services_tracker__WEBPACK_IMPORTED_MODULE_3__["trackVoiceAvatar"])('self-listen', locale);
            if (!this.state.isPlaying) {
                this.audioRef.current.src = this.state.avatarClipUrl;
                this.audioRef.current.play();
                this.setState({ isPlaying: true });
            }
            else {
                this.audioRef.current.pause();
                this.audioRef.current.currentTime = 0;
                this.setState({ isPlaying: false });
            }
        });
        this.playRecordedAvatarClip = () => __awaiter(this, void 0, void 0, function* () {
            console.log(this.avatarRecordedBlobUrl);
            if (!this.state.isPlaying) {
                this.audioRef.current.src = this.avatarRecordedBlobUrl;
                this.audioRef.current.play();
                this.setState({ isPlaying: true });
            }
            else {
                this.audioRef.current.pause();
                this.audioRef.current.currentTime = 0;
                this.setState({ isPlaying: false });
            }
        });
        this.handleRecordClick = () => __awaiter(this, void 0, void 0, function* () {
            if (this.state.isRecording) {
                this.saveRecording();
                return;
            }
            try {
                yield this.startRecording();
                const clipTime = 5000;
                setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                    this.saveRecording();
                }), clipTime);
            }
            catch (err) {
                if (!(err in _contribution_speak_audio_web__WEBPACK_IMPORTED_MODULE_11__["AudioError"])) {
                    throw err;
                }
            }
        });
        this.startRecording = () => __awaiter(this, void 0, void 0, function* () {
            yield this.audio.start();
            this.maxVolume = 0;
            this.recordingStartTime = Date.now();
            this.recordingStopTime = 0;
            this.setState({
                isRecording: true,
            });
        });
        this.saveRecording = () => {
            const RECORD_STOP_DELAY = 500;
            setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                const info = yield this.audio.stop();
                this.avatarRecordedBlobUrl = info.url;
                this.setState({ blobUrl: info.blob, clipStatus: 'recorded' });
            }), RECORD_STOP_DELAY);
            this.recordingStopTime = Date.now();
            this.setState({
                isRecording: false,
            });
        };
        this.counter = () => __awaiter(this, void 0, void 0, function* () {
            this.audio.release();
            yield this.audio.init();
            this.setState({ clipStatus: 'starting', counter: 3 });
            const downloadTimer = setInterval(() => {
                let tl = this.state.counter - 1;
                this.setState({ counter: tl });
                if (this.state.counter <= 0) {
                    this.setState({ clipStatus: 'started' });
                    const { locale } = this.props;
                    Object(_services_tracker__WEBPACK_IMPORTED_MODULE_3__["trackVoiceAvatar"])('create-voice-avatar', locale);
                    this.handleRecordClick();
                    clearInterval(downloadTimer);
                }
            }, 1000);
        });
        this.updateAvatarClip = () => {
            this.setState({ avatarClipUrl: null, counter: 3 });
        };
        this.cancelRecording = () => __awaiter(this, void 0, void 0, function* () {
            let clip = yield this.props.api.fetchAvatarClip();
            clip
                ? this.setState({ avatarClipUrl: clip, clipStatus: 'notStarted' })
                : this.setState({ clipStatus: 'notStarted' });
        });
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            this.audio = Object(_utility__WEBPACK_IMPORTED_MODULE_12__["isNativeIOS"])() ? new _contribution_speak_audio_ios__WEBPACK_IMPORTED_MODULE_10__["default"]() : new _contribution_speak_audio_web__WEBPACK_IMPORTED_MODULE_11__["default"]();
            this.audio.setVolumeCallback(this.updateVolume.bind(this));
            if (!this.audio.isMicrophoneSupported() ||
                !this.audio.isAudioRecordingSupported() ||
                Object(_utility__WEBPACK_IMPORTED_MODULE_12__["isFirefoxFocus"])()) {
                this.isUnsupportedPlatform = true;
            }
            let clip;
            if (this.props.user.account.avatar_clip_url) {
                clip = yield this.props.api.fetchAvatarClip();
            }
            if (clip)
                this.setState({ avatarClipUrl: clip });
            this.setState({ clipStatus: 'notStarted' });
        });
    }
    componentWillUnmount() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.state.isRecording)
                return;
            yield this.audio.stop();
        });
    }
    saveFileAvatar(files) {
        return __awaiter(this, void 0, void 0, function* () {
            const { addNotification, api, getString, locale, refreshUser } = this.props;
            this.setState({ isSaving: true });
            const image = yield resizeImage(files.item(0), 80);
            const { error } = yield api.saveAvatar('file', image);
            if (['too_large'].includes(error)) {
                addNotification(getString('file' + error));
            }
            Object(_services_tracker__WEBPACK_IMPORTED_MODULE_3__["trackProfile"])('give-avatar', locale);
            refreshUser();
            this.setState({ isSaving: false });
        });
    }
    uploadAvatarClip() {
        return __awaiter(this, void 0, void 0, function* () {
            const { api, refreshUser, addNotification, addUpload } = this.props;
            addUpload([
                () => __awaiter(this, void 0, void 0, function* () {
                    try {
                        yield api.saveAvatarClip(this.state.blobUrl);
                        this.setState({ clipStatus: 'notStarted' });
                        let clip = yield this.props.api.fetchAvatarClip();
                        if (clip)
                            this.setState({ avatarClipUrl: clip });
                    }
                    catch (error) {
                        confirm('Upload of this avatar clip keeps failing, keep retrying?');
                    }
                }),
                () => __awaiter(this, void 0, void 0, function* () {
                    addNotification(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_7__["CheckIcon"], null),
                        ' ',
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "clips-uploaded" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null))));
                }),
            ]);
            refreshUser();
        });
    }
    render() {
        const { addNotification, api, getString, refreshUser, user: { account }, } = this.props;
        const { isPlaying, counter, clipStatus, avatarClipUrl } = this.state;
        const avatarType = account.avatar_url &&
            account.avatar_url.startsWith('https://gravatar.com')
            ? 'gravatar'
            : null;
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
            },
        };
        const hasClip = avatarClipUrl !== null;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "full-avatar-setup" },
            !Object(_utility__WEBPACK_IMPORTED_MODULE_12__["isProduction"])() && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "clip" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("audio", { preload: "auto", ref: this.audioRef, onEnded: () => this.setState({ isPlaying: false }), onError: () => this.setState({ isPlaying: false }) }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "avatar-clip-title" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", { className: "clip-title" })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "fix" },
                    (clipStatus === 'notStarted' || clipStatus === 'starting') &&
                        (hasClip ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "group-1" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "counter" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_primary_buttons_primary_buttons__WEBPACK_IMPORTED_MODULE_9__["PlayButton"], { isPlaying: isPlaying, onClick: this.playAvatarClip })))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "group-1" }, clipStatus === 'starting' && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "counter" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_primary_buttons_primary_buttons__WEBPACK_IMPORTED_MODULE_9__["Voice"], null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'counter-animation ' +
                                        (counter === 2 ? 'counter-2 ' : '') +
                                        (counter === 1 ? 'counter-1 ' : '') +
                                        (counter <= 0 ? 'counter-0 ' : '') },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "start-in" },
                                            "Start in",
                                            ' ',
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "counter-digit" }, counter)))))))))),
                    clipStatus === 'started' && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], { fallback: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null) },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "lottie" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Lottie, { options: defaultOptions, eventListeners: [] })))),
                    clipStatus === 'recorded' && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "lottiebg" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "recorded-play" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_primary_buttons_primary_buttons__WEBPACK_IMPORTED_MODULE_9__["PlayButton"], { isPlaying: isPlaying, onClick: this.playRecordedAvatarClip }))))),
                (clipStatus === 'notStarted' || clipStatus === 'starting') &&
                    (!hasClip && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_8__["Button"], { outline: true, rounded: true, className: "primary ", onClick: this.counter },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_7__["MicIcon"], null),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "record-voice-wave" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null))))),
                clipStatus === 'started' && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_8__["Button"], { outline: true, rounded: true, className: "primary ", onClick: this.handleRecordClick },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_7__["StopIcon"], null),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "recording-voice-wave" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)))),
                clipStatus === 'recorded' && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "but" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_8__["Button"], { outline: true, rounded: true, className: "primary-3 ", onClick: this.cancelRecording },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_7__["RedoIcon"], null),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "cancel-avatar-clip-recording" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_8__["Button"], { outline: true, rounded: true, className: "primary-2 ", onClick: this.uploadAvatarClip.bind(this) },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_7__["ShareIcon"], null),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "ready-to-upload" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)))))),
                hasClip ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "avatar-clip-fact" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "create-a-custom-voice" })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "recreate-voice" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: 'recreate-voice ' +
                                (this.isUnsupportedPlatform ? 'hide-recreate' : ''), onClick: this.updateAvatarClip })))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "about-avatar-clip-recording" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "create-a-custom-voice voice-paragraph-2" }))))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "photo-avatar" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("fieldset", { className: "avatar-setup", disabled: this.state.isSaving },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "file-upload" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { onDragOver: event => {
                                event.preventDefault();
                            }, onDrop: event => {
                                this.saveFileAvatar(event.dataTransfer.files);
                                event.preventDefault();
                            } },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "browse-file-title" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "title" })),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "browse-file", browseWrap: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "browse" }) },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "upload-label" })),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "hide-input", type: "file", accept: "image/*", onChange: event => {
                                    this.saveFileAvatar(event.target.files);
                                } }))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "connect", type: "button", onClick: () => __awaiter(this, void 0, void 0, function* () {
                            this.setState({ isSaving: true });
                            const { error } = yield api.saveAvatar(avatarType == 'gravatar' ? 'default' : 'gravatar');
                            if (['not_found'].includes(error)) {
                                addNotification(getString('gravatar_' + error));
                            }
                            if (!error) {
                                refreshUser();
                            }
                            this.setState({ isSaving: false });
                        }) },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "connect-gravatar" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)),
                        ' ',
                        avatarType == 'gravatar' ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_7__["CheckIcon"], { className: "check" })) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_7__["LinkIcon"], { className: "link" })))))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(({ api, locale, user }) => ({ api, locale, user }), {
    addNotification: _stores_notifications__WEBPACK_IMPORTED_MODULE_4__["Notifications"].actions.addPill,
    refreshUser: _stores_user__WEBPACK_IMPORTED_MODULE_5__["User"].actions.refresh,
    addUpload: _stores_uploads__WEBPACK_IMPORTED_MODULE_6__["Uploads"].actions.add,
})(Object(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["withLocalization"])(AvatarSetup)));


/***/ }),

/***/ "./src/components/pages/profile/delete/delete.css":
/*!********************************************************!*\
  !*** ./src/components/pages/profile/delete/delete.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/profile/delete/delete.tsx":
/*!********************************************************!*\
  !*** ./src/components/pages/profile/delete/delete.tsx ***!
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
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/icons */ "./src/components/ui/icons.tsx");
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/ui */ "./src/components/ui/ui.tsx");
/* harmony import */ var _delete_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delete.css */ "./src/components/pages/profile/delete/delete.css");
/* harmony import */ var _delete_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_delete_css__WEBPACK_IMPORTED_MODULE_5__);






class DeleteProfile extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor() {
        super(...arguments);
        this.state = { keep: true };
        this.textareaRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
    }
    render() {
        const { keep } = this.state;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "profile-delete" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "top" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "delete-q" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)),
                    "*"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "indicates-required" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "required" }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "toggle-with-info" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "toggle-container" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_4__["Toggle"], { onText: "keep", offText: "remove", defaultChecked: keep, onChange: (event) => {
                            this.setState({ keep: event.target.checked });
                        } })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "info" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_3__["InfoIcon"], null),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: keep ? 'keep-info' : 'remove-info' },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null)))),
             false && (false),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_4__["Hr"], null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "profile-form-delete" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_4__["Button"], { rounded: true, onClick: () => {
                        window.open('mailto:commonvoice@mozilla.com?subject=' +
                            encodeURIComponent('Delete Profile') +
                            '&body=' +
                            encodeURIComponent((keep
                                ? 'keep my recordings'
                                : 'remove my recordings, because: ' + '\n') +
                                /*+ this.textareaRef.current.value*/ '\n' +
                                'email:' +
                                this.props.user.account.email));
                    } }))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(({ user }) => ({ user }))(Object(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["withLocalization"])(DeleteProfile)));


/***/ }),

/***/ "./src/components/pages/profile/info/info.css":
/*!****************************************************!*\
  !*** ./src/components/pages/profile/info/info.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/profile/info/info.tsx":
/*!****************************************************!*\
  !*** ./src/components/pages/profile/info/info.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "../node_modules/react-router/esm/react-router.js");
/* harmony import */ var _hooks_store_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../hooks/store-hooks */ "./src/hooks/store-hooks.ts");
/* harmony import */ var _services_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/localization */ "./src/services/localization.ts");
/* harmony import */ var _services_tracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/tracker */ "./src/services/tracker.ts");
/* harmony import */ var _stores_demographics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../stores/demographics */ "./src/stores/demographics.ts");
/* harmony import */ var _stores_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../stores/notifications */ "./src/stores/notifications.ts");
/* harmony import */ var _stores_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../stores/tree */ "./src/stores/tree.ts");
/* harmony import */ var _stores_uploads__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../stores/uploads */ "./src/stores/uploads.ts");
/* harmony import */ var _stores_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../stores/user */ "./src/stores/user.ts");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../urls */ "./src/urls.ts");
/* harmony import */ var _locale_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../locale-helpers */ "./src/components/locale-helpers.tsx");
/* harmony import */ var _terms_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../terms-modal */ "./src/components/terms-modal.tsx");
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../ui/icons */ "./src/components/ui/icons.tsx");
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../ui/ui */ "./src/components/ui/ui.tsx");
/* harmony import */ var _info_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./info.css */ "./src/components/pages/profile/info/info.css");
/* harmony import */ var _info_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_info_css__WEBPACK_IMPORTED_MODULE_16__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


















const pick = __webpack_require__(/*! lodash.pick */ "../node_modules/lodash.pick/index.js");
const { Tooltip } = __webpack_require__(/*! react-tippy */ "../node_modules/react-tippy/dist/react-tippy.js");
const Options = Object(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["withLocalization"])(({ children, getString, }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object.entries(children).map(([key, value]) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { key: key, value: key }, getString(key, null, value)))))));
function ProfilePage({ getString, history, }) {
    const api = Object(_hooks_store_hooks__WEBPACK_IMPORTED_MODULE_3__["useAPI"])();
    const [locale] = Object(_locale_helpers__WEBPACK_IMPORTED_MODULE_12__["useLocale"])();
    const user = Object(_stores_tree__WEBPACK_IMPORTED_MODULE_8__["useTypedSelector"])(({ user }) => user);
    const { account, userClients } = user;
    const addNotification = Object(_hooks_store_hooks__WEBPACK_IMPORTED_MODULE_3__["useAction"])(_stores_notifications__WEBPACK_IMPORTED_MODULE_7__["Notifications"].actions.addPill);
    const addUploads = Object(_hooks_store_hooks__WEBPACK_IMPORTED_MODULE_3__["useAction"])(_stores_uploads__WEBPACK_IMPORTED_MODULE_9__["Uploads"].actions.add);
    const saveAccount = Object(_hooks_store_hooks__WEBPACK_IMPORTED_MODULE_3__["useAction"])(_stores_user__WEBPACK_IMPORTED_MODULE_10__["User"].actions.saveAccount);
    const [userFields, setUserFields] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
        username: '',
        visible: 0,
        age: '',
        gender: '',
        sendEmails: false,
        privacyAgreed: false,
    });
    const { username, visible, age, gender, sendEmails, privacyAgreed, } = userFields;
    const [locales, setLocales] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
    const [isInitialized, setIsInitialized] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
    const [isSaving, setIsSaving] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
    const [isSubmitted, setIsSubmitted] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
    const [showDemographicInfo, setShowDemographicInfo] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
    const [termsStatus, setTermsStatus] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
        if (user.isFetchingAccount || isInitialized) {
            return;
        }
        setIsInitialized(true);
        if (!account && userClients.length == 0) {
            history.push('/');
        }
        setUserFields(Object.assign({}, userFields, { sendEmails: account && Boolean(account.basket_token), visible: 0 }, pick(user, 'age', 'username', 'gender'), (account
            ? pick(account, 'age', 'username', 'gender', 'visible')
            : {
                age: userClients.reduce((init, u) => u.age || init, ''),
                gender: userClients.reduce((init, u) => u.gender || init, ''),
            }), { privacyAgreed: Boolean(account) || user.privacyAgreed }));
        let locales = [];
        if (!account) {
            locales = userClients.reduce((locales, u) => locales.concat(u.locales || []), []);
            locales = locales.filter((l1, i) => i == locales.findIndex(l2 => l2.locale == l1.locale));
        }
        setLocales(account ? account.locales : locales);
    }, [user]);
    const handleChangeFor = (field) => ({ target, }) => {
        setUserFields(Object.assign({}, userFields, { [field]: target.type == 'checkbox' ? target.checked : target.value }));
    };
    const submit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
        if (!user.account) {
            Object(_services_tracker__WEBPACK_IMPORTED_MODULE_5__["trackProfile"])('create', locale);
            if (termsStatus == null) {
                setTermsStatus('show');
                return;
            }
        }
        setIsSaving(true);
        setIsSubmitted(true);
        setTermsStatus('agreed');
        const data = Object.assign({}, pick(userFields, 'username', 'age', 'gender'), { locales: locales.filter(l => l.locale), visible: JSON.parse(visible.toString()), client_id: user.userId });
        addUploads([
            () => __awaiter(this, void 0, void 0, function* () {
                if (!(user.account && user.account.basket_token) && sendEmails) {
                    yield api.subscribeToNewsletter(user.userClients[0].email);
                }
                saveAccount(data);
                setIsSaving(false);
                addNotification(getString('profile-form-submit-saved'));
            }),
        ]);
    }, [api, getString, locale, locales, termsStatus, user, userFields]);
    if (!isInitialized) {
        return null;
    }
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "profile-info" },
        termsStatus == 'show' && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_terms_modal__WEBPACK_IMPORTED_MODULE_13__["default"], { onAgree: submit, onDisagree: () => setTermsStatus(null) })),
        !user.account && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "thanks-for-account" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "why-profile-text" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'demographic-info ' + (showDemographicInfo ? 'expanded' : '') },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { type: "button", onClick: () => setShowDemographicInfo(!showDemographicInfo) },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "why-demographic" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_14__["DownIcon"], null)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "why-demographic-explanation" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "explanation" }))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-fields" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "profile-form-username", attrs: { label: true } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_15__["LabeledInput"], { value: username, onChange: handleChangeFor('username') })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "leaderboard-visibility", attrs: { label: true } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_15__["LabeledSelect"], { value: visible.toString(), onChange: handleChangeFor('visible') },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "hidden" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: 0 })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "visible" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: 1 })))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "profile-form-age", attrs: { label: true } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_15__["LabeledSelect"], { value: age, onChange: handleChangeFor('age') },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Options, null, _stores_demographics__WEBPACK_IMPORTED_MODULE_6__["AGES"]))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "profile-form-gender", attrs: { label: true } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_15__["LabeledSelect"], { value: gender, onChange: handleChangeFor('gender') },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Options, null, _stores_demographics__WEBPACK_IMPORTED_MODULE_6__["SEXES"]))),
            locales.map(({ locale, accent }, i) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], { key: i },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: i == 0
                        ? 'profile-form-native-language'
                        : 'profile-form-additional-language', attrs: { label: true } },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_15__["LabeledSelect"], { value: locale, onChange: ({ target: { value }, }) => {
                            const newLocales = locales.slice();
                            newLocales[i] = { locale: value, accent: '' };
                            if (!value) {
                                newLocales.splice(i, 1);
                            }
                            setLocales(newLocales.filter(({ locale }, i2) => i2 === i || locale !== value));
                        } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "" }),
                        Object.entries(_services_localization__WEBPACK_IMPORTED_MODULE_4__["NATIVE_NAMES"]).map(([locale, name]) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { key: locale, value: locale }, name))))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "profile-form-accent", attrs: { label: true } },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_15__["LabeledSelect"], { value: accent, onChange: ({ target: { value }, }) => {
                            const newLocales = locales.slice();
                            newLocales[i].accent = value;
                            setLocales(newLocales);
                        } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "" }),
                        _stores_demographics__WEBPACK_IMPORTED_MODULE_6__["ACCENTS"][locale] && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Options, null, _stores_demographics__WEBPACK_IMPORTED_MODULE_6__["ACCENTS"][locale]))))))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_15__["Button"], { className: "add-language", outline: true, onClick: () => {
                if (locales.length && !locales[locales.length - 1].locale) {
                    return;
                }
                setLocales(locales.concat({ locale: '', accent: '' }));
            } },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "add-language" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, "+")),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_15__["Hr"], null),
        !(user.account && user.account.basket_token) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "signup-section" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Tooltip, { arrow: true, html: getString('change-email-setings'), theme: "grey-tooltip" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "email-input", attrs: { label: true } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_15__["LabeledInput"], { value: user.userClients[0].email, disabled: true }))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "checkboxes" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_15__["LabeledCheckbox"], { label: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "email-opt-in-info" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)), onChange: handleChangeFor('sendEmails'), checked: sendEmails }),
                    !user.account && !isSubmitted && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_15__["LabeledCheckbox"], { label: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "accept-privacy", privacyLink: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_locale_helpers__WEBPACK_IMPORTED_MODULE_12__["LocaleLink"], { to: _urls__WEBPACK_IMPORTED_MODULE_11__["default"].PRIVACY, blank: true }) },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)), checked: privacyAgreed, onChange: handleChangeFor('privacyAgreed') }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "read-terms-q" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_locale_helpers__WEBPACK_IMPORTED_MODULE_12__["LocaleLink"], { to: _urls__WEBPACK_IMPORTED_MODULE_11__["default"].TERMS, className: "terms", blank: true })))))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_15__["Hr"], null))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "profile-form-submit-save" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_15__["Button"], { className: "save", rounded: true, disabled: isSaving || !privacyAgreed, onClick: submit }))));
}
/* harmony default export */ __webpack_exports__["default"] = (Object(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["withLocalization"])(Object(react_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(ProfilePage)));


/***/ }),

/***/ "./src/components/pages/profile/layout.css":
/*!*************************************************!*\
  !*** ./src/components/pages/profile/layout.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/profile/layout.tsx":
/*!*************************************************!*\
  !*** ./src/components/pages/profile/layout.tsx ***!
  \*************************************************/
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../urls */ "./src/urls.ts");
/* harmony import */ var _locale_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../locale-helpers */ "./src/components/locale-helpers.tsx");
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/icons */ "./src/components/ui/icons.tsx");
/* harmony import */ var _avatar_setup_avatar_setup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./avatar-setup/avatar-setup */ "./src/components/pages/profile/avatar-setup/avatar-setup.tsx");
/* harmony import */ var _delete_delete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./delete/delete */ "./src/components/pages/profile/delete/delete.tsx");
/* harmony import */ var _info_info__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./info/info */ "./src/components/pages/profile/info/info.tsx");
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settings/settings */ "./src/components/pages/profile/settings/settings.tsx");
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout.css */ "./src/components/pages/profile/layout.css");
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_layout_css__WEBPACK_IMPORTED_MODULE_12__);

const pick = __webpack_require__(/*! lodash.pick */ "../node_modules/lodash.pick/index.js");












function downloadData(account) {
    const text = [
        ...Object.entries(pick(account, 'email', 'username', 'age', 'gender')),
        ...account.locales.reduce((all, l, i) => {
            const localeLabel = 'language ' + (i + 1);
            return [
                ...all,
                [localeLabel, l.locale],
                [localeLabel + ' accent', l.accent],
            ];
        }, []),
    ]
        .map(([key, value]) => key + ': ' + value)
        .join('\n');
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', 'profile.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
const Layout = ({ toLocaleRoute, user }) => {
    const [infoRoute, avatarRoute, prefRoute, deleteRoute] = [
        _urls__WEBPACK_IMPORTED_MODULE_5__["default"].PROFILE_INFO,
        _urls__WEBPACK_IMPORTED_MODULE_5__["default"].PROFILE_AVATAR,
        _urls__WEBPACK_IMPORTED_MODULE_5__["default"].PROFILE_SETTINGS,
        _urls__WEBPACK_IMPORTED_MODULE_5__["default"].PROFILE_DELETE,
    ].map(r => toLocaleRoute(r));
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "profile-layout" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "profile-nav" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "links" },
                [
                    Object.assign({ route: infoRoute }, (user.account
                        ? { icon: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_7__["UserIcon"], null), id: 'profile' }
                        : { icon: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_7__["UserPlusIcon"], null), id: 'build-profile' })),
                    { route: avatarRoute, icon: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_7__["CameraIcon"], null), id: 'avatar' },
                    { route: prefRoute, icon: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_7__["CogIcon"], null), id: 'settings' },
                    {
                        route: deleteRoute,
                        icon: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_7__["TrashIcon"], null),
                        id: 'profile-form-delete',
                    },
                ]
                    .slice(0, user.account ? Infinity : 1)
                    .map(({ route, icon, id }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_4__["NavLink"], { key: route, to: route },
                    icon,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: id },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "text" }))))),
                user.account && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { onClick: () => downloadData(user.account), href: "#" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_7__["CloudIcon"], null),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "download-profile" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "text" })))))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "content" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_3__["Switch"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_3__["Route"], { exact: true, path: infoRoute, component: _info_info__WEBPACK_IMPORTED_MODULE_10__["default"] }),
                [
                    { route: avatarRoute, Component: _avatar_setup_avatar_setup__WEBPACK_IMPORTED_MODULE_8__["default"] },
                    { route: prefRoute, Component: _settings_settings__WEBPACK_IMPORTED_MODULE_11__["default"] },
                    { route: deleteRoute, Component: _delete_delete__WEBPACK_IMPORTED_MODULE_9__["default"] },
                ].map(({ route, Component }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_3__["Route"], { key: route, exact: true, path: route, render: props => user.account ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Component, null) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_3__["Redirect"], { to: infoRoute }) }))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_3__["Route"], { render: () => react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_3__["Redirect"], { to: toLocaleRoute(_urls__WEBPACK_IMPORTED_MODULE_5__["default"].PROFILE_INFO) }) })))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(({ user }) => ({ user }))(Object(_locale_helpers__WEBPACK_IMPORTED_MODULE_6__["localeConnector"])(Layout)));


/***/ }),

/***/ "./src/components/pages/profile/settings/settings.css":
/*!************************************************************!*\
  !*** ./src/components/pages/profile/settings/settings.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/profile/settings/settings.tsx":
/*!************************************************************!*\
  !*** ./src/components/pages/profile/settings/settings.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _stores_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../stores/notifications */ "./src/stores/notifications.ts");
/* harmony import */ var _stores_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../stores/user */ "./src/stores/user.ts");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../urls */ "./src/urls.ts");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utility */ "./src/utility.ts");
/* harmony import */ var _locale_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../locale-helpers */ "./src/components/locale-helpers.tsx");
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/icons */ "./src/components/ui/icons.tsx");
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/ui */ "./src/components/ui/ui.tsx");
/* harmony import */ var _settings_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings.css */ "./src/components/pages/profile/settings/settings.css");
/* harmony import */ var _settings_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_settings_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _hooks_store_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../hooks/store-hooks */ "./src/hooks/store-hooks.ts");
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













const Section = (_a) => {
    var { title, titleAction, className = '', children } = _a, props = __rest(_a, ["title", "titleAction", "className", "children"]);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("section", Object.assign({ className: 'user-setting ' + className }, props),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "section-title" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, title),
            titleAction),
        children && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "section-body" }, children)));
};
function Settings(props) {
    const { account, addNotification, getString, saveAccount } = props;
    const isSubscribed = Object(_hooks_store_hooks__WEBPACK_IMPORTED_MODULE_11__["useIsSubscribed"])();
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
        const { pathname, search } = location;
        if (search.includes('success=false')) {
            addNotification(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "email-already-used" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)), 'error');
            history.replaceState({}, null, pathname);
        }
        else if (search.includes('success=true')) {
            addNotification(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "profile-form-submit-saved" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)));
            history.replaceState({}, null, pathname);
        }
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Section, { title: getString('login-identity'), className: "two-columns" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "email-input", attrs: { label: true } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_9__["LabeledInput"], { value: account.email, disabled: true })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_9__["LinkButton"], { outline: true, className: "edit-button", href: location.origin + '/login?change_email' },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_8__["PenIcon"], null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "edit" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)))),
        account.basket_token && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Section, { title: getString('email-subscriptions'), titleAction: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "manage-subscriptions", href: Object(_utility__WEBPACK_IMPORTED_MODULE_6__["getManageSubscriptionURL"])(account), target: "__blank", rel: "noopener noreferrer" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "manage-subscriptions" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_8__["SettingsIcon"], null)) },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "email-section" },
                isSubscribed == null ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null)) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_9__["LabeledCheckbox"], { disabled: true, checked: isSubscribed, label: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "email-opt-in-info" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)) })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "privacy-and-terms" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_8__["InfoIcon"], null),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "email-opt-in-privacy", privacyLink: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_locale_helpers__WEBPACK_IMPORTED_MODULE_7__["LocaleLink"], { to: _urls__WEBPACK_IMPORTED_MODULE_5__["default"].PRIVACY, blank: true }) },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null)),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "read-terms-q" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_locale_helpers__WEBPACK_IMPORTED_MODULE_7__["LocaleLink"], { to: _urls__WEBPACK_IMPORTED_MODULE_5__["default"].TERMS, className: "terms", blank: true }))))))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Section, { title: getString('contribution-experience'), className: "box" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "skip-submission-feedback" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", { className: "feedback-toggle-title" })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_9__["Toggle"], { offText: "off", onText: "on", defaultChecked: account.skip_submission_feedback, onChange: (event) => saveAccount({
                        skip_submission_feedback: event.target.checked,
                    }) }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "skip-submission-description" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "skip-submission-description" })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "skip-submission-note" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "skip-submission-note" }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "images" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { className: "hidden-sm-down", src: __webpack_require__(/*! ./submission-screenshot-lg.png */ "./src/components/pages/profile/settings/submission-screenshot-lg.png"), alt: "Submission Success Screenshot" }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { className: "hidden-md-up", src: __webpack_require__(/*! ./submission-screenshot-xs.png */ "./src/components/pages/profile/settings/submission-screenshot-xs.png"), alt: "Submission Success Screenshot" })))));
}
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(({ locale, user }) => ({
    account: user.account,
    locale,
}), {
    addNotification: _stores_notifications__WEBPACK_IMPORTED_MODULE_3__["Notifications"].actions.addPill,
    saveAccount: _stores_user__WEBPACK_IMPORTED_MODULE_4__["User"].actions.saveAccount,
})(Object(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["withLocalization"])(Settings)));


/***/ }),

/***/ "./src/components/pages/profile/settings/submission-screenshot-lg.png":
/*!****************************************************************************!*\
  !*** ./src/components/pages/profile/settings/submission-screenshot-lg.png ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8de4468b2a55082c90a82674b7f8eb85.png";

/***/ }),

/***/ "./src/components/pages/profile/settings/submission-screenshot-xs.png":
/*!****************************************************************************!*\
  !*** ./src/components/pages/profile/settings/submission-screenshot-xs.png ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b2c11f0a94d71d2d5d3267e195d72b4f.png";

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
//# sourceMappingURL=12.bundle.js.map