(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./src/components/pages/landing/landing.css":
/*!**************************************************!*\
  !*** ./src/components/pages/landing/landing.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/landing/landing.tsx":
/*!**************************************************!*\
  !*** ./src/components/pages/landing/landing.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Landing; });
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_tracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/tracker */ "./src/services/tracker.ts");
/* harmony import */ var _stores_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../stores/tree */ "./src/stores/tree.ts");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../urls */ "./src/urls.ts");
/* harmony import */ var _register_section_register_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../register-section/register-section */ "./src/components/register-section/register-section.tsx");
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/icons */ "./src/components/ui/icons.tsx");
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/ui */ "./src/components/ui/ui.tsx");
/* harmony import */ var _landing_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing.css */ "./src/components/pages/landing/landing.css");
/* harmony import */ var _landing_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_landing_css__WEBPACK_IMPORTED_MODULE_8__);









function Landing() {
    const hasAccount = Object(_stores_tree__WEBPACK_IMPORTED_MODULE_3__["useTypedSelector"])(({ user }) => Boolean(user && user.account));
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "partner-landing" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "partner-header" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { src: __webpack_require__(/*! ./sodedif.png */ "./src/components/pages/landing/sodedif.png"), alt: "Sodedif Logo", style: { padding: 10, height: 50 } })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_register_section_register_section__WEBPACK_IMPORTED_MODULE_5__["default"], { flipped: true, marsSrc: __webpack_require__(/*! ./mars.svg */ "./src/components/pages/landing/mars.svg") },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "welcome-staff", "$company": "Sodedif" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "help-contribute" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "main-paragraph" })),
            hasAccount ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "speak-subtitle" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_7__["LinkButton"], { rounded: true, to: _urls__WEBPACK_IMPORTED_MODULE_4__["default"].SPEAK, onClick: () => Object(_services_tracker__WEBPACK_IMPORTED_MODULE_2__["trackLanding"])('speak') }))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "login-company", "$company": "Sodedif" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_7__["LinkButton"], { rounded: true, href: "/login", onClick: () => Object(_services_tracker__WEBPACK_IMPORTED_MODULE_2__["trackLanding"])('profile') }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "profile-not-required" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "profile-not-required" }))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("section", { className: "about-section" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "inner" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "home-title" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_7__["LinkButton"], { rounded: true, to: _urls__WEBPACK_IMPORTED_MODULE_4__["default"].ABOUT, onClick: () => Object(_services_tracker__WEBPACK_IMPORTED_MODULE_2__["trackLanding"])('about') },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "show-wall-of-text" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "hidden-md-up" })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "read-more-about" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "hidden-sm-down" })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_6__["ArrowLeft"], null))))));
}


/***/ }),

/***/ "./src/components/pages/landing/mars.svg":
/*!***********************************************!*\
  !*** ./src/components/pages/landing/mars.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ec427ca022d835e4ab699236a22f9bde.svg";

/***/ }),

/***/ "./src/components/pages/landing/sodedif.png":
/*!**************************************************!*\
  !*** ./src/components/pages/landing/sodedif.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "485d1227fe87b8c5d18c77dc6f9b0247.png";

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
//# sourceMappingURL=11.bundle.js.map