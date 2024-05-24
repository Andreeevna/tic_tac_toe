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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_game_game_cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/game/game-cell */ \"./components/game/game-cell.jsx\");\n/* harmony import */ var _components_game_game_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/game/game-info */ \"./components/game/game-info.jsx\");\n/* harmony import */ var _components_game_use_game_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/game/use-game.state */ \"./components/game/use-game.state.js\");\n/* harmony import */ var _styles_Game_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../styles/Game.module.css */ \"./styles/Game.module.css\");\n/* harmony import */ var _styles_Game_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Game_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst SYMBOL_X = \"X\";\nconst SYMBOL_O = \"O\";\nconst computeWinner = (cells)=>{\n    const lines = [\n        [\n            0,\n            1,\n            2\n        ],\n        [\n            3,\n            4,\n            5\n        ],\n        [\n            6,\n            7,\n            8\n        ],\n        [\n            0,\n            3,\n            6\n        ],\n        [\n            1,\n            4,\n            7\n        ],\n        [\n            2,\n            5,\n            8\n        ],\n        [\n            0,\n            4,\n            8\n        ],\n        [\n            2,\n            4,\n            6\n        ]\n    ];\n    for(let i = 0; i < lines.length; i++){\n        const [a, b, c] = lines[i];\n        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {\n            return [\n                a,\n                b,\n                c\n            ];\n        }\n    }\n};\nfunction App() {\n    _s();\n    const { cells, currentStep, winnerSeq, handleCellClick, handleResetClick, winnerSymbol, isDraw } = (0,_components_game_use_game_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Game_module_css__WEBPACK_IMPORTED_MODULE_4___default().game),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_game_info__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                isDraw: isDraw,\n                winnerSeq: winnerSeq,\n                winnerSymbol: winnerSymbol,\n                currentStep: currentStep\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\pages\\\\index.jsx\",\n                lineNumber: 42,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Game_module_css__WEBPACK_IMPORTED_MODULE_4___default().game_field),\n                children: cells.map((symbol, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_game_cell__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        symbol: symbol,\n                        isWinner: winnerSeq === null || winnerSeq === void 0 ? void 0 : winnerSeq.includes(index),\n                        onClick: ()=>handleCellClick(index)\n                    }, index, false, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 7\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\pages\\\\index.jsx\",\n                lineNumber: 49,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_Game_module_css__WEBPACK_IMPORTED_MODULE_4___default().reset),\n                onClick: handleResetClick,\n                children: \"Сбросить\"\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\pages\\\\index.jsx\",\n                lineNumber: 61,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\pages\\\\index.jsx\",\n        lineNumber: 41,\n        columnNumber: 3\n    }, this);\n}\n_s(App, \"8eHJeMv8b+AmK+eYlTJfFlk47Fo=\", false, function() {\n    return [\n        _components_game_use_game_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFtRDtBQUNBO0FBQ1M7QUFDWjtBQUVoRCxNQUFNSSxXQUFXO0FBQ2pCLE1BQU1DLFdBQVc7QUFFakIsTUFBTUMsZ0JBQWdCQyxDQUFBQTtJQUNyQixNQUFNQyxRQUFRO1FBQ2I7WUFBQztZQUFHO1lBQUc7U0FBRTtRQUNUO1lBQUM7WUFBRztZQUFHO1NBQUU7UUFDVDtZQUFDO1lBQUc7WUFBRztTQUFFO1FBQ1Q7WUFBQztZQUFHO1lBQUc7U0FBRTtRQUNUO1lBQUM7WUFBRztZQUFHO1NBQUU7UUFDVDtZQUFDO1lBQUc7WUFBRztTQUFFO1FBQ1Q7WUFBQztZQUFHO1lBQUc7U0FBRTtRQUNUO1lBQUM7WUFBRztZQUFHO1NBQUU7S0FDVDtJQUVELElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJRCxNQUFNRSxNQUFNLEVBQUVELElBQUs7UUFDdEMsTUFBTSxDQUFDRSxHQUFHQyxHQUFHQyxFQUFFLEdBQUdMLEtBQUssQ0FBQ0MsRUFBRTtRQUMxQixJQUFJRixLQUFLLENBQUNJLEVBQUUsSUFBSUosS0FBSyxDQUFDSSxFQUFFLEtBQUtKLEtBQUssQ0FBQ0ssRUFBRSxJQUFJTCxLQUFLLENBQUNJLEVBQUUsS0FBS0osS0FBSyxDQUFDTSxFQUFFLEVBQUU7WUFDL0QsT0FBTztnQkFBQ0Y7Z0JBQUdDO2dCQUFHQzthQUFFO1FBQ2pCO0lBQ0Q7QUFDRDtBQUVBLFNBQVNDOztJQUNSLE1BQU0sRUFDTFAsS0FBSyxFQUNMUSxXQUFXLEVBQ1hDLFNBQVMsRUFDVEMsZUFBZSxFQUNmQyxnQkFBZ0IsRUFDaEJDLFlBQVksRUFDWkMsTUFBTSxFQUNOLEdBQUdsQiwyRUFBWUE7SUFFaEIscUJBQ0MsOERBQUNtQjtRQUFJQyxXQUFXbkIscUVBQVc7OzBCQUMxQiw4REFBQ0Ysa0VBQVFBO2dCQUNSbUIsUUFBUUE7Z0JBQ1JKLFdBQVdBO2dCQUNYRyxjQUFjQTtnQkFDZEosYUFBYUE7Ozs7OzswQkFHZCw4REFBQ007Z0JBQUlDLFdBQVduQiwyRUFBaUI7MEJBQy9CSSxNQUFNa0IsR0FBRyxDQUFDLENBQUNDLFFBQVFDO29CQUNuQixxQkFDQyw4REFBQzNCLGtFQUFRQTt3QkFFUjBCLFFBQVFBO3dCQUNSRSxRQUFRLEVBQUVaLHNCQUFBQSxnQ0FBQUEsVUFBV2EsUUFBUSxDQUFDRjt3QkFDOUJHLFNBQVMsSUFBTWIsZ0JBQWdCVTt1QkFIMUJBOzs7OztnQkFNUjs7Ozs7OzBCQUVELDhEQUFDSTtnQkFBT1QsV0FBV25CLHNFQUFZO2dCQUFFMkIsU0FBU1o7MEJBQWtCOzs7Ozs7Ozs7Ozs7QUFLL0Q7R0FyQ1NKOztRQVNKWix1RUFBWUE7OztLQVRSWTtBQXVDVCwrREFBZUEsR0FBR0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUNlbGwgZnJvbSAnLi4vY29tcG9uZW50cy9nYW1lL2dhbWUtY2VsbCdcclxuaW1wb3J0IEdhbWVJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvZ2FtZS9nYW1lLWluZm8nXHJcbmltcG9ydCB1c2VHYW1lU3RhdGUgZnJvbSAnLi4vY29tcG9uZW50cy9nYW1lL3VzZS1nYW1lLnN0YXRlJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vLi4vc3R5bGVzL0dhbWUubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IFNZTUJPTF9YID0gJ1gnXHJcbmNvbnN0IFNZTUJPTF9PID0gJ08nXHJcblxyXG5jb25zdCBjb21wdXRlV2lubmVyID0gY2VsbHMgPT4ge1xyXG5cdGNvbnN0IGxpbmVzID0gW1xyXG5cdFx0WzAsIDEsIDJdLFxyXG5cdFx0WzMsIDQsIDVdLFxyXG5cdFx0WzYsIDcsIDhdLFxyXG5cdFx0WzAsIDMsIDZdLFxyXG5cdFx0WzEsIDQsIDddLFxyXG5cdFx0WzIsIDUsIDhdLFxyXG5cdFx0WzAsIDQsIDhdLFxyXG5cdFx0WzIsIDQsIDZdLFxyXG5cdF1cclxuXHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0Y29uc3QgW2EsIGIsIGNdID0gbGluZXNbaV1cclxuXHRcdGlmIChjZWxsc1thXSAmJiBjZWxsc1thXSA9PT0gY2VsbHNbYl0gJiYgY2VsbHNbYV0gPT09IGNlbGxzW2NdKSB7XHJcblx0XHRcdHJldHVybiBbYSwgYiwgY11cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuXHRjb25zdCB7XHJcblx0XHRjZWxscyxcclxuXHRcdGN1cnJlbnRTdGVwLFxyXG5cdFx0d2lubmVyU2VxLFxyXG5cdFx0aGFuZGxlQ2VsbENsaWNrLFxyXG5cdFx0aGFuZGxlUmVzZXRDbGljayxcclxuXHRcdHdpbm5lclN5bWJvbCxcclxuXHRcdGlzRHJhdyxcclxuXHR9ID0gdXNlR2FtZVN0YXRlKClcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2FtZX0+XHJcblx0XHRcdDxHYW1lSW5mb1xyXG5cdFx0XHRcdGlzRHJhdz17aXNEcmF3fVxyXG5cdFx0XHRcdHdpbm5lclNlcT17d2lubmVyU2VxfVxyXG5cdFx0XHRcdHdpbm5lclN5bWJvbD17d2lubmVyU3ltYm9sfVxyXG5cdFx0XHRcdGN1cnJlbnRTdGVwPXtjdXJyZW50U3RlcH1cclxuXHRcdFx0Lz5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2FtZV9maWVsZH0+XHJcblx0XHRcdFx0e2NlbGxzLm1hcCgoc3ltYm9sLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0PEdhbWVDZWxsXHJcblx0XHRcdFx0XHRcdFx0a2V5PXtpbmRleH1cclxuXHRcdFx0XHRcdFx0XHRzeW1ib2w9e3N5bWJvbH1cclxuXHRcdFx0XHRcdFx0XHRpc1dpbm5lcj17d2lubmVyU2VxPy5pbmNsdWRlcyhpbmRleCl9XHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlQ2VsbENsaWNrKGluZGV4KX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHR9KX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMucmVzZXR9IG9uQ2xpY2s9e2hhbmRsZVJlc2V0Q2xpY2t9PlxyXG5cdFx0XHRcdNCh0LHRgNC+0YHQuNGC0YxcclxuXHRcdFx0PC9idXR0b24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcFxyXG4iXSwibmFtZXMiOlsiR2FtZUNlbGwiLCJHYW1lSW5mbyIsInVzZUdhbWVTdGF0ZSIsInN0eWxlcyIsIlNZTUJPTF9YIiwiU1lNQk9MX08iLCJjb21wdXRlV2lubmVyIiwiY2VsbHMiLCJsaW5lcyIsImkiLCJsZW5ndGgiLCJhIiwiYiIsImMiLCJBcHAiLCJjdXJyZW50U3RlcCIsIndpbm5lclNlcSIsImhhbmRsZUNlbGxDbGljayIsImhhbmRsZVJlc2V0Q2xpY2siLCJ3aW5uZXJTeW1ib2wiLCJpc0RyYXciLCJkaXYiLCJjbGFzc05hbWUiLCJnYW1lIiwiZ2FtZV9maWVsZCIsIm1hcCIsInN5bWJvbCIsImluZGV4IiwiaXNXaW5uZXIiLCJpbmNsdWRlcyIsIm9uQ2xpY2siLCJidXR0b24iLCJyZXNldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ }),

/***/ "./components/game/use-game.state.js":
/*!*******************************************!*\
  !*** ./components/game/use-game.state.js ***!
  \*******************************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nvar _s = $RefreshSig$();\nfunction useGameState() {\n    _s();\n    const [cells, setCells] = useState([\n        null,\n        null,\n        null,\n        null,\n        null,\n        null,\n        null,\n        null,\n        null\n    ]);\n    const [currentStep, setCurrentStep] = useState(SYMBOL_O);\n    const [winnerSeq, setWinnerSeq] = useState();\n    const handleCellClick = (index)=>{\n        if (cells[index] || winnerSeq) {\n            return;\n        }\n        const copyCells = cells.slice();\n        copyCells[index] = currentStep;\n        const winner = computeWinner(copyCells);\n        setCells(copyCells);\n        setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);\n        setWinnerSeq(winner);\n    };\n    const handleResetClick = ()=>{\n        setCells(Array.from({\n            length: 9\n        }, ()=>null));\n        setCurrentStep(SYMBOL_X);\n        setWinnerSeq(null);\n    };\n    const winnerSymbol = winnerSeq ? cells[winnerSeq[0]] : undefined;\n    const isDraw = !winnerSeq && cells.filter((value)=>value).length === 9;\n    return {\n        cells,\n        currentStep,\n        winnerSeq,\n        handleCellClick,\n        handleResetClick,\n        winnerSymbol,\n        isDraw\n    };\n}\n_s(useGameState, \"p7efUG3Pyc204rpzNFqj2euneeU=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useGameState);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvdXNlLWdhbWUuc3RhdGUuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTQTs7SUFDUixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0MsU0FBUztRQUNsQztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDQTtJQUNELE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHRixTQUFTRztJQUMvQyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0w7SUFFbEMsTUFBTU0sa0JBQWtCQyxDQUFBQTtRQUN2QixJQUFJVCxLQUFLLENBQUNTLE1BQU0sSUFBSUgsV0FBVztZQUM5QjtRQUNEO1FBRUEsTUFBTUksWUFBWVYsTUFBTVcsS0FBSztRQUM3QkQsU0FBUyxDQUFDRCxNQUFNLEdBQUdOO1FBQ25CLE1BQU1TLFNBQVNDLGNBQWNIO1FBRTdCVCxTQUFTUztRQUNUTixlQUFlRCxnQkFBZ0JFLFdBQVdTLFdBQVdUO1FBQ3JERSxhQUFhSztJQUNkO0lBRUEsTUFBTUcsbUJBQW1CO1FBQ3hCZCxTQUFTZSxNQUFNQyxJQUFJLENBQUM7WUFBRUMsUUFBUTtRQUFFLEdBQUcsSUFBTTtRQUN6Q2QsZUFBZVU7UUFDZlAsYUFBYTtJQUNkO0lBRUEsTUFBTVksZUFBZWIsWUFBWU4sS0FBSyxDQUFDTSxTQUFTLENBQUMsRUFBRSxDQUFDLEdBQUdjO0lBQ3ZELE1BQU1DLFNBQVMsQ0FBQ2YsYUFBYU4sTUFBTXNCLE1BQU0sQ0FBQ0MsQ0FBQUEsUUFBU0EsT0FBT0wsTUFBTSxLQUFLO0lBRXJFLE9BQU87UUFDTmxCO1FBQ0FHO1FBQ0FHO1FBQ0FFO1FBQ0FPO1FBQ0FJO1FBQ0FFO0lBQ0Q7QUFDRDtHQS9DU3RCO0FBaURULCtEQUFlQSxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS91c2UtZ2FtZS5zdGF0ZS5qcz83NDQ2Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHVzZUdhbWVTdGF0ZSgpIHtcclxuXHRjb25zdCBbY2VsbHMsIHNldENlbGxzXSA9IHVzZVN0YXRlKFtcclxuXHRcdG51bGwsXHJcblx0XHRudWxsLFxyXG5cdFx0bnVsbCxcclxuXHRcdG51bGwsXHJcblx0XHRudWxsLFxyXG5cdFx0bnVsbCxcclxuXHRcdG51bGwsXHJcblx0XHRudWxsLFxyXG5cdFx0bnVsbCxcclxuXHRdKVxyXG5cdGNvbnN0IFtjdXJyZW50U3RlcCwgc2V0Q3VycmVudFN0ZXBdID0gdXNlU3RhdGUoU1lNQk9MX08pXHJcblx0Y29uc3QgW3dpbm5lclNlcSwgc2V0V2lubmVyU2VxXSA9IHVzZVN0YXRlKClcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2VsbENsaWNrID0gaW5kZXggPT4ge1xyXG5cdFx0aWYgKGNlbGxzW2luZGV4XSB8fCB3aW5uZXJTZXEpIHtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgY29weUNlbGxzID0gY2VsbHMuc2xpY2UoKVxyXG5cdFx0Y29weUNlbGxzW2luZGV4XSA9IGN1cnJlbnRTdGVwXHJcblx0XHRjb25zdCB3aW5uZXIgPSBjb21wdXRlV2lubmVyKGNvcHlDZWxscylcclxuXHJcblx0XHRzZXRDZWxscyhjb3B5Q2VsbHMpXHJcblx0XHRzZXRDdXJyZW50U3RlcChjdXJyZW50U3RlcCA9PT0gU1lNQk9MX08gPyBTWU1CT0xfWCA6IFNZTUJPTF9PKVxyXG5cdFx0c2V0V2lubmVyU2VxKHdpbm5lcilcclxuXHR9XHJcblxyXG5cdGNvbnN0IGhhbmRsZVJlc2V0Q2xpY2sgPSAoKSA9PiB7XHJcblx0XHRzZXRDZWxscyhBcnJheS5mcm9tKHsgbGVuZ3RoOiA5IH0sICgpID0+IG51bGwpKVxyXG5cdFx0c2V0Q3VycmVudFN0ZXAoU1lNQk9MX1gpXHJcblx0XHRzZXRXaW5uZXJTZXEobnVsbClcclxuXHR9XHJcblxyXG5cdGNvbnN0IHdpbm5lclN5bWJvbCA9IHdpbm5lclNlcSA/IGNlbGxzW3dpbm5lclNlcVswXV0gOiB1bmRlZmluZWRcclxuXHRjb25zdCBpc0RyYXcgPSAhd2lubmVyU2VxICYmIGNlbGxzLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSkubGVuZ3RoID09PSA5XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRjZWxscyxcclxuXHRcdGN1cnJlbnRTdGVwLFxyXG5cdFx0d2lubmVyU2VxLFxyXG5cdFx0aGFuZGxlQ2VsbENsaWNrLFxyXG5cdFx0aGFuZGxlUmVzZXRDbGljayxcclxuXHRcdHdpbm5lclN5bWJvbCxcclxuXHRcdGlzRHJhdyxcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUdhbWVTdGF0ZVxyXG4iXSwibmFtZXMiOlsidXNlR2FtZVN0YXRlIiwiY2VsbHMiLCJzZXRDZWxscyIsInVzZVN0YXRlIiwiY3VycmVudFN0ZXAiLCJzZXRDdXJyZW50U3RlcCIsIlNZTUJPTF9PIiwid2lubmVyU2VxIiwic2V0V2lubmVyU2VxIiwiaGFuZGxlQ2VsbENsaWNrIiwiaW5kZXgiLCJjb3B5Q2VsbHMiLCJzbGljZSIsIndpbm5lciIsImNvbXB1dGVXaW5uZXIiLCJTWU1CT0xfWCIsImhhbmRsZVJlc2V0Q2xpY2siLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJ3aW5uZXJTeW1ib2wiLCJ1bmRlZmluZWQiLCJpc0RyYXciLCJmaWx0ZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/use-game.state.js\n"));

/***/ })

});