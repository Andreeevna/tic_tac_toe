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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GAME_STATE_ACTIONS: function() { return /* binding */ GAME_STATE_ACTIONS; },\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/constants */ \"./components/game-new/ui/constants.js\");\n/* harmony import */ var _computer_winner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computer-winner */ \"./components/game-new/model/computer-winner.js\");\n/* harmony import */ var _get_next_move__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-next-move */ \"./components/game-new/model/get-next-move.js\");\nvar _s = $RefreshSig$();\n\n\n\n\nconst GAME_STATE_ACTIONS = {\n    CELL_CLICK: \"cell-click\"\n};\nconst gameStateReducer = (state, action)=>{\n    console.log(action);\n    switch(action.type){\n        case GAME_STATE_ACTIONS.CELL_CLICK:\n            {\n                const { index } = action;\n                return {\n                    ...state,\n                    currentMove: (0,_get_next_move__WEBPACK_IMPORTED_MODULE_3__.getNextMove)(state.currentMove, state.playersCount, state.playersTimeOver),\n                    cells: state.cells.map((cell, i)=>i === index ? state.currentMove : cell)\n                };\n            }\n        default:\n            {\n                return state;\n            }\n    }\n};\nconst initGameState = (param)=>{\n    let { playersCount } = param;\n    return {\n        cells: new Array(19 * 19).fill(null),\n        currentMove: _ui_constants__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.CROSS,\n        playersCount\n    };\n};\nfunction useGameState(playersCount) {\n    _s();\n    const [gameState, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(gameStateReducer, {\n        playersCount\n    }, initGameState);\n    // const [{ cells, currentMove, playersTimeOver }, setGameState] = useState(\n    // \t() => ({\n    // \t\tcells: new Array(19 * 19).fill(null),\n    // \t\tcurrentMove: GAME_SYMBOLS.CROSS,\n    // \t\tplayersTimeOver: [],\n    // \t})\n    // )\n    // console.log(computerWinner(cells))\n    const winnerSequence = (0,_computer_winner__WEBPACK_IMPORTED_MODULE_2__.computerWinner)(gameState.cells);\n    const nextMove = (0,_get_next_move__WEBPACK_IMPORTED_MODULE_3__.getNextMove)(gameState.currentMove, playersCount);\n    const winnerSymbol = nextMove === gameState.currentMove ? gameState.currentMove : gameState.cells[winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence[0]];\n    return {\n        cells: gameState.cells,\n        currentMove: gameState.currentMove,\n        nextMove,\n        winnerSequence,\n        winnerSymbol,\n        dispatch\n    };\n// // обработка клика по клетке\n// const handleCellClick = index => {\n// \tsetGameState(lastGameState => (\n// {\n// \t\t...lastGameState,\n// \t\tcurrentMove: getNextMove(\n// \t\t\tlastGameState.currentMove,\n// \t\t\tplayersCount,\n// \t\t\tlastGameState.playersTimeOver\n// \t\t),\n// \t\tcells: lastGameState.cells.map((cell, i) =>\n// \t\t\ti === index ? lastGameState.currentMove : cell\n// \t\t),\n// \t}\n// ))\n// }\n// const handlePlayerTimeOver = symbol => {\n// \tsetGameState(lastGameState => ({\n// \t\t...lastGameState,\n// \t\tplayersTimeOver: [...lastGameState.playersTimeOver, symbol],\n// \t\tcurrentMove: getNextMove(\n// \t\t\tlastGameState.currentMove,\n// \t\t\tplayersCount,\n// \t\t\tlastGameState.playersTimeOver\n// \t\t),\n// \t}))\n// }\n// return {\n// \tcells,\n// \tcurrentMove,\n// \tnextMove,\n// \thandleCellClick,\n// \thandlePlayerTimeOver,\n// \twinnerSequence,\n// \twinnerSymbol,\n// }\n}\n_s(useGameState, \"J0Rf2eABqVD7yc0pvdEaJrorx1E=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL3VzZS1nYW1lLXN0YXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ1k7QUFDSTtBQUNMO0FBRXRDLE1BQU1JLHFCQUFxQjtJQUNqQ0MsWUFBWTtBQUNiLEVBQUM7QUFFRCxNQUFNQyxtQkFBbUIsQ0FBQ0MsT0FBT0M7SUFDaENDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixPQUFRQSxPQUFPRyxJQUFJO1FBQ2xCLEtBQUtQLG1CQUFtQkMsVUFBVTtZQUFFO2dCQUNuQyxNQUFNLEVBQUVPLEtBQUssRUFBRSxHQUFHSjtnQkFDbEIsT0FBTztvQkFDTixHQUFHRCxLQUFLO29CQUNSTSxhQUFhViwyREFBV0EsQ0FDdkJJLE1BQU1NLFdBQVcsRUFDakJOLE1BQU1PLFlBQVksRUFDbEJQLE1BQU1RLGVBQWU7b0JBRXRCQyxPQUFPVCxNQUFNUyxLQUFLLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxJQUM3QkEsTUFBTVAsUUFBUUwsTUFBTU0sV0FBVyxHQUFHSztnQkFFcEM7WUFDRDtRQUNBO1lBQVM7Z0JBQ1IsT0FBT1g7WUFDUjtJQUNEO0FBQ0Q7QUFFQSxNQUFNYSxnQkFBZ0I7UUFBQyxFQUFFTixZQUFZLEVBQUU7V0FBTTtRQUM1Q0UsT0FBTyxJQUFJSyxNQUFNLEtBQUssSUFBSUMsSUFBSSxDQUFDO1FBQy9CVCxhQUFhWix1REFBWUEsQ0FBQ3NCLEtBQUs7UUFDL0JUO0lBQ0Q7QUFBQTtBQUVPLFNBQVNVLGFBQWFWLFlBQVk7O0lBQ3hDLE1BQU0sQ0FBQ1csV0FBV0MsU0FBUyxHQUFHMUIsaURBQVVBLENBQ3ZDTSxrQkFDQTtRQUFFUTtJQUFhLEdBQ2ZNO0lBR0QsNEVBQTRFO0lBQzVFLFlBQVk7SUFDWiwwQ0FBMEM7SUFDMUMscUNBQXFDO0lBQ3JDLHlCQUF5QjtJQUN6QixNQUFNO0lBQ04sSUFBSTtJQUNKLHFDQUFxQztJQUNyQyxNQUFNTyxpQkFBaUJ6QixnRUFBY0EsQ0FBQ3VCLFVBQVVULEtBQUs7SUFDckQsTUFBTVksV0FBV3pCLDJEQUFXQSxDQUFDc0IsVUFBVVosV0FBVyxFQUFFQztJQUNwRCxNQUFNZSxlQUNMRCxhQUFhSCxVQUFVWixXQUFXLEdBQy9CWSxVQUFVWixXQUFXLEdBQ3JCWSxVQUFVVCxLQUFLLENBQUNXLDJCQUFBQSxxQ0FBQUEsY0FBZ0IsQ0FBQyxFQUFFLENBQUM7SUFFeEMsT0FBTztRQUNOWCxPQUFPUyxVQUFVVCxLQUFLO1FBQ3RCSCxhQUFhWSxVQUFVWixXQUFXO1FBQ2xDZTtRQUNBRDtRQUNBRTtRQUNBSDtJQUNEO0FBRUEsK0JBQStCO0FBQy9CLHFDQUFxQztBQUNyQyxtQ0FBbUM7QUFDbkMsSUFBSTtBQUNKLHNCQUFzQjtBQUN0Qiw4QkFBOEI7QUFDOUIsZ0NBQWdDO0FBQ2hDLG1CQUFtQjtBQUNuQixtQ0FBbUM7QUFDbkMsT0FBTztBQUNQLGdEQUFnRDtBQUNoRCxvREFBb0Q7QUFDcEQsT0FBTztBQUNQLEtBQUs7QUFDTCxLQUFLO0FBQ0wsSUFBSTtBQUVKLDJDQUEyQztBQUMzQyxvQ0FBb0M7QUFDcEMsc0JBQXNCO0FBQ3RCLGlFQUFpRTtBQUNqRSw4QkFBOEI7QUFDOUIsZ0NBQWdDO0FBQ2hDLG1CQUFtQjtBQUNuQixtQ0FBbUM7QUFDbkMsT0FBTztBQUNQLE9BQU87QUFDUCxJQUFJO0FBQ0osV0FBVztBQUNYLFVBQVU7QUFDVixnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiLG9CQUFvQjtBQUNwQix5QkFBeUI7QUFDekIsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQixJQUFJO0FBQ0w7R0FwRWdCRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL3VzZS1nYW1lLXN0YXRlLmpzPzJkMWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBHQU1FX1NZTUJPTFMgfSBmcm9tICcuLi91aS9jb25zdGFudHMnXHJcbmltcG9ydCB7IGNvbXB1dGVyV2lubmVyIH0gZnJvbSAnLi9jb21wdXRlci13aW5uZXInXHJcbmltcG9ydCB7IGdldE5leHRNb3ZlIH0gZnJvbSAnLi9nZXQtbmV4dC1tb3ZlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEdBTUVfU1RBVEVfQUNUSU9OUyA9IHtcclxuXHRDRUxMX0NMSUNLOiAnY2VsbC1jbGljaycsXHJcbn1cclxuXHJcbmNvbnN0IGdhbWVTdGF0ZVJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdGNvbnNvbGUubG9nKGFjdGlvbilcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEdBTUVfU1RBVEVfQUNUSU9OUy5DRUxMX0NMSUNLOiB7XHJcblx0XHRcdGNvbnN0IHsgaW5kZXggfSA9IGFjdGlvblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGN1cnJlbnRNb3ZlOiBnZXROZXh0TW92ZShcclxuXHRcdFx0XHRcdHN0YXRlLmN1cnJlbnRNb3ZlLFxyXG5cdFx0XHRcdFx0c3RhdGUucGxheWVyc0NvdW50LFxyXG5cdFx0XHRcdFx0c3RhdGUucGxheWVyc1RpbWVPdmVyXHJcblx0XHRcdFx0KSxcclxuXHRcdFx0XHRjZWxsczogc3RhdGUuY2VsbHMubWFwKChjZWxsLCBpKSA9PlxyXG5cdFx0XHRcdFx0aSA9PT0gaW5kZXggPyBzdGF0ZS5jdXJyZW50TW92ZSA6IGNlbGxcclxuXHRcdFx0XHQpLFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgaW5pdEdhbWVTdGF0ZSA9ICh7IHBsYXllcnNDb3VudCB9KSA9PiAoe1xyXG5cdGNlbGxzOiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSxcclxuXHRjdXJyZW50TW92ZTogR0FNRV9TWU1CT0xTLkNST1NTLFxyXG5cdHBsYXllcnNDb3VudCxcclxufSlcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VHYW1lU3RhdGUocGxheWVyc0NvdW50KSB7XHJcblx0Y29uc3QgW2dhbWVTdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihcclxuXHRcdGdhbWVTdGF0ZVJlZHVjZXIsXHJcblx0XHR7IHBsYXllcnNDb3VudCB9LFxyXG5cdFx0aW5pdEdhbWVTdGF0ZVxyXG5cdClcclxuXHJcblx0Ly8gY29uc3QgW3sgY2VsbHMsIGN1cnJlbnRNb3ZlLCBwbGF5ZXJzVGltZU92ZXIgfSwgc2V0R2FtZVN0YXRlXSA9IHVzZVN0YXRlKFxyXG5cdC8vIFx0KCkgPT4gKHtcclxuXHQvLyBcdFx0Y2VsbHM6IG5ldyBBcnJheSgxOSAqIDE5KS5maWxsKG51bGwpLFxyXG5cdC8vIFx0XHRjdXJyZW50TW92ZTogR0FNRV9TWU1CT0xTLkNST1NTLFxyXG5cdC8vIFx0XHRwbGF5ZXJzVGltZU92ZXI6IFtdLFxyXG5cdC8vIFx0fSlcclxuXHQvLyApXHJcblx0Ly8gY29uc29sZS5sb2coY29tcHV0ZXJXaW5uZXIoY2VsbHMpKVxyXG5cdGNvbnN0IHdpbm5lclNlcXVlbmNlID0gY29tcHV0ZXJXaW5uZXIoZ2FtZVN0YXRlLmNlbGxzKVxyXG5cdGNvbnN0IG5leHRNb3ZlID0gZ2V0TmV4dE1vdmUoZ2FtZVN0YXRlLmN1cnJlbnRNb3ZlLCBwbGF5ZXJzQ291bnQpXHJcblx0Y29uc3Qgd2lubmVyU3ltYm9sID1cclxuXHRcdG5leHRNb3ZlID09PSBnYW1lU3RhdGUuY3VycmVudE1vdmVcclxuXHRcdFx0PyBnYW1lU3RhdGUuY3VycmVudE1vdmVcclxuXHRcdFx0OiBnYW1lU3RhdGUuY2VsbHNbd2lubmVyU2VxdWVuY2U/LlswXV1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGNlbGxzOiBnYW1lU3RhdGUuY2VsbHMsXHJcblx0XHRjdXJyZW50TW92ZTogZ2FtZVN0YXRlLmN1cnJlbnRNb3ZlLFxyXG5cdFx0bmV4dE1vdmUsXHJcblx0XHR3aW5uZXJTZXF1ZW5jZSxcclxuXHRcdHdpbm5lclN5bWJvbCxcclxuXHRcdGRpc3BhdGNoLFxyXG5cdH1cclxuXHJcblx0Ly8gLy8g0L7QsdGA0LDQsdC+0YLQutCwINC60LvQuNC60LAg0L/QviDQutC70LXRgtC60LVcclxuXHQvLyBjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPSBpbmRleCA9PiB7XHJcblx0Ly8gXHRzZXRHYW1lU3RhdGUobGFzdEdhbWVTdGF0ZSA9PiAoXHJcblx0Ly8ge1xyXG5cdC8vIFx0XHQuLi5sYXN0R2FtZVN0YXRlLFxyXG5cdC8vIFx0XHRjdXJyZW50TW92ZTogZ2V0TmV4dE1vdmUoXHJcblx0Ly8gXHRcdFx0bGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSxcclxuXHQvLyBcdFx0XHRwbGF5ZXJzQ291bnQsXHJcblx0Ly8gXHRcdFx0bGFzdEdhbWVTdGF0ZS5wbGF5ZXJzVGltZU92ZXJcclxuXHQvLyBcdFx0KSxcclxuXHQvLyBcdFx0Y2VsbHM6IGxhc3RHYW1lU3RhdGUuY2VsbHMubWFwKChjZWxsLCBpKSA9PlxyXG5cdC8vIFx0XHRcdGkgPT09IGluZGV4ID8gbGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSA6IGNlbGxcclxuXHQvLyBcdFx0KSxcclxuXHQvLyBcdH1cclxuXHQvLyApKVxyXG5cdC8vIH1cclxuXHJcblx0Ly8gY29uc3QgaGFuZGxlUGxheWVyVGltZU92ZXIgPSBzeW1ib2wgPT4ge1xyXG5cdC8vIFx0c2V0R2FtZVN0YXRlKGxhc3RHYW1lU3RhdGUgPT4gKHtcclxuXHQvLyBcdFx0Li4ubGFzdEdhbWVTdGF0ZSxcclxuXHQvLyBcdFx0cGxheWVyc1RpbWVPdmVyOiBbLi4ubGFzdEdhbWVTdGF0ZS5wbGF5ZXJzVGltZU92ZXIsIHN5bWJvbF0sXHJcblx0Ly8gXHRcdGN1cnJlbnRNb3ZlOiBnZXROZXh0TW92ZShcclxuXHQvLyBcdFx0XHRsYXN0R2FtZVN0YXRlLmN1cnJlbnRNb3ZlLFxyXG5cdC8vIFx0XHRcdHBsYXllcnNDb3VudCxcclxuXHQvLyBcdFx0XHRsYXN0R2FtZVN0YXRlLnBsYXllcnNUaW1lT3ZlclxyXG5cdC8vIFx0XHQpLFxyXG5cdC8vIFx0fSkpXHJcblx0Ly8gfVxyXG5cdC8vIHJldHVybiB7XHJcblx0Ly8gXHRjZWxscyxcclxuXHQvLyBcdGN1cnJlbnRNb3ZlLFxyXG5cdC8vIFx0bmV4dE1vdmUsXHJcblx0Ly8gXHRoYW5kbGVDZWxsQ2xpY2ssXHJcblx0Ly8gXHRoYW5kbGVQbGF5ZXJUaW1lT3ZlcixcclxuXHQvLyBcdHdpbm5lclNlcXVlbmNlLFxyXG5cdC8vIFx0d2lubmVyU3ltYm9sLFxyXG5cdC8vIH1cclxufVxyXG4iXSwibmFtZXMiOlsidXNlUmVkdWNlciIsIkdBTUVfU1lNQk9MUyIsImNvbXB1dGVyV2lubmVyIiwiZ2V0TmV4dE1vdmUiLCJHQU1FX1NUQVRFX0FDVElPTlMiLCJDRUxMX0NMSUNLIiwiZ2FtZVN0YXRlUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJpbmRleCIsImN1cnJlbnRNb3ZlIiwicGxheWVyc0NvdW50IiwicGxheWVyc1RpbWVPdmVyIiwiY2VsbHMiLCJtYXAiLCJjZWxsIiwiaSIsImluaXRHYW1lU3RhdGUiLCJBcnJheSIsImZpbGwiLCJDUk9TUyIsInVzZUdhbWVTdGF0ZSIsImdhbWVTdGF0ZSIsImRpc3BhdGNoIiwid2lubmVyU2VxdWVuY2UiLCJuZXh0TW92ZSIsIndpbm5lclN5bWJvbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game-new/model/use-game-state.js\n"));

/***/ })

});