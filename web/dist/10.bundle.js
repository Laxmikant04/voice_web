(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "../node_modules/@yr/monotone-cubic-spline/index.js":
/*!**********************************************************!*\
  !*** ../node_modules/@yr/monotone-cubic-spline/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Convert a series of points to a monotone cubic spline
 * Algorithm based on https://github.com/mbostock/d3
 * https://github.com/yr/monotone-cubic-spline
 * @copyright Yr
 * @license MIT
 */

var ε = 1e-6;
module.exports = {
  /**
   * Convert 'points' to bezier
   * @param {Array} points
   * @returns {Array}
   */
  points: function points(_points) {
    var tgts = tangents(_points);
    var p = _points[1];
    var p0 = _points[0];
    var pts = [];
    var t = tgts[1];
    var t0 = tgts[0]; // Add starting 'M' and 'C' points

    pts.push(p0, [p0[0] + t0[0], p0[1] + t0[1], p[0] - t[0], p[1] - t[1], p[0], p[1]]); // Add 'S' points

    for (var i = 2, n = tgts.length; i < n; i++) {
      var _p = _points[i];
      var _t = tgts[i];
      pts.push([_p[0] - _t[0], _p[1] - _t[1], _p[0], _p[1]]);
    }

    return pts;
  },

  /**
   * Slice out a segment of 'points'
   * @param {Array} points
   * @param {Number} start
   * @param {Number} end
   * @returns {Array}
   */
  slice: function slice(points, start, end) {
    var pts = points.slice(start, end);

    if (start) {
      // Add additional 'C' points
      if (pts[1].length < 6) {
        var n = pts[0].length;
        pts[1] = [pts[0][n - 2] * 2 - pts[0][n - 4], pts[0][n - 1] * 2 - pts[0][n - 3]].concat(pts[1]);
      } // Remove control points for 'M'


      pts[0] = pts[0].slice(-2);
    }

    return pts;
  },

  /**
   * Convert 'points' to svg path
   * @param {Array} points
   * @returns {String}
   */
  svgPath: function svgPath(points) {
    var p = '';

    for (var i = 0; i < points.length; i++) {
      var point = points[i];
      var n = point.length;

      if (!i) {
        p += 'M' + point[n - 2] + ' ' + point[n - 1];
      } else if (n > 4) {
        p += 'C' + point[0] + ', ' + point[1];
        p += ', ' + point[2] + ', ' + point[3];
        p += ', ' + point[4] + ', ' + point[5];
      } else {
        p += 'S' + point[0] + ', ' + point[1];
        p += ', ' + point[2] + ', ' + point[3];
      }
    }

    return p;
  }
};
/**
 * Generate tangents for 'points'
 * @param {Array} points
 * @returns {Array}
 */

function tangents(points) {
  var m = finiteDifferences(points);
  var n = points.length - 1;
  var tgts = [];
  var a = void 0,
      b = void 0,
      d = void 0,
      s = void 0;

  for (var i = 0; i < n; i++) {
    d = slope(points[i], points[i + 1]);

    if (Math.abs(d) < ε) {
      m[i] = m[i + 1] = 0;
    } else {
      a = m[i] / d;
      b = m[i + 1] / d;
      s = a * a + b * b;

      if (s > 9) {
        s = d * 3 / Math.sqrt(s);
        m[i] = s * a;
        m[i + 1] = s * b;
      }
    }
  }

  for (var _i = 0; _i <= n; _i++) {
    s = (points[Math.min(n, _i + 1)][0] - points[Math.max(0, _i - 1)][0]) / (6 * (1 + m[_i] * m[_i]));
    tgts.push([s || 0, m[_i] * s || 0]);
  }

  return tgts;
}
/**
 * Compute slope from point 'p0' to 'p1'
 * @param {Array} p0
 * @param {Array} p1
 * @returns {Number}
 */


function slope(p0, p1) {
  return (p1[1] - p0[1]) / (p1[0] - p0[0]);
}
/**
 * Compute three-point differences for 'points'
 * @param {Array} points
 * @returns {Array}
 */


function finiteDifferences(points) {
  var m = [];
  var p0 = points[0];
  var p1 = points[1];
  var d = m[0] = slope(p0, p1);
  var i = 1;

  for (var n = points.length - 1; i < n; i++) {
    p0 = p1;
    p1 = points[i + 1];
    m[i] = (d + (d = slope(p0, p1))) * 0.5;
  }

  m[i] = d;
  return m;
}

/***/ }),

/***/ "./src/components/pages/home/hero.css":
/*!********************************************!*\
  !*** ./src/components/pages/home/hero.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/home/hero.tsx":
/*!********************************************!*\
  !*** ./src/components/pages/home/hero.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants */ "./src/constants.ts");
