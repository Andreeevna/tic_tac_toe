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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameInfo: function() { return /* binding */ GameInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile */ \"./components/profile/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-symbol */ \"./components/game/game-symbol.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _images_avatar1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/avatar1.png */ \"./components/game/images/avatar1.png\");\n/* harmony import */ var _images_avatar2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/avatar2.png */ \"./components/game/images/avatar2.png\");\n/* harmony import */ var _images_avatar3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/avatar3.png */ \"./components/game/images/avatar3.png\");\n/* harmony import */ var _images_avatar4_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/avatar4.png */ \"./components/game/images/avatar4.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst players = [\n    {\n        id: 1,\n        name: \"Paromonov\",\n        rating: \"1230\",\n        avatar: _images_avatar1_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.CROSS\n    },\n    {\n        id: 2,\n        name: \"VereIntedinglapotur\",\n        rating: \"850\",\n        avatar: _images_avatar3_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.ZERO\n    },\n    {\n        id: 3,\n        name: \"Lara\",\n        rating: \"1440\",\n        avatar: _images_avatar2_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.TRINGLE\n    },\n    {\n        id: 4,\n        name: \"Долматов\",\n        rating: \"760\",\n        avatar: _images_avatar4_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.SQUARE\n    }\n];\nconst GameInfo = (param)=>{\n    let { className, playersCount, currentMove, isWinner, onPlayerTimeOver } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 justify-between gap-3\"),\n        children: players.slice(0, playersCount).map((player, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerInfo, {\n                playerInfo: player,\n                isRight: index % 2 === 1,\n                onTimeOver: ()=>onPlayerTimeOver(),\n                isTimerRunning: currentMove === player.symbol && !isWinner\n            }, player.id, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 59,\n                columnNumber: 6\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n        lineNumber: 51,\n        columnNumber: 3\n    }, undefined);\n};\n_c = GameInfo;\nfunction PlayerInfo(param) {\n    let { playerInfo, isRight, isTimerRunning, onTimeOver } = param;\n    _s();\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(60);\n    const minutesString = String(Math.floor(seconds / 60)).padStart(2, \"0\");\n    const secondsString = String(seconds % 60).padStart(2, \"0\");\n    const isDanger = seconds < 10;\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        if (isTimerRunning) {\n            const interval = setInterval(()=>{\n                setSeconds((s)=>Math.max(s - 1, 0));\n            }, 1000);\n            return ()=>{\n                clearInterval(interval);\n                setSeconds(60);\n            };\n        }\n    }, [\n        isTimerRunning\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        if (seconds === 0) {\n            onTimeOver();\n        }\n    //eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        seconds\n    ]);\n    const getTimerColor = ()=>{\n        if (isTimerRunning) {\n            return isDanger ? \"text-orange-600\" : \"text-slate-900\";\n        }\n        return \"text-slate-200\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"relative\", isRight && \"order-3\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_profile__WEBPACK_IMPORTED_MODULE_2__.Profile, {\n                        className: \"w-[180px]\",\n                        name: playerInfo.name,\n                        rating: playerInfo.rating,\n                        avatar: playerInfo.avatar\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                        lineNumber: 109,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_4__.GameSymbol, {\n                            symbol: playerInfo.symbol\n                        }, void 0, false, {\n                            fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                            lineNumber: 116,\n                            columnNumber: 6\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                        lineNumber: 115,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 108,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"h-6 w-px bg-slate-200\", isRight && \"order-2\")\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 119,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"text-slate-900 text-lg font-semibold w-[60px]\", isRight && \"order-1\", getTimerColor()),\n                children: [\n                    minutesString,\n                    \":\",\n                    secondsString\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 122,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n        lineNumber: 107,\n        columnNumber: 3\n    }, this);\n}\n_s(PlayerInfo, \"7zmZLUER9Mv1b3cWo8CSTUbGm5g=\");\n_c1 = PlayerInfo;\nvar _c, _c1;\n$RefreshReg$(_c, \"GameInfo\");\n$RefreshReg$(_c1, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V2pCLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUd2Qyw4REFBQ1c7Z0JBQ0FMLFdBQVdyQixnREFBSUEsQ0FBQyx5QkFBeUJpQyxXQUFXOzs7Ozs7MEJBRXJELDhEQUFDUDtnQkFDQUwsV0FBV3JCLGdEQUFJQSxDQUNkLGlEQUNBaUMsV0FBVyxXQUNYaUI7O29CQUdBWjtvQkFBYztvQkFBRUs7Ozs7Ozs7Ozs7Ozs7QUFJckI7R0E3RFNaO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9nYW1lLWluZm8uanN4P2QwNDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcclxuaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gJy4uL3Byb2ZpbGUnXHJcbmltcG9ydCB7IEdBTUVfU1lNQk9MUyB9IGZyb20gJy4vY29uc3RhbnRzJ1xyXG5pbXBvcnQgeyBHYW1lU3ltYm9sIH0gZnJvbSAnLi9nYW1lLXN5bWJvbCdcclxuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF2YXRhclNyYzEgZnJvbSAnLi9pbWFnZXMvYXZhdGFyMS5wbmcnXHJcbmltcG9ydCBhdmF0YXJTcmMzIGZyb20gJy4vaW1hZ2VzL2F2YXRhcjIucG5nJ1xyXG5pbXBvcnQgYXZhdGFyU3JjMiBmcm9tICcuL2ltYWdlcy9hdmF0YXIzLnBuZydcclxuaW1wb3J0IGF2YXRhclNyYzQgZnJvbSAnLi9pbWFnZXMvYXZhdGFyNC5wbmcnXHJcblxyXG5jb25zdCBwbGF5ZXJzID0gW1xyXG5cdHtcclxuXHRcdGlkOiAxLFxyXG5cdFx0bmFtZTogJ1Bhcm9tb25vdicsXHJcblx0XHRyYXRpbmc6ICcxMjMwJyxcclxuXHRcdGF2YXRhcjogYXZhdGFyU3JjMSxcclxuXHRcdHN5bWJvbDogR0FNRV9TWU1CT0xTLkNST1NTLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6IDIsXHJcblx0XHRuYW1lOiAnVmVyZUludGVkaW5nbGFwb3R1cicsXHJcblx0XHRyYXRpbmc6ICc4NTAnLFxyXG5cdFx0YXZhdGFyOiBhdmF0YXJTcmMyLFxyXG5cdFx0c3ltYm9sOiBHQU1FX1NZTUJPTFMuWkVSTyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiAzLFxyXG5cdFx0bmFtZTogJ0xhcmEnLFxyXG5cdFx0cmF0aW5nOiAnMTQ0MCcsXHJcblx0XHRhdmF0YXI6IGF2YXRhclNyYzMsXHJcblx0XHRzeW1ib2w6IEdBTUVfU1lNQk9MUy5UUklOR0xFLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6IDQsXHJcblx0XHRuYW1lOiAn0JTQvtC70LzQsNGC0L7QsicsXHJcblx0XHRyYXRpbmc6ICc3NjAnLFxyXG5cdFx0YXZhdGFyOiBhdmF0YXJTcmM0LFxyXG5cdFx0c3ltYm9sOiBHQU1FX1NZTUJPTFMuU1FVQVJFLFxyXG5cdH0sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBHYW1lSW5mbyA9ICh7XHJcblx0Y2xhc3NOYW1lLFxyXG5cdHBsYXllcnNDb3VudCxcclxuXHRjdXJyZW50TW92ZSxcclxuXHRpc1dpbm5lcixcclxuXHRvblBsYXllclRpbWVPdmVyLFxyXG59KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPXtjbHN4KFxyXG5cdFx0XHRcdGNsYXNzTmFtZSxcclxuXHRcdFx0XHQnYmctd2hpdGUgcm91bmRlZC0yeGwgc2hhZG93LW1kIHB4LTggcHktNCBncmlkIGdyaWQtY29scy0yIGp1c3RpZnktYmV0d2VlbiBnYXAtMydcclxuXHRcdFx0KX1cclxuXHRcdD5cclxuXHRcdFx0e3BsYXllcnMuc2xpY2UoMCwgcGxheWVyc0NvdW50KS5tYXAoKHBsYXllciwgaW5kZXgpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0PFBsYXllckluZm9cclxuXHRcdFx0XHRcdFx0a2V5PXtwbGF5ZXIuaWR9XHJcblx0XHRcdFx0XHRcdHBsYXllckluZm89e3BsYXllcn1cclxuXHRcdFx0XHRcdFx0aXNSaWdodD17aW5kZXggJSAyID09PSAxfVxyXG5cdFx0XHRcdFx0XHRvblRpbWVPdmVyPXsoKSA9PiBvblBsYXllclRpbWVPdmVyKCl9XHJcblx0XHRcdFx0XHRcdGlzVGltZXJSdW5uaW5nPXtjdXJyZW50TW92ZSA9PT0gcGxheWVyLnN5bWJvbCAmJiAhaXNXaW5uZXJ9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdClcclxuXHRcdFx0fSl9XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFBsYXllckluZm8oeyBwbGF5ZXJJbmZvLCBpc1JpZ2h0LCBpc1RpbWVyUnVubmluZywgb25UaW1lT3ZlciB9KSB7XHJcblx0Y29uc3QgW3NlY29uZHMsIHNldFNlY29uZHNdID0gdXNlU3RhdGUoNjApXHJcblxyXG5cdGNvbnN0IG1pbnV0ZXNTdHJpbmcgPSBTdHJpbmcoTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApKS5wYWRTdGFydCgyLCAnMCcpXHJcblx0Y29uc3Qgc2Vjb25kc1N0cmluZyA9IFN0cmluZyhzZWNvbmRzICUgNjApLnBhZFN0YXJ0KDIsICcwJylcclxuXHRjb25zdCBpc0RhbmdlciA9IHNlY29uZHMgPCAxMFxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKGlzVGltZXJSdW5uaW5nKSB7XHJcblx0XHRcdGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRcdHNldFNlY29uZHMocyA9PiBNYXRoLm1heChzIC0gMSwgMCkpXHJcblx0XHRcdH0sIDEwMDApXHJcblxyXG5cdFx0XHRyZXR1cm4gKCkgPT4ge1xyXG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXHJcblx0XHRcdFx0c2V0U2Vjb25kcyg2MClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sIFtpc1RpbWVyUnVubmluZ10pXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAoc2Vjb25kcyA9PT0gMCkge1xyXG5cdFx0XHRvblRpbWVPdmVyKClcclxuXHRcdH1cclxuXHRcdC8vZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG5cdH0sIFtzZWNvbmRzXSlcclxuXHJcblx0Y29uc3QgZ2V0VGltZXJDb2xvciA9ICgpID0+IHtcclxuXHRcdGlmIChpc1RpbWVyUnVubmluZykge1xyXG5cdFx0XHRyZXR1cm4gaXNEYW5nZXIgPyAndGV4dC1vcmFuZ2UtNjAwJyA6ICd0ZXh0LXNsYXRlLTkwMCdcclxuXHRcdH1cclxuXHRcdHJldHVybiAndGV4dC1zbGF0ZS0yMDAnXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZ2FwLTMgaXRlbXMtY2VudGVyJz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2Nsc3goJ3JlbGF0aXZlJywgaXNSaWdodCAmJiAnb3JkZXItMycpfT5cclxuXHRcdFx0XHQ8UHJvZmlsZVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSd3LVsxODBweF0nXHJcblx0XHRcdFx0XHRuYW1lPXtwbGF5ZXJJbmZvLm5hbWV9XHJcblx0XHRcdFx0XHRyYXRpbmc9e3BsYXllckluZm8ucmF0aW5nfVxyXG5cdFx0XHRcdFx0YXZhdGFyPXtwbGF5ZXJJbmZvLmF2YXRhcn1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTUgaC01IHJvdW5kZWQtZnVsbCBiZy13aGl0ZSBzaGFkb3cgYWJzb2x1dGUgLWxlZnQtMSAtdG9wLTEgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInPlxyXG5cdFx0XHRcdFx0PEdhbWVTeW1ib2wgc3ltYm9sPXtwbGF5ZXJJbmZvLnN5bWJvbH0gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRjbGFzc05hbWU9e2Nsc3goJ2gtNiB3LXB4IGJnLXNsYXRlLTIwMCcsIGlzUmlnaHQgJiYgJ29yZGVyLTInKX1cclxuXHRcdFx0PjwvZGl2PlxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbHN4KFxyXG5cdFx0XHRcdFx0J3RleHQtc2xhdGUtOTAwIHRleHQtbGcgZm9udC1zZW1pYm9sZCB3LVs2MHB4XScsXHJcblx0XHRcdFx0XHRpc1JpZ2h0ICYmICdvcmRlci0xJyxcclxuXHRcdFx0XHRcdGdldFRpbWVyQ29sb3IoKVxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7bWludXRlc1N0cmluZ306e3NlY29uZHNTdHJpbmd9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjbHN4IiwiUHJvZmlsZSIsIkdBTUVfU1lNQk9MUyIsIkdhbWVTeW1ib2wiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF2YXRhclNyYzEiLCJhdmF0YXJTcmMzIiwiYXZhdGFyU3JjMiIsImF2YXRhclNyYzQiLCJwbGF5ZXJzIiwiaWQiLCJuYW1lIiwicmF0aW5nIiwiYXZhdGFyIiwic3ltYm9sIiwiQ1JPU1MiLCJaRVJPIiwiVFJJTkdMRSIsIlNRVUFSRSIsIkdhbWVJbmZvIiwiY2xhc3NOYW1lIiwicGxheWVyc0NvdW50IiwiY3VycmVudE1vdmUiLCJpc1dpbm5lciIsIm9uUGxheWVyVGltZU92ZXIiLCJkaXYiLCJzbGljZSIsIm1hcCIsInBsYXllciIsImluZGV4IiwiUGxheWVySW5mbyIsInBsYXllckluZm8iLCJpc1JpZ2h0Iiwib25UaW1lT3ZlciIsImlzVGltZXJSdW5uaW5nIiwic2Vjb25kcyIsInNldFNlY29uZHMiLCJtaW51dGVzU3RyaW5nIiwiU3RyaW5nIiwiTWF0aCIsImZsb29yIiwicGFkU3RhcnQiLCJzZWNvbmRzU3RyaW5nIiwiaXNEYW5nZXIiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwicyIsIm1heCIsImNsZWFySW50ZXJ2YWwiLCJnZXRUaW1lckNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/game-info.jsx\n"));

/***/ })

});