(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/components/language-select/language-select.css":
/*!************************************************************!*\
  !*** ./src/components/language-select/language-select.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/language-select/language-select.tsx":
/*!************************************************************!*\
  !*** ./src/components/language-select/language-select.tsx ***!
  \************************************************************/
/*! exports provided: ALL_LOCALES, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_LOCALES", function() { return ALL_LOCALES; });
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! downshift */ "../node_modules/downshift/dist/downshift.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _language_select_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language-select.css */ "./src/components/language-select/language-select.css");
/* harmony import */ var _language_select_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_language_select_css__WEBPACK_IMPORTED_MODULE_3__);



const contributableLocales = __webpack_require__(/*! ../../../../locales/contributable.json */ "../locales/contributable.json");

const ALL_LOCALES = 'all-locales';
/* harmony default export */ __webpack_exports__["default"] = (({ value, onChange, }) => (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](downshift__WEBPACK_IMPORTED_MODULE_1__["default"], { initialInputValue: value, onChange: onChange }, ({ getItemProps, highlightedIndex, isOpen, toggleMenu }) => (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "language-select", onClick: () => toggleMenu() },
    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: value },
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "current" })),
    isOpen && (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("ul", { onClick: () => toggleMenu() }, [ALL_LOCALES].concat(contributableLocales).map((l, i) => (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { key: l, id: l },
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("li", Object.assign({ className: [
                l === value ? 'selected' : '',
                highlightedIndex === i ? 'highlighted' : '',
            ].join(' ') }, getItemProps({ item: l }), { value: l }))))))))))));


/***/ }),

/***/ "./src/components/plot/plot.css":
/*!**************************************!*\
  !*** ./src/components/plot/plot.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/plot/plot.tsx":
/*!**************************************!*\
  !*** ./src/components/plot/plot.tsx ***!
  \**************************************/
/*! exports provided: Y_OFFSET, TOTAL_LINE_MARGIN, TEXT_OFFSET, LINE_OFFSET, PLOT_PADDING, default, BarPlot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y_OFFSET", function() { return Y_OFFSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOTAL_LINE_MARGIN", function() { return TOTAL_LINE_MARGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_OFFSET", function() { return TEXT_OFFSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINE_OFFSET", function() { return LINE_OFFSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLOT_PADDING", function() { return PLOT_PADDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Plot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarPlot", function() { return BarPlot; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plot_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plot.css */ "./src/components/plot/plot.css");
/* harmony import */ var _plot_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_plot_css__WEBPACK_IMPORTED_MODULE_1__);
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

const Y_OFFSET = 10;
const TOTAL_LINE_MARGIN = 154;
const TEXT_OFFSET = 40;
const LINE_OFFSET = TEXT_OFFSET + 5;
const PLOT_PADDING = 13;

class Plot extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            width: 0,
        };
        this.svgRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        this.updateSize = () => {
            this.setState({
                width: this.svgRef.current.getBoundingClientRect().width,
            });
        };
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            window.addEventListener('resize', this.updateSize);
            this.updateSize();
        });
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateSize);
    }
    render() {
        let _a = this.props, { children, data, formatNumber, max, renderXTickLabel, tickCount, tickMultipliers } = _a, props = __rest(_a, ["children", "data", "formatNumber", "max", "renderXTickLabel", "tickCount", "tickMultipliers"]);
        const { width } = this.state;
        const tickMultiplier = tickMultipliers
            .slice()
            .reverse()
            .find(m => max > m) || 1;
        const ticks = (tickCount - 1) * tickMultiplier;
        max = max + (ticks - (max % ticks));
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({ width: "100%", height: "100%", className: "plot" }, props, { ref: this.svgRef }),
            Array.from({ length: tickCount }).map((_, i) => {
                const y = (i * TOTAL_LINE_MARGIN) / tickCount + Y_OFFSET;
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], { key: i },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("text", { className: "tick-label", x: TEXT_OFFSET, y: y, dominantBaseline: "middle", textAnchor: "end" }, formatNumber(Math.round(((tickCount - 1 - i) * max) / (tickCount - 1)))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", { x1: LINE_OFFSET, y1: y, x2: width + PLOT_PADDING, y2: y, stroke: "rgba(0,0,0,0.2)" })));
            }),
            data.map((datum, i) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("text", { key: i, className: "x tick-label", x: LINE_OFFSET +
                    i * ((width - PLOT_PADDING - TEXT_OFFSET) / data.length), y: Y_OFFSET + TOTAL_LINE_MARGIN }, renderXTickLabel(datum, i)))),
            children({ width, max })));
    }
}
const BAR_COUNT = 10;
const BAR_WIDTH_LG = 15;
const BAR_WIDTH_XS = 7;
const TICK_COUNT = 4;
const BAR_HEIGHT = TOTAL_LINE_MARGIN * ((TICK_COUNT - 1) / TICK_COUNT);
function formatNumber(n) {
    return n > 1000 ? Math.round(n / 1000) + 'k' : n.toString();
}
const BarPlot = ({ data, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Plot, { data: data, formatNumber: formatNumber, max: (data || []).reduce((max, d) => Math.max(max, d.value), 0), renderXTickLabel: ({ date }) => {
        const timeString = new Date(date)
            .toLocaleString([], {
            hour: '2-digit',
            minute: '2-digit',
        })
            .replace(' AM', '')
            .replace(' PM', '');
        return window.innerWidth < 450 ? timeString.split(':')[0] : timeString;
    }, tickCount: TICK_COUNT, tickMultipliers: [5, 10, 100, 1000] }, ({ max, width }) => {
    const barWidth = width < 400 ? BAR_WIDTH_XS : BAR_WIDTH_LG;
    const getBarX = (i) => LINE_OFFSET +
        PLOT_PADDING -
        barWidth / 2 +
        (i * (width - PLOT_PADDING - TEXT_OFFSET)) / BAR_COUNT;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        Array.from({ length: BAR_COUNT }).map((_, i) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", { key: i, className: "bg", x: getBarX(i), y: Y_OFFSET, width: barWidth, height: BAR_HEIGHT }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("linearGradient", { id: "blue-purple", x2: "0%", y2: "100%" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("stop", { offset: "5%", stopColor: "#88d1f1" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("stop", { offset: "95%", stopColor: "#b1b5e5" }))),
        (data || []).map(({ value }, i) => {
            const height = (value * BAR_HEIGHT) / max || 0;
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", { key: i, fill: "url(#blue-purple)", className: i + 1 === BAR_COUNT ? 'current' : '', x: getBarX(i), y: Y_OFFSET + BAR_HEIGHT - height, width: barWidth, height: height }));
        })));
}));


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
//# sourceMappingURL=3.bundle.js.map