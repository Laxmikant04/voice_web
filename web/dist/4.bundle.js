(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/components/pages/contribution/speak/audio-ios.ts":
/*!**************************************************************!*\
  !*** ./src/components/pages/contribution/speak/audio-ios.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AudioIOS; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utility */ "./src/utility.ts");
/* harmony import */ var _confirm_confirm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../confirm/confirm */ "./src/confirm/confirm.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const LEVELS_THROTTLE = 50;
class AudioIOS {
    constructor() {
        // Make sure we are in the right context before we allow instantiation.
        if (!Object(_utility__WEBPACK_IMPORTED_MODULE_0__["isNativeIOS"])()) {
            throw new Error('cannot use ios audio in web app');
        }
        // Native will call this function with decibels from -120 to 0.
        this.lastUpdate = Date.now();
        window['levels'] = (decibels) => {
            if (!this.volumeCallback) {
                return;
            }
            let now = Date.now();
            if (now - this.lastUpdate > LEVELS_THROTTLE) {
                this.lastUpdate = now;
                // Scale and shift to get a nice sound curve.
                let volume = (parseInt(decibels, 10) + 70) * 1.5;
                this.volumeCallback(volume);
            }
        };
        // Handle any messages coming from native.
        window['nativemsgs'] = this.handleNativeMessage.bind(this);
        // Store our native message bridge for later.
        let messenger = webkit.messageHandlers['scriptHandler'];
        this.postMessage = messenger.postMessage.bind(messenger);
        // For now, we will always use portrait mode for the app.
        this.postMessage('lockportrait');
    }
    clear() {
        this.last = null;
    }
    // Microphone is definitely supported on iOS.
    isMicrophoneSupported() {
        return true;
    }
    isAudioRecordingSupported() {
        return true;
    }
    handleNativeMessage(msg) {
        if (msg === 'nomicpermission') {
            Object(_confirm_confirm__WEBPACK_IMPORTED_MODULE_1__["default"])('Please allow microphone access to record your voice.', 'Go to Settings', 'Cancel').then(gotoSettings => {
                if (gotoSettings) {
                    vcopensettings();
                }
            });
        }
        else if (msg === 'capturestarted') {
            if (this.pendingStart) {
                let cb = this.pendingStart;
                this.pendingStart = null;
                this.pendingStartError = null;
                cb();
            }
        }
        else if (msg === 'errorrecording') {
            if (this.pendingStart) {
                let cb = this.pendingStartError;
                this.pendingStart = null;
                this.pendingStartError = null;
                cb('Unable to start recording');
            }
        }
        else {
            console.log('unhandled native message', msg);
        }
    }
    /**
     * Initialize the recorder. For this iOS implementation, this is a no-op.
     *
     * @returns A Promise that resolves to `true` immediately.
     */
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    setVolumeCallback(cb) {
        this.volumeCallback = cb;
    }
    start() {
        return new Promise((res, rej) => {
            this.pendingStart = res;
            this.pendingStartError = rej;
            this.postMessage('startCapture');
        });
    }
    stop() {
        return new Promise((res, rej) => {
            // Liten for the next data call from Native, that will
            // have our sound data in base64 format.
            window['uploadData'] = (data) => {
                this.last = {
                    url: 'data:' + AudioIOS.AUDIO_TYPE_URL + ',' + data,
                    blob: new Blob([data], {
                        type: AudioIOS.AUDIO_TYPE,
                    }),
                };
                res(this.last);
            };
            this.postMessage('stopCapture');
        });
    }
    release() { }
    // We aren't using this for now, but this performs better
    // than the base64 url for obvious reasons.
    play() {
        this.postMessage('playCapture');
    }
}
AudioIOS.AUDIO_TYPE = 'audio/m4a;base64';
// For audio src URL, we need to trick webkit into
// thinking this is an mp4 base64 encoding.
AudioIOS.AUDIO_TYPE_URL = 'audio/mp4;base64';


/***/ }),

/***/ "./src/components/pages/contribution/speak/audio-web.ts":
/*!**************************************************************!*\
  !*** ./src/components/pages/contribution/speak/audio-web.ts ***!
  \**************************************************************/
