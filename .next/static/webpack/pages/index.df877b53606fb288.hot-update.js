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

/***/ "./components/game-new/model/use-game-state.js":
/*!*****************************************************!*\
  !*** ./components/game-new/model/use-game-state.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/constants */ \"./components/game-new/ui/constants.js\");\nvar _s = $RefreshSig$();\n\n\nconst gameStateReducer = (state, action)=>{\n    return state;\n};\nconst initGameState = (param)=>{\n    let {} = param;\n    return {\n        cells: new Array(19 * 19).fill(null),\n        currentMove: _ui_constants__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.CROSS,\n        playersTimeOver: []\n    };\n};\nfunction useGameState(playersCount) {\n    _s();\n    const [gameState, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(gameStateReducer, {}, initGameState);\n// const [{ cells, currentMove, playersTimeOver }, setGameState] = useState(\n// \t() => ({\n// \t\tcells: new Array(19 * 19).fill(null),\n// \t\tcurrentMove: GAME_SYMBOLS.CROSS,\n// \t\tplayersTimeOver: [],\n// \t})\n// )\n// console.log(computerWinner(cells))\n// const winnerSequence = computerWinner(cells)\n// const nextMove = getNextMove(currentMove, playersCount, playersTimeOver)\n// const winnerSymbol =\n// \tnextMove === currentMove ? currentMove : cells[winnerSequence?.[0]]\n// // обработка клика по клетке\n// const handleCellClick = index => {\n// \tsetGameState(lastGameState => ({\n// \t\t...lastGameState,\n// \t\tcurrentMove: getNextMove(\n// \t\t\tlastGameState.currentMove,\n// \t\t\tplayersCount,\n// \t\t\tlastGameState.playersTimeOver\n// \t\t),\n// \t\tcells: lastGameState.cells.map((cell, i) =>\n// \t\t\ti === index ? lastGameState.currentMove : cell\n// \t\t),\n// \t}))\n// }\n// const handlePlayerTimeOver = symbol => {\n// \tsetGameState(lastGameState => ({\n// \t\t...lastGameState,\n// \t\tplayersTimeOver: [...lastGameState.playersTimeOver, symbol],\n// \t\tcurrentMove: getNextMove(\n// \t\t\tlastGameState.currentMove,\n// \t\t\tplayersCount,\n// \t\t\tlastGameState.playersTimeOver\n// \t\t),\n// \t}))\n// }\n// return {\n// \tcells,\n// \tcurrentMove,\n// \tnextMove,\n// \thandleCellClick,\n// \thandlePlayerTimeOver,\n// \twinnerSequence,\n// \twinnerSymbol,\n// }\n}\n_s(useGameState, \"j2Lc7qLkPsIkuOKspfGyGEqTTbo=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL3VzZS1nYW1lLXN0YXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWtDO0FBQ1k7QUFFOUMsTUFBTUUsbUJBQW1CLENBQUNDLE9BQU9DO0lBQ2hDLE9BQU9EO0FBQ1I7QUFFQSxNQUFNRSxnQkFBZ0I7UUFBQyxFQUFFO1dBQU07UUFDOUJDLE9BQU8sSUFBSUMsTUFBTSxLQUFLLElBQUlDLElBQUksQ0FBQztRQUMvQkMsYUFBYVIsdURBQVlBLENBQUNTLEtBQUs7UUFDL0JDLGlCQUFpQixFQUFFO0lBQ3BCO0FBQUE7QUFFTyxTQUFTQyxhQUFhQyxZQUFZOztJQUN4QyxNQUFNLENBQUNDLFdBQVdDLFNBQVMsR0FBR2YsaURBQVVBLENBQUNFLGtCQUFrQixDQUFDLEdBQUdHO0FBRS9ELDRFQUE0RTtBQUM1RSxZQUFZO0FBQ1osMENBQTBDO0FBQzFDLHFDQUFxQztBQUNyQyx5QkFBeUI7QUFDekIsTUFBTTtBQUNOLElBQUk7QUFDSixxQ0FBcUM7QUFDckMsK0NBQStDO0FBQy9DLDJFQUEyRTtBQUMzRSx1QkFBdUI7QUFDdkIsdUVBQXVFO0FBQ3ZFLCtCQUErQjtBQUMvQixxQ0FBcUM7QUFDckMsb0NBQW9DO0FBQ3BDLHNCQUFzQjtBQUN0Qiw4QkFBOEI7QUFDOUIsZ0NBQWdDO0FBQ2hDLG1CQUFtQjtBQUNuQixtQ0FBbUM7QUFDbkMsT0FBTztBQUNQLGdEQUFnRDtBQUNoRCxvREFBb0Q7QUFDcEQsT0FBTztBQUNQLE9BQU87QUFDUCxJQUFJO0FBQ0osMkNBQTJDO0FBQzNDLG9DQUFvQztBQUNwQyxzQkFBc0I7QUFDdEIsaUVBQWlFO0FBQ2pFLDhCQUE4QjtBQUM5QixnQ0FBZ0M7QUFDaEMsbUJBQW1CO0FBQ25CLG1DQUFtQztBQUNuQyxPQUFPO0FBQ1AsT0FBTztBQUNQLElBQUk7QUFDSixXQUFXO0FBQ1gsVUFBVTtBQUNWLGdCQUFnQjtBQUNoQixhQUFhO0FBQ2Isb0JBQW9CO0FBQ3BCLHlCQUF5QjtBQUN6QixtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCLElBQUk7QUFDTDtHQWpEZ0JPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS1uZXcvbW9kZWwvdXNlLWdhbWUtc3RhdGUuanM/MmQxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEdBTUVfU1lNQk9MUyB9IGZyb20gJy4uL3VpL2NvbnN0YW50cydcclxuXHJcbmNvbnN0IGdhbWVTdGF0ZVJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdHJldHVybiBzdGF0ZVxyXG59XHJcblxyXG5jb25zdCBpbml0R2FtZVN0YXRlID0gKHt9KSA9PiAoe1xyXG5cdGNlbGxzOiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSxcclxuXHRjdXJyZW50TW92ZTogR0FNRV9TWU1CT0xTLkNST1NTLFxyXG5cdHBsYXllcnNUaW1lT3ZlcjogW10sXHJcbn0pXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlR2FtZVN0YXRlKHBsYXllcnNDb3VudCkge1xyXG5cdGNvbnN0IFtnYW1lU3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoZ2FtZVN0YXRlUmVkdWNlciwge30sIGluaXRHYW1lU3RhdGUpXHJcblxyXG5cdC8vIGNvbnN0IFt7IGNlbGxzLCBjdXJyZW50TW92ZSwgcGxheWVyc1RpbWVPdmVyIH0sIHNldEdhbWVTdGF0ZV0gPSB1c2VTdGF0ZShcclxuXHQvLyBcdCgpID0+ICh7XHJcblx0Ly8gXHRcdGNlbGxzOiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSxcclxuXHQvLyBcdFx0Y3VycmVudE1vdmU6IEdBTUVfU1lNQk9MUy5DUk9TUyxcclxuXHQvLyBcdFx0cGxheWVyc1RpbWVPdmVyOiBbXSxcclxuXHQvLyBcdH0pXHJcblx0Ly8gKVxyXG5cdC8vIGNvbnNvbGUubG9nKGNvbXB1dGVyV2lubmVyKGNlbGxzKSlcclxuXHQvLyBjb25zdCB3aW5uZXJTZXF1ZW5jZSA9IGNvbXB1dGVyV2lubmVyKGNlbGxzKVxyXG5cdC8vIGNvbnN0IG5leHRNb3ZlID0gZ2V0TmV4dE1vdmUoY3VycmVudE1vdmUsIHBsYXllcnNDb3VudCwgcGxheWVyc1RpbWVPdmVyKVxyXG5cdC8vIGNvbnN0IHdpbm5lclN5bWJvbCA9XHJcblx0Ly8gXHRuZXh0TW92ZSA9PT0gY3VycmVudE1vdmUgPyBjdXJyZW50TW92ZSA6IGNlbGxzW3dpbm5lclNlcXVlbmNlPy5bMF1dXHJcblx0Ly8gLy8g0L7QsdGA0LDQsdC+0YLQutCwINC60LvQuNC60LAg0L/QviDQutC70LXRgtC60LVcclxuXHQvLyBjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPSBpbmRleCA9PiB7XHJcblx0Ly8gXHRzZXRHYW1lU3RhdGUobGFzdEdhbWVTdGF0ZSA9PiAoe1xyXG5cdC8vIFx0XHQuLi5sYXN0R2FtZVN0YXRlLFxyXG5cdC8vIFx0XHRjdXJyZW50TW92ZTogZ2V0TmV4dE1vdmUoXHJcblx0Ly8gXHRcdFx0bGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSxcclxuXHQvLyBcdFx0XHRwbGF5ZXJzQ291bnQsXHJcblx0Ly8gXHRcdFx0bGFzdEdhbWVTdGF0ZS5wbGF5ZXJzVGltZU92ZXJcclxuXHQvLyBcdFx0KSxcclxuXHQvLyBcdFx0Y2VsbHM6IGxhc3RHYW1lU3RhdGUuY2VsbHMubWFwKChjZWxsLCBpKSA9PlxyXG5cdC8vIFx0XHRcdGkgPT09IGluZGV4ID8gbGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSA6IGNlbGxcclxuXHQvLyBcdFx0KSxcclxuXHQvLyBcdH0pKVxyXG5cdC8vIH1cclxuXHQvLyBjb25zdCBoYW5kbGVQbGF5ZXJUaW1lT3ZlciA9IHN5bWJvbCA9PiB7XHJcblx0Ly8gXHRzZXRHYW1lU3RhdGUobGFzdEdhbWVTdGF0ZSA9PiAoe1xyXG5cdC8vIFx0XHQuLi5sYXN0R2FtZVN0YXRlLFxyXG5cdC8vIFx0XHRwbGF5ZXJzVGltZU92ZXI6IFsuLi5sYXN0R2FtZVN0YXRlLnBsYXllcnNUaW1lT3Zlciwgc3ltYm9sXSxcclxuXHQvLyBcdFx0Y3VycmVudE1vdmU6IGdldE5leHRNb3ZlKFxyXG5cdC8vIFx0XHRcdGxhc3RHYW1lU3RhdGUuY3VycmVudE1vdmUsXHJcblx0Ly8gXHRcdFx0cGxheWVyc0NvdW50LFxyXG5cdC8vIFx0XHRcdGxhc3RHYW1lU3RhdGUucGxheWVyc1RpbWVPdmVyXHJcblx0Ly8gXHRcdCksXHJcblx0Ly8gXHR9KSlcclxuXHQvLyB9XHJcblx0Ly8gcmV0dXJuIHtcclxuXHQvLyBcdGNlbGxzLFxyXG5cdC8vIFx0Y3VycmVudE1vdmUsXHJcblx0Ly8gXHRuZXh0TW92ZSxcclxuXHQvLyBcdGhhbmRsZUNlbGxDbGljayxcclxuXHQvLyBcdGhhbmRsZVBsYXllclRpbWVPdmVyLFxyXG5cdC8vIFx0d2lubmVyU2VxdWVuY2UsXHJcblx0Ly8gXHR3aW5uZXJTeW1ib2wsXHJcblx0Ly8gfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSZWR1Y2VyIiwiR0FNRV9TWU1CT0xTIiwiZ2FtZVN0YXRlUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiaW5pdEdhbWVTdGF0ZSIsImNlbGxzIiwiQXJyYXkiLCJmaWxsIiwiY3VycmVudE1vdmUiLCJDUk9TUyIsInBsYXllcnNUaW1lT3ZlciIsInVzZUdhbWVTdGF0ZSIsInBsYXllcnNDb3VudCIsImdhbWVTdGF0ZSIsImRpc3BhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game-new/model/use-game-state.js\n"));

/***/ })

});