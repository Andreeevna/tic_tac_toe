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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/constants */ \"./components/game-new/ui/constants.js\");\n/* harmony import */ var _computer_winner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computer-winner */ \"./components/game-new/model/computer-winner.js\");\n/* harmony import */ var _get_next_move__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-next-move */ \"./components/game-new/model/get-next-move.js\");\nvar _s = $RefreshSig$();\n\n\n\n\nconst gameStateReducer = (state, action)=>{\n    return state;\n};\nconst initGameState = ()=>({\n        cells: new Array(19 * 19).fill(null),\n        currentMove: _ui_constants__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.CROSS\n    });\nfunction useGameState(playersCount) {\n    _s();\n    const [gameState, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(gameStateReducer, {}, initGameState);\n    // const [{ cells, currentMove, playersTimeOver }, setGameState] = useState(\n    // \t() => ({\n    // \t\tcells: new Array(19 * 19).fill(null),\n    // \t\tcurrentMove: GAME_SYMBOLS.CROSS,\n    // \t\tplayersTimeOver: [],\n    // \t})\n    // )\n    // console.log(computerWinner(cells))\n    const winnerSequence = (0,_computer_winner__WEBPACK_IMPORTED_MODULE_2__.computerWinner)(gameState.cells);\n    const nextMove = (0,_get_next_move__WEBPACK_IMPORTED_MODULE_3__.getNextMove)(currentMove, playersCount, playersTimeOver);\n    const winnerSymbol = nextMove === currentMove ? currentMove : cells[winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence[0]];\n// // обработка клика по клетке\n// const handleCellClick = index => {\n// \tsetGameState(lastGameState => ({\n// \t\t...lastGameState,\n// \t\tcurrentMove: getNextMove(\n// \t\t\tlastGameState.currentMove,\n// \t\t\tplayersCount,\n// \t\t\tlastGameState.playersTimeOver\n// \t\t),\n// \t\tcells: lastGameState.cells.map((cell, i) =>\n// \t\t\ti === index ? lastGameState.currentMove : cell\n// \t\t),\n// \t}))\n// }\n// const handlePlayerTimeOver = symbol => {\n// \tsetGameState(lastGameState => ({\n// \t\t...lastGameState,\n// \t\tplayersTimeOver: [...lastGameState.playersTimeOver, symbol],\n// \t\tcurrentMove: getNextMove(\n// \t\t\tlastGameState.currentMove,\n// \t\t\tplayersCount,\n// \t\t\tlastGameState.playersTimeOver\n// \t\t),\n// \t}))\n// }\n// return {\n// \tcells,\n// \tcurrentMove,\n// \tnextMove,\n// \thandleCellClick,\n// \thandlePlayerTimeOver,\n// \twinnerSequence,\n// \twinnerSymbol,\n// }\n}\n_s(useGameState, \"j2Lc7qLkPsIkuOKspfGyGEqTTbo=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL3VzZS1nYW1lLXN0YXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0M7QUFDWTtBQUNJO0FBQ0w7QUFFN0MsTUFBTUksbUJBQW1CLENBQUNDLE9BQU9DO0lBQ2hDLE9BQU9EO0FBQ1I7QUFFQSxNQUFNRSxnQkFBZ0IsSUFBTztRQUM1QkMsT0FBTyxJQUFJQyxNQUFNLEtBQUssSUFBSUMsSUFBSSxDQUFDO1FBQy9CQyxhQUFhVix1REFBWUEsQ0FBQ1csS0FBSztJQUNoQztBQUVPLFNBQVNDLGFBQWFDLFlBQVk7O0lBQ3hDLE1BQU0sQ0FBQ0MsV0FBV0MsU0FBUyxHQUFHaEIsaURBQVVBLENBQUNJLGtCQUFrQixDQUFDLEdBQUdHO0lBRS9ELDRFQUE0RTtJQUM1RSxZQUFZO0lBQ1osMENBQTBDO0lBQzFDLHFDQUFxQztJQUNyQyx5QkFBeUI7SUFDekIsTUFBTTtJQUNOLElBQUk7SUFDSixxQ0FBcUM7SUFDckMsTUFBTVUsaUJBQWlCZixnRUFBY0EsQ0FBQ2EsVUFBVVAsS0FBSztJQUNyRCxNQUFNVSxXQUFXZiwyREFBV0EsQ0FBQ1EsYUFBYUcsY0FBY0s7SUFDeEQsTUFBTUMsZUFDTEYsYUFBYVAsY0FBY0EsY0FBY0gsS0FBSyxDQUFDUywyQkFBQUEscUNBQUFBLGNBQWdCLENBQUMsRUFBRSxDQUFDO0FBQ3BFLCtCQUErQjtBQUMvQixxQ0FBcUM7QUFDckMsb0NBQW9DO0FBQ3BDLHNCQUFzQjtBQUN0Qiw4QkFBOEI7QUFDOUIsZ0NBQWdDO0FBQ2hDLG1CQUFtQjtBQUNuQixtQ0FBbUM7QUFDbkMsT0FBTztBQUNQLGdEQUFnRDtBQUNoRCxvREFBb0Q7QUFDcEQsT0FBTztBQUNQLE9BQU87QUFDUCxJQUFJO0FBQ0osMkNBQTJDO0FBQzNDLG9DQUFvQztBQUNwQyxzQkFBc0I7QUFDdEIsaUVBQWlFO0FBQ2pFLDhCQUE4QjtBQUM5QixnQ0FBZ0M7QUFDaEMsbUJBQW1CO0FBQ25CLG1DQUFtQztBQUNuQyxPQUFPO0FBQ1AsT0FBTztBQUNQLElBQUk7QUFDSixXQUFXO0FBQ1gsVUFBVTtBQUNWLGdCQUFnQjtBQUNoQixhQUFhO0FBQ2Isb0JBQW9CO0FBQ3BCLHlCQUF5QjtBQUN6QixtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCLElBQUk7QUFDTDtHQWpEZ0JKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS1uZXcvbW9kZWwvdXNlLWdhbWUtc3RhdGUuanM/MmQxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEdBTUVfU1lNQk9MUyB9IGZyb20gJy4uL3VpL2NvbnN0YW50cydcclxuaW1wb3J0IHsgY29tcHV0ZXJXaW5uZXIgfSBmcm9tICcuL2NvbXB1dGVyLXdpbm5lcidcclxuaW1wb3J0IHsgZ2V0TmV4dE1vdmUgfSBmcm9tICcuL2dldC1uZXh0LW1vdmUnXHJcblxyXG5jb25zdCBnYW1lU3RhdGVSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHRyZXR1cm4gc3RhdGVcclxufVxyXG5cclxuY29uc3QgaW5pdEdhbWVTdGF0ZSA9ICgpID0+ICh7XHJcblx0Y2VsbHM6IG5ldyBBcnJheSgxOSAqIDE5KS5maWxsKG51bGwpLFxyXG5cdGN1cnJlbnRNb3ZlOiBHQU1FX1NZTUJPTFMuQ1JPU1MsXHJcbn0pXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlR2FtZVN0YXRlKHBsYXllcnNDb3VudCkge1xyXG5cdGNvbnN0IFtnYW1lU3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoZ2FtZVN0YXRlUmVkdWNlciwge30sIGluaXRHYW1lU3RhdGUpXHJcblxyXG5cdC8vIGNvbnN0IFt7IGNlbGxzLCBjdXJyZW50TW92ZSwgcGxheWVyc1RpbWVPdmVyIH0sIHNldEdhbWVTdGF0ZV0gPSB1c2VTdGF0ZShcclxuXHQvLyBcdCgpID0+ICh7XHJcblx0Ly8gXHRcdGNlbGxzOiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSxcclxuXHQvLyBcdFx0Y3VycmVudE1vdmU6IEdBTUVfU1lNQk9MUy5DUk9TUyxcclxuXHQvLyBcdFx0cGxheWVyc1RpbWVPdmVyOiBbXSxcclxuXHQvLyBcdH0pXHJcblx0Ly8gKVxyXG5cdC8vIGNvbnNvbGUubG9nKGNvbXB1dGVyV2lubmVyKGNlbGxzKSlcclxuXHRjb25zdCB3aW5uZXJTZXF1ZW5jZSA9IGNvbXB1dGVyV2lubmVyKGdhbWVTdGF0ZS5jZWxscylcclxuXHRjb25zdCBuZXh0TW92ZSA9IGdldE5leHRNb3ZlKGN1cnJlbnRNb3ZlLCBwbGF5ZXJzQ291bnQsIHBsYXllcnNUaW1lT3ZlcilcclxuXHRjb25zdCB3aW5uZXJTeW1ib2wgPVxyXG5cdFx0bmV4dE1vdmUgPT09IGN1cnJlbnRNb3ZlID8gY3VycmVudE1vdmUgOiBjZWxsc1t3aW5uZXJTZXF1ZW5jZT8uWzBdXVxyXG5cdC8vIC8vINC+0LHRgNCw0LHQvtGC0LrQsCDQutC70LjQutCwINC/0L4g0LrQu9C10YLQutC1XHJcblx0Ly8gY29uc3QgaGFuZGxlQ2VsbENsaWNrID0gaW5kZXggPT4ge1xyXG5cdC8vIFx0c2V0R2FtZVN0YXRlKGxhc3RHYW1lU3RhdGUgPT4gKHtcclxuXHQvLyBcdFx0Li4ubGFzdEdhbWVTdGF0ZSxcclxuXHQvLyBcdFx0Y3VycmVudE1vdmU6IGdldE5leHRNb3ZlKFxyXG5cdC8vIFx0XHRcdGxhc3RHYW1lU3RhdGUuY3VycmVudE1vdmUsXHJcblx0Ly8gXHRcdFx0cGxheWVyc0NvdW50LFxyXG5cdC8vIFx0XHRcdGxhc3RHYW1lU3RhdGUucGxheWVyc1RpbWVPdmVyXHJcblx0Ly8gXHRcdCksXHJcblx0Ly8gXHRcdGNlbGxzOiBsYXN0R2FtZVN0YXRlLmNlbGxzLm1hcCgoY2VsbCwgaSkgPT5cclxuXHQvLyBcdFx0XHRpID09PSBpbmRleCA/IGxhc3RHYW1lU3RhdGUuY3VycmVudE1vdmUgOiBjZWxsXHJcblx0Ly8gXHRcdCksXHJcblx0Ly8gXHR9KSlcclxuXHQvLyB9XHJcblx0Ly8gY29uc3QgaGFuZGxlUGxheWVyVGltZU92ZXIgPSBzeW1ib2wgPT4ge1xyXG5cdC8vIFx0c2V0R2FtZVN0YXRlKGxhc3RHYW1lU3RhdGUgPT4gKHtcclxuXHQvLyBcdFx0Li4ubGFzdEdhbWVTdGF0ZSxcclxuXHQvLyBcdFx0cGxheWVyc1RpbWVPdmVyOiBbLi4ubGFzdEdhbWVTdGF0ZS5wbGF5ZXJzVGltZU92ZXIsIHN5bWJvbF0sXHJcblx0Ly8gXHRcdGN1cnJlbnRNb3ZlOiBnZXROZXh0TW92ZShcclxuXHQvLyBcdFx0XHRsYXN0R2FtZVN0YXRlLmN1cnJlbnRNb3ZlLFxyXG5cdC8vIFx0XHRcdHBsYXllcnNDb3VudCxcclxuXHQvLyBcdFx0XHRsYXN0R2FtZVN0YXRlLnBsYXllcnNUaW1lT3ZlclxyXG5cdC8vIFx0XHQpLFxyXG5cdC8vIFx0fSkpXHJcblx0Ly8gfVxyXG5cdC8vIHJldHVybiB7XHJcblx0Ly8gXHRjZWxscyxcclxuXHQvLyBcdGN1cnJlbnRNb3ZlLFxyXG5cdC8vIFx0bmV4dE1vdmUsXHJcblx0Ly8gXHRoYW5kbGVDZWxsQ2xpY2ssXHJcblx0Ly8gXHRoYW5kbGVQbGF5ZXJUaW1lT3ZlcixcclxuXHQvLyBcdHdpbm5lclNlcXVlbmNlLFxyXG5cdC8vIFx0d2lubmVyU3ltYm9sLFxyXG5cdC8vIH1cclxufVxyXG4iXSwibmFtZXMiOlsidXNlUmVkdWNlciIsIkdBTUVfU1lNQk9MUyIsImNvbXB1dGVyV2lubmVyIiwiZ2V0TmV4dE1vdmUiLCJnYW1lU3RhdGVSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJpbml0R2FtZVN0YXRlIiwiY2VsbHMiLCJBcnJheSIsImZpbGwiLCJjdXJyZW50TW92ZSIsIkNST1NTIiwidXNlR2FtZVN0YXRlIiwicGxheWVyc0NvdW50IiwiZ2FtZVN0YXRlIiwiZGlzcGF0Y2giLCJ3aW5uZXJTZXF1ZW5jZSIsIm5leHRNb3ZlIiwicGxheWVyc1RpbWVPdmVyIiwid2lubmVyU3ltYm9sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game-new/model/use-game-state.js\n"));

/***/ })

});