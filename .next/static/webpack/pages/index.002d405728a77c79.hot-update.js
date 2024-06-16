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

/***/ "./components/game/useGameState.js":
/*!*****************************************!*\
  !*** ./components/game/useGameState.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model */ \"./components/game/model.js\");\nvar _s = $RefreshSig$();\n\n\n\nfunction useGameState(playersCount) {\n    _s();\n    const [{ cells, currentMove, playersTimeOver }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentMove: _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.CROSS,\n            playersTimeOver: []\n        }));\n    console.log((0,_model__WEBPACK_IMPORTED_MODULE_2__.computerWinner)(cells));\n    const winnerSequence = (0,_model__WEBPACK_IMPORTED_MODULE_2__.computerWinner)(cells);\n    const nextMove = (0,_model__WEBPACK_IMPORTED_MODULE_2__.getNextMove)(currentMove, playersCount, playersTimeOver);\n    const winnerSymbol = nextMove === currentMove ? currentMove : winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence[0];\n    // обработка клика по клетке\n    const handleCellClick = (index)=>{\n        setGameState((lastGameState)=>({\n                ...lastGameState,\n                currentMove: (0,_model__WEBPACK_IMPORTED_MODULE_2__.getNextMove)(lastGameState.currentMove, playersCount, lastGameState.playersTimeOver),\n                cells: lastGameState.cells.map((cell, i)=>i === index ? lastGameState.currentMove : cell)\n            }));\n    };\n    const handlePlayerTimeOver = (symbol)=>{\n        setGameState((lastGameState)=>({\n                ...lastGameState,\n                playersTimeOver: [\n                    ...lastGameState.playersTimeOver,\n                    symbol\n                ],\n                currentMove: (0,_model__WEBPACK_IMPORTED_MODULE_2__.getNextMove)(lastGameState.currentMove, playersCount, lastGameState.playersTimeOver)\n            }));\n    };\n    return {\n        cells,\n        currentMove,\n        nextMove,\n        handleCellClick,\n        handlePlayerTimeOver,\n        winnerSequence,\n        winnerSymbol\n    };\n}\n_s(useGameState, \"qlJTEgnG7zqzzdJmQ/r91EVs63Q=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvdXNlR2FtZVN0YXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFnQztBQUNVO0FBQ1c7QUFFOUMsU0FBU0ksYUFBYUMsWUFBWTs7SUFDeEMsTUFBTSxDQUFDLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxlQUFlLEVBQUUsRUFBRUMsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FDdkUsSUFBTztZQUNOTSxPQUFPLElBQUlJLE1BQU0sS0FBSyxJQUFJQyxJQUFJLENBQUM7WUFDL0JKLGFBQWFOLG9EQUFZQSxDQUFDVyxLQUFLO1lBQy9CSixpQkFBaUIsRUFBRTtRQUNwQjtJQUdESyxRQUFRQyxHQUFHLENBQUNaLHNEQUFjQSxDQUFDSTtJQUMzQixNQUFNUyxpQkFBaUJiLHNEQUFjQSxDQUFDSTtJQUN0QyxNQUFNVSxXQUFXYixtREFBV0EsQ0FBQ0ksYUFBYUYsY0FBY0c7SUFFeEQsTUFBTVMsZUFDTEQsYUFBYVQsY0FBY0EsY0FBY1EsMkJBQUFBLHFDQUFBQSxjQUFnQixDQUFDLEVBQUU7SUFFN0QsNEJBQTRCO0lBQzVCLE1BQU1HLGtCQUFrQkMsQ0FBQUE7UUFDdkJWLGFBQWFXLENBQUFBLGdCQUFrQjtnQkFDOUIsR0FBR0EsYUFBYTtnQkFDaEJiLGFBQWFKLG1EQUFXQSxDQUN2QmlCLGNBQWNiLFdBQVcsRUFDekJGLGNBQ0FlLGNBQWNaLGVBQWU7Z0JBRTlCRixPQUFPYyxjQUFjZCxLQUFLLENBQUNlLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxJQUNyQ0EsTUFBTUosUUFBUUMsY0FBY2IsV0FBVyxHQUFHZTtZQUU1QztJQUNEO0lBRUEsTUFBTUUsdUJBQXVCQyxDQUFBQTtRQUM1QmhCLGFBQWFXLENBQUFBLGdCQUFrQjtnQkFDOUIsR0FBR0EsYUFBYTtnQkFDaEJaLGlCQUFpQjt1QkFBSVksY0FBY1osZUFBZTtvQkFBRWlCO2lCQUFPO2dCQUMzRGxCLGFBQWFKLG1EQUFXQSxDQUN2QmlCLGNBQWNiLFdBQVcsRUFDekJGLGNBQ0FlLGNBQWNaLGVBQWU7WUFFL0I7SUFDRDtJQUVBLE9BQU87UUFDTkY7UUFDQUM7UUFDQVM7UUFDQUU7UUFDQU07UUFDQVQ7UUFDQUU7SUFDRDtBQUNEO0dBcERnQmIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL3VzZUdhbWVTdGF0ZS5qcz83ODc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEdBTUVfU1lNQk9MUyB9IGZyb20gJy4vY29uc3RhbnRzJ1xyXG5pbXBvcnQgeyBjb21wdXRlcldpbm5lciwgZ2V0TmV4dE1vdmUgfSBmcm9tICcuL21vZGVsJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdhbWVTdGF0ZShwbGF5ZXJzQ291bnQpIHtcclxuXHRjb25zdCBbeyBjZWxscywgY3VycmVudE1vdmUsIHBsYXllcnNUaW1lT3ZlciB9LCBzZXRHYW1lU3RhdGVdID0gdXNlU3RhdGUoXHJcblx0XHQoKSA9PiAoe1xyXG5cdFx0XHRjZWxsczogbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCksXHJcblx0XHRcdGN1cnJlbnRNb3ZlOiBHQU1FX1NZTUJPTFMuQ1JPU1MsXHJcblx0XHRcdHBsYXllcnNUaW1lT3ZlcjogW10sXHJcblx0XHR9KVxyXG5cdClcclxuXHJcblx0Y29uc29sZS5sb2coY29tcHV0ZXJXaW5uZXIoY2VsbHMpKVxyXG5cdGNvbnN0IHdpbm5lclNlcXVlbmNlID0gY29tcHV0ZXJXaW5uZXIoY2VsbHMpXHJcblx0Y29uc3QgbmV4dE1vdmUgPSBnZXROZXh0TW92ZShjdXJyZW50TW92ZSwgcGxheWVyc0NvdW50LCBwbGF5ZXJzVGltZU92ZXIpXHJcblxyXG5cdGNvbnN0IHdpbm5lclN5bWJvbCA9XHJcblx0XHRuZXh0TW92ZSA9PT0gY3VycmVudE1vdmUgPyBjdXJyZW50TW92ZSA6IHdpbm5lclNlcXVlbmNlPy5bMF1cclxuXHJcblx0Ly8g0L7QsdGA0LDQsdC+0YLQutCwINC60LvQuNC60LAg0L/QviDQutC70LXRgtC60LVcclxuXHRjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPSBpbmRleCA9PiB7XHJcblx0XHRzZXRHYW1lU3RhdGUobGFzdEdhbWVTdGF0ZSA9PiAoe1xyXG5cdFx0XHQuLi5sYXN0R2FtZVN0YXRlLFxyXG5cdFx0XHRjdXJyZW50TW92ZTogZ2V0TmV4dE1vdmUoXHJcblx0XHRcdFx0bGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSxcclxuXHRcdFx0XHRwbGF5ZXJzQ291bnQsXHJcblx0XHRcdFx0bGFzdEdhbWVTdGF0ZS5wbGF5ZXJzVGltZU92ZXJcclxuXHRcdFx0KSxcclxuXHRcdFx0Y2VsbHM6IGxhc3RHYW1lU3RhdGUuY2VsbHMubWFwKChjZWxsLCBpKSA9PlxyXG5cdFx0XHRcdGkgPT09IGluZGV4ID8gbGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSA6IGNlbGxcclxuXHRcdFx0KSxcclxuXHRcdH0pKVxyXG5cdH1cclxuXHJcblx0Y29uc3QgaGFuZGxlUGxheWVyVGltZU92ZXIgPSBzeW1ib2wgPT4ge1xyXG5cdFx0c2V0R2FtZVN0YXRlKGxhc3RHYW1lU3RhdGUgPT4gKHtcclxuXHRcdFx0Li4ubGFzdEdhbWVTdGF0ZSxcclxuXHRcdFx0cGxheWVyc1RpbWVPdmVyOiBbLi4ubGFzdEdhbWVTdGF0ZS5wbGF5ZXJzVGltZU92ZXIsIHN5bWJvbF0sXHJcblx0XHRcdGN1cnJlbnRNb3ZlOiBnZXROZXh0TW92ZShcclxuXHRcdFx0XHRsYXN0R2FtZVN0YXRlLmN1cnJlbnRNb3ZlLFxyXG5cdFx0XHRcdHBsYXllcnNDb3VudCxcclxuXHRcdFx0XHRsYXN0R2FtZVN0YXRlLnBsYXllcnNUaW1lT3ZlclxyXG5cdFx0XHQpLFxyXG5cdFx0fSkpXHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0Y2VsbHMsXHJcblx0XHRjdXJyZW50TW92ZSxcclxuXHRcdG5leHRNb3ZlLFxyXG5cdFx0aGFuZGxlQ2VsbENsaWNrLFxyXG5cdFx0aGFuZGxlUGxheWVyVGltZU92ZXIsXHJcblx0XHR3aW5uZXJTZXF1ZW5jZSxcclxuXHRcdHdpbm5lclN5bWJvbCxcclxuXHR9XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiR0FNRV9TWU1CT0xTIiwiY29tcHV0ZXJXaW5uZXIiLCJnZXROZXh0TW92ZSIsInVzZUdhbWVTdGF0ZSIsInBsYXllcnNDb3VudCIsImNlbGxzIiwiY3VycmVudE1vdmUiLCJwbGF5ZXJzVGltZU92ZXIiLCJzZXRHYW1lU3RhdGUiLCJBcnJheSIsImZpbGwiLCJDUk9TUyIsImNvbnNvbGUiLCJsb2ciLCJ3aW5uZXJTZXF1ZW5jZSIsIm5leHRNb3ZlIiwid2lubmVyU3ltYm9sIiwiaGFuZGxlQ2VsbENsaWNrIiwiaW5kZXgiLCJsYXN0R2FtZVN0YXRlIiwibWFwIiwiY2VsbCIsImkiLCJoYW5kbGVQbGF5ZXJUaW1lT3ZlciIsInN5bWJvbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/useGameState.js\n"));

/***/ })

});