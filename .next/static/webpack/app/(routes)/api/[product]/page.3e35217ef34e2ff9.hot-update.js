"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(routes)/api/[product]/page",{

/***/ "(app-pages-browser)/./app/(routes)/api/[product]/page.js":
/*!********************************************!*\
  !*** ./app/(routes)/api/[product]/page.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/navbar/navbar */ \"(app-pages-browser)/./app/components/navbar/navbar.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var _app_components_products_components_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/products/components/card */ \"(app-pages-browser)/./app/components/products/components/card.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Product = (param)=>{\n    let { params } = param;\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [displayData, setDisplayData] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({});\n    const [lowestPriceDetails, setLowestPriceDetails] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [dataLoaded, setDataLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const fetchNewProducts = ()=>{\n        const updatedProducts = [\n            ...products,\n            ...newProducts\n        ].sort((a, b)=>a.price - b.price);\n        setProducts(updatedProducts);\n        const lowestPriceProduct = updatedProducts[0];\n        setLowestPriceDetails(lowestPriceProduct);\n        setDataLoaded(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        async function click() {\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:8001/api/product\");\n                const { result, data } = response.data;\n                console.log(result);\n                setProducts(result.data);\n                setDisplayData(data);\n            } catch (error) {\n                console.log(\"Error fetching data:\", error);\n            }\n        }\n        click();\n    }, [\n        products\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"h-screen w-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border-b-2 border-slate-200 h-[25px] w-full\"\n            }, void 0, false, {\n                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                lineNumber: 60,\n                columnNumber: 6\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"w-full h-full  flex flex-row gap-2 mt-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" w-10 h-52 \"\n                    }, void 0, false, {\n                        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                        lineNumber: 64,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" w-[40%] h-[60%] shadow-xl rounded-xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: displayData.image_url,\n                            className: \"w-full h-full rounded-xl sha\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                            lineNumber: 66,\n                            columnNumber: 62\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                        lineNumber: 66,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"container\", {\n                        className: \"overflow-y-auto h-[700px] w-[60%] px-3 pt-6 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Online Price Comparison\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                lineNumber: 69,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-3xl text-black font-bold  h-[20%] w-full\",\n                                children: displayData.product_name\n                            }, void 0, false, {\n                                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                lineNumber: 70,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full h-[10%] text-3xl font-extrabold mt-4\",\n                                children: dataLoaded && \"Rs \".concat(lowestPriceDetails.price)\n                            }, void 0, false, {\n                                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                lineNumber: 71,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"overflow-y-auto h-[90%]  w-full\",\n                                children: products && products.map((product, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_products_components_card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        productName: product.product_title,\n                                        price: product.offer.price,\n                                        marketplace: product.offer.store_name,\n                                        link: product.offer.offer_page_url,\n                                        image: product.product_photos[0]\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 54\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                lineNumber: 72,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                        lineNumber: 68,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                lineNumber: 62,\n                columnNumber: 6\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Product, \"oMWALrSvfHNQC7LihMglCHG9EZ4=\");\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm91dGVzKS9hcGkvW3Byb2R1Y3RdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDbUQ7QUFFSTtBQUNSO0FBQ3FCO0FBQ3pCO0FBQ2pCO0FBSzFCLE1BQU1PLFVBQVU7UUFBQyxFQUFDQyxNQUFNLEVBQUM7O0lBRXZCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQUssQ0FBQ08sYUFBWUMsZUFBZSxHQUFHUiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQzlDLE1BQU0sQ0FBQ1Msb0JBQW9CQyxzQkFBc0IsR0FBR1YsK0NBQVFBLENBQUM7SUFDN0QsTUFBTSxDQUFDVyxZQUFZQyxjQUFjLEdBQUdaLCtDQUFRQSxDQUFDO0lBSzdDLE1BQU1hLG1CQUFtQjtRQUV2QixNQUFNQyxrQkFBa0I7ZUFBSVQ7ZUFBYVU7U0FBWSxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUQsRUFBRUUsS0FBSyxHQUFHRCxFQUFFQyxLQUFLO1FBRXRGYixZQUFZUTtRQUNaLE1BQU1NLHFCQUFxQk4sZUFBZSxDQUFDLEVBQUU7UUFDN0NKLHNCQUFzQlU7UUFDdEJSLGNBQWM7SUFDaEI7SUFFQ1gsZ0RBQVNBLENBQUM7UUFFVCxlQUFlb0I7WUFDYixJQUFHO2dCQUNELE1BQU1DLFdBQVcsTUFBTXBCLDZDQUFLQSxDQUFDcUIsR0FBRyxDQUFDO2dCQUNqQyxNQUFNLEVBQUNDLE1BQU0sRUFBQ0MsSUFBSSxFQUFDLEdBQUdILFNBQVNHLElBQUk7Z0JBQ25DQyxRQUFRQyxHQUFHLENBQUNIO2dCQUNabEIsWUFBWWtCLE9BQU9DLElBQUk7Z0JBQ3ZCakIsZUFBZWlCO1lBR2pCLEVBQ0EsT0FBTUcsT0FBTTtnQkFDVkYsUUFBUUMsR0FBRyxDQUFDLHdCQUF3QkM7WUFDdEM7UUFDRjtRQUNBUDtJQUVGLEdBQUU7UUFBQ2hCO0tBQVM7SUFNWixxQkFDRSw4REFBQ3dCO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDbEMscUVBQU1BOzs7OzswQkFDUiw4REFBQ21DO2dCQUFJRCxXQUFVOzs7Ozs7MEJBRWYsOERBQUNFO2dCQUFRRixXQUFVOztrQ0FFbEIsOERBQUNDO3dCQUFJRCxXQUFVOzs7Ozs7a0NBRWYsOERBQUNDO3dCQUFJRCxXQUFVO2tDQUF3Qyw0RUFBQ0c7NEJBQUlDLEtBQUszQixZQUFZNEIsU0FBUzs0QkFBRUwsV0FBVTs7Ozs7Ozs7Ozs7a0NBRWxHLDhEQUFDTTt3QkFBVU4sV0FBVTs7MENBQ25CLDhEQUFDQzswQ0FBSTs7Ozs7OzBDQUNMLDhEQUFDQTtnQ0FBSUQsV0FBVTswQ0FBaUR2QixZQUFZOEIsWUFBWTs7Ozs7OzBDQUN4Riw4REFBQ047Z0NBQUlELFdBQVU7MENBQStDbkIsY0FBYyxNQUErQixPQUF6QkYsbUJBQW1CVSxLQUFLOzs7Ozs7MENBQzFHLDhEQUFDWTtnQ0FBSUQsV0FBVTswQ0FDZnpCLFlBQVlBLFNBQVNpQyxHQUFHLENBQUMsQ0FBQ0MsU0FBUUMsc0JBQVcsOERBQUN6QyxnRkFBV0E7d0NBQUUwQyxhQUFhRixRQUFRRyxhQUFhO3dDQUFFdkIsT0FBT29CLFFBQVFJLEtBQUssQ0FBQ3hCLEtBQUs7d0NBQUV5QixhQUFhTCxRQUFRSSxLQUFLLENBQUNFLFVBQVU7d0NBQUVDLE1BQU1QLFFBQVFJLEtBQUssQ0FBQ0ksY0FBYzt3Q0FBRUMsT0FBT1QsUUFBUVUsY0FBYyxDQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUzlPO0dBckVNOUM7S0FBQUE7QUF1RU4sK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhyb3V0ZXMpL2FwaS9bcHJvZHVjdF0vcGFnZS5qcz82ZGQzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgTmF2YmFyIGZyb20gXCJAL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXJcIlxuXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gXCJAL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2NvbXBvbmVudHMvY2FyZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cblxuXG5cbmNvbnN0IFByb2R1Y3QgPSAoe3BhcmFtc30pID0+IHtcblxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3RbZGlzcGxheURhdGEsc2V0RGlzcGxheURhdGFdID0gdXNlU3RhdGUoe30pXG4gIGNvbnN0IFtsb3dlc3RQcmljZURldGFpbHMsIHNldExvd2VzdFByaWNlRGV0YWlsc10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtkYXRhTG9hZGVkLCBzZXREYXRhTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiBcbiBcblxuIFxuICBjb25zdCBmZXRjaE5ld1Byb2R1Y3RzID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IHVwZGF0ZWRQcm9kdWN0cyA9IFsuLi5wcm9kdWN0cywgLi4ubmV3UHJvZHVjdHNdLnNvcnQoKGEsIGIpID0+IGEucHJpY2UgLSBiLnByaWNlKTtcblxuICAgIHNldFByb2R1Y3RzKHVwZGF0ZWRQcm9kdWN0cyk7XG4gICAgY29uc3QgbG93ZXN0UHJpY2VQcm9kdWN0ID0gdXBkYXRlZFByb2R1Y3RzWzBdO1xuICAgIHNldExvd2VzdFByaWNlRGV0YWlscyhsb3dlc3RQcmljZVByb2R1Y3QpO1xuICAgIHNldERhdGFMb2FkZWQodHJ1ZSk7XG4gIH07XG5cbiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICBcbiAgICBhc3luYyBmdW5jdGlvbiBjbGljaygpe1xuICAgICAgdHJ5e1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAxL2FwaS9wcm9kdWN0Jyk7XG4gICAgICAgIGNvbnN0IHtyZXN1bHQsZGF0YX0gPSByZXNwb25zZS5kYXRhO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICAgIHNldFByb2R1Y3RzKHJlc3VsdC5kYXRhKVxuICAgICAgICBzZXREaXNwbGF5RGF0YShkYXRhKVxuICAgICAgIFxuXG4gICAgICB9XG4gICAgICBjYXRjaChlcnJvcil7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY2xpY2soKVxuICAgIFxuICB9LFtwcm9kdWN0c10pXG5cbiAgXG5cbiAgXG4gIFxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImgtc2NyZWVuIHctc2NyZWVuXCI+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWItMiBib3JkZXItc2xhdGUtMjAwIGgtWzI1cHhdIHctZnVsbFwiPjwvZGl2PlxuXG4gICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgIGZsZXggZmxleC1yb3cgZ2FwLTIgbXQtMlwiPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LTEwIGgtNTIgXCI+PC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctWzQwJV0gaC1bNjAlXSBzaGFkb3cteGwgcm91bmRlZC14bFwiPjxpbWcgc3JjPXtkaXNwbGF5RGF0YS5pbWFnZV91cmx9IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgcm91bmRlZC14bCBzaGFcIiAvPjwvZGl2PiBcblxuICAgICAgPGNvbnRhaW5lciBjbGFzc05hbWU9XCJvdmVyZmxvdy15LWF1dG8gaC1bNzAwcHhdIHctWzYwJV0gcHgtMyBwdC02IFwiPlxuICAgICAgICA8ZGl2Pk9ubGluZSBQcmljZSBDb21wYXJpc29uPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC1ibGFjayBmb250LWJvbGQgIGgtWzIwJV0gdy1mdWxsXCI+e2Rpc3BsYXlEYXRhLnByb2R1Y3RfbmFtZX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1bMTAlXSB0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCBtdC00XCI+e2RhdGFMb2FkZWQgJiYgYFJzICR7bG93ZXN0UHJpY2VEZXRhaWxzLnByaWNlfWB9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3cteS1hdXRvIGgtWzkwJV0gIHctZnVsbFwiPlxuICAgICAgIHtwcm9kdWN0cyAmJiBwcm9kdWN0cy5tYXAoKHByb2R1Y3QsaW5kZXgpID0+ICg8UHJvZHVjdENhcmQgIHByb2R1Y3ROYW1lPXtwcm9kdWN0LnByb2R1Y3RfdGl0bGV9IHByaWNlPXtwcm9kdWN0Lm9mZmVyLnByaWNlfSBtYXJrZXRwbGFjZT17cHJvZHVjdC5vZmZlci5zdG9yZV9uYW1lfSBsaW5rPXtwcm9kdWN0Lm9mZmVyLm9mZmVyX3BhZ2VfdXJsfSBpbWFnZT17cHJvZHVjdC5wcm9kdWN0X3Bob3Rvc1swXX0vPikpfVxuICAgICAgIFxuICAgICAgIDwvZGl2PlxuICAgICAgPC9jb250YWluZXI+XG4gICAgXG4gICAgIDwvc2VjdGlvbj5cbiAgICAgXG4gICAgPC9tYWluPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RcbiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0IiwiUHJvZHVjdENhcmQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiUHJvZHVjdCIsInBhcmFtcyIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJkaXNwbGF5RGF0YSIsInNldERpc3BsYXlEYXRhIiwibG93ZXN0UHJpY2VEZXRhaWxzIiwic2V0TG93ZXN0UHJpY2VEZXRhaWxzIiwiZGF0YUxvYWRlZCIsInNldERhdGFMb2FkZWQiLCJmZXRjaE5ld1Byb2R1Y3RzIiwidXBkYXRlZFByb2R1Y3RzIiwibmV3UHJvZHVjdHMiLCJzb3J0IiwiYSIsImIiLCJwcmljZSIsImxvd2VzdFByaWNlUHJvZHVjdCIsImNsaWNrIiwicmVzcG9uc2UiLCJnZXQiLCJyZXN1bHQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsInNlY3Rpb24iLCJpbWciLCJzcmMiLCJpbWFnZV91cmwiLCJjb250YWluZXIiLCJwcm9kdWN0X25hbWUiLCJtYXAiLCJwcm9kdWN0IiwiaW5kZXgiLCJwcm9kdWN0TmFtZSIsInByb2R1Y3RfdGl0bGUiLCJvZmZlciIsIm1hcmtldHBsYWNlIiwic3RvcmVfbmFtZSIsImxpbmsiLCJvZmZlcl9wYWdlX3VybCIsImltYWdlIiwicHJvZHVjdF9waG90b3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(routes)/api/[product]/page.js\n"));

/***/ })

});