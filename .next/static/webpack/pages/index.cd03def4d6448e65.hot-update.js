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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/constants */ \"./components/game-new/ui/constants.js\");\nvar _s = $RefreshSig$();\n\n\nconst gameStateReducer = (state, action)=>{\n    return state;\n};\nconst initGameState = ()=>({\n        cells: new Array(19 * 19).fill(null),\n        currentMove: _ui_constants__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.CROSS\n    });\nfunction useGameState(playersCount) {\n    _s();\n    const [gameState, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(gameStateReducer, {}, initGameState);\n// const [{ cells, currentMove, playersTimeOver }, setGameState] = useState(\n// \t() => ({\n// \t\tcells: new Array(19 * 19).fill(null),\n// \t\tcurrentMove: GAME_SYMBOLS.CROSS,\n// \t\tplayersTimeOver: [],\n// \t})\n// )\n// console.log(computerWinner(cells))\n// const winnerSequence = computerWinner(cells)\n// const nextMove = getNextMove(currentMove, playersCount, playersTimeOver)\n// const winnerSymbol =\n// \tnextMove === currentMove ? currentMove : cells[winnerSequence?.[0]]\n// // обработка клика по клетке\n// const handleCellClick = index => {\n// \tsetGameState(lastGameState => ({\n// \t\t...lastGameState,\n// \t\tcurrentMove: getNextMove(\n// \t\t\tlastGameState.currentMove,\n// \t\t\tplayersCount,\n// \t\t\tlastGameState.playersTimeOver\n// \t\t),\n// \t\tcells: lastGameState.cells.map((cell, i) =>\n// \t\t\ti === index ? lastGameState.currentMove : cell\n// \t\t),\n// \t}))\n// }\n// const handlePlayerTimeOver = symbol => {\n// \tsetGameState(lastGameState => ({\n// \t\t...lastGameState,\n// \t\tplayersTimeOver: [...lastGameState.playersTimeOver, symbol],\n// \t\tcurrentMove: getNextMove(\n// \t\t\tlastGameState.currentMove,\n// \t\t\tplayersCount,\n// \t\t\tlastGameState.playersTimeOver\n// \t\t),\n// \t}))\n// }\n// return {\n// \tcells,\n// \tcurrentMove,\n// \tnextMove,\n// \thandleCellClick,\n// \thandlePlayerTimeOver,\n// \twinnerSequence,\n// \twinnerSymbol,\n// }\n}\n_s(useGameState, \"j2Lc7qLkPsIkuOKspfGyGEqTTbo=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL3VzZS1nYW1lLXN0YXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWtDO0FBQ1k7QUFFOUMsTUFBTUUsbUJBQW1CLENBQUNDLE9BQU9DO0lBQ2hDLE9BQU9EO0FBQ1I7QUFFQSxNQUFNRSxnQkFBZ0IsSUFBTztRQUM1QkMsT0FBTyxJQUFJQyxNQUFNLEtBQUssSUFBSUMsSUFBSSxDQUFDO1FBQy9CQyxhQUFhUix1REFBWUEsQ0FBQ1MsS0FBSztJQUNoQztBQUVPLFNBQVNDLGFBQWFDLFlBQVk7O0lBQ3hDLE1BQU0sQ0FBQ0MsV0FBV0MsU0FBUyxHQUFHZCxpREFBVUEsQ0FBQ0Usa0JBQWtCLENBQUMsR0FBR0c7QUFFL0QsNEVBQTRFO0FBQzVFLFlBQVk7QUFDWiwwQ0FBMEM7QUFDMUMscUNBQXFDO0FBQ3JDLHlCQUF5QjtBQUN6QixNQUFNO0FBQ04sSUFBSTtBQUNKLHFDQUFxQztBQUNyQywrQ0FBK0M7QUFDL0MsMkVBQTJFO0FBQzNFLHVCQUF1QjtBQUN2Qix1RUFBdUU7QUFDdkUsK0JBQStCO0FBQy9CLHFDQUFxQztBQUNyQyxvQ0FBb0M7QUFDcEMsc0JBQXNCO0FBQ3RCLDhCQUE4QjtBQUM5QixnQ0FBZ0M7QUFDaEMsbUJBQW1CO0FBQ25CLG1DQUFtQztBQUNuQyxPQUFPO0FBQ1AsZ0RBQWdEO0FBQ2hELG9EQUFvRDtBQUNwRCxPQUFPO0FBQ1AsT0FBTztBQUNQLElBQUk7QUFDSiwyQ0FBMkM7QUFDM0Msb0NBQW9DO0FBQ3BDLHNCQUFzQjtBQUN0QixpRUFBaUU7QUFDakUsOEJBQThCO0FBQzlCLGdDQUFnQztBQUNoQyxtQkFBbUI7QUFDbkIsbUNBQW1DO0FBQ25DLE9BQU87QUFDUCxPQUFPO0FBQ1AsSUFBSTtBQUNKLFdBQVc7QUFDWCxVQUFVO0FBQ1YsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYixvQkFBb0I7QUFDcEIseUJBQXlCO0FBQ3pCLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakIsSUFBSTtBQUNMO0dBakRnQk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lLW5ldy9tb2RlbC91c2UtZ2FtZS1zdGF0ZS5qcz8yZDFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgR0FNRV9TWU1CT0xTIH0gZnJvbSAnLi4vdWkvY29uc3RhbnRzJ1xyXG5cclxuY29uc3QgZ2FtZVN0YXRlUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblx0cmV0dXJuIHN0YXRlXHJcbn1cclxuXHJcbmNvbnN0IGluaXRHYW1lU3RhdGUgPSAoKSA9PiAoe1xyXG5cdGNlbGxzOiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSxcclxuXHRjdXJyZW50TW92ZTogR0FNRV9TWU1CT0xTLkNST1NTLFxyXG59KVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdhbWVTdGF0ZShwbGF5ZXJzQ291bnQpIHtcclxuXHRjb25zdCBbZ2FtZVN0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGdhbWVTdGF0ZVJlZHVjZXIsIHt9LCBpbml0R2FtZVN0YXRlKVxyXG5cclxuXHQvLyBjb25zdCBbeyBjZWxscywgY3VycmVudE1vdmUsIHBsYXllcnNUaW1lT3ZlciB9LCBzZXRHYW1lU3RhdGVdID0gdXNlU3RhdGUoXHJcblx0Ly8gXHQoKSA9PiAoe1xyXG5cdC8vIFx0XHRjZWxsczogbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCksXHJcblx0Ly8gXHRcdGN1cnJlbnRNb3ZlOiBHQU1FX1NZTUJPTFMuQ1JPU1MsXHJcblx0Ly8gXHRcdHBsYXllcnNUaW1lT3ZlcjogW10sXHJcblx0Ly8gXHR9KVxyXG5cdC8vIClcclxuXHQvLyBjb25zb2xlLmxvZyhjb21wdXRlcldpbm5lcihjZWxscykpXHJcblx0Ly8gY29uc3Qgd2lubmVyU2VxdWVuY2UgPSBjb21wdXRlcldpbm5lcihjZWxscylcclxuXHQvLyBjb25zdCBuZXh0TW92ZSA9IGdldE5leHRNb3ZlKGN1cnJlbnRNb3ZlLCBwbGF5ZXJzQ291bnQsIHBsYXllcnNUaW1lT3ZlcilcclxuXHQvLyBjb25zdCB3aW5uZXJTeW1ib2wgPVxyXG5cdC8vIFx0bmV4dE1vdmUgPT09IGN1cnJlbnRNb3ZlID8gY3VycmVudE1vdmUgOiBjZWxsc1t3aW5uZXJTZXF1ZW5jZT8uWzBdXVxyXG5cdC8vIC8vINC+0LHRgNCw0LHQvtGC0LrQsCDQutC70LjQutCwINC/0L4g0LrQu9C10YLQutC1XHJcblx0Ly8gY29uc3QgaGFuZGxlQ2VsbENsaWNrID0gaW5kZXggPT4ge1xyXG5cdC8vIFx0c2V0R2FtZVN0YXRlKGxhc3RHYW1lU3RhdGUgPT4gKHtcclxuXHQvLyBcdFx0Li4ubGFzdEdhbWVTdGF0ZSxcclxuXHQvLyBcdFx0Y3VycmVudE1vdmU6IGdldE5leHRNb3ZlKFxyXG5cdC8vIFx0XHRcdGxhc3RHYW1lU3RhdGUuY3VycmVudE1vdmUsXHJcblx0Ly8gXHRcdFx0cGxheWVyc0NvdW50LFxyXG5cdC8vIFx0XHRcdGxhc3RHYW1lU3RhdGUucGxheWVyc1RpbWVPdmVyXHJcblx0Ly8gXHRcdCksXHJcblx0Ly8gXHRcdGNlbGxzOiBsYXN0R2FtZVN0YXRlLmNlbGxzLm1hcCgoY2VsbCwgaSkgPT5cclxuXHQvLyBcdFx0XHRpID09PSBpbmRleCA/IGxhc3RHYW1lU3RhdGUuY3VycmVudE1vdmUgOiBjZWxsXHJcblx0Ly8gXHRcdCksXHJcblx0Ly8gXHR9KSlcclxuXHQvLyB9XHJcblx0Ly8gY29uc3QgaGFuZGxlUGxheWVyVGltZU92ZXIgPSBzeW1ib2wgPT4ge1xyXG5cdC8vIFx0c2V0R2FtZVN0YXRlKGxhc3RHYW1lU3RhdGUgPT4gKHtcclxuXHQvLyBcdFx0Li4ubGFzdEdhbWVTdGF0ZSxcclxuXHQvLyBcdFx0cGxheWVyc1RpbWVPdmVyOiBbLi4ubGFzdEdhbWVTdGF0ZS5wbGF5ZXJzVGltZU92ZXIsIHN5bWJvbF0sXHJcblx0Ly8gXHRcdGN1cnJlbnRNb3ZlOiBnZXROZXh0TW92ZShcclxuXHQvLyBcdFx0XHRsYXN0R2FtZVN0YXRlLmN1cnJlbnRNb3ZlLFxyXG5cdC8vIFx0XHRcdHBsYXllcnNDb3VudCxcclxuXHQvLyBcdFx0XHRsYXN0R2FtZVN0YXRlLnBsYXllcnNUaW1lT3ZlclxyXG5cdC8vIFx0XHQpLFxyXG5cdC8vIFx0fSkpXHJcblx0Ly8gfVxyXG5cdC8vIHJldHVybiB7XHJcblx0Ly8gXHRjZWxscyxcclxuXHQvLyBcdGN1cnJlbnRNb3ZlLFxyXG5cdC8vIFx0bmV4dE1vdmUsXHJcblx0Ly8gXHRoYW5kbGVDZWxsQ2xpY2ssXHJcblx0Ly8gXHRoYW5kbGVQbGF5ZXJUaW1lT3ZlcixcclxuXHQvLyBcdHdpbm5lclNlcXVlbmNlLFxyXG5cdC8vIFx0d2lubmVyU3ltYm9sLFxyXG5cdC8vIH1cclxufVxyXG4iXSwibmFtZXMiOlsidXNlUmVkdWNlciIsIkdBTUVfU1lNQk9MUyIsImdhbWVTdGF0ZVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImluaXRHYW1lU3RhdGUiLCJjZWxscyIsIkFycmF5IiwiZmlsbCIsImN1cnJlbnRNb3ZlIiwiQ1JPU1MiLCJ1c2VHYW1lU3RhdGUiLCJwbGF5ZXJzQ291bnQiLCJnYW1lU3RhdGUiLCJkaXNwYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game-new/model/use-game-state.js\n"));

/***/ })

});