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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/navbar/navbar */ \"(app-pages-browser)/./app/components/navbar/navbar.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var _app_components_products_components_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/products/components/card */ \"(app-pages-browser)/./app/components/products/components/card.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_6__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Product = (param)=>{\n    let { params } = param;\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [lowestPriceDetails, setLowestPriceDetails] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [dataLoaded, setDataLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.usePathname)();\n    // const fetchNewProducts = () => {\n    //   const updatedProducts = [...products, ...newProducts].sort((a, b) => a.price - b.price);\n    //   setProducts(updatedProducts);\n    //   const lowestPriceProduct = updatedProducts[0]; // Assuming the lowest-priced product is at index 0\n    //   setLowestPriceDetails(lowestPriceProduct);\n    //   setDataLoaded(true);\n    // };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        async function click() {\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"http://localhost:8001/api/product\", {\n                    url: pathname\n                });\n            } catch (error) {\n                console.log(\"Error fetching data:\", error);\n            }\n        }\n        click();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const delay = setTimeout(()=>{\n            fetchNewProducts();\n        }, 0);\n        return ()=>clearTimeout(delay);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"h-screen w-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border-b-2 border-slate-200 h-[25px] w-full\"\n            }, void 0, false, {\n                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                lineNumber: 61,\n                columnNumber: 6\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"w-full h-full  flex flex-row gap-2 mt-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-green-200 w-10 h-52 \"\n                    }, void 0, false, {\n                        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                        lineNumber: 65,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-red-100 w-[40%] h-[60%] rounded-xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/test.jpg\",\n                            className: \"w-full h-full rounded-xl sha\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                            lineNumber: 67,\n                            columnNumber: 62\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                        lineNumber: 67,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"container\", {\n                        className: \"overflow-y-auto h-full w-[60%] px-3 pt-6 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Online Price Comparison\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                lineNumber: 70,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-3xl text-black font-bold  h-[20%] w-full\",\n                                children: \"MuscleBlaze MB-Vite Daily Multivitamin with 51 Ingredients and 6 Essential Blends, 100% RDA of Immunity Boosters, for Enhanced Energy, Strength & Recovery, 60 Multivitamin Tablets\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                lineNumber: 71,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full h-[10%] text-3xl font-extrabold mt-4\",\n                                children: dataLoaded && \"Rs \".concat(lowestPriceDetails.price)\n                            }, void 0, false, {\n                                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                lineNumber: 72,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"overflow-y-auto h-[90%]  w-full\",\n                                children: products.map((product, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_products_components_card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        productName: product.productName,\n                                        price: product.price,\n                                        marketplace: product.marketplace,\n                                        link: product.link,\n                                        image: product.image\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 42\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                                lineNumber: 73,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                        lineNumber: 69,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n                lineNumber: 63,\n                columnNumber: 6\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hritikgupta/Desktop/pricefetch/app/(routes)/api/[product]/page.js\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Product, \"49O1trstbwAMzOy8KdWY4led21U=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.usePathname\n    ];\n});\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm91dGVzKS9hcGkvW3Byb2R1Y3RdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUVJO0FBQ1I7QUFDcUI7QUFDekI7QUFDakI7QUFDb0I7QUFJOUMsTUFBTVEsVUFBVTtRQUFDLEVBQUNDLE1BQU0sRUFBQzs7SUFFdkIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDUSxvQkFBb0JDLHNCQUFzQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUM3RCxNQUFNLENBQUNVLFlBQVlDLGNBQWMsR0FBR1gsK0NBQVFBLENBQUM7SUFDN0MsTUFBTVksV0FBV1QsNERBQVdBO0lBSTVCLG1DQUFtQztJQUVuQyw2RkFBNkY7SUFFN0Ysa0NBQWtDO0lBQ2xDLHVHQUF1RztJQUN2RywrQ0FBK0M7SUFDL0MseUJBQXlCO0lBQ3pCLEtBQUs7SUFFSkYsZ0RBQVNBLENBQUM7UUFFVCxlQUFlWTtZQUNiLElBQUc7Z0JBQ0QsTUFBTUMsV0FBVyxNQUFNWiw2Q0FBS0EsQ0FBQ2EsR0FBRyxDQUFDLHFDQUFvQztvQkFBQ0MsS0FBSUo7Z0JBQVE7WUFFcEYsRUFDQSxPQUFNSyxPQUFNO2dCQUNWQyxRQUFRQyxHQUFHLENBQUMsd0JBQXdCRjtZQUN0QztRQUNGO1FBQ0FKO0lBRUYsR0FBRSxFQUFFO0lBRUpaLGdEQUFTQSxDQUFDO1FBRVIsTUFBTW1CLFFBQVFDLFdBQVc7WUFDdkJDO1FBQ0YsR0FBRztRQUVILE9BQU8sSUFBTUMsYUFBYUg7SUFDNUIsR0FBRyxFQUFFO0lBSUwscUJBQ0UsOERBQUNJO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDN0IscUVBQU1BOzs7OzswQkFDUiw4REFBQzhCO2dCQUFJRCxXQUFVOzs7Ozs7MEJBRWYsOERBQUNFO2dCQUFRRixXQUFVOztrQ0FFbEIsOERBQUNDO3dCQUFJRCxXQUFVOzs7Ozs7a0NBRWYsOERBQUNDO3dCQUFJRCxXQUFVO2tDQUF3Qyw0RUFBQ0c7NEJBQUlDLEtBQUk7NEJBQVlKLFdBQVU7Ozs7Ozs7Ozs7O2tDQUV0Riw4REFBQ0s7d0JBQVVMLFdBQVU7OzBDQUNuQiw4REFBQ0M7MENBQUk7Ozs7OzswQ0FDTCw4REFBQ0E7Z0NBQUlELFdBQVU7MENBQWdEOzs7Ozs7MENBQy9ELDhEQUFDQztnQ0FBSUQsV0FBVTswQ0FBK0NmLGNBQWMsTUFBK0IsT0FBekJGLG1CQUFtQnVCLEtBQUs7Ozs7OzswQ0FDMUcsOERBQUNMO2dDQUFJRCxXQUFVOzBDQUNmbkIsU0FBUzBCLEdBQUcsQ0FBQyxDQUFDQyxTQUFRQyxzQkFBVyw4REFBQ25DLGdGQUFXQTt3Q0FBRW9DLGFBQWFGLFFBQVFFLFdBQVc7d0NBQUVKLE9BQU9FLFFBQVFGLEtBQUs7d0NBQUVLLGFBQWFILFFBQVFHLFdBQVc7d0NBQUVDLE1BQU1KLFFBQVFJLElBQUk7d0NBQUVDLE9BQU9MLFFBQVFLLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXpMO0dBckVNbEM7O1FBS2FELHdEQUFXQTs7O0tBTHhCQztBQXVFTiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKHJvdXRlcykvYXBpL1twcm9kdWN0XS9wYWdlLmpzPzZkZDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhclwiXG5cbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvY29tcG9uZW50cy9jYXJkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSx1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuXG5cblxuY29uc3QgUHJvZHVjdCA9ICh7cGFyYW1zfSkgPT4ge1xuXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG93ZXN0UHJpY2VEZXRhaWxzLCBzZXRMb3dlc3RQcmljZURldGFpbHNdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZGF0YUxvYWRlZCwgc2V0RGF0YUxvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKVxuIFxuXG4gXG4gIC8vIGNvbnN0IGZldGNoTmV3UHJvZHVjdHMgPSAoKSA9PiB7XG4gICAgXG4gIC8vICAgY29uc3QgdXBkYXRlZFByb2R1Y3RzID0gWy4uLnByb2R1Y3RzLCAuLi5uZXdQcm9kdWN0c10uc29ydCgoYSwgYikgPT4gYS5wcmljZSAtIGIucHJpY2UpO1xuXG4gIC8vICAgc2V0UHJvZHVjdHModXBkYXRlZFByb2R1Y3RzKTtcbiAgLy8gICBjb25zdCBsb3dlc3RQcmljZVByb2R1Y3QgPSB1cGRhdGVkUHJvZHVjdHNbMF07IC8vIEFzc3VtaW5nIHRoZSBsb3dlc3QtcHJpY2VkIHByb2R1Y3QgaXMgYXQgaW5kZXggMFxuICAvLyAgIHNldExvd2VzdFByaWNlRGV0YWlscyhsb3dlc3RQcmljZVByb2R1Y3QpO1xuICAvLyAgIHNldERhdGFMb2FkZWQodHJ1ZSk7XG4gIC8vIH07XG5cbiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICBcbiAgICBhc3luYyBmdW5jdGlvbiBjbGljaygpe1xuICAgICAgdHJ5e1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAxL2FwaS9wcm9kdWN0Jyx7dXJsOnBhdGhuYW1lfSk7XG5cbiAgICAgIH1cbiAgICAgIGNhdGNoKGVycm9yKXtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgICBjbGljaygpXG4gICAgXG4gIH0sW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBcbiAgICBjb25zdCBkZWxheSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZmV0Y2hOZXdQcm9kdWN0cygpO1xuICAgIH0sIDApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dChkZWxheSk7IFxuICB9LCBbXSk7XG5cbiAgXG4gIFxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImgtc2NyZWVuIHctc2NyZWVuXCI+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWItMiBib3JkZXItc2xhdGUtMjAwIGgtWzI1cHhdIHctZnVsbFwiPjwvZGl2PlxuXG4gICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgIGZsZXggZmxleC1yb3cgZ2FwLTIgbXQtMlwiPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyZWVuLTIwMCB3LTEwIGgtNTIgXCI+PC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcmVkLTEwMCB3LVs0MCVdIGgtWzYwJV0gcm91bmRlZC14bFwiPjxpbWcgc3JjPScvdGVzdC5qcGcnIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgcm91bmRlZC14bCBzaGFcIiAvPjwvZGl2PiBcblxuICAgICAgPGNvbnRhaW5lciBjbGFzc05hbWU9XCJvdmVyZmxvdy15LWF1dG8gaC1mdWxsIHctWzYwJV0gcHgtMyBwdC02IFwiPlxuICAgICAgICA8ZGl2Pk9ubGluZSBQcmljZSBDb21wYXJpc29uPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC1ibGFjayBmb250LWJvbGQgIGgtWzIwJV0gdy1mdWxsXCI+TXVzY2xlQmxhemUgTUItVml0ZSBEYWlseSBNdWx0aXZpdGFtaW4gd2l0aCA1MSBJbmdyZWRpZW50cyBhbmQgNiBFc3NlbnRpYWwgQmxlbmRzLCAxMDAlIFJEQSBvZiBJbW11bml0eSBCb29zdGVycywgZm9yIEVuaGFuY2VkIEVuZXJneSwgU3RyZW5ndGggJiBSZWNvdmVyeSwgNjAgTXVsdGl2aXRhbWluIFRhYmxldHM8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1bMTAlXSB0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCBtdC00XCI+e2RhdGFMb2FkZWQgJiYgYFJzICR7bG93ZXN0UHJpY2VEZXRhaWxzLnByaWNlfWB9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3cteS1hdXRvIGgtWzkwJV0gIHctZnVsbFwiPlxuICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QsaW5kZXgpID0+ICg8UHJvZHVjdENhcmQgIHByb2R1Y3ROYW1lPXtwcm9kdWN0LnByb2R1Y3ROYW1lfSBwcmljZT17cHJvZHVjdC5wcmljZX0gbWFya2V0cGxhY2U9e3Byb2R1Y3QubWFya2V0cGxhY2V9IGxpbms9e3Byb2R1Y3QubGlua30gaW1hZ2U9e3Byb2R1Y3QuaW1hZ2V9Lz4pKX1cbiAgICAgICA8L2Rpdj5cbiAgICAgIDwvY29udGFpbmVyPlxuICAgIFxuICAgICA8L3NlY3Rpb24+XG4gICAgIFxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0XG4iXSwibmFtZXMiOlsiTmF2YmFyIiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdCIsIlByb2R1Y3RDYXJkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInVzZVBhdGhuYW1lIiwiUHJvZHVjdCIsInBhcmFtcyIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJsb3dlc3RQcmljZURldGFpbHMiLCJzZXRMb3dlc3RQcmljZURldGFpbHMiLCJkYXRhTG9hZGVkIiwic2V0RGF0YUxvYWRlZCIsInBhdGhuYW1lIiwiY2xpY2siLCJyZXNwb25zZSIsImdldCIsInVybCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRlbGF5Iiwic2V0VGltZW91dCIsImZldGNoTmV3UHJvZHVjdHMiLCJjbGVhclRpbWVvdXQiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2Iiwic2VjdGlvbiIsImltZyIsInNyYyIsImNvbnRhaW5lciIsInByaWNlIiwibWFwIiwicHJvZHVjdCIsImluZGV4IiwicHJvZHVjdE5hbWUiLCJtYXJrZXRwbGFjZSIsImxpbmsiLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(routes)/api/[product]/page.js\n"));

/***/ })

});