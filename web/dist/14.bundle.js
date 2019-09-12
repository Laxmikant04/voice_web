(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./src/components/pages/faq/faq.css":
/*!******************************************!*\
  !*** ./src/components/pages/faq/faq.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pages/faq/faq.tsx":
/*!******************************************!*\
  !*** ./src/components/pages/faq/faq.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utility */ "./src/utility.ts");
/* harmony import */ var _locale_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../locale-helpers */ "./src/components/locale-helpers.tsx");
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/icons */ "./src/components/ui/icons.tsx");
/* harmony import */ var _hooks_use_active_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/use-active-section */ "./src/hooks/use-active-section.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selectors */ "./src/components/pages/faq/selectors.tsx");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! fluent-react/compat */ "../node_modules/fluent-react/compat.js");
/* harmony import */ var fluent_react_compat__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fluent_react_compat__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _faq_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./faq.css */ "./src/components/pages/faq/faq.css");
/* harmony import */ var _faq_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_faq_css__WEBPACK_IMPORTED_MODULE_8__);









const throttle = __webpack_require__(/*! lodash.throttle */ "../node_modules/lodash.throttle/index.js");

const Section = react__WEBPACK_IMPORTED_MODULE_0__["memo"](({ section, activeQuestions, setActiveQuestion }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { id: section.key, className: "faq-q-and-a" }, section.content.map(([question, answers, props]) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], { key: question },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { id: question, className: classnames__WEBPACK_IMPORTED_MODULE_1__('question-block', section.key, {
                active: activeQuestions.indexOf(question) !== -1,
            }) },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "faq-q", onClick: () => {
                    setActiveQuestion(question);
                } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "faq-icon" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_4__["ChevronDown"], null)),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_7__["Localized"], { id: question },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "faq-a" },
                answers.length > 1 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, answers.map((answer) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_7__["Localized"], { key: answer, id: answer },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null)))))),
                answers.length === 1 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_7__["Localized"], Object.assign({ id: answers[0] }, props),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "line" })))));
}))));
/* harmony default export */ __webpack_exports__["default"] = (Object(fluent_react_compat__WEBPACK_IMPORTED_MODULE_7__["withLocalization"])(({ getString }) => {
    const activeSection = Object(_hooks_use_active_section__WEBPACK_IMPORTED_MODULE_5__["default"])(Object.values(_selectors__WEBPACK_IMPORTED_MODULE_6__["SECTIONS"]));
    const [searchString, setSearchString] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
    const [activeQuestions, setActiveQuestions] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
    const [isMobile, setIsMobile] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Object(_utility__WEBPACK_IMPORTED_MODULE_2__["isMobileResolution"])());
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        if (activeQuestions.length !== 0) {
            setActiveQuestions([]);
        }
        const windowResized = throttle(() => {
            if (isMobile !== Object(_utility__WEBPACK_IMPORTED_MODULE_2__["isMobileResolution"])()) {
                setIsMobile(!isMobile);
            }
        }, 200);
        window.addEventListener('resize', windowResized);
        return () => {
            window.removeEventListener('resize', windowResized);
        };
    }, [isMobile]);
    const setActiveQuestion = (question) => {
        if (activeQuestions.indexOf(question) === -1) {
            return setActiveQuestions(isMobile ? [...activeQuestions, question] : [question]);
        }
        setActiveQuestions(activeQuestions.filter((e) => e !== question));
    };
    const sections = Object(_selectors__WEBPACK_IMPORTED_MODULE_6__["faqSearchSelector"])({ getString, searchString });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", { className: "faq-hero" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { className: "wave-top", src: __webpack_require__(/*! ./images/wave-top.png */ "./src/components/pages/faq/images/wave-top.png"), alt: "Wave" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "faq-header-container" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { className: "waves", src: __webpack_require__(/*! ./images/waves.png */ "./src/components/pages/faq/images/waves.png"), alt: "Waves" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "faq-header" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "text" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "header-line" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_7__["Localized"], { id: "faq-title" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null)),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_7__["Localized"], { id: "faq-description" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "intro-img" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { className: "robot", src: __webpack_require__(/*! ./images/robot.png */ "./src/components/pages/faq/images/robot.png"), alt: "Waves" })))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", { className: "faq-content" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "faq-container no-padding-xs" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { className: "faq-search", onSubmit: (e) => e.preventDefault() },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_locale_helpers__WEBPACK_IMPORTED_MODULE_3__["LocalizedGetAttribute"], { id: "faq-search-for-answers", attribute: "label" }, label => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "text", value: searchString, onChange: event => {
                            if (activeQuestions.length !== 0) {
                                setActiveQuestions([]);
                            }
                            setSearchString(event.target.value);
                        }, placeholder: label, required: true }))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "submit", className: "search-button" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ui_icons__WEBPACK_IMPORTED_MODULE_4__["SearchIconCode"], { className: "icon" }))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "faq-section-container" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("nav", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null, sections
                            .filter(section => section.content.length !== 0)
                            .map(section => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: section.key, className: classnames__WEBPACK_IMPORTED_MODULE_1__({ active: section.key == activeSection }) },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "line" }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](fluent_react_compat__WEBPACK_IMPORTED_MODULE_7__["Localized"], { id: section.label, key: section.label },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: '#' + section.key }))))))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", { className: "faq-section" },
                        sections.map(section => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Section, { section: section, key: `section-${section.key}`, activeQuestions: activeQuestions, setActiveQuestion: setActiveQuestion }))),
                        sections.length === 0 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "No results were found. Please try a different search."))))))));
}));


/***/ }),

/***/ "./src/components/pages/faq/images/robot.png":
/*!***************************************************!*\
  !*** ./src/components/pages/faq/images/robot.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "871870523847f9da7958e1b2e7e69831.png";

/***/ }),

/***/ "./src/components/pages/faq/images/wave-top.png":
/*!******************************************************!*\
  !*** ./src/components/pages/faq/images/wave-top.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bfe9a7b121d9bc9feb9f7b4648278ba5.png";

/***/ }),

/***/ "./src/components/pages/faq/images/waves.png":
/*!***************************************************!*\
  !*** ./src/components/pages/faq/images/waves.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c381e2acd2f2df69340c557ac29cc72c.png";

/***/ }),

/***/ "./src/components/pages/faq/selectors.tsx":
/*!************************************************!*\
  !*** ./src/components/pages/faq/selectors.tsx ***!
  \************************************************/
/*! exports provided: SECTIONS, faqSearchSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECTIONS", function() { return SECTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faqSearchSelector", function() { return faqSearchSelector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../urls */ "./src/urls.ts");
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/ui */ "./src/components/ui/ui.tsx");
/* harmony import */ var _locale_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../locale-helpers */ "./src/components/locale-helpers.tsx");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utility */ "./src/utility.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants */ "./src/constants.ts");






const memoize = __webpack_require__(/*! lodash.memoize */ "../node_modules/lodash.memoize/index.js");
const SECTIONS = {
    whatIsCV: 'what-is-common-voice',
    usingCV: 'using-common-voice',
    glossary: 'glossary',
};
const SECTION_NAMES = {
    [SECTIONS.whatIsCV]: 'faq-what-cv-q',
    [SECTIONS.usingCV]: 'faq-using-cv',
    [SECTIONS.glossary]: 'glossary',
};
const SECTION_CONTENTS = {
    [SECTIONS.whatIsCV]: [
        'faq-what-cv',
        'faq-why-important',
        'faq-why-mission',
        'faq-what-cv-and-deepspeech',
        'faq-is-goal-assistant',
    ],
    [SECTIONS.usingCV]: [
        [
            'faq-how-get-q',
            'faq-how-get-a',
            {
                licenseLink: (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_2__["StyledLink"], { href: "https://creativecommons.org/publicdomain/zero/1.0/", blank: true })),
                datasetLink: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_locale_helpers__WEBPACK_IMPORTED_MODULE_3__["LocaleLink"], { to: _urls__WEBPACK_IMPORTED_MODULE_1__["default"].DATASETS }),
            },
        ],
        [
            'faq-when-release2-q',
            'faq-when-release2-a',
            {
                sentenceCollectorLink: (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_2__["StyledLink"], { href: "https://common-voice.github.io/sentence-collector/", blank: true })),
                pontoonLink: (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_2__["StyledLink"], { href: "https://pontoon.mozilla.org/projects/common-voice/", blank: true }))
            },
        ],
        'faq-do-want-native',
        [
            'faq-why-different-speakers-q',
            'faq-why-different-speakers-a',
            {
                articleLink: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_2__["StyledLink"], { href: "https://econ.st/2AVxVG3", blank: true }),
            },
        ],
        [
            'faq-why-my-lang-q',
            'faq-why-my-lang-new-a',
            {
                multilangLink: (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_2__["StyledLink"], { href: "https://medium.com/mozilla-open-innovation/more-common-voices-24a80c879944", blank: true })),
                sentenceCollectorLink: (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_2__["StyledLink"], { href: "https://common-voice.github.io/sentence-collector/", blank: true })),
            },
        ],
        'faq-what-quality',
        'faq-why-10k-hours',
        'faq-why-not-ask-read',
        'faq-how-calc-hours',
        [
            'faq-where-src-from-2-q',
            'faq-where-src-from-2-a',
            {
                italic: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", null),
                githubLink: (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ui_ui__WEBPACK_IMPORTED_MODULE_2__["StyledLink"], { href: "https://github.com/mozilla/voice-web/tree/master/server/data", blank: true })),
            },
        ],
        ['faq-why-account-q', _constants__WEBPACK_IMPORTED_MODULE_5__["BENEFITS"]],
        ['faq-is-account-public-q', _constants__WEBPACK_IMPORTED_MODULE_5__["WHATS_PUBLIC"]],
        'faq-how-privacy',
        'faq-what-determine-identity',
    ],
    [SECTIONS.glossary]: [
        ['localization', 'localization-explanation'],
        ['sentence-collection', 'sentence-collection-explanation'],
        ['hours-recorded', 'hours-recorded-explanation'],
        ['hours-validated', 'hours-validated-explanation'],
        ['sst', 'sst-explanation'],
        ['de-identified', 'de-identified-explanation'],
    ],
};
const faqSearchSelector = memoize(({ getString, searchString, }) => {
    const search = searchString.trim().toUpperCase();
    return Object.values(SECTIONS)
        .map((section) => {
        const content = (SECTION_CONTENTS[section] || []);
        return {
            key: section,
            label: SECTION_NAMES[section] || SECTIONS[section],
            content: content
                .map(c => (Array.isArray(c) ? c : [c + '-q', c + '-a', {}]))
                .map(([question, answers, ...rest]) => {
                const params = rest.length === 0 ? [{}] : rest;
                return [
                    question,
                    Array.isArray(answers) ? answers : [answers],
                    ...params,
                ];
            })
                .filter(([question, answers, props]) => {
                if (!search) {
                    return true;
                }
                return (Object(_utility__WEBPACK_IMPORTED_MODULE_4__["stringContains"])(getString(question), search) ||
                    answers.some((answer) => Object(_utility__WEBPACK_IMPORTED_MODULE_4__["stringContains"])(getString(answer, props), search)));
            }),
        };
    })
        .filter((section) => section.content.length !== 0);
}, ({ searchString }) => searchString.toUpperCase());


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
//# sourceMappingURL=14.bundle.js.map