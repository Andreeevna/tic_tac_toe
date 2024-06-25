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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GAME_STATE_ACTIONS: function() { return /* binding */ GAME_STATE_ACTIONS; },\n/* harmony export */   gameStateReducer: function() { return /* binding */ gameStateReducer; },\n/* harmony export */   initGameState: function() { return /* binding */ initGameState; }\n/* harmony export */ });\n/* harmony import */ var _ui_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/constants */ \"./components/game-new/ui/constants.js\");\n/* harmony import */ var _get_next_move__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-next-move */ \"./components/game-new/model/get-next-move.js\");\n\n\nconst GAME_STATE_ACTIONS = {\n    CELL_CLICK: \"cell-click\"\n};\nconst initGameState = (param)=>{\n    let { playersCount, defaultTimer, currentMoveStart } = param;\n    return {\n        cells: new Array(19 * 19).fill(null),\n        currentMove: _ui_constants__WEBPACK_IMPORTED_MODULE_0__.GAME_SYMBOLS.CROSS,\n        currentMoveStart,\n        playersCount,\n        timers: _ui_constants__WEBPACK_IMPORTED_MODULE_0__.MOVE_ORDER.reduce((timers, symbol, index)=>{\n            if (index < playersCount) {\n                timers[symbol] = defaultTimer;\n            }\n            return timers;\n        }, {})\n    };\n};\nconst gameStateReducer = (state, action)=>{\n    switch(action.type){\n        case GAME_STATE_ACTIONS.CELL_CLICK:\n            {\n                const { index, now } = action;\n                if (state.cells[index]) {\n                    return state;\n                }\n                return {\n                    ...state,\n                    timers: updateTimers(state, now),\n                    currentMove: (0,_get_next_move__WEBPACK_IMPORTED_MODULE_1__.getNextMove)(state),\n                    currentMoveStart: now,\n                    cells: updateCell(state, index)\n                };\n            }\n        default:\n            {\n                return state;\n            }\n    }\n};\nfunction updateCell(gameState, index) {\n    return gameState.cells.map((cell, i)=>i === index ? gameState.currentMove : cell);\n}\nfunction updateTimers(gameState, now) {\n    const diff = now - gameState.currentMoveStart;\n    const timer = gameState.timers(gameState.currentMove);\n    return {\n        ...gameState.timers\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL2dhbWUtc3RhdGUtcmVkdWNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwRDtBQUNiO0FBRXRDLE1BQU1HLHFCQUFxQjtJQUNqQ0MsWUFBWTtBQUNiLEVBQUM7QUFFTSxNQUFNQyxnQkFBZ0I7UUFBQyxFQUM3QkMsWUFBWSxFQUNaQyxZQUFZLEVBQ1pDLGdCQUFnQixFQUNoQjtXQUFNO1FBQ05DLE9BQU8sSUFBSUMsTUFBTSxLQUFLLElBQUlDLElBQUksQ0FBQztRQUMvQkMsYUFBYVosdURBQVlBLENBQUNhLEtBQUs7UUFDL0JMO1FBQ0FGO1FBQ0FRLFFBQVFiLHFEQUFVQSxDQUFDYyxNQUFNLENBQUMsQ0FBQ0QsUUFBUUUsUUFBUUM7WUFDMUMsSUFBSUEsUUFBUVgsY0FBYztnQkFDekJRLE1BQU0sQ0FBQ0UsT0FBTyxHQUFHVDtZQUNsQjtZQUNBLE9BQU9PO1FBQ1IsR0FBRyxDQUFDO0lBQ0w7QUFBQSxFQUFFO0FBRUssTUFBTUksbUJBQW1CLENBQUNDLE9BQU9DO0lBQ3ZDLE9BQVFBLE9BQU9DLElBQUk7UUFDbEIsS0FBS2xCLG1CQUFtQkMsVUFBVTtZQUFFO2dCQUNuQyxNQUFNLEVBQUVhLEtBQUssRUFBRUssR0FBRyxFQUFFLEdBQUdGO2dCQUV2QixJQUFJRCxNQUFNVixLQUFLLENBQUNRLE1BQU0sRUFBRTtvQkFDdkIsT0FBT0U7Z0JBQ1I7Z0JBRUEsT0FBTztvQkFDTixHQUFHQSxLQUFLO29CQUNSTCxRQUFRUyxhQUFhSixPQUFPRztvQkFDNUJWLGFBQWFWLDJEQUFXQSxDQUFDaUI7b0JBQ3pCWCxrQkFBa0JjO29CQUNsQmIsT0FBT2UsV0FBV0wsT0FBT0Y7Z0JBQzFCO1lBQ0Q7UUFDQTtZQUFTO2dCQUNSLE9BQU9FO1lBQ1I7SUFDRDtBQUNELEVBQUM7QUFDRCxTQUFTSyxXQUFXQyxTQUFTLEVBQUVSLEtBQUs7SUFDbkMsT0FBT1EsVUFBVWhCLEtBQUssQ0FBQ2lCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxJQUNqQ0EsTUFBTVgsUUFBUVEsVUFBVWIsV0FBVyxHQUFHZTtBQUV4QztBQUVBLFNBQVNKLGFBQWFFLFNBQVMsRUFBRUgsR0FBRztJQUNuQyxNQUFNTyxPQUFPUCxNQUFNRyxVQUFVakIsZ0JBQWdCO0lBQzdDLE1BQU1zQixRQUFRTCxVQUFVWCxNQUFNLENBQUNXLFVBQVViLFdBQVc7SUFFcEQsT0FBTztRQUNOLEdBQUdhLFVBQVVYLE1BQU07SUFDcEI7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL2dhbWUtc3RhdGUtcmVkdWNlci5qcz9hMzUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdBTUVfU1lNQk9MUywgTU9WRV9PUkRFUiB9IGZyb20gJy4uL3VpL2NvbnN0YW50cydcclxuaW1wb3J0IHsgZ2V0TmV4dE1vdmUgfSBmcm9tICcuL2dldC1uZXh0LW1vdmUnXHJcblxyXG5leHBvcnQgY29uc3QgR0FNRV9TVEFURV9BQ1RJT05TID0ge1xyXG5cdENFTExfQ0xJQ0s6ICdjZWxsLWNsaWNrJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRHYW1lU3RhdGUgPSAoe1xyXG5cdHBsYXllcnNDb3VudCxcclxuXHRkZWZhdWx0VGltZXIsXHJcblx0Y3VycmVudE1vdmVTdGFydCxcclxufSkgPT4gKHtcclxuXHRjZWxsczogbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCksXHJcblx0Y3VycmVudE1vdmU6IEdBTUVfU1lNQk9MUy5DUk9TUyxcclxuXHRjdXJyZW50TW92ZVN0YXJ0LFxyXG5cdHBsYXllcnNDb3VudCxcclxuXHR0aW1lcnM6IE1PVkVfT1JERVIucmVkdWNlKCh0aW1lcnMsIHN5bWJvbCwgaW5kZXgpID0+IHtcclxuXHRcdGlmIChpbmRleCA8IHBsYXllcnNDb3VudCkge1xyXG5cdFx0XHR0aW1lcnNbc3ltYm9sXSA9IGRlZmF1bHRUaW1lclxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRpbWVyc1xyXG5cdH0sIHt9KSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBnYW1lU3RhdGVSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEdBTUVfU1RBVEVfQUNUSU9OUy5DRUxMX0NMSUNLOiB7XHJcblx0XHRcdGNvbnN0IHsgaW5kZXgsIG5vdyB9ID0gYWN0aW9uXHJcblxyXG5cdFx0XHRpZiAoc3RhdGUuY2VsbHNbaW5kZXhdKSB7XHJcblx0XHRcdFx0cmV0dXJuIHN0YXRlXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0dGltZXJzOiB1cGRhdGVUaW1lcnMoc3RhdGUsIG5vdyksXHJcblx0XHRcdFx0Y3VycmVudE1vdmU6IGdldE5leHRNb3ZlKHN0YXRlKSxcclxuXHRcdFx0XHRjdXJyZW50TW92ZVN0YXJ0OiBub3csXHJcblx0XHRcdFx0Y2VsbHM6IHVwZGF0ZUNlbGwoc3RhdGUsIGluZGV4KSxcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGVcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuZnVuY3Rpb24gdXBkYXRlQ2VsbChnYW1lU3RhdGUsIGluZGV4KSB7XHJcblx0cmV0dXJuIGdhbWVTdGF0ZS5jZWxscy5tYXAoKGNlbGwsIGkpID0+XHJcblx0XHRpID09PSBpbmRleCA/IGdhbWVTdGF0ZS5jdXJyZW50TW92ZSA6IGNlbGxcclxuXHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVRpbWVycyhnYW1lU3RhdGUsIG5vdykge1xyXG5cdGNvbnN0IGRpZmYgPSBub3cgLSBnYW1lU3RhdGUuY3VycmVudE1vdmVTdGFydFxyXG5cdGNvbnN0IHRpbWVyID0gZ2FtZVN0YXRlLnRpbWVycyhnYW1lU3RhdGUuY3VycmVudE1vdmUpXHJcblxyXG5cdHJldHVybiB7XHJcblx0XHQuLi5nYW1lU3RhdGUudGltZXJzLFxyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsiR0FNRV9TWU1CT0xTIiwiTU9WRV9PUkRFUiIsImdldE5leHRNb3ZlIiwiR0FNRV9TVEFURV9BQ1RJT05TIiwiQ0VMTF9DTElDSyIsImluaXRHYW1lU3RhdGUiLCJwbGF5ZXJzQ291bnQiLCJkZWZhdWx0VGltZXIiLCJjdXJyZW50TW92ZVN0YXJ0IiwiY2VsbHMiLCJBcnJheSIsImZpbGwiLCJjdXJyZW50TW92ZSIsIkNST1NTIiwidGltZXJzIiwicmVkdWNlIiwic3ltYm9sIiwiaW5kZXgiLCJnYW1lU3RhdGVSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwibm93IiwidXBkYXRlVGltZXJzIiwidXBkYXRlQ2VsbCIsImdhbWVTdGF0ZSIsIm1hcCIsImNlbGwiLCJpIiwiZGlmZiIsInRpbWVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game-new/model/game-state-reducer.js\n"));

/***/ })

});