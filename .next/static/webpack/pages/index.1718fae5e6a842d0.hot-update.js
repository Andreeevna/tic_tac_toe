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

/***/ "./components/game/game-info.jsx":
/*!***************************************!*\
  !*** ./components/game/game-info.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameInfo: function() { return /* binding */ GameInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile */ \"./components/profile/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-symbol */ \"./components/game/game-symbol.jsx\");\n/* harmony import */ var _icons_CrossIon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/CrossIon */ \"./components/game/icons/CrossIon.jsx\");\n/* harmony import */ var _images_avatar1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/avatar1.png */ \"./components/game/images/avatar1.png\");\n\n\n\n\n\n\n\nconst players = [\n    {\n        id: 1,\n        name: \"Paromonov\",\n        rating: \"1230\",\n        avatar: _images_avatar1_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.CROSS\n    }\n];\nconst GameInfo = (param)=>{\n    let { className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 py-4 flex items-center justify-between\"),\n        children: [\n            players.map((player, i)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerInfo, {}, void 0, false, {\n                    fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 12\n                }, undefined);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-3 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-orange-600 text-lg font-semibold\",\n                        children: \"01:08\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-6 w-px bg-slate-200\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_profile__WEBPACK_IMPORTED_MODULE_2__.Profile, {\n                                className: \"w-[180px]\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_CrossIon__WEBPACK_IMPORTED_MODULE_5__.CrossIon, {}, void 0, false, {\n                                    fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 7\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 30,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n        lineNumber: 21,\n        columnNumber: 3\n    }, undefined);\n};\n_c = GameInfo;\nfunction PlayerInfo(param) {\n    let { playerInfo } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_profile__WEBPACK_IMPORTED_MODULE_2__.Profile, {\n                        className: \"w-[180px]\",\n                        name: playerInfo.name,\n                        rating: playerInfo.rating,\n                        avatar: playerInfo.avatar\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_4__.GameSymbol, {\n                            symbol: playerInfo.symbol\n                        }, void 0, false, {\n                            fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 6\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 47,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-6 w-px bg-slate-200\"\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 58,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-slate-900 text-lg font-semibold\",\n                children: \"01:08\"\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 59,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n        lineNumber: 46,\n        columnNumber: 3\n    }, this);\n}\n_c1 = PlayerInfo;\nvar _c, _c1;\n$RefreshReg$(_c, \"GameInfo\");\n$RefreshReg$(_c1, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1pbmZvLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ2E7QUFDTTtBQUNBO0FBQ0M7QUFFRTtBQUU3QyxNQUFNTSxVQUFVO0lBQ2Y7UUFDQ0MsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsUUFBUUwsMkRBQVVBO1FBQ2xCTSxRQUFRVCxvREFBWUEsQ0FBQ1UsS0FBSztJQUMzQjtDQUNBO0FBRU0sTUFBTUMsV0FBVztRQUFDLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxxQkFDQyw4REFBQ0M7UUFDQUQsV0FBV2QsZ0RBQUlBLENBQ2RjLFdBQ0E7O1lBR0FSLFFBQVFVLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQztnQkFDckIscUJBQU8sOERBQUNDOzs7OztZQUNUOzBCQUNBLDhEQUFDSjtnQkFBSUQsV0FBVTs7a0NBQ2QsOERBQUNDO3dCQUFJRCxXQUFVO2tDQUF3Qzs7Ozs7O2tDQUN2RCw4REFBQ0M7d0JBQUlELFdBQVU7Ozs7OztrQ0FDZiw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNkLDhEQUFDYiw2Q0FBT0E7Z0NBQUNhLFdBQVU7Ozs7OzswQ0FDbkIsOERBQUNDO2dDQUFJRCxXQUFVOzBDQUNkLDRFQUFDVixxREFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNZixFQUFDO0tBdkJZUztBQXlCYixTQUFTTSxXQUFXLEtBQWM7UUFBZCxFQUFFQyxVQUFVLEVBQUUsR0FBZDtJQUNuQixxQkFDQyw4REFBQ0w7UUFBSUQsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDZCw4REFBQ2IsNkNBQU9BO3dCQUNQYSxXQUFVO3dCQUNWTixNQUFNWSxXQUFXWixJQUFJO3dCQUNyQkMsUUFBUVcsV0FBV1gsTUFBTTt3QkFDekJDLFFBQVFVLFdBQVdWLE1BQU07Ozs7OztrQ0FFMUIsOERBQUNLO3dCQUFJRCxXQUFVO2tDQUNkLDRFQUFDWCxvREFBVUE7NEJBQUNRLFFBQVFTLFdBQVdULE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUd2Qyw4REFBQ0k7Z0JBQUlELFdBQVU7Ozs7OzswQkFDZiw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQXVDOzs7Ozs7Ozs7Ozs7QUFHekQ7TUFsQlNLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9nYW1lLWluZm8uanN4P2QwNDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcclxuaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gJy4uL3Byb2ZpbGUnXHJcbmltcG9ydCB7IEdBTUVfU1lNQk9MUyB9IGZyb20gJy4vY29uc3RhbnRzJ1xyXG5pbXBvcnQgeyBHYW1lU3ltYm9sIH0gZnJvbSAnLi9nYW1lLXN5bWJvbCdcclxuaW1wb3J0IHsgQ3Jvc3NJb24gfSBmcm9tICcuL2ljb25zL0Nyb3NzSW9uJ1xyXG5cclxuaW1wb3J0IGF2YXRhclNyYzEgZnJvbSAnLi9pbWFnZXMvYXZhdGFyMS5wbmcnXHJcblxyXG5jb25zdCBwbGF5ZXJzID0gW1xyXG5cdHtcclxuXHRcdGlkOiAxLFxyXG5cdFx0bmFtZTogJ1Bhcm9tb25vdicsXHJcblx0XHRyYXRpbmc6ICcxMjMwJyxcclxuXHRcdGF2YXRhcjogYXZhdGFyU3JjMSxcclxuXHRcdHN5bWJvbDogR0FNRV9TWU1CT0xTLkNST1NTLFxyXG5cdH0sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBHYW1lSW5mbyA9ICh7IGNsYXNzTmFtZSB9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPXtjbHN4KFxyXG5cdFx0XHRcdGNsYXNzTmFtZSxcclxuXHRcdFx0XHQnYmctd2hpdGUgcm91bmRlZC0yeGwgc2hhZG93LW1kIHB4LTggcHktNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4nXHJcblx0XHRcdCl9XHJcblx0XHQ+XHJcblx0XHRcdHtwbGF5ZXJzLm1hcCgocGxheWVyLCBpKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIDxQbGF5ZXJJbmZvIC8+XHJcblx0XHRcdH0pfVxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtMyBpdGVtcy1jZW50ZXInPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0LW9yYW5nZS02MDAgdGV4dC1sZyBmb250LXNlbWlib2xkJz4wMTowODwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdoLTYgdy1weCBiZy1zbGF0ZS0yMDAnPjwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSc+XHJcblx0XHRcdFx0XHQ8UHJvZmlsZSBjbGFzc05hbWU9J3ctWzE4MHB4XScgLz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTUgaC01IHJvdW5kZWQtZnVsbCBiZy13aGl0ZSBzaGFkb3cgYWJzb2x1dGUgLWxlZnQtMSAtdG9wLTEgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInPlxyXG5cdFx0XHRcdFx0XHQ8Q3Jvc3NJb24gLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZnVuY3Rpb24gUGxheWVySW5mbyh7IHBsYXllckluZm8gfSkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtMyBpdGVtcy1jZW50ZXInPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUnPlxyXG5cdFx0XHRcdDxQcm9maWxlXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9J3ctWzE4MHB4XSdcclxuXHRcdFx0XHRcdG5hbWU9e3BsYXllckluZm8ubmFtZX1cclxuXHRcdFx0XHRcdHJhdGluZz17cGxheWVySW5mby5yYXRpbmd9XHJcblx0XHRcdFx0XHRhdmF0YXI9e3BsYXllckluZm8uYXZhdGFyfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctNSBoLTUgcm91bmRlZC1mdWxsIGJnLXdoaXRlIHNoYWRvdyBhYnNvbHV0ZSAtbGVmdC0xIC10b3AtMSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XHJcblx0XHRcdFx0XHQ8R2FtZVN5bWJvbCBzeW1ib2w9e3BsYXllckluZm8uc3ltYm9sfSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2gtNiB3LXB4IGJnLXNsYXRlLTIwMCc+PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXNsYXRlLTkwMCB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQnPjAxOjA4PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuIl0sIm5hbWVzIjpbImNsc3giLCJQcm9maWxlIiwiR0FNRV9TWU1CT0xTIiwiR2FtZVN5bWJvbCIsIkNyb3NzSW9uIiwiYXZhdGFyU3JjMSIsInBsYXllcnMiLCJpZCIsIm5hbWUiLCJyYXRpbmciLCJhdmF0YXIiLCJzeW1ib2wiLCJDUk9TUyIsIkdhbWVJbmZvIiwiY2xhc3NOYW1lIiwiZGl2IiwibWFwIiwicGxheWVyIiwiaSIsIlBsYXllckluZm8iLCJwbGF5ZXJJbmZvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/game-info.jsx\n"));

/***/ })

});