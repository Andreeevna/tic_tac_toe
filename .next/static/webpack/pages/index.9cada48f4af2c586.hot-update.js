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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GAME_STATE_ACTIONS: function() { return /* binding */ GAME_STATE_ACTIONS; },\n/* harmony export */   gameStateReducer: function() { return /* binding */ gameStateReducer; },\n/* harmony export */   initGameState: function() { return /* binding */ initGameState; }\n/* harmony export */ });\n/* harmony import */ var _ui_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/constants */ \"./components/game-new/ui/constants.js\");\n/* harmony import */ var _get_next_move__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-next-move */ \"./components/game-new/model/get-next-move.js\");\n\n\nconst GAME_STATE_ACTIONS = {\n    CELL_CLICK: \"cell-click\"\n};\nconst initGameState = (param)=>{\n    let { playersCount } = param;\n    return {\n        cells: new Array(19 * 19).fill(null),\n        currentMove: _ui_constants__WEBPACK_IMPORTED_MODULE_0__.GAME_SYMBOLS.CROSS,\n        playersCount,\n        timers: _ui_constants__WEBPACK_IMPORTED_MODULE_0__.MOVE_ORDER.reduce((timers, symbol, index)=>{\n            if (index < playersCount) {\n                timers[symbol] = index;\n            }\n        })\n    };\n};\nconst gameStateReducer = (state, action)=>{\n    switch(action.type){\n        case GAME_STATE_ACTIONS.CELL_CLICK:\n            {\n                const { index } = action;\n                if (state.cells[index]) {\n                    return state;\n                }\n                return {\n                    ...state,\n                    currentMove: (0,_get_next_move__WEBPACK_IMPORTED_MODULE_1__.getNextMove)(state),\n                    cells: state.cells.map((cell, i)=>i === index ? state.currentMove : cell)\n                };\n            }\n        default:\n            {\n                return state;\n            }\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL2dhbWUtc3RhdGUtcmVkdWNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwRDtBQUNiO0FBRXRDLE1BQU1HLHFCQUFxQjtJQUNqQ0MsWUFBWTtBQUNiLEVBQUM7QUFFTSxNQUFNQyxnQkFBZ0I7UUFBQyxFQUFFQyxZQUFZLEVBQUU7V0FBTTtRQUNuREMsT0FBTyxJQUFJQyxNQUFNLEtBQUssSUFBSUMsSUFBSSxDQUFDO1FBQy9CQyxhQUFhVix1REFBWUEsQ0FBQ1csS0FBSztRQUMvQkw7UUFDQU0sUUFBUVgscURBQVVBLENBQUNZLE1BQU0sQ0FBQyxDQUFDRCxRQUFRRSxRQUFRQztZQUMxQyxJQUFJQSxRQUFRVCxjQUFjO2dCQUN6Qk0sTUFBTSxDQUFDRSxPQUFPLEdBQUdDO1lBQ2xCO1FBQ0Q7SUFDRDtBQUFBLEVBQUU7QUFFSyxNQUFNQyxtQkFBbUIsQ0FBQ0MsT0FBT0M7SUFDdkMsT0FBUUEsT0FBT0MsSUFBSTtRQUNsQixLQUFLaEIsbUJBQW1CQyxVQUFVO1lBQUU7Z0JBQ25DLE1BQU0sRUFBRVcsS0FBSyxFQUFFLEdBQUdHO2dCQUVsQixJQUFJRCxNQUFNVixLQUFLLENBQUNRLE1BQU0sRUFBRTtvQkFDdkIsT0FBT0U7Z0JBQ1I7Z0JBRUEsT0FBTztvQkFDTixHQUFHQSxLQUFLO29CQUNSUCxhQUFhUiwyREFBV0EsQ0FBQ2U7b0JBQ3pCVixPQUFPVSxNQUFNVixLQUFLLENBQUNhLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxJQUM3QkEsTUFBTVAsUUFBUUUsTUFBTVAsV0FBVyxHQUFHVztnQkFFcEM7WUFDRDtRQUNBO1lBQVM7Z0JBQ1IsT0FBT0o7WUFDUjtJQUNEO0FBQ0QsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL2dhbWUtc3RhdGUtcmVkdWNlci5qcz9hMzUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdBTUVfU1lNQk9MUywgTU9WRV9PUkRFUiB9IGZyb20gJy4uL3VpL2NvbnN0YW50cydcclxuaW1wb3J0IHsgZ2V0TmV4dE1vdmUgfSBmcm9tICcuL2dldC1uZXh0LW1vdmUnXHJcblxyXG5leHBvcnQgY29uc3QgR0FNRV9TVEFURV9BQ1RJT05TID0ge1xyXG5cdENFTExfQ0xJQ0s6ICdjZWxsLWNsaWNrJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRHYW1lU3RhdGUgPSAoeyBwbGF5ZXJzQ291bnQgfSkgPT4gKHtcclxuXHRjZWxsczogbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCksXHJcblx0Y3VycmVudE1vdmU6IEdBTUVfU1lNQk9MUy5DUk9TUyxcclxuXHRwbGF5ZXJzQ291bnQsXHJcblx0dGltZXJzOiBNT1ZFX09SREVSLnJlZHVjZSgodGltZXJzLCBzeW1ib2wsIGluZGV4KSA9PiB7XHJcblx0XHRpZiAoaW5kZXggPCBwbGF5ZXJzQ291bnQpIHtcclxuXHRcdFx0dGltZXJzW3N5bWJvbF0gPSBpbmRleFxyXG5cdFx0fVxyXG5cdH0pLFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGdhbWVTdGF0ZVJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgR0FNRV9TVEFURV9BQ1RJT05TLkNFTExfQ0xJQ0s6IHtcclxuXHRcdFx0Y29uc3QgeyBpbmRleCB9ID0gYWN0aW9uXHJcblxyXG5cdFx0XHRpZiAoc3RhdGUuY2VsbHNbaW5kZXhdKSB7XHJcblx0XHRcdFx0cmV0dXJuIHN0YXRlXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0Y3VycmVudE1vdmU6IGdldE5leHRNb3ZlKHN0YXRlKSxcclxuXHRcdFx0XHRjZWxsczogc3RhdGUuY2VsbHMubWFwKChjZWxsLCBpKSA9PlxyXG5cdFx0XHRcdFx0aSA9PT0gaW5kZXggPyBzdGF0ZS5jdXJyZW50TW92ZSA6IGNlbGxcclxuXHRcdFx0XHQpLFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsiR0FNRV9TWU1CT0xTIiwiTU9WRV9PUkRFUiIsImdldE5leHRNb3ZlIiwiR0FNRV9TVEFURV9BQ1RJT05TIiwiQ0VMTF9DTElDSyIsImluaXRHYW1lU3RhdGUiLCJwbGF5ZXJzQ291bnQiLCJjZWxscyIsIkFycmF5IiwiZmlsbCIsImN1cnJlbnRNb3ZlIiwiQ1JPU1MiLCJ0aW1lcnMiLCJyZWR1Y2UiLCJzeW1ib2wiLCJpbmRleCIsImdhbWVTdGF0ZVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJtYXAiLCJjZWxsIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game-new/model/game-state-reducer.js\n"));

/***/ })

});