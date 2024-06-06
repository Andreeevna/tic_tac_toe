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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../uikit/ui-button */ \"./components/uikit/ui-button.jsx\");\n/* harmony import */ var _icons_CrossIon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/CrossIon */ \"./components/game/icons/CrossIon.jsx\");\n/* harmony import */ var _icons_ZeroIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/ZeroIcon */ \"./components/game/icons/ZeroIcon.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst GAME_SYMBOLS = {\n    ZERO: \"zero\",\n    CROSS: \"cross\",\n    TRINGLE: \"triangle\",\n    SQUARE: \"square\"\n};\nconst MOVE_ORDER = [\n    GAME_SYMBOLS.CROSS,\n    GAME_SYMBOLS.ZERO,\n    GAME_SYMBOLS.TRINGLE,\n    GAME_SYMBOLS.SQUARE\n];\nfunction getNextMove(currentMove) {\n    const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;\n    var _MOVE_ORDER_nextMoveIndex;\n    return (_MOVE_ORDER_nextMoveIndex = MOVE_ORDER[nextMoveIndex]) !== null && _MOVE_ORDER_nextMoveIndex !== void 0 ? _MOVE_ORDER_nextMoveIndex : MOVE_ORDER[0];\n}\nconst GameField = (param)=>{\n    let { className } = param;\n    _s();\n    const [cells, setSells] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>new Array(19 * 19).fill(null));\n    const [currentMove, setCurrentMove] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(GAME_SYMBOLS.CROSS);\n    const nextMove = getNextMove(currentMove);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameFieldLayout, {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {\n                actions: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_3__.UIbutton, {\n                            size: \"md\",\n                            variant: \"primary\",\n                            children: \"Ничья\"\n                        }, void 0, false, void 0, void 0),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_3__.UIbutton, {\n                            size: \"md\",\n                            variant: \"outline\",\n                            children: \"Сдаться\"\n                        }, void 0, false, void 0, void 0)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 34,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameGrid, {\n                children: cells.map((_, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {}, i, false, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 46,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 33,\n        columnNumber: 3\n    }, undefined);\n};\n_s(GameField, \"yuuOuT8SEFKuwAuQver4GSMYjwk=\");\n_c = GameField;\nfunction GameCell(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"border border-slate-200 -ml-px -mt-px flex items-center justify-center\",\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 57,\n        columnNumber: 3\n    }, this);\n}\n_c1 = GameCell;\nfunction GameFieldLayout(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 pt-5 pb-7\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 65,\n        columnNumber: 3\n    }, this);\n}\n_c2 = GameFieldLayout;\nfunction GameMoveInfo(param) {\n    let { actions, currentMove, nextMove } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xl leading-tight font-semibold\",\n                        children: [\n                            \"Ход: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_ZeroIcon__WEBPACK_IMPORTED_MODULE_5__.ZeroIcon, {\n                                className: \"w-5 h-5\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xs leading-tight text-slate-400\",\n                        children: [\n                            \"Следующий:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_CrossIon__WEBPACK_IMPORTED_MODULE_4__.CrossIon, {}, void 0, false, {\n                                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 79,\n                columnNumber: 4\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 78,\n        columnNumber: 3\n    }, this);\n}\n_c3 = GameMoveInfo;\nfunction GameGrid(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3\",\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 95,\n        columnNumber: 3\n    }, this);\n}\n_c4 = GameGrid;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameCell\");\n$RefreshReg$(_c2, \"GameFieldLayout\");\n$RefreshReg$(_c3, \"GameMoveInfo\");\n$RefreshReg$(_c4, \"GameGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1maWVsZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFDUztBQUNhO0FBQ0Y7QUFDQTtBQUUzQyxNQUFNSyxlQUFlO0lBQ3BCQyxNQUFNO0lBQ05DLE9BQU87SUFDUEMsU0FBUztJQUNUQyxRQUFRO0FBQ1Q7QUFFQSxNQUFNQyxhQUFhO0lBQ2xCTCxhQUFhRSxLQUFLO0lBQ2xCRixhQUFhQyxJQUFJO0lBQ2pCRCxhQUFhRyxPQUFPO0lBQ3BCSCxhQUFhSSxNQUFNO0NBQ25CO0FBRUQsU0FBU0UsWUFBWUMsV0FBVztJQUMvQixNQUFNQyxnQkFBZ0JILFdBQVdJLE9BQU8sQ0FBQ0YsZUFBZTtRQUNqREY7SUFBUCxPQUFPQSxDQUFBQSw0QkFBQUEsVUFBVSxDQUFDRyxjQUFjLGNBQXpCSCx1Q0FBQUEsNEJBQTZCQSxVQUFVLENBQUMsRUFBRTtBQUNsRDtBQUVPLE1BQU1LLFlBQVk7UUFBQyxFQUFFQyxTQUFTLEVBQUU7O0lBQ3RDLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHakIsK0NBQVFBLENBQUMsSUFBTSxJQUFJa0IsTUFBTSxLQUFLLElBQUlDLElBQUksQ0FBQztJQUNqRSxNQUFNLENBQUNSLGFBQWFTLGVBQWUsR0FBR3BCLCtDQUFRQSxDQUFDSSxhQUFhRSxLQUFLO0lBRWpFLE1BQU1lLFdBQVdYLFlBQVlDO0lBRTdCLHFCQUNDLDhEQUFDVztRQUFnQlAsV0FBV0E7OzBCQUMzQiw4REFBQ1E7Z0JBQ0FDLHVCQUNDOztzQ0FDQyw4REFBQ3ZCLHNEQUFRQTs0QkFBQ3dCLE1BQUs7NEJBQUtDLFNBQVE7c0NBQVU7O3NDQUd0Qyw4REFBQ3pCLHNEQUFRQTs0QkFBQ3dCLE1BQUs7NEJBQUtDLFNBQVE7c0NBQVU7Ozs7Ozs7OzswQkFNekMsOERBQUNDOzBCQUNDWCxNQUFNWSxHQUFHLENBQUMsQ0FBQ0MsR0FBR0M7b0JBQ2QscUJBQU8sOERBQUNDLGNBQWNEOzs7OztnQkFDdkI7Ozs7Ozs7Ozs7OztBQUlKLEVBQUM7R0EzQlloQjtLQUFBQTtBQTZCYixTQUFTaUIsU0FBUyxLQUFZO1FBQVosRUFBRUMsUUFBUSxFQUFFLEdBQVo7SUFDakIscUJBQ0MsOERBQUNDO1FBQU9sQixXQUFVO2tCQUNoQmlCOzs7Ozs7QUFHSjtNQU5TRDtBQVFULFNBQVNULGdCQUFnQixLQUF1QjtRQUF2QixFQUFFVSxRQUFRLEVBQUVqQixTQUFTLEVBQUUsR0FBdkI7SUFDeEIscUJBQ0MsOERBQUNtQjtRQUNBbkIsV0FBV2hCLGdEQUFJQSxDQUNkZ0IsV0FDQTtrQkFHQWlCOzs7Ozs7QUFHSjtNQVhTVjtBQWFULFNBQVNDLGFBQWEsS0FBa0M7UUFBbEMsRUFBRUMsT0FBTyxFQUFFYixXQUFXLEVBQUVVLFFBQVEsRUFBRSxHQUFsQztJQUNyQixxQkFDQyw4REFBQ2E7UUFBSW5CLFdBQVU7OzBCQUNkLDhEQUFDbUI7Z0JBQUluQixXQUFVOztrQ0FDZCw4REFBQ21CO3dCQUFJbkIsV0FBVTs7NEJBQThEOzBDQUN2RSw4REFBQ1oscURBQVFBO2dDQUFDWSxXQUFXOzs7Ozs7Ozs7Ozs7a0NBRTNCLDhEQUFDbUI7d0JBQUluQixXQUFVOzs0QkFBK0Q7MENBRTdFLDhEQUFDYixxREFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR1ZzQjs7Ozs7OztBQUdKO01BZlNEO0FBaUJULFNBQVNJLFNBQVMsS0FBWTtRQUFaLEVBQUVLLFFBQVEsRUFBRSxHQUFaO0lBQ2pCLHFCQUNDLDhEQUFDRTtRQUFJbkIsV0FBVTtrQkFDYmlCOzs7Ozs7QUFHSjtNQU5TTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1maWVsZC5qc3g/YzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBVSWJ1dHRvbiB9IGZyb20gJy4uL3Vpa2l0L3VpLWJ1dHRvbidcclxuaW1wb3J0IHsgQ3Jvc3NJb24gfSBmcm9tICcuL2ljb25zL0Nyb3NzSW9uJ1xyXG5pbXBvcnQgeyBaZXJvSWNvbiB9IGZyb20gJy4vaWNvbnMvWmVyb0ljb24nXHJcblxyXG5jb25zdCBHQU1FX1NZTUJPTFMgPSB7XHJcblx0WkVSTzogJ3plcm8nLFxyXG5cdENST1NTOiAnY3Jvc3MnLFxyXG5cdFRSSU5HTEU6ICd0cmlhbmdsZScsXHJcblx0U1FVQVJFOiAnc3F1YXJlJyxcclxufVxyXG5cclxuY29uc3QgTU9WRV9PUkRFUiA9IFtcclxuXHRHQU1FX1NZTUJPTFMuQ1JPU1MsXHJcblx0R0FNRV9TWU1CT0xTLlpFUk8sXHJcblx0R0FNRV9TWU1CT0xTLlRSSU5HTEUsXHJcblx0R0FNRV9TWU1CT0xTLlNRVUFSRSxcclxuXVxyXG5cclxuZnVuY3Rpb24gZ2V0TmV4dE1vdmUoY3VycmVudE1vdmUpIHtcclxuXHRjb25zdCBuZXh0TW92ZUluZGV4ID0gTU9WRV9PUkRFUi5pbmRleE9mKGN1cnJlbnRNb3ZlKSArIDFcclxuXHRyZXR1cm4gTU9WRV9PUkRFUltuZXh0TW92ZUluZGV4XSA/PyBNT1ZFX09SREVSWzBdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHYW1lRmllbGQgPSAoeyBjbGFzc05hbWUgfSkgPT4ge1xyXG5cdGNvbnN0IFtjZWxscywgc2V0U2VsbHNdID0gdXNlU3RhdGUoKCkgPT4gbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCkpXHJcblx0Y29uc3QgW2N1cnJlbnRNb3ZlLCBzZXRDdXJyZW50TW92ZV0gPSB1c2VTdGF0ZShHQU1FX1NZTUJPTFMuQ1JPU1MpXHJcblxyXG5cdGNvbnN0IG5leHRNb3ZlID0gZ2V0TmV4dE1vdmUoY3VycmVudE1vdmUpXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8R2FtZUZpZWxkTGF5b3V0IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuXHRcdFx0PEdhbWVNb3ZlSW5mb1xyXG5cdFx0XHRcdGFjdGlvbnM9e1xyXG5cdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0PFVJYnV0dG9uIHNpemU9J21kJyB2YXJpYW50PSdwcmltYXJ5Jz5cclxuXHRcdFx0XHRcdFx0XHTQndC40YfRjNGPXHJcblx0XHRcdFx0XHRcdDwvVUlidXR0b24+XHJcblx0XHRcdFx0XHRcdDxVSWJ1dHRvbiBzaXplPSdtZCcgdmFyaWFudD0nb3V0bGluZSc+XHJcblx0XHRcdFx0XHRcdFx00KHQtNCw0YLRjNGB0Y9cclxuXHRcdFx0XHRcdFx0PC9VSWJ1dHRvbj5cclxuXHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PEdhbWVHcmlkPlxyXG5cdFx0XHRcdHtjZWxscy5tYXAoKF8sIGkpID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiA8R2FtZUNlbGwga2V5PXtpfT48L0dhbWVDZWxsPlxyXG5cdFx0XHRcdH0pfVxyXG5cdFx0XHQ8L0dhbWVHcmlkPlxyXG5cdFx0PC9HYW1lRmllbGRMYXlvdXQ+XHJcblx0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBHYW1lQ2VsbCh7IGNoaWxkcmVuIH0pIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGJ1dHRvbiBjbGFzc05hbWU9J2JvcmRlciBib3JkZXItc2xhdGUtMjAwIC1tbC1weCAtbXQtcHggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInPlxyXG5cdFx0XHR7Y2hpbGRyZW59XHJcblx0XHQ8L2J1dHRvbj5cclxuXHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdhbWVGaWVsZExheW91dCh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT17Y2xzeChcclxuXHRcdFx0XHRjbGFzc05hbWUsXHJcblx0XHRcdFx0J2JnLXdoaXRlIHJvdW5kZWQtMnhsIHNoYWRvdy1tZCBweC04IHB0LTUgcGItNydcclxuXHRcdFx0KX1cclxuXHRcdD5cclxuXHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBHYW1lTW92ZUluZm8oeyBhY3Rpb25zLCBjdXJyZW50TW92ZSwgbmV4dE1vdmUgfSkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtMyBpdGVtcy1jZW50ZXInPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQteGwgbGVhZGluZy10aWdodCBmb250LXNlbWlib2xkJz5cclxuXHRcdFx0XHRcdNCl0L7QtDogPFplcm9JY29uIGNsYXNzTmFtZT17J3ctNSBoLTUnfSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXhzIGxlYWRpbmctdGlnaHQgdGV4dC1zbGF0ZS00MDAnPlxyXG5cdFx0XHRcdFx00KHQu9C10LTRg9GO0YnQuNC5OlxyXG5cdFx0XHRcdFx0PENyb3NzSW9uIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHR7YWN0aW9uc31cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZnVuY3Rpb24gR2FtZUdyaWQoeyBjaGlsZHJlbiB9KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy1bcmVwZWF0KDE5LF8zMHB4KV0gZ3JpZC1yb3dzLVtyZXBlYXQoMTksXzMwcHgpXSBwbC1weCBwdC1weCBtdC0zJz5cclxuXHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjbHN4IiwidXNlU3RhdGUiLCJVSWJ1dHRvbiIsIkNyb3NzSW9uIiwiWmVyb0ljb24iLCJHQU1FX1NZTUJPTFMiLCJaRVJPIiwiQ1JPU1MiLCJUUklOR0xFIiwiU1FVQVJFIiwiTU9WRV9PUkRFUiIsImdldE5leHRNb3ZlIiwiY3VycmVudE1vdmUiLCJuZXh0TW92ZUluZGV4IiwiaW5kZXhPZiIsIkdhbWVGaWVsZCIsImNsYXNzTmFtZSIsImNlbGxzIiwic2V0U2VsbHMiLCJBcnJheSIsImZpbGwiLCJzZXRDdXJyZW50TW92ZSIsIm5leHRNb3ZlIiwiR2FtZUZpZWxkTGF5b3V0IiwiR2FtZU1vdmVJbmZvIiwiYWN0aW9ucyIsInNpemUiLCJ2YXJpYW50IiwiR2FtZUdyaWQiLCJtYXAiLCJfIiwiaSIsIkdhbWVDZWxsIiwiY2hpbGRyZW4iLCJidXR0b24iLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/game-field.jsx\n"));

/***/ })

});