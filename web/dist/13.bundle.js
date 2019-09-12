(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "../node_modules/react-content-loader/dist/react-content-loader.es.js":
/*!****************************************************************************!*\
  !*** ../node_modules/react-content-loader/dist/react-content-loader.es.js ***!
  \****************************************************************************/
/*! exports provided: default, BulletList, Code, Facebook, Instagram, List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulletList", function() { return BulletListStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return CodeStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Facebook", function() { return FacebookStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Instagram", function() { return InstagramStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return ListStyle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return _assign.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  return t;
}

var uid = function uid() {
  return Math.random().toString(36).substring(2);
};

var Svg = function Svg(_a) {
  var rtl = _a.rtl,
      speed = _a.speed,
      interval = _a.interval,
      style = _a.style,
      width = _a.width,
      height = _a.height,
      baseUrl = _a.baseUrl,
      gradientRatio = _a.gradientRatio,
      animate = _a.animate,
      ariaLabel = _a.ariaLabel,
      children = _a.children,
      className = _a.className,
      uniquekey = _a.uniquekey,
      primaryColor = _a.primaryColor,
      primaryOpacity = _a.primaryOpacity,
      secondaryColor = _a.secondaryColor,
      secondaryOpacity = _a.secondaryOpacity,
      preserveAspectRatio = _a.preserveAspectRatio,
      props = __rest(_a, ["rtl", "speed", "interval", "style", "width", "height", "baseUrl", "gradientRatio", "animate", "ariaLabel", "children", "className", "uniquekey", "primaryColor", "primaryOpacity", "secondaryColor", "secondaryOpacity", "preserveAspectRatio"]);

  var idClip = uniquekey ? uniquekey + "-idClip" : uid();
  var idGradient = uniquekey ? uniquekey + "-idGradient" : uid();
  var rtlStyle = rtl ? {
    transform: 'scaleX(-1)'
  } : {};
  var keyTimes = "0; " + interval + "; 1";
  var dur = speed + "s";
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", _assign({
    role: "img",
    style: _assign({}, style, rtlStyle),
    className: className,
    "aria-label": ariaLabel ? ariaLabel : null,
    viewBox: "0 0 " + width + " " + height,
    preserveAspectRatio: preserveAspectRatio
  }, props), ariaLabel ? Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("title", null, ariaLabel) : null, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "0",
    y: "0",
    width: width,
    height: height,
    clipPath: "url(" + baseUrl + "#" + idClip + ")",
    style: {
      fill: "url(" + baseUrl + "#" + idGradient + ")"
    }
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("clipPath", {
    id: idClip
  }, children), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: idGradient
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0%",
    stopColor: primaryColor,
    stopOpacity: primaryOpacity
  }, animate && Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("animate", {
    attributeName: "offset",
    values: -gradientRatio + "; " + -gradientRatio + "; 1",
    keyTimes: keyTimes,
    dur: dur,
    repeatCount: "indefinite"
  })), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "50%",
    stopColor: secondaryColor,
    stopOpacity: secondaryOpacity
  }, animate && Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("animate", {
    attributeName: "offset",
    values: -gradientRatio / 2 + "; " + -gradientRatio / 2 + "; " + (1 + gradientRatio / 2),
    keyTimes: keyTimes,
    dur: dur,
    repeatCount: "indefinite"
  })), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "100%",
    stopColor: primaryColor,
    stopOpacity: primaryOpacity
  }, animate && Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("animate", {
    attributeName: "offset",
    values: "0; 0; " + (1 + gradientRatio),
    keyTimes: keyTimes,
    dur: dur,
    repeatCount: "indefinite"
  })))));
};

var defaultProps = {
  animate: true,
  ariaLabel: 'Loading interface...',
  baseUrl: '',
  gradientRatio: 2,
  height: 130,
  interval: 0.25,
  preserveAspectRatio: 'none',
  primaryColor: '#f0f0f0',
  primaryOpacity: 1,
  rtl: false,
  secondaryColor: '#e0e0e0',
  secondaryOpacity: 1,
  speed: 2,
  style: {},
  width: 400
};

var InitialComponent = function InitialComponent(props) {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "0",
    y: "0",
    rx: "5",
    ry: "5",
    width: props.width,
    height: props.height
  });
};

var ContentLoader = function ContentLoader(props) {
  var mergedProps = _assign({}, defaultProps, props);

  var children = props.children ? props.children : Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InitialComponent, _assign({}, mergedProps));
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Svg, _assign({}, mergedProps), children);
};

var FacebookStyle = function FacebookStyle(props) {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ContentLoader, _assign({}, props), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "70",
    y: "15",
    rx: "4",
    ry: "4",
    width: "117",
    height: "6.4"
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "70",
    y: "35",
    rx: "3",
    ry: "3",
    width: "85",
    height: "6.4"
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "0",
    y: "80",
    rx: "3",
    ry: "3",
    width: "350",
    height: "6.4"
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "0",
    y: "100",
    rx: "3",
    ry: "3",
    width: "380",
    height: "6.4"
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "0",
    y: "120",
    rx: "3",
    ry: "3",
    width: "201",
    height: "6.4"
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    cx: "30",
    cy: "30",
    r: "30"
  }));
};

var InstagramStyle = function InstagramStyle(props) {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ContentLoader, _assign({}, props, {
    height: 480
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    cx: "30",
    cy: "30",
    r: "30"
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "75",
    y: "13",
    rx: "4",
    ry: "4",
    width: "100",
    height: "13"
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "75",
    y: "37",
    rx: "4",
    ry: "4",
    width: "50",
    height: "8"
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "0",
    y: "70",
    rx: "5",
    ry: "5",
    width: "400",
    height: "400"
  }));
};

var CodeStyle = function CodeStyle(props) {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ContentLoader, _assign({}, props), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "0",
    y: "0",
    rx: "3",
    ry: "3",
    width: "70",
    height: "10"
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "80",
    y: "0",
    rx: "3",
    ry: "3",
    width: "100",
    height: "10"
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "190",
    y: "0",
    rx: "3",
    ry: "3",
    width: "10",
    height: "10"
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "15",
    y: "20",
    rx: "3",
    ry: "3",
    width: "130",
    height: "10"
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "155",
    y: "20",
    rx: "3",
    ry: "3",
    width: "130",
    height: "10"
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "15",
    y: "40",
    rx: "3",
    ry: "3",
    width: "90",
    height: "10"
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "115",
    y: "40",
    rx: "3",
    ry: "3",
    width: "60",
    height: "10"
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "185",
    y: "40",
    rx: "3",
    ry: "3",
    width: "60",
    height: "10"
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "0",
    y: "60",
    rx: "3",
    ry: "3",
    width: "30",
    height: "10"
  }));
};

var ListStyle = function ListStyle(props) {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ContentLoader, _assign({}, props), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "0",
    y: "0",
    rx: "3",
    ry: "3",
    width: "250",
    height: "10"
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "20",
    y: "20",
    rx: "3",
    ry: "3",
    width: "220",
    height: "10"
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "20",
    y: "40",
    rx: "3",
    ry: "3",
    width: "170",
    height: "10"
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "0",
    y: "60",
    rx: "3",
    ry: "3",
    width: "250",
    height: "10"
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "20",
    y: "80",
    rx: "3",
    ry: "3",
    width: "200",
    height: "10"
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "20",
    y: "100",
    rx: "3",
    ry: "3",
    width: "80",
    height: "10"
  }));
};

var BulletListStyle = function BulletListStyle(props) {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ContentLoader, _assign({}, props), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    cx: "10",
    cy: "20",
    r: "8"
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "25",
    y: "15",
    rx: "5",
    ry: "5",
    width: "220",
    height: "10"
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    cx: "10",
    cy: "50",
    r: "8"
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "25",
    y: "45",
    rx: "5",
    ry: "5",
    width: "220",
    height: "10"
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    cx: "10",
    cy: "80",
    r: "8"
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "25",
    y: "75",
    rx: "5",
    ry: "5",
    width: "220",
    height: "10"
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    cx: "10",
    cy: "110",
    r: "8"
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "25",
    y: "105",
    rx: "5",
    ry: "5",
    width: "220",
    height: "10"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ContentLoader);


/***/ }),

/***/ "./src/components/pages/languages/get-involved-modal.tsx":
/*!***************************************************************!*\
  !*** ./src/components/pages/languages/get-involved-modal.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modal/modal */ "./src/components/modal/modal.tsx");
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/icons */ "./src/components/ui/icons.tsx");
/* harmony import */ var _services_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/localization */ "./src/services/localization.ts");
/* harmony import */ var _stores_requested_languages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../stores/requested-languages */ "./src/stores/requested-languages.ts");
/* harmony import */ var _stores_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../stores/user */ "./src/stores/user.ts");
/* harmony import */ var _privacy_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../privacy-info */ "./src/components/privacy-info.tsx");
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/ui */ "./src/components/ui/ui.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { Localized } = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");









class GetInvolvedModal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            email: this.props.user.email,
            isSubmitted: false,
            sendEmails: this.props.user.sendEmails,
        };
        this.update = ({ target }) => {
            this.setState({
                [target.name]: target.type === 'checkbox' ? target.checked : target.value,
            });
        };
        this.save = (event) => __awaiter(this, void 0, void 0, function* () {
            event.preventDefault();
            const { api, createLanguageRequest, locale, updateUser, user } = this.props;
            const { email, sendEmails } = this.state;
            createLanguageRequest(_services_localization__WEBPACK_IMPORTED_MODULE_4__["NATIVE_NAMES"][locale]);
            updateUser({ email, sendEmails });
            this.setState({ isSubmitted: true });
            if (!user.sendEmails && sendEmails) {
                yield api.subscribeToNewsletter(email);
            }
        });
    }
    render() {
        const { locale, onRequestClose } = this.props;
        const { email, isSubmitted, sendEmails } = this.state;
        const nativeName = _services_localization__WEBPACK_IMPORTED_MODULE_4__["NATIVE_NAMES"][locale] || locale;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_modal_modal__WEBPACK_IMPORTED_MODULE_2__["default"], { innerClassName: "get-involved-modal", onRequestClose: onRequestClose },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Localized, { id: "get-involved-title", "$lang": nativeName },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Localized, { id: "get-involved-text", "$lang": nativeName, lineBreak: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null) },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "title-and-action" }, !isSubmitted && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Localized, { id: "get-involved-form-title", "$lang": nativeName },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", null)))),
            isSubmitted ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "signup-success" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_3__["SuccessIcon"], null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Localized, { id: "get-involved-success-title", "$language": nativeName },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null)),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Localized, { id: "get-involved-success-text" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "small" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Localized, { id: "get-involved-return-to-languages" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_8__["Button"], { rounded: true, onClick: onRequestClose })))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: this.save },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Localized, { id: "get-involved-email", attrs: { label: true } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_8__["LabeledInput"], { label: "Email", name: "email", required: true, type: "email", value: email, onChange: this.update })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "opt-in" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { name: "sendEmails", type: "checkbox", checked: sendEmails, onChange: this.update }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Localized, { id: "get-involved-opt-in" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_8__["Hr"], null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "center" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Localized, { id: "get-involved-submit" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_8__["Button"], { disabled: !email || !sendEmails, type: "submit", rounded: true })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null)),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_privacy_info__WEBPACK_IMPORTED_MODULE_7__["default"], { localizedPrefix: "get-involved-" })))));
    }
}
const mapStateToProps = ({ api, user }) => ({
    api,
    user,
});
const mapDispatchToProps = {
    createLanguageRequest: _stores_requested_languages__WEBPACK_IMPORTED_MODULE_5__["RequestedLanguages"].actions.create,
    updateUser: _stores_user__WEBPACK_IMPORTED_MODULE_6__["User"].actions.update,
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(GetInvolvedModal));


/***/ }),

/***/ "./src/components/pages/languages/images/Eq.svg":
/*!******************************************************!*\
  !*** ./src/components/pages/languages/images/Eq.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0fa4bb2a6927c6aa8377a61023968dfa.svg";

/***/ }),

/***/ "./src/components/pages/languages/images/_1.svg":
/*!******************************************************!*\
  !*** ./src/components/pages/languages/images/_1.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "79dbffceb35013c923b72303c9d0df86.svg";

/***/ }),

/***/ "./src/components/pages/languages/images/_2.svg":
/*!******************************************************!*\
  !*** ./src/components/pages/languages/images/_2.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "55f4e672ddb75a6950a89b83d458e4a9.svg";

/***/ }),

/***/ "./src/components/pages/languages/images/_3.svg":
/*!******************************************************!*\
  !*** ./src/components/pages/languages/images/_3.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d63a5aded4eb0bb89848a31980429cb6.svg";

/***/ }),

/***/ "./src/components/pages/languages/images/fading.svg":
/*!**********************************************************!*\
  !*** ./src/components/pages/languages/images/fading.svg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0b0d3cdd003f14debd6d155a627b8dd3.svg";

/***/ }),

/***/ "./src/components/pages/languages/languages.tsx":
/*!******************************************************!*\
  !*** ./src/components/pages/languages/languages.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _services_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/localization */ "./src/services/localization.ts");
/* harmony import */ var _services_tracker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/tracker */ "./src/services/tracker.ts");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../urls */ "./src/urls.ts");
/* harmony import */ var _request_language_modal_request_language_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../request-language-modal/request-language-modal */ "./src/components/request-language-modal/request-language-modal.tsx");
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/icons */ "./src/components/ui/icons.tsx");
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/ui */ "./src/components/ui/ui.tsx");
/* harmony import */ var _localization_box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./localization-box */ "./src/components/pages/languages/localization-box.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










class LanguagesPage extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            inProgress: [],
            filteredInProgress: [],
            launched: [],
            filteredLaunched: [],
            localeMessages: null,
            selectedSection: 'launched',
            showAllInProgress: false,
            showAllLaunched: false,
            showLanguageRequestModal: false,
            query: '',
        };
        this.smallSearchInputRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        this.largeSearchInputRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        this.sortLocales = () => {
            const { locale } = this.props;
            const inProgress = this.state.inProgress.slice();
            const launched = this.state.launched.slice();
            function presortLanguages(sortFn) {
                return (l1, l2) => {
                    // Selected locale comes first
                    if (l1.locale === locale) {
                        return -1;
                    }
                    if (l2.locale === locale) {
                        return 1;
                    }
                    // English comes last
                    if (l1.locale === 'en') {
                        return 1;
                    }
                    if (l2.locale === 'en') {
                        return -1;
                    }
                    // Browser locales are prioritized as well
                    if (navigator.languages.includes(l1.locale)) {
                        return -1;
                    }
                    if (navigator.languages.includes(l2.locale)) {
                        return 1;
                    }
                    return sortFn(l1, l2);
                };
            }
            inProgress.sort(presortLanguages((l1, l2) => l1.sentencesCount < l2.sentencesCount ||
                l1.localizedPercentage < l2.localizedPercentage
                ? 1
                : -1));
            launched.sort(presortLanguages((l1, l2) => (l1.seconds < l2.seconds ? 1 : -1)));
            this.setState({
                inProgress,
                filteredInProgress: inProgress,
                launched,
                filteredLaunched: launched,
            });
        };
        this.toggleShowAllInProgress = () => {
            this.setState(state => {
                const showAllInProgress = !state.showAllInProgress;
                Object(_services_tracker__WEBPACK_IMPORTED_MODULE_4__["trackLanguages"])(showAllInProgress ? 'see-more' : 'see-less', this.props.locale);
                return { showAllInProgress };
            });
        };
        this.toggleShowAllLaunched = () => {
            this.setState(state => {
                const showAllLaunched = !state.showAllLaunched;
                Object(_services_tracker__WEBPACK_IMPORTED_MODULE_4__["trackLanguages"])(showAllLaunched ? 'see-more' : 'see-less', this.props.locale);
                return { showAllLaunched };
            });
        };
        this.toggleSearch = () => this.setState(({ inProgress, launched }) => ({
            filteredInProgress: inProgress,
            filteredLaunched: launched,
            query: '',
        }));
        this.changeSection = (section) => {
            this.setState({
                selectedSection: section,
                showAllInProgress: false,
                showAllLaunched: false,
            });
        };
        this.handleQueryChange = (event) => {
            const { getString } = this.props;
            const { inProgress, launched, selectedSection } = this.state;
            const query = event.target.value;
            function filterLanguages(languages) {
                return query
                    ? languages.filter(({ locale }) => {
                        const q = query.toLowerCase();
                        return (locale.includes(q) ||
                            getString(locale)
                                .toLowerCase()
                                .includes(q) ||
                            (_services_localization__WEBPACK_IMPORTED_MODULE_3__["NATIVE_NAMES"][locale] || '').toLowerCase().includes(q));
                    })
                    : languages;
            }
            const filteredInProgress = filterLanguages(inProgress);
            const filteredLaunched = filterLanguages(launched);
            this.setState({
                filteredInProgress: filteredInProgress,
                filteredLaunched: filteredLaunched,
                query,
                selectedSection: filteredInProgress.length == 0
                    ? 'launched'
                    : filteredLaunched.length == 0
                        ? 'in-progress'
                        : selectedSection,
            });
        };
        this.handleQueryKeyDown = (event) => {
            if (event.key === 'Escape') {
                this.toggleSearch();
            }
        };
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            const { api } = this.props;
            const [localeMessages, { launched, inProgress }] = yield Promise.all([
                api.fetchCrossLocaleMessages(),
                api.fetchLanguageStats(),
            ]);
            this.setState({
                inProgress,
                filteredInProgress: inProgress,
                launched,
                filteredLaunched: launched,
                localeMessages,
            }, this.sortLocales);
        });
    }
    componentDidUpdate({ locale }) {
        if (this.props.locale !== locale) {
            this.sortLocales();
        }
    }
    render() {
        const { getString } = this.props;
        const { inProgress, filteredInProgress, launched, filteredLaunched, localeMessages, selectedSection, showAllInProgress, showAllLaunched, showLanguageRequestModal, query, } = this.state;
        const descriptionProps = {
            localizationGlossaryLink: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_8__["StyledLink"], { to: _urls__WEBPACK_IMPORTED_MODULE_5__["default"].FAQ + '#localization' }),
            sentenceCollectionGlossaryLink: (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_8__["StyledLink"], { to: _urls__WEBPACK_IMPORTED_MODULE_5__["default"].FAQ + '#sentence-collection' })),
            speakLink: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_8__["StyledLink"], { to: _urls__WEBPACK_IMPORTED_MODULE_5__["default"].SPEAK }),
            listenLink: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_8__["StyledLink"], { to: _urls__WEBPACK_IMPORTED_MODULE_5__["default"].LISTEN }),
        };
        const inProgressCountLabel = query ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "count" },
            "(",
            filteredInProgress.length,
            ")")) : ('');
        const launchedCountLabel = query ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "count" },
            "(",
            filteredLaunched.length,
            ")")) : ('');
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'selected-' + selectedSection },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "top" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "waves" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { src: __webpack_require__(/*! ./images/_1.svg */ "./src/components/pages/languages/images/_1.svg") }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { src: __webpack_require__(/*! ./images/_2.svg */ "./src/components/pages/languages/images/_2.svg") }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { src: __webpack_require__(/*! ./images/_3.svg */ "./src/components/pages/languages/images/_3.svg"), className: "red" }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { src: __webpack_require__(/*! ./images/fading.svg */ "./src/components/pages/languages/images/fading.svg"), style: { right: -5 } }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { src: __webpack_require__(/*! ./images/Eq.svg */ "./src/components/pages/languages/images/Eq.svg"), className: "eq" })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "text" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "inner" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "request-language-text" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null)),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "request-language-button" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_8__["Button"], { outline: true, rounded: true, onClick: () => {
                                    Object(_services_tracker__WEBPACK_IMPORTED_MODULE_4__["trackLanguages"])('open-request-language-modal', this.props.locale);
                                    this.setState({ showLanguageRequestModal: true });
                                } }))))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            showLanguageRequestModal && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_request_language_modal_request_language_modal__WEBPACK_IMPORTED_MODULE_6__["default"], { onRequestClose: () => this.setState({ showLanguageRequestModal: false }) })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "mobile-headings" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_8__["Hr"], null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "labels" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", { className: "launched", onClick: this.changeSection.bind(this, 'launched') },
                        getString('language-section-launched'),
                        launchedCountLabel),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", { className: "in-progress", onClick: this.changeSection.bind(this, 'in-progress') },
                        getString('language-section-in-progress'),
                        inProgressCountLabel)),
                this.renderSearch(this.smallSearchInputRef)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "language-sections" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("section", { className: "launched" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "title-and-search" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null,
                            getString('language-section-launched'),
                            launchedCountLabel),
                        this.renderSearch(this.largeSearchInputRef),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_8__["Hr"], null)),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], Object.assign({ id: "language-section-launched-description" }, descriptionProps),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null)),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", null, launched.length > 0
                        ? (query || showAllLaunched
                            ? filteredLaunched
                            : filteredLaunched.slice(0, 3)).map((localization, i) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_localization_box__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({ key: localization.locale, localeMessages: localeMessages, type: "launched" }, localization))))
                        : [1, 2, 3].map((n, i) => react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_localization_box__WEBPACK_IMPORTED_MODULE_9__["LoadingLocalizationBox"], { key: i }))),
                    !query && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: 'languages-show-' + (showAllLaunched ? 'less' : 'more') },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { disabled: launched.length === 0, className: "show-all-languages", onClick: this.toggleShowAllLaunched })))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("section", { className: "in-progress" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "md-block" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { display: 'flex', flexDirection: 'row' } },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", { style: { marginRight: '1.5rem' } },
                                getString('language-section-in-progress'),
                                inProgressCountLabel)),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_8__["Hr"], null)),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], Object.assign({ id: "language-section-in-progress-new-description" }, descriptionProps),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null)),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", null, inProgress.length > 0
                        ? (query || showAllInProgress
                            ? filteredInProgress
                            : filteredInProgress.slice(0, 3)).map((localization, i) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_localization_box__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({ key: localization.locale, localeMessages: localeMessages, type: "in-progress" }, localization))))
                        : [1, 2, 3].map(i => react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_localization_box__WEBPACK_IMPORTED_MODULE_9__["LoadingLocalizationBox"], { key: i }))),
                    !query && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: 'languages-show-' + (showAllInProgress ? 'less' : 'more') },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { disabled: inProgress.length === 0, className: "show-all-languages", onClick: this.toggleShowAllInProgress })))))));
    }
    renderSearch(inputRef) {
        const { query } = this.state;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "search" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["Localized"], { id: "language-search-input", attrs: { placeholder: true } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", value: query, onChange: this.handleQueryChange, onKeyDown: this.handleQueryKeyDown, ref: inputRef })),
            query ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_8__["TextButton"], { onClick: this.toggleSearch, style: { padding: 0 } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_7__["CloseIcon"], { black: true, style: {
                        marginTop: 2,
                        marginRight: 8,
                        padding: 4,
                        boxSizing: 'border-box',
                    } }))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_8__["TextButton"], { onClick: () => inputRef.current.focus() },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_7__["SearchIcon"], null)))));
    }
}
const mapStateToProps = ({ api, locale }) => ({
    api,
    locale,
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Object(fluent_react_compat__WEBPACK_IMPORTED_MODULE_0__["withLocalization"])(LanguagesPage)));


/***/ }),

/***/ "./src/components/pages/languages/localization-box.tsx":
/*!*************************************************************!*\
  !*** ./src/components/pages/languages/localization-box.tsx ***!
  \*************************************************************/
/*! exports provided: LoadingLocalizationBox, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingLocalizationBox", function() { return LoadingLocalizationBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "../node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-content-loader */ "../node_modules/react-content-loader/dist/react-content-loader.es.js");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../urls */ "./src/urls.ts");
/* harmony import */ var _services_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/localization */ "./src/services/localization.ts");
/* harmony import */ var _services_tracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/tracker */ "./src/services/tracker.ts");
/* harmony import */ var _locale_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../locale-helpers */ "./src/components/locale-helpers.tsx");
/* harmony import */ var _progress_bar_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../progress-bar/progress-bar */ "./src/components/progress-bar/progress-bar.tsx");
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/ui */ "./src/components/ui/ui.tsx");
/* harmony import */ var _get_involved_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./get-involved-modal */ "./src/components/pages/languages/get-involved-modal.tsx");
const { LocalizationProvider, Localized } = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");











const SENTENCE_COUNT_TARGET = 5000;
const HOURS_TARGET = 1200;
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
function Skeleton({ loading, title, metricLabel, metricValue, progressLabel, progress, progressTotal, progressSecondary, formatProgress = n => n.toString(), children, onClick, }) {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: 'language ' + (loading ? 'loading' : '') },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "info" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, loading ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_content_loader__WEBPACK_IMPORTED_MODULE_2__["default"], null) : title),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "numbers" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, loading ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_content_loader__WEBPACK_IMPORTED_MODULE_2__["default"], { height: 25 })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    metricLabel,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", { className: "value" }, metricValue.toLocaleString())))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_8__["Hr"], null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, loading ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_content_loader__WEBPACK_IMPORTED_MODULE_2__["default"], { height: 25 })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    progressLabel,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "value" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, formatProgress(progress)),
                        " /",
                        ' ',
                        formatProgress(progressTotal))))),
                loading ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_content_loader__WEBPACK_IMPORTED_MODULE_2__["default"], { height: 25 })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_progress_bar_progress_bar__WEBPACK_IMPORTED_MODULE_7__["default"], { progress: progress / progressTotal, secondary: progressSecondary })))),
        loading ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", null, "Loading...")) : (children && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { onClick: onClick }, children))));
}
function LoadingLocalizationBox() {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Skeleton, { loading: true });
}
const LocalizationBox = react__WEBPACK_IMPORTED_MODULE_0__["memo"]((props) => {
    const { history, locale, localeMessages } = props;
    const [globalLocale] = Object(_locale_helpers__WEBPACK_IMPORTED_MODULE_6__["useLocale"])();
    const [showModal, setShowModal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
    const buildBundleGenerator = () => localeMessages &&
        Object(_services_localization__WEBPACK_IMPORTED_MODULE_4__["createCrossLocaleBundleGenerator"])(localeMessages, [locale, globalLocale]);
    const title = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Localized, { id: locale },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null)));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        showModal && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LocalizationProvider, { bundles: buildBundleGenerator() },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_get_involved_modal__WEBPACK_IMPORTED_MODULE_9__["default"], { locale: locale, onRequestClose: () => setShowModal(false) }))),
        props.type === 'in-progress' ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Skeleton, { title: title, metricLabel: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Localized, { id: "localized" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null)), metricValue: props.localizedPercentage + '%', progressLabel: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Localized, { id: "sentences" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null)), progress: props.sentencesCount, progressTotal: SENTENCE_COUNT_TARGET, onClick: () => setShowModal(true) },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LocalizationProvider, { bundles: buildBundleGenerator() },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Localized, { id: "get-involved-button" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null))))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Skeleton, { title: title, metricLabel: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Localized, { id: "language-speakers" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null)), metricValue: props.speakers, progressLabel: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Localized, { id: "total-hours" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null)), progress: props.seconds, progressTotal: HOURS_TARGET * 3600, formatProgress: formatSeconds, progressSecondary: true, onClick: () => {
                Object(_services_tracker__WEBPACK_IMPORTED_MODULE_5__["trackLanguages"])('contribute', locale);
                history.push(Object(_locale_helpers__WEBPACK_IMPORTED_MODULE_6__["toLocaleRouteBuilder"])(locale)(_urls__WEBPACK_IMPORTED_MODULE_3__["default"].SPEAK));
            } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LocalizationProvider, { bundles: buildBundleGenerator() },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Localized, { id: "contribute" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null)))))));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(LocalizationBox));


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

/***/ "./src/components/progress-bar/progress-bar.tsx":
/*!******************************************************!*\
  !*** ./src/components/progress-bar/progress-bar.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (({ children, progress, secondary, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "progress-bar" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'progress ' + (secondary ? 'blue' : ''), style: progress > 0
            ? { width: 100 * progress + '%' }
            : { width: 0, padding: 0 } }, children))));


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
//# sourceMappingURL=13.bundle.js.map