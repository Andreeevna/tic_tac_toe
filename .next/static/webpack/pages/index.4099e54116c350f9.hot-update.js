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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../uikit/ui-button */ \"./components/uikit/ui-button.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-symbol */ \"./components/game/game-symbol.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst MOVE_ORDER = [\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.CROSS,\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.ZERO,\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.TRINGLE,\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.SQUARE\n];\nfunction getNextMove(currentMove) {\n    const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;\n    var _MOVE_ORDER_nextMoveIndex;\n    return (_MOVE_ORDER_nextMoveIndex = MOVE_ORDER[nextMoveIndex]) !== null && _MOVE_ORDER_nextMoveIndex !== void 0 ? _MOVE_ORDER_nextMoveIndex : MOVE_ORDER[0];\n}\nconst GameField = (param)=>{\n    let { className } = param;\n    _s();\n    const [cells, setSells] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>new Array(19 * 19).fill(null));\n    const [currentMove, setCurrentMove] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.ZERO);\n    const nextMove = getNextMove(currentMove);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameFieldLayout, {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {\n                currentMove: currentMove,\n                nextMove: nextMove,\n                actions: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_3__.UIbutton, {\n                            size: \"md\",\n                            variant: \"primary\",\n                            children: \"Ничья\"\n                        }, void 0, false, void 0, void 0),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_3__.UIbutton, {\n                            size: \"md\",\n                            variant: \"outline\",\n                            children: \"Сдаться\"\n                        }, void 0, false, void 0, void 0)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 27,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameGrid, {\n                children: cells.map((_, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {}, i, false, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 41,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 26,\n        columnNumber: 3\n    }, undefined);\n};\n_s(GameField, \"2eCe4TiS8GDxzV3gi7yuGbvSYwo=\");\n_c = GameField;\nfunction GameCell(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"border border-slate-200 -ml-px -mt-px flex items-center justify-center\",\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 52,\n        columnNumber: 3\n    }, this);\n}\n_c1 = GameCell;\nfunction GameFieldLayout(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 pt-5 pb-7\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 60,\n        columnNumber: 3\n    }, this);\n}\n_c2 = GameFieldLayout;\nfunction GameMoveInfo(param) {\n    let { actions, currentMove, nextMove } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xl leading-tight font-semibold\",\n                        children: [\n                            \"Ход: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_5__.GameSymbol, {\n                                symbol: currentMove,\n                                className: \"w-5 h-5\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xs leading-tight text-slate-400\",\n                        children: [\n                            \"Следующий:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_5__.GameSymbol, {\n                                symbol: nextMove,\n                                className: \"w-3 h-3\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 74,\n                columnNumber: 4\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 73,\n        columnNumber: 3\n    }, this);\n}\n_c3 = GameMoveInfo;\nfunction GameGrid(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3\",\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 90,\n        columnNumber: 3\n    }, this);\n}\n_c4 = GameGrid;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameCell\");\n$RefreshReg$(_c2, \"GameFieldLayout\");\n$RefreshReg$(_c3, \"GameMoveInfo\");\n$RefreshReg$(_c4, \"GameGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1maWVsZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFDUztBQUNhO0FBQ0g7QUFDQTtBQUUxQyxNQUFNSyxhQUFhO0lBQ2xCRixvREFBWUEsQ0FBQ0csS0FBSztJQUNsQkgsb0RBQVlBLENBQUNJLElBQUk7SUFDakJKLG9EQUFZQSxDQUFDSyxPQUFPO0lBQ3BCTCxvREFBWUEsQ0FBQ00sTUFBTTtDQUNuQjtBQUVELFNBQVNDLFlBQVlDLFdBQVc7SUFDL0IsTUFBTUMsZ0JBQWdCUCxXQUFXUSxPQUFPLENBQUNGLGVBQWU7UUFDakROO0lBQVAsT0FBT0EsQ0FBQUEsNEJBQUFBLFVBQVUsQ0FBQ08sY0FBYyxjQUF6QlAsdUNBQUFBLDRCQUE2QkEsVUFBVSxDQUFDLEVBQUU7QUFDbEQ7QUFFTyxNQUFNUyxZQUFZO1FBQUMsRUFBRUMsU0FBUyxFQUFFOztJQUN0QyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2hCLCtDQUFRQSxDQUFDLElBQU0sSUFBSWlCLE1BQU0sS0FBSyxJQUFJQyxJQUFJLENBQUM7SUFDakUsTUFBTSxDQUFDUixhQUFhUyxlQUFlLEdBQUduQiwrQ0FBUUEsQ0FBQ0Usb0RBQVlBLENBQUNJLElBQUk7SUFFaEUsTUFBTWMsV0FBV1gsWUFBWUM7SUFFN0IscUJBQ0MsOERBQUNXO1FBQWdCUCxXQUFXQTs7MEJBQzNCLDhEQUFDUTtnQkFDQVosYUFBYUE7Z0JBQ2JVLFVBQVVBO2dCQUNWRyx1QkFDQzs7c0NBQ0MsOERBQUN0QixzREFBUUE7NEJBQUN1QixNQUFLOzRCQUFLQyxTQUFRO3NDQUFVOztzQ0FHdEMsOERBQUN4QixzREFBUUE7NEJBQUN1QixNQUFLOzRCQUFLQyxTQUFRO3NDQUFVOzs7Ozs7Ozs7MEJBTXpDLDhEQUFDQzswQkFDQ1gsTUFBTVksR0FBRyxDQUFDLENBQUNDLEdBQUdDO29CQUNkLHFCQUFPLDhEQUFDQyxjQUFjRDs7Ozs7Z0JBQ3ZCOzs7Ozs7Ozs7Ozs7QUFJSixFQUFDO0dBN0JZaEI7S0FBQUE7QUErQmIsU0FBU2lCLFNBQVMsS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaO0lBQ2pCLHFCQUNDLDhEQUFDQztRQUFPbEIsV0FBVTtrQkFDaEJpQjs7Ozs7O0FBR0o7TUFOU0Q7QUFRVCxTQUFTVCxnQkFBZ0IsS0FBdUI7UUFBdkIsRUFBRVUsUUFBUSxFQUFFakIsU0FBUyxFQUFFLEdBQXZCO0lBQ3hCLHFCQUNDLDhEQUFDbUI7UUFDQW5CLFdBQVdmLGdEQUFJQSxDQUNkZSxXQUNBO2tCQUdBaUI7Ozs7OztBQUdKO01BWFNWO0FBYVQsU0FBU0MsYUFBYSxLQUFrQztRQUFsQyxFQUFFQyxPQUFPLEVBQUViLFdBQVcsRUFBRVUsUUFBUSxFQUFFLEdBQWxDO0lBQ3JCLHFCQUNDLDhEQUFDYTtRQUFJbkIsV0FBVTs7MEJBQ2QsOERBQUNtQjtnQkFBSW5CLFdBQVU7O2tDQUNkLDhEQUFDbUI7d0JBQUluQixXQUFVOzs0QkFBOEQ7MENBQ3ZFLDhEQUFDWCxvREFBVUE7Z0NBQUMrQixRQUFReEI7Z0NBQWFJLFdBQVc7Ozs7Ozs0QkFBYzs7Ozs7OztrQ0FFaEUsOERBQUNtQjt3QkFBSW5CLFdBQVU7OzRCQUErRDswQ0FFN0UsOERBQUNYLG9EQUFVQTtnQ0FBQytCLFFBQVFkO2dDQUFVTixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHMUNTOzs7Ozs7O0FBR0o7TUFmU0Q7QUFpQlQsU0FBU0ksU0FBUyxLQUFZO1FBQVosRUFBRUssUUFBUSxFQUFFLEdBQVo7SUFDakIscUJBQ0MsOERBQUNFO1FBQUluQixXQUFVO2tCQUNiaUI7Ozs7OztBQUdKO01BTlNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9nYW1lLWZpZWxkLmpzeD9jNjAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFVJYnV0dG9uIH0gZnJvbSAnLi4vdWlraXQvdWktYnV0dG9uJ1xyXG5pbXBvcnQgeyBHQU1FX1NZTUJPTFMgfSBmcm9tICcuL2NvbnN0YW50cydcclxuaW1wb3J0IHsgR2FtZVN5bWJvbCB9IGZyb20gJy4vZ2FtZS1zeW1ib2wnXHJcblxyXG5jb25zdCBNT1ZFX09SREVSID0gW1xyXG5cdEdBTUVfU1lNQk9MUy5DUk9TUyxcclxuXHRHQU1FX1NZTUJPTFMuWkVSTyxcclxuXHRHQU1FX1NZTUJPTFMuVFJJTkdMRSxcclxuXHRHQU1FX1NZTUJPTFMuU1FVQVJFLFxyXG5dXHJcblxyXG5mdW5jdGlvbiBnZXROZXh0TW92ZShjdXJyZW50TW92ZSkge1xyXG5cdGNvbnN0IG5leHRNb3ZlSW5kZXggPSBNT1ZFX09SREVSLmluZGV4T2YoY3VycmVudE1vdmUpICsgMVxyXG5cdHJldHVybiBNT1ZFX09SREVSW25leHRNb3ZlSW5kZXhdID8/IE1PVkVfT1JERVJbMF1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdhbWVGaWVsZCA9ICh7IGNsYXNzTmFtZSB9KSA9PiB7XHJcblx0Y29uc3QgW2NlbGxzLCBzZXRTZWxsc10gPSB1c2VTdGF0ZSgoKSA9PiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSlcclxuXHRjb25zdCBbY3VycmVudE1vdmUsIHNldEN1cnJlbnRNb3ZlXSA9IHVzZVN0YXRlKEdBTUVfU1lNQk9MUy5aRVJPKVxyXG5cclxuXHRjb25zdCBuZXh0TW92ZSA9IGdldE5leHRNb3ZlKGN1cnJlbnRNb3ZlKVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEdhbWVGaWVsZExheW91dCBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcblx0XHRcdDxHYW1lTW92ZUluZm9cclxuXHRcdFx0XHRjdXJyZW50TW92ZT17Y3VycmVudE1vdmV9XHJcblx0XHRcdFx0bmV4dE1vdmU9e25leHRNb3ZlfVxyXG5cdFx0XHRcdGFjdGlvbnM9e1xyXG5cdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0PFVJYnV0dG9uIHNpemU9J21kJyB2YXJpYW50PSdwcmltYXJ5Jz5cclxuXHRcdFx0XHRcdFx0XHTQndC40YfRjNGPXHJcblx0XHRcdFx0XHRcdDwvVUlidXR0b24+XHJcblx0XHRcdFx0XHRcdDxVSWJ1dHRvbiBzaXplPSdtZCcgdmFyaWFudD0nb3V0bGluZSc+XHJcblx0XHRcdFx0XHRcdFx00KHQtNCw0YLRjNGB0Y9cclxuXHRcdFx0XHRcdFx0PC9VSWJ1dHRvbj5cclxuXHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PEdhbWVHcmlkPlxyXG5cdFx0XHRcdHtjZWxscy5tYXAoKF8sIGkpID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiA8R2FtZUNlbGwga2V5PXtpfT48L0dhbWVDZWxsPlxyXG5cdFx0XHRcdH0pfVxyXG5cdFx0XHQ8L0dhbWVHcmlkPlxyXG5cdFx0PC9HYW1lRmllbGRMYXlvdXQ+XHJcblx0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBHYW1lQ2VsbCh7IGNoaWxkcmVuIH0pIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGJ1dHRvbiBjbGFzc05hbWU9J2JvcmRlciBib3JkZXItc2xhdGUtMjAwIC1tbC1weCAtbXQtcHggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInPlxyXG5cdFx0XHR7Y2hpbGRyZW59XHJcblx0XHQ8L2J1dHRvbj5cclxuXHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdhbWVGaWVsZExheW91dCh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT17Y2xzeChcclxuXHRcdFx0XHRjbGFzc05hbWUsXHJcblx0XHRcdFx0J2JnLXdoaXRlIHJvdW5kZWQtMnhsIHNoYWRvdy1tZCBweC04IHB0LTUgcGItNydcclxuXHRcdFx0KX1cclxuXHRcdD5cclxuXHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBHYW1lTW92ZUluZm8oeyBhY3Rpb25zLCBjdXJyZW50TW92ZSwgbmV4dE1vdmUgfSkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtMyBpdGVtcy1jZW50ZXInPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQteGwgbGVhZGluZy10aWdodCBmb250LXNlbWlib2xkJz5cclxuXHRcdFx0XHRcdNCl0L7QtDogPEdhbWVTeW1ib2wgc3ltYm9sPXtjdXJyZW50TW92ZX0gY2xhc3NOYW1lPXsndy01IGgtNSd9IC8+eycgJ31cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC14cyBsZWFkaW5nLXRpZ2h0IHRleHQtc2xhdGUtNDAwJz5cclxuXHRcdFx0XHRcdNCh0LvQtdC00YPRjtGJ0LjQuTpcclxuXHRcdFx0XHRcdDxHYW1lU3ltYm9sIHN5bWJvbD17bmV4dE1vdmV9IGNsYXNzTmFtZT17J3ctMyBoLTMnfSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0e2FjdGlvbnN9XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdhbWVHcmlkKHsgY2hpbGRyZW4gfSkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtW3JlcGVhdCgxOSxfMzBweCldIGdyaWQtcm93cy1bcmVwZWF0KDE5LF8zMHB4KV0gcGwtcHggcHQtcHggbXQtMyc+XHJcblx0XHRcdHtjaGlsZHJlbn1cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG4iXSwibmFtZXMiOlsiY2xzeCIsInVzZVN0YXRlIiwiVUlidXR0b24iLCJHQU1FX1NZTUJPTFMiLCJHYW1lU3ltYm9sIiwiTU9WRV9PUkRFUiIsIkNST1NTIiwiWkVSTyIsIlRSSU5HTEUiLCJTUVVBUkUiLCJnZXROZXh0TW92ZSIsImN1cnJlbnRNb3ZlIiwibmV4dE1vdmVJbmRleCIsImluZGV4T2YiLCJHYW1lRmllbGQiLCJjbGFzc05hbWUiLCJjZWxscyIsInNldFNlbGxzIiwiQXJyYXkiLCJmaWxsIiwic2V0Q3VycmVudE1vdmUiLCJuZXh0TW92ZSIsIkdhbWVGaWVsZExheW91dCIsIkdhbWVNb3ZlSW5mbyIsImFjdGlvbnMiLCJzaXplIiwidmFyaWFudCIsIkdhbWVHcmlkIiwibWFwIiwiXyIsImkiLCJHYW1lQ2VsbCIsImNoaWxkcmVuIiwiYnV0dG9uIiwiZGl2Iiwic3ltYm9sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/game-field.jsx\n"));

/***/ })

});