/* harmony import */ var _services_tracker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/tracker */ "./src/services/tracker.ts");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../urls */ "./src/urls.ts");
/* harmony import */ var _locale_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../locale-helpers */ "./src/components/locale-helpers.tsx");
/* harmony import */ var _primary_buttons_primary_buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../primary-buttons/primary-buttons */ "./src/components/primary-buttons/primary-buttons.tsx");
/* harmony import */ var _hero_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hero.css */ "./src/components/pages/home/hero.css");
/* harmony import */ var _hero_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_hero_css__WEBPACK_IMPORTED_MODULE_8__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









class Hero extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor() {
        super(...arguments);
        this.state = { count: null, dimensions: [], showToMeasure: true };
        this.toggleableRefs = Array.from({ length: 4 }).map(() => react__WEBPACK_IMPORTED_MODULE_1__["createRef"]());
        this.showToMeasure = () => this.setState({ showToMeasure: true });
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            window.addEventListener('resize', this.showToMeasure);
            this.measure();
            const { api, type } = this.props;
            this.setState({
                count: yield (type === 'speak'
                    ? api.fetchDailyClipsCount()
                    : api.fetchDailyVotesCount()),
            });
        });
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.showToMeasure);
    }
    componentDidUpdate() {
        if (this.state.showToMeasure) {
            this.measure();
        }
    }
    measure() {
        this.setState({
            dimensions: this.toggleableRefs.map(({ current: { offsetWidth, offsetHeight } }) => ({
                width: offsetWidth,
                height: offsetHeight,
            })),
            showToMeasure: false,
        });
    }
    getToggleableProps(i, className = '') {
        const { status } = this.props;
        const { dimensions, showToMeasure } = this.state;
        return {
            ref: this.toggleableRefs[i],
            className: 'toggleable ' + className,
            style: showToMeasure
                ? {}
                : status === 'active'
                    ? dimensions[i]
                    : { width: 0, height: 0 },
        };
    }
    render() {
        const { locale, onHide, onShow, status, type } = this.props;
        const { count } = this.state;
        const isSpeak = type == 'speak';
        const PrimaryLink = isSpeak ? _primary_buttons_primary_buttons__WEBPACK_IMPORTED_MODULE_7__["RecordLink"] : _primary_buttons_primary_buttons__WEBPACK_IMPORTED_MODULE_7__["PlayLink"];
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: ['hero-box', type, status].join(' '), onClick: onShow, onMouseEnter: onShow, onMouseLeave: onHide },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "column title" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: type },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: type + '-subtitle' },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object.assign({}, this.getToggleableProps(0)),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: type + '-paragraph' },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "description" })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "read-terms-q" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_locale_helpers__WEBPACK_IMPORTED_MODULE_6__["LocaleLink"], { to: _urls__WEBPACK_IMPORTED_MODULE_5__["default"].TERMS, className: "terms" })))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "column cta" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](PrimaryLink, { onClick: () => Object(_services_tracker__WEBPACK_IMPORTED_MODULE_4__["trackHome"])(type, locale) }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object.assign({}, this.getToggleableProps(1, 'line ' + type))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object.assign({}, this.getToggleableProps(2)),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "help-reach-goal", "$goal": _constants__WEBPACK_IMPORTED_MODULE_3__["DAILY_GOAL"][type] },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "cta-message" })))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object.assign({}, this.getToggleableProps(3, 'progress column')),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "todays-progress" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", { className: "progress-title" })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "progress-count" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "current" }, count === null ? '?' : count),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "total" },
                        ' / ',
                        _constants__WEBPACK_IMPORTED_MODULE_3__["DAILY_GOAL"][type])),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: type + '-goal-text' },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", null)))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "fading" })));
    }
}
const mapStateToProps = ({ api, locale }) => ({
    api,
    locale,
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Hero));


/***/ }),

/***/ "./src/components/pages/home/home.css":
/*!********************************************!*\
  !*** ./src/components/pages/home/home.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/home/home.tsx":
/*!********************************************!*\
  !*** ./src/components/pages/home/home.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _services_tracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/tracker */ "./src/services/tracker.ts");
/* harmony import */ var _stores_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../stores/tree */ "./src/stores/tree.ts");
/* harmony import */ var _locale_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../locale-helpers */ "./src/components/locale-helpers.tsx");
/* harmony import */ var _primary_buttons_primary_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../primary-buttons/primary-buttons */ "./src/components/primary-buttons/primary-buttons.tsx");
/* harmony import */ var _register_section_register_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../register-section/register-section */ "./src/components/register-section/register-section.tsx");
/* harmony import */ var _request_language_modal_request_language_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../request-language-modal/request-language-modal */ "./src/components/request-language-modal/request-language-modal.tsx");
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/ui */ "./src/components/ui/ui.tsx");
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hero */ "./src/components/pages/home/hero.tsx");
/* harmony import */ var _stats__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stats */ "./src/components/pages/home/stats.tsx");
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home.css */ "./src/components/pages/home/home.css");
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_home_css__WEBPACK_IMPORTED_MODULE_12__);














