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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../uikit/ui-button */ \"./components/uikit/ui-button.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-symbol */ \"./components/game/game-symbol.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst MOVE_ORDER = [\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.CROSS,\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.ZERO,\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.TRINGLE,\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.SQUARE\n];\nfunction getNextMove(currentMove) {\n    const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;\n    var _MOVE_ORDER_nextMoveIndex;\n    return (_MOVE_ORDER_nextMoveIndex = MOVE_ORDER[nextMoveIndex]) !== null && _MOVE_ORDER_nextMoveIndex !== void 0 ? _MOVE_ORDER_nextMoveIndex : MOVE_ORDER[0];\n}\nconst GameField = (param)=>{\n    let { className } = param;\n    _s();\n    const [cells, setSells] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>new Array(19 * 19).fill(null));\n    const [currentMove, setCurrentMove] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.ZERO);\n    const nextMove = getNextMove(currentMove);\n    const handleCellClick = (index)=>{\n        setCurrentMove((lastCurrentMove)=>getNextMove(lastCurrentMove));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameFieldLayout, {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {\n                currentMove: currentMove,\n                nextMove: nextMove,\n                actions: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_3__.UIbutton, {\n                            size: \"md\",\n                            variant: \"primary\",\n                            children: \"Ничья\"\n                        }, void 0, false, void 0, void 0),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_3__.UIbutton, {\n                            size: \"md\",\n                            variant: \"outline\",\n                            children: \"Сдаться\"\n                        }, void 0, false, void 0, void 0)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 31,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameGrid, {\n                children: cells.map((symbol, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {\n                        onClick: ()=>handleCellClick(i),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_5__.GameSymbol, {\n                            className: \"w-5 h-5\",\n                            symbol: symbol\n                        }, void 0, false, {\n                            fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 8\n                        }, undefined)\n                    }, i, false, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 7\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 45,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 30,\n        columnNumber: 3\n    }, undefined);\n};\n_s(GameField, \"2eCe4TiS8GDxzV3gi7yuGbvSYwo=\");\n_c = GameField;\nfunction GameCell(param) {\n    let { children, onClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: onClick,\n        className: \"border border-slate-200 -ml-px -mt-px flex items-center justify-center\",\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 60,\n        columnNumber: 3\n    }, this);\n}\n_c1 = GameCell;\nfunction GameFieldLayout(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 pt-5 pb-7\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 71,\n        columnNumber: 3\n    }, this);\n}\n_c2 = GameFieldLayout;\nfunction GameMoveInfo(param) {\n    let { actions, currentMove, nextMove } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xl leading-tight font-semibold\",\n                        children: [\n                            \"Ход: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_5__.GameSymbol, {\n                                symbol: currentMove,\n                                className: \"w-5 h-5\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xs leading-tight text-slate-400\",\n                        children: [\n                            \"Следующий:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_5__.GameSymbol, {\n                                symbol: nextMove,\n                                className: \"w-3 h-3\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 91,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 89,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 85,\n                columnNumber: 4\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 84,\n        columnNumber: 3\n    }, this);\n}\n_c3 = GameMoveInfo;\nfunction GameGrid(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3\",\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 101,\n        columnNumber: 3\n    }, this);\n}\n_c4 = GameGrid;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameCell\");\n$RefreshReg$(_c2, \"GameFieldLayout\");\n$RefreshReg$(_c3, \"GameMoveInfo\");\n$RefreshReg$(_c4, \"GameGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1maWVsZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFDUztBQUNhO0FBQ0g7QUFDQTtBQUUxQyxNQUFNSyxhQUFhO0lBQ2xCRixvREFBWUEsQ0FBQ0csS0FBSztJQUNsQkgsb0RBQVlBLENBQUNJLElBQUk7SUFDakJKLG9EQUFZQSxDQUFDSyxPQUFPO0lBQ3BCTCxvREFBWUEsQ0FBQ00sTUFBTTtDQUNuQjtBQUVELFNBQVNDLFlBQVlDLFdBQVc7SUFDL0IsTUFBTUMsZ0JBQWdCUCxXQUFXUSxPQUFPLENBQUNGLGVBQWU7UUFDakROO0lBQVAsT0FBT0EsQ0FBQUEsNEJBQUFBLFVBQVUsQ0FBQ08sY0FBYyxjQUF6QlAsdUNBQUFBLDRCQUE2QkEsVUFBVSxDQUFDLEVBQUU7QUFDbEQ7QUFFTyxNQUFNUyxZQUFZO1FBQUMsRUFBRUMsU0FBUyxFQUFFOztJQUN0QyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2hCLCtDQUFRQSxDQUFDLElBQU0sSUFBSWlCLE1BQU0sS0FBSyxJQUFJQyxJQUFJLENBQUM7SUFDakUsTUFBTSxDQUFDUixhQUFhUyxlQUFlLEdBQUduQiwrQ0FBUUEsQ0FBQ0Usb0RBQVlBLENBQUNJLElBQUk7SUFFaEUsTUFBTWMsV0FBV1gsWUFBWUM7SUFFN0IsTUFBTVcsa0JBQWtCQyxDQUFBQTtRQUN2QkgsZUFBZUksQ0FBQUEsa0JBQW1CZCxZQUFZYztJQUMvQztJQUVBLHFCQUNDLDhEQUFDQztRQUFnQlYsV0FBV0E7OzBCQUMzQiw4REFBQ1c7Z0JBQ0FmLGFBQWFBO2dCQUNiVSxVQUFVQTtnQkFDVk0sdUJBQ0M7O3NDQUNDLDhEQUFDekIsc0RBQVFBOzRCQUFDMEIsTUFBSzs0QkFBS0MsU0FBUTtzQ0FBVTs7c0NBR3RDLDhEQUFDM0Isc0RBQVFBOzRCQUFDMEIsTUFBSzs0QkFBS0MsU0FBUTtzQ0FBVTs7Ozs7Ozs7OzBCQU16Qyw4REFBQ0M7MEJBQ0NkLE1BQU1lLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQztvQkFDbkIscUJBQ0MsOERBQUNDO3dCQUFpQkMsU0FBUyxJQUFNYixnQkFBZ0JXO2tDQUNoRCw0RUFBQzdCLG9EQUFVQTs0QkFBQ1csV0FBVTs0QkFBVWlCLFFBQVFBOzs7Ozs7dUJBRDFCQzs7Ozs7Z0JBSWpCOzs7Ozs7Ozs7Ozs7QUFJSixFQUFDO0dBckNZbkI7S0FBQUE7QUF1Q2IsU0FBU29CLFNBQVMsS0FBcUI7UUFBckIsRUFBRUUsUUFBUSxFQUFFRCxPQUFPLEVBQUUsR0FBckI7SUFDakIscUJBQ0MsOERBQUNFO1FBQ0FGLFNBQVNBO1FBQ1RwQixXQUFVO2tCQUVUcUI7Ozs7OztBQUdKO01BVFNGO0FBV1QsU0FBU1QsZ0JBQWdCLEtBQXVCO1FBQXZCLEVBQUVXLFFBQVEsRUFBRXJCLFNBQVMsRUFBRSxHQUF2QjtJQUN4QixxQkFDQyw4REFBQ3VCO1FBQ0F2QixXQUFXZixnREFBSUEsQ0FDZGUsV0FDQTtrQkFHQXFCOzs7Ozs7QUFHSjtNQVhTWDtBQWFULFNBQVNDLGFBQWEsS0FBa0M7UUFBbEMsRUFBRUMsT0FBTyxFQUFFaEIsV0FBVyxFQUFFVSxRQUFRLEVBQUUsR0FBbEM7SUFDckIscUJBQ0MsOERBQUNpQjtRQUFJdkIsV0FBVTs7MEJBQ2QsOERBQUN1QjtnQkFBSXZCLFdBQVU7O2tDQUNkLDhEQUFDdUI7d0JBQUl2QixXQUFVOzs0QkFBOEQ7MENBQ3ZFLDhEQUFDWCxvREFBVUE7Z0NBQUM0QixRQUFRckI7Z0NBQWFJLFdBQVc7Ozs7Ozs0QkFBYzs7Ozs7OztrQ0FFaEUsOERBQUN1Qjt3QkFBSXZCLFdBQVU7OzRCQUErRDswQ0FFN0UsOERBQUNYLG9EQUFVQTtnQ0FBQzRCLFFBQVFYO2dDQUFVTixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHMUNZOzs7Ozs7O0FBR0o7TUFmU0Q7QUFpQlQsU0FBU0ksU0FBUyxLQUFZO1FBQVosRUFBRU0sUUFBUSxFQUFFLEdBQVo7SUFDakIscUJBQ0MsOERBQUNFO1FBQUl2QixXQUFVO2tCQUNicUI7Ozs7OztBQUdKO01BTlNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9nYW1lLWZpZWxkLmpzeD9jNjAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFVJYnV0dG9uIH0gZnJvbSAnLi4vdWlraXQvdWktYnV0dG9uJ1xyXG5pbXBvcnQgeyBHQU1FX1NZTUJPTFMgfSBmcm9tICcuL2NvbnN0YW50cydcclxuaW1wb3J0IHsgR2FtZVN5bWJvbCB9IGZyb20gJy4vZ2FtZS1zeW1ib2wnXHJcblxyXG5jb25zdCBNT1ZFX09SREVSID0gW1xyXG5cdEdBTUVfU1lNQk9MUy5DUk9TUyxcclxuXHRHQU1FX1NZTUJPTFMuWkVSTyxcclxuXHRHQU1FX1NZTUJPTFMuVFJJTkdMRSxcclxuXHRHQU1FX1NZTUJPTFMuU1FVQVJFLFxyXG5dXHJcblxyXG5mdW5jdGlvbiBnZXROZXh0TW92ZShjdXJyZW50TW92ZSkge1xyXG5cdGNvbnN0IG5leHRNb3ZlSW5kZXggPSBNT1ZFX09SREVSLmluZGV4T2YoY3VycmVudE1vdmUpICsgMVxyXG5cdHJldHVybiBNT1ZFX09SREVSW25leHRNb3ZlSW5kZXhdID8/IE1PVkVfT1JERVJbMF1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdhbWVGaWVsZCA9ICh7IGNsYXNzTmFtZSB9KSA9PiB7XHJcblx0Y29uc3QgW2NlbGxzLCBzZXRTZWxsc10gPSB1c2VTdGF0ZSgoKSA9PiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSlcclxuXHRjb25zdCBbY3VycmVudE1vdmUsIHNldEN1cnJlbnRNb3ZlXSA9IHVzZVN0YXRlKEdBTUVfU1lNQk9MUy5aRVJPKVxyXG5cclxuXHRjb25zdCBuZXh0TW92ZSA9IGdldE5leHRNb3ZlKGN1cnJlbnRNb3ZlKVxyXG5cclxuXHRjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPSBpbmRleCA9PiB7XHJcblx0XHRzZXRDdXJyZW50TW92ZShsYXN0Q3VycmVudE1vdmUgPT4gZ2V0TmV4dE1vdmUobGFzdEN1cnJlbnRNb3ZlKSlcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8R2FtZUZpZWxkTGF5b3V0IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuXHRcdFx0PEdhbWVNb3ZlSW5mb1xyXG5cdFx0XHRcdGN1cnJlbnRNb3ZlPXtjdXJyZW50TW92ZX1cclxuXHRcdFx0XHRuZXh0TW92ZT17bmV4dE1vdmV9XHJcblx0XHRcdFx0YWN0aW9ucz17XHJcblx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHQ8VUlidXR0b24gc2l6ZT0nbWQnIHZhcmlhbnQ9J3ByaW1hcnknPlxyXG5cdFx0XHRcdFx0XHRcdNCd0LjRh9GM0Y9cclxuXHRcdFx0XHRcdFx0PC9VSWJ1dHRvbj5cclxuXHRcdFx0XHRcdFx0PFVJYnV0dG9uIHNpemU9J21kJyB2YXJpYW50PSdvdXRsaW5lJz5cclxuXHRcdFx0XHRcdFx0XHTQodC00LDRgtGM0YHRj1xyXG5cdFx0XHRcdFx0XHQ8L1VJYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8R2FtZUdyaWQ+XHJcblx0XHRcdFx0e2NlbGxzLm1hcCgoc3ltYm9sLCBpKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHQ8R2FtZUNlbGwga2V5PXtpfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDZWxsQ2xpY2soaSl9PlxyXG5cdFx0XHRcdFx0XHRcdDxHYW1lU3ltYm9sIGNsYXNzTmFtZT0ndy01IGgtNScgc3ltYm9sPXtzeW1ib2x9IC8+XHJcblx0XHRcdFx0XHRcdDwvR2FtZUNlbGw+XHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdFx0fSl9XHJcblx0XHRcdDwvR2FtZUdyaWQ+XHJcblx0XHQ8L0dhbWVGaWVsZExheW91dD5cclxuXHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdhbWVDZWxsKHsgY2hpbGRyZW4sIG9uQ2xpY2sgfSkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8YnV0dG9uXHJcblx0XHRcdG9uQ2xpY2s9e29uQ2xpY2t9XHJcblx0XHRcdGNsYXNzTmFtZT0nYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgLW1sLXB4IC1tdC1weCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcidcclxuXHRcdD5cclxuXHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0PC9idXR0b24+XHJcblx0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBHYW1lRmllbGRMYXlvdXQoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9e2Nsc3goXHJcblx0XHRcdFx0Y2xhc3NOYW1lLFxyXG5cdFx0XHRcdCdiZy13aGl0ZSByb3VuZGVkLTJ4bCBzaGFkb3ctbWQgcHgtOCBwdC01IHBiLTcnXHJcblx0XHRcdCl9XHJcblx0XHQ+XHJcblx0XHRcdHtjaGlsZHJlbn1cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZnVuY3Rpb24gR2FtZU1vdmVJbmZvKHsgYWN0aW9ucywgY3VycmVudE1vdmUsIG5leHRNb3ZlIH0pIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZ2FwLTMgaXRlbXMtY2VudGVyJz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J21yLWF1dG8nPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXhsIGxlYWRpbmctdGlnaHQgZm9udC1zZW1pYm9sZCc+XHJcblx0XHRcdFx0XHTQpdC+0LQ6IDxHYW1lU3ltYm9sIHN5bWJvbD17Y3VycmVudE1vdmV9IGNsYXNzTmFtZT17J3ctNSBoLTUnfSAvPnsnICd9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQteHMgbGVhZGluZy10aWdodCB0ZXh0LXNsYXRlLTQwMCc+XHJcblx0XHRcdFx0XHTQodC70LXQtNGD0Y7RidC40Lk6XHJcblx0XHRcdFx0XHQ8R2FtZVN5bWJvbCBzeW1ib2w9e25leHRNb3ZlfSBjbGFzc05hbWU9eyd3LTMgaC0zJ30gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdHthY3Rpb25zfVxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBHYW1lR3JpZCh7IGNoaWxkcmVuIH0pIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLVtyZXBlYXQoMTksXzMwcHgpXSBncmlkLXJvd3MtW3JlcGVhdCgxOSxfMzBweCldIHBsLXB4IHB0LXB4IG10LTMnPlxyXG5cdFx0XHR7Y2hpbGRyZW59XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuIl0sIm5hbWVzIjpbImNsc3giLCJ1c2VTdGF0ZSIsIlVJYnV0dG9uIiwiR0FNRV9TWU1CT0xTIiwiR2FtZVN5bWJvbCIsIk1PVkVfT1JERVIiLCJDUk9TUyIsIlpFUk8iLCJUUklOR0xFIiwiU1FVQVJFIiwiZ2V0TmV4dE1vdmUiLCJjdXJyZW50TW92ZSIsIm5leHRNb3ZlSW5kZXgiLCJpbmRleE9mIiwiR2FtZUZpZWxkIiwiY2xhc3NOYW1lIiwiY2VsbHMiLCJzZXRTZWxscyIsIkFycmF5IiwiZmlsbCIsInNldEN1cnJlbnRNb3ZlIiwibmV4dE1vdmUiLCJoYW5kbGVDZWxsQ2xpY2siLCJpbmRleCIsImxhc3RDdXJyZW50TW92ZSIsIkdhbWVGaWVsZExheW91dCIsIkdhbWVNb3ZlSW5mbyIsImFjdGlvbnMiLCJzaXplIiwidmFyaWFudCIsIkdhbWVHcmlkIiwibWFwIiwic3ltYm9sIiwiaSIsIkdhbWVDZWxsIiwib25DbGljayIsImNoaWxkcmVuIiwiYnV0dG9uIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/game-field.jsx\n"));

/***/ })

});