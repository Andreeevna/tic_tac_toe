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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../uikit/ui-button */ \"./components/uikit/ui-button.jsx\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-symbol */ \"./components/game/game-symbol.jsx\");\n\n\n\n\nconst GameField = (param)=>{\n    let { className, cells, currentMove, nextMove, handleCellClick, winnerSequence, winnerSymbol } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameFieldLayout, {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {\n                currentMove: currentMove,\n                nextMove: nextMove,\n                actions: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_2__.UIbutton, {\n                            size: \"md\",\n                            variant: \"primary\",\n                            children: \"Ничья\"\n                        }, void 0, false, void 0, void 0),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_2__.UIbutton, {\n                            size: \"md\",\n                            variant: \"outline\",\n                            children: \"Сдаться\"\n                        }, void 0, false, void 0, void 0)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 16,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameGrid, {\n                children: cells.map((symbol, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {\n                        disabled: !!winnerSymbol,\n                        isWinner: winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence.includes(i),\n                        onClick: ()=>handleCellClick(i),\n                        children: symbol && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_3__.GameSymbol, {\n                            className: \"w-5 h-5\",\n                            symbol: symbol\n                        }, void 0, false, {\n                            fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 19\n                        }, undefined)\n                    }, i, false, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 7\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 30,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 15,\n        columnNumber: 3\n    }, undefined);\n};\n_c = GameField;\nfunction GameCell(param) {\n    let { children, onClick, isWinner, disabled } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        disabled: disabled,\n        onClick: onClick,\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"border border-slate-200 -ml-px -mt-px flex items-center justify-center\", isWinner && \"bg-orange-600/10\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 50,\n        columnNumber: 3\n    }, this);\n}\n_c1 = GameCell;\nfunction GameFieldLayout(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 pt-5 pb-7\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 65,\n        columnNumber: 3\n    }, this);\n}\n_c2 = GameFieldLayout;\nfunction GameMoveInfo(param) {\n    let { actions, currentMove, nextMove } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xl leading-tight font-semibold\",\n                        children: [\n                            \"Ход: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_3__.GameSymbol, {\n                                symbol: currentMove,\n                                className: \"w-5 h-5\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xs leading-tight text-slate-400\",\n                        children: [\n                            \"Следующий:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_3__.GameSymbol, {\n                                symbol: nextMove,\n                                className: \"w-3 h-3\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 79,\n                columnNumber: 4\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 78,\n        columnNumber: 3\n    }, this);\n}\n_c3 = GameMoveInfo;\nfunction GameGrid(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3\",\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 95,\n        columnNumber: 3\n    }, this);\n}\n_c4 = GameGrid;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameCell\");\n$RefreshReg$(_c2, \"GameFieldLayout\");\n$RefreshReg$(_c3, \"GameMoveInfo\");\n$RefreshReg$(_c4, \"GameGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1maWVsZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1QjtBQUNzQjtBQUNIO0FBRW5DLE1BQU1HLFlBQVk7UUFBQyxFQUN6QkMsU0FBUyxFQUNUQyxLQUFLLEVBQ0xDLFdBQVcsRUFDWEMsUUFBUSxFQUNSQyxlQUFlLEVBQ2ZDLGNBQWMsRUFDZEMsWUFBWSxFQUNaO0lBQ0EscUJBQ0MsOERBQUNDO1FBQWdCUCxXQUFXQTs7MEJBQzNCLDhEQUFDUTtnQkFDQU4sYUFBYUE7Z0JBQ2JDLFVBQVVBO2dCQUNWTSx1QkFDQzs7c0NBQ0MsOERBQUNaLHNEQUFRQTs0QkFBQ2EsTUFBSzs0QkFBS0MsU0FBUTtzQ0FBVTs7c0NBR3RDLDhEQUFDZCxzREFBUUE7NEJBQUNhLE1BQUs7NEJBQUtDLFNBQVE7c0NBQVU7Ozs7Ozs7OzswQkFNekMsOERBQUNDOzBCQUNDWCxNQUFNWSxHQUFHLENBQUMsQ0FBQ0MsUUFBUUM7b0JBQ25CLHFCQUNDLDhEQUFDQzt3QkFDQUMsVUFBVSxDQUFDLENBQUNYO3dCQUNaWSxRQUFRLEVBQUViLDJCQUFBQSxxQ0FBQUEsZUFBZ0JjLFFBQVEsQ0FBQ0o7d0JBRW5DSyxTQUFTLElBQU1oQixnQkFBZ0JXO2tDQUU5QkQsd0JBQVUsOERBQUNoQixvREFBVUE7NEJBQUNFLFdBQVU7NEJBQVVjLFFBQVFBOzs7Ozs7dUJBSDlDQzs7Ozs7Z0JBTVI7Ozs7Ozs7Ozs7OztBQUlKLEVBQUM7S0F6Q1loQjtBQTJDYixTQUFTaUIsU0FBUyxLQUF5QztRQUF6QyxFQUFFSyxRQUFRLEVBQUVELE9BQU8sRUFBRUYsUUFBUSxFQUFFRCxRQUFRLEVBQUUsR0FBekM7SUFDakIscUJBQ0MsOERBQUNLO1FBQ0FMLFVBQVVBO1FBQ1ZHLFNBQVNBO1FBQ1RwQixXQUFXSixnREFBSUEsQ0FDZCwwRUFDQXNCLFlBQVk7a0JBR1pHOzs7Ozs7QUFHSjtNQWJTTDtBQWVULFNBQVNULGdCQUFnQixLQUF1QjtRQUF2QixFQUFFYyxRQUFRLEVBQUVyQixTQUFTLEVBQUUsR0FBdkI7SUFDeEIscUJBQ0MsOERBQUN1QjtRQUNBdkIsV0FBV0osZ0RBQUlBLENBQ2RJLFdBQ0E7a0JBR0FxQjs7Ozs7O0FBR0o7TUFYU2Q7QUFhVCxTQUFTQyxhQUFhLEtBQWtDO1FBQWxDLEVBQUVDLE9BQU8sRUFBRVAsV0FBVyxFQUFFQyxRQUFRLEVBQUUsR0FBbEM7SUFDckIscUJBQ0MsOERBQUNvQjtRQUFJdkIsV0FBVTs7MEJBQ2QsOERBQUN1QjtnQkFBSXZCLFdBQVU7O2tDQUNkLDhEQUFDdUI7d0JBQUl2QixXQUFVOzs0QkFBOEQ7MENBQ3ZFLDhEQUFDRixvREFBVUE7Z0NBQUNnQixRQUFRWjtnQ0FBYUYsV0FBVzs7Ozs7OzRCQUFjOzs7Ozs7O2tDQUVoRSw4REFBQ3VCO3dCQUFJdkIsV0FBVTs7NEJBQStEOzBDQUU3RSw4REFBQ0Ysb0RBQVVBO2dDQUFDZ0IsUUFBUVg7Z0NBQVVILFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUcxQ1M7Ozs7Ozs7QUFHSjtNQWZTRDtBQWlCVCxTQUFTSSxTQUFTLEtBQVk7UUFBWixFQUFFUyxRQUFRLEVBQUUsR0FBWjtJQUNqQixxQkFDQyw4REFBQ0U7UUFBSXZCLFdBQVU7a0JBQ2JxQjs7Ozs7O0FBR0o7TUFOU1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL2dhbWUtZmllbGQuanN4P2M2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcclxuaW1wb3J0IHsgVUlidXR0b24gfSBmcm9tICcuLi91aWtpdC91aS1idXR0b24nXHJcbmltcG9ydCB7IEdhbWVTeW1ib2wgfSBmcm9tICcuL2dhbWUtc3ltYm9sJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEdhbWVGaWVsZCA9ICh7XHJcblx0Y2xhc3NOYW1lLFxyXG5cdGNlbGxzLFxyXG5cdGN1cnJlbnRNb3ZlLFxyXG5cdG5leHRNb3ZlLFxyXG5cdGhhbmRsZUNlbGxDbGljayxcclxuXHR3aW5uZXJTZXF1ZW5jZSxcclxuXHR3aW5uZXJTeW1ib2wsXHJcbn0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PEdhbWVGaWVsZExheW91dCBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcblx0XHRcdDxHYW1lTW92ZUluZm9cclxuXHRcdFx0XHRjdXJyZW50TW92ZT17Y3VycmVudE1vdmV9XHJcblx0XHRcdFx0bmV4dE1vdmU9e25leHRNb3ZlfVxyXG5cdFx0XHRcdGFjdGlvbnM9e1xyXG5cdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0PFVJYnV0dG9uIHNpemU9J21kJyB2YXJpYW50PSdwcmltYXJ5Jz5cclxuXHRcdFx0XHRcdFx0XHTQndC40YfRjNGPXHJcblx0XHRcdFx0XHRcdDwvVUlidXR0b24+XHJcblx0XHRcdFx0XHRcdDxVSWJ1dHRvbiBzaXplPSdtZCcgdmFyaWFudD0nb3V0bGluZSc+XHJcblx0XHRcdFx0XHRcdFx00KHQtNCw0YLRjNGB0Y9cclxuXHRcdFx0XHRcdFx0PC9VSWJ1dHRvbj5cclxuXHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PEdhbWVHcmlkPlxyXG5cdFx0XHRcdHtjZWxscy5tYXAoKHN5bWJvbCwgaSkgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0PEdhbWVDZWxsXHJcblx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyEhd2lubmVyU3ltYm9sfVxyXG5cdFx0XHRcdFx0XHRcdGlzV2lubmVyPXt3aW5uZXJTZXF1ZW5jZT8uaW5jbHVkZXMoaSl9XHJcblx0XHRcdFx0XHRcdFx0a2V5PXtpfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZUNlbGxDbGljayhpKX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdHtzeW1ib2wgJiYgPEdhbWVTeW1ib2wgY2xhc3NOYW1lPSd3LTUgaC01JyBzeW1ib2w9e3N5bWJvbH0gLz59XHJcblx0XHRcdFx0XHRcdDwvR2FtZUNlbGw+XHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdFx0fSl9XHJcblx0XHRcdDwvR2FtZUdyaWQ+XHJcblx0XHQ8L0dhbWVGaWVsZExheW91dD5cclxuXHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdhbWVDZWxsKHsgY2hpbGRyZW4sIG9uQ2xpY2ssIGlzV2lubmVyLCBkaXNhYmxlZCB9KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxidXR0b25cclxuXHRcdFx0ZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG5cdFx0XHRvbkNsaWNrPXtvbkNsaWNrfVxyXG5cdFx0XHRjbGFzc05hbWU9e2Nsc3goXHJcblx0XHRcdFx0J2JvcmRlciBib3JkZXItc2xhdGUtMjAwIC1tbC1weCAtbXQtcHggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInLFxyXG5cdFx0XHRcdGlzV2lubmVyICYmICdiZy1vcmFuZ2UtNjAwLzEwJ1xyXG5cdFx0XHQpfVxyXG5cdFx0PlxyXG5cdFx0XHR7Y2hpbGRyZW59XHJcblx0XHQ8L2J1dHRvbj5cclxuXHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdhbWVGaWVsZExheW91dCh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT17Y2xzeChcclxuXHRcdFx0XHRjbGFzc05hbWUsXHJcblx0XHRcdFx0J2JnLXdoaXRlIHJvdW5kZWQtMnhsIHNoYWRvdy1tZCBweC04IHB0LTUgcGItNydcclxuXHRcdFx0KX1cclxuXHRcdD5cclxuXHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBHYW1lTW92ZUluZm8oeyBhY3Rpb25zLCBjdXJyZW50TW92ZSwgbmV4dE1vdmUgfSkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtMyBpdGVtcy1jZW50ZXInPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQteGwgbGVhZGluZy10aWdodCBmb250LXNlbWlib2xkJz5cclxuXHRcdFx0XHRcdNCl0L7QtDogPEdhbWVTeW1ib2wgc3ltYm9sPXtjdXJyZW50TW92ZX0gY2xhc3NOYW1lPXsndy01IGgtNSd9IC8+eycgJ31cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC14cyBsZWFkaW5nLXRpZ2h0IHRleHQtc2xhdGUtNDAwJz5cclxuXHRcdFx0XHRcdNCh0LvQtdC00YPRjtGJ0LjQuTpcclxuXHRcdFx0XHRcdDxHYW1lU3ltYm9sIHN5bWJvbD17bmV4dE1vdmV9IGNsYXNzTmFtZT17J3ctMyBoLTMnfSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0e2FjdGlvbnN9XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdhbWVHcmlkKHsgY2hpbGRyZW4gfSkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtW3JlcGVhdCgxOSxfMzBweCldIGdyaWQtcm93cy1bcmVwZWF0KDE5LF8zMHB4KV0gcGwtcHggcHQtcHggbXQtMyc+XHJcblx0XHRcdHtjaGlsZHJlbn1cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG4iXSwibmFtZXMiOlsiY2xzeCIsIlVJYnV0dG9uIiwiR2FtZVN5bWJvbCIsIkdhbWVGaWVsZCIsImNsYXNzTmFtZSIsImNlbGxzIiwiY3VycmVudE1vdmUiLCJuZXh0TW92ZSIsImhhbmRsZUNlbGxDbGljayIsIndpbm5lclNlcXVlbmNlIiwid2lubmVyU3ltYm9sIiwiR2FtZUZpZWxkTGF5b3V0IiwiR2FtZU1vdmVJbmZvIiwiYWN0aW9ucyIsInNpemUiLCJ2YXJpYW50IiwiR2FtZUdyaWQiLCJtYXAiLCJzeW1ib2wiLCJpIiwiR2FtZUNlbGwiLCJkaXNhYmxlZCIsImlzV2lubmVyIiwiaW5jbHVkZXMiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJidXR0b24iLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/game-field.jsx\n"));

/***/ })

});