function HomePage() {
    const heroes = ['speak', 'listen'];
    const { locale, user } = Object(_stores_tree__WEBPACK_IMPORTED_MODULE_4__["useTypedSelector"])(({ locale, user }) => ({
        locale,
        user,
    }), react_redux__WEBPACK_IMPORTED_MODULE_2__["shallowEqual"]);
    const [activeHero, setActiveHero] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
    const [showRequestLanguageModal, setShowRequestLanguageModal] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
    const [showWallOfText, setShowWallOfText] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
    const statsRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
        if (location.hash == '#stats') {
            statsRef.current.scrollIntoView(true);
            window.scrollBy(0, -130);
        }
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "home" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_locale_helpers__WEBPACK_IMPORTED_MODULE_5__["ContributableLocaleLock"], { render: ({ isContributable }) => isContributable ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'heroes ' + (heroes.length > 1 ? 'multiple' : 'single') }, heroes.map((type) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_hero__WEBPACK_IMPORTED_MODULE_10__["default"], { key: type + locale, type: type, status: heroes.length == 1 || activeHero === type
                    ? 'active'
                    : activeHero
                        ? 'compressed'
                        : null, onShow: () => setActiveHero(type), onHide: () => setActiveHero(activeHero === type ? null : activeHero) }))))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "non-contributable-hero" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { className: "fading", src: __webpack_require__(/*! ./images/fading.svg */ "./src/components/pages/home/images/fading.svg"), alt: "Fading" }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { className: "waves", src: __webpack_require__(/*! ./images/speak.svg */ "./src/components/pages/home/images/speak.svg"), alt: "Waves" }))) }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "text" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "inner" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "title" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "home-title" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "description" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "wall-of-text-first" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null)),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "wall-of-text-second" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null)),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                    showWallOfText && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "wall-of-text-more-desktop" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null)),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: showWallOfText ? 'languages-show-less' : 'show-wall-of-text' },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "show-more", type: "button", onClick: () => {
                                if (showWallOfText) {
                                    Object(_services_tracker__WEBPACK_IMPORTED_MODULE_3__["trackHome"])('read-more', locale);
                                }
                                setShowWallOfText(!showWallOfText);
                            } }))))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "stats", ref: statsRef },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_stats__WEBPACK_IMPORTED_MODULE_11__["ClipsStats"].Root, null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_stats__WEBPACK_IMPORTED_MODULE_11__["VoiceStats"], null)),
        user.account ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("section", { className: "contribute-section" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "mars-container" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { src: "/img/mars.svg", alt: "Mars" })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "cta" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_locale_helpers__WEBPACK_IMPORTED_MODULE_5__["ContributableLocaleLock"], { render: ({ isContributable }) => isContributable ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_primary_buttons_primary_buttons__WEBPACK_IMPORTED_MODULE_6__["RecordLink"], { onClick: () => Object(_services_tracker__WEBPACK_IMPORTED_MODULE_3__["trackHome"])('speak-mars', locale) }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "ready-to-record" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null)))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "request-language-text" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null)),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { width: '100%' } }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "request-language-button" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { type: "button", className: "request-language", onClick: () => setShowRequestLanguageModal(true) })),
                        showRequestLanguageModal && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_request_language_modal_request_language_modal__WEBPACK_IMPORTED_MODULE_8__["default"], { onRequestClose: () => setShowRequestLanguageModal(false) })))) })))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_register_section_register_section__WEBPACK_IMPORTED_MODULE_7__["default"], { marsSrc: "/img/mars.svg" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "help-make-dataset" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "profile-not-required" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "sign-up-account" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_9__["LinkButton"], { rounded: true, href: "/login", onClick: () => Object(_services_tracker__WEBPACK_IMPORTED_MODULE_3__["trackHome"])('click-benefits-register', locale) }))))));
}


/***/ }),

/***/ "./src/components/pages/home/images/fading.svg":
/*!*****************************************************!*\
  !*** ./src/components/pages/home/images/fading.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "559d2b611b7d60f4464cd9f3ca8aafdf.svg";

/***/ }),

/***/ "./src/components/pages/home/images/speak.svg":
/*!****************************************************!*\
  !*** ./src/components/pages/home/images/speak.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "df91fa2ab6ba9b38ce01ac2e7dab5947.svg";

/***/ }),

