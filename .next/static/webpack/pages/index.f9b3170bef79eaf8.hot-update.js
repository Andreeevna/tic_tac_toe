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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _computer_winner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./computer-winner */ \"./components/game-new/model/computer-winner.js\");\n/* harmony import */ var _game_state_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-state-reducer */ \"./components/game-new/model/game-state-reducer.js\");\n/* harmony import */ var _get_next_move__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-next-move */ \"./components/game-new/model/get-next-move.js\");\nvar _s = $RefreshSig$();\n\n\n\n\nfunction useGameState(playersCount) {\n    _s();\n    const [gameState, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_game_state_reducer__WEBPACK_IMPORTED_MODULE_2__.gameStateReducer, {\n        playersCount\n    }, _game_state_reducer__WEBPACK_IMPORTED_MODULE_2__.initGameState);\n    const winnerSequence = (0,_computer_winner__WEBPACK_IMPORTED_MODULE_1__.computerWinner)(gameState.cells);\n    const nextMove = (0,_get_next_move__WEBPACK_IMPORTED_MODULE_3__.getNextMove)(gameState.currentMove, playersCount, []);\n    const winnerSymbol = nextMove === gameState.currentMove ? gameState.currentMove : gameState.cells[winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence[0]];\n    return {\n        cells: gameState.cells,\n        currentMove: gameState.currentMove,\n        nextMove,\n        winnerSequence,\n        winnerSymbol,\n        dispatch\n    };\n// const handlePlayerTimeOver = symbol => {\n// \tsetGameState(lastGameState => ({\n// \t\t...lastGameState,\n// \t\tplayersTimeOver: [...lastGameState.playersTimeOver, symbol],\n// \t\tcurrentMove: getNextMove(\n// \t\t\tlastGameState.currentMove,\n// \t\t\tplayersCount,\n// \t\t\tlastGameState.playersTimeOver\n// \t\t),\n// \t}))\n// }\n}\n_s(useGameState, \"J0Rf2eABqVD7yc0pvdEaJrorx1E=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL3VzZS1nYW1lLXN0YXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0M7QUFDZ0I7QUFDb0I7QUFDekI7QUFFdEMsU0FBU0ssYUFBYUMsWUFBWTs7SUFDeEMsTUFBTSxDQUFDQyxXQUFXQyxTQUFTLEdBQUdSLGlEQUFVQSxDQUN2Q0UsaUVBQWdCQSxFQUNoQjtRQUFFSTtJQUFhLEdBQ2ZILDhEQUFhQTtJQUVkLE1BQU1NLGlCQUFpQlIsZ0VBQWNBLENBQUNNLFVBQVVHLEtBQUs7SUFDckQsTUFBTUMsV0FBV1AsMkRBQVdBLENBQUNHLFVBQVVLLFdBQVcsRUFBRU4sY0FBYyxFQUFFO0lBQ3BFLE1BQU1PLGVBQ0xGLGFBQWFKLFVBQVVLLFdBQVcsR0FDL0JMLFVBQVVLLFdBQVcsR0FDckJMLFVBQVVHLEtBQUssQ0FBQ0QsMkJBQUFBLHFDQUFBQSxjQUFnQixDQUFDLEVBQUUsQ0FBQztJQUV4QyxPQUFPO1FBQ05DLE9BQU9ILFVBQVVHLEtBQUs7UUFDdEJFLGFBQWFMLFVBQVVLLFdBQVc7UUFDbENEO1FBQ0FGO1FBQ0FJO1FBQ0FMO0lBQ0Q7QUFFQSwyQ0FBMkM7QUFDM0Msb0NBQW9DO0FBQ3BDLHNCQUFzQjtBQUN0QixpRUFBaUU7QUFDakUsOEJBQThCO0FBQzlCLGdDQUFnQztBQUNoQyxtQkFBbUI7QUFDbkIsbUNBQW1DO0FBQ25DLE9BQU87QUFDUCxPQUFPO0FBQ1AsSUFBSTtBQUNMO0dBakNnQkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lLW5ldy9tb2RlbC91c2UtZ2FtZS1zdGF0ZS5qcz8yZDFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29tcHV0ZXJXaW5uZXIgfSBmcm9tICcuL2NvbXB1dGVyLXdpbm5lcidcclxuaW1wb3J0IHsgZ2FtZVN0YXRlUmVkdWNlciwgaW5pdEdhbWVTdGF0ZSB9IGZyb20gJy4vZ2FtZS1zdGF0ZS1yZWR1Y2VyJ1xyXG5pbXBvcnQgeyBnZXROZXh0TW92ZSB9IGZyb20gJy4vZ2V0LW5leHQtbW92ZSdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VHYW1lU3RhdGUocGxheWVyc0NvdW50KSB7XHJcblx0Y29uc3QgW2dhbWVTdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihcclxuXHRcdGdhbWVTdGF0ZVJlZHVjZXIsXHJcblx0XHR7IHBsYXllcnNDb3VudCB9LFxyXG5cdFx0aW5pdEdhbWVTdGF0ZVxyXG5cdClcclxuXHRjb25zdCB3aW5uZXJTZXF1ZW5jZSA9IGNvbXB1dGVyV2lubmVyKGdhbWVTdGF0ZS5jZWxscylcclxuXHRjb25zdCBuZXh0TW92ZSA9IGdldE5leHRNb3ZlKGdhbWVTdGF0ZS5jdXJyZW50TW92ZSwgcGxheWVyc0NvdW50LCBbXSlcclxuXHRjb25zdCB3aW5uZXJTeW1ib2wgPVxyXG5cdFx0bmV4dE1vdmUgPT09IGdhbWVTdGF0ZS5jdXJyZW50TW92ZVxyXG5cdFx0XHQ/IGdhbWVTdGF0ZS5jdXJyZW50TW92ZVxyXG5cdFx0XHQ6IGdhbWVTdGF0ZS5jZWxsc1t3aW5uZXJTZXF1ZW5jZT8uWzBdXVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0Y2VsbHM6IGdhbWVTdGF0ZS5jZWxscyxcclxuXHRcdGN1cnJlbnRNb3ZlOiBnYW1lU3RhdGUuY3VycmVudE1vdmUsXHJcblx0XHRuZXh0TW92ZSxcclxuXHRcdHdpbm5lclNlcXVlbmNlLFxyXG5cdFx0d2lubmVyU3ltYm9sLFxyXG5cdFx0ZGlzcGF0Y2gsXHJcblx0fVxyXG5cclxuXHQvLyBjb25zdCBoYW5kbGVQbGF5ZXJUaW1lT3ZlciA9IHN5bWJvbCA9PiB7XHJcblx0Ly8gXHRzZXRHYW1lU3RhdGUobGFzdEdhbWVTdGF0ZSA9PiAoe1xyXG5cdC8vIFx0XHQuLi5sYXN0R2FtZVN0YXRlLFxyXG5cdC8vIFx0XHRwbGF5ZXJzVGltZU92ZXI6IFsuLi5sYXN0R2FtZVN0YXRlLnBsYXllcnNUaW1lT3Zlciwgc3ltYm9sXSxcclxuXHQvLyBcdFx0Y3VycmVudE1vdmU6IGdldE5leHRNb3ZlKFxyXG5cdC8vIFx0XHRcdGxhc3RHYW1lU3RhdGUuY3VycmVudE1vdmUsXHJcblx0Ly8gXHRcdFx0cGxheWVyc0NvdW50LFxyXG5cdC8vIFx0XHRcdGxhc3RHYW1lU3RhdGUucGxheWVyc1RpbWVPdmVyXHJcblx0Ly8gXHRcdCksXHJcblx0Ly8gXHR9KSlcclxuXHQvLyB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVJlZHVjZXIiLCJjb21wdXRlcldpbm5lciIsImdhbWVTdGF0ZVJlZHVjZXIiLCJpbml0R2FtZVN0YXRlIiwiZ2V0TmV4dE1vdmUiLCJ1c2VHYW1lU3RhdGUiLCJwbGF5ZXJzQ291bnQiLCJnYW1lU3RhdGUiLCJkaXNwYXRjaCIsIndpbm5lclNlcXVlbmNlIiwiY2VsbHMiLCJuZXh0TW92ZSIsImN1cnJlbnRNb3ZlIiwid2lubmVyU3ltYm9sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game-new/model/use-game-state.js\n"));

/***/ })

});