"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"4fb8f7819352\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2Y5NmMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI0ZmI4Zjc4MTkzNTJcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/providers/form.js":
/*!*******************************!*\
  !*** ./app/providers/form.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FormProvider: function() { return /* binding */ FormProvider; },\n/* harmony export */   useFormContext: function() { return /* binding */ useFormContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ useFormContext,FormProvider auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nconst FormContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst useFormContext = ()=>{\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(FormContext);\n};\n_s(useFormContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nconst FormProvider = (param)=>{\n    let { children } = param;\n    _s1();\n    const [toggleForm, settoggleForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [formState, setFormState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"login\");\n    const handleFormChange = (formName)=>{\n        setFormState(formName);\n    };\n    const contextValue = {\n        toggleForm,\n        settoggleForm,\n        formState,\n        handleFormChange,\n        setFormState\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FormContext.Provider, {\n        value: contextValue,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/providers/form.js\",\n        lineNumber: 31,\n        columnNumber: 12\n    }, undefined);\n};\n_s1(FormProvider, \"T08BY9CrVicRTDc7R4A4eYqL/jY=\");\n_c = FormProvider;\nvar _c;\n$RefreshReg$(_c, \"FormProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wcm92aWRlcnMvZm9ybS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzBEO0FBRTFELE1BQU1HLDRCQUFjSCxvREFBYUE7QUFFMUIsTUFBTUksaUJBQWlCOztJQUMxQixPQUFPSCxpREFBVUEsQ0FBQ0U7QUFDcEIsRUFBRTtHQUZTQztBQUtOLE1BQU1DLGVBQWU7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBRXJDLE1BQU0sQ0FBQ0MsWUFBV0MsY0FBYyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUM1QyxNQUFNLENBQUNPLFdBQVdDLGFBQWEsR0FBR1IsK0NBQVFBLENBQUM7SUFFM0MsTUFBTVMsbUJBQW1CLENBQUNDO1FBQ3hCRixhQUFhRTtJQUNmO0lBRUEsTUFBTUMsZUFBZTtRQUNuQk47UUFDQUM7UUFFQUM7UUFDQUU7UUFDQUQ7SUFHRjtJQUVBLHFCQUFPLDhEQUFDUCxZQUFZVyxRQUFRO1FBQUNDLE9BQU9GO2tCQUFlUDs7Ozs7O0FBQ3JELEVBQUU7SUFyQlNEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wcm92aWRlcnMvZm9ybS5qcz85ZWQxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LHVzZUNvbnRleHQsdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRm9ybUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCB1c2VGb3JtQ29udGV4dCA9ICgpID0+IHtcbiAgICByZXR1cm4gdXNlQ29udGV4dChGb3JtQ29udGV4dCk7XG4gIH07XG5cblxuZXhwb3J0IGNvbnN0IEZvcm1Qcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblxuICAgIGNvbnN0IFt0b2dnbGVGb3JtLHNldHRvZ2dsZUZvcm1dID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2Zvcm1TdGF0ZSwgc2V0Rm9ybVN0YXRlXSA9IHVzZVN0YXRlKCdsb2dpbicpOyBcbiAgXG4gICAgY29uc3QgaGFuZGxlRm9ybUNoYW5nZSA9IChmb3JtTmFtZSkgPT4ge1xuICAgICAgc2V0Rm9ybVN0YXRlKGZvcm1OYW1lKTsgXG4gICAgfTtcbiAgXG4gICAgY29uc3QgY29udGV4dFZhbHVlID0ge1xuICAgICAgdG9nZ2xlRm9ybSxcbiAgICAgIHNldHRvZ2dsZUZvcm0sXG5cbiAgICAgIGZvcm1TdGF0ZSxcbiAgICAgIGhhbmRsZUZvcm1DaGFuZ2UsXG4gICAgICBzZXRGb3JtU3RhdGVcblxuXG4gICAgfTtcbiAgXG4gICAgcmV0dXJuIDxGb3JtQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dFZhbHVlfT57Y2hpbGRyZW59PC9Gb3JtQ29udGV4dC5Qcm92aWRlcj47XG4gIH07Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJGb3JtQ29udGV4dCIsInVzZUZvcm1Db250ZXh0IiwiRm9ybVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ0b2dnbGVGb3JtIiwic2V0dG9nZ2xlRm9ybSIsImZvcm1TdGF0ZSIsInNldEZvcm1TdGF0ZSIsImhhbmRsZUZvcm1DaGFuZ2UiLCJmb3JtTmFtZSIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/providers/form.js\n"));

/***/ })

});