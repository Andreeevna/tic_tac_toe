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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../uikit/ui-button */ \"./components/uikit/ui-button.jsx\");\n/* harmony import */ var _icons_CrossIon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/CrossIon */ \"./components/game/icons/CrossIon.jsx\");\n/* harmony import */ var _icons_ZeroIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/ZeroIcon */ \"./components/game/icons/ZeroIcon.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst GAME_SYMBOLS = {\n    ZERO: \"zero\",\n    CROSS: \"cross\",\n    TRINGLE: \"triangle\",\n    SQUARE: \"square\"\n};\nconst MOVE_ORDER = [\n    GAME_SYMBOLS.CROSS,\n    GAME_SYMBOLS.ZERO,\n    GAME_SYMBOLS.TRINGLE,\n    GAME_SYMBOLS.SQUARE\n];\nfunction getNextMove(currentMove) {\n    return;\n}\nconst GameField = (param)=>{\n    let { className } = param;\n    _s();\n    const [cells, setSells] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>new Array(19 * 19).fill(null));\n    const [currentMove, setCurrentMove] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(GAME_SYMBOLS.CROSS);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameFieldLayout, {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {\n                actions: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_3__.UIbutton, {\n                            size: \"md\",\n                            variant: \"primary\",\n                            children: \"Ничья\"\n                        }, void 0, false, void 0, void 0),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_3__.UIbutton, {\n                            size: \"md\",\n                            variant: \"outline\",\n                            children: \"Сдаться\"\n                        }, void 0, false, void 0, void 0)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 31,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameGrid, {\n                children: cells.map((_, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {}, i, false, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 43,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 30,\n        columnNumber: 3\n    }, undefined);\n};\n_s(GameField, \"yuuOuT8SEFKuwAuQver4GSMYjwk=\");\n_c = GameField;\nfunction GameCell(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"border border-slate-200 -ml-px -mt-px flex items-center justify-center\",\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 54,\n        columnNumber: 3\n    }, this);\n}\n_c1 = GameCell;\nfunction GameFieldLayout(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 pt-5 pb-7\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 62,\n        columnNumber: 3\n    }, this);\n}\n_c2 = GameFieldLayout;\nfunction GameMoveInfo(param) {\n    let { actions } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xl leading-tight font-semibold\",\n                        children: [\n                            \"Ход: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_ZeroIcon__WEBPACK_IMPORTED_MODULE_5__.ZeroIcon, {\n                                className: \"w-5 h-5\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xs leading-tight text-slate-400\",\n                        children: [\n                            \"Следующий:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_CrossIon__WEBPACK_IMPORTED_MODULE_4__.CrossIon, {}, void 0, false, {\n                                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 76,\n                columnNumber: 4\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 75,\n        columnNumber: 3\n    }, this);\n}\n_c3 = GameMoveInfo;\nfunction GameGrid(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3\",\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 92,\n        columnNumber: 3\n    }, this);\n}\n_c4 = GameGrid;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameCell\");\n$RefreshReg$(_c2, \"GameFieldLayout\");\n$RefreshReg$(_c3, \"GameMoveInfo\");\n$RefreshReg$(_c4, \"GameGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1maWVsZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFDUztBQUNhO0FBQ0Y7QUFDQTtBQUUzQyxNQUFNSyxlQUFlO0lBQ3BCQyxNQUFNO0lBQ05DLE9BQU87SUFDUEMsU0FBUztJQUNUQyxRQUFRO0FBQ1Q7QUFFQSxNQUFNQyxhQUFhO0lBQ2xCTCxhQUFhRSxLQUFLO0lBQ2xCRixhQUFhQyxJQUFJO0lBQ2pCRCxhQUFhRyxPQUFPO0lBQ3BCSCxhQUFhSSxNQUFNO0NBQ25CO0FBRUQsU0FBU0UsWUFBWUMsV0FBVztJQUMvQjtBQUNEO0FBRU8sTUFBTUMsWUFBWTtRQUFDLEVBQUVDLFNBQVMsRUFBRTs7SUFDdEMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdmLCtDQUFRQSxDQUFDLElBQU0sSUFBSWdCLE1BQU0sS0FBSyxJQUFJQyxJQUFJLENBQUM7SUFDakUsTUFBTSxDQUFDTixhQUFhTyxlQUFlLEdBQUdsQiwrQ0FBUUEsQ0FBQ0ksYUFBYUUsS0FBSztJQUVqRSxxQkFDQyw4REFBQ2E7UUFBZ0JOLFdBQVdBOzswQkFDM0IsOERBQUNPO2dCQUNBQyx1QkFDQzs7c0NBQ0MsOERBQUNwQixzREFBUUE7NEJBQUNxQixNQUFLOzRCQUFLQyxTQUFRO3NDQUFVOztzQ0FHdEMsOERBQUN0QixzREFBUUE7NEJBQUNxQixNQUFLOzRCQUFLQyxTQUFRO3NDQUFVOzs7Ozs7Ozs7MEJBTXpDLDhEQUFDQzswQkFDQ1YsTUFBTVcsR0FBRyxDQUFDLENBQUNDLEdBQUdDO29CQUNkLHFCQUFPLDhEQUFDQyxjQUFjRDs7Ozs7Z0JBQ3ZCOzs7Ozs7Ozs7Ozs7QUFJSixFQUFDO0dBekJZZjtLQUFBQTtBQTJCYixTQUFTZ0IsU0FBUyxLQUFZO1FBQVosRUFBRUMsUUFBUSxFQUFFLEdBQVo7SUFDakIscUJBQ0MsOERBQUNDO1FBQU9qQixXQUFVO2tCQUNoQmdCOzs7Ozs7QUFHSjtNQU5TRDtBQVFULFNBQVNULGdCQUFnQixLQUF1QjtRQUF2QixFQUFFVSxRQUFRLEVBQUVoQixTQUFTLEVBQUUsR0FBdkI7SUFDeEIscUJBQ0MsOERBQUNrQjtRQUNBbEIsV0FBV2QsZ0RBQUlBLENBQ2RjLFdBQ0E7a0JBR0FnQjs7Ozs7O0FBR0o7TUFYU1Y7QUFhVCxTQUFTQyxhQUFhLEtBQVc7UUFBWCxFQUFFQyxPQUFPLEVBQUUsR0FBWDtJQUNyQixxQkFDQyw4REFBQ1U7UUFBSWxCLFdBQVU7OzBCQUNkLDhEQUFDa0I7Z0JBQUlsQixXQUFVOztrQ0FDZCw4REFBQ2tCO3dCQUFJbEIsV0FBVTs7NEJBQThEOzBDQUN2RSw4REFBQ1YscURBQVFBO2dDQUFDVSxXQUFXOzs7Ozs7Ozs7Ozs7a0NBRTNCLDhEQUFDa0I7d0JBQUlsQixXQUFVOzs0QkFBK0Q7MENBRTdFLDhEQUFDWCxxREFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR1ZtQjs7Ozs7OztBQUdKO01BZlNEO0FBaUJULFNBQVNJLFNBQVMsS0FBWTtRQUFaLEVBQUVLLFFBQVEsRUFBRSxHQUFaO0lBQ2pCLHFCQUNDLDhEQUFDRTtRQUFJbEIsV0FBVTtrQkFDYmdCOzs7Ozs7QUFHSjtNQU5TTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1maWVsZC5qc3g/YzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBVSWJ1dHRvbiB9IGZyb20gJy4uL3Vpa2l0L3VpLWJ1dHRvbidcclxuaW1wb3J0IHsgQ3Jvc3NJb24gfSBmcm9tICcuL2ljb25zL0Nyb3NzSW9uJ1xyXG5pbXBvcnQgeyBaZXJvSWNvbiB9IGZyb20gJy4vaWNvbnMvWmVyb0ljb24nXHJcblxyXG5jb25zdCBHQU1FX1NZTUJPTFMgPSB7XHJcblx0WkVSTzogJ3plcm8nLFxyXG5cdENST1NTOiAnY3Jvc3MnLFxyXG5cdFRSSU5HTEU6ICd0cmlhbmdsZScsXHJcblx0U1FVQVJFOiAnc3F1YXJlJyxcclxufVxyXG5cclxuY29uc3QgTU9WRV9PUkRFUiA9IFtcclxuXHRHQU1FX1NZTUJPTFMuQ1JPU1MsXHJcblx0R0FNRV9TWU1CT0xTLlpFUk8sXHJcblx0R0FNRV9TWU1CT0xTLlRSSU5HTEUsXHJcblx0R0FNRV9TWU1CT0xTLlNRVUFSRSxcclxuXVxyXG5cclxuZnVuY3Rpb24gZ2V0TmV4dE1vdmUoY3VycmVudE1vdmUpIHtcclxuXHRyZXR1cm5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdhbWVGaWVsZCA9ICh7IGNsYXNzTmFtZSB9KSA9PiB7XHJcblx0Y29uc3QgW2NlbGxzLCBzZXRTZWxsc10gPSB1c2VTdGF0ZSgoKSA9PiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSlcclxuXHRjb25zdCBbY3VycmVudE1vdmUsIHNldEN1cnJlbnRNb3ZlXSA9IHVzZVN0YXRlKEdBTUVfU1lNQk9MUy5DUk9TUylcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxHYW1lRmllbGRMYXlvdXQgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG5cdFx0XHQ8R2FtZU1vdmVJbmZvXHJcblx0XHRcdFx0YWN0aW9ucz17XHJcblx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHQ8VUlidXR0b24gc2l6ZT0nbWQnIHZhcmlhbnQ9J3ByaW1hcnknPlxyXG5cdFx0XHRcdFx0XHRcdNCd0LjRh9GM0Y9cclxuXHRcdFx0XHRcdFx0PC9VSWJ1dHRvbj5cclxuXHRcdFx0XHRcdFx0PFVJYnV0dG9uIHNpemU9J21kJyB2YXJpYW50PSdvdXRsaW5lJz5cclxuXHRcdFx0XHRcdFx0XHTQodC00LDRgtGM0YHRj1xyXG5cdFx0XHRcdFx0XHQ8L1VJYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8R2FtZUdyaWQ+XHJcblx0XHRcdFx0e2NlbGxzLm1hcCgoXywgaSkgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDxHYW1lQ2VsbCBrZXk9e2l9PjwvR2FtZUNlbGw+XHJcblx0XHRcdFx0fSl9XHJcblx0XHRcdDwvR2FtZUdyaWQ+XHJcblx0XHQ8L0dhbWVGaWVsZExheW91dD5cclxuXHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdhbWVDZWxsKHsgY2hpbGRyZW4gfSkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0nYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgLW1sLXB4IC1tdC1weCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XHJcblx0XHRcdHtjaGlsZHJlbn1cclxuXHRcdDwvYnV0dG9uPlxyXG5cdClcclxufVxyXG5cclxuZnVuY3Rpb24gR2FtZUZpZWxkTGF5b3V0KHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPXtjbHN4KFxyXG5cdFx0XHRcdGNsYXNzTmFtZSxcclxuXHRcdFx0XHQnYmctd2hpdGUgcm91bmRlZC0yeGwgc2hhZG93LW1kIHB4LTggcHQtNSBwYi03J1xyXG5cdFx0XHQpfVxyXG5cdFx0PlxyXG5cdFx0XHR7Y2hpbGRyZW59XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdhbWVNb3ZlSW5mbyh7IGFjdGlvbnMgfSkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtMyBpdGVtcy1jZW50ZXInPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQteGwgbGVhZGluZy10aWdodCBmb250LXNlbWlib2xkJz5cclxuXHRcdFx0XHRcdNCl0L7QtDogPFplcm9JY29uIGNsYXNzTmFtZT17J3ctNSBoLTUnfSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXhzIGxlYWRpbmctdGlnaHQgdGV4dC1zbGF0ZS00MDAnPlxyXG5cdFx0XHRcdFx00KHQu9C10LTRg9GO0YnQuNC5OlxyXG5cdFx0XHRcdFx0PENyb3NzSW9uIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHR7YWN0aW9uc31cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZnVuY3Rpb24gR2FtZUdyaWQoeyBjaGlsZHJlbiB9KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy1bcmVwZWF0KDE5LF8zMHB4KV0gZ3JpZC1yb3dzLVtyZXBlYXQoMTksXzMwcHgpXSBwbC1weCBwdC1weCBtdC0zJz5cclxuXHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjbHN4IiwidXNlU3RhdGUiLCJVSWJ1dHRvbiIsIkNyb3NzSW9uIiwiWmVyb0ljb24iLCJHQU1FX1NZTUJPTFMiLCJaRVJPIiwiQ1JPU1MiLCJUUklOR0xFIiwiU1FVQVJFIiwiTU9WRV9PUkRFUiIsImdldE5leHRNb3ZlIiwiY3VycmVudE1vdmUiLCJHYW1lRmllbGQiLCJjbGFzc05hbWUiLCJjZWxscyIsInNldFNlbGxzIiwiQXJyYXkiLCJmaWxsIiwic2V0Q3VycmVudE1vdmUiLCJHYW1lRmllbGRMYXlvdXQiLCJHYW1lTW92ZUluZm8iLCJhY3Rpb25zIiwic2l6ZSIsInZhcmlhbnQiLCJHYW1lR3JpZCIsIm1hcCIsIl8iLCJpIiwiR2FtZUNlbGwiLCJjaGlsZHJlbiIsImJ1dHRvbiIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/game-field.jsx\n"));

/***/ })

});