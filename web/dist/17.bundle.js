(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./src/components/pages/contribution/listen/listen.css":
/*!*************************************************************!*\
  !*** ./src/components/pages/contribution/listen/listen.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/contribution/listen/listen.tsx":
/*!*************************************************************!*\
  !*** ./src/components/pages/contribution/listen/listen.tsx ***!
  \*************************************************************/
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
/* harmony import */ var _stores_clips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../stores/clips */ "./src/stores/clips.ts");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../urls */ "./src/urls.ts");
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/icons */ "./src/components/ui/icons.tsx");
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/ui */ "./src/components/ui/ui.tsx");
/* harmony import */ var _contribution__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contribution */ "./src/components/pages/contribution/contribution.tsx");
/* harmony import */ var _primary_buttons_primary_buttons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../primary-buttons/primary-buttons */ "./src/components/primary-buttons/primary-buttons.tsx");
/* harmony import */ var _pill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pill */ "./src/components/pages/contribution/pill.tsx");
/* harmony import */ var _listen_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./listen.css */ "./src/components/pages/contribution/listen/listen.css");
/* harmony import */ var _listen_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_listen_css__WEBPACK_IMPORTED_MODULE_11__);
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












const VOTE_NO_PLAY_MS = 3000; // Threshold when to allow voting no
const VoteButton = (_a) => {
    var { kind } = _a, props = __rest(_a, ["kind"]);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", Object.assign({ type: "button", className: ['vote-button', kind].join(' ') }, props),
        kind === 'yes' && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_6__["ThumbsUpIcon"], null),
        kind === 'no' && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_6__["ThumbsDownIcon"], null),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: 'vote-' + kind },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null))));
};
const initialState = {
    clips: [],
    hasPlayed: false,
    hasPlayedSome: false,
    isPlaying: false,
    isSubmitted: false,
};
class ListenPage extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor() {
        super(...arguments);
        this.audioRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        this.state = initialState;
        this.play = () => {
            if (this.state.isPlaying) {
                this.stop();
                return;
            }
            this.audioRef.current.play();
            this.setState({ isPlaying: true });
            clearInterval(this.playedSomeInterval);
            this.playedSomeInterval = setInterval(() => this.setState({ hasPlayedSome: true }), VOTE_NO_PLAY_MS);
        };
        this.stop = () => {
            const audio = this.audioRef.current;
            audio.pause();
            audio.currentTime = 0;
            clearInterval(this.playedSomeInterval);
            this.setState({ isPlaying: false });
        };
        this.hasPlayed = () => {
            this.setState({ hasPlayed: true, isPlaying: false });
            Object(_services_tracker__WEBPACK_IMPORTED_MODULE_3__["trackListening"])('listen', this.props.locale);
        };
        this.vote = (isValid) => {
            const { clips } = this.state;
            const clipIndex = this.getClipIndex();
            this.stop();
            this.props.vote(isValid, this.state.clips[this.getClipIndex()].id);
            this.setState({
                hasPlayed: false,
                hasPlayedSome: false,
                isPlaying: false,
                isSubmitted: clipIndex === _contribution__WEBPACK_IMPORTED_MODULE_8__["SET_COUNT"] - 1,
                clips: clips.map((clip, i) => i === clipIndex ? Object.assign({}, clip, { isValid }) : clip),
            });
        };
        this.voteYes = () => {
            if (!this.state.hasPlayed) {
                return;
            }
            this.vote(true);
            Object(_services_tracker__WEBPACK_IMPORTED_MODULE_3__["trackListening"])('vote-yes', this.props.locale);
        };
        this.voteNo = () => {
            const { hasPlayed, hasPlayedSome } = this.state;
            if (!hasPlayed && !hasPlayedSome) {
                return;
            }
            this.vote(false);
            Object(_services_tracker__WEBPACK_IMPORTED_MODULE_3__["trackListening"])('vote-no', this.props.locale);
        };
        this.handleSkip = () => {
            const { removeClip } = this.props;
            const { clips } = this.state;
            this.stop();
            removeClip(clips[this.getClipIndex()].id);
            this.setState({
                clips: clips.map((clip, i) => this.getClipIndex() === i
                    ? Object.assign({}, this.props.clips.slice(_contribution__WEBPACK_IMPORTED_MODULE_8__["SET_COUNT"])[0], { isValid: null }) : clip),
                hasPlayed: false,
                hasPlayedSome: false,
            });
        };
        this.reset = () => this.setState(initialState);
    }
    static getDerivedStateFromProps(props, state) {
        if (state.clips.length > 0)
            return null;
        if (props.clips.length > 0) {
            return {
                clips: props.clips
                    .slice(0, _contribution__WEBPACK_IMPORTED_MODULE_8__["SET_COUNT"])
                    .map(clip => (Object.assign({}, clip, { isValid: null }))),
            };
        }
        return null;
    }
    componentWillUnmount() {
        clearInterval(this.playedSomeInterval);
        // this.audioPlayer.close();
    }
    getClipIndex() {
        return this.state.clips.findIndex(clip => clip.isValid === null);
    }
    render() {
        const { clips, hasPlayed, hasPlayedSome, isPlaying, isSubmitted, } = this.state;
        const clipIndex = this.getClipIndex();
        const activeClip = clips[clipIndex];
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("audio", Object.assign({}, (activeClip && { src: activeClip.audioSrc }), { preload: "auto", onEnded: this.hasPlayed, ref: this.audioRef })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_contribution__WEBPACK_IMPORTED_MODULE_8__["default"], { activeIndex: clipIndex, errorContent: !this.props.isLoading &&
                    (clips.length === 0 || !activeClip) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "empty-container" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "error-card card-dimensions" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "nothing-to-validate" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_7__["LinkButton"], { rounded: true, to: _urls__WEBPACK_IMPORTED_MODULE_5__["default"].SPEAK, className: "record-instead" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_6__["MicIcon"], null),
                            ' ',
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "record-button-label" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null)))))), instruction: props => activeClip &&
                    !isPlaying &&
                    !hasPlayedSome &&
                    !hasPlayed && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], Object.assign({ id: clipIndex === _contribution__WEBPACK_IMPORTED_MODULE_8__["SET_COUNT"] - 1
                        ? 'listen-last-time-instruction'
                        : [
                            'listen-instruction',
                            'listen-again-instruction',
                            'listen-3rd-time-instruction',
                        ][clipIndex] || 'listen-again-instruction', playIcon: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_6__["OldPlayIcon"], null) }, props))), isPlaying: isPlaying, isSubmitted: isSubmitted, onReset: this.reset, onSkip: this.handleSkip, primaryButtons: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](VoteButton, { kind: "yes", onClick: this.voteYes, disabled: !hasPlayed }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_primary_buttons_primary_buttons__WEBPACK_IMPORTED_MODULE_9__["PlayButton"], { isPlaying: isPlaying, onClick: this.play }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](VoteButton, { kind: "no", onClick: this.voteNo, disabled: !hasPlayed && !hasPlayedSome })), pills: clips.map(({ isValid }, i) => (props) => {
                    const isVoted = isValid !== null;
                    const isActive = clipIndex === i;
                    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_pill__WEBPACK_IMPORTED_MODULE_10__["default"], Object.assign({ className: isVoted ? (isValid ? 'valid' : 'invalid') : '', onClick: null, status: isActive ? 'active' : isVoted ? 'done' : 'pending' }, props), isActive ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_6__["VolumeIcon"], null)) : isVoted ? (isValid ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_6__["CheckIcon"], null)) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_6__["CrossIcon"], null))) : null));
                }), reportModalProps: {
                    reasons: [
                        'offensive-speech',
                        'grammar-or-spelling',
                        'different-language',
                    ],
                    kind: 'clip',
                    id: activeClip ? activeClip.id : null,
                }, sentences: clips.map(clip => clip.sentence), shortcuts: [
                    {
                        key: 'shortcut-play-toggle',
                        label: 'shortcut-play-toggle-label',
                        action: this.play,
                    },
                    {
                        key: 'shortcut-vote-yes',
                        label: 'vote-yes',
                        action: this.voteYes,
                    },
                    {
                        key: 'shortcut-vote-no',
                        label: 'vote-no',
                        action: this.voteNo,
                    },
                ], type: "listen" })));
    }
}
const mapStateToProps = (state) => {
    const { clips, isLoading } = _stores_clips__WEBPACK_IMPORTED_MODULE_4__["Clips"].selectors.localeClips(state);
    return {
        clips,
        isLoading,
        locale: state.locale,
    };
};
const mapDispatchToProps = {
    removeClip: _stores_clips__WEBPACK_IMPORTED_MODULE_4__["Clips"].actions.remove,
    vote: _stores_clips__WEBPACK_IMPORTED_MODULE_4__["Clips"].actions.vote,
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(ListenPage));


/***/ })

}]);
//# sourceMappingURL=17.bundle.js.map