/*! exports provided: AudioError, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioError", function() { return AudioError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AudioWeb; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utility */ "./src/utility.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const AUDIO_TYPE = 'audio/ogg; codecs=opus';
var AudioError;
(function (AudioError) {
    AudioError["NOT_ALLOWED"] = "NOT_ALLOWED";
    AudioError["NO_MIC"] = "NO_MIC";
    AudioError["NO_SUPPORT"] = "NO_SUPPORT";
})(AudioError || (AudioError = {}));
class AudioWeb {
    constructor() {
        // Make sure we are in the right context before we allow instantiation.
        if (Object(_utility__WEBPACK_IMPORTED_MODULE_0__["isNativeIOS"])()) {
            throw new Error('cannot use web audio in iOS app');
        }
        this.visualize = this.visualize.bind(this);
    }
    isReady() {
        return !!this.microphone;
    }
    getMicrophone() {
        return new Promise(function (res, rej) {
            function deny(error) {
                rej({
                    NotAllowedError: AudioError.NOT_ALLOWED,
                    NotFoundError: AudioError.NO_MIC,
                }[error.name] || error);
            }
            function resolve(stream) {
                res(stream);
            }
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices
                    .getUserMedia({ audio: true })
                    .then(resolve, deny);
            }
            else if (navigator.getUserMedia) {
                navigator.getUserMedia({ audio: true }, resolve, deny);
            }
            else if (navigator.webkitGetUserMedia) {
                navigator.webkitGetUserMedia({ audio: true }, resolve, deny);
            }
            else if (navigator.mozGetUserMedia) {
                navigator.mozGetUserMedia({ audio: true }, resolve, deny);
            }
            else {
                // Browser does not support getUserMedia
                rej(AudioError.NO_SUPPORT);
            }
        });
    }
    // Check all the browser prefixes for microhpone support.
    isMicrophoneSupported() {
        return ((navigator.mediaDevices && navigator.mediaDevices.getUserMedia) ||
            navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia);
    }
    // Check if audio recording is supported
    isAudioRecordingSupported() {
        return typeof MediaRecorder !== 'undefined';
    }
    visualize() {
        this.analyzerNode.getByteFrequencyData(this.frequencyBins);
        let sum = 0;
        for (var i = 0; i < this.frequencyBins.length; i++) {
            sum += this.frequencyBins[i];
        }
        let average = sum / this.frequencyBins.length;
        if (this.volumeCallback) {
            this.volumeCallback(average);
        }
    }
    startVisualize() {
        this.jsNode.onaudioprocess = this.visualize;
    }
    stopVisualize() {
        this.jsNode.onaudioprocess = undefined;
        if (this.volumeCallback) {
            this.volumeCallback(100);
        }
    }
    setVolumeCallback(cb) {
        this.volumeCallback = cb;
    }
    /**
     * Initialize the recorder, opening the microphone media stream.
     *
     * If microphone access is currently denied, the user is asked to grant
     * access. Since these permission changes take effect only after a reload,
     * the page is reloaded if the user decides to do so.
     *
     */
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isReady()) {
                return;
            }
            const microphone = yield this.getMicrophone();
            this.microphone = microphone;
            var audioContext = new AudioContext();
            var sourceNode = audioContext.createMediaStreamSource(microphone);
            var volumeNode = audioContext.createGain();
            var analyzerNode = audioContext.createAnalyser();
            var outputNode = audioContext.createMediaStreamDestination();
            // Make sure we're doing mono everywhere.
            sourceNode.channelCount = 1;
            volumeNode.channelCount = 1;
            analyzerNode.channelCount = 1;
            outputNode.channelCount = 1;
            // Connect the nodes together
            sourceNode.connect(volumeNode);
            volumeNode.connect(analyzerNode);
            analyzerNode.connect(outputNode);
            // and set up the recorder.
            this.recorder = new MediaRecorder(outputNode.stream);
            // Set up the analyzer node, and allocate an array for its data
            // FFT size 64 gives us 32 bins. But those bins hold frequencies up to
            // 22kHz or more, and we only care about visualizing lower frequencies
            // which is where most human voice lies, so we use fewer bins
            analyzerNode.fftSize = 128;
            analyzerNode.smoothingTimeConstant = 0.96;
            this.frequencyBins = new Uint8Array(analyzerNode.frequencyBinCount);
            // Setup audio visualizer.
            this.jsNode = audioContext.createScriptProcessor(256, 1, 1);
            this.jsNode.connect(audioContext.destination);
            // Another audio node used by the beep() function
            var beeperVolume = audioContext.createGain();
            beeperVolume.connect(audioContext.destination);
            this.analyzerNode = analyzerNode;
            this.audioContext = audioContext;
        });
    }
    start() {
        if (!this.isReady()) {
            console.error('Cannot record audio before microhphone is ready.');
            return Promise.resolve();
        }
        return new Promise((res, rej) => {
            this.chunks = [];
            this.recorder.ondataavailable = (e) => {
                this.chunks.push(e.data);
            };
            this.recorder.onstart = (e) => {
                this.clear();
                res();
            };
            // We want to be able to record up to 60s of audio in a single blob.
            // Without this argument to start(), Chrome will call dataavailable
            // very frequently.
            this.startVisualize();
            this.recorder.start(20000);
        });
    }
    stop() {
        if (!this.isReady()) {
            console.error('Cannot stop audio before microhphone is ready.');
            return Promise.reject();
        }
        return new Promise((res, rej) => {
            this.stopVisualize();
            this.recorder.onstop = (e) => {
                let blob = new Blob(this.chunks, { type: AUDIO_TYPE });
                this.last = {
                    url: URL.createObjectURL(blob),
                    blob: blob,
                };
                res(this.last);
            };
            this.recorder.stop();
        });
    }
    release() {
        if (this.microphone) {
            for (const track of this.microphone.getTracks()) {
                track.stop();
            }
        }
        this.microphone = null;
    }
    clear() {
        if (this.lastRecordingUrl) {
            URL.revokeObjectURL(this.lastRecordingUrl);
        }
        this.lastRecordingData = null;
        this.lastRecordingUrl = null;
    }
}


/***/ }),

/***/ "./src/components/terms-modal.tsx":
/*!****************************************!*\
  !*** ./src/components/terms-modal.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../urls */ "./src/urls.ts");
/* harmony import */ var _locale_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale-helpers */ "./src/components/locale-helpers.tsx");
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/modal */ "./src/components/modal/modal.tsx");





const TermsModal = ({ getString, onAgree, onDisagree, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_1__["Localized"], { id: "review-terms", termsLink: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_locale_helpers__WEBPACK_IMPORTED_MODULE_3__["LocaleLink"], { to: _urls__WEBPACK_IMPORTED_MODULE_2__["default"].TERMS, blank: true }), privacyLink: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_locale_helpers__WEBPACK_IMPORTED_MODULE_3__["LocaleLink"], { to: _urls__WEBPACK_IMPORTED_MODULE_2__["default"].PRIVACY, blank: true }) },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_modal_modal__WEBPACK_IMPORTED_MODULE_4__["default"], { buttons: {
            [getString('terms-agree')]: onAgree,
            [getString('terms-disagree')]: onDisagree,
        } })));
/* harmony default export */ __webpack_exports__["default"] = (Object(fluent_react_compat__WEBPACK_IMPORTED_MODULE_1__["withLocalization"])(TermsModal));


/***/ }),

/***/ "./src/confirm/confirm.ts":
/*!********************************!*\
  !*** ./src/confirm/confirm.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return confirm; });
/**
 * Present a modal dialog (asynchronously). Usage:
 *
 *   const isConfirmed = await confirm('are you sure?', 'yes', 'no')
 *   if (!isConfirmed) { ... show error ... }
 *
 * @param label The main text/label for the dialog.
 * @param okLabel Label for the "OK" button.
 * @param cancelLabel Label for the "Cancel" button.
 * @returns A Promise that is resolved with `true` if user clicks the "OK" button,
 *    or resolved with `false` if user clicks the "Cancel" button.
 */
function confirm(label, okLabel, cancelLabel) {
    const element = document.createElement('div');
    element.classList.add('confirm-modal');
    const mainSection = document.createElement('div');
    mainSection.classList.add('main-section');
    element.appendChild(mainSection);
    const labelElement = document.createElement('label');
    labelElement.textContent = label;
    mainSection.appendChild(labelElement);
    const confirmButton = document.createElement('button');
    confirmButton.id = 'confirm-confirm';
    confirmButton.textContent = okLabel;
    mainSection.appendChild(confirmButton);
    const cancelButton = document.createElement('button');
    cancelButton.id = 'confirm-cancel';
    cancelButton.textContent = cancelLabel;
    mainSection.appendChild(cancelButton);
    function close() {
        element.parentElement.removeChild(element);
    }
    return new Promise((resolve, reject) => {
        document.body.appendChild(element);
        confirmButton.addEventListener('click', () => {
            close();
            resolve(true);
        });
        cancelButton.addEventListener('click', () => {
            close();
            resolve(false);
        });
        // In the next loop, add the visible class so that we can animate the transition.
        setTimeout(() => {
            element.classList.add('visible');
        });
    });
}


/***/ })

}]);
//# sourceMappingURL=4.bundle.js.map