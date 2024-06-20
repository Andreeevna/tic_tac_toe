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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GAME_STATE_ACTIONS: function() { return /* binding */ GAME_STATE_ACTIONS; },\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/constants */ \"./components/game-new/ui/constants.js\");\n/* harmony import */ var _computer_winner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computer-winner */ \"./components/game-new/model/computer-winner.js\");\n/* harmony import */ var _get_next_move__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-next-move */ \"./components/game-new/model/get-next-move.js\");\nvar _s = $RefreshSig$();\n\n\n\n\nconst GAME_STATE_ACTIONS = {\n    CELL_CLICK: \"cell-click\"\n};\nconst gameStateReducer = (state, action)=>{\n    console.log(action);\n    switch(action.type){\n        case GAME_STATE_ACTIONS.CELL_CLICK:\n            {\n                const { index } = action;\n                return {\n                    ...state,\n                    currentMove: (0,_get_next_move__WEBPACK_IMPORTED_MODULE_3__.getNextMove)(state.currentMove, playersCount, state.playersTimeOver),\n                    cells: state.cells.map((cell, i)=>i === index ? state.currentMove : cell)\n                };\n            }\n        default:\n            {\n                return state;\n            }\n    }\n};\nconst initGameState = ()=>({\n        cells: new Array(19 * 19).fill(null),\n        currentMove: _ui_constants__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.CROSS\n    });\nfunction useGameState(playersCount1) {\n    _s();\n    const [gameState, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(gameStateReducer, {\n        playersCount: playersCount1\n    }, initGameState);\n    // const [{ cells, currentMove, playersTimeOver }, setGameState] = useState(\n    // \t() => ({\n    // \t\tcells: new Array(19 * 19).fill(null),\n    // \t\tcurrentMove: GAME_SYMBOLS.CROSS,\n    // \t\tplayersTimeOver: [],\n    // \t})\n    // )\n    // console.log(computerWinner(cells))\n    const winnerSequence = (0,_computer_winner__WEBPACK_IMPORTED_MODULE_2__.computerWinner)(gameState.cells);\n    const nextMove = (0,_get_next_move__WEBPACK_IMPORTED_MODULE_3__.getNextMove)(gameState.currentMove, playersCount1);\n    const winnerSymbol = nextMove === gameState.currentMove ? gameState.currentMove : gameState.cells[winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence[0]];\n    return {\n        cells: gameState.cells,\n        currentMove: gameState.currentMove,\n        nextMove,\n        winnerSequence,\n        winnerSymbol,\n        dispatch\n    };\n// // обработка клика по клетке\n// const handleCellClick = index => {\n// \tsetGameState(lastGameState => (\n// {\n// \t\t...lastGameState,\n// \t\tcurrentMove: getNextMove(\n// \t\t\tlastGameState.currentMove,\n// \t\t\tplayersCount,\n// \t\t\tlastGameState.playersTimeOver\n// \t\t),\n// \t\tcells: lastGameState.cells.map((cell, i) =>\n// \t\t\ti === index ? lastGameState.currentMove : cell\n// \t\t),\n// \t}\n// ))\n// }\n// const handlePlayerTimeOver = symbol => {\n// \tsetGameState(lastGameState => ({\n// \t\t...lastGameState,\n// \t\tplayersTimeOver: [...lastGameState.playersTimeOver, symbol],\n// \t\tcurrentMove: getNextMove(\n// \t\t\tlastGameState.currentMove,\n// \t\t\tplayersCount,\n// \t\t\tlastGameState.playersTimeOver\n// \t\t),\n// \t}))\n// }\n// return {\n// \tcells,\n// \tcurrentMove,\n// \tnextMove,\n// \thandleCellClick,\n// \thandlePlayerTimeOver,\n// \twinnerSequence,\n// \twinnerSymbol,\n// }\n}\n_s(useGameState, \"J0Rf2eABqVD7yc0pvdEaJrorx1E=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL3VzZS1nYW1lLXN0YXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ1k7QUFDSTtBQUNMO0FBRXRDLE1BQU1JLHFCQUFxQjtJQUNqQ0MsWUFBWTtBQUNiLEVBQUM7QUFFRCxNQUFNQyxtQkFBbUIsQ0FBQ0MsT0FBT0M7SUFDaENDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixPQUFRQSxPQUFPRyxJQUFJO1FBQ2xCLEtBQUtQLG1CQUFtQkMsVUFBVTtZQUFFO2dCQUNuQyxNQUFNLEVBQUVPLEtBQUssRUFBRSxHQUFHSjtnQkFDbEIsT0FBTztvQkFDTixHQUFHRCxLQUFLO29CQUNSTSxhQUFhViwyREFBV0EsQ0FDdkJJLE1BQU1NLFdBQVcsRUFDakJDLGNBQ0FQLE1BQU1RLGVBQWU7b0JBRXRCQyxPQUFPVCxNQUFNUyxLQUFLLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxJQUM3QkEsTUFBTVAsUUFBUUwsTUFBTU0sV0FBVyxHQUFHSztnQkFFcEM7WUFDRDtRQUNBO1lBQVM7Z0JBQ1IsT0FBT1g7WUFDUjtJQUNEO0FBQ0Q7QUFFQSxNQUFNYSxnQkFBZ0IsSUFBTztRQUM1QkosT0FBTyxJQUFJSyxNQUFNLEtBQUssSUFBSUMsSUFBSSxDQUFDO1FBQy9CVCxhQUFhWix1REFBWUEsQ0FBQ3NCLEtBQUs7SUFDaEM7QUFFTyxTQUFTQyxhQUFhVixhQUFZOztJQUN4QyxNQUFNLENBQUNXLFdBQVdDLFNBQVMsR0FBRzFCLGlEQUFVQSxDQUN2Q00sa0JBQ0E7UUFBRVEsY0FBQUE7SUFBYSxHQUNmTTtJQUdELDRFQUE0RTtJQUM1RSxZQUFZO0lBQ1osMENBQTBDO0lBQzFDLHFDQUFxQztJQUNyQyx5QkFBeUI7SUFDekIsTUFBTTtJQUNOLElBQUk7SUFDSixxQ0FBcUM7SUFDckMsTUFBTU8saUJBQWlCekIsZ0VBQWNBLENBQUN1QixVQUFVVCxLQUFLO0lBQ3JELE1BQU1ZLFdBQVd6QiwyREFBV0EsQ0FBQ3NCLFVBQVVaLFdBQVcsRUFBRUM7SUFDcEQsTUFBTWUsZUFDTEQsYUFBYUgsVUFBVVosV0FBVyxHQUMvQlksVUFBVVosV0FBVyxHQUNyQlksVUFBVVQsS0FBSyxDQUFDVywyQkFBQUEscUNBQUFBLGNBQWdCLENBQUMsRUFBRSxDQUFDO0lBRXhDLE9BQU87UUFDTlgsT0FBT1MsVUFBVVQsS0FBSztRQUN0QkgsYUFBYVksVUFBVVosV0FBVztRQUNsQ2U7UUFDQUQ7UUFDQUU7UUFDQUg7SUFDRDtBQUVBLCtCQUErQjtBQUMvQixxQ0FBcUM7QUFDckMsbUNBQW1DO0FBQ25DLElBQUk7QUFDSixzQkFBc0I7QUFDdEIsOEJBQThCO0FBQzlCLGdDQUFnQztBQUNoQyxtQkFBbUI7QUFDbkIsbUNBQW1DO0FBQ25DLE9BQU87QUFDUCxnREFBZ0Q7QUFDaEQsb0RBQW9EO0FBQ3BELE9BQU87QUFDUCxLQUFLO0FBQ0wsS0FBSztBQUNMLElBQUk7QUFFSiwyQ0FBMkM7QUFDM0Msb0NBQW9DO0FBQ3BDLHNCQUFzQjtBQUN0QixpRUFBaUU7QUFDakUsOEJBQThCO0FBQzlCLGdDQUFnQztBQUNoQyxtQkFBbUI7QUFDbkIsbUNBQW1DO0FBQ25DLE9BQU87QUFDUCxPQUFPO0FBQ1AsSUFBSTtBQUNKLFdBQVc7QUFDWCxVQUFVO0FBQ1YsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYixvQkFBb0I7QUFDcEIseUJBQXlCO0FBQ3pCLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakIsSUFBSTtBQUNMO0dBcEVnQkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lLW5ldy9tb2RlbC91c2UtZ2FtZS1zdGF0ZS5qcz8yZDFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgR0FNRV9TWU1CT0xTIH0gZnJvbSAnLi4vdWkvY29uc3RhbnRzJ1xyXG5pbXBvcnQgeyBjb21wdXRlcldpbm5lciB9IGZyb20gJy4vY29tcHV0ZXItd2lubmVyJ1xyXG5pbXBvcnQgeyBnZXROZXh0TW92ZSB9IGZyb20gJy4vZ2V0LW5leHQtbW92ZSdcclxuXHJcbmV4cG9ydCBjb25zdCBHQU1FX1NUQVRFX0FDVElPTlMgPSB7XHJcblx0Q0VMTF9DTElDSzogJ2NlbGwtY2xpY2snLFxyXG59XHJcblxyXG5jb25zdCBnYW1lU3RhdGVSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHRjb25zb2xlLmxvZyhhY3Rpb24pXHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBHQU1FX1NUQVRFX0FDVElPTlMuQ0VMTF9DTElDSzoge1xyXG5cdFx0XHRjb25zdCB7IGluZGV4IH0gPSBhY3Rpb25cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRjdXJyZW50TW92ZTogZ2V0TmV4dE1vdmUoXHJcblx0XHRcdFx0XHRzdGF0ZS5jdXJyZW50TW92ZSxcclxuXHRcdFx0XHRcdHBsYXllcnNDb3VudCxcclxuXHRcdFx0XHRcdHN0YXRlLnBsYXllcnNUaW1lT3ZlclxyXG5cdFx0XHRcdCksXHJcblx0XHRcdFx0Y2VsbHM6IHN0YXRlLmNlbGxzLm1hcCgoY2VsbCwgaSkgPT5cclxuXHRcdFx0XHRcdGkgPT09IGluZGV4ID8gc3RhdGUuY3VycmVudE1vdmUgOiBjZWxsXHJcblx0XHRcdFx0KSxcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGVcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IGluaXRHYW1lU3RhdGUgPSAoKSA9PiAoe1xyXG5cdGNlbGxzOiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSxcclxuXHRjdXJyZW50TW92ZTogR0FNRV9TWU1CT0xTLkNST1NTLFxyXG59KVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdhbWVTdGF0ZShwbGF5ZXJzQ291bnQpIHtcclxuXHRjb25zdCBbZ2FtZVN0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKFxyXG5cdFx0Z2FtZVN0YXRlUmVkdWNlcixcclxuXHRcdHsgcGxheWVyc0NvdW50IH0sXHJcblx0XHRpbml0R2FtZVN0YXRlXHJcblx0KVxyXG5cclxuXHQvLyBjb25zdCBbeyBjZWxscywgY3VycmVudE1vdmUsIHBsYXllcnNUaW1lT3ZlciB9LCBzZXRHYW1lU3RhdGVdID0gdXNlU3RhdGUoXHJcblx0Ly8gXHQoKSA9PiAoe1xyXG5cdC8vIFx0XHRjZWxsczogbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCksXHJcblx0Ly8gXHRcdGN1cnJlbnRNb3ZlOiBHQU1FX1NZTUJPTFMuQ1JPU1MsXHJcblx0Ly8gXHRcdHBsYXllcnNUaW1lT3ZlcjogW10sXHJcblx0Ly8gXHR9KVxyXG5cdC8vIClcclxuXHQvLyBjb25zb2xlLmxvZyhjb21wdXRlcldpbm5lcihjZWxscykpXHJcblx0Y29uc3Qgd2lubmVyU2VxdWVuY2UgPSBjb21wdXRlcldpbm5lcihnYW1lU3RhdGUuY2VsbHMpXHJcblx0Y29uc3QgbmV4dE1vdmUgPSBnZXROZXh0TW92ZShnYW1lU3RhdGUuY3VycmVudE1vdmUsIHBsYXllcnNDb3VudClcclxuXHRjb25zdCB3aW5uZXJTeW1ib2wgPVxyXG5cdFx0bmV4dE1vdmUgPT09IGdhbWVTdGF0ZS5jdXJyZW50TW92ZVxyXG5cdFx0XHQ/IGdhbWVTdGF0ZS5jdXJyZW50TW92ZVxyXG5cdFx0XHQ6IGdhbWVTdGF0ZS5jZWxsc1t3aW5uZXJTZXF1ZW5jZT8uWzBdXVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0Y2VsbHM6IGdhbWVTdGF0ZS5jZWxscyxcclxuXHRcdGN1cnJlbnRNb3ZlOiBnYW1lU3RhdGUuY3VycmVudE1vdmUsXHJcblx0XHRuZXh0TW92ZSxcclxuXHRcdHdpbm5lclNlcXVlbmNlLFxyXG5cdFx0d2lubmVyU3ltYm9sLFxyXG5cdFx0ZGlzcGF0Y2gsXHJcblx0fVxyXG5cclxuXHQvLyAvLyDQvtCx0YDQsNCx0L7RgtC60LAg0LrQu9C40LrQsCDQv9C+INC60LvQtdGC0LrQtVxyXG5cdC8vIGNvbnN0IGhhbmRsZUNlbGxDbGljayA9IGluZGV4ID0+IHtcclxuXHQvLyBcdHNldEdhbWVTdGF0ZShsYXN0R2FtZVN0YXRlID0+IChcclxuXHQvLyB7XHJcblx0Ly8gXHRcdC4uLmxhc3RHYW1lU3RhdGUsXHJcblx0Ly8gXHRcdGN1cnJlbnRNb3ZlOiBnZXROZXh0TW92ZShcclxuXHQvLyBcdFx0XHRsYXN0R2FtZVN0YXRlLmN1cnJlbnRNb3ZlLFxyXG5cdC8vIFx0XHRcdHBsYXllcnNDb3VudCxcclxuXHQvLyBcdFx0XHRsYXN0R2FtZVN0YXRlLnBsYXllcnNUaW1lT3ZlclxyXG5cdC8vIFx0XHQpLFxyXG5cdC8vIFx0XHRjZWxsczogbGFzdEdhbWVTdGF0ZS5jZWxscy5tYXAoKGNlbGwsIGkpID0+XHJcblx0Ly8gXHRcdFx0aSA9PT0gaW5kZXggPyBsYXN0R2FtZVN0YXRlLmN1cnJlbnRNb3ZlIDogY2VsbFxyXG5cdC8vIFx0XHQpLFxyXG5cdC8vIFx0fVxyXG5cdC8vICkpXHJcblx0Ly8gfVxyXG5cclxuXHQvLyBjb25zdCBoYW5kbGVQbGF5ZXJUaW1lT3ZlciA9IHN5bWJvbCA9PiB7XHJcblx0Ly8gXHRzZXRHYW1lU3RhdGUobGFzdEdhbWVTdGF0ZSA9PiAoe1xyXG5cdC8vIFx0XHQuLi5sYXN0R2FtZVN0YXRlLFxyXG5cdC8vIFx0XHRwbGF5ZXJzVGltZU92ZXI6IFsuLi5sYXN0R2FtZVN0YXRlLnBsYXllcnNUaW1lT3Zlciwgc3ltYm9sXSxcclxuXHQvLyBcdFx0Y3VycmVudE1vdmU6IGdldE5leHRNb3ZlKFxyXG5cdC8vIFx0XHRcdGxhc3RHYW1lU3RhdGUuY3VycmVudE1vdmUsXHJcblx0Ly8gXHRcdFx0cGxheWVyc0NvdW50LFxyXG5cdC8vIFx0XHRcdGxhc3RHYW1lU3RhdGUucGxheWVyc1RpbWVPdmVyXHJcblx0Ly8gXHRcdCksXHJcblx0Ly8gXHR9KSlcclxuXHQvLyB9XHJcblx0Ly8gcmV0dXJuIHtcclxuXHQvLyBcdGNlbGxzLFxyXG5cdC8vIFx0Y3VycmVudE1vdmUsXHJcblx0Ly8gXHRuZXh0TW92ZSxcclxuXHQvLyBcdGhhbmRsZUNlbGxDbGljayxcclxuXHQvLyBcdGhhbmRsZVBsYXllclRpbWVPdmVyLFxyXG5cdC8vIFx0d2lubmVyU2VxdWVuY2UsXHJcblx0Ly8gXHR3aW5uZXJTeW1ib2wsXHJcblx0Ly8gfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSZWR1Y2VyIiwiR0FNRV9TWU1CT0xTIiwiY29tcHV0ZXJXaW5uZXIiLCJnZXROZXh0TW92ZSIsIkdBTUVfU1RBVEVfQUNUSU9OUyIsIkNFTExfQ0xJQ0siLCJnYW1lU3RhdGVSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwidHlwZSIsImluZGV4IiwiY3VycmVudE1vdmUiLCJwbGF5ZXJzQ291bnQiLCJwbGF5ZXJzVGltZU92ZXIiLCJjZWxscyIsIm1hcCIsImNlbGwiLCJpIiwiaW5pdEdhbWVTdGF0ZSIsIkFycmF5IiwiZmlsbCIsIkNST1NTIiwidXNlR2FtZVN0YXRlIiwiZ2FtZVN0YXRlIiwiZGlzcGF0Y2giLCJ3aW5uZXJTZXF1ZW5jZSIsIm5leHRNb3ZlIiwid2lubmVyU3ltYm9sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game-new/model/use-game-state.js\n"));

/***/ })

});