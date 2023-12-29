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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/navbar/navbar */ \"(app-pages-browser)/./app/components/navbar/navbar.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var _app_components_products_components_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/products/components/card */ \"(app-pages-browser)/./app/components/products/components/card.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _app_components_products_components_recentcard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/components/products/components/recentcard */ \"(app-pages-browser)/./app/components/products/components/recentcard.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Product = (param)=>{\n    let { params } = param;\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [displayData, setDisplayData] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({});\n    const [lowestPriceDetails, setLowestPriceDetails] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [dataLoaded, setDataLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const fetchNewProducts = ()=>{\n        const updatedProducts = [\n            ...products,\n            ...newProducts\n        ].sort((a, b)=>a.price - b.price);\n        setProducts(updatedProducts);\n        const lowestPriceProduct = updatedProducts[0];\n        setLowestPriceDetails(lowestPriceProduct);\n        setDataLoaded(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        async function click() {\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"http://localhost:8001/api/product\");\n                const { result, data } = response.data;\n                console.log(result);\n                setProducts(result.data);\n                setDisplayData(data);\n            } catch (error) {\n                console.log(\"Error fetching data:\", error);\n            }\n        }\n        click();\n    }, [\n        products\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"h-screen w-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border-b-2 border-slate-200 h-[25px] w-full\"\n            }, void 0, false, {\n                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                lineNumber: 61,\n                columnNumber: 6\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"w-full h-full  flex flex-row gap-2 mt-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" w-10 h-52 \"\n                    }, void 0, false, {\n                        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                        lineNumber: 65,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" w-[40%] h-[60%] shadow-xl rounded-xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: displayData.image_url,\n                            className: \"w-full h-full rounded-xl sha\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                            lineNumber: 67,\n                            columnNumber: 62\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                        lineNumber: 67,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"container\", {\n                        className: \"bg-green-200 overflow-y-auto h-full w-[60%] px-3 pt-6 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Online Price Comparison\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                lineNumber: 70,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-3xl text-black font-bold  h-[20%] w-full\",\n                                children: displayData.product_name\n                            }, void 0, false, {\n                                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                lineNumber: 71,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full h-[10%] text-3xl font-extrabold mt-4\",\n                                children: dataLoaded && \"Rs \".concat(lowestPriceDetails.price)\n                            }, void 0, false, {\n                                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                lineNumber: 72,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"overflow-y-auto h-[90%] bg-red-200 w-full\",\n                                children: products && products.map((product, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_products_components_card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        productName: product.product_title,\n                                        price: product.offer.price,\n                                        marketplace: product.offer.store_name,\n                                        link: product.offer.offer_page_url,\n                                        image: product.product_photos[0]\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 54\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                lineNumber: 73,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                        lineNumber: 69,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                lineNumber: 63,\n                columnNumber: 6\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"w-full border-t-2 h-[500px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-black text-3xl font-bold\",\n                        children: \"Results Based on Your Recent Search\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                        lineNumber: 81,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-red-900 flex w-full h-[80%] overflow-x-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_products_components_recentcard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                lineNumber: 83,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_products_components_recentcard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                lineNumber: 84,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_products_components_recentcard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                lineNumber: 84,\n                                columnNumber: 23\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_products_components_recentcard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                lineNumber: 85,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_products_components_recentcard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                lineNumber: 85,\n                                columnNumber: 23\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_products_components_recentcard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                lineNumber: 85,\n                                columnNumber: 37\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_products_components_recentcard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                lineNumber: 86,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_products_components_recentcard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                lineNumber: 87,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_products_components_recentcard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                lineNumber: 87,\n                                columnNumber: 23\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_products_components_recentcard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                lineNumber: 88,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_products_components_recentcard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                lineNumber: 88,\n                                columnNumber: 23\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_products_components_recentcard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                lineNumber: 88,\n                                columnNumber: 37\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                        lineNumber: 82,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                lineNumber: 80,\n                columnNumber: 6\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Product, \"oMWALrSvfHNQC7LihMglCHG9EZ4=\");\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm91dGVzKS9hcGkvW3Byb2R1Y3RdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ21EO0FBRUk7QUFDUjtBQUNxQjtBQUN6QjtBQUNqQjtBQUMrQztBQUt6RSxNQUFNUSxVQUFVO1FBQUMsRUFBQ0MsTUFBTSxFQUFDOztJQUV2QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFLLENBQUNRLGFBQVlDLGVBQWUsR0FBR1QsK0NBQVFBLENBQUMsQ0FBQztJQUM5QyxNQUFNLENBQUNVLG9CQUFvQkMsc0JBQXNCLEdBQUdYLCtDQUFRQSxDQUFDO0lBQzdELE1BQU0sQ0FBQ1ksWUFBWUMsY0FBYyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUs3QyxNQUFNYyxtQkFBbUI7UUFFdkIsTUFBTUMsa0JBQWtCO2VBQUlUO2VBQWFVO1NBQVksQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU1ELEVBQUVFLEtBQUssR0FBR0QsRUFBRUMsS0FBSztRQUV0RmIsWUFBWVE7UUFDWixNQUFNTSxxQkFBcUJOLGVBQWUsQ0FBQyxFQUFFO1FBQzdDSixzQkFBc0JVO1FBQ3RCUixjQUFjO0lBQ2hCO0lBRUNaLGdEQUFTQSxDQUFDO1FBRVQsZUFBZXFCO1lBQ2IsSUFBRztnQkFDRCxNQUFNQyxXQUFXLE1BQU1yQiw2Q0FBS0EsQ0FBQ3NCLEdBQUcsQ0FBQztnQkFDakMsTUFBTSxFQUFDQyxNQUFNLEVBQUNDLElBQUksRUFBQyxHQUFHSCxTQUFTRyxJQUFJO2dCQUNuQ0MsUUFBUUMsR0FBRyxDQUFDSDtnQkFDWmxCLFlBQVlrQixPQUFPQyxJQUFJO2dCQUN2QmpCLGVBQWVpQjtZQUdqQixFQUNBLE9BQU1HLE9BQU07Z0JBQ1ZGLFFBQVFDLEdBQUcsQ0FBQyx3QkFBd0JDO1lBQ3RDO1FBQ0Y7UUFDQVA7SUFFRixHQUFFO1FBQUNoQjtLQUFTO0lBTVoscUJBQ0UsOERBQUN3QjtRQUFLQyxXQUFVOzswQkFDZCw4REFBQ25DLHFFQUFNQTs7Ozs7MEJBQ1IsOERBQUNvQztnQkFBSUQsV0FBVTs7Ozs7OzBCQUVmLDhEQUFDRTtnQkFBUUYsV0FBVTs7a0NBRWxCLDhEQUFDQzt3QkFBSUQsV0FBVTs7Ozs7O2tDQUVmLDhEQUFDQzt3QkFBSUQsV0FBVTtrQ0FBd0MsNEVBQUNHOzRCQUFJQyxLQUFLM0IsWUFBWTRCLFNBQVM7NEJBQUVMLFdBQVU7Ozs7Ozs7Ozs7O2tDQUVsRyw4REFBQ007d0JBQVVOLFdBQVU7OzBDQUNuQiw4REFBQ0M7MENBQUk7Ozs7OzswQ0FDTCw4REFBQ0E7Z0NBQUlELFdBQVU7MENBQWlEdkIsWUFBWThCLFlBQVk7Ozs7OzswQ0FDeEYsOERBQUNOO2dDQUFJRCxXQUFVOzBDQUErQ25CLGNBQWMsTUFBK0IsT0FBekJGLG1CQUFtQlUsS0FBSzs7Ozs7OzBDQUMxRyw4REFBQ1k7Z0NBQUlELFdBQVU7MENBQ2Z6QixZQUFZQSxTQUFTaUMsR0FBRyxDQUFDLENBQUNDLFNBQVFDLHNCQUFXLDhEQUFDMUMsZ0ZBQVdBO3dDQUFFMkMsYUFBYUYsUUFBUUcsYUFBYTt3Q0FBRXZCLE9BQU9vQixRQUFRSSxLQUFLLENBQUN4QixLQUFLO3dDQUFFeUIsYUFBYUwsUUFBUUksS0FBSyxDQUFDRSxVQUFVO3dDQUFFQyxNQUFNUCxRQUFRSSxLQUFLLENBQUNJLGNBQWM7d0NBQUVDLE9BQU9ULFFBQVFVLGNBQWMsQ0FBQyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNek8sOERBQUNqQjtnQkFBUUYsV0FBVTs7a0NBQ2xCLDhEQUFDQzt3QkFBSUQsV0FBVTtrQ0FBZ0M7Ozs7OztrQ0FDL0MsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQzVCLHNGQUFVQTs7Ozs7MENBQ1gsOERBQUNBLHNGQUFVQTs7Ozs7MENBQUcsOERBQUNBLHNGQUFVQTs7Ozs7MENBQ3pCLDhEQUFDQSxzRkFBVUE7Ozs7OzBDQUFHLDhEQUFDQSxzRkFBVUE7Ozs7OzBDQUFHLDhEQUFDQSxzRkFBVUE7Ozs7OzBDQUN2Qyw4REFBQ0Esc0ZBQVVBOzs7OzswQ0FDWCw4REFBQ0Esc0ZBQVVBOzs7OzswQ0FBRyw4REFBQ0Esc0ZBQVVBOzs7OzswQ0FDekIsOERBQUNBLHNGQUFVQTs7Ozs7MENBQUcsOERBQUNBLHNGQUFVQTs7Ozs7MENBQUcsOERBQUNBLHNGQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNL0M7R0FoRk1DO0tBQUFBO0FBa0ZOLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8ocm91dGVzKS9hcGkvW3Byb2R1Y3RdL3BhZ2UuanM/NmRkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IE5hdmJhciBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyXCJcblxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcbmltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9jb21wb25lbnRzL2NhcmRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJlY2VudENhcmQgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvY29tcG9uZW50cy9yZWNlbnRjYXJkXCI7XG5cblxuXG5cbmNvbnN0IFByb2R1Y3QgPSAoe3BhcmFtc30pID0+IHtcblxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3RbZGlzcGxheURhdGEsc2V0RGlzcGxheURhdGFdID0gdXNlU3RhdGUoe30pXG4gIGNvbnN0IFtsb3dlc3RQcmljZURldGFpbHMsIHNldExvd2VzdFByaWNlRGV0YWlsc10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtkYXRhTG9hZGVkLCBzZXREYXRhTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiBcbiBcblxuIFxuICBjb25zdCBmZXRjaE5ld1Byb2R1Y3RzID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IHVwZGF0ZWRQcm9kdWN0cyA9IFsuLi5wcm9kdWN0cywgLi4ubmV3UHJvZHVjdHNdLnNvcnQoKGEsIGIpID0+IGEucHJpY2UgLSBiLnByaWNlKTtcblxuICAgIHNldFByb2R1Y3RzKHVwZGF0ZWRQcm9kdWN0cyk7XG4gICAgY29uc3QgbG93ZXN0UHJpY2VQcm9kdWN0ID0gdXBkYXRlZFByb2R1Y3RzWzBdO1xuICAgIHNldExvd2VzdFByaWNlRGV0YWlscyhsb3dlc3RQcmljZVByb2R1Y3QpO1xuICAgIHNldERhdGFMb2FkZWQodHJ1ZSk7XG4gIH07XG5cbiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICBcbiAgICBhc3luYyBmdW5jdGlvbiBjbGljaygpe1xuICAgICAgdHJ5e1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAxL2FwaS9wcm9kdWN0Jyk7XG4gICAgICAgIGNvbnN0IHtyZXN1bHQsZGF0YX0gPSByZXNwb25zZS5kYXRhO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICAgIHNldFByb2R1Y3RzKHJlc3VsdC5kYXRhKVxuICAgICAgICBzZXREaXNwbGF5RGF0YShkYXRhKVxuICAgICAgIFxuXG4gICAgICB9XG4gICAgICBjYXRjaChlcnJvcil7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY2xpY2soKVxuICAgIFxuICB9LFtwcm9kdWN0c10pXG5cbiAgXG5cbiAgXG4gIFxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImgtc2NyZWVuIHctc2NyZWVuXCI+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWItMiBib3JkZXItc2xhdGUtMjAwIGgtWzI1cHhdIHctZnVsbFwiPjwvZGl2PlxuXG4gICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgIGZsZXggZmxleC1yb3cgZ2FwLTIgbXQtMlwiPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LTEwIGgtNTIgXCI+PC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctWzQwJV0gaC1bNjAlXSBzaGFkb3cteGwgcm91bmRlZC14bFwiPjxpbWcgc3JjPXtkaXNwbGF5RGF0YS5pbWFnZV91cmx9IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgcm91bmRlZC14bCBzaGFcIiAvPjwvZGl2PiBcblxuICAgICAgPGNvbnRhaW5lciBjbGFzc05hbWU9XCJiZy1ncmVlbi0yMDAgb3ZlcmZsb3cteS1hdXRvIGgtZnVsbCB3LVs2MCVdIHB4LTMgcHQtNiBcIj5cbiAgICAgICAgPGRpdj5PbmxpbmUgUHJpY2UgQ29tcGFyaXNvbjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtM3hsIHRleHQtYmxhY2sgZm9udC1ib2xkICBoLVsyMCVdIHctZnVsbFwiPntkaXNwbGF5RGF0YS5wcm9kdWN0X25hbWV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtWzEwJV0gdGV4dC0zeGwgZm9udC1leHRyYWJvbGQgbXQtNFwiPntkYXRhTG9hZGVkICYmIGBScyAke2xvd2VzdFByaWNlRGV0YWlscy5wcmljZX1gfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXktYXV0byBoLVs5MCVdIGJnLXJlZC0yMDAgdy1mdWxsXCI+XG4gICAgICAge3Byb2R1Y3RzICYmIHByb2R1Y3RzLm1hcCgocHJvZHVjdCxpbmRleCkgPT4gKDxQcm9kdWN0Q2FyZCAgcHJvZHVjdE5hbWU9e3Byb2R1Y3QucHJvZHVjdF90aXRsZX0gcHJpY2U9e3Byb2R1Y3Qub2ZmZXIucHJpY2V9IG1hcmtldHBsYWNlPXtwcm9kdWN0Lm9mZmVyLnN0b3JlX25hbWV9IGxpbms9e3Byb2R1Y3Qub2ZmZXIub2ZmZXJfcGFnZV91cmx9IGltYWdlPXtwcm9kdWN0LnByb2R1Y3RfcGhvdG9zWzBdfS8+KSl9XG4gICAgICAgPC9kaXY+XG4gICAgICA8L2NvbnRhaW5lcj5cbiAgICAgIFxuICAgIFxuICAgICA8L3NlY3Rpb24+XG4gICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItdC0yIGgtWzUwMHB4XVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIHRleHQtM3hsIGZvbnQtYm9sZFwiPlJlc3VsdHMgQmFzZWQgb24gWW91ciBSZWNlbnQgU2VhcmNoPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXJlZC05MDAgZmxleCB3LWZ1bGwgaC1bODAlXSBvdmVyZmxvdy14LWF1dG9cIj5cbiAgICAgICAgPFJlY2VudENhcmQgLz5cbiAgICAgICAgPFJlY2VudENhcmQgLz48UmVjZW50Q2FyZCAvPlxuICAgICAgICA8UmVjZW50Q2FyZCAvPjxSZWNlbnRDYXJkIC8+PFJlY2VudENhcmQgLz5cbiAgICAgICAgPFJlY2VudENhcmQgLz5cbiAgICAgICAgPFJlY2VudENhcmQgLz48UmVjZW50Q2FyZCAvPlxuICAgICAgICA8UmVjZW50Q2FyZCAvPjxSZWNlbnRDYXJkIC8+PFJlY2VudENhcmQgLz5cbiAgICAgIDwvZGl2PlxuICAgICA8L3NlY3Rpb24+XG4gICAgIFxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0XG4iXSwibmFtZXMiOlsiTmF2YmFyIiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdCIsIlByb2R1Y3RDYXJkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIlJlY2VudENhcmQiLCJQcm9kdWN0IiwicGFyYW1zIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImRpc3BsYXlEYXRhIiwic2V0RGlzcGxheURhdGEiLCJsb3dlc3RQcmljZURldGFpbHMiLCJzZXRMb3dlc3RQcmljZURldGFpbHMiLCJkYXRhTG9hZGVkIiwic2V0RGF0YUxvYWRlZCIsImZldGNoTmV3UHJvZHVjdHMiLCJ1cGRhdGVkUHJvZHVjdHMiLCJuZXdQcm9kdWN0cyIsInNvcnQiLCJhIiwiYiIsInByaWNlIiwibG93ZXN0UHJpY2VQcm9kdWN0IiwiY2xpY2siLCJyZXNwb25zZSIsImdldCIsInJlc3VsdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2Iiwic2VjdGlvbiIsImltZyIsInNyYyIsImltYWdlX3VybCIsImNvbnRhaW5lciIsInByb2R1Y3RfbmFtZSIsIm1hcCIsInByb2R1Y3QiLCJpbmRleCIsInByb2R1Y3ROYW1lIiwicHJvZHVjdF90aXRsZSIsIm9mZmVyIiwibWFya2V0cGxhY2UiLCJzdG9yZV9uYW1lIiwibGluayIsIm9mZmVyX3BhZ2VfdXJsIiwiaW1hZ2UiLCJwcm9kdWN0X3Bob3RvcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(routes)/api/[product]/page.js\n"));

/***/ })

});