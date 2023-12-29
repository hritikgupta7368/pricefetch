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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/navbar/navbar */ \"(app-pages-browser)/./app/components/navbar/navbar.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var _app_components_products_components_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/products/components/card */ \"(app-pages-browser)/./app/components/products/components/card.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Product = (param)=>{\n    let { params } = param;\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [displayData, setDisplayData] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({});\n    const [lowestPriceDetails, setLowestPriceDetails] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [dataLoaded, setDataLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const fetchNewProducts = ()=>{\n        const updatedProducts = [\n            ...products,\n            ...newProducts\n        ].sort((a, b)=>a.price - b.price);\n        setProducts(updatedProducts);\n        const lowestPriceProduct = updatedProducts[0];\n        setLowestPriceDetails(lowestPriceProduct);\n        setDataLoaded(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        async function click() {\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:8001/api/product\");\n                const { result, data } = response.data;\n                console.log(result);\n                setProducts(result.data);\n                setDisplayData(data);\n            } catch (error) {\n                console.log(\"Error fetching data:\", error);\n            }\n        }\n        click();\n    }, [\n        products\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"h-screen w-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border-b-2 border-slate-200 h-[25px] w-full\"\n            }, void 0, false, {\n                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                lineNumber: 60,\n                columnNumber: 6\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"w-full h-full  flex flex-row gap-2 mt-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" w-10 h-52 \"\n                    }, void 0, false, {\n                        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                        lineNumber: 64,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" w-[40%] h-[60%] shadow-xl rounded-xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: displayData.image_url,\n                            className: \"w-full h-full rounded-xl sha\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                            lineNumber: 66,\n                            columnNumber: 62\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                        lineNumber: 66,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"container\", {\n                        className: \"bg-green-200 overflow-y-auto h-full w-[60%] px-3 pt-6 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Online Price Comparison\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                lineNumber: 69,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-3xl text-black font-bold  h-[20%] w-full\",\n                                children: displayData.product_name\n                            }, void 0, false, {\n                                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                lineNumber: 70,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full h-[10%] text-3xl font-extrabold mt-4\",\n                                children: dataLoaded && \"Rs \".concat(lowestPriceDetails.price)\n                            }, void 0, false, {\n                                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                lineNumber: 71,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"overflow-y-auto h-[90%] bg-red-200 w-full\",\n                                children: products && products.map((product, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_products_components_card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        productName: product.product_title,\n                                        price: product.offer.price,\n                                        marketplace: product.offer.store_name,\n                                        link: product.offer.offer_page_url,\n                                        image: product.product_photos[0]\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 54\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                lineNumber: 72,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                        lineNumber: 68,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                lineNumber: 62,\n                columnNumber: 6\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full bg-white h-[100\"\n            }, void 0, false, {\n                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                lineNumber: 79,\n                columnNumber: 6\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Product, \"oMWALrSvfHNQC7LihMglCHG9EZ4=\");\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm91dGVzKS9hcGkvW3Byb2R1Y3RdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDbUQ7QUFFSTtBQUNSO0FBQ3FCO0FBQ3pCO0FBQ2pCO0FBSzFCLE1BQU1PLFVBQVU7UUFBQyxFQUFDQyxNQUFNLEVBQUM7O0lBRXZCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQUssQ0FBQ08sYUFBWUMsZUFBZSxHQUFHUiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQzlDLE1BQU0sQ0FBQ1Msb0JBQW9CQyxzQkFBc0IsR0FBR1YsK0NBQVFBLENBQUM7SUFDN0QsTUFBTSxDQUFDVyxZQUFZQyxjQUFjLEdBQUdaLCtDQUFRQSxDQUFDO0lBSzdDLE1BQU1hLG1CQUFtQjtRQUV2QixNQUFNQyxrQkFBa0I7ZUFBSVQ7ZUFBYVU7U0FBWSxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUQsRUFBRUUsS0FBSyxHQUFHRCxFQUFFQyxLQUFLO1FBRXRGYixZQUFZUTtRQUNaLE1BQU1NLHFCQUFxQk4sZUFBZSxDQUFDLEVBQUU7UUFDN0NKLHNCQUFzQlU7UUFDdEJSLGNBQWM7SUFDaEI7SUFFQ1gsZ0RBQVNBLENBQUM7UUFFVCxlQUFlb0I7WUFDYixJQUFHO2dCQUNELE1BQU1DLFdBQVcsTUFBTXBCLDZDQUFLQSxDQUFDcUIsR0FBRyxDQUFDO2dCQUNqQyxNQUFNLEVBQUNDLE1BQU0sRUFBQ0MsSUFBSSxFQUFDLEdBQUdILFNBQVNHLElBQUk7Z0JBQ25DQyxRQUFRQyxHQUFHLENBQUNIO2dCQUNabEIsWUFBWWtCLE9BQU9DLElBQUk7Z0JBQ3ZCakIsZUFBZWlCO1lBR2pCLEVBQ0EsT0FBTUcsT0FBTTtnQkFDVkYsUUFBUUMsR0FBRyxDQUFDLHdCQUF3QkM7WUFDdEM7UUFDRjtRQUNBUDtJQUVGLEdBQUU7UUFBQ2hCO0tBQVM7SUFNWixxQkFDRSw4REFBQ3dCO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDbEMscUVBQU1BOzs7OzswQkFDUiw4REFBQ21DO2dCQUFJRCxXQUFVOzs7Ozs7MEJBRWYsOERBQUNFO2dCQUFRRixXQUFVOztrQ0FFbEIsOERBQUNDO3dCQUFJRCxXQUFVOzs7Ozs7a0NBRWYsOERBQUNDO3dCQUFJRCxXQUFVO2tDQUF3Qyw0RUFBQ0c7NEJBQUlDLEtBQUszQixZQUFZNEIsU0FBUzs0QkFBRUwsV0FBVTs7Ozs7Ozs7Ozs7a0NBRWxHLDhEQUFDTTt3QkFBVU4sV0FBVTs7MENBQ25CLDhEQUFDQzswQ0FBSTs7Ozs7OzBDQUNMLDhEQUFDQTtnQ0FBSUQsV0FBVTswQ0FBaUR2QixZQUFZOEIsWUFBWTs7Ozs7OzBDQUN4Riw4REFBQ047Z0NBQUlELFdBQVU7MENBQStDbkIsY0FBYyxNQUErQixPQUF6QkYsbUJBQW1CVSxLQUFLOzs7Ozs7MENBQzFHLDhEQUFDWTtnQ0FBSUQsV0FBVTswQ0FDZnpCLFlBQVlBLFNBQVNpQyxHQUFHLENBQUMsQ0FBQ0MsU0FBUUMsc0JBQVcsOERBQUN6QyxnRkFBV0E7d0NBQUUwQyxhQUFhRixRQUFRRyxhQUFhO3dDQUFFdkIsT0FBT29CLFFBQVFJLEtBQUssQ0FBQ3hCLEtBQUs7d0NBQUV5QixhQUFhTCxRQUFRSSxLQUFLLENBQUNFLFVBQVU7d0NBQUVDLE1BQU1QLFFBQVFJLEtBQUssQ0FBQ0ksY0FBYzt3Q0FBRUMsT0FBT1QsUUFBUVUsY0FBYyxDQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU16Tyw4REFBQ2xCO2dCQUFJRCxXQUFVOzs7Ozs7Ozs7Ozs7QUFJcEI7R0F0RU0zQjtLQUFBQTtBQXdFTiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKHJvdXRlcykvYXBpL1twcm9kdWN0XS9wYWdlLmpzPzZkZDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhclwiXG5cbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvY29tcG9uZW50cy9jYXJkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSx1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuXG5cblxuY29uc3QgUHJvZHVjdCA9ICh7cGFyYW1zfSkgPT4ge1xuXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdFtkaXNwbGF5RGF0YSxzZXREaXNwbGF5RGF0YV0gPSB1c2VTdGF0ZSh7fSlcbiAgY29uc3QgW2xvd2VzdFByaWNlRGV0YWlscywgc2V0TG93ZXN0UHJpY2VEZXRhaWxzXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2RhdGFMb2FkZWQsIHNldERhdGFMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuIFxuIFxuXG4gXG4gIGNvbnN0IGZldGNoTmV3UHJvZHVjdHMgPSAoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgdXBkYXRlZFByb2R1Y3RzID0gWy4uLnByb2R1Y3RzLCAuLi5uZXdQcm9kdWN0c10uc29ydCgoYSwgYikgPT4gYS5wcmljZSAtIGIucHJpY2UpO1xuXG4gICAgc2V0UHJvZHVjdHModXBkYXRlZFByb2R1Y3RzKTtcbiAgICBjb25zdCBsb3dlc3RQcmljZVByb2R1Y3QgPSB1cGRhdGVkUHJvZHVjdHNbMF07XG4gICAgc2V0TG93ZXN0UHJpY2VEZXRhaWxzKGxvd2VzdFByaWNlUHJvZHVjdCk7XG4gICAgc2V0RGF0YUxvYWRlZCh0cnVlKTtcbiAgfTtcblxuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgIFxuICAgIGFzeW5jIGZ1bmN0aW9uIGNsaWNrKCl7XG4gICAgICB0cnl7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDEvYXBpL3Byb2R1Y3QnKTtcbiAgICAgICAgY29uc3Qge3Jlc3VsdCxkYXRhfSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICAgICAgc2V0UHJvZHVjdHMocmVzdWx0LmRhdGEpXG4gICAgICAgIHNldERpc3BsYXlEYXRhKGRhdGEpXG4gICAgICAgXG5cbiAgICAgIH1cbiAgICAgIGNhdGNoKGVycm9yKXtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgICBjbGljaygpXG4gICAgXG4gIH0sW3Byb2R1Y3RzXSlcblxuICBcblxuICBcbiAgXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1zY3JlZW5cIj5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItYi0yIGJvcmRlci1zbGF0ZS0yMDAgaC1bMjVweF0gdy1mdWxsXCI+PC9kaXY+XG5cbiAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCAgZmxleCBmbGV4LXJvdyBnYXAtMiBtdC0yXCI+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctMTAgaC01MiBcIj48L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdy1bNDAlXSBoLVs2MCVdIHNoYWRvdy14bCByb3VuZGVkLXhsXCI+PGltZyBzcmM9e2Rpc3BsYXlEYXRhLmltYWdlX3VybH0gY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCByb3VuZGVkLXhsIHNoYVwiIC8+PC9kaXY+IFxuXG4gICAgICA8Y29udGFpbmVyIGNsYXNzTmFtZT1cImJnLWdyZWVuLTIwMCBvdmVyZmxvdy15LWF1dG8gaC1mdWxsIHctWzYwJV0gcHgtMyBwdC02IFwiPlxuICAgICAgICA8ZGl2Pk9ubGluZSBQcmljZSBDb21wYXJpc29uPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC1ibGFjayBmb250LWJvbGQgIGgtWzIwJV0gdy1mdWxsXCI+e2Rpc3BsYXlEYXRhLnByb2R1Y3RfbmFtZX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1bMTAlXSB0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCBtdC00XCI+e2RhdGFMb2FkZWQgJiYgYFJzICR7bG93ZXN0UHJpY2VEZXRhaWxzLnByaWNlfWB9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3cteS1hdXRvIGgtWzkwJV0gYmctcmVkLTIwMCB3LWZ1bGxcIj5cbiAgICAgICB7cHJvZHVjdHMgJiYgcHJvZHVjdHMubWFwKChwcm9kdWN0LGluZGV4KSA9PiAoPFByb2R1Y3RDYXJkICBwcm9kdWN0TmFtZT17cHJvZHVjdC5wcm9kdWN0X3RpdGxlfSBwcmljZT17cHJvZHVjdC5vZmZlci5wcmljZX0gbWFya2V0cGxhY2U9e3Byb2R1Y3Qub2ZmZXIuc3RvcmVfbmFtZX0gbGluaz17cHJvZHVjdC5vZmZlci5vZmZlcl9wYWdlX3VybH0gaW1hZ2U9e3Byb2R1Y3QucHJvZHVjdF9waG90b3NbMF19Lz4pKX1cbiAgICAgICA8L2Rpdj5cbiAgICAgIDwvY29udGFpbmVyPlxuICAgICAgXG4gICAgXG4gICAgIDwvc2VjdGlvbj5cbiAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgaC1bMTAwXCI+PC9kaXY+XG4gICAgIFxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0XG4iXSwibmFtZXMiOlsiTmF2YmFyIiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdCIsIlByb2R1Y3RDYXJkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIlByb2R1Y3QiLCJwYXJhbXMiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiZGlzcGxheURhdGEiLCJzZXREaXNwbGF5RGF0YSIsImxvd2VzdFByaWNlRGV0YWlscyIsInNldExvd2VzdFByaWNlRGV0YWlscyIsImRhdGFMb2FkZWQiLCJzZXREYXRhTG9hZGVkIiwiZmV0Y2hOZXdQcm9kdWN0cyIsInVwZGF0ZWRQcm9kdWN0cyIsIm5ld1Byb2R1Y3RzIiwic29ydCIsImEiLCJiIiwicHJpY2UiLCJsb3dlc3RQcmljZVByb2R1Y3QiLCJjbGljayIsInJlc3BvbnNlIiwiZ2V0IiwicmVzdWx0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJzZWN0aW9uIiwiaW1nIiwic3JjIiwiaW1hZ2VfdXJsIiwiY29udGFpbmVyIiwicHJvZHVjdF9uYW1lIiwibWFwIiwicHJvZHVjdCIsImluZGV4IiwicHJvZHVjdE5hbWUiLCJwcm9kdWN0X3RpdGxlIiwib2ZmZXIiLCJtYXJrZXRwbGFjZSIsInN0b3JlX25hbWUiLCJsaW5rIiwib2ZmZXJfcGFnZV91cmwiLCJpbWFnZSIsInByb2R1Y3RfcGhvdG9zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(routes)/api/[product]/page.js\n"));

/***/ })

});