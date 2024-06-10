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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameInfo: function() { return /* binding */ GameInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile */ \"./components/profile/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-symbol */ \"./components/game/game-symbol.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _images_avatar1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/avatar1.png */ \"./components/game/images/avatar1.png\");\n/* harmony import */ var _images_avatar2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/avatar2.png */ \"./components/game/images/avatar2.png\");\n/* harmony import */ var _images_avatar3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/avatar3.png */ \"./components/game/images/avatar3.png\");\n/* harmony import */ var _images_avatar4_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/avatar4.png */ \"./components/game/images/avatar4.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst players = [\n    {\n        id: 1,\n        name: \"Paromonov\",\n        rating: \"1230\",\n        avatar: _images_avatar1_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.CROSS\n    },\n    {\n        id: 2,\n        name: \"VereIntedinglapotur\",\n        rating: \"850\",\n        avatar: _images_avatar3_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.ZERO\n    },\n    {\n        id: 3,\n        name: \"Lara\",\n        rating: \"1440\",\n        avatar: _images_avatar2_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.TRINGLE\n    },\n    {\n        id: 4,\n        name: \"Долматов\",\n        rating: \"760\",\n        avatar: _images_avatar4_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.SQUARE\n    }\n];\nconst GameInfo = (param)=>{\n    let { className, playersCount } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 justify-between gap-3\"),\n        children: players.slice(0, playersCount).map((player, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerInfo, {\n                playerInfo: player,\n                isRight: index % 2 === 1\n            }, player.id, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 53,\n                columnNumber: 6\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n        lineNumber: 45,\n        columnNumber: 3\n    }, undefined);\n};\n_c = GameInfo;\nfunction PlayerInfo(param) {\n    let { playerInfo, isRight } = param;\n    _s();\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(66);\n    const minutesString = String(Math.floor(seconds / 60)).padStart(2, \"0\");\n    const secondsString = String(seconds % 60).padStart(2, \"0\");\n    const isDanger = seconds < 10;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"relative\", isRight && \"order-3\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_profile__WEBPACK_IMPORTED_MODULE_2__.Profile, {\n                        className: \"w-[180px]\",\n                        name: playerInfo.name,\n                        rating: playerInfo.rating,\n                        avatar: playerInfo.avatar\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_4__.GameSymbol, {\n                            symbol: playerInfo.symbol\n                        }, void 0, false, {\n                            fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                            lineNumber: 80,\n                            columnNumber: 6\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 72,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"h-6 w-px bg-slate-200\", isRight && \"order-2\")\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 83,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"text-slate-900 text-lg font-semibold\", isRight && \"order-1\"),\n                children: [\n                    minutesString,\n                    \":\",\n                    secondsString\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 86,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n        lineNumber: 71,\n        columnNumber: 3\n    }, this);\n}\n_s(PlayerInfo, \"V2ihls6HEP5QVu1PdHjDCS0+ucI=\");\n_c1 = PlayerInfo;\nvar _c, _c1;\n$RefreshReg$(_c, \"GameInfo\");\n$RefreshReg$(_c1, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1pbmZvLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFDYTtBQUNNO0FBQ0E7QUFFVjtBQUNhO0FBQ0E7QUFDQTtBQUNBO0FBRTdDLE1BQU1TLFVBQVU7SUFDZjtRQUNDQyxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxRQUFRUiwyREFBVUE7UUFDbEJTLFFBQVFaLG9EQUFZQSxDQUFDYSxLQUFLO0lBQzNCO0lBQ0E7UUFDQ0wsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsUUFBUU4sMkRBQVVBO1FBQ2xCTyxRQUFRWixvREFBWUEsQ0FBQ2MsSUFBSTtJQUMxQjtJQUNBO1FBQ0NOLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLFFBQVFQLDJEQUFVQTtRQUNsQlEsUUFBUVosb0RBQVlBLENBQUNlLE9BQU87SUFDN0I7SUFDQTtRQUNDUCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxRQUFRTCwyREFBVUE7UUFDbEJNLFFBQVFaLG9EQUFZQSxDQUFDZ0IsTUFBTTtJQUM1QjtDQUNBO0FBRU0sTUFBTUMsV0FBVztRQUFDLEVBQUVDLFNBQVMsRUFBRUMsWUFBWSxFQUFFO0lBQ25ELHFCQUNDLDhEQUFDQztRQUNBRixXQUFXcEIsZ0RBQUlBLENBQ2RvQixXQUNBO2tCQUdBWCxRQUFRYyxLQUFLLENBQUMsR0FBR0YsY0FBY0csR0FBRyxDQUFDLENBQUNDLFFBQVFDO1lBQzVDLHFCQUNDLDhEQUFDQztnQkFFQUMsWUFBWUg7Z0JBQ1pJLFNBQVNILFFBQVEsTUFBTTtlQUZsQkQsT0FBT2YsRUFBRTs7Ozs7UUFLakI7Ozs7OztBQUdILEVBQUM7S0FuQllTO0FBcUJiLFNBQVNRLFdBQVcsS0FBdUI7UUFBdkIsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUUsR0FBdkI7O0lBQ25CLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHM0IsK0NBQVFBLENBQUM7SUFDdkMsTUFBTTRCLGdCQUFnQkMsT0FBT0MsS0FBS0MsS0FBSyxDQUFDTCxVQUFVLEtBQUtNLFFBQVEsQ0FBQyxHQUFHO0lBQ25FLE1BQU1DLGdCQUFnQkosT0FBT0gsVUFBVSxJQUFJTSxRQUFRLENBQUMsR0FBRztJQUV2RCxNQUFNRSxXQUFXUixVQUFVO0lBQzNCLHFCQUNDLDhEQUFDUjtRQUFJRixXQUFVOzswQkFDZCw4REFBQ0U7Z0JBQUlGLFdBQVdwQixnREFBSUEsQ0FBQyxZQUFZNkIsV0FBVzs7a0NBQzNDLDhEQUFDNUIsNkNBQU9BO3dCQUNQbUIsV0FBVTt3QkFDVlQsTUFBTWlCLFdBQVdqQixJQUFJO3dCQUNyQkMsUUFBUWdCLFdBQVdoQixNQUFNO3dCQUN6QkMsUUFBUWUsV0FBV2YsTUFBTTs7Ozs7O2tDQUUxQiw4REFBQ1M7d0JBQUlGLFdBQVU7a0NBQ2QsNEVBQUNqQixvREFBVUE7NEJBQUNXLFFBQVFjLFdBQVdkLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUd2Qyw4REFBQ1E7Z0JBQ0FGLFdBQVdwQixnREFBSUEsQ0FBQyx5QkFBeUI2QixXQUFXOzs7Ozs7MEJBRXJELDhEQUFDUDtnQkFDQUYsV0FBV3BCLGdEQUFJQSxDQUNkLHdDQUNBNkIsV0FBVzs7b0JBR1hHO29CQUFjO29CQUFFSzs7Ozs7Ozs7Ozs7OztBQUlyQjtHQWhDU1Y7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL2dhbWUtaW5mby5qc3g/ZDA0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xyXG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSAnLi4vcHJvZmlsZSdcclxuaW1wb3J0IHsgR0FNRV9TWU1CT0xTIH0gZnJvbSAnLi9jb25zdGFudHMnXHJcbmltcG9ydCB7IEdhbWVTeW1ib2wgfSBmcm9tICcuL2dhbWUtc3ltYm9sJ1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF2YXRhclNyYzEgZnJvbSAnLi9pbWFnZXMvYXZhdGFyMS5wbmcnXHJcbmltcG9ydCBhdmF0YXJTcmMzIGZyb20gJy4vaW1hZ2VzL2F2YXRhcjIucG5nJ1xyXG5pbXBvcnQgYXZhdGFyU3JjMiBmcm9tICcuL2ltYWdlcy9hdmF0YXIzLnBuZydcclxuaW1wb3J0IGF2YXRhclNyYzQgZnJvbSAnLi9pbWFnZXMvYXZhdGFyNC5wbmcnXHJcblxyXG5jb25zdCBwbGF5ZXJzID0gW1xyXG5cdHtcclxuXHRcdGlkOiAxLFxyXG5cdFx0bmFtZTogJ1Bhcm9tb25vdicsXHJcblx0XHRyYXRpbmc6ICcxMjMwJyxcclxuXHRcdGF2YXRhcjogYXZhdGFyU3JjMSxcclxuXHRcdHN5bWJvbDogR0FNRV9TWU1CT0xTLkNST1NTLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6IDIsXHJcblx0XHRuYW1lOiAnVmVyZUludGVkaW5nbGFwb3R1cicsXHJcblx0XHRyYXRpbmc6ICc4NTAnLFxyXG5cdFx0YXZhdGFyOiBhdmF0YXJTcmMyLFxyXG5cdFx0c3ltYm9sOiBHQU1FX1NZTUJPTFMuWkVSTyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiAzLFxyXG5cdFx0bmFtZTogJ0xhcmEnLFxyXG5cdFx0cmF0aW5nOiAnMTQ0MCcsXHJcblx0XHRhdmF0YXI6IGF2YXRhclNyYzMsXHJcblx0XHRzeW1ib2w6IEdBTUVfU1lNQk9MUy5UUklOR0xFLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6IDQsXHJcblx0XHRuYW1lOiAn0JTQvtC70LzQsNGC0L7QsicsXHJcblx0XHRyYXRpbmc6ICc3NjAnLFxyXG5cdFx0YXZhdGFyOiBhdmF0YXJTcmM0LFxyXG5cdFx0c3ltYm9sOiBHQU1FX1NZTUJPTFMuU1FVQVJFLFxyXG5cdH0sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBHYW1lSW5mbyA9ICh7IGNsYXNzTmFtZSwgcGxheWVyc0NvdW50IH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9e2Nsc3goXHJcblx0XHRcdFx0Y2xhc3NOYW1lLFxyXG5cdFx0XHRcdCdiZy13aGl0ZSByb3VuZGVkLTJ4bCBzaGFkb3ctbWQgcHgtOCBweS00IGdyaWQgZ3JpZC1jb2xzLTIganVzdGlmeS1iZXR3ZWVuIGdhcC0zJ1xyXG5cdFx0XHQpfVxyXG5cdFx0PlxyXG5cdFx0XHR7cGxheWVycy5zbGljZSgwLCBwbGF5ZXJzQ291bnQpLm1hcCgocGxheWVyLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHQ8UGxheWVySW5mb1xyXG5cdFx0XHRcdFx0XHRrZXk9e3BsYXllci5pZH1cclxuXHRcdFx0XHRcdFx0cGxheWVySW5mbz17cGxheWVyfVxyXG5cdFx0XHRcdFx0XHRpc1JpZ2h0PXtpbmRleCAlIDIgPT09IDF9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdClcclxuXHRcdFx0fSl9XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFBsYXllckluZm8oeyBwbGF5ZXJJbmZvLCBpc1JpZ2h0IH0pIHtcclxuXHRjb25zdCBbc2Vjb25kcywgc2V0U2Vjb25kc10gPSB1c2VTdGF0ZSg2NilcclxuXHRjb25zdCBtaW51dGVzU3RyaW5nID0gU3RyaW5nKE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKSkucGFkU3RhcnQoMiwgJzAnKVxyXG5cdGNvbnN0IHNlY29uZHNTdHJpbmcgPSBTdHJpbmcoc2Vjb25kcyAlIDYwKS5wYWRTdGFydCgyLCAnMCcpXHJcblxyXG5cdGNvbnN0IGlzRGFuZ2VyID0gc2Vjb25kcyA8IDEwXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGdhcC0zIGl0ZW1zLWNlbnRlcic+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbHN4KCdyZWxhdGl2ZScsIGlzUmlnaHQgJiYgJ29yZGVyLTMnKX0+XHJcblx0XHRcdFx0PFByb2ZpbGVcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT0ndy1bMTgwcHhdJ1xyXG5cdFx0XHRcdFx0bmFtZT17cGxheWVySW5mby5uYW1lfVxyXG5cdFx0XHRcdFx0cmF0aW5nPXtwbGF5ZXJJbmZvLnJhdGluZ31cclxuXHRcdFx0XHRcdGF2YXRhcj17cGxheWVySW5mby5hdmF0YXJ9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy01IGgtNSByb3VuZGVkLWZ1bGwgYmctd2hpdGUgc2hhZG93IGFic29sdXRlIC1sZWZ0LTEgLXRvcC0xIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJz5cclxuXHRcdFx0XHRcdDxHYW1lU3ltYm9sIHN5bWJvbD17cGxheWVySW5mby5zeW1ib2x9IC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbHN4KCdoLTYgdy1weCBiZy1zbGF0ZS0yMDAnLCBpc1JpZ2h0ICYmICdvcmRlci0yJyl9XHJcblx0XHRcdD48L2Rpdj5cclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xzeChcclxuXHRcdFx0XHRcdCd0ZXh0LXNsYXRlLTkwMCB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQnLFxyXG5cdFx0XHRcdFx0aXNSaWdodCAmJiAnb3JkZXItMSdcclxuXHRcdFx0XHQpfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0e21pbnV0ZXNTdHJpbmd9OntzZWNvbmRzU3RyaW5nfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG4iXSwibmFtZXMiOlsiY2xzeCIsIlByb2ZpbGUiLCJHQU1FX1NZTUJPTFMiLCJHYW1lU3ltYm9sIiwidXNlU3RhdGUiLCJhdmF0YXJTcmMxIiwiYXZhdGFyU3JjMyIsImF2YXRhclNyYzIiLCJhdmF0YXJTcmM0IiwicGxheWVycyIsImlkIiwibmFtZSIsInJhdGluZyIsImF2YXRhciIsInN5bWJvbCIsIkNST1NTIiwiWkVSTyIsIlRSSU5HTEUiLCJTUVVBUkUiLCJHYW1lSW5mbyIsImNsYXNzTmFtZSIsInBsYXllcnNDb3VudCIsImRpdiIsInNsaWNlIiwibWFwIiwicGxheWVyIiwiaW5kZXgiLCJQbGF5ZXJJbmZvIiwicGxheWVySW5mbyIsImlzUmlnaHQiLCJzZWNvbmRzIiwic2V0U2Vjb25kcyIsIm1pbnV0ZXNTdHJpbmciLCJTdHJpbmciLCJNYXRoIiwiZmxvb3IiLCJwYWRTdGFydCIsInNlY29uZHNTdHJpbmciLCJpc0RhbmdlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/game-info.jsx\n"));

/***/ })

});