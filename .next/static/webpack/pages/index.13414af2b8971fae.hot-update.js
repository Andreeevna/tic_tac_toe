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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GAME_STATE_ACTIONS: function() { return /* binding */ GAME_STATE_ACTIONS; },\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/constants */ \"./components/game-new/ui/constants.js\");\n/* harmony import */ var _computer_winner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computer-winner */ \"./components/game-new/model/computer-winner.js\");\n/* harmony import */ var _get_next_move__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-next-move */ \"./components/game-new/model/get-next-move.js\");\nvar _s = $RefreshSig$();\n\n\n\n\nconst GAME_STATE_ACTIONS = {\n    CELL_CLICK: \"cell-click\"\n};\nconst gameStateReducer = (state, action)=>{\n    console.log(action);\n    switch(action.type){\n        case GAME_STATE_ACTIONS.CELL_CLICK:\n            {\n                return {\n                    ...lastGameState,\n                    currentMove: (0,_get_next_move__WEBPACK_IMPORTED_MODULE_3__.getNextMove)(lastGameState.currentMove, playersCount, lastGameState.playersTimeOver),\n                    cells: lastGameState.cells.map((cell, i)=>i === index ? lastGameState.currentMove : cell)\n                };\n            }\n        default:\n            {\n                return state;\n            }\n    }\n    return state;\n};\nconst initGameState = ()=>({\n        cells: new Array(19 * 19).fill(null),\n        currentMove: _ui_constants__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.CROSS\n    });\nfunction useGameState(playersCount1) {\n    _s();\n    const [gameState, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(gameStateReducer, {}, initGameState);\n    // const [{ cells, currentMove, playersTimeOver }, setGameState] = useState(\n    // \t() => ({\n    // \t\tcells: new Array(19 * 19).fill(null),\n    // \t\tcurrentMove: GAME_SYMBOLS.CROSS,\n    // \t\tplayersTimeOver: [],\n    // \t})\n    // )\n    // console.log(computerWinner(cells))\n    const winnerSequence = (0,_computer_winner__WEBPACK_IMPORTED_MODULE_2__.computerWinner)(gameState.cells);\n    const nextMove = (0,_get_next_move__WEBPACK_IMPORTED_MODULE_3__.getNextMove)(gameState.currentMove, playersCount1);\n    const winnerSymbol = nextMove === gameState.currentMove ? gameState.currentMove : gameState.cells[winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence[0]];\n    return {\n        cells: gameState.cells,\n        currentMove: gameState.currentMove,\n        nextMove,\n        winnerSequence,\n        winnerSymbol,\n        dispatch\n    };\n// // обработка клика по клетке\n// const handleCellClick = index => {\n// \tsetGameState(lastGameState => (\n// {\n// \t\t...lastGameState,\n// \t\tcurrentMove: getNextMove(\n// \t\t\tlastGameState.currentMove,\n// \t\t\tplayersCount,\n// \t\t\tlastGameState.playersTimeOver\n// \t\t),\n// \t\tcells: lastGameState.cells.map((cell, i) =>\n// \t\t\ti === index ? lastGameState.currentMove : cell\n// \t\t),\n// \t}\n// ))\n// }\n// const handlePlayerTimeOver = symbol => {\n// \tsetGameState(lastGameState => ({\n// \t\t...lastGameState,\n// \t\tplayersTimeOver: [...lastGameState.playersTimeOver, symbol],\n// \t\tcurrentMove: getNextMove(\n// \t\t\tlastGameState.currentMove,\n// \t\t\tplayersCount,\n// \t\t\tlastGameState.playersTimeOver\n// \t\t),\n// \t}))\n// }\n// return {\n// \tcells,\n// \tcurrentMove,\n// \tnextMove,\n// \thandleCellClick,\n// \thandlePlayerTimeOver,\n// \twinnerSequence,\n// \twinnerSymbol,\n// }\n}\n_s(useGameState, \"j2Lc7qLkPsIkuOKspfGyGEqTTbo=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL3VzZS1nYW1lLXN0YXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ1k7QUFDSTtBQUNMO0FBRXRDLE1BQU1JLHFCQUFxQjtJQUNqQ0MsWUFBWTtBQUNiLEVBQUM7QUFFRCxNQUFNQyxtQkFBbUIsQ0FBQ0MsT0FBT0M7SUFDaENDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixPQUFRQSxPQUFPRyxJQUFJO1FBQ2xCLEtBQUtQLG1CQUFtQkMsVUFBVTtZQUFFO2dCQUNuQyxPQUFPO29CQUNOLEdBQUdPLGFBQWE7b0JBQ2hCQyxhQUFhViwyREFBV0EsQ0FDdkJTLGNBQWNDLFdBQVcsRUFDekJDLGNBQ0FGLGNBQWNHLGVBQWU7b0JBRTlCQyxPQUFPSixjQUFjSSxLQUFLLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxJQUNyQ0EsTUFBTUMsUUFBUVIsY0FBY0MsV0FBVyxHQUFHSztnQkFFNUM7WUFDRDtRQUNBO1lBQVM7Z0JBQ1IsT0FBT1g7WUFDUjtJQUNEO0lBQ0EsT0FBT0E7QUFDUjtBQUVBLE1BQU1jLGdCQUFnQixJQUFPO1FBQzVCTCxPQUFPLElBQUlNLE1BQU0sS0FBSyxJQUFJQyxJQUFJLENBQUM7UUFDL0JWLGFBQWFaLHVEQUFZQSxDQUFDdUIsS0FBSztJQUNoQztBQUVPLFNBQVNDLGFBQWFYLGFBQVk7O0lBQ3hDLE1BQU0sQ0FBQ1ksV0FBV0MsU0FBUyxHQUFHM0IsaURBQVVBLENBQUNNLGtCQUFrQixDQUFDLEdBQUdlO0lBRS9ELDRFQUE0RTtJQUM1RSxZQUFZO0lBQ1osMENBQTBDO0lBQzFDLHFDQUFxQztJQUNyQyx5QkFBeUI7SUFDekIsTUFBTTtJQUNOLElBQUk7SUFDSixxQ0FBcUM7SUFDckMsTUFBTU8saUJBQWlCMUIsZ0VBQWNBLENBQUN3QixVQUFVVixLQUFLO0lBQ3JELE1BQU1hLFdBQVcxQiwyREFBV0EsQ0FBQ3VCLFVBQVViLFdBQVcsRUFBRUM7SUFDcEQsTUFBTWdCLGVBQ0xELGFBQWFILFVBQVViLFdBQVcsR0FDL0JhLFVBQVViLFdBQVcsR0FDckJhLFVBQVVWLEtBQUssQ0FBQ1ksMkJBQUFBLHFDQUFBQSxjQUFnQixDQUFDLEVBQUUsQ0FBQztJQUV4QyxPQUFPO1FBQ05aLE9BQU9VLFVBQVVWLEtBQUs7UUFDdEJILGFBQWFhLFVBQVViLFdBQVc7UUFDbENnQjtRQUNBRDtRQUNBRTtRQUNBSDtJQUNEO0FBRUEsK0JBQStCO0FBQy9CLHFDQUFxQztBQUNyQyxtQ0FBbUM7QUFDbkMsSUFBSTtBQUNKLHNCQUFzQjtBQUN0Qiw4QkFBOEI7QUFDOUIsZ0NBQWdDO0FBQ2hDLG1CQUFtQjtBQUNuQixtQ0FBbUM7QUFDbkMsT0FBTztBQUNQLGdEQUFnRDtBQUNoRCxvREFBb0Q7QUFDcEQsT0FBTztBQUNQLEtBQUs7QUFDTCxLQUFLO0FBQ0wsSUFBSTtBQUVKLDJDQUEyQztBQUMzQyxvQ0FBb0M7QUFDcEMsc0JBQXNCO0FBQ3RCLGlFQUFpRTtBQUNqRSw4QkFBOEI7QUFDOUIsZ0NBQWdDO0FBQ2hDLG1CQUFtQjtBQUNuQixtQ0FBbUM7QUFDbkMsT0FBTztBQUNQLE9BQU87QUFDUCxJQUFJO0FBQ0osV0FBVztBQUNYLFVBQVU7QUFDVixnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiLG9CQUFvQjtBQUNwQix5QkFBeUI7QUFDekIsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQixJQUFJO0FBQ0w7R0FoRWdCRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL3VzZS1nYW1lLXN0YXRlLmpzPzJkMWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBHQU1FX1NZTUJPTFMgfSBmcm9tICcuLi91aS9jb25zdGFudHMnXHJcbmltcG9ydCB7IGNvbXB1dGVyV2lubmVyIH0gZnJvbSAnLi9jb21wdXRlci13aW5uZXInXHJcbmltcG9ydCB7IGdldE5leHRNb3ZlIH0gZnJvbSAnLi9nZXQtbmV4dC1tb3ZlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEdBTUVfU1RBVEVfQUNUSU9OUyA9IHtcclxuXHRDRUxMX0NMSUNLOiAnY2VsbC1jbGljaycsXHJcbn1cclxuXHJcbmNvbnN0IGdhbWVTdGF0ZVJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdGNvbnNvbGUubG9nKGFjdGlvbilcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEdBTUVfU1RBVEVfQUNUSU9OUy5DRUxMX0NMSUNLOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4ubGFzdEdhbWVTdGF0ZSxcclxuXHRcdFx0XHRjdXJyZW50TW92ZTogZ2V0TmV4dE1vdmUoXHJcblx0XHRcdFx0XHRsYXN0R2FtZVN0YXRlLmN1cnJlbnRNb3ZlLFxyXG5cdFx0XHRcdFx0cGxheWVyc0NvdW50LFxyXG5cdFx0XHRcdFx0bGFzdEdhbWVTdGF0ZS5wbGF5ZXJzVGltZU92ZXJcclxuXHRcdFx0XHQpLFxyXG5cdFx0XHRcdGNlbGxzOiBsYXN0R2FtZVN0YXRlLmNlbGxzLm1hcCgoY2VsbCwgaSkgPT5cclxuXHRcdFx0XHRcdGkgPT09IGluZGV4ID8gbGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSA6IGNlbGxcclxuXHRcdFx0XHQpLFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZVxyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gc3RhdGVcclxufVxyXG5cclxuY29uc3QgaW5pdEdhbWVTdGF0ZSA9ICgpID0+ICh7XHJcblx0Y2VsbHM6IG5ldyBBcnJheSgxOSAqIDE5KS5maWxsKG51bGwpLFxyXG5cdGN1cnJlbnRNb3ZlOiBHQU1FX1NZTUJPTFMuQ1JPU1MsXHJcbn0pXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlR2FtZVN0YXRlKHBsYXllcnNDb3VudCkge1xyXG5cdGNvbnN0IFtnYW1lU3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoZ2FtZVN0YXRlUmVkdWNlciwge30sIGluaXRHYW1lU3RhdGUpXHJcblxyXG5cdC8vIGNvbnN0IFt7IGNlbGxzLCBjdXJyZW50TW92ZSwgcGxheWVyc1RpbWVPdmVyIH0sIHNldEdhbWVTdGF0ZV0gPSB1c2VTdGF0ZShcclxuXHQvLyBcdCgpID0+ICh7XHJcblx0Ly8gXHRcdGNlbGxzOiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSxcclxuXHQvLyBcdFx0Y3VycmVudE1vdmU6IEdBTUVfU1lNQk9MUy5DUk9TUyxcclxuXHQvLyBcdFx0cGxheWVyc1RpbWVPdmVyOiBbXSxcclxuXHQvLyBcdH0pXHJcblx0Ly8gKVxyXG5cdC8vIGNvbnNvbGUubG9nKGNvbXB1dGVyV2lubmVyKGNlbGxzKSlcclxuXHRjb25zdCB3aW5uZXJTZXF1ZW5jZSA9IGNvbXB1dGVyV2lubmVyKGdhbWVTdGF0ZS5jZWxscylcclxuXHRjb25zdCBuZXh0TW92ZSA9IGdldE5leHRNb3ZlKGdhbWVTdGF0ZS5jdXJyZW50TW92ZSwgcGxheWVyc0NvdW50KVxyXG5cdGNvbnN0IHdpbm5lclN5bWJvbCA9XHJcblx0XHRuZXh0TW92ZSA9PT0gZ2FtZVN0YXRlLmN1cnJlbnRNb3ZlXHJcblx0XHRcdD8gZ2FtZVN0YXRlLmN1cnJlbnRNb3ZlXHJcblx0XHRcdDogZ2FtZVN0YXRlLmNlbGxzW3dpbm5lclNlcXVlbmNlPy5bMF1dXHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRjZWxsczogZ2FtZVN0YXRlLmNlbGxzLFxyXG5cdFx0Y3VycmVudE1vdmU6IGdhbWVTdGF0ZS5jdXJyZW50TW92ZSxcclxuXHRcdG5leHRNb3ZlLFxyXG5cdFx0d2lubmVyU2VxdWVuY2UsXHJcblx0XHR3aW5uZXJTeW1ib2wsXHJcblx0XHRkaXNwYXRjaCxcclxuXHR9XHJcblxyXG5cdC8vIC8vINC+0LHRgNCw0LHQvtGC0LrQsCDQutC70LjQutCwINC/0L4g0LrQu9C10YLQutC1XHJcblx0Ly8gY29uc3QgaGFuZGxlQ2VsbENsaWNrID0gaW5kZXggPT4ge1xyXG5cdC8vIFx0c2V0R2FtZVN0YXRlKGxhc3RHYW1lU3RhdGUgPT4gKFxyXG5cdC8vIHtcclxuXHQvLyBcdFx0Li4ubGFzdEdhbWVTdGF0ZSxcclxuXHQvLyBcdFx0Y3VycmVudE1vdmU6IGdldE5leHRNb3ZlKFxyXG5cdC8vIFx0XHRcdGxhc3RHYW1lU3RhdGUuY3VycmVudE1vdmUsXHJcblx0Ly8gXHRcdFx0cGxheWVyc0NvdW50LFxyXG5cdC8vIFx0XHRcdGxhc3RHYW1lU3RhdGUucGxheWVyc1RpbWVPdmVyXHJcblx0Ly8gXHRcdCksXHJcblx0Ly8gXHRcdGNlbGxzOiBsYXN0R2FtZVN0YXRlLmNlbGxzLm1hcCgoY2VsbCwgaSkgPT5cclxuXHQvLyBcdFx0XHRpID09PSBpbmRleCA/IGxhc3RHYW1lU3RhdGUuY3VycmVudE1vdmUgOiBjZWxsXHJcblx0Ly8gXHRcdCksXHJcblx0Ly8gXHR9XHJcblx0Ly8gKSlcclxuXHQvLyB9XHJcblxyXG5cdC8vIGNvbnN0IGhhbmRsZVBsYXllclRpbWVPdmVyID0gc3ltYm9sID0+IHtcclxuXHQvLyBcdHNldEdhbWVTdGF0ZShsYXN0R2FtZVN0YXRlID0+ICh7XHJcblx0Ly8gXHRcdC4uLmxhc3RHYW1lU3RhdGUsXHJcblx0Ly8gXHRcdHBsYXllcnNUaW1lT3ZlcjogWy4uLmxhc3RHYW1lU3RhdGUucGxheWVyc1RpbWVPdmVyLCBzeW1ib2xdLFxyXG5cdC8vIFx0XHRjdXJyZW50TW92ZTogZ2V0TmV4dE1vdmUoXHJcblx0Ly8gXHRcdFx0bGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSxcclxuXHQvLyBcdFx0XHRwbGF5ZXJzQ291bnQsXHJcblx0Ly8gXHRcdFx0bGFzdEdhbWVTdGF0ZS5wbGF5ZXJzVGltZU92ZXJcclxuXHQvLyBcdFx0KSxcclxuXHQvLyBcdH0pKVxyXG5cdC8vIH1cclxuXHQvLyByZXR1cm4ge1xyXG5cdC8vIFx0Y2VsbHMsXHJcblx0Ly8gXHRjdXJyZW50TW92ZSxcclxuXHQvLyBcdG5leHRNb3ZlLFxyXG5cdC8vIFx0aGFuZGxlQ2VsbENsaWNrLFxyXG5cdC8vIFx0aGFuZGxlUGxheWVyVGltZU92ZXIsXHJcblx0Ly8gXHR3aW5uZXJTZXF1ZW5jZSxcclxuXHQvLyBcdHdpbm5lclN5bWJvbCxcclxuXHQvLyB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVJlZHVjZXIiLCJHQU1FX1NZTUJPTFMiLCJjb21wdXRlcldpbm5lciIsImdldE5leHRNb3ZlIiwiR0FNRV9TVEFURV9BQ1RJT05TIiwiQ0VMTF9DTElDSyIsImdhbWVTdGF0ZVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwibGFzdEdhbWVTdGF0ZSIsImN1cnJlbnRNb3ZlIiwicGxheWVyc0NvdW50IiwicGxheWVyc1RpbWVPdmVyIiwiY2VsbHMiLCJtYXAiLCJjZWxsIiwiaSIsImluZGV4IiwiaW5pdEdhbWVTdGF0ZSIsIkFycmF5IiwiZmlsbCIsIkNST1NTIiwidXNlR2FtZVN0YXRlIiwiZ2FtZVN0YXRlIiwiZGlzcGF0Y2giLCJ3aW5uZXJTZXF1ZW5jZSIsIm5leHRNb3ZlIiwid2lubmVyU3ltYm9sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game-new/model/use-game-state.js\n"));

/***/ })

});