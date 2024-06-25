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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PlayerInfo: function() { return /* binding */ PlayerInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_timers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/timers */ \"./components/lib/timers.js\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-symbol */ \"./components/game-new/ui/game-symbol.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst PlayerInfo = (param)=>{\n    let { isRight, name, rating, avatar, symbol, timer, timerStartAt } = param;\n    _s();\n    const now = (0,_lib_timers__WEBPACK_IMPORTED_MODULE_3__.useNow)(1000, timerStartAt);\n    const mils = Math.max(now ? timer - (now - timerStartAt) : timer, 0);\n    const seconds = Math.ceil(mils / 1000);\n    const minutesString = String(Math.floor(seconds / 60)).padStart(2, \"0\");\n    const secondsString = String(seconds % 60).padStart(2, \"0\");\n    const isDanger = seconds < 10;\n    const getTimerColor = ()=>{\n        if (timerStartAt) {\n            return isDanger ? \"text-orange-600\" : \"text-slate-900\";\n        }\n        return \"text-slate-200\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"relative\", isRight && \"order-3\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-2 text-start text-teal-60 w-44\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: avatar,\n                                width: 48,\n                                height: 48,\n                                alt: \"avatar\",\n                                unoptimized: true\n                            }, void 0, false, {\n                                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"overflow-hidden\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-lg leading-tight truncate\",\n                                        children: name\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 7\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-slate-400 text-xs leading-tight\",\n                                        children: [\n                                            \"Рейтинг: \",\n                                            rating\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 7\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_4__.GameSymbol, {\n                            symbol: symbol\n                        }, void 0, false, {\n                            fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                lineNumber: 33,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"h-6 w-px bg-slate-200\", isRight && \"order-2\")\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                lineNumber: 47,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"text-lg font-semibold w-[60px]\", isRight && \"order-1\", getTimerColor()),\n                children: [\n                    minutesString,\n                    \":\",\n                    secondsString\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                lineNumber: 50,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n        lineNumber: 32,\n        columnNumber: 3\n    }, undefined);\n};\n_s(PlayerInfo, \"t70lBptlS54ZF8dxX2pScDbDMW0=\", false, function() {\n    return [\n        _lib_timers__WEBPACK_IMPORTED_MODULE_3__.useNow\n    ];\n});\n_c = PlayerInfo;\nvar _c;\n$RefreshReg$(_c, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L3VpL3BsYXllci1pbmZvLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ087QUFDVztBQUNDO0FBRW5DLE1BQU1JLGFBQWE7UUFBQyxFQUMxQkMsT0FBTyxFQUNQQyxJQUFJLEVBQ0pDLE1BQU0sRUFDTkMsTUFBTSxFQUNOQyxNQUFNLEVBQ05DLEtBQUssRUFDTEMsWUFBWSxFQUNaOztJQUNBLE1BQU1DLE1BQU1WLG1EQUFNQSxDQUFDLE1BQU1TO0lBQ3pCLE1BQU1FLE9BQU9DLEtBQUtDLEdBQUcsQ0FBQ0gsTUFBTUYsUUFBU0UsQ0FBQUEsTUFBTUQsWUFBVyxJQUFLRCxPQUFPO0lBRWxFLE1BQU1NLFVBQVVGLEtBQUtHLElBQUksQ0FBQ0osT0FBTztJQUNqQyxNQUFNSyxnQkFBZ0JDLE9BQU9MLEtBQUtNLEtBQUssQ0FBQ0osVUFBVSxLQUFLSyxRQUFRLENBQUMsR0FBRztJQUNuRSxNQUFNQyxnQkFBZ0JILE9BQU9ILFVBQVUsSUFBSUssUUFBUSxDQUFDLEdBQUc7SUFFdkQsTUFBTUUsV0FBV1AsVUFBVTtJQUUzQixNQUFNUSxnQkFBZ0I7UUFDckIsSUFBSWIsY0FBYztZQUNqQixPQUFPWSxXQUFXLG9CQUFvQjtRQUN2QztRQUNBLE9BQU87SUFDUjtJQUVBLHFCQUNDLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDZCw4REFBQ0Q7Z0JBQUlDLFdBQVcxQixnREFBSUEsQ0FBQyxZQUFZSyxXQUFXOztrQ0FDM0MsOERBQUNvQjt3QkFBSUMsV0FBVzs7MENBQ2YsOERBQUN6QixtREFBS0E7Z0NBQUMwQixLQUFLbkI7Z0NBQVFvQixPQUFPO2dDQUFJQyxRQUFRO2dDQUFJQyxLQUFJO2dDQUFTQyxXQUFXOzs7Ozs7MENBQ25FLDhEQUFDTjtnQ0FBSUMsV0FBVTs7a0RBQ2QsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUFrQ3BCOzs7Ozs7a0RBQ2pELDhEQUFDbUI7d0NBQUlDLFdBQVU7OzRDQUF1Qzs0Q0FDM0NuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJYiw4REFBQ2tCO3dCQUFJQyxXQUFVO2tDQUNkLDRFQUFDdkIsb0RBQVVBOzRCQUFDTSxRQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3RCLDhEQUFDZ0I7Z0JBQ0FDLFdBQVcxQixnREFBSUEsQ0FBQyx5QkFBeUJLLFdBQVc7Ozs7OzswQkFFckQsOERBQUNvQjtnQkFDQUMsV0FBVzFCLGdEQUFJQSxDQUNkLGtDQUNBSyxXQUFXLFdBQ1htQjs7b0JBR0FOO29CQUFjO29CQUFFSTs7Ozs7Ozs7Ozs7OztBQUlyQixFQUFDO0dBdkRZbEI7O1FBU0FGLCtDQUFNQTs7O0tBVE5FIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS1uZXcvdWkvcGxheWVyLWluZm8uanN4P2YyYzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7IHVzZU5vdyB9IGZyb20gJy4uLy4uL2xpYi90aW1lcnMnXHJcbmltcG9ydCB7IEdhbWVTeW1ib2wgfSBmcm9tICcuL2dhbWUtc3ltYm9sJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsYXllckluZm8gPSAoe1xyXG5cdGlzUmlnaHQsXHJcblx0bmFtZSxcclxuXHRyYXRpbmcsXHJcblx0YXZhdGFyLFxyXG5cdHN5bWJvbCxcclxuXHR0aW1lcixcclxuXHR0aW1lclN0YXJ0QXQsXHJcbn0pID0+IHtcclxuXHRjb25zdCBub3cgPSB1c2VOb3coMTAwMCwgdGltZXJTdGFydEF0KVxyXG5cdGNvbnN0IG1pbHMgPSBNYXRoLm1heChub3cgPyB0aW1lciAtIChub3cgLSB0aW1lclN0YXJ0QXQpIDogdGltZXIsIDApXHJcblxyXG5cdGNvbnN0IHNlY29uZHMgPSBNYXRoLmNlaWwobWlscyAvIDEwMDApXHJcblx0Y29uc3QgbWludXRlc1N0cmluZyA9IFN0cmluZyhNYXRoLmZsb29yKHNlY29uZHMgLyA2MCkpLnBhZFN0YXJ0KDIsICcwJylcclxuXHRjb25zdCBzZWNvbmRzU3RyaW5nID0gU3RyaW5nKHNlY29uZHMgJSA2MCkucGFkU3RhcnQoMiwgJzAnKVxyXG5cclxuXHRjb25zdCBpc0RhbmdlciA9IHNlY29uZHMgPCAxMFxyXG5cclxuXHRjb25zdCBnZXRUaW1lckNvbG9yID0gKCkgPT4ge1xyXG5cdFx0aWYgKHRpbWVyU3RhcnRBdCkge1xyXG5cdFx0XHRyZXR1cm4gaXNEYW5nZXIgPyAndGV4dC1vcmFuZ2UtNjAwJyA6ICd0ZXh0LXNsYXRlLTkwMCdcclxuXHRcdH1cclxuXHRcdHJldHVybiAndGV4dC1zbGF0ZS0yMDAnXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZ2FwLTMgaXRlbXMtY2VudGVyJz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2Nsc3goJ3JlbGF0aXZlJywgaXNSaWdodCAmJiAnb3JkZXItMycpfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17J2ZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtc3RhcnQgdGV4dC10ZWFsLTYwIHctNDQnfT5cclxuXHRcdFx0XHRcdDxJbWFnZSBzcmM9e2F2YXRhcn0gd2lkdGg9ezQ4fSBoZWlnaHQ9ezQ4fSBhbHQ9J2F2YXRhcicgdW5vcHRpbWl6ZWQgLz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdvdmVyZmxvdy1oaWRkZW4nPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGV4dC1sZyBsZWFkaW5nLXRpZ2h0IHRydW5jYXRlJz57bmFtZX08L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQtc2xhdGUtNDAwIHRleHQteHMgbGVhZGluZy10aWdodCc+XHJcblx0XHRcdFx0XHRcdFx00KDQtdC50YLQuNC90LM6IHtyYXRpbmd9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctNSBoLTUgcm91bmRlZC1mdWxsIGJnLXdoaXRlIHNoYWRvdyBhYnNvbHV0ZSAtbGVmdC0xIC10b3AtMSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XHJcblx0XHRcdFx0XHQ8R2FtZVN5bWJvbCBzeW1ib2w9e3N5bWJvbH0gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRjbGFzc05hbWU9e2Nsc3goJ2gtNiB3LXB4IGJnLXNsYXRlLTIwMCcsIGlzUmlnaHQgJiYgJ29yZGVyLTInKX1cclxuXHRcdFx0PjwvZGl2PlxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbHN4KFxyXG5cdFx0XHRcdFx0J3RleHQtbGcgZm9udC1zZW1pYm9sZCB3LVs2MHB4XScsXHJcblx0XHRcdFx0XHRpc1JpZ2h0ICYmICdvcmRlci0xJyxcclxuXHRcdFx0XHRcdGdldFRpbWVyQ29sb3IoKVxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7bWludXRlc1N0cmluZ306e3NlY29uZHNTdHJpbmd9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjbHN4IiwiSW1hZ2UiLCJ1c2VOb3ciLCJHYW1lU3ltYm9sIiwiUGxheWVySW5mbyIsImlzUmlnaHQiLCJuYW1lIiwicmF0aW5nIiwiYXZhdGFyIiwic3ltYm9sIiwidGltZXIiLCJ0aW1lclN0YXJ0QXQiLCJub3ciLCJtaWxzIiwiTWF0aCIsIm1heCIsInNlY29uZHMiLCJjZWlsIiwibWludXRlc1N0cmluZyIsIlN0cmluZyIsImZsb29yIiwicGFkU3RhcnQiLCJzZWNvbmRzU3RyaW5nIiwiaXNEYW5nZXIiLCJnZXRUaW1lckNvbG9yIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJ1bm9wdGltaXplZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game-new/ui/player-info.jsx\n"));

/***/ })

});