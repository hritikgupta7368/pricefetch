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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/navbar/navbar */ \"(app-pages-browser)/./app/components/navbar/navbar.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var _app_components_products_components_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/products/components/card */ \"(app-pages-browser)/./app/components/products/components/card.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_6__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Product = (param)=>{\n    let { params } = param;\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [lowestPriceDetails, setLowestPriceDetails] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [dataLoaded, setDataLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.usePathname)();\n    // const fetchNewProducts = () => {\n    //   const updatedProducts = [...products, ...newProducts].sort((a, b) => a.price - b.price);\n    //   setProducts(updatedProducts);\n    //   const lowestPriceProduct = updatedProducts[0]; // Assuming the lowest-priced product is at index 0\n    //   setLowestPriceDetails(lowestPriceProduct);\n    //   setDataLoaded(true);\n    // };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        async function click() {\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"http://localhost:8001/api/product\", {\n                    url: pathname\n                });\n            } catch (error) {\n                console.log(\"Error fetching data:\", error);\n            }\n        }\n        click();\n    }, []);\n    // useEffect(() => {\n    //   const delay = setTimeout(() => {\n    //     fetchNewProducts();\n    //   }, 0);\n    //   return () => clearTimeout(delay); \n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"h-screen w-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border-b-2 border-slate-200 h-[25px] w-full\"\n            }, void 0, false, {\n                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                lineNumber: 61,\n                columnNumber: 6\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"w-full h-full  flex flex-row gap-2 mt-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-green-200 w-10 h-52 \"\n                    }, void 0, false, {\n                        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                        lineNumber: 65,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-red-100 w-[40%] h-[60%] rounded-xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/test.jpg\",\n                            className: \"w-full h-full rounded-xl sha\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                            lineNumber: 67,\n                            columnNumber: 62\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                        lineNumber: 67,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"container\", {\n                        className: \"overflow-y-auto h-full w-[60%] px-3 pt-6 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Online Price Comparison\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                lineNumber: 70,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-3xl text-black font-bold  h-[20%] w-full\",\n                                children: \"MuscleBlaze MB-Vite Daily Multivitamin with 51 Ingredients and 6 Essential Blends, 100% RDA of Immunity Boosters, for Enhanced Energy, Strength & Recovery, 60 Multivitamin Tablets\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                lineNumber: 71,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full h-[10%] text-3xl font-extrabold mt-4\",\n                                children: dataLoaded && \"Rs \".concat(lowestPriceDetails.price)\n                            }, void 0, false, {\n                                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                lineNumber: 72,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"overflow-y-auto h-[90%]  w-full\",\n                                children: products.map((product, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_products_components_card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        productName: product.productName,\n                                        price: product.price,\n                                        marketplace: product.marketplace,\n                                        link: product.link,\n                                        image: product.image\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 42\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                lineNumber: 73,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                        lineNumber: 69,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: pathname\n                    }, void 0, false, {\n                        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                        lineNumber: 77,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                lineNumber: 63,\n                columnNumber: 6\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Product, \"EQIK7VMP2Z+QUPu6gzBJCkfO3SI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.usePathname\n    ];\n});\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm91dGVzKS9hcGkvW3Byb2R1Y3RdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUVJO0FBQ1I7QUFDcUI7QUFDekI7QUFDakI7QUFDb0I7QUFJOUMsTUFBTVEsVUFBVTtRQUFDLEVBQUNDLE1BQU0sRUFBQzs7SUFFdkIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDUSxvQkFBb0JDLHNCQUFzQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUM3RCxNQUFNLENBQUNVLFlBQVlDLGNBQWMsR0FBR1gsK0NBQVFBLENBQUM7SUFDN0MsTUFBTVksV0FBV1QsNERBQVdBO0lBSTVCLG1DQUFtQztJQUVuQyw2RkFBNkY7SUFFN0Ysa0NBQWtDO0lBQ2xDLHVHQUF1RztJQUN2RywrQ0FBK0M7SUFDL0MseUJBQXlCO0lBQ3pCLEtBQUs7SUFFSkYsZ0RBQVNBLENBQUM7UUFFVCxlQUFlWTtZQUNiLElBQUc7Z0JBQ0QsTUFBTUMsV0FBVyxNQUFNWiw2Q0FBS0EsQ0FBQ2EsR0FBRyxDQUFDLHFDQUFvQztvQkFBQ0MsS0FBSUo7Z0JBQVE7WUFFcEYsRUFDQSxPQUFNSyxPQUFNO2dCQUNWQyxRQUFRQyxHQUFHLENBQUMsd0JBQXdCRjtZQUN0QztRQUNGO1FBQ0FKO0lBRUYsR0FBRSxFQUFFO0lBRUosb0JBQW9CO0lBRXBCLHFDQUFxQztJQUNyQywwQkFBMEI7SUFDMUIsV0FBVztJQUVYLHVDQUF1QztJQUN2QyxVQUFVO0lBSVYscUJBQ0UsOERBQUNPO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDekIscUVBQU1BOzs7OzswQkFDUiw4REFBQzBCO2dCQUFJRCxXQUFVOzs7Ozs7MEJBRWYsOERBQUNFO2dCQUFRRixXQUFVOztrQ0FFbEIsOERBQUNDO3dCQUFJRCxXQUFVOzs7Ozs7a0NBRWYsOERBQUNDO3dCQUFJRCxXQUFVO2tDQUF3Qyw0RUFBQ0c7NEJBQUlDLEtBQUk7NEJBQVlKLFdBQVU7Ozs7Ozs7Ozs7O2tDQUV0Riw4REFBQ0s7d0JBQVVMLFdBQVU7OzBDQUNuQiw4REFBQ0M7MENBQUk7Ozs7OzswQ0FDTCw4REFBQ0E7Z0NBQUlELFdBQVU7MENBQWdEOzs7Ozs7MENBQy9ELDhEQUFDQztnQ0FBSUQsV0FBVTswQ0FBK0NYLGNBQWMsTUFBK0IsT0FBekJGLG1CQUFtQm1CLEtBQUs7Ozs7OzswQ0FDMUcsOERBQUNMO2dDQUFJRCxXQUFVOzBDQUNmZixTQUFTc0IsR0FBRyxDQUFDLENBQUNDLFNBQVFDLHNCQUFXLDhEQUFDL0IsZ0ZBQVdBO3dDQUFFZ0MsYUFBYUYsUUFBUUUsV0FBVzt3Q0FBRUosT0FBT0UsUUFBUUYsS0FBSzt3Q0FBRUssYUFBYUgsUUFBUUcsV0FBVzt3Q0FBRUMsTUFBTUosUUFBUUksSUFBSTt3Q0FBRUMsT0FBT0wsUUFBUUssS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR3JMLDhEQUFDWjtrQ0FBS1Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtWO0dBckVNUjs7UUFLYUQsd0RBQVdBOzs7S0FMeEJDO0FBdUVOLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8ocm91dGVzKS9hcGkvW3Byb2R1Y3RdL3BhZ2UuanM/NmRkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IE5hdmJhciBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyXCJcblxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcbmltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9jb21wb25lbnRzL2NhcmRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cblxuXG5jb25zdCBQcm9kdWN0ID0gKHtwYXJhbXN9KSA9PiB7XG5cbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb3dlc3RQcmljZURldGFpbHMsIHNldExvd2VzdFByaWNlRGV0YWlsc10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtkYXRhTG9hZGVkLCBzZXREYXRhTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpXG4gXG5cbiBcbiAgLy8gY29uc3QgZmV0Y2hOZXdQcm9kdWN0cyA9ICgpID0+IHtcbiAgICBcbiAgLy8gICBjb25zdCB1cGRhdGVkUHJvZHVjdHMgPSBbLi4ucHJvZHVjdHMsIC4uLm5ld1Byb2R1Y3RzXS5zb3J0KChhLCBiKSA9PiBhLnByaWNlIC0gYi5wcmljZSk7XG5cbiAgLy8gICBzZXRQcm9kdWN0cyh1cGRhdGVkUHJvZHVjdHMpO1xuICAvLyAgIGNvbnN0IGxvd2VzdFByaWNlUHJvZHVjdCA9IHVwZGF0ZWRQcm9kdWN0c1swXTsgLy8gQXNzdW1pbmcgdGhlIGxvd2VzdC1wcmljZWQgcHJvZHVjdCBpcyBhdCBpbmRleCAwXG4gIC8vICAgc2V0TG93ZXN0UHJpY2VEZXRhaWxzKGxvd2VzdFByaWNlUHJvZHVjdCk7XG4gIC8vICAgc2V0RGF0YUxvYWRlZCh0cnVlKTtcbiAgLy8gfTtcblxuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgIFxuICAgIGFzeW5jIGZ1bmN0aW9uIGNsaWNrKCl7XG4gICAgICB0cnl7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDEvYXBpL3Byb2R1Y3QnLHt1cmw6cGF0aG5hbWV9KTtcblxuICAgICAgfVxuICAgICAgY2F0Y2goZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICAgIGNsaWNrKClcbiAgICBcbiAgfSxbXSlcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIFxuICAvLyAgIGNvbnN0IGRlbGF5ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gIC8vICAgICBmZXRjaE5ld1Byb2R1Y3RzKCk7XG4gIC8vICAgfSwgMCk7XG5cbiAgLy8gICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGRlbGF5KTsgXG4gIC8vIH0sIFtdKTtcblxuICBcbiAgXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1zY3JlZW5cIj5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItYi0yIGJvcmRlci1zbGF0ZS0yMDAgaC1bMjVweF0gdy1mdWxsXCI+PC9kaXY+XG5cbiAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCAgZmxleCBmbGV4LXJvdyBnYXAtMiBtdC0yXCI+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JlZW4tMjAwIHctMTAgaC01MiBcIj48L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtMTAwIHctWzQwJV0gaC1bNjAlXSByb3VuZGVkLXhsXCI+PGltZyBzcmM9Jy90ZXN0LmpwZycgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCByb3VuZGVkLXhsIHNoYVwiIC8+PC9kaXY+IFxuXG4gICAgICA8Y29udGFpbmVyIGNsYXNzTmFtZT1cIm92ZXJmbG93LXktYXV0byBoLWZ1bGwgdy1bNjAlXSBweC0zIHB0LTYgXCI+XG4gICAgICAgIDxkaXY+T25saW5lIFByaWNlIENvbXBhcmlzb248L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0ZXh0LWJsYWNrIGZvbnQtYm9sZCAgaC1bMjAlXSB3LWZ1bGxcIj5NdXNjbGVCbGF6ZSBNQi1WaXRlIERhaWx5IE11bHRpdml0YW1pbiB3aXRoIDUxIEluZ3JlZGllbnRzIGFuZCA2IEVzc2VudGlhbCBCbGVuZHMsIDEwMCUgUkRBIG9mIEltbXVuaXR5IEJvb3N0ZXJzLCBmb3IgRW5oYW5jZWQgRW5lcmd5LCBTdHJlbmd0aCAmIFJlY292ZXJ5LCA2MCBNdWx0aXZpdGFtaW4gVGFibGV0czwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLVsxMCVdIHRleHQtM3hsIGZvbnQtZXh0cmFib2xkIG10LTRcIj57ZGF0YUxvYWRlZCAmJiBgUnMgJHtsb3dlc3RQcmljZURldGFpbHMucHJpY2V9YH08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy15LWF1dG8gaC1bOTAlXSAgdy1mdWxsXCI+XG4gICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCxpbmRleCkgPT4gKDxQcm9kdWN0Q2FyZCAgcHJvZHVjdE5hbWU9e3Byb2R1Y3QucHJvZHVjdE5hbWV9IHByaWNlPXtwcm9kdWN0LnByaWNlfSBtYXJrZXRwbGFjZT17cHJvZHVjdC5tYXJrZXRwbGFjZX0gbGluaz17cHJvZHVjdC5saW5rfSBpbWFnZT17cHJvZHVjdC5pbWFnZX0vPikpfVxuICAgICAgIDwvZGl2PlxuICAgICAgPC9jb250YWluZXI+XG4gICAgPGRpdj57cGF0aG5hbWV9PC9kaXY+XG4gICAgIDwvc2VjdGlvbj5cbiAgICAgXG4gICAgPC9tYWluPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RcbiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0IiwiUHJvZHVjdENhcmQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwidXNlUGF0aG5hbWUiLCJQcm9kdWN0IiwicGFyYW1zIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImxvd2VzdFByaWNlRGV0YWlscyIsInNldExvd2VzdFByaWNlRGV0YWlscyIsImRhdGFMb2FkZWQiLCJzZXREYXRhTG9hZGVkIiwicGF0aG5hbWUiLCJjbGljayIsInJlc3BvbnNlIiwiZ2V0IiwidXJsIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsInNlY3Rpb24iLCJpbWciLCJzcmMiLCJjb250YWluZXIiLCJwcmljZSIsIm1hcCIsInByb2R1Y3QiLCJpbmRleCIsInByb2R1Y3ROYW1lIiwibWFya2V0cGxhY2UiLCJsaW5rIiwiaW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(routes)/api/[product]/page.js\n"));

/***/ })

});