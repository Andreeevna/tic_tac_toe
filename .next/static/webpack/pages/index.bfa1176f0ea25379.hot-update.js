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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameInfo: function() { return /* binding */ GameInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile */ \"./components/profile/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-symbol */ \"./components/game/game-symbol.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _images_avatar1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/avatar1.png */ \"./components/game/images/avatar1.png\");\n/* harmony import */ var _images_avatar2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/avatar2.png */ \"./components/game/images/avatar2.png\");\n/* harmony import */ var _images_avatar3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/avatar3.png */ \"./components/game/images/avatar3.png\");\n/* harmony import */ var _images_avatar4_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/avatar4.png */ \"./components/game/images/avatar4.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst players = [\n    {\n        id: 1,\n        name: \"Paromonov\",\n        rating: \"1230\",\n        avatar: _images_avatar1_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.CROSS\n    },\n    {\n        id: 2,\n        name: \"VereIntedinglapotur\",\n        rating: \"850\",\n        avatar: _images_avatar3_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.ZERO\n    },\n    {\n        id: 3,\n        name: \"Lara\",\n        rating: \"1440\",\n        avatar: _images_avatar2_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.TRINGLE\n    },\n    {\n        id: 4,\n        name: \"Долматов\",\n        rating: \"760\",\n        avatar: _images_avatar4_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.SQUARE\n    }\n];\nconst GameInfo = (param)=>{\n    let { className, playersCount, currentMove, isWinner, onPlayerTimeOver } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 justify-between gap-3\"),\n        children: players.slice(0, playersCount).map((player, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerInfo, {\n                playerInfo: player,\n                isRight: index % 2 === 1,\n                onTimeOver: ()=>onPlayerTimeOver(player.symbol),\n                isTimerRunning: currentMove === player.symbol && !isWinner\n            }, player.id, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 59,\n                columnNumber: 6\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n        lineNumber: 51,\n        columnNumber: 3\n    }, undefined);\n};\n_c = GameInfo;\nfunction PlayerInfo(param) {\n    let { playerInfo, isRight, isTimerRunning, onTimeOver } = param;\n    _s();\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(6);\n    const minutesString = String(Math.floor(seconds / 60)).padStart(2, \"0\");\n    const secondsString = String(seconds % 60).padStart(2, \"0\");\n    const isDanger = seconds < 10;\n    console.log(isDanger);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        if (isTimerRunning) {\n            const interval = setInterval(()=>{\n                setSeconds((s)=>Math.max(s - 1, 0));\n            }, 1000);\n            return ()=>{\n                clearInterval(interval);\n                setSeconds(6);\n            };\n        }\n    }, [\n        isTimerRunning\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        if (seconds === 0) {\n            onTimeOver();\n        }\n    //eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        seconds\n    ]);\n    const getTimerColor = ()=>{\n        if (isTimerRunning) {\n            return isDanger ? \"text-orange-600\" : \"text-slate-900\";\n        }\n        return \"text-slate-200\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"relative\", isRight && \"order-3\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_profile__WEBPACK_IMPORTED_MODULE_2__.Profile, {\n                        className: \"w-[180px]\",\n                        name: playerInfo.name,\n                        rating: playerInfo.rating,\n                        avatar: playerInfo.avatar\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                        lineNumber: 110,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_4__.GameSymbol, {\n                            symbol: playerInfo.symbol\n                        }, void 0, false, {\n                            fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                            lineNumber: 117,\n                            columnNumber: 6\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                        lineNumber: 116,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 109,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"h-6 w-px bg-slate-200\", isRight && \"order-2\")\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 120,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\" text-lg font-semibold w-[60px]\", isRight && \"order-1\", \"text-orange-600\"),\n                children: [\n                    minutesString,\n                    \":\",\n                    secondsString\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 123,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n        lineNumber: 108,\n        columnNumber: 3\n    }, this);\n}\n_s(PlayerInfo, \"ShZvLRLEMQwm9SWepdIEgTqM9oE=\");\n_c1 = PlayerInfo;\nvar _c, _c1;\n$RefreshReg$(_c, \"GameInfo\");\n$RefreshReg$(_c1, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TCxXQUFVO2tDQUNkLDRFQUFDbEIsb0RBQVVBOzRCQUFDWSxRQUFRaUIsV0FBV2pCLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUd2Qyw4REFBQ1c7Z0JBQ0FMLFdBQVdyQixnREFBSUEsQ0FBQyx5QkFBeUJpQyxXQUFXOzs7Ozs7MEJBRXJELDhEQUFDUDtnQkFDQUwsV0FBV3JCLGdEQUFJQSxDQUNkLG1DQUNBaUMsV0FBVyxXQUNYOztvQkFHQUs7b0JBQWM7b0JBQUVLOzs7Ozs7Ozs7Ozs7O0FBSXJCO0dBOURTWjtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1pbmZvLmpzeD9kMDQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXHJcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tICcuLi9wcm9maWxlJ1xyXG5pbXBvcnQgeyBHQU1FX1NZTUJPTFMgfSBmcm9tICcuL2NvbnN0YW50cydcclxuaW1wb3J0IHsgR2FtZVN5bWJvbCB9IGZyb20gJy4vZ2FtZS1zeW1ib2wnXHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBhdmF0YXJTcmMxIGZyb20gJy4vaW1hZ2VzL2F2YXRhcjEucG5nJ1xyXG5pbXBvcnQgYXZhdGFyU3JjMyBmcm9tICcuL2ltYWdlcy9hdmF0YXIyLnBuZydcclxuaW1wb3J0IGF2YXRhclNyYzIgZnJvbSAnLi9pbWFnZXMvYXZhdGFyMy5wbmcnXHJcbmltcG9ydCBhdmF0YXJTcmM0IGZyb20gJy4vaW1hZ2VzL2F2YXRhcjQucG5nJ1xyXG5cclxuY29uc3QgcGxheWVycyA9IFtcclxuXHR7XHJcblx0XHRpZDogMSxcclxuXHRcdG5hbWU6ICdQYXJvbW9ub3YnLFxyXG5cdFx0cmF0aW5nOiAnMTIzMCcsXHJcblx0XHRhdmF0YXI6IGF2YXRhclNyYzEsXHJcblx0XHRzeW1ib2w6IEdBTUVfU1lNQk9MUy5DUk9TUyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiAyLFxyXG5cdFx0bmFtZTogJ1ZlcmVJbnRlZGluZ2xhcG90dXInLFxyXG5cdFx0cmF0aW5nOiAnODUwJyxcclxuXHRcdGF2YXRhcjogYXZhdGFyU3JjMixcclxuXHRcdHN5bWJvbDogR0FNRV9TWU1CT0xTLlpFUk8sXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogMyxcclxuXHRcdG5hbWU6ICdMYXJhJyxcclxuXHRcdHJhdGluZzogJzE0NDAnLFxyXG5cdFx0YXZhdGFyOiBhdmF0YXJTcmMzLFxyXG5cdFx0c3ltYm9sOiBHQU1FX1NZTUJPTFMuVFJJTkdMRSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiA0LFxyXG5cdFx0bmFtZTogJ9CU0L7Qu9C80LDRgtC+0LInLFxyXG5cdFx0cmF0aW5nOiAnNzYwJyxcclxuXHRcdGF2YXRhcjogYXZhdGFyU3JjNCxcclxuXHRcdHN5bWJvbDogR0FNRV9TWU1CT0xTLlNRVUFSRSxcclxuXHR9LFxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgR2FtZUluZm8gPSAoe1xyXG5cdGNsYXNzTmFtZSxcclxuXHRwbGF5ZXJzQ291bnQsXHJcblx0Y3VycmVudE1vdmUsXHJcblx0aXNXaW5uZXIsXHJcblx0b25QbGF5ZXJUaW1lT3ZlcixcclxufSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT17Y2xzeChcclxuXHRcdFx0XHRjbGFzc05hbWUsXHJcblx0XHRcdFx0J2JnLXdoaXRlIHJvdW5kZWQtMnhsIHNoYWRvdy1tZCBweC04IHB5LTQgZ3JpZCBncmlkLWNvbHMtMiBqdXN0aWZ5LWJldHdlZW4gZ2FwLTMnXHJcblx0XHRcdCl9XHJcblx0XHQ+XHJcblx0XHRcdHtwbGF5ZXJzLnNsaWNlKDAsIHBsYXllcnNDb3VudCkubWFwKChwbGF5ZXIsIGluZGV4KSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdDxQbGF5ZXJJbmZvXHJcblx0XHRcdFx0XHRcdGtleT17cGxheWVyLmlkfVxyXG5cdFx0XHRcdFx0XHRwbGF5ZXJJbmZvPXtwbGF5ZXJ9XHJcblx0XHRcdFx0XHRcdGlzUmlnaHQ9e2luZGV4ICUgMiA9PT0gMX1cclxuXHRcdFx0XHRcdFx0b25UaW1lT3Zlcj17KCkgPT4gb25QbGF5ZXJUaW1lT3ZlcihwbGF5ZXIuc3ltYm9sKX1cclxuXHRcdFx0XHRcdFx0aXNUaW1lclJ1bm5pbmc9e2N1cnJlbnRNb3ZlID09PSBwbGF5ZXIuc3ltYm9sICYmICFpc1dpbm5lcn1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0KVxyXG5cdFx0XHR9KX1cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZnVuY3Rpb24gUGxheWVySW5mbyh7IHBsYXllckluZm8sIGlzUmlnaHQsIGlzVGltZXJSdW5uaW5nLCBvblRpbWVPdmVyIH0pIHtcclxuXHRjb25zdCBbc2Vjb25kcywgc2V0U2Vjb25kc10gPSB1c2VTdGF0ZSg2KVxyXG5cclxuXHRjb25zdCBtaW51dGVzU3RyaW5nID0gU3RyaW5nKE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKSkucGFkU3RhcnQoMiwgJzAnKVxyXG5cdGNvbnN0IHNlY29uZHNTdHJpbmcgPSBTdHJpbmcoc2Vjb25kcyAlIDYwKS5wYWRTdGFydCgyLCAnMCcpXHJcblx0Y29uc3QgaXNEYW5nZXIgPSBzZWNvbmRzIDwgMTBcclxuXHRjb25zb2xlLmxvZyhpc0RhbmdlcilcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmIChpc1RpbWVyUnVubmluZykge1xyXG5cdFx0XHRjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0XHRzZXRTZWNvbmRzKHMgPT4gTWF0aC5tYXgocyAtIDEsIDApKVxyXG5cdFx0XHR9LCAxMDAwKVxyXG5cclxuXHRcdFx0cmV0dXJuICgpID0+IHtcclxuXHRcdFx0XHRjbGVhckludGVydmFsKGludGVydmFsKVxyXG5cdFx0XHRcdHNldFNlY29uZHMoNilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sIFtpc1RpbWVyUnVubmluZ10pXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAoc2Vjb25kcyA9PT0gMCkge1xyXG5cdFx0XHRvblRpbWVPdmVyKClcclxuXHRcdH1cclxuXHRcdC8vZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG5cdH0sIFtzZWNvbmRzXSlcclxuXHJcblx0Y29uc3QgZ2V0VGltZXJDb2xvciA9ICgpID0+IHtcclxuXHRcdGlmIChpc1RpbWVyUnVubmluZykge1xyXG5cdFx0XHRyZXR1cm4gaXNEYW5nZXIgPyAndGV4dC1vcmFuZ2UtNjAwJyA6ICd0ZXh0LXNsYXRlLTkwMCdcclxuXHRcdH1cclxuXHRcdHJldHVybiAndGV4dC1zbGF0ZS0yMDAnXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZ2FwLTMgaXRlbXMtY2VudGVyJz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2Nsc3goJ3JlbGF0aXZlJywgaXNSaWdodCAmJiAnb3JkZXItMycpfT5cclxuXHRcdFx0XHQ8UHJvZmlsZVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSd3LVsxODBweF0nXHJcblx0XHRcdFx0XHRuYW1lPXtwbGF5ZXJJbmZvLm5hbWV9XHJcblx0XHRcdFx0XHRyYXRpbmc9e3BsYXllckluZm8ucmF0aW5nfVxyXG5cdFx0XHRcdFx0YXZhdGFyPXtwbGF5ZXJJbmZvLmF2YXRhcn1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTUgaC01IHJvdW5kZWQtZnVsbCBiZy13aGl0ZSBzaGFkb3cgYWJzb2x1dGUgLWxlZnQtMSAtdG9wLTEgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInPlxyXG5cdFx0XHRcdFx0PEdhbWVTeW1ib2wgc3ltYm9sPXtwbGF5ZXJJbmZvLnN5bWJvbH0gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRjbGFzc05hbWU9e2Nsc3goJ2gtNiB3LXB4IGJnLXNsYXRlLTIwMCcsIGlzUmlnaHQgJiYgJ29yZGVyLTInKX1cclxuXHRcdFx0PjwvZGl2PlxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbHN4KFxyXG5cdFx0XHRcdFx0JyB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdy1bNjBweF0nLFxyXG5cdFx0XHRcdFx0aXNSaWdodCAmJiAnb3JkZXItMScsXHJcblx0XHRcdFx0XHQndGV4dC1vcmFuZ2UtNjAwJ1xyXG5cdFx0XHRcdCl9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7bWludXRlc1N0cmluZ306e3NlY29uZHNTdHJpbmd9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjbHN4IiwiUHJvZmlsZSIsIkdBTUVfU1lNQk9MUyIsIkdhbWVTeW1ib2wiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF2YXRhclNyYzEiLCJhdmF0YXJTcmMzIiwiYXZhdGFyU3JjMiIsImF2YXRhclNyYzQiLCJwbGF5ZXJzIiwiaWQiLCJuYW1lIiwicmF0aW5nIiwiYXZhdGFyIiwic3ltYm9sIiwiQ1JPU1MiLCJaRVJPIiwiVFJJTkdMRSIsIlNRVUFSRSIsIkdhbWVJbmZvIiwiY2xhc3NOYW1lIiwicGxheWVyc0NvdW50IiwiY3VycmVudE1vdmUiLCJpc1dpbm5lciIsIm9uUGxheWVyVGltZU92ZXIiLCJkaXYiLCJzbGljZSIsIm1hcCIsInBsYXllciIsImluZGV4IiwiUGxheWVySW5mbyIsInBsYXllckluZm8iLCJpc1JpZ2h0Iiwib25UaW1lT3ZlciIsImlzVGltZXJSdW5uaW5nIiwic2Vjb25kcyIsInNldFNlY29uZHMiLCJtaW51dGVzU3RyaW5nIiwiU3RyaW5nIiwiTWF0aCIsImZsb29yIiwicGFkU3RhcnQiLCJzZWNvbmRzU3RyaW5nIiwiaXNEYW5nZXIiLCJjb25zb2xlIiwibG9nIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInMiLCJtYXgiLCJjbGVhckludGVydmFsIiwiZ2V0VGltZXJDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/game-info.jsx\n"));

/***/ })

});