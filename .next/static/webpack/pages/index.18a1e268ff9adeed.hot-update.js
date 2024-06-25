"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/game-new/ui/player-info.jsx":
/*!************************************************!*\
  !*** ./components/game-new/ui/player-info.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PlayerInfo: function() { return /* binding */ PlayerInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-symbol */ \"./components/game-new/ui/game-symbol.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst PlayerInfo = (param)=>{\n    let { isRight, name, rating, avatar, symbol, timer, timerStartAt } = param;\n    const seconds = Math.ceil(timer / 1000);\n    const minutesString = String(Math.floor(seconds / 60)).padStart(2, \"0\");\n    const secondsString = String(seconds % 60).padStart(2, \"0\");\n    const isDanger = seconds < 10;\n    console.log(isDanger);\n    const getTimerColor = ()=>{\n        if (timerStartAt) {\n            return isDanger ? \"text-orange-600\" : \"text-slate-900\";\n        }\n        return \"text-slate-200\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"relative\", isRight && \"order-3\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-2 text-start text-teal-60 w-44\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: avatar,\n                                width: 48,\n                                height: 48,\n                                alt: \"avatar\",\n                                unoptimized: true\n                            }, void 0, false, {\n                                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"overflow-hidden\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-lg leading-tight truncate\",\n                                        children: name\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 7\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-slate-400 text-xs leading-tight\",\n                                        children: [\n                                            \"Рейтинг: \",\n                                            rating\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 7\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_4__.GameSymbol, {\n                            symbol: symbol\n                        }, void 0, false, {\n                            fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                lineNumber: 31,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"h-6 w-px bg-slate-200\", isRight && \"order-2\")\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                lineNumber: 45,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"text-lg font-semibold w-[60px]\", isRight && \"order-1\", getTimerColor()),\n                children: [\n                    minutesString,\n                    \":\",\n                    secondsString\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                lineNumber: 48,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n        lineNumber: 30,\n        columnNumber: 3\n    }, undefined);\n};\n_c = PlayerInfo;\nfunction useNow(inderval, enabled) {\n    _s();\n    const [now, setNow] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (!enabled) {\n            setNow(undefined);\n        }\n        const int = setInterval(()=>{\n            setNow(Date.now());\n        }, inderval);\n        return ()=>{\n            clearInterval(int);\n        };\n    }, [\n        inderval,\n        enabled\n    ]);\n}\n_s(useNow, \"uo7S3D1rb/OC8+YXLf5VVNMSQho=\");\nvar _c;\n$RefreshReg$(_c, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L3VpL3BsYXllci1pbmZvLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF1QjtBQUNPO0FBQ2E7QUFDRDtBQUVuQyxNQUFNSyxhQUFhO1FBQUMsRUFDMUJDLE9BQU8sRUFDUEMsSUFBSSxFQUNKQyxNQUFNLEVBQ05DLE1BQU0sRUFDTkMsTUFBTSxFQUNOQyxLQUFLLEVBQ0xDLFlBQVksRUFDWjtJQUNBLE1BQU1DLFVBQVVDLEtBQUtDLElBQUksQ0FBQ0osUUFBUTtJQUNsQyxNQUFNSyxnQkFBZ0JDLE9BQU9ILEtBQUtJLEtBQUssQ0FBQ0wsVUFBVSxLQUFLTSxRQUFRLENBQUMsR0FBRztJQUNuRSxNQUFNQyxnQkFBZ0JILE9BQU9KLFVBQVUsSUFBSU0sUUFBUSxDQUFDLEdBQUc7SUFFdkQsTUFBTUUsV0FBV1IsVUFBVTtJQUUzQlMsUUFBUUMsR0FBRyxDQUFDRjtJQUNaLE1BQU1HLGdCQUFnQjtRQUNyQixJQUFJWixjQUFjO1lBQ2pCLE9BQU9TLFdBQVcsb0JBQW9CO1FBQ3ZDO1FBQ0EsT0FBTztJQUNSO0lBRUEscUJBQ0MsOERBQUNJO1FBQUlDLFdBQVU7OzBCQUNkLDhEQUFDRDtnQkFBSUMsV0FBVzFCLGdEQUFJQSxDQUFDLFlBQVlNLFdBQVc7O2tDQUMzQyw4REFBQ21CO3dCQUFJQyxXQUFXOzswQ0FDZiw4REFBQ3pCLG1EQUFLQTtnQ0FBQzBCLEtBQUtsQjtnQ0FBUW1CLE9BQU87Z0NBQUlDLFFBQVE7Z0NBQUlDLEtBQUk7Z0NBQVNDLFdBQVc7Ozs7OzswQ0FDbkUsOERBQUNOO2dDQUFJQyxXQUFVOztrREFDZCw4REFBQ0Q7d0NBQUlDLFdBQVU7a0RBQWtDbkI7Ozs7OztrREFDakQsOERBQUNrQjt3Q0FBSUMsV0FBVTs7NENBQXVDOzRDQUMzQ2xCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUliLDhEQUFDaUI7d0JBQUlDLFdBQVU7a0NBQ2QsNEVBQUN0QixvREFBVUE7NEJBQUNNLFFBQVFBOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHdEIsOERBQUNlO2dCQUNBQyxXQUFXMUIsZ0RBQUlBLENBQUMseUJBQXlCTSxXQUFXOzs7Ozs7MEJBRXJELDhEQUFDbUI7Z0JBQ0FDLFdBQVcxQixnREFBSUEsQ0FDZCxrQ0FDQU0sV0FBVyxXQUNYa0I7O29CQUdBUjtvQkFBYztvQkFBRUk7Ozs7Ozs7Ozs7Ozs7QUFJckIsRUFBQztLQXJEWWY7QUF1RGIsU0FBUzJCLE9BQU9DLFFBQVEsRUFBRUMsT0FBTzs7SUFDaEMsTUFBTSxDQUFDQyxLQUFLQyxPQUFPLEdBQUdqQywrQ0FBUUE7SUFFOUJELGdEQUFTQSxDQUFDO1FBQ1QsSUFBSSxDQUFDZ0MsU0FBUztZQUNiRSxPQUFPQztRQUNSO1FBRUEsTUFBTUMsTUFBTUMsWUFBWTtZQUN2QkgsT0FBT0ksS0FBS0wsR0FBRztRQUNoQixHQUFHRjtRQUVILE9BQU87WUFDTlEsY0FBY0g7UUFDZjtJQUNELEdBQUc7UUFBQ0w7UUFBVUM7S0FBUTtBQUN2QjtHQWhCU0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lLW5ldy91aS9wbGF5ZXItaW5mby5qc3g/ZjJjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBHYW1lU3ltYm9sIH0gZnJvbSAnLi9nYW1lLXN5bWJvbCdcclxuXHJcbmV4cG9ydCBjb25zdCBQbGF5ZXJJbmZvID0gKHtcclxuXHRpc1JpZ2h0LFxyXG5cdG5hbWUsXHJcblx0cmF0aW5nLFxyXG5cdGF2YXRhcixcclxuXHRzeW1ib2wsXHJcblx0dGltZXIsXHJcblx0dGltZXJTdGFydEF0LFxyXG59KSA9PiB7XHJcblx0Y29uc3Qgc2Vjb25kcyA9IE1hdGguY2VpbCh0aW1lciAvIDEwMDApXHJcblx0Y29uc3QgbWludXRlc1N0cmluZyA9IFN0cmluZyhNYXRoLmZsb29yKHNlY29uZHMgLyA2MCkpLnBhZFN0YXJ0KDIsICcwJylcclxuXHRjb25zdCBzZWNvbmRzU3RyaW5nID0gU3RyaW5nKHNlY29uZHMgJSA2MCkucGFkU3RhcnQoMiwgJzAnKVxyXG5cclxuXHRjb25zdCBpc0RhbmdlciA9IHNlY29uZHMgPCAxMFxyXG5cclxuXHRjb25zb2xlLmxvZyhpc0RhbmdlcilcclxuXHRjb25zdCBnZXRUaW1lckNvbG9yID0gKCkgPT4ge1xyXG5cdFx0aWYgKHRpbWVyU3RhcnRBdCkge1xyXG5cdFx0XHRyZXR1cm4gaXNEYW5nZXIgPyAndGV4dC1vcmFuZ2UtNjAwJyA6ICd0ZXh0LXNsYXRlLTkwMCdcclxuXHRcdH1cclxuXHRcdHJldHVybiAndGV4dC1zbGF0ZS0yMDAnXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZ2FwLTMgaXRlbXMtY2VudGVyJz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2Nsc3goJ3JlbGF0aXZlJywgaXNSaWdodCAmJiAnb3JkZXItMycpfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17J2ZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtc3RhcnQgdGV4dC10ZWFsLTYwIHctNDQnfT5cclxuXHRcdFx0XHRcdDxJbWFnZSBzcmM9e2F2YXRhcn0gd2lkdGg9ezQ4fSBoZWlnaHQ9ezQ4fSBhbHQ9J2F2YXRhcicgdW5vcHRpbWl6ZWQgLz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdvdmVyZmxvdy1oaWRkZW4nPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGV4dC1sZyBsZWFkaW5nLXRpZ2h0IHRydW5jYXRlJz57bmFtZX08L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQtc2xhdGUtNDAwIHRleHQteHMgbGVhZGluZy10aWdodCc+XHJcblx0XHRcdFx0XHRcdFx00KDQtdC50YLQuNC90LM6IHtyYXRpbmd9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctNSBoLTUgcm91bmRlZC1mdWxsIGJnLXdoaXRlIHNoYWRvdyBhYnNvbHV0ZSAtbGVmdC0xIC10b3AtMSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XHJcblx0XHRcdFx0XHQ8R2FtZVN5bWJvbCBzeW1ib2w9e3N5bWJvbH0gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRjbGFzc05hbWU9e2Nsc3goJ2gtNiB3LXB4IGJnLXNsYXRlLTIwMCcsIGlzUmlnaHQgJiYgJ29yZGVyLTInKX1cclxuXHRcdFx0PjwvZGl2PlxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbHN4KFxyXG5cdFx0XHRcdFx0J3RleHQtbGcgZm9udC1zZW1pYm9sZCB3LVs2MHB4XScsXHJcblx0XHRcdFx0XHRpc1JpZ2h0ICYmICdvcmRlci0xJyxcclxuXHRcdFx0XHRcdGdldFRpbWVyQ29sb3IoKVxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7bWludXRlc1N0cmluZ306e3NlY29uZHNTdHJpbmd9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VOb3coaW5kZXJ2YWwsIGVuYWJsZWQpIHtcclxuXHRjb25zdCBbbm93LCBzZXROb3ddID0gdXNlU3RhdGUoKVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKCFlbmFibGVkKSB7XHJcblx0XHRcdHNldE5vdyh1bmRlZmluZWQpXHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgaW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRzZXROb3coRGF0ZS5ub3coKSlcclxuXHRcdH0sIGluZGVydmFsKVxyXG5cclxuXHRcdHJldHVybiAoKSA9PiB7XHJcblx0XHRcdGNsZWFySW50ZXJ2YWwoaW50KVxyXG5cdFx0fVxyXG5cdH0sIFtpbmRlcnZhbCwgZW5hYmxlZF0pXHJcbn1cclxuIl0sIm5hbWVzIjpbImNsc3giLCJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiR2FtZVN5bWJvbCIsIlBsYXllckluZm8iLCJpc1JpZ2h0IiwibmFtZSIsInJhdGluZyIsImF2YXRhciIsInN5bWJvbCIsInRpbWVyIiwidGltZXJTdGFydEF0Iiwic2Vjb25kcyIsIk1hdGgiLCJjZWlsIiwibWludXRlc1N0cmluZyIsIlN0cmluZyIsImZsb29yIiwicGFkU3RhcnQiLCJzZWNvbmRzU3RyaW5nIiwiaXNEYW5nZXIiLCJjb25zb2xlIiwibG9nIiwiZ2V0VGltZXJDb2xvciIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwidW5vcHRpbWl6ZWQiLCJ1c2VOb3ciLCJpbmRlcnZhbCIsImVuYWJsZWQiLCJub3ciLCJzZXROb3ciLCJ1bmRlZmluZWQiLCJpbnQiLCJzZXRJbnRlcnZhbCIsIkRhdGUiLCJjbGVhckludGVydmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game-new/ui/player-info.jsx\n"));

/***/ })

});