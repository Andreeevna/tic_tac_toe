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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/constants */ \"./components/game-new/ui/constants.js\");\n/* harmony import */ var _computer_winner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computer-winner */ \"./components/game-new/model/computer-winner.js\");\n/* harmony import */ var _get_next_move__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-next-move */ \"./components/game-new/model/get-next-move.js\");\nvar _s = $RefreshSig$();\n\n\n\n\nconst gameStateReducer = (state, action)=>{\n    return state;\n};\nconst initGameState = ()=>({\n        cells: new Array(19 * 19).fill(null),\n        currentMove: _ui_constants__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.CROSS\n    });\nfunction useGameState(playersCount) {\n    _s();\n    const [gameState, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(gameStateReducer, {}, initGameState);\n    // const [{ cells, currentMove, playersTimeOver }, setGameState] = useState(\n    // \t() => ({\n    // \t\tcells: new Array(19 * 19).fill(null),\n    // \t\tcurrentMove: GAME_SYMBOLS.CROSS,\n    // \t\tplayersTimeOver: [],\n    // \t})\n    // )\n    // console.log(computerWinner(cells))\n    const winnerSequence = (0,_computer_winner__WEBPACK_IMPORTED_MODULE_2__.computerWinner)(gameState.cells);\n    const nextMove = (0,_get_next_move__WEBPACK_IMPORTED_MODULE_3__.getNextMove)(gameState.currentMove, playersCount);\n    const winnerSymbol = nextMove === currentMove ? currentMove : cells[winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence[0]];\n// // обработка клика по клетке\n// const handleCellClick = index => {\n// \tsetGameState(lastGameState => ({\n// \t\t...lastGameState,\n// \t\tcurrentMove: getNextMove(\n// \t\t\tlastGameState.currentMove,\n// \t\t\tplayersCount,\n// \t\t\tlastGameState.playersTimeOver\n// \t\t),\n// \t\tcells: lastGameState.cells.map((cell, i) =>\n// \t\t\ti === index ? lastGameState.currentMove : cell\n// \t\t),\n// \t}))\n// }\n// const handlePlayerTimeOver = symbol => {\n// \tsetGameState(lastGameState => ({\n// \t\t...lastGameState,\n// \t\tplayersTimeOver: [...lastGameState.playersTimeOver, symbol],\n// \t\tcurrentMove: getNextMove(\n// \t\t\tlastGameState.currentMove,\n// \t\t\tplayersCount,\n// \t\t\tlastGameState.playersTimeOver\n// \t\t),\n// \t}))\n// }\n// return {\n// \tcells,\n// \tcurrentMove,\n// \tnextMove,\n// \thandleCellClick,\n// \thandlePlayerTimeOver,\n// \twinnerSequence,\n// \twinnerSymbol,\n// }\n}\n_s(useGameState, \"j2Lc7qLkPsIkuOKspfGyGEqTTbo=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL3VzZS1nYW1lLXN0YXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0M7QUFDWTtBQUNJO0FBQ0w7QUFFN0MsTUFBTUksbUJBQW1CLENBQUNDLE9BQU9DO0lBQ2hDLE9BQU9EO0FBQ1I7QUFFQSxNQUFNRSxnQkFBZ0IsSUFBTztRQUM1QkMsT0FBTyxJQUFJQyxNQUFNLEtBQUssSUFBSUMsSUFBSSxDQUFDO1FBQy9CQyxhQUFhVix1REFBWUEsQ0FBQ1csS0FBSztJQUNoQztBQUVPLFNBQVNDLGFBQWFDLFlBQVk7O0lBQ3hDLE1BQU0sQ0FBQ0MsV0FBV0MsU0FBUyxHQUFHaEIsaURBQVVBLENBQUNJLGtCQUFrQixDQUFDLEdBQUdHO0lBRS9ELDRFQUE0RTtJQUM1RSxZQUFZO0lBQ1osMENBQTBDO0lBQzFDLHFDQUFxQztJQUNyQyx5QkFBeUI7SUFDekIsTUFBTTtJQUNOLElBQUk7SUFDSixxQ0FBcUM7SUFDckMsTUFBTVUsaUJBQWlCZixnRUFBY0EsQ0FBQ2EsVUFBVVAsS0FBSztJQUNyRCxNQUFNVSxXQUFXZiwyREFBV0EsQ0FBQ1ksVUFBVUosV0FBVyxFQUFFRztJQUNwRCxNQUFNSyxlQUNMRCxhQUFhUCxjQUFjQSxjQUFjSCxLQUFLLENBQUNTLDJCQUFBQSxxQ0FBQUEsY0FBZ0IsQ0FBQyxFQUFFLENBQUM7QUFFcEUsK0JBQStCO0FBQy9CLHFDQUFxQztBQUNyQyxvQ0FBb0M7QUFDcEMsc0JBQXNCO0FBQ3RCLDhCQUE4QjtBQUM5QixnQ0FBZ0M7QUFDaEMsbUJBQW1CO0FBQ25CLG1DQUFtQztBQUNuQyxPQUFPO0FBQ1AsZ0RBQWdEO0FBQ2hELG9EQUFvRDtBQUNwRCxPQUFPO0FBQ1AsT0FBTztBQUNQLElBQUk7QUFDSiwyQ0FBMkM7QUFDM0Msb0NBQW9DO0FBQ3BDLHNCQUFzQjtBQUN0QixpRUFBaUU7QUFDakUsOEJBQThCO0FBQzlCLGdDQUFnQztBQUNoQyxtQkFBbUI7QUFDbkIsbUNBQW1DO0FBQ25DLE9BQU87QUFDUCxPQUFPO0FBQ1AsSUFBSTtBQUNKLFdBQVc7QUFDWCxVQUFVO0FBQ1YsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYixvQkFBb0I7QUFDcEIseUJBQXlCO0FBQ3pCLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakIsSUFBSTtBQUNMO0dBbERnQkoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lLW5ldy9tb2RlbC91c2UtZ2FtZS1zdGF0ZS5qcz8yZDFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgR0FNRV9TWU1CT0xTIH0gZnJvbSAnLi4vdWkvY29uc3RhbnRzJ1xyXG5pbXBvcnQgeyBjb21wdXRlcldpbm5lciB9IGZyb20gJy4vY29tcHV0ZXItd2lubmVyJ1xyXG5pbXBvcnQgeyBnZXROZXh0TW92ZSB9IGZyb20gJy4vZ2V0LW5leHQtbW92ZSdcclxuXHJcbmNvbnN0IGdhbWVTdGF0ZVJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdHJldHVybiBzdGF0ZVxyXG59XHJcblxyXG5jb25zdCBpbml0R2FtZVN0YXRlID0gKCkgPT4gKHtcclxuXHRjZWxsczogbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCksXHJcblx0Y3VycmVudE1vdmU6IEdBTUVfU1lNQk9MUy5DUk9TUyxcclxufSlcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VHYW1lU3RhdGUocGxheWVyc0NvdW50KSB7XHJcblx0Y29uc3QgW2dhbWVTdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihnYW1lU3RhdGVSZWR1Y2VyLCB7fSwgaW5pdEdhbWVTdGF0ZSlcclxuXHJcblx0Ly8gY29uc3QgW3sgY2VsbHMsIGN1cnJlbnRNb3ZlLCBwbGF5ZXJzVGltZU92ZXIgfSwgc2V0R2FtZVN0YXRlXSA9IHVzZVN0YXRlKFxyXG5cdC8vIFx0KCkgPT4gKHtcclxuXHQvLyBcdFx0Y2VsbHM6IG5ldyBBcnJheSgxOSAqIDE5KS5maWxsKG51bGwpLFxyXG5cdC8vIFx0XHRjdXJyZW50TW92ZTogR0FNRV9TWU1CT0xTLkNST1NTLFxyXG5cdC8vIFx0XHRwbGF5ZXJzVGltZU92ZXI6IFtdLFxyXG5cdC8vIFx0fSlcclxuXHQvLyApXHJcblx0Ly8gY29uc29sZS5sb2coY29tcHV0ZXJXaW5uZXIoY2VsbHMpKVxyXG5cdGNvbnN0IHdpbm5lclNlcXVlbmNlID0gY29tcHV0ZXJXaW5uZXIoZ2FtZVN0YXRlLmNlbGxzKVxyXG5cdGNvbnN0IG5leHRNb3ZlID0gZ2V0TmV4dE1vdmUoZ2FtZVN0YXRlLmN1cnJlbnRNb3ZlLCBwbGF5ZXJzQ291bnQpXHJcblx0Y29uc3Qgd2lubmVyU3ltYm9sID1cclxuXHRcdG5leHRNb3ZlID09PSBjdXJyZW50TW92ZSA/IGN1cnJlbnRNb3ZlIDogY2VsbHNbd2lubmVyU2VxdWVuY2U/LlswXV1cclxuXHJcblx0Ly8gLy8g0L7QsdGA0LDQsdC+0YLQutCwINC60LvQuNC60LAg0L/QviDQutC70LXRgtC60LVcclxuXHQvLyBjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPSBpbmRleCA9PiB7XHJcblx0Ly8gXHRzZXRHYW1lU3RhdGUobGFzdEdhbWVTdGF0ZSA9PiAoe1xyXG5cdC8vIFx0XHQuLi5sYXN0R2FtZVN0YXRlLFxyXG5cdC8vIFx0XHRjdXJyZW50TW92ZTogZ2V0TmV4dE1vdmUoXHJcblx0Ly8gXHRcdFx0bGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSxcclxuXHQvLyBcdFx0XHRwbGF5ZXJzQ291bnQsXHJcblx0Ly8gXHRcdFx0bGFzdEdhbWVTdGF0ZS5wbGF5ZXJzVGltZU92ZXJcclxuXHQvLyBcdFx0KSxcclxuXHQvLyBcdFx0Y2VsbHM6IGxhc3RHYW1lU3RhdGUuY2VsbHMubWFwKChjZWxsLCBpKSA9PlxyXG5cdC8vIFx0XHRcdGkgPT09IGluZGV4ID8gbGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSA6IGNlbGxcclxuXHQvLyBcdFx0KSxcclxuXHQvLyBcdH0pKVxyXG5cdC8vIH1cclxuXHQvLyBjb25zdCBoYW5kbGVQbGF5ZXJUaW1lT3ZlciA9IHN5bWJvbCA9PiB7XHJcblx0Ly8gXHRzZXRHYW1lU3RhdGUobGFzdEdhbWVTdGF0ZSA9PiAoe1xyXG5cdC8vIFx0XHQuLi5sYXN0R2FtZVN0YXRlLFxyXG5cdC8vIFx0XHRwbGF5ZXJzVGltZU92ZXI6IFsuLi5sYXN0R2FtZVN0YXRlLnBsYXllcnNUaW1lT3Zlciwgc3ltYm9sXSxcclxuXHQvLyBcdFx0Y3VycmVudE1vdmU6IGdldE5leHRNb3ZlKFxyXG5cdC8vIFx0XHRcdGxhc3RHYW1lU3RhdGUuY3VycmVudE1vdmUsXHJcblx0Ly8gXHRcdFx0cGxheWVyc0NvdW50LFxyXG5cdC8vIFx0XHRcdGxhc3RHYW1lU3RhdGUucGxheWVyc1RpbWVPdmVyXHJcblx0Ly8gXHRcdCksXHJcblx0Ly8gXHR9KSlcclxuXHQvLyB9XHJcblx0Ly8gcmV0dXJuIHtcclxuXHQvLyBcdGNlbGxzLFxyXG5cdC8vIFx0Y3VycmVudE1vdmUsXHJcblx0Ly8gXHRuZXh0TW92ZSxcclxuXHQvLyBcdGhhbmRsZUNlbGxDbGljayxcclxuXHQvLyBcdGhhbmRsZVBsYXllclRpbWVPdmVyLFxyXG5cdC8vIFx0d2lubmVyU2VxdWVuY2UsXHJcblx0Ly8gXHR3aW5uZXJTeW1ib2wsXHJcblx0Ly8gfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSZWR1Y2VyIiwiR0FNRV9TWU1CT0xTIiwiY29tcHV0ZXJXaW5uZXIiLCJnZXROZXh0TW92ZSIsImdhbWVTdGF0ZVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImluaXRHYW1lU3RhdGUiLCJjZWxscyIsIkFycmF5IiwiZmlsbCIsImN1cnJlbnRNb3ZlIiwiQ1JPU1MiLCJ1c2VHYW1lU3RhdGUiLCJwbGF5ZXJzQ291bnQiLCJnYW1lU3RhdGUiLCJkaXNwYXRjaCIsIndpbm5lclNlcXVlbmNlIiwibmV4dE1vdmUiLCJ3aW5uZXJTeW1ib2wiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game-new/model/use-game-state.js\n"));

/***/ })

});