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

/***/ "./components/game/use-game.state.js":
/*!*******************************************!*\
  !*** ./components/game/use-game.state.js ***!
  \*******************************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar _s = $RefreshSig$();\n\nfunction useGameState() {\n    _s();\n    const [cells, setCells] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([\n        null,\n        null,\n        null,\n        null,\n        null,\n        null,\n        null,\n        null,\n        null\n    ]);\n    const [currentStep, setCurrentStep] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(SYMBOL_O);\n    const [winnerSeq, setWinnerSeq] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n    const handleCellClick = (index)=>{\n        if (cells[index] || winnerSeq) {\n            return;\n        }\n        const copyCells = cells.slice();\n        copyCells[index] = currentStep;\n        const winner = computeWinner(copyCells);\n        setCells(copyCells);\n        setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);\n        setWinnerSeq(winner);\n    };\n    const handleResetClick = ()=>{\n        setCells(Array.from({\n            length: 9\n        }, ()=>null));\n        setCurrentStep(SYMBOL_X);\n        setWinnerSeq(null);\n    };\n    const winnerSymbol = winnerSeq ? cells[winnerSeq[0]] : undefined;\n    const isDraw = !winnerSeq && cells.filter((value)=>value).length === 9;\n    return {\n        cells,\n        currentStep,\n        winnerSeq,\n        handleCellClick,\n        handleResetClick,\n        winnerSymbol,\n        isDraw\n    };\n}\n_s(useGameState, \"p7efUG3Pyc204rpzNFqj2euneeU=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useGameState);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvdXNlLWdhbWUuc3RhdGUuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQWdDO0FBRWhDLFNBQVNDOztJQUNSLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBQztRQUNsQztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDQTtJQUNELE1BQU0sQ0FBQ0ksYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBQ007SUFDL0MsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdSLCtDQUFRQTtJQUUxQyxNQUFNUyxrQkFBa0JDLENBQUFBO1FBQ3ZCLElBQUlSLEtBQUssQ0FBQ1EsTUFBTSxJQUFJSCxXQUFXO1lBQzlCO1FBQ0Q7UUFFQSxNQUFNSSxZQUFZVCxNQUFNVSxLQUFLO1FBQzdCRCxTQUFTLENBQUNELE1BQU0sR0FBR047UUFDbkIsTUFBTVMsU0FBU0MsY0FBY0g7UUFFN0JSLFNBQVNRO1FBQ1ROLGVBQWVELGdCQUFnQkUsV0FBV1MsV0FBV1Q7UUFDckRFLGFBQWFLO0lBQ2Q7SUFFQSxNQUFNRyxtQkFBbUI7UUFDeEJiLFNBQVNjLE1BQU1DLElBQUksQ0FBQztZQUFFQyxRQUFRO1FBQUUsR0FBRyxJQUFNO1FBQ3pDZCxlQUFlVTtRQUNmUCxhQUFhO0lBQ2Q7SUFFQSxNQUFNWSxlQUFlYixZQUFZTCxLQUFLLENBQUNLLFNBQVMsQ0FBQyxFQUFFLENBQUMsR0FBR2M7SUFDdkQsTUFBTUMsU0FBUyxDQUFDZixhQUFhTCxNQUFNcUIsTUFBTSxDQUFDQyxDQUFBQSxRQUFTQSxPQUFPTCxNQUFNLEtBQUs7SUFFckUsT0FBTztRQUNOakI7UUFDQUU7UUFDQUc7UUFDQUU7UUFDQU87UUFDQUk7UUFDQUU7SUFDRDtBQUNEO0dBL0NTckI7QUFpRFQsK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL3VzZS1nYW1lLnN0YXRlLmpzPzc0NDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIHVzZUdhbWVTdGF0ZSgpIHtcclxuXHRjb25zdCBbY2VsbHMsIHNldENlbGxzXSA9IHVzZVN0YXRlKFtcclxuXHRcdG51bGwsXHJcblx0XHRudWxsLFxyXG5cdFx0bnVsbCxcclxuXHRcdG51bGwsXHJcblx0XHRudWxsLFxyXG5cdFx0bnVsbCxcclxuXHRcdG51bGwsXHJcblx0XHRudWxsLFxyXG5cdFx0bnVsbCxcclxuXHRdKVxyXG5cdGNvbnN0IFtjdXJyZW50U3RlcCwgc2V0Q3VycmVudFN0ZXBdID0gdXNlU3RhdGUoU1lNQk9MX08pXHJcblx0Y29uc3QgW3dpbm5lclNlcSwgc2V0V2lubmVyU2VxXSA9IHVzZVN0YXRlKClcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2VsbENsaWNrID0gaW5kZXggPT4ge1xyXG5cdFx0aWYgKGNlbGxzW2luZGV4XSB8fCB3aW5uZXJTZXEpIHtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgY29weUNlbGxzID0gY2VsbHMuc2xpY2UoKVxyXG5cdFx0Y29weUNlbGxzW2luZGV4XSA9IGN1cnJlbnRTdGVwXHJcblx0XHRjb25zdCB3aW5uZXIgPSBjb21wdXRlV2lubmVyKGNvcHlDZWxscylcclxuXHJcblx0XHRzZXRDZWxscyhjb3B5Q2VsbHMpXHJcblx0XHRzZXRDdXJyZW50U3RlcChjdXJyZW50U3RlcCA9PT0gU1lNQk9MX08gPyBTWU1CT0xfWCA6IFNZTUJPTF9PKVxyXG5cdFx0c2V0V2lubmVyU2VxKHdpbm5lcilcclxuXHR9XHJcblxyXG5cdGNvbnN0IGhhbmRsZVJlc2V0Q2xpY2sgPSAoKSA9PiB7XHJcblx0XHRzZXRDZWxscyhBcnJheS5mcm9tKHsgbGVuZ3RoOiA5IH0sICgpID0+IG51bGwpKVxyXG5cdFx0c2V0Q3VycmVudFN0ZXAoU1lNQk9MX1gpXHJcblx0XHRzZXRXaW5uZXJTZXEobnVsbClcclxuXHR9XHJcblxyXG5cdGNvbnN0IHdpbm5lclN5bWJvbCA9IHdpbm5lclNlcSA/IGNlbGxzW3dpbm5lclNlcVswXV0gOiB1bmRlZmluZWRcclxuXHRjb25zdCBpc0RyYXcgPSAhd2lubmVyU2VxICYmIGNlbGxzLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSkubGVuZ3RoID09PSA5XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRjZWxscyxcclxuXHRcdGN1cnJlbnRTdGVwLFxyXG5cdFx0d2lubmVyU2VxLFxyXG5cdFx0aGFuZGxlQ2VsbENsaWNrLFxyXG5cdFx0aGFuZGxlUmVzZXRDbGljayxcclxuXHRcdHdpbm5lclN5bWJvbCxcclxuXHRcdGlzRHJhdyxcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUdhbWVTdGF0ZVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VHYW1lU3RhdGUiLCJjZWxscyIsInNldENlbGxzIiwiY3VycmVudFN0ZXAiLCJzZXRDdXJyZW50U3RlcCIsIlNZTUJPTF9PIiwid2lubmVyU2VxIiwic2V0V2lubmVyU2VxIiwiaGFuZGxlQ2VsbENsaWNrIiwiaW5kZXgiLCJjb3B5Q2VsbHMiLCJzbGljZSIsIndpbm5lciIsImNvbXB1dGVXaW5uZXIiLCJTWU1CT0xfWCIsImhhbmRsZVJlc2V0Q2xpY2siLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJ3aW5uZXJTeW1ib2wiLCJ1bmRlZmluZWQiLCJpc0RyYXciLCJmaWx0ZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/use-game.state.js\n"));

/***/ })

});