/***/ "./src/components/pages/home/stats.css":
/*!*********************************************!*\
  !*** ./src/components/pages/home/stats.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/home/stats.tsx":
/*!*********************************************!*\
  !*** ./src/components/pages/home/stats.tsx ***!
  \*********************************************/
/*! exports provided: ClipsStats, VoiceStats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipsStats", function() { return ClipsStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoiceStats", function() { return VoiceStats; });
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _services_tracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/tracker */ "./src/services/tracker.ts");
/* harmony import */ var _language_select_language_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../language-select/language-select */ "./src/components/language-select/language-select.tsx");
/* harmony import */ var _plot_plot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../plot/plot */ "./src/components/plot/plot.tsx");
/* harmony import */ var _stats_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stats.css */ "./src/components/pages/home/stats.css");
/* harmony import */ var _stats_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_stats_css__WEBPACK_IMPORTED_MODULE_6__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const spline = __webpack_require__(/*! @yr/monotone-cubic-spline */ "../node_modules/@yr/monotone-cubic-spline/index.js");








const { Tooltip } = __webpack_require__(/*! react-tippy */ "../node_modules/react-tippy/dist/react-tippy.js");
const PLOT_STROKE_WIDTH = 2;
function StatsCard({ children, onLocaleChange, header, }) {
    const [locale, setLocale] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_language_select_language_select__WEBPACK_IMPORTED_MODULE_4__["ALL_LOCALES"]);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "home-card" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "head" },
            header,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_language_select_language_select__WEBPACK_IMPORTED_MODULE_4__["default"], { value: locale, onChange: locale => {
                    Object(_services_tracker__WEBPACK_IMPORTED_MODULE_3__["trackHome"])('metric-locale-change', locale);
                    setLocale(locale);
                    onLocaleChange(locale == _language_select_language_select__WEBPACK_IMPORTED_MODULE_4__["ALL_LOCALES"] ? null : locale);
                } })),
        children));
}
const mapStateToProps = ({ api }) => ({
    api,
});
var ClipsStats;
(function (ClipsStats) {
    const DATA_LENGTH = 5;
    const TICK_COUNT = 7;
    const CIRCLE_RADIUS = 8;
    function formatSeconds(totalSeconds) {
        const seconds = totalSeconds % 60;
        const minutes = Math.floor(totalSeconds / 60) % 60;
        const hours = Math.floor(totalSeconds / 3600);
        if (hours >= 1000) {
            return (hours / 1000).toPrecision(2) + 'k';
        }
        const timeParts = [];
        if (hours > 0) {
            timeParts.push(hours + 'h');
        }
        if (hours < 10 && minutes > 0) {
            timeParts.push(minutes + 'm');
        }
        if (hours == 0 && minutes < 10 && seconds > 0) {
            timeParts.push(seconds + 's');
        }
        return timeParts.join(' ') || '0';
    }
    const MetricValue = ({ attribute, children }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'metric-value ' + attribute },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "point" }, "\u25CF"),
        children));
    const Metric = ({ data, labelId, attribute, }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "metric" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: labelId },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "label" })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](MetricValue, { attribute: attribute }, data.length > 0
            ? formatSeconds(data[data.length - 1][attribute])
            : '?')));
    const Path = react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](({ attribute, data, max, width, }, ref) => {
        if (data.length === 0)
            return null;
        const pointFromDatum = (x, y) => [
            _plot_plot__WEBPACK_IMPORTED_MODULE_5__["LINE_OFFSET"] +
                _plot_plot__WEBPACK_IMPORTED_MODULE_5__["PLOT_PADDING"] +
                (x * (width - _plot_plot__WEBPACK_IMPORTED_MODULE_5__["LINE_OFFSET"] - 2 * _plot_plot__WEBPACK_IMPORTED_MODULE_5__["PLOT_PADDING"] - CIRCLE_RADIUS)) /
                    (data.length - 1),
            _plot_plot__WEBPACK_IMPORTED_MODULE_5__["Y_OFFSET"] -
                PLOT_STROKE_WIDTH / 2 +
                ((1 - y / max) * (data.length + 1) * _plot_plot__WEBPACK_IMPORTED_MODULE_5__["TOTAL_LINE_MARGIN"]) / TICK_COUNT,
        ];
        const lastIndex = data.length - 1;
        const [x, y] = pointFromDatum(lastIndex, data[lastIndex][attribute]);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("path", { d: spline.svgPath(spline.points(data.map((datum, i) => pointFromDatum(i, datum[attribute])))), className: attribute, fill: "none", ref: ref, strokeWidth: PLOT_STROKE_WIDTH }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("circle", { cx: x, cy: y, r: CIRCLE_RADIUS, fill: "white", className: 'outer ' + attribute }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("circle", { cx: x, cy: y, r: CIRCLE_RADIUS - 2, className: 'inner ' + attribute })));
    });
    class BareRoot extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
        constructor() {
            super(...arguments);
            this.state = {
                data: [],
                hoveredIndex: null,
            };
            this.pathRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
            this.updateData = (locale) => __awaiter(this, void 0, void 0, function* () {
                this.setState({ data: yield this.props.api.fetchClipsStats(locale) });
            });
            this.handleMouseMove = (event) => {
                const path = this.pathRef.current;
                if (!path) {
                    this.setState({ hoveredIndex: null });
                }
                const { left, width } = path.getBoundingClientRect();
                const hoveredIndex = Math.round((DATA_LENGTH * (event.clientX - left)) / width) - 1;
                this.setState({
                    hoveredIndex: hoveredIndex >= 0 && hoveredIndex < DATA_LENGTH ? hoveredIndex : null,
                });
            };
            this.handleMouseOut = () => this.setState({ hoveredIndex: null });
        }
        componentDidMount() {
            return __awaiter(this, void 0, void 0, function* () {
                yield this.updateData();
            });
        }
        render() {
            const { getString } = this.props;
            const { data, hoveredIndex } = this.state;
            const datum = data[hoveredIndex];
            const { date, total, valid } = datum || {};
            const tooltipContents = datum ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("b", null, new Date(date).toLocaleDateString([], {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "metrics" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](MetricValue, { attribute: "total" }, formatSeconds(total)),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](MetricValue, { attribute: "valid" }, formatSeconds(valid))))) : null;
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StatsCard, { header: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "metrics" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Metric, { data: data, labelId: "hours-recorded", attribute: "total" }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Metric, { data: data, labelId: "hours-validated", attribute: "valid" })), onLocaleChange: this.updateData },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Tooltip, { arrow: true, duration: 0, html: tooltipContents, open: Boolean(tooltipContents), theme: "white", followCursor: true },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_plot_plot__WEBPACK_IMPORTED_MODULE_5__["default"], { data: data, formatNumber: formatSeconds, max: data.reduce((max, d) => Math.max(max, d.total, d.valid), 0), onMouseMove: this.handleMouseMove, onMouseOut: this.handleMouseOut, renderXTickLabel: ({ date }) => {
                            const dateObj = new Date(date);
                            const dayDiff = Math.ceil(Math.abs(dateObj.getTime() - new Date().getTime()) /
                                (1000 * 3600 * 24));
                            if (dayDiff <= 1)
                                return getString('today');
                            if (dayDiff < 30) {
                                return getString('x-weeks-short', {
                                    count: Math.floor(dayDiff / 7),
                                });
                            }
                            if (dayDiff < 365) {
                                return getString('x-months-short', {
                                    count: Math.floor(dayDiff / 30),
                                });
                            }
                            return getString('x-years-short', {
                                count: Math.floor(dayDiff / 365),
                            });
                        }, tickCount: TICK_COUNT, tickMultipliers: [10, 60, 600, 3600, 36000, 360000] }, state => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Path, Object.assign({ attribute: "valid", data: data }, state)),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Path, Object.assign({ attribute: "total", data: data }, state, { ref: this.pathRef }))))))));
        }
    }
    ClipsStats.Root = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Object(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["withLocalization"])(BareRoot));
})(ClipsStats || (ClipsStats = {}));
const VoiceStats = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(class BareRoot extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor() {
        super(...arguments);
        this.state = { data: [] };
        this.updateData = (locale) => __awaiter(this, void 0, void 0, function* () {
            this.setState({ data: yield this.props.api.fetchClipVoices(locale) });
        });
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.updateData();
        });
    }
    render() {
        const { data } = this.state;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StatsCard, { header: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "voices-online" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "online-voices" }, data.length > 0
                    ? data[data.length - 1].value.toLocaleString()
                    : '?')), onLocaleChange: this.updateData },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_plot_plot__WEBPACK_IMPORTED_MODULE_5__["BarPlot"], { data: data })));
    }
});


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

/***/ "./src/components/privacy-info.tsx":
/*!*****************************************!*\
  !*** ./src/components/privacy-info.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (({ localizedPrefix }) => {
    localizedPrefix = localizedPrefix || '';
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: localizedPrefix + 'stayintouch' },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "small" })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: localizedPrefix + 'privacy-info', privacyLink: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: "/privacy", target: "__blank", rel: "noopener noreferrer" }) },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "small" }))));
});


/***/ }),

/***/ "./src/components/register-section/images sync recursive ^\\.\\/.*\\-.*\\.png$":
/*!***********************************************************************!*\
  !*** ./src/components/register-section/images sync ^\.\/.*\-.*\.png$ ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1-1.png": "./src/components/register-section/images/1-1.png",
	"./1-2.png": "./src/components/register-section/images/1-2.png",
	"./1-3.png": "./src/components/register-section/images/1-3.png",
	"./1-4.png": "./src/components/register-section/images/1-4.png",
	"./1-5.png": "./src/components/register-section/images/1-5.png",
	"./1-6.png": "./src/components/register-section/images/1-6.png",
	"./2-1.png": "./src/components/register-section/images/2-1.png",
	"./2-2.png": "./src/components/register-section/images/2-2.png",
	"./2-3.png": "./src/components/register-section/images/2-3.png",
	"./2-4.png": "./src/components/register-section/images/2-4.png",
	"./2-5.png": "./src/components/register-section/images/2-5.png"
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
webpackContext.id = "./src/components/register-section/images sync recursive ^\\.\\/.*\\-.*\\.png$";

/***/ }),

/***/ "./src/components/register-section/images/1-1.png":
/*!********************************************************!*\
  !*** ./src/components/register-section/images/1-1.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2cb216340211e9b34afb1b57cfc32594.png";

/***/ }),

/***/ "./src/components/register-section/images/1-2.png":
/*!********************************************************!*\
  !*** ./src/components/register-section/images/1-2.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8e6cb9062d62d488bdf3fd9071d86031.png";

/***/ }),

/***/ "./src/components/register-section/images/1-3.png":
/*!********************************************************!*\
  !*** ./src/components/register-section/images/1-3.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0b4220a387d9aad682345524a7733f5d.png";

/***/ }),

/***/ "./src/components/register-section/images/1-4.png":
/*!********************************************************!*\
  !*** ./src/components/register-section/images/1-4.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ff4df4f7d1a06f0f93a888e76cfdaca1.png";

/***/ }),

/***/ "./src/components/register-section/images/1-5.png":
/*!********************************************************!*\
  !*** ./src/components/register-section/images/1-5.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bdde4170dd8fb0ced9f55e35db39a784.png";

/***/ }),

/***/ "./src/components/register-section/images/1-6.png":
/*!********************************************************!*\
  !*** ./src/components/register-section/images/1-6.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f095ff0ceeef4e50c4ac4a3d226a3462.png";

/***/ }),

/***/ "./src/components/register-section/images/2-1.png":
/*!********************************************************!*\
  !*** ./src/components/register-section/images/2-1.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a7d0c00c65eb5ec0b51d1fe1bbebd237.png";

/***/ }),

/***/ "./src/components/register-section/images/2-2.png":
/*!********************************************************!*\
  !*** ./src/components/register-section/images/2-2.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0b4220a387d9aad682345524a7733f5d.png";

/***/ }),

/***/ "./src/components/register-section/images/2-3.png":
/*!********************************************************!*\
  !*** ./src/components/register-section/images/2-3.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c7b641eff0dd692673efc1d0bc1ffd2d.png";

/***/ }),

/***/ "./src/components/register-section/images/2-4.png":
/*!********************************************************!*\
  !*** ./src/components/register-section/images/2-4.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "43c5462406314770c88feb382dae8381.png";

/***/ }),

/***/ "./src/components/register-section/images/2-5.png":
/*!********************************************************!*\
  !*** ./src/components/register-section/images/2-5.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7548c4482abe7c0f77caee1a7db86200.png";

/***/ }),

/***/ "./src/components/register-section/images/waves.png":
/*!**********************************************************!*\
  !*** ./src/components/register-section/images/waves.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a2c72ce8a9bd6f20f71fa49fc8b9dd73.png";

/***/ }),

/***/ "./src/components/register-section/register-section.css":
/*!**************************************************************!*\
  !*** ./src/components/register-section/register-section.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/register-section/register-section.tsx":
/*!**************************************************************!*\
  !*** ./src/components/register-section/register-section.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegisterSection; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_tracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tracker */ "./src/services/tracker.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
/* harmony import */ var _locale_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../locale-helpers */ "./src/components/locale-helpers.tsx");
/* harmony import */ var _register_section_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-section.css */ "./src/components/register-section/register-section.css");
/* harmony import */ var _register_section_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_register_section_css__WEBPACK_IMPORTED_MODULE_6__);








function RegisterSection({ children, flipped = false, marsSrc, }) {
    const [locale] = Object(_locale_helpers__WEBPACK_IMPORTED_MODULE_5__["useLocale"])();
    const [index, setIndex] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);
    const [tab, setTab] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('benefits');
    const isBenefits = tab == 'benefits';
    const info = (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "signup-info" },
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "tabs" },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("img", { className: "waves", src: __webpack_require__(/*! ./images/waves.png */ "./src/components/register-section/images/waves.png"), alt: "Waves" }),
            ['benefits', 'whats-public'].map(l => (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("label", { key: l },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("input", { type: "radio", name: "tab", checked: tab == l, onChange: () => {
                        setTab(l);
                        setIndex(0);
                        Object(_services_tracker__WEBPACK_IMPORTED_MODULE_3__["trackHome"])('change-benefits-tabs', locale);
                    } }),
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_1__["Localized"], { id: l },
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", null)))))),
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "list-and-bg" },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "bg" }),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("ul", { key: tab }, (isBenefits ? _constants__WEBPACK_IMPORTED_MODULE_4__["BENEFITS"] : _constants__WEBPACK_IMPORTED_MODULE_4__["WHATS_PUBLIC"]).map((l, i) => (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("li", { key: l, className: i == index ? 'active' : '', onClick: () => {
                    setIndex(i);
                    Object(_services_tracker__WEBPACK_IMPORTED_MODULE_3__["trackHome"])(isBenefits
                        ? 'click-benefits-item'
                        : 'click-whats-public-item', locale);
                } },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", null,
                    i + 1,
                    "."),
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_1__["Localized"], { id: l },
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", null)))))))));
    return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("section", { className: classnames__WEBPACK_IMPORTED_MODULE_0__('register-section', { flipped }) },
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "top" },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "cta-container" },
                children,
                info),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "images-container" },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("img", { className: "mars", src: marsSrc, alt: "Mars" }),
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("img", { className: "screenshot", src: __webpack_require__("./src/components/register-section/images sync recursive ^\\.\\/.*\\-.*\\.png$")(`./${isBenefits ? 1 : 2}-${index + 1}.png`), alt: "" })))));
}


/***/ }),

/***/ "./src/components/request-language-modal/language-autocomplete.tsx":
/*!*************************************************************************!*\
  !*** ./src/components/request-language-modal/language-autocomplete.tsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LanguageAutocomplete; });
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! downshift */ "../node_modules/downshift/dist/downshift.esm.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_store_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/store-hooks */ "./src/hooks/store-hooks.ts");
/* harmony import */ var _stores_requested_languages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../stores/requested-languages */ "./src/stores/requested-languages.ts");
/* harmony import */ var _stores_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../stores/tree */ "./src/stores/tree.ts");
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/ui */ "./src/components/ui/ui.tsx");








function LanguageAutocomplete({ onChange, }) {
    const requestedLanguages = Object(_stores_tree__WEBPACK_IMPORTED_MODULE_5__["useTypedSelector"])(store => store.requestedLanguages.languages);
    const fetchRequestedLanguages = Object(_hooks_store_hooks__WEBPACK_IMPORTED_MODULE_3__["useAction"])(_stores_requested_languages__WEBPACK_IMPORTED_MODULE_4__["RequestedLanguages"].actions.fetch);
    // Types for Downshift haven't caught up yet. Can be removed in the future
    const Input = _ui_ui__WEBPACK_IMPORTED_MODULE_6__["LabeledInput"];
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
        fetchRequestedLanguages();
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](downshift__WEBPACK_IMPORTED_MODULE_0__["default"], { onChange: onChange }, ({ getInputProps, getItemProps, isOpen, inputValue, selectedItem, highlightedIndex, }) => {
        const options = Array.from(new Set(requestedLanguages || [])).filter(name => name.toLowerCase().includes(inputValue.toLowerCase()));
        const exactMatch = options.find(name => name.toLowerCase() === inputValue.toLowerCase());
        return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_1__["Localized"], { id: "language-autocomplete", attrs: { label: true } },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Input, Object.assign({}, getInputProps({
                    label: (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_1__["Localized"], { id: "other-language" },
                        react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", null))),
                    required: true,
                    type: 'text',
                })))),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { style: { position: 'relative' } }, isOpen && (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { style: {
                    position: 'absolute',
                    left: 0,
                    top: '-1rem',
                    zIndex: 10,
                    border: '1px solid #ccc',
                    width: '100%',
                    maxHeight: '5rem',
                    overflowY: 'auto',
                    background: 'white',
                } },
                !exactMatch && (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object.assign({}, getItemProps({ item: inputValue }), { style: {
                        backgroundColor: highlightedIndex === 0 ? 'lightgray' : 'white',
                        fontWeight: selectedItem === name ? 'bold' : 'normal',
                    } }),
                    "Add new Language \"",
                    inputValue,
                    "\"")),
                options.map((name, index) => (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object.assign({}, getItemProps({ item: name }), { key: name, style: {
                        backgroundColor: highlightedIndex === index + (exactMatch ? 0 : 1)
                            ? 'lightgray'
                            : 'white',
                        fontWeight: selectedItem === name ? 'bold' : 'normal',
                    } }), name))))))));
    }));
}


/***/ }),

/***/ "./src/components/request-language-modal/language-request-success.tsx":
/*!****************************************************************************!*\
  !*** ./src/components/request-language-modal/language-request-success.tsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/icons */ "./src/components/ui/icons.tsx");
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/ui */ "./src/components/ui/ui.tsx");




/* harmony default export */ __webpack_exports__["default"] = (({ onRequestClose }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_2__["SuccessIcon"], { className: "success" }),
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "request-language-success-title" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null)),
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "request-language-success-content" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "small" })),
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "return-to-cv" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_3__["TextButton"], { onClick: onRequestClose, className: "small", style: { fontWeight: 'bold', color: 'black' } })),
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null))));


/***/ }),

/***/ "./src/components/request-language-modal/request-language-modal.tsx":
/*!**************************************************************************!*\
  !*** ./src/components/request-language-modal/request-language-modal.tsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/modal */ "./src/components/modal/modal.tsx");
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/ui */ "./src/components/ui/ui.tsx");
/* harmony import */ var _services_localization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/localization */ "./src/services/localization.ts");
/* harmony import */ var _stores_requested_languages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../stores/requested-languages */ "./src/stores/requested-languages.ts");
/* harmony import */ var _stores_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../stores/user */ "./src/stores/user.ts");
/* harmony import */ var _privacy_info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../privacy-info */ "./src/components/privacy-info.tsx");
/* harmony import */ var _language_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./language-autocomplete */ "./src/components/request-language-modal/language-autocomplete.tsx");
/* harmony import */ var _language_request_success__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./language-request-success */ "./src/components/request-language-modal/language-request-success.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};











class RequestLanguageModal extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            email: this.props.user.email,
            isSubmitted: false,
            language: _services_localization__WEBPACK_IMPORTED_MODULE_5__["NATIVE_NAMES"][navigator.languages.find(lang => lang.split('-')[0] !== 'en')],
            otherLanguage: '',
            sendEmails: this.props.user.sendEmails,
        };
        this.update = ({ target }) => {
            this.setState({
                [target.name]: target.type === 'checkbox' ? target.checked : target.value,
            });
        };
        this.updateOtherLanguage = (otherLanguage) => {
            this.setState({ otherLanguage });
        };
        this.save = (event) => __awaiter(this, void 0, void 0, function* () {
            event.preventDefault();
            const { api, createLanguageRequest, updateUser, user } = this.props;
            const { email, language, otherLanguage, sendEmails } = this.state;
            createLanguageRequest(language == 'other' ? otherLanguage : language);
            if (!user.sendEmails && sendEmails) {
                yield api.subscribeToNewsletter(email);
            }
            updateUser({ email, sendEmails });
            this.setState({ isSubmitted: true });
        });
    }
    render() {
        const { onRequestClose } = this.props;
        const { email, language, otherLanguage, isSubmitted, sendEmails, } = this.state;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_modal_modal__WEBPACK_IMPORTED_MODULE_3__["default"], { innerClassName: 'request-language-modal ' + (isSubmitted ? '' : 'left-align'), onRequestClose: onRequestClose }, isSubmitted ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_language_request_success__WEBPACK_IMPORTED_MODULE_10__["default"], { onRequestClose: onRequestClose })) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", { onSubmit: this.save },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "title-and-action" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "request-language-title" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "request-language-form-language", attrs: { label: true } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_4__["LabeledSelect"], { name: "language", required: true, value: language, onChange: this.update },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "select-language" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "" })),
                    Object.entries(_services_localization__WEBPACK_IMPORTED_MODULE_5__["NATIVE_NAMES"]).map(([code, name]) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { key: name, value: name }, name))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "other" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "other" })))),
            language == 'other' && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_language_autocomplete__WEBPACK_IMPORTED_MODULE_9__["default"], { onChange: this.updateOtherLanguage })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "email-input", attrs: { label: true } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_4__["LabeledInput"], { label: "Email", name: "email", required: true, type: "email", value: email, onChange: this.update })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "opt-in" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { name: "sendEmails", type: "checkbox", checked: sendEmails, onChange: this.update }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "yes-receive-emails" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_4__["Hr"], null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "actions" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "submit-form-action" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_4__["Button"], { disabled: !email || (language == 'other' ? !otherLanguage : !language), type: "submit", rounded: true })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_privacy_info__WEBPACK_IMPORTED_MODULE_8__["default"], null)))));
    }
}
const mapStateToProps = ({ api, user }) => ({
    api,
    user,
});
const mapDispatchToProps = {
    createLanguageRequest: _stores_requested_languages__WEBPACK_IMPORTED_MODULE_6__["RequestedLanguages"].actions.create,
    updateUser: _stores_user__WEBPACK_IMPORTED_MODULE_7__["User"].actions.update,
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(RequestLanguageModal));


/***/ })

}]);
//# sourceMappingURL=10.bundle.js.map