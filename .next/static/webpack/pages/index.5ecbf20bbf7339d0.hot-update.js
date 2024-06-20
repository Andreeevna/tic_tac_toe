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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GAME_STATE_ACTIONS: function() { return /* binding */ GAME_STATE_ACTIONS; },\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/constants */ \"./components/game-new/ui/constants.js\");\n/* harmony import */ var _computer_winner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computer-winner */ \"./components/game-new/model/computer-winner.js\");\n/* harmony import */ var _get_next_move__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-next-move */ \"./components/game-new/model/get-next-move.js\");\nvar _s = $RefreshSig$();\n\n\n\n\nconst GAME_STATE_ACTIONS = {\n    CELL_CLICK: \"cell-click\"\n};\nconst gameStateReducer = (state, action)=>{\n    console.log(action);\n    return state;\n};\nconst initGameState = ()=>({\n        cells: new Array(19 * 19).fill(null),\n        playersTimeOver: [],\n        currentMove: _ui_constants__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.CROSS\n    });\nfunction useGameState(playersCount) {\n    _s();\n    const [gameState, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(gameStateReducer, {}, initGameState);\n    // const [{ cells, currentMove, playersTimeOver }, setGameState] = useState(\n    // \t() => ({\n    // \t\tcells: new Array(19 * 19).fill(null),\n    // \t\tcurrentMove: GAME_SYMBOLS.CROSS,\n    // \t\tplayersTimeOver: [],\n    // \t})\n    // )\n    // console.log(computerWinner(cells))\n    const winnerSequence = (0,_computer_winner__WEBPACK_IMPORTED_MODULE_2__.computerWinner)(gameState.cells);\n    const nextMove = (0,_get_next_move__WEBPACK_IMPORTED_MODULE_3__.getNextMove)(gameState.currentMove, playersCount);\n    const winnerSymbol = nextMove === gameState.currentMove ? gameState.currentMove : gameState.cells[winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence[0]];\n    return {\n        cells: gameState.currentMove,\n        currentMove: gameState.currentMove,\n        nextMove,\n        winnerSequence,\n        winnerSymbol,\n        dispatch\n    };\n// // обработка клика по клетке\n// const handleCellClick = index => {\n// \tsetGameState(lastGameState => ({\n// \t\t...lastGameState,\n// \t\tcurrentMove: getNextMove(\n// \t\t\tlastGameState.currentMove,\n// \t\t\tplayersCount,\n// \t\t\tlastGameState.playersTimeOver\n// \t\t),\n// \t\tcells: lastGameState.cells.map((cell, i) =>\n// \t\t\ti === index ? lastGameState.currentMove : cell\n// \t\t),\n// \t}))\n// }\n// const handlePlayerTimeOver = symbol => {\n// \tsetGameState(lastGameState => ({\n// \t\t...lastGameState,\n// \t\tplayersTimeOver: [...lastGameState.playersTimeOver, symbol],\n// \t\tcurrentMove: getNextMove(\n// \t\t\tlastGameState.currentMove,\n// \t\t\tplayersCount,\n// \t\t\tlastGameState.playersTimeOver\n// \t\t),\n// \t}))\n// }\n// return {\n// \tcells,\n// \tcurrentMove,\n// \tnextMove,\n// \thandleCellClick,\n// \thandlePlayerTimeOver,\n// \twinnerSequence,\n// \twinnerSymbol,\n// }\n}\n_s(useGameState, \"j2Lc7qLkPsIkuOKspfGyGEqTTbo=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL3VzZS1nYW1lLXN0YXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ1k7QUFDSTtBQUNMO0FBRXRDLE1BQU1JLHFCQUFxQjtJQUNqQ0MsWUFBWTtBQUNiLEVBQUM7QUFFRCxNQUFNQyxtQkFBbUIsQ0FBQ0MsT0FBT0M7SUFDaENDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixPQUFPRDtBQUNSO0FBRUEsTUFBTUksZ0JBQWdCLElBQU87UUFDNUJDLE9BQU8sSUFBSUMsTUFBTSxLQUFLLElBQUlDLElBQUksQ0FBQztRQUMvQkMsaUJBQWlCLEVBQUU7UUFDbkJDLGFBQWFmLHVEQUFZQSxDQUFDZ0IsS0FBSztJQUNoQztBQUVPLFNBQVNDLGFBQWFDLFlBQVk7O0lBQ3hDLE1BQU0sQ0FBQ0MsV0FBV0MsU0FBUyxHQUFHckIsaURBQVVBLENBQUNNLGtCQUFrQixDQUFDLEdBQUdLO0lBRS9ELDRFQUE0RTtJQUM1RSxZQUFZO0lBQ1osMENBQTBDO0lBQzFDLHFDQUFxQztJQUNyQyx5QkFBeUI7SUFDekIsTUFBTTtJQUNOLElBQUk7SUFDSixxQ0FBcUM7SUFDckMsTUFBTVcsaUJBQWlCcEIsZ0VBQWNBLENBQUNrQixVQUFVUixLQUFLO0lBQ3JELE1BQU1XLFdBQVdwQiwyREFBV0EsQ0FBQ2lCLFVBQVVKLFdBQVcsRUFBRUc7SUFDcEQsTUFBTUssZUFDTEQsYUFBYUgsVUFBVUosV0FBVyxHQUMvQkksVUFBVUosV0FBVyxHQUNyQkksVUFBVVIsS0FBSyxDQUFDVSwyQkFBQUEscUNBQUFBLGNBQWdCLENBQUMsRUFBRSxDQUFDO0lBRXhDLE9BQU87UUFDTlYsT0FBT1EsVUFBVUosV0FBVztRQUM1QkEsYUFBYUksVUFBVUosV0FBVztRQUNsQ087UUFDQUQ7UUFDQUU7UUFDQUg7SUFDRDtBQUVBLCtCQUErQjtBQUMvQixxQ0FBcUM7QUFDckMsb0NBQW9DO0FBQ3BDLHNCQUFzQjtBQUN0Qiw4QkFBOEI7QUFDOUIsZ0NBQWdDO0FBQ2hDLG1CQUFtQjtBQUNuQixtQ0FBbUM7QUFDbkMsT0FBTztBQUNQLGdEQUFnRDtBQUNoRCxvREFBb0Q7QUFDcEQsT0FBTztBQUNQLE9BQU87QUFDUCxJQUFJO0FBQ0osMkNBQTJDO0FBQzNDLG9DQUFvQztBQUNwQyxzQkFBc0I7QUFDdEIsaUVBQWlFO0FBQ2pFLDhCQUE4QjtBQUM5QixnQ0FBZ0M7QUFDaEMsbUJBQW1CO0FBQ25CLG1DQUFtQztBQUNuQyxPQUFPO0FBQ1AsT0FBTztBQUNQLElBQUk7QUFDSixXQUFXO0FBQ1gsVUFBVTtBQUNWLGdCQUFnQjtBQUNoQixhQUFhO0FBQ2Isb0JBQW9CO0FBQ3BCLHlCQUF5QjtBQUN6QixtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCLElBQUk7QUFDTDtHQTdEZ0JIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS1uZXcvbW9kZWwvdXNlLWdhbWUtc3RhdGUuanM/MmQxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEdBTUVfU1lNQk9MUyB9IGZyb20gJy4uL3VpL2NvbnN0YW50cydcclxuaW1wb3J0IHsgY29tcHV0ZXJXaW5uZXIgfSBmcm9tICcuL2NvbXB1dGVyLXdpbm5lcidcclxuaW1wb3J0IHsgZ2V0TmV4dE1vdmUgfSBmcm9tICcuL2dldC1uZXh0LW1vdmUnXHJcblxyXG5leHBvcnQgY29uc3QgR0FNRV9TVEFURV9BQ1RJT05TID0ge1xyXG5cdENFTExfQ0xJQ0s6ICdjZWxsLWNsaWNrJyxcclxufVxyXG5cclxuY29uc3QgZ2FtZVN0YXRlUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblx0Y29uc29sZS5sb2coYWN0aW9uKVxyXG5cdHJldHVybiBzdGF0ZVxyXG59XHJcblxyXG5jb25zdCBpbml0R2FtZVN0YXRlID0gKCkgPT4gKHtcclxuXHRjZWxsczogbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCksXHJcblx0cGxheWVyc1RpbWVPdmVyOiBbXSxcclxuXHRjdXJyZW50TW92ZTogR0FNRV9TWU1CT0xTLkNST1NTLFxyXG59KVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdhbWVTdGF0ZShwbGF5ZXJzQ291bnQpIHtcclxuXHRjb25zdCBbZ2FtZVN0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGdhbWVTdGF0ZVJlZHVjZXIsIHt9LCBpbml0R2FtZVN0YXRlKVxyXG5cclxuXHQvLyBjb25zdCBbeyBjZWxscywgY3VycmVudE1vdmUsIHBsYXllcnNUaW1lT3ZlciB9LCBzZXRHYW1lU3RhdGVdID0gdXNlU3RhdGUoXHJcblx0Ly8gXHQoKSA9PiAoe1xyXG5cdC8vIFx0XHRjZWxsczogbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCksXHJcblx0Ly8gXHRcdGN1cnJlbnRNb3ZlOiBHQU1FX1NZTUJPTFMuQ1JPU1MsXHJcblx0Ly8gXHRcdHBsYXllcnNUaW1lT3ZlcjogW10sXHJcblx0Ly8gXHR9KVxyXG5cdC8vIClcclxuXHQvLyBjb25zb2xlLmxvZyhjb21wdXRlcldpbm5lcihjZWxscykpXHJcblx0Y29uc3Qgd2lubmVyU2VxdWVuY2UgPSBjb21wdXRlcldpbm5lcihnYW1lU3RhdGUuY2VsbHMpXHJcblx0Y29uc3QgbmV4dE1vdmUgPSBnZXROZXh0TW92ZShnYW1lU3RhdGUuY3VycmVudE1vdmUsIHBsYXllcnNDb3VudClcclxuXHRjb25zdCB3aW5uZXJTeW1ib2wgPVxyXG5cdFx0bmV4dE1vdmUgPT09IGdhbWVTdGF0ZS5jdXJyZW50TW92ZVxyXG5cdFx0XHQ/IGdhbWVTdGF0ZS5jdXJyZW50TW92ZVxyXG5cdFx0XHQ6IGdhbWVTdGF0ZS5jZWxsc1t3aW5uZXJTZXF1ZW5jZT8uWzBdXVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0Y2VsbHM6IGdhbWVTdGF0ZS5jdXJyZW50TW92ZSxcclxuXHRcdGN1cnJlbnRNb3ZlOiBnYW1lU3RhdGUuY3VycmVudE1vdmUsXHJcblx0XHRuZXh0TW92ZSxcclxuXHRcdHdpbm5lclNlcXVlbmNlLFxyXG5cdFx0d2lubmVyU3ltYm9sLFxyXG5cdFx0ZGlzcGF0Y2gsXHJcblx0fVxyXG5cclxuXHQvLyAvLyDQvtCx0YDQsNCx0L7RgtC60LAg0LrQu9C40LrQsCDQv9C+INC60LvQtdGC0LrQtVxyXG5cdC8vIGNvbnN0IGhhbmRsZUNlbGxDbGljayA9IGluZGV4ID0+IHtcclxuXHQvLyBcdHNldEdhbWVTdGF0ZShsYXN0R2FtZVN0YXRlID0+ICh7XHJcblx0Ly8gXHRcdC4uLmxhc3RHYW1lU3RhdGUsXHJcblx0Ly8gXHRcdGN1cnJlbnRNb3ZlOiBnZXROZXh0TW92ZShcclxuXHQvLyBcdFx0XHRsYXN0R2FtZVN0YXRlLmN1cnJlbnRNb3ZlLFxyXG5cdC8vIFx0XHRcdHBsYXllcnNDb3VudCxcclxuXHQvLyBcdFx0XHRsYXN0R2FtZVN0YXRlLnBsYXllcnNUaW1lT3ZlclxyXG5cdC8vIFx0XHQpLFxyXG5cdC8vIFx0XHRjZWxsczogbGFzdEdhbWVTdGF0ZS5jZWxscy5tYXAoKGNlbGwsIGkpID0+XHJcblx0Ly8gXHRcdFx0aSA9PT0gaW5kZXggPyBsYXN0R2FtZVN0YXRlLmN1cnJlbnRNb3ZlIDogY2VsbFxyXG5cdC8vIFx0XHQpLFxyXG5cdC8vIFx0fSkpXHJcblx0Ly8gfVxyXG5cdC8vIGNvbnN0IGhhbmRsZVBsYXllclRpbWVPdmVyID0gc3ltYm9sID0+IHtcclxuXHQvLyBcdHNldEdhbWVTdGF0ZShsYXN0R2FtZVN0YXRlID0+ICh7XHJcblx0Ly8gXHRcdC4uLmxhc3RHYW1lU3RhdGUsXHJcblx0Ly8gXHRcdHBsYXllcnNUaW1lT3ZlcjogWy4uLmxhc3RHYW1lU3RhdGUucGxheWVyc1RpbWVPdmVyLCBzeW1ib2xdLFxyXG5cdC8vIFx0XHRjdXJyZW50TW92ZTogZ2V0TmV4dE1vdmUoXHJcblx0Ly8gXHRcdFx0bGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSxcclxuXHQvLyBcdFx0XHRwbGF5ZXJzQ291bnQsXHJcblx0Ly8gXHRcdFx0bGFzdEdhbWVTdGF0ZS5wbGF5ZXJzVGltZU92ZXJcclxuXHQvLyBcdFx0KSxcclxuXHQvLyBcdH0pKVxyXG5cdC8vIH1cclxuXHQvLyByZXR1cm4ge1xyXG5cdC8vIFx0Y2VsbHMsXHJcblx0Ly8gXHRjdXJyZW50TW92ZSxcclxuXHQvLyBcdG5leHRNb3ZlLFxyXG5cdC8vIFx0aGFuZGxlQ2VsbENsaWNrLFxyXG5cdC8vIFx0aGFuZGxlUGxheWVyVGltZU92ZXIsXHJcblx0Ly8gXHR3aW5uZXJTZXF1ZW5jZSxcclxuXHQvLyBcdHdpbm5lclN5bWJvbCxcclxuXHQvLyB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVJlZHVjZXIiLCJHQU1FX1NZTUJPTFMiLCJjb21wdXRlcldpbm5lciIsImdldE5leHRNb3ZlIiwiR0FNRV9TVEFURV9BQ1RJT05TIiwiQ0VMTF9DTElDSyIsImdhbWVTdGF0ZVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJpbml0R2FtZVN0YXRlIiwiY2VsbHMiLCJBcnJheSIsImZpbGwiLCJwbGF5ZXJzVGltZU92ZXIiLCJjdXJyZW50TW92ZSIsIkNST1NTIiwidXNlR2FtZVN0YXRlIiwicGxheWVyc0NvdW50IiwiZ2FtZVN0YXRlIiwiZGlzcGF0Y2giLCJ3aW5uZXJTZXF1ZW5jZSIsIm5leHRNb3ZlIiwid2lubmVyU3ltYm9sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game-new/model/use-game-state.js\n"));

/***/ })

});