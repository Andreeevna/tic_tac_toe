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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_game_game_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/game/game-info */ \"./components/game/game-info.jsx\");\n/* harmony import */ var _styles_Game_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../styles/Game.module.css */ \"./styles/Game.module.css\");\n/* harmony import */ var _styles_Game_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Game_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nconst SYMBOL_X = \"X\";\nconst SYMBOL_O = \"O\";\nconst computeWinner = (cells)=>{\n    const lines = [\n        [\n            0,\n            1,\n            2\n        ],\n        [\n            3,\n            4,\n            5\n        ],\n        [\n            6,\n            7,\n            8\n        ],\n        [\n            0,\n            3,\n            6\n        ],\n        [\n            1,\n            4,\n            7\n        ],\n        [\n            2,\n            5,\n            8\n        ],\n        [\n            0,\n            4,\n            8\n        ],\n        [\n            2,\n            4,\n            6\n        ]\n    ];\n    for(let i = 0; i < lines.length; i++){\n        const [a, b, c] = lines[i];\n        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {\n            return [\n                a,\n                b,\n                c\n            ];\n        }\n    }\n};\nfunction useGameState() {\n    _s();\n    const [cells, setCells] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        null,\n        null,\n        null,\n        null,\n        null,\n        null,\n        null,\n        null,\n        null\n    ]);\n    const [currentStep, setCurrentStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(SYMBOL_O);\n    const [winnerSeq, setWinnerSeq] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const handleCellClick = (index)=>{\n        if (cells[index] || winnerSeq) {\n            return;\n        }\n        const copyCells = cells.slice();\n        copyCells[index] = currentStep;\n        const winner = computeWinner(copyCells);\n        setCells(copyCells);\n        setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);\n        setWinnerSeq(winner);\n    };\n    const handleResetClick = ()=>{\n        setCells(Array.from({\n            length: 9\n        }, ()=>null));\n        setCurrentStep(SYMBOL_X);\n        setWinnerSeq(null);\n    };\n    const winnerSymbol = winnerSeq ? cells[winnerSeq[0]] : undefined;\n    const isDraw = !winnerSeq && cells.filter((value)=>value).length === 9;\n    return {\n        cells,\n        currentStep,\n        winnerSeq,\n        handleCellClick,\n        handleResetClick,\n        winnerSymbol,\n        isDraw\n    };\n}\n_s(useGameState, \"p7efUG3Pyc204rpzNFqj2euneeU=\");\nfunction App() {\n    _s1();\n    const { cells, currentStep, winnerSeq, handleCellClick, handleResetClick, winnerSymbol, isDraw } = useGameState();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Game_module_css__WEBPACK_IMPORTED_MODULE_3___default().game),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_game_info__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                isDraw: isDraw,\n                winnerSeq: winnerSeq,\n                winnerSymbol: winnerSymbol,\n                currentStep: currentStep\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\pages\\\\index.jsx\",\n                lineNumber: 90,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Game_module_css__WEBPACK_IMPORTED_MODULE_3___default().game_field),\n                children: cells.map((symbol, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {\n                        symbol: symbol,\n                        isWinner: winnerSeq === null || winnerSeq === void 0 ? void 0 : winnerSeq.includes(index),\n                        onClick: ()=>handleCellClick(index)\n                    }, index, false, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 100,\n                        columnNumber: 7\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\pages\\\\index.jsx\",\n                lineNumber: 97,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_Game_module_css__WEBPACK_IMPORTED_MODULE_3___default().reset),\n                onClick: handleResetClick,\n                children: \"Сбросить\"\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\pages\\\\index.jsx\",\n                lineNumber: 109,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\pages\\\\index.jsx\",\n        lineNumber: 89,\n        columnNumber: 3\n    }, this);\n}\n_s1(App, \"8eHJeMv8b+AmK+eYlTJfFlk47Fo=\", false, function() {\n    return [\n        useGameState\n    ];\n});\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUJBSDFCQTs7Ozs7Z0JBTVI7Ozs7OzswQkFFRCw4REFBQ3VCO2dCQUFPVCxXQUFXaEMsc0VBQVk7Z0JBQUV3QyxTQUFTbEI7MEJBQWtCOzs7Ozs7Ozs7Ozs7QUFLL0Q7SUFyQ1NROztRQVNKbkI7OztLQVRJbUI7QUF1Q1QsK0RBQWVBLEdBQUdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEdhbWVJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvZ2FtZS9nYW1lLWluZm8nXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi8uLi9zdHlsZXMvR2FtZS5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgU1lNQk9MX1ggPSAnWCdcclxuY29uc3QgU1lNQk9MX08gPSAnTydcclxuXHJcbmNvbnN0IGNvbXB1dGVXaW5uZXIgPSBjZWxscyA9PiB7XHJcblx0Y29uc3QgbGluZXMgPSBbXHJcblx0XHRbMCwgMSwgMl0sXHJcblx0XHRbMywgNCwgNV0sXHJcblx0XHRbNiwgNywgOF0sXHJcblx0XHRbMCwgMywgNl0sXHJcblx0XHRbMSwgNCwgN10sXHJcblx0XHRbMiwgNSwgOF0sXHJcblx0XHRbMCwgNCwgOF0sXHJcblx0XHRbMiwgNCwgNl0sXHJcblx0XVxyXG5cclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRjb25zdCBbYSwgYiwgY10gPSBsaW5lc1tpXVxyXG5cdFx0aWYgKGNlbGxzW2FdICYmIGNlbGxzW2FdID09PSBjZWxsc1tiXSAmJiBjZWxsc1thXSA9PT0gY2VsbHNbY10pIHtcclxuXHRcdFx0cmV0dXJuIFthLCBiLCBjXVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXNlR2FtZVN0YXRlKCkge1xyXG5cdGNvbnN0IFtjZWxscywgc2V0Q2VsbHNdID0gdXNlU3RhdGUoW1xyXG5cdFx0bnVsbCxcclxuXHRcdG51bGwsXHJcblx0XHRudWxsLFxyXG5cdFx0bnVsbCxcclxuXHRcdG51bGwsXHJcblx0XHRudWxsLFxyXG5cdFx0bnVsbCxcclxuXHRcdG51bGwsXHJcblx0XHRudWxsLFxyXG5cdF0pXHJcblx0Y29uc3QgW2N1cnJlbnRTdGVwLCBzZXRDdXJyZW50U3RlcF0gPSB1c2VTdGF0ZShTWU1CT0xfTylcclxuXHRjb25zdCBbd2lubmVyU2VxLCBzZXRXaW5uZXJTZXFdID0gdXNlU3RhdGUoKVxyXG5cclxuXHRjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPSBpbmRleCA9PiB7XHJcblx0XHRpZiAoY2VsbHNbaW5kZXhdIHx8IHdpbm5lclNlcSkge1xyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBjb3B5Q2VsbHMgPSBjZWxscy5zbGljZSgpXHJcblx0XHRjb3B5Q2VsbHNbaW5kZXhdID0gY3VycmVudFN0ZXBcclxuXHRcdGNvbnN0IHdpbm5lciA9IGNvbXB1dGVXaW5uZXIoY29weUNlbGxzKVxyXG5cclxuXHRcdHNldENlbGxzKGNvcHlDZWxscylcclxuXHRcdHNldEN1cnJlbnRTdGVwKGN1cnJlbnRTdGVwID09PSBTWU1CT0xfTyA/IFNZTUJPTF9YIDogU1lNQk9MX08pXHJcblx0XHRzZXRXaW5uZXJTZXEod2lubmVyKVxyXG5cdH1cclxuXHJcblx0Y29uc3QgaGFuZGxlUmVzZXRDbGljayA9ICgpID0+IHtcclxuXHRcdHNldENlbGxzKEFycmF5LmZyb20oeyBsZW5ndGg6IDkgfSwgKCkgPT4gbnVsbCkpXHJcblx0XHRzZXRDdXJyZW50U3RlcChTWU1CT0xfWClcclxuXHRcdHNldFdpbm5lclNlcShudWxsKVxyXG5cdH1cclxuXHJcblx0Y29uc3Qgd2lubmVyU3ltYm9sID0gd2lubmVyU2VxID8gY2VsbHNbd2lubmVyU2VxWzBdXSA6IHVuZGVmaW5lZFxyXG5cdGNvbnN0IGlzRHJhdyA9ICF3aW5uZXJTZXEgJiYgY2VsbHMuZmlsdGVyKHZhbHVlID0+IHZhbHVlKS5sZW5ndGggPT09IDlcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGNlbGxzLFxyXG5cdFx0Y3VycmVudFN0ZXAsXHJcblx0XHR3aW5uZXJTZXEsXHJcblx0XHRoYW5kbGVDZWxsQ2xpY2ssXHJcblx0XHRoYW5kbGVSZXNldENsaWNrLFxyXG5cdFx0d2lubmVyU3ltYm9sLFxyXG5cdFx0aXNEcmF3LFxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG5cdGNvbnN0IHtcclxuXHRcdGNlbGxzLFxyXG5cdFx0Y3VycmVudFN0ZXAsXHJcblx0XHR3aW5uZXJTZXEsXHJcblx0XHRoYW5kbGVDZWxsQ2xpY2ssXHJcblx0XHRoYW5kbGVSZXNldENsaWNrLFxyXG5cdFx0d2lubmVyU3ltYm9sLFxyXG5cdFx0aXNEcmF3LFxyXG5cdH0gPSB1c2VHYW1lU3RhdGUoKVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nYW1lfT5cclxuXHRcdFx0PEdhbWVJbmZvXHJcblx0XHRcdFx0aXNEcmF3PXtpc0RyYXd9XHJcblx0XHRcdFx0d2lubmVyU2VxPXt3aW5uZXJTZXF9XHJcblx0XHRcdFx0d2lubmVyU3ltYm9sPXt3aW5uZXJTeW1ib2x9XHJcblx0XHRcdFx0Y3VycmVudFN0ZXA9e2N1cnJlbnRTdGVwfVxyXG5cdFx0XHQvPlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nYW1lX2ZpZWxkfT5cclxuXHRcdFx0XHR7Y2VsbHMubWFwKChzeW1ib2wsIGluZGV4KSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHQ8R2FtZUNlbGxcclxuXHRcdFx0XHRcdFx0XHRrZXk9e2luZGV4fVxyXG5cdFx0XHRcdFx0XHRcdHN5bWJvbD17c3ltYm9sfVxyXG5cdFx0XHRcdFx0XHRcdGlzV2lubmVyPXt3aW5uZXJTZXE/LmluY2x1ZGVzKGluZGV4KX1cclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVDZWxsQ2xpY2soaW5kZXgpfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdH0pfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5yZXNldH0gb25DbGljaz17aGFuZGxlUmVzZXRDbGlja30+XHJcblx0XHRcdFx00KHQsdGA0L7RgdC40YLRjFxyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwXHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkdhbWVJbmZvIiwic3R5bGVzIiwiU1lNQk9MX1giLCJTWU1CT0xfTyIsImNvbXB1dGVXaW5uZXIiLCJjZWxscyIsImxpbmVzIiwiaSIsImxlbmd0aCIsImEiLCJiIiwiYyIsInVzZUdhbWVTdGF0ZSIsInNldENlbGxzIiwiY3VycmVudFN0ZXAiLCJzZXRDdXJyZW50U3RlcCIsIndpbm5lclNlcSIsInNldFdpbm5lclNlcSIsImhhbmRsZUNlbGxDbGljayIsImluZGV4IiwiY29weUNlbGxzIiwic2xpY2UiLCJ3aW5uZXIiLCJoYW5kbGVSZXNldENsaWNrIiwiQXJyYXkiLCJmcm9tIiwid2lubmVyU3ltYm9sIiwidW5kZWZpbmVkIiwiaXNEcmF3IiwiZmlsdGVyIiwidmFsdWUiLCJBcHAiLCJkaXYiLCJjbGFzc05hbWUiLCJnYW1lIiwiZ2FtZV9maWVsZCIsIm1hcCIsInN5bWJvbCIsIkdhbWVDZWxsIiwiaXNXaW5uZXIiLCJpbmNsdWRlcyIsIm9uQ2xpY2siLCJidXR0b24iLCJyZXNldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});