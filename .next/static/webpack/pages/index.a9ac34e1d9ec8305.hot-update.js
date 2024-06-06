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

/***/ "./components/game/game-field.jsx":
/*!****************************************!*\
  !*** ./components/game/game-field.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../uikit/ui-button */ \"./components/uikit/ui-button.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-symbol */ \"./components/game/game-symbol.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst MOVE_ORDER = [\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.CROSS,\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.ZERO,\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.TRINGLE,\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.SQUARE\n];\nfunction getNextMove(currentMove) {\n    const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;\n    var _MOVE_ORDER_nextMoveIndex;\n    return (_MOVE_ORDER_nextMoveIndex = MOVE_ORDER[nextMoveIndex]) !== null && _MOVE_ORDER_nextMoveIndex !== void 0 ? _MOVE_ORDER_nextMoveIndex : MOVE_ORDER[0];\n}\nconst GameField = (param)=>{\n    let { className } = param;\n    _s();\n    const [gameState, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentMove: _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.ZERO\n        }));\n    const currentMove = gameState.currentMove;\n    const nextMove = getNextMove(currentMove);\n    const handleCellClick = (index)=>{\n        setCurrentMove((lastCurrentMove)=>getNextMove(lastCurrentMove));\n        setSells((lastSells)=>{});\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameFieldLayout, {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {\n                currentMove: currentMove,\n                nextMove: nextMove,\n                actions: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_3__.UIbutton, {\n                            size: \"md\",\n                            variant: \"primary\",\n                            children: \"Ничья\"\n                        }, void 0, false, void 0, void 0),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_3__.UIbutton, {\n                            size: \"md\",\n                            variant: \"outline\",\n                            children: \"Сдаться\"\n                        }, void 0, false, void 0, void 0)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 36,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameGrid, {\n                children: cells.map((symbol, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {\n                        onClick: ()=>handleCellClick(i),\n                        children: symbol && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_5__.GameSymbol, {\n                            className: \"w-5 h-5\",\n                            symbol: symbol\n                        }, void 0, false, {\n                            fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 19\n                        }, undefined)\n                    }, i, false, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 7\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 50,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 35,\n        columnNumber: 3\n    }, undefined);\n};\n_s(GameField, \"AbR/4pYCXsvB6kKgeZnPUains6c=\");\n_c = GameField;\nfunction GameCell(param) {\n    let { children, onClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: onClick,\n        className: \"border border-slate-200 -ml-px -mt-px flex items-center justify-center\",\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 65,\n        columnNumber: 3\n    }, this);\n}\n_c1 = GameCell;\nfunction GameFieldLayout(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 pt-5 pb-7\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 76,\n        columnNumber: 3\n    }, this);\n}\n_c2 = GameFieldLayout;\nfunction GameMoveInfo(param) {\n    let { actions, currentMove, nextMove } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xl leading-tight font-semibold\",\n                        children: [\n                            \"Ход: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_5__.GameSymbol, {\n                                symbol: currentMove,\n                                className: \"w-5 h-5\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xs leading-tight text-slate-400\",\n                        children: [\n                            \"Следующий:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_5__.GameSymbol, {\n                                symbol: nextMove,\n                                className: \"w-3 h-3\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 96,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 94,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 90,\n                columnNumber: 4\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 89,\n        columnNumber: 3\n    }, this);\n}\n_c3 = GameMoveInfo;\nfunction GameGrid(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3\",\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 106,\n        columnNumber: 3\n    }, this);\n}\n_c4 = GameGrid;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameCell\");\n$RefreshReg$(_c2, \"GameFieldLayout\");\n$RefreshReg$(_c3, \"GameMoveInfo\");\n$RefreshReg$(_c4, \"GameGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNFO1FBQUkxQixXQUFVO2tCQUNid0I7Ozs7OztBQUdKO01BTlNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9nYW1lLWZpZWxkLmpzeD9jNjAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFVJYnV0dG9uIH0gZnJvbSAnLi4vdWlraXQvdWktYnV0dG9uJ1xyXG5pbXBvcnQgeyBHQU1FX1NZTUJPTFMgfSBmcm9tICcuL2NvbnN0YW50cydcclxuaW1wb3J0IHsgR2FtZVN5bWJvbCB9IGZyb20gJy4vZ2FtZS1zeW1ib2wnXHJcblxyXG5jb25zdCBNT1ZFX09SREVSID0gW1xyXG5cdEdBTUVfU1lNQk9MUy5DUk9TUyxcclxuXHRHQU1FX1NZTUJPTFMuWkVSTyxcclxuXHRHQU1FX1NZTUJPTFMuVFJJTkdMRSxcclxuXHRHQU1FX1NZTUJPTFMuU1FVQVJFLFxyXG5dXHJcblxyXG5mdW5jdGlvbiBnZXROZXh0TW92ZShjdXJyZW50TW92ZSkge1xyXG5cdGNvbnN0IG5leHRNb3ZlSW5kZXggPSBNT1ZFX09SREVSLmluZGV4T2YoY3VycmVudE1vdmUpICsgMVxyXG5cdHJldHVybiBNT1ZFX09SREVSW25leHRNb3ZlSW5kZXhdID8/IE1PVkVfT1JERVJbMF1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdhbWVGaWVsZCA9ICh7IGNsYXNzTmFtZSB9KSA9PiB7XHJcblx0Y29uc3QgW2dhbWVTdGF0ZSwgc2V0R2FtZVN0YXRlXSA9IHVzZVN0YXRlKCgpID0+ICh7XHJcblx0XHRjZWxsczogbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCksXHJcblx0XHRjdXJyZW50TW92ZTogR0FNRV9TWU1CT0xTLlpFUk8sXHJcblx0fSkpXHJcblxyXG5cdGNvbnN0IGN1cnJlbnRNb3ZlID0gZ2FtZVN0YXRlLmN1cnJlbnRNb3ZlXHJcblxyXG5cdGNvbnN0IG5leHRNb3ZlID0gZ2V0TmV4dE1vdmUoY3VycmVudE1vdmUpXHJcblxyXG5cdGNvbnN0IGhhbmRsZUNlbGxDbGljayA9IGluZGV4ID0+IHtcclxuXHRcdHNldEN1cnJlbnRNb3ZlKGxhc3RDdXJyZW50TW92ZSA9PiBnZXROZXh0TW92ZShsYXN0Q3VycmVudE1vdmUpKVxyXG5cdFx0c2V0U2VsbHMobGFzdFNlbGxzID0+IHt9KVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxHYW1lRmllbGRMYXlvdXQgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG5cdFx0XHQ8R2FtZU1vdmVJbmZvXHJcblx0XHRcdFx0Y3VycmVudE1vdmU9e2N1cnJlbnRNb3ZlfVxyXG5cdFx0XHRcdG5leHRNb3ZlPXtuZXh0TW92ZX1cclxuXHRcdFx0XHRhY3Rpb25zPXtcclxuXHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdDxVSWJ1dHRvbiBzaXplPSdtZCcgdmFyaWFudD0ncHJpbWFyeSc+XHJcblx0XHRcdFx0XHRcdFx00J3QuNGH0YzRj1xyXG5cdFx0XHRcdFx0XHQ8L1VJYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8VUlidXR0b24gc2l6ZT0nbWQnIHZhcmlhbnQ9J291dGxpbmUnPlxyXG5cdFx0XHRcdFx0XHRcdNCh0LTQsNGC0YzRgdGPXHJcblx0XHRcdFx0XHRcdDwvVUlidXR0b24+XHJcblx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHR9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxHYW1lR3JpZD5cclxuXHRcdFx0XHR7Y2VsbHMubWFwKChzeW1ib2wsIGkpID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdDxHYW1lQ2VsbCBrZXk9e2l9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUNlbGxDbGljayhpKX0+XHJcblx0XHRcdFx0XHRcdFx0e3N5bWJvbCAmJiA8R2FtZVN5bWJvbCBjbGFzc05hbWU9J3ctNSBoLTUnIHN5bWJvbD17c3ltYm9sfSAvPn1cclxuXHRcdFx0XHRcdFx0PC9HYW1lQ2VsbD5cclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHR9KX1cclxuXHRcdFx0PC9HYW1lR3JpZD5cclxuXHRcdDwvR2FtZUZpZWxkTGF5b3V0PlxyXG5cdClcclxufVxyXG5cclxuZnVuY3Rpb24gR2FtZUNlbGwoeyBjaGlsZHJlbiwgb25DbGljayB9KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxidXR0b25cclxuXHRcdFx0b25DbGljaz17b25DbGlja31cclxuXHRcdFx0Y2xhc3NOYW1lPSdib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCAtbWwtcHggLW10LXB4IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJ1xyXG5cdFx0PlxyXG5cdFx0XHR7Y2hpbGRyZW59XHJcblx0XHQ8L2J1dHRvbj5cclxuXHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdhbWVGaWVsZExheW91dCh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT17Y2xzeChcclxuXHRcdFx0XHRjbGFzc05hbWUsXHJcblx0XHRcdFx0J2JnLXdoaXRlIHJvdW5kZWQtMnhsIHNoYWRvdy1tZCBweC04IHB0LTUgcGItNydcclxuXHRcdFx0KX1cclxuXHRcdD5cclxuXHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBHYW1lTW92ZUluZm8oeyBhY3Rpb25zLCBjdXJyZW50TW92ZSwgbmV4dE1vdmUgfSkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtMyBpdGVtcy1jZW50ZXInPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQteGwgbGVhZGluZy10aWdodCBmb250LXNlbWlib2xkJz5cclxuXHRcdFx0XHRcdNCl0L7QtDogPEdhbWVTeW1ib2wgc3ltYm9sPXtjdXJyZW50TW92ZX0gY2xhc3NOYW1lPXsndy01IGgtNSd9IC8+eycgJ31cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC14cyBsZWFkaW5nLXRpZ2h0IHRleHQtc2xhdGUtNDAwJz5cclxuXHRcdFx0XHRcdNCh0LvQtdC00YPRjtGJ0LjQuTpcclxuXHRcdFx0XHRcdDxHYW1lU3ltYm9sIHN5bWJvbD17bmV4dE1vdmV9IGNsYXNzTmFtZT17J3ctMyBoLTMnfSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0e2FjdGlvbnN9XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdhbWVHcmlkKHsgY2hpbGRyZW4gfSkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtW3JlcGVhdCgxOSxfMzBweCldIGdyaWQtcm93cy1bcmVwZWF0KDE5LF8zMHB4KV0gcGwtcHggcHQtcHggbXQtMyc+XHJcblx0XHRcdHtjaGlsZHJlbn1cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG4iXSwibmFtZXMiOlsiY2xzeCIsInVzZVN0YXRlIiwiVUlidXR0b24iLCJHQU1FX1NZTUJPTFMiLCJHYW1lU3ltYm9sIiwiTU9WRV9PUkRFUiIsIkNST1NTIiwiWkVSTyIsIlRSSU5HTEUiLCJTUVVBUkUiLCJnZXROZXh0TW92ZSIsImN1cnJlbnRNb3ZlIiwibmV4dE1vdmVJbmRleCIsImluZGV4T2YiLCJHYW1lRmllbGQiLCJjbGFzc05hbWUiLCJnYW1lU3RhdGUiLCJzZXRHYW1lU3RhdGUiLCJjZWxscyIsIkFycmF5IiwiZmlsbCIsIm5leHRNb3ZlIiwiaGFuZGxlQ2VsbENsaWNrIiwiaW5kZXgiLCJzZXRDdXJyZW50TW92ZSIsImxhc3RDdXJyZW50TW92ZSIsInNldFNlbGxzIiwibGFzdFNlbGxzIiwiR2FtZUZpZWxkTGF5b3V0IiwiR2FtZU1vdmVJbmZvIiwiYWN0aW9ucyIsInNpemUiLCJ2YXJpYW50IiwiR2FtZUdyaWQiLCJtYXAiLCJzeW1ib2wiLCJpIiwiR2FtZUNlbGwiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJidXR0b24iLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/game-field.jsx\n"));

/***/ })

});