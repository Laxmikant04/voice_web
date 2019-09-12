(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./src/components/pages/about/about.css":
/*!**********************************************!*\
  !*** ./src/components/pages/about/about.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/about/about.tsx":
/*!**********************************************!*\
  !*** ./src/components/pages/about/about.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ "./src/components/pages/about/nav.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/components/pages/about/constants.ts");
/* harmony import */ var _how_it_works__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./how-it-works */ "./src/components/pages/about/how-it-works.tsx");
/* harmony import */ var _get_involved__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-involved */ "./src/components/pages/about/get-involved.tsx");
/* harmony import */ var _why_common_voice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./why-common-voice */ "./src/components/pages/about/why-common-voice.tsx");
/* harmony import */ var _hooks_use_active_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hooks/use-active-section */ "./src/hooks/use-active-section.ts");
/* harmony import */ var _about_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about.css */ "./src/components/pages/about/about.css");
/* harmony import */ var _about_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_about_css__WEBPACK_IMPORTED_MODULE_8__);









const About = react__WEBPACK_IMPORTED_MODULE_1__["memo"](() => {
    const activeSection = Object(_hooks_use_active_section__WEBPACK_IMPORTED_MODULE_7__["default"])(Object.values(_constants__WEBPACK_IMPORTED_MODULE_3__["SECTIONS"]));
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("section", { className: "about-main-container" }, [
        [_constants__WEBPACK_IMPORTED_MODULE_3__["SECTIONS"].WHY_COMMON_VOICE, _why_common_voice__WEBPACK_IMPORTED_MODULE_6__["default"]],
        [
            {
                activeSection: activeSection,
                navType: 'desktop',
            },
            _nav__WEBPACK_IMPORTED_MODULE_0__["default"],
        ],
        [_constants__WEBPACK_IMPORTED_MODULE_3__["SECTIONS"].HOW_IT_WORKS, _how_it_works__WEBPACK_IMPORTED_MODULE_4__["default"]],
        // [SECTIONS.PARTNERS, Partners],
        [_constants__WEBPACK_IMPORTED_MODULE_3__["SECTIONS"].GET_INVOLVED, _get_involved__WEBPACK_IMPORTED_MODULE_5__["default"]],
        [
            {
                activeSection: activeSection,
                navType: 'mobile',
            },
            _nav__WEBPACK_IMPORTED_MODULE_0__["default"],
        ],
    ].map(([section, SectionComponent], index) => {
        if (typeof section === 'object') {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](SectionComponent, Object.assign({ key: `section-${index}` }, section));
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("section", { id: section, key: `section-${section}`, className: classnames__WEBPACK_IMPORTED_MODULE_2__('about-hero', section, {
                active: section === activeSection,
            }) },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](SectionComponent, null)));
    })));
});
/* harmony default export */ __webpack_exports__["default"] = (About);


/***/ }),

/***/ "./src/components/pages/about/constants.ts":
/*!*************************************************!*\
  !*** ./src/components/pages/about/constants.ts ***!
  \*************************************************/
/*! exports provided: SECTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECTIONS", function() { return SECTIONS; });
const SECTIONS = {
    WHY_COMMON_VOICE: 'why-common-voice',
    HOW_IT_WORKS: 'how-it-works',
    PARTNERS: 'partners',
    GET_INVOLVED: 'get-involved',
};


/***/ }),

/***/ "./src/components/pages/about/get-involved.css":
/*!*****************************************************!*\
  !*** ./src/components/pages/about/get-involved.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/about/get-involved.tsx":
/*!*****************************************************!*\
  !*** ./src/components/pages/about/get-involved.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/links */ "./src/components/shared/links.tsx");
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/icons */ "./src/components/ui/icons.tsx");
/* harmony import */ var _get_involved_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-involved.css */ "./src/components/pages/about/get-involved.css");
/* harmony import */ var _get_involved_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_get_involved_css__WEBPACK_IMPORTED_MODULE_4__);





const GetInvolved = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { className: "wave-footer", src: __webpack_require__(/*! ./images/wave-footer@3x.png */ "./src/components/pages/about/images/wave-footer@3x.png"), alt: "Wave" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "robot-section" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: __webpack_require__(/*! ./images/robot-footer.svg */ "./src/components/pages/about/images/robot-footer.svg"), alt: "Robot" })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "text-section" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "line" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_1__["Localized"], { id: "about-get-involved" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_1__["Localized"], { id: "about-get-involved-text", discourseLink: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_links__WEBPACK_IMPORTED_MODULE_2__["DiscourseLink"], null), githubLink: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_links__WEBPACK_IMPORTED_MODULE_2__["GitHubLink"], null), slackLink: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_links__WEBPACK_IMPORTED_MODULE_2__["SlackLink"], null) },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "get-involved-icons" }, [
                [_shared_links__WEBPACK_IMPORTED_MODULE_2__["DiscourseLink"], _ui_icons__WEBPACK_IMPORTED_MODULE_3__["DiscourseIconCode"]],
                [_shared_links__WEBPACK_IMPORTED_MODULE_2__["GitHubLink"], _ui_icons__WEBPACK_IMPORTED_MODULE_3__["GithubIconCode"]],
                [_shared_links__WEBPACK_IMPORTED_MODULE_2__["SlackLink"], _ui_icons__WEBPACK_IMPORTED_MODULE_3__["SlackIcon"]],
                [_shared_links__WEBPACK_IMPORTED_MODULE_2__["ContactLink"], _ui_icons__WEBPACK_IMPORTED_MODULE_3__["ContactIconCode"]],
            ].map(([LinkComponent, IconComponent], index) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LinkComponent, { key: `get-involved-icon-${index}`, className: "round-button" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](IconComponent, null))))))));
};
/* harmony default export */ __webpack_exports__["default"] = (GetInvolved);


/***/ }),

/***/ "./src/components/pages/about/how-it-works.css":
/*!*****************************************************!*\
  !*** ./src/components/pages/about/how-it-works.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/about/how-it-works.tsx":
/*!*****************************************************!*\
  !*** ./src/components/pages/about/how-it-works.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _how_it_works_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./how-it-works.css */ "./src/components/pages/about/how-it-works.css");
/* harmony import */ var _how_it_works_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_how_it_works_css__WEBPACK_IMPORTED_MODULE_3__);
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




const CHART_NODE_REQUIRED_COUNT = 4;
const CHART_NODE_BLOCK_WITHOUT_OPTIONS_COUNT = 2;
const FLOWCHART = [
    [['01', 'microphone.png', 'about-speak']],
    [
        [
            '02',
            'time.png',
            'about-listen-queue',
            {
                children: (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: __webpack_require__(/*! ./images/connecting-arrow.png */ "./src/components/pages/about/images/connecting-arrow.png"), className: "connecting-arrow left desktop", alt: "" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: __webpack_require__(/*! ./images/connecting-arrow.png */ "./src/components/pages/about/images/connecting-arrow.png"), className: "connecting-arrow right desktop", alt: "" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: __webpack_require__(/*! ./images/connecting-arrow-mobile.png */ "./src/components/pages/about/images/connecting-arrow-mobile.png"), className: "connecting-arrow left mobile", alt: "" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: __webpack_require__(/*! ./images/connecting-arrow-mobile.png */ "./src/components/pages/about/images/connecting-arrow-mobile.png"), className: "connecting-arrow right mobile", alt: "" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: __webpack_require__(/*! ./images/center-arrow.png */ "./src/components/pages/about/images/center-arrow.png"), className: "center-arrow", alt: "" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: __webpack_require__(/*! ./images/center-arrow-mobile.png */ "./src/components/pages/about/images/center-arrow-mobile.png"), className: "center-arrow mobile", alt: "" }))),
            },
        ],
    ],
    [['03', 'headset.png', 'about-listen']],
    [
        [
            '04',
            'duotone.png',
            'about-is-it-valid',
            {
                className: 'spaced-below',
                children: (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: __webpack_require__(/*! ./images/forked-arrow.png */ "./src/components/pages/about/images/forked-arrow.png"), className: "center-arrow", alt: "" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: __webpack_require__(/*! ./images/forked-arrow-mobile.png */ "./src/components/pages/about/images/forked-arrow-mobile.png"), className: "center-arrow mobile", alt: "" }))),
            },
        ],
    ],
    [
        [
            '5.1',
            'yes.png',
            'about-yes-votes',
            { className: 'after-fork inside-fork' },
        ],
        [
            '5.2',
            'cancel.png',
            'about-no-votes',
            { className: 'after-fork inside-fork' },
        ],
        { className: 'top' },
    ],
    [
        [
            '6.1',
            'brain.png',
            'about-dataset-new',
            {
                className: 'inside-fork',
                children: (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: __webpack_require__(/*! ./images/arrow-closer.png */ "./src/components/pages/about/images/arrow-closer.png"), className: "center-arrow", alt: "" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: __webpack_require__(/*! ./images/center-arrow-mobile.png */ "./src/components/pages/about/images/center-arrow-mobile.png"), className: "center-arrow mobile", alt: "" }))),
            },
        ],
        [
            '6.2',
            'rip.png',
            'about-clip-graveyard',
            {
                className: 'inside-fork',
                children: (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: __webpack_require__(/*! ./images/arrow-closer.png */ "./src/components/pages/about/images/arrow-closer.png"), className: "center-arrow", alt: "" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: __webpack_require__(/*! ./images/center-arrow-mobile.png */ "./src/components/pages/about/images/center-arrow-mobile.png"), className: "center-arrow mobile", alt: "" }))),
            },
        ],
        { className: 'bottom' },
    ],
];
const ChartNode = react__WEBPACK_IMPORTED_MODULE_0__["memo"](({ chartNode }) => {
    const [id, icon, key, _a] = chartNode, { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", Object.assign({ className: classnames__WEBPACK_IMPORTED_MODULE_1__('flowchart-block', className) }, props),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "number" }, id),
        icon && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { className: "icon", src: __webpack_require__("./src/components/pages/about/images/flowchart-icons sync recursive ^\\.\\/.*$")(`./${icon}`), alt: "" })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_2__["Localized"], { id: key },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", { className: "title" })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_2__["Localized"], { id: `${key}-text` },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "description" })),
        children || (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: __webpack_require__(/*! ./images/center-arrow.png */ "./src/components/pages/about/images/center-arrow.png"), className: "center-arrow", alt: "" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: __webpack_require__(/*! ./images/center-arrow-mobile.png */ "./src/components/pages/about/images/center-arrow-mobile.png"), className: "center-arrow mobile", alt: "" })))));
});
const HowItWorks = react__WEBPACK_IMPORTED_MODULE_0__["memo"](() => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "about-content" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "about-container no-padding-xs" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "vertical-line" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "flowchart" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_2__["Localized"], { id: "how-does-it-work-title" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null)),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_2__["Localized"], { id: "how-does-it-work-text" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", null)),
                FLOWCHART.map(f => {
                    const chartNodes = f.map((chartNode) => chartNode.length === CHART_NODE_REQUIRED_COUNT ||
                        !Array.isArray(chartNode)
                        ? chartNode
                        : [...chartNode, {}]);
                    return chartNodes.length == CHART_NODE_BLOCK_WITHOUT_OPTIONS_COUNT
                        ? [...chartNodes, {}]
                        : chartNodes;
                }).map((chartNodes, index) => {
                    if (chartNodes.length === 1) {
                        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ChartNode, { key: `chart-node-${index}`, chartNode: chartNodes[0] }));
                    }
                    const _a = chartNodes.pop(), { className } = _a, props = __rest(_a, ["className"]);
                    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", Object.assign({ key: `chart-node-block-${index}`, className: classnames__WEBPACK_IMPORTED_MODULE_1__('fork-group', className) }, props), chartNodes.map((chartNode, index) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ChartNode, { key: `chart-node-${index}`, chartNode: chartNode })))));
                })))));
});
/* harmony default export */ __webpack_exports__["default"] = (HowItWorks);


/***/ }),

/***/ "./src/components/pages/about/images/arrow-closer.png":
/*!************************************************************!*\
  !*** ./src/components/pages/about/images/arrow-closer.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7398e84719ea761119ff0efdc099a591.png";

/***/ }),

/***/ "./src/components/pages/about/images/center-arrow-mobile.png":
/*!*******************************************************************!*\
  !*** ./src/components/pages/about/images/center-arrow-mobile.png ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fa640ae1682700c7c56a29179ee7cc97.png";

/***/ }),

/***/ "./src/components/pages/about/images/center-arrow.png":
/*!************************************************************!*\
  !*** ./src/components/pages/about/images/center-arrow.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "73f56ac11b3e41ea1337351494a434a5.png";

/***/ }),

/***/ "./src/components/pages/about/images/connecting-arrow-mobile.png":
/*!***********************************************************************!*\
  !*** ./src/components/pages/about/images/connecting-arrow-mobile.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "94d6f1e256215385252abfd6287d4d61.png";

/***/ }),

/***/ "./src/components/pages/about/images/connecting-arrow.png":
/*!****************************************************************!*\
  !*** ./src/components/pages/about/images/connecting-arrow.png ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "04ab4166f1e258659cb74f4878da3d15.png";

/***/ }),

/***/ "./src/components/pages/about/images/flowchart-icons sync recursive ^\\.\\/.*$":
/*!*************************************************************************!*\
  !*** ./src/components/pages/about/images/flowchart-icons sync ^\.\/.*$ ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./brain.png": "./src/components/pages/about/images/flowchart-icons/brain.png",
	"./brain@2x.png": "./src/components/pages/about/images/flowchart-icons/brain@2x.png",
	"./brain@3x.png": "./src/components/pages/about/images/flowchart-icons/brain@3x.png",
	"./cancel.png": "./src/components/pages/about/images/flowchart-icons/cancel.png",
	"./cancel@2x.png": "./src/components/pages/about/images/flowchart-icons/cancel@2x.png",
	"./cancel@3x.png": "./src/components/pages/about/images/flowchart-icons/cancel@3x.png",
	"./duotone.png": "./src/components/pages/about/images/flowchart-icons/duotone.png",
	"./duotone@2x.png": "./src/components/pages/about/images/flowchart-icons/duotone@2x.png",
	"./duotone@3x.png": "./src/components/pages/about/images/flowchart-icons/duotone@3x.png",
	"./headset.png": "./src/components/pages/about/images/flowchart-icons/headset.png",
	"./headset@2x.png": "./src/components/pages/about/images/flowchart-icons/headset@2x.png",
	"./headset@3x.png": "./src/components/pages/about/images/flowchart-icons/headset@3x.png",
	"./microphone.png": "./src/components/pages/about/images/flowchart-icons/microphone.png",
	"./microphone@2x.png": "./src/components/pages/about/images/flowchart-icons/microphone@2x.png",
	"./microphone@3x.png": "./src/components/pages/about/images/flowchart-icons/microphone@3x.png",
	"./rip.png": "./src/components/pages/about/images/flowchart-icons/rip.png",
	"./rip@2x.png": "./src/components/pages/about/images/flowchart-icons/rip@2x.png",
	"./rip@3x.png": "./src/components/pages/about/images/flowchart-icons/rip@3x.png",
	"./time.png": "./src/components/pages/about/images/flowchart-icons/time.png",
	"./time@2x.png": "./src/components/pages/about/images/flowchart-icons/time@2x.png",
	"./time@3x.png": "./src/components/pages/about/images/flowchart-icons/time@3x.png",
	"./yes.png": "./src/components/pages/about/images/flowchart-icons/yes.png",
	"./yes@2x.png": "./src/components/pages/about/images/flowchart-icons/yes@2x.png",
	"./yes@3x.png": "./src/components/pages/about/images/flowchart-icons/yes@3x.png"
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
webpackContext.id = "./src/components/pages/about/images/flowchart-icons sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/components/pages/about/images/flowchart-icons/brain.png":
/*!*********************************************************************!*\
  !*** ./src/components/pages/about/images/flowchart-icons/brain.png ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fcaa22e464918d8a8cdf3f709c7a455f.png";

/***/ }),

/***/ "./src/components/pages/about/images/flowchart-icons/brain@2x.png":
/*!************************************************************************!*\
  !*** ./src/components/pages/about/images/flowchart-icons/brain@2x.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ad95f9ba8ec11a5b9e2e8622b6358ec4.png";

/***/ }),

/***/ "./src/components/pages/about/images/flowchart-icons/brain@3x.png":
/*!************************************************************************!*\
  !*** ./src/components/pages/about/images/flowchart-icons/brain@3x.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6cc7eb4fb0ade6662b4a88b077ed510d.png";

/***/ }),

/***/ "./src/components/pages/about/images/flowchart-icons/cancel.png":
/*!**********************************************************************!*\
  !*** ./src/components/pages/about/images/flowchart-icons/cancel.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e13c131cc5a58cbeff07393dc1ad276b.png";

/***/ }),

/***/ "./src/components/pages/about/images/flowchart-icons/cancel@2x.png":
/*!*************************************************************************!*\
  !*** ./src/components/pages/about/images/flowchart-icons/cancel@2x.png ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1a3d0f11c91d17475ecbcbbc6966ec17.png";

/***/ }),

/***/ "./src/components/pages/about/images/flowchart-icons/cancel@3x.png":
/*!*************************************************************************!*\
  !*** ./src/components/pages/about/images/flowchart-icons/cancel@3x.png ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d3a8d3b1ee5b76a6b13979a0fdf6ef02.png";

/***/ }),

/***/ "./src/components/pages/about/images/flowchart-icons/duotone.png":
/*!***********************************************************************!*\
  !*** ./src/components/pages/about/images/flowchart-icons/duotone.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2aca82b77a13e5581f841c74f0dcf650.png";

/***/ }),

/***/ "./src/components/pages/about/images/flowchart-icons/duotone@2x.png":
/*!**************************************************************************!*\
  !*** ./src/components/pages/about/images/flowchart-icons/duotone@2x.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ead0b22bd15d914f6778fed7092d1bce.png";

/***/ }),

/***/ "./src/components/pages/about/images/flowchart-icons/duotone@3x.png":
/*!**************************************************************************!*\
  !*** ./src/components/pages/about/images/flowchart-icons/duotone@3x.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "78c28a51c1d3fd026eac2421232e2c12.png";

/***/ }),

/***/ "./src/components/pages/about/images/flowchart-icons/headset.png":
/*!***********************************************************************!*\
  !*** ./src/components/pages/about/images/flowchart-icons/headset.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "65b890b3f4e61e4c8d827cf2aae362bf.png";

/***/ }),

/***/ "./src/components/pages/about/images/flowchart-icons/headset@2x.png":
/*!**************************************************************************!*\
  !*** ./src/components/pages/about/images/flowchart-icons/headset@2x.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4038d9e7e6d4b7e5a28cb8970c0dcaff.png";

/***/ }),

/***/ "./src/components/pages/about/images/flowchart-icons/headset@3x.png":
/*!**************************************************************************!*\
  !*** ./src/components/pages/about/images/flowchart-icons/headset@3x.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1b7028e86fddacfeeb46a6449327fb06.png";

/***/ }),

/***/ "./src/components/pages/about/images/flowchart-icons/microphone.png":
/*!**************************************************************************!*\
  !*** ./src/components/pages/about/images/flowchart-icons/microphone.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cd5d9479da443748991b0b1e89894523.png";

/***/ }),

/***/ "./src/components/pages/about/images/flowchart-icons/microphone@2x.png":
/*!*****************************************************************************!*\
  !*** ./src/components/pages/about/images/flowchart-icons/microphone@2x.png ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e66cd338d5db2d05178a3cf9b4bf8d07.png";

/***/ }),

/***/ "./src/components/pages/about/images/flowchart-icons/microphone@3x.png":
/*!*****************************************************************************!*\
  !*** ./src/components/pages/about/images/flowchart-icons/microphone@3x.png ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2719829f7b9bda6f20ac3eb0c31b02e4.png";

/***/ }),

/***/ "./src/components/pages/about/images/flowchart-icons/rip.png":
/*!*******************************************************************!*\
  !*** ./src/components/pages/about/images/flowchart-icons/rip.png ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "91ab81b3123cc5a75e2f40fff3cb55f1.png";

/***/ }),

/***/ "./src/components/pages/about/images/flowchart-icons/rip@2x.png":
/*!**********************************************************************!*\
  !*** ./src/components/pages/about/images/flowchart-icons/rip@2x.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8991d5b0181f2a7153e7ea135b42713d.png";

/***/ }),

/***/ "./src/components/pages/about/images/flowchart-icons/rip@3x.png":
/*!**********************************************************************!*\
  !*** ./src/components/pages/about/images/flowchart-icons/rip@3x.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1fb5c9c75aa486ab42af9660e44341a8.png";

/***/ }),

/***/ "./src/components/pages/about/images/flowchart-icons/time.png":
/*!********************************************************************!*\
  !*** ./src/components/pages/about/images/flowchart-icons/time.png ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "13e9ffe8c1bacbee22d2f6f5e7191b65.png";

/***/ }),

/***/ "./src/components/pages/about/images/flowchart-icons/time@2x.png":
/*!***********************************************************************!*\
  !*** ./src/components/pages/about/images/flowchart-icons/time@2x.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "eac6fec0290430e78c102fb9eafac8c9.png";

/***/ }),

/***/ "./src/components/pages/about/images/flowchart-icons/time@3x.png":
/*!***********************************************************************!*\
  !*** ./src/components/pages/about/images/flowchart-icons/time@3x.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8ca254cf087855d04f2315f86e2e52bf.png";

/***/ }),

/***/ "./src/components/pages/about/images/flowchart-icons/yes.png":
/*!*******************************************************************!*\
  !*** ./src/components/pages/about/images/flowchart-icons/yes.png ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "501c746ec674f864f992a97bae9176bb.png";

/***/ }),

/***/ "./src/components/pages/about/images/flowchart-icons/yes@2x.png":
/*!**********************************************************************!*\
  !*** ./src/components/pages/about/images/flowchart-icons/yes@2x.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dc20cd4f233173a54d5a8501b4b936d5.png";

/***/ }),

/***/ "./src/components/pages/about/images/flowchart-icons/yes@3x.png":
/*!**********************************************************************!*\
  !*** ./src/components/pages/about/images/flowchart-icons/yes@3x.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "de068e2ac14e4ecb2279766021783cfb.png";

/***/ }),

/***/ "./src/components/pages/about/images/forked-arrow-mobile.png":
/*!*******************************************************************!*\
  !*** ./src/components/pages/about/images/forked-arrow-mobile.png ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2ffe1187629d057e59c0ba134dd8f7c5.png";

/***/ }),

/***/ "./src/components/pages/about/images/forked-arrow.png":
/*!************************************************************!*\
  !*** ./src/components/pages/about/images/forked-arrow.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3378e0dd11f169465bc9efc96296f41a.png";

/***/ }),

/***/ "./src/components/pages/about/images/nav sync recursive ^\\.\\/.*$":
/*!*************************************************************!*\
  !*** ./src/components/pages/about/images/nav sync ^\.\/.*$ ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./menu1-active.png": "./src/components/pages/about/images/nav/menu1-active.png",
	"./menu1-inactive.png": "./src/components/pages/about/images/nav/menu1-inactive.png",
	"./menu2-active.png": "./src/components/pages/about/images/nav/menu2-active.png",
	"./menu2-inactive.png": "./src/components/pages/about/images/nav/menu2-inactive.png",
	"./menu3-active.png": "./src/components/pages/about/images/nav/menu3-active.png",
	"./menu3-inactive.png": "./src/components/pages/about/images/nav/menu3-inactive.png",
	"./menu4-active.png": "./src/components/pages/about/images/nav/menu4-active.png",
	"./menu4-inactive.png": "./src/components/pages/about/images/nav/menu4-inactive.png",
	"./nav-mobile-active.png": "./src/components/pages/about/images/nav/nav-mobile-active.png",
	"./nav-mobile.png": "./src/components/pages/about/images/nav/nav-mobile.png"
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
webpackContext.id = "./src/components/pages/about/images/nav sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/components/pages/about/images/nav/menu1-active.png":
/*!****************************************************************!*\
  !*** ./src/components/pages/about/images/nav/menu1-active.png ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1de2b88d3ddcd61e1a0ad578b4acf43a.png";

/***/ }),

/***/ "./src/components/pages/about/images/nav/menu1-inactive.png":
/*!******************************************************************!*\
  !*** ./src/components/pages/about/images/nav/menu1-inactive.png ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5cae27a2d2e6db2d3af24b65b92a32c5.png";

/***/ }),

/***/ "./src/components/pages/about/images/nav/menu2-active.png":
/*!****************************************************************!*\
  !*** ./src/components/pages/about/images/nav/menu2-active.png ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fc64cfa4622432f76a3203ab55d22945.png";

/***/ }),

/***/ "./src/components/pages/about/images/nav/menu2-inactive.png":
/*!******************************************************************!*\
  !*** ./src/components/pages/about/images/nav/menu2-inactive.png ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cbb1a5c1f699d25f7dc160e07b27e6d2.png";

/***/ }),

/***/ "./src/components/pages/about/images/nav/menu3-active.png":
/*!****************************************************************!*\
  !*** ./src/components/pages/about/images/nav/menu3-active.png ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3fcdc8221612e1dd7fd62f7e5673e230.png";

/***/ }),

/***/ "./src/components/pages/about/images/nav/menu3-inactive.png":
/*!******************************************************************!*\
  !*** ./src/components/pages/about/images/nav/menu3-inactive.png ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ca9c0e2c1dd1c69a25532467d2511c49.png";

/***/ }),

/***/ "./src/components/pages/about/images/nav/menu4-active.png":
/*!****************************************************************!*\
  !*** ./src/components/pages/about/images/nav/menu4-active.png ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2bb9e610237f9ad0e8a28f8cb7826737.png";

/***/ }),

/***/ "./src/components/pages/about/images/nav/menu4-inactive.png":
/*!******************************************************************!*\
  !*** ./src/components/pages/about/images/nav/menu4-inactive.png ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "42287bebc163495f871ded4ccde197eb.png";

/***/ }),

/***/ "./src/components/pages/about/images/nav/nav-mobile-active.png":
/*!*********************************************************************!*\
  !*** ./src/components/pages/about/images/nav/nav-mobile-active.png ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f8e4b9ff76b860331ef209274d904357.png";

/***/ }),

/***/ "./src/components/pages/about/images/nav/nav-mobile.png":
/*!**************************************************************!*\
  !*** ./src/components/pages/about/images/nav/nav-mobile.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "254c5358867b9d06f76df05c879f9722.png";

/***/ }),

/***/ "./src/components/pages/about/images/robot-footer.svg":
/*!************************************************************!*\
  !*** ./src/components/pages/about/images/robot-footer.svg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6bad751b2683b8461ee24db886c31c5a.svg";

/***/ }),

/***/ "./src/components/pages/about/images/robot.png":
/*!*****************************************************!*\
  !*** ./src/components/pages/about/images/robot.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "362cba4c1cd3f868a00538ad7ef8336c.png";

/***/ }),

/***/ "./src/components/pages/about/images/wave-footer@3x.png":
/*!**************************************************************!*\
  !*** ./src/components/pages/about/images/wave-footer@3x.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8233f313c1371e02a19caf64a677c069.png";

/***/ }),

/***/ "./src/components/pages/about/images/wave-top.png":
/*!********************************************************!*\
  !*** ./src/components/pages/about/images/wave-top.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bef7c6595dc9ef5ff13d96bd7124c115.png";

/***/ }),

/***/ "./src/components/pages/about/nav.css":
/*!********************************************!*\
  !*** ./src/components/pages/about/nav.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/about/nav.tsx":
/*!********************************************!*\
  !*** ./src/components/pages/about/nav.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/components/pages/about/constants.ts");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/icons */ "./src/components/ui/icons.tsx");
/* harmony import */ var _nav_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav.css */ "./src/components/pages/about/nav.css");
/* harmony import */ var _nav_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nav_css__WEBPACK_IMPORTED_MODULE_5__);
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





const throttle = __webpack_require__(/*! lodash.throttle */ "../node_modules/lodash.throttle/index.js");

const MENU_SECTIONS = [
    [
        _constants__WEBPACK_IMPORTED_MODULE_2__["SECTIONS"].WHY_COMMON_VOICE,
        ['menu1-active.png', 'menu1-inactive.png'],
        _ui_icons__WEBPACK_IMPORTED_MODULE_4__["FlagIcon"],
        { className: 'i1' },
    ],
    [
        _constants__WEBPACK_IMPORTED_MODULE_2__["SECTIONS"].HOW_IT_WORKS,
        ['menu2-active.png', 'menu2-inactive.png'],
        _ui_icons__WEBPACK_IMPORTED_MODULE_4__["LayersIcon"],
        { className: 'i2' },
    ],
    // [
    //   SECTIONS.PARTNERS,
    //   ['menu3-active.png', 'menu3-inactive.png'],
    //   UsersIcon,
    //   { className: 'i3' },
    // ],
    [
        _constants__WEBPACK_IMPORTED_MODULE_2__["SECTIONS"].GET_INVOLVED,
        ['menu4-active.png', 'menu4-inactive.png'],
        _ui_icons__WEBPACK_IMPORTED_MODULE_4__["HeartIcon"],
        { className: 'i4' },
    ],
];
const Nav = react__WEBPACK_IMPORTED_MODULE_0__["memo"]((props) => {
    const [mobileBottom, setMobileBottom] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](0);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        if (props.navType !== 'mobile') {
            return;
        }
        const updateMobileBottomPosition = throttle(() => {
            setMobileBottom(document.documentElement.clientHeight - window.innerHeight);
        });
        setTimeout(updateMobileBottomPosition, 0);
        window.addEventListener('resize', updateMobileBottomPosition);
        return () => {
            window.removeEventListener('resize', updateMobileBottomPosition);
        };
    }, []);
    const parentProps = {
        className: classnames__WEBPACK_IMPORTED_MODULE_1__('nav', props.navType),
    };
    if (mobileBottom) {
        parentProps['style'] = { bottom: `${mobileBottom}px` };
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", Object.assign({}, parentProps), MENU_SECTIONS.map((_a) => {
        var [key, [activeBg, inactiveBg], MobileIcon, _b] = _a, { className } = _b, otherProps = __rest(_b, ["className"]);
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", Object.assign({ key: key, className: classnames__WEBPACK_IMPORTED_MODULE_1__('menu-item', className, {
                active: key === props.activeSection,
            }), href: `#${key}` }, otherProps),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: __webpack_require__("./src/components/pages/about/images/nav sync recursive ^\\.\\/.*$")(`./${inactiveBg}`) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: __webpack_require__("./src/components/pages/about/images/nav sync recursive ^\\.\\/.*$")(`./${activeBg}`), className: "active" }),
            props.navType === 'mobile' && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: __webpack_require__(/*! ./images/nav/nav-mobile.png */ "./src/components/pages/about/images/nav/nav-mobile.png"), className: "mobile-rounded" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MobileIcon, null))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_3__["Localized"], { id: `about-nav-${key}` },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "text" }))));
    })));
});
/* harmony default export */ __webpack_exports__["default"] = (Nav);


/***/ }),

/***/ "./src/components/pages/about/why-common-voice.css":
/*!*********************************************************!*\
  !*** ./src/components/pages/about/why-common-voice.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/about/why-common-voice.tsx":
/*!*********************************************************!*\
  !*** ./src/components/pages/about/why-common-voice.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _why_common_voice_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./why-common-voice.css */ "./src/components/pages/about/why-common-voice.css");
/* harmony import */ var _why_common_voice_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_why_common_voice_css__WEBPACK_IMPORTED_MODULE_2__);



const WhyCommonVoice = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { className: "wave-top", src: __webpack_require__(/*! ./images/wave-top.png */ "./src/components/pages/about/images/wave-top.png"), alt: "Wave" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "about-container about-heading" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "about-header" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "about-header-text" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "line" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_1__["Localized"], { id: "about-title" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null)),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_1__["Localized"], { id: "about-subtitle" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null)),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_1__["Localized"], { id: "about-header-description" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", { className: "header-description" }))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "intro-img" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { className: "robot", src: __webpack_require__(/*! ./images/robot.png */ "./src/components/pages/about/images/robot.png"), alt: "Waves" }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (WhyCommonVoice);


/***/ }),

/***/ "./src/hooks/use-active-section.ts":
/*!*****************************************!*\
  !*** ./src/hooks/use-active-section.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useActiveSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var throttle = __webpack_require__(/*! lodash.throttle */ "../node_modules/lodash.throttle/index.js");

function useActiveSection(sections) {
    const [activeSection, setActiveSection] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
    const sectionMap = {};
    const handleSectionUpdate = () => {
        let scrollMap = Object.entries(sectionMap);
        scrollMap.sort((a, b) => a[1] - b[1]);
        if (scrollMap[0] && scrollMap[0][0] !== activeSection) {
            setActiveSection(scrollMap[0][0]);
        }
    };
    const throttledHandleSectionUpdate = throttle(handleSectionUpdate, 200);
    const intersectionObserverCallback = (entries) => {
        entries.forEach(e => {
            sectionMap[e.target.id] = e.boundingClientRect.top;
            if (!e.isIntersecting || e.intersectionRatio < 0.02) {
                delete sectionMap[e.target.id];
            }
        });
        throttledHandleSectionUpdate();
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        const sectionsElements = sections
            .map((s) => document.getElementById(s))
            .filter((e) => !!e);
        const observer = new IntersectionObserver(intersectionObserverCallback, {
            threshold: [
                0,
                0.01,
                0.02,
                0.03,
                0.04,
                0.05,
                0.06,
                0.07,
                0.08,
                0.09,
                0.1,
                0.9,
                0.91,
                0.92,
                0.93,
                0.94,
                0.95,
                0.96,
                0.97,
                0.98,
                0.99,
                1,
            ],
            rootMargin: '-20%',
        });
        sectionsElements.map((e) => observer.observe(e));
        return () => {
            sectionsElements.map((e) => observer.unobserve(e));
        };
    });
    return activeSection;
}


/***/ })

}]);
//# sourceMappingURL=6.bundle.js.map