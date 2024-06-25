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

/***/ "./components/game-new/model/game-state-reducer.js":
/*!*********************************************************!*\
  !*** ./components/game-new/model/game-state-reducer.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GAME_STATE_ACTIONS: function() { return /* binding */ GAME_STATE_ACTIONS; },\n/* harmony export */   gameStateReducer: function() { return /* binding */ gameStateReducer; },\n/* harmony export */   initGameState: function() { return /* binding */ initGameState; }\n/* harmony export */ });\n/* harmony import */ var _ui_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/constants */ \"./components/game-new/ui/constants.js\");\n/* harmony import */ var _get_next_move__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-next-move */ \"./components/game-new/model/get-next-move.js\");\n\n\nconst GAME_STATE_ACTIONS = {\n    CELL_CLICK: \"cell-click\"\n};\nconst initGameState = (param)=>{\n    let { playersCount } = param;\n    return {\n        cells: new Array(19 * 19).fill(null),\n        currentMove: _ui_constants__WEBPACK_IMPORTED_MODULE_0__.GAME_SYMBOLS.CROSS,\n        playersCount,\n        timers\n    };\n};\nconst gameStateReducer = (state, action)=>{\n    switch(action.type){\n        case GAME_STATE_ACTIONS.CELL_CLICK:\n            {\n                const { index } = action;\n                if (state.cells[index]) {\n                    return state;\n                }\n                return {\n                    ...state,\n                    currentMove: (0,_get_next_move__WEBPACK_IMPORTED_MODULE_1__.getNextMove)(state),\n                    cells: state.cells.map((cell, i)=>i === index ? state.currentMove : cell)\n                };\n            }\n        default:\n            {\n                return state;\n            }\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL2dhbWUtc3RhdGUtcmVkdWNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE4QztBQUNEO0FBRXRDLE1BQU1FLHFCQUFxQjtJQUNqQ0MsWUFBWTtBQUNiLEVBQUM7QUFFTSxNQUFNQyxnQkFBZ0I7UUFBQyxFQUFFQyxZQUFZLEVBQUU7V0FBTTtRQUNuREMsT0FBTyxJQUFJQyxNQUFNLEtBQUssSUFBSUMsSUFBSSxDQUFDO1FBQy9CQyxhQUFhVCx1REFBWUEsQ0FBQ1UsS0FBSztRQUMvQkw7UUFDQU07SUFDRDtBQUFBLEVBQUU7QUFFSyxNQUFNQyxtQkFBbUIsQ0FBQ0MsT0FBT0M7SUFDdkMsT0FBUUEsT0FBT0MsSUFBSTtRQUNsQixLQUFLYixtQkFBbUJDLFVBQVU7WUFBRTtnQkFDbkMsTUFBTSxFQUFFYSxLQUFLLEVBQUUsR0FBR0Y7Z0JBRWxCLElBQUlELE1BQU1QLEtBQUssQ0FBQ1UsTUFBTSxFQUFFO29CQUN2QixPQUFPSDtnQkFDUjtnQkFFQSxPQUFPO29CQUNOLEdBQUdBLEtBQUs7b0JBQ1JKLGFBQWFSLDJEQUFXQSxDQUFDWTtvQkFDekJQLE9BQU9PLE1BQU1QLEtBQUssQ0FBQ1csR0FBRyxDQUFDLENBQUNDLE1BQU1DLElBQzdCQSxNQUFNSCxRQUFRSCxNQUFNSixXQUFXLEdBQUdTO2dCQUVwQztZQUNEO1FBQ0E7WUFBUztnQkFDUixPQUFPTDtZQUNSO0lBQ0Q7QUFDRCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS1uZXcvbW9kZWwvZ2FtZS1zdGF0ZS1yZWR1Y2VyLmpzP2EzNTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR0FNRV9TWU1CT0xTIH0gZnJvbSAnLi4vdWkvY29uc3RhbnRzJ1xyXG5pbXBvcnQgeyBnZXROZXh0TW92ZSB9IGZyb20gJy4vZ2V0LW5leHQtbW92ZSdcclxuXHJcbmV4cG9ydCBjb25zdCBHQU1FX1NUQVRFX0FDVElPTlMgPSB7XHJcblx0Q0VMTF9DTElDSzogJ2NlbGwtY2xpY2snLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdEdhbWVTdGF0ZSA9ICh7IHBsYXllcnNDb3VudCB9KSA9PiAoe1xyXG5cdGNlbGxzOiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSxcclxuXHRjdXJyZW50TW92ZTogR0FNRV9TWU1CT0xTLkNST1NTLFxyXG5cdHBsYXllcnNDb3VudCxcclxuXHR0aW1lcnMsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgZ2FtZVN0YXRlUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBHQU1FX1NUQVRFX0FDVElPTlMuQ0VMTF9DTElDSzoge1xyXG5cdFx0XHRjb25zdCB7IGluZGV4IH0gPSBhY3Rpb25cclxuXHJcblx0XHRcdGlmIChzdGF0ZS5jZWxsc1tpbmRleF0pIHtcclxuXHRcdFx0XHRyZXR1cm4gc3RhdGVcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRjdXJyZW50TW92ZTogZ2V0TmV4dE1vdmUoc3RhdGUpLFxyXG5cdFx0XHRcdGNlbGxzOiBzdGF0ZS5jZWxscy5tYXAoKGNlbGwsIGkpID0+XHJcblx0XHRcdFx0XHRpID09PSBpbmRleCA/IHN0YXRlLmN1cnJlbnRNb3ZlIDogY2VsbFxyXG5cdFx0XHRcdCksXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlXHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdLCJuYW1lcyI6WyJHQU1FX1NZTUJPTFMiLCJnZXROZXh0TW92ZSIsIkdBTUVfU1RBVEVfQUNUSU9OUyIsIkNFTExfQ0xJQ0siLCJpbml0R2FtZVN0YXRlIiwicGxheWVyc0NvdW50IiwiY2VsbHMiLCJBcnJheSIsImZpbGwiLCJjdXJyZW50TW92ZSIsIkNST1NTIiwidGltZXJzIiwiZ2FtZVN0YXRlUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImluZGV4IiwibWFwIiwiY2VsbCIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game-new/model/game-state-reducer.js\n"));

/***/ })

});