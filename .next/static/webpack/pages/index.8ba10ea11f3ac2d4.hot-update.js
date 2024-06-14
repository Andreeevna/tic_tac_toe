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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../uikit/ui-button */ \"./components/uikit/ui-button.jsx\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-symbol */ \"./components/game/game-symbol.jsx\");\n\n\n\n\nconst GameField = (param)=>{\n    let { className, cells, currentMove, nextMove, handleCellClick, winnerSequence } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameFieldLayout, {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {\n                currentMove: currentMove,\n                nextMove: nextMove,\n                actions: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_2__.UIbutton, {\n                            size: \"md\",\n                            variant: \"primary\",\n                            children: \"Ничья\"\n                        }, void 0, false, void 0, void 0),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_2__.UIbutton, {\n                            size: \"md\",\n                            variant: \"outline\",\n                            children: \"Сдаться\"\n                        }, void 0, false, void 0, void 0)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 15,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameGrid, {\n                children: cells.map((symbol, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {\n                        isWinner: winnerSequence,\n                        onClick: ()=>handleCellClick(i),\n                        children: symbol && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_3__.GameSymbol, {\n                            className: \"w-5 h-5\",\n                            symbol: symbol\n                        }, void 0, false, {\n                            fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 19\n                        }, undefined)\n                    }, i, false, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 7\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 29,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 14,\n        columnNumber: 3\n    }, undefined);\n};\n_c = GameField;\nfunction GameCell(param) {\n    let { children, onClick, isWinner } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: onClick,\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"border border-slate-200 -ml-px -mt-px flex items-center justify-center\", isWinner && \"bg-orange-600/90\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 48,\n        columnNumber: 3\n    }, this);\n}\n_c1 = GameCell;\nfunction GameFieldLayout(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 pt-5 pb-7\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 62,\n        columnNumber: 3\n    }, this);\n}\n_c2 = GameFieldLayout;\nfunction GameMoveInfo(param) {\n    let { actions, currentMove, nextMove } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xl leading-tight font-semibold\",\n                        children: [\n                            \"Ход: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_3__.GameSymbol, {\n                                symbol: currentMove,\n                                className: \"w-5 h-5\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xs leading-tight text-slate-400\",\n                        children: [\n                            \"Следующий:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_3__.GameSymbol, {\n                                symbol: nextMove,\n                                className: \"w-3 h-3\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 76,\n                columnNumber: 4\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 75,\n        columnNumber: 3\n    }, this);\n}\n_c3 = GameMoveInfo;\nfunction GameGrid(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3\",\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 92,\n        columnNumber: 3\n    }, this);\n}\n_c4 = GameGrid;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameCell\");\n$RefreshReg$(_c2, \"GameFieldLayout\");\n$RefreshReg$(_c3, \"GameMoveInfo\");\n$RefreshReg$(_c4, \"GameGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1maWVsZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1QjtBQUNzQjtBQUNIO0FBRW5DLE1BQU1HLFlBQVk7UUFBQyxFQUN6QkMsU0FBUyxFQUNUQyxLQUFLLEVBQ0xDLFdBQVcsRUFDWEMsUUFBUSxFQUNSQyxlQUFlLEVBQ2ZDLGNBQWMsRUFDZDtJQUNBLHFCQUNDLDhEQUFDQztRQUFnQk4sV0FBV0E7OzBCQUMzQiw4REFBQ087Z0JBQ0FMLGFBQWFBO2dCQUNiQyxVQUFVQTtnQkFDVkssdUJBQ0M7O3NDQUNDLDhEQUFDWCxzREFBUUE7NEJBQUNZLE1BQUs7NEJBQUtDLFNBQVE7c0NBQVU7O3NDQUd0Qyw4REFBQ2Isc0RBQVFBOzRCQUFDWSxNQUFLOzRCQUFLQyxTQUFRO3NDQUFVOzs7Ozs7Ozs7MEJBTXpDLDhEQUFDQzswQkFDQ1YsTUFBTVcsR0FBRyxDQUFDLENBQUNDLFFBQVFDO29CQUNuQixxQkFDQyw4REFBQ0M7d0JBQ0FDLFVBQVVYO3dCQUVWWSxTQUFTLElBQU1iLGdCQUFnQlU7a0NBRTlCRCx3QkFBVSw4REFBQ2Ysb0RBQVVBOzRCQUFDRSxXQUFVOzRCQUFVYSxRQUFRQTs7Ozs7O3VCQUg5Q0M7Ozs7O2dCQU1SOzs7Ozs7Ozs7Ozs7QUFJSixFQUFDO0tBdkNZZjtBQXlDYixTQUFTZ0IsU0FBUyxLQUErQjtRQUEvQixFQUFFRyxRQUFRLEVBQUVELE9BQU8sRUFBRUQsUUFBUSxFQUFFLEdBQS9CO0lBQ2pCLHFCQUNDLDhEQUFDRztRQUNBRixTQUFTQTtRQUNUakIsV0FBV0osZ0RBQUlBLENBQ2QsMEVBQ0FvQixZQUFZO2tCQUdaRTs7Ozs7O0FBR0o7TUFaU0g7QUFjVCxTQUFTVCxnQkFBZ0IsS0FBdUI7UUFBdkIsRUFBRVksUUFBUSxFQUFFbEIsU0FBUyxFQUFFLEdBQXZCO0lBQ3hCLHFCQUNDLDhEQUFDb0I7UUFDQXBCLFdBQVdKLGdEQUFJQSxDQUNkSSxXQUNBO2tCQUdBa0I7Ozs7OztBQUdKO01BWFNaO0FBYVQsU0FBU0MsYUFBYSxLQUFrQztRQUFsQyxFQUFFQyxPQUFPLEVBQUVOLFdBQVcsRUFBRUMsUUFBUSxFQUFFLEdBQWxDO0lBQ3JCLHFCQUNDLDhEQUFDaUI7UUFBSXBCLFdBQVU7OzBCQUNkLDhEQUFDb0I7Z0JBQUlwQixXQUFVOztrQ0FDZCw4REFBQ29CO3dCQUFJcEIsV0FBVTs7NEJBQThEOzBDQUN2RSw4REFBQ0Ysb0RBQVVBO2dDQUFDZSxRQUFRWDtnQ0FBYUYsV0FBVzs7Ozs7OzRCQUFjOzs7Ozs7O2tDQUVoRSw4REFBQ29CO3dCQUFJcEIsV0FBVTs7NEJBQStEOzBDQUU3RSw4REFBQ0Ysb0RBQVVBO2dDQUFDZSxRQUFRVjtnQ0FBVUgsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRzFDUTs7Ozs7OztBQUdKO01BZlNEO0FBaUJULFNBQVNJLFNBQVMsS0FBWTtRQUFaLEVBQUVPLFFBQVEsRUFBRSxHQUFaO0lBQ2pCLHFCQUNDLDhEQUFDRTtRQUFJcEIsV0FBVTtrQkFDYmtCOzs7Ozs7QUFHSjtNQU5TUCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1maWVsZC5qc3g/YzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xyXG5pbXBvcnQgeyBVSWJ1dHRvbiB9IGZyb20gJy4uL3Vpa2l0L3VpLWJ1dHRvbidcclxuaW1wb3J0IHsgR2FtZVN5bWJvbCB9IGZyb20gJy4vZ2FtZS1zeW1ib2wnXHJcblxyXG5leHBvcnQgY29uc3QgR2FtZUZpZWxkID0gKHtcclxuXHRjbGFzc05hbWUsXHJcblx0Y2VsbHMsXHJcblx0Y3VycmVudE1vdmUsXHJcblx0bmV4dE1vdmUsXHJcblx0aGFuZGxlQ2VsbENsaWNrLFxyXG5cdHdpbm5lclNlcXVlbmNlLFxyXG59KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxHYW1lRmllbGRMYXlvdXQgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG5cdFx0XHQ8R2FtZU1vdmVJbmZvXHJcblx0XHRcdFx0Y3VycmVudE1vdmU9e2N1cnJlbnRNb3ZlfVxyXG5cdFx0XHRcdG5leHRNb3ZlPXtuZXh0TW92ZX1cclxuXHRcdFx0XHRhY3Rpb25zPXtcclxuXHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdDxVSWJ1dHRvbiBzaXplPSdtZCcgdmFyaWFudD0ncHJpbWFyeSc+XHJcblx0XHRcdFx0XHRcdFx00J3QuNGH0YzRj1xyXG5cdFx0XHRcdFx0XHQ8L1VJYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8VUlidXR0b24gc2l6ZT0nbWQnIHZhcmlhbnQ9J291dGxpbmUnPlxyXG5cdFx0XHRcdFx0XHRcdNCh0LTQsNGC0YzRgdGPXHJcblx0XHRcdFx0XHRcdDwvVUlidXR0b24+XHJcblx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHR9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxHYW1lR3JpZD5cclxuXHRcdFx0XHR7Y2VsbHMubWFwKChzeW1ib2wsIGkpID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdDxHYW1lQ2VsbFxyXG5cdFx0XHRcdFx0XHRcdGlzV2lubmVyPXt3aW5uZXJTZXF1ZW5jZX1cclxuXHRcdFx0XHRcdFx0XHRrZXk9e2l9XHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlQ2VsbENsaWNrKGkpfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0e3N5bWJvbCAmJiA8R2FtZVN5bWJvbCBjbGFzc05hbWU9J3ctNSBoLTUnIHN5bWJvbD17c3ltYm9sfSAvPn1cclxuXHRcdFx0XHRcdFx0PC9HYW1lQ2VsbD5cclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHR9KX1cclxuXHRcdFx0PC9HYW1lR3JpZD5cclxuXHRcdDwvR2FtZUZpZWxkTGF5b3V0PlxyXG5cdClcclxufVxyXG5cclxuZnVuY3Rpb24gR2FtZUNlbGwoeyBjaGlsZHJlbiwgb25DbGljaywgaXNXaW5uZXIgfSkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8YnV0dG9uXHJcblx0XHRcdG9uQ2xpY2s9e29uQ2xpY2t9XHJcblx0XHRcdGNsYXNzTmFtZT17Y2xzeChcclxuXHRcdFx0XHQnYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgLW1sLXB4IC1tdC1weCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcicsXHJcblx0XHRcdFx0aXNXaW5uZXIgJiYgJ2JnLW9yYW5nZS02MDAvOTAnXHJcblx0XHRcdCl9XHJcblx0XHQ+XHJcblx0XHRcdHtjaGlsZHJlbn1cclxuXHRcdDwvYnV0dG9uPlxyXG5cdClcclxufVxyXG5cclxuZnVuY3Rpb24gR2FtZUZpZWxkTGF5b3V0KHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPXtjbHN4KFxyXG5cdFx0XHRcdGNsYXNzTmFtZSxcclxuXHRcdFx0XHQnYmctd2hpdGUgcm91bmRlZC0yeGwgc2hhZG93LW1kIHB4LTggcHQtNSBwYi03J1xyXG5cdFx0XHQpfVxyXG5cdFx0PlxyXG5cdFx0XHR7Y2hpbGRyZW59XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdhbWVNb3ZlSW5mbyh7IGFjdGlvbnMsIGN1cnJlbnRNb3ZlLCBuZXh0TW92ZSB9KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGdhcC0zIGl0ZW1zLWNlbnRlcic+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC14bCBsZWFkaW5nLXRpZ2h0IGZvbnQtc2VtaWJvbGQnPlxyXG5cdFx0XHRcdFx00KXQvtC0OiA8R2FtZVN5bWJvbCBzeW1ib2w9e2N1cnJlbnRNb3ZlfSBjbGFzc05hbWU9eyd3LTUgaC01J30gLz57JyAnfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXhzIGxlYWRpbmctdGlnaHQgdGV4dC1zbGF0ZS00MDAnPlxyXG5cdFx0XHRcdFx00KHQu9C10LTRg9GO0YnQuNC5OlxyXG5cdFx0XHRcdFx0PEdhbWVTeW1ib2wgc3ltYm9sPXtuZXh0TW92ZX0gY2xhc3NOYW1lPXsndy0zIGgtMyd9IC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHR7YWN0aW9uc31cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZnVuY3Rpb24gR2FtZUdyaWQoeyBjaGlsZHJlbiB9KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy1bcmVwZWF0KDE5LF8zMHB4KV0gZ3JpZC1yb3dzLVtyZXBlYXQoMTksXzMwcHgpXSBwbC1weCBwdC1weCBtdC0zJz5cclxuXHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjbHN4IiwiVUlidXR0b24iLCJHYW1lU3ltYm9sIiwiR2FtZUZpZWxkIiwiY2xhc3NOYW1lIiwiY2VsbHMiLCJjdXJyZW50TW92ZSIsIm5leHRNb3ZlIiwiaGFuZGxlQ2VsbENsaWNrIiwid2lubmVyU2VxdWVuY2UiLCJHYW1lRmllbGRMYXlvdXQiLCJHYW1lTW92ZUluZm8iLCJhY3Rpb25zIiwic2l6ZSIsInZhcmlhbnQiLCJHYW1lR3JpZCIsIm1hcCIsInN5bWJvbCIsImkiLCJHYW1lQ2VsbCIsImlzV2lubmVyIiwib25DbGljayIsImNoaWxkcmVuIiwiYnV0dG9uIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/game-field.jsx\n"));

/***/ })

});