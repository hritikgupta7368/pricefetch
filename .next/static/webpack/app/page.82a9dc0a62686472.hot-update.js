"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/navbar/card.js":
/*!***************************************!*\
  !*** ./app/components/navbar/card.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Account */ \"(app-pages-browser)/./app/components/navbar/Account.js\");\n/* harmony import */ var _app_providers_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/providers/form */ \"(app-pages-browser)/./app/providers/form.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Signin = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"signin\"\n    }, void 0, false, {\n        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/components/navbar/card.js\",\n        lineNumber: 10,\n        columnNumber: 2\n    }, undefined);\n};\n_c = Signin;\nconst Login = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"login\"\n    }, void 0, false, {\n        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/components/navbar/card.js\",\n        lineNumber: 18,\n        columnNumber: 4\n    }, undefined);\n};\n_c1 = Login;\nconst Card = (param)=>{\n    let { settoggleForm } = param;\n    _s();\n    const { formState, handleFormChange } = (0,_app_providers_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();\n    // useEffect(() => {\n    //   if (showForm) {\n    //     handleFormChange(formState === 'login' ? 'signin' : 'login'); \n    //   }\n    // }, [showForm, formState, handleFormChange]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"w-full h-full bg-white rounded-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-center pt-5 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Account__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        changeState: \"login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/components/navbar/card.js\",\n                        lineNumber: 39,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"text-black  hover:bg-slate-200 duration-150 rounded-full h-10 w-10 left-10\",\n                        onClick: ()=>{\n                            settoggleForm(false);\n                        },\n                        children: \"←\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/components/navbar/card.js\",\n                        lineNumber: 40,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/components/navbar/card.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    formState === \"login\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Login, {}, void 0, false, {\n                        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/components/navbar/card.js\",\n                        lineNumber: 44,\n                        columnNumber: 33\n                    }, undefined),\n                    formState === \"signin\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Signin, {}, void 0, false, {\n                        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/components/navbar/card.js\",\n                        lineNumber: 45,\n                        columnNumber: 34\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/components/navbar/card.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/components/navbar/card.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Card, \"bTl6FN5TcSPJCNsxy2hCHWYQOTs=\", false, function() {\n    return [\n        _app_providers_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext\n    ];\n});\n_c2 = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Signin\");\n$RefreshReg$(_c1, \"Login\");\n$RefreshReg$(_c2, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL25hdmJhci9jYXJkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQytCO0FBQ3NCO0FBQ1g7QUFDSztBQUcvQyxNQUFNTSxTQUFTO0lBQ2IscUJBQ0QsOERBQUNDO2tCQUFJOzs7Ozs7QUFLTjtLQVBNRDtBQVFOLE1BQU1FLFFBQVE7SUFDWixxQkFDQyw4REFBQ0Q7a0JBQUk7Ozs7OztBQUlSO01BTk1DO0FBUU4sTUFBTUMsT0FBTztRQUFDLEVBQUNDLGFBQWEsRUFBQzs7SUFDM0IsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLGdCQUFnQixFQUFFLEdBQUdYLG1FQUFjQTtJQUd0RCxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLHFFQUFxRTtJQUNyRSxNQUFNO0lBQ04sK0NBQStDO0lBRy9DLHFCQUNFLDhEQUFDWTtRQUFLQyxXQUFVOzswQkFFZCw4REFBQ1A7Z0JBQUlPLFdBQVU7O2tDQUNmLDhEQUFDZCxnREFBT0E7d0JBQUNlLGFBQWU7Ozs7OztrQ0FDeEIsOERBQUNDO3dCQUFPRixXQUFVO3dCQUE2RUcsU0FBUzs0QkFBTVAsY0FBYzt3QkFBTTtrQ0FBSTs7Ozs7Ozs7Ozs7OzBCQUd0SSw4REFBQ0g7O29CQUNBSSxjQUFjLHlCQUFXLDhEQUFDSDs7Ozs7b0JBQzFCRyxjQUFjLDBCQUFZLDhEQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbEM7R0E1Qk1HOztRQUNvQ1IsK0RBQWNBOzs7TUFEbERRO0FBOEJOLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL25hdmJhci9jYXJkLmpzP2U5MzIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBBY2NvdW50IGZyb20gXCIuL0FjY291bnRcIlxuaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQgfSBmcm9tIFwiQC9hcHAvcHJvdmlkZXJzL2Zvcm1cIlxuaW1wb3J0IHsgdXNlRWZmZWN0ICx1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7SW5wdXQsQXZhdGFyfSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIjtcblxuXG5jb25zdCBTaWduaW4gPSAoKSA9PiB7XG4gIHJldHVybihcbiA8ZGl2PlxuIHNpZ25pblxuIDwvZGl2PlxuICAgIFxuICApXG59XG5jb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgcmV0dXJuKFxuICAgPGRpdj5cbiAgICBsb2dpblxuICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgQ2FyZCA9ICh7c2V0dG9nZ2xlRm9ybX0pID0+IHtcbiAgY29uc3QgeyBmb3JtU3RhdGUsIGhhbmRsZUZvcm1DaGFuZ2UgfSA9IHVzZUZvcm1Db250ZXh0KCk7XG4gIFxuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgaWYgKHNob3dGb3JtKSB7XG4gIC8vICAgICBoYW5kbGVGb3JtQ2hhbmdlKGZvcm1TdGF0ZSA9PT0gJ2xvZ2luJyA/ICdzaWduaW4nIDogJ2xvZ2luJyk7IFxuICAvLyAgIH1cbiAgLy8gfSwgW3Nob3dGb3JtLCBmb3JtU3RhdGUsIGhhbmRsZUZvcm1DaGFuZ2VdKTtcblxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBiZy13aGl0ZSByb3VuZGVkLXhsXCI+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBwdC01IFwiPlxuICAgICAgPEFjY291bnQgY2hhbmdlU3RhdGUgPSB7J2xvZ2luJ30vPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrICBob3ZlcjpiZy1zbGF0ZS0yMDAgZHVyYXRpb24tMTUwIHJvdW5kZWQtZnVsbCBoLTEwIHctMTAgbGVmdC0xMFwiIG9uQ2xpY2s9eygpID0+e3NldHRvZ2dsZUZvcm0oZmFsc2UpfX0gPiZsYXJyOzwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICB7Zm9ybVN0YXRlID09PSAnbG9naW4nICYmIDxMb2dpbiAvPn1cbiAgICAgIHtmb3JtU3RhdGUgPT09ICdzaWduaW4nICYmIDxTaWduaW4gLz59XG4gICAgICA8L2Rpdj5cbiAgICAgICBcbiAgICA8L21haW4+XG4gICAgXG4gICAgXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFxuIl0sIm5hbWVzIjpbIkFjY291bnQiLCJ1c2VGb3JtQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW5wdXQiLCJBdmF0YXIiLCJTaWduaW4iLCJkaXYiLCJMb2dpbiIsIkNhcmQiLCJzZXR0b2dnbGVGb3JtIiwiZm9ybVN0YXRlIiwiaGFuZGxlRm9ybUNoYW5nZSIsIm1haW4iLCJjbGFzc05hbWUiLCJjaGFuZ2VTdGF0ZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/navbar/card.js\n"));

/***/ })

});