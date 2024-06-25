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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GAME_STATE_ACTIONS: function() { return /* binding */ GAME_STATE_ACTIONS; },\n/* harmony export */   gameStateReducer: function() { return /* binding */ gameStateReducer; },\n/* harmony export */   initGameState: function() { return /* binding */ initGameState; }\n/* harmony export */ });\n/* harmony import */ var _ui_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/constants */ \"./components/game-new/ui/constants.js\");\n/* harmony import */ var _get_next_move__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-next-move */ \"./components/game-new/model/get-next-move.js\");\n\n\nconst GAME_STATE_ACTIONS = {\n    CELL_CLICK: \"cell-click\"\n};\nconst initGameState = (param)=>{\n    let { playersCount, defaultTimer, currentMoveStart } = param;\n    return {\n        cells: new Array(19 * 19).fill(null),\n        currentMove: _ui_constants__WEBPACK_IMPORTED_MODULE_0__.GAME_SYMBOLS.CROSS,\n        currentMoveStart,\n        playersCount,\n        timers: _ui_constants__WEBPACK_IMPORTED_MODULE_0__.MOVE_ORDER.reduce((timers, symbol, index)=>{\n            if (index < playersCount) {\n                timers[symbol] = defaultTimer;\n            }\n            return timers;\n        }, {})\n    };\n};\nconst gameStateReducer = (state, action)=>{\n    switch(action.type){\n        case GAME_STATE_ACTIONS.CELL_CLICK:\n            {\n                const { index, now } = action;\n                if (state.cells[index]) {\n                    return state;\n                }\n                return {\n                    ...state,\n                    timers: updateTimers(state, now),\n                    currentMove: (0,_get_next_move__WEBPACK_IMPORTED_MODULE_1__.getNextMove)(state),\n                    currentMoveStart: now,\n                    cells: updateCell(state, index)\n                };\n            }\n        case GAME_STATE_ACTIONS.TICK:\n            {\n                const { now } = action;\n                if (!isTimeOver(state, now)) {\n                    return state;\n                }\n                return {\n                    ...state,\n                    timers: updateTimers(state, now),\n                    currentMove: (0,_get_next_move__WEBPACK_IMPORTED_MODULE_1__.getNextMove)(state),\n                    currentMoveStart: now\n                };\n            }\n        default:\n            {\n                return state;\n            }\n    }\n};\nfunction updateCell(gameState, index) {\n    return gameState.cells.map((cell, i)=>i === index ? gameState.currentMove : cell);\n}\nfunction updateTimers(gameState, now) {\n    const diff = now - gameState.currentMoveStart;\n    const timer = gameState.timers[gameState.currentMove];\n    return {\n        ...gameState.timers,\n        [gameState.currentMove]: timer - diff\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL2dhbWUtc3RhdGUtcmVkdWNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwRDtBQUNiO0FBRXRDLE1BQU1HLHFCQUFxQjtJQUNqQ0MsWUFBWTtBQUNiLEVBQUM7QUFFTSxNQUFNQyxnQkFBZ0I7UUFBQyxFQUM3QkMsWUFBWSxFQUNaQyxZQUFZLEVBQ1pDLGdCQUFnQixFQUNoQjtXQUFNO1FBQ05DLE9BQU8sSUFBSUMsTUFBTSxLQUFLLElBQUlDLElBQUksQ0FBQztRQUMvQkMsYUFBYVosdURBQVlBLENBQUNhLEtBQUs7UUFDL0JMO1FBQ0FGO1FBQ0FRLFFBQVFiLHFEQUFVQSxDQUFDYyxNQUFNLENBQUMsQ0FBQ0QsUUFBUUUsUUFBUUM7WUFDMUMsSUFBSUEsUUFBUVgsY0FBYztnQkFDekJRLE1BQU0sQ0FBQ0UsT0FBTyxHQUFHVDtZQUNsQjtZQUNBLE9BQU9PO1FBQ1IsR0FBRyxDQUFDO0lBQ0w7QUFBQSxFQUFFO0FBRUssTUFBTUksbUJBQW1CLENBQUNDLE9BQU9DO0lBQ3ZDLE9BQVFBLE9BQU9DLElBQUk7UUFDbEIsS0FBS2xCLG1CQUFtQkMsVUFBVTtZQUFFO2dCQUNuQyxNQUFNLEVBQUVhLEtBQUssRUFBRUssR0FBRyxFQUFFLEdBQUdGO2dCQUV2QixJQUFJRCxNQUFNVixLQUFLLENBQUNRLE1BQU0sRUFBRTtvQkFDdkIsT0FBT0U7Z0JBQ1I7Z0JBRUEsT0FBTztvQkFDTixHQUFHQSxLQUFLO29CQUNSTCxRQUFRUyxhQUFhSixPQUFPRztvQkFDNUJWLGFBQWFWLDJEQUFXQSxDQUFDaUI7b0JBQ3pCWCxrQkFBa0JjO29CQUNsQmIsT0FBT2UsV0FBV0wsT0FBT0Y7Z0JBQzFCO1lBQ0Q7UUFDQSxLQUFLZCxtQkFBbUJzQixJQUFJO1lBQUU7Z0JBQzdCLE1BQU0sRUFBRUgsR0FBRyxFQUFFLEdBQUdGO2dCQUVoQixJQUFJLENBQUNNLFdBQVdQLE9BQU9HLE1BQU07b0JBQzVCLE9BQU9IO2dCQUNSO2dCQUVBLE9BQU87b0JBQ04sR0FBR0EsS0FBSztvQkFDUkwsUUFBUVMsYUFBYUosT0FBT0c7b0JBQzVCVixhQUFhViwyREFBV0EsQ0FBQ2lCO29CQUN6Qlgsa0JBQWtCYztnQkFDbkI7WUFDRDtRQUNBO1lBQVM7Z0JBQ1IsT0FBT0g7WUFDUjtJQUNEO0FBQ0QsRUFBQztBQUVELFNBQVNLLFdBQVdHLFNBQVMsRUFBRVYsS0FBSztJQUNuQyxPQUFPVSxVQUFVbEIsS0FBSyxDQUFDbUIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLElBQ2pDQSxNQUFNYixRQUFRVSxVQUFVZixXQUFXLEdBQUdpQjtBQUV4QztBQUVBLFNBQVNOLGFBQWFJLFNBQVMsRUFBRUwsR0FBRztJQUNuQyxNQUFNUyxPQUFPVCxNQUFNSyxVQUFVbkIsZ0JBQWdCO0lBQzdDLE1BQU13QixRQUFRTCxVQUFVYixNQUFNLENBQUNhLFVBQVVmLFdBQVcsQ0FBQztJQUVyRCxPQUFPO1FBQ04sR0FBR2UsVUFBVWIsTUFBTTtRQUNuQixDQUFDYSxVQUFVZixXQUFXLENBQUMsRUFBRW9CLFFBQVFEO0lBQ2xDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lLW5ldy9tb2RlbC9nYW1lLXN0YXRlLXJlZHVjZXIuanM/YTM1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHQU1FX1NZTUJPTFMsIE1PVkVfT1JERVIgfSBmcm9tICcuLi91aS9jb25zdGFudHMnXHJcbmltcG9ydCB7IGdldE5leHRNb3ZlIH0gZnJvbSAnLi9nZXQtbmV4dC1tb3ZlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEdBTUVfU1RBVEVfQUNUSU9OUyA9IHtcclxuXHRDRUxMX0NMSUNLOiAnY2VsbC1jbGljaycsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0R2FtZVN0YXRlID0gKHtcclxuXHRwbGF5ZXJzQ291bnQsXHJcblx0ZGVmYXVsdFRpbWVyLFxyXG5cdGN1cnJlbnRNb3ZlU3RhcnQsXHJcbn0pID0+ICh7XHJcblx0Y2VsbHM6IG5ldyBBcnJheSgxOSAqIDE5KS5maWxsKG51bGwpLFxyXG5cdGN1cnJlbnRNb3ZlOiBHQU1FX1NZTUJPTFMuQ1JPU1MsXHJcblx0Y3VycmVudE1vdmVTdGFydCxcclxuXHRwbGF5ZXJzQ291bnQsXHJcblx0dGltZXJzOiBNT1ZFX09SREVSLnJlZHVjZSgodGltZXJzLCBzeW1ib2wsIGluZGV4KSA9PiB7XHJcblx0XHRpZiAoaW5kZXggPCBwbGF5ZXJzQ291bnQpIHtcclxuXHRcdFx0dGltZXJzW3N5bWJvbF0gPSBkZWZhdWx0VGltZXJcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aW1lcnNcclxuXHR9LCB7fSksXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgZ2FtZVN0YXRlUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBHQU1FX1NUQVRFX0FDVElPTlMuQ0VMTF9DTElDSzoge1xyXG5cdFx0XHRjb25zdCB7IGluZGV4LCBub3cgfSA9IGFjdGlvblxyXG5cclxuXHRcdFx0aWYgKHN0YXRlLmNlbGxzW2luZGV4XSkge1xyXG5cdFx0XHRcdHJldHVybiBzdGF0ZVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHRpbWVyczogdXBkYXRlVGltZXJzKHN0YXRlLCBub3cpLFxyXG5cdFx0XHRcdGN1cnJlbnRNb3ZlOiBnZXROZXh0TW92ZShzdGF0ZSksXHJcblx0XHRcdFx0Y3VycmVudE1vdmVTdGFydDogbm93LFxyXG5cdFx0XHRcdGNlbGxzOiB1cGRhdGVDZWxsKHN0YXRlLCBpbmRleCksXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGNhc2UgR0FNRV9TVEFURV9BQ1RJT05TLlRJQ0s6IHtcclxuXHRcdFx0Y29uc3QgeyBub3cgfSA9IGFjdGlvblxyXG5cclxuXHRcdFx0aWYgKCFpc1RpbWVPdmVyKHN0YXRlLCBub3cpKSB7XHJcblx0XHRcdFx0cmV0dXJuIHN0YXRlXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0dGltZXJzOiB1cGRhdGVUaW1lcnMoc3RhdGUsIG5vdyksXHJcblx0XHRcdFx0Y3VycmVudE1vdmU6IGdldE5leHRNb3ZlKHN0YXRlKSxcclxuXHRcdFx0XHRjdXJyZW50TW92ZVN0YXJ0OiBub3csXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlXHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDZWxsKGdhbWVTdGF0ZSwgaW5kZXgpIHtcclxuXHRyZXR1cm4gZ2FtZVN0YXRlLmNlbGxzLm1hcCgoY2VsbCwgaSkgPT5cclxuXHRcdGkgPT09IGluZGV4ID8gZ2FtZVN0YXRlLmN1cnJlbnRNb3ZlIDogY2VsbFxyXG5cdClcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVGltZXJzKGdhbWVTdGF0ZSwgbm93KSB7XHJcblx0Y29uc3QgZGlmZiA9IG5vdyAtIGdhbWVTdGF0ZS5jdXJyZW50TW92ZVN0YXJ0XHJcblx0Y29uc3QgdGltZXIgPSBnYW1lU3RhdGUudGltZXJzW2dhbWVTdGF0ZS5jdXJyZW50TW92ZV1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdC4uLmdhbWVTdGF0ZS50aW1lcnMsXHJcblx0XHRbZ2FtZVN0YXRlLmN1cnJlbnRNb3ZlXTogdGltZXIgLSBkaWZmLFxyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsiR0FNRV9TWU1CT0xTIiwiTU9WRV9PUkRFUiIsImdldE5leHRNb3ZlIiwiR0FNRV9TVEFURV9BQ1RJT05TIiwiQ0VMTF9DTElDSyIsImluaXRHYW1lU3RhdGUiLCJwbGF5ZXJzQ291bnQiLCJkZWZhdWx0VGltZXIiLCJjdXJyZW50TW92ZVN0YXJ0IiwiY2VsbHMiLCJBcnJheSIsImZpbGwiLCJjdXJyZW50TW92ZSIsIkNST1NTIiwidGltZXJzIiwicmVkdWNlIiwic3ltYm9sIiwiaW5kZXgiLCJnYW1lU3RhdGVSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwibm93IiwidXBkYXRlVGltZXJzIiwidXBkYXRlQ2VsbCIsIlRJQ0siLCJpc1RpbWVPdmVyIiwiZ2FtZVN0YXRlIiwibWFwIiwiY2VsbCIsImkiLCJkaWZmIiwidGltZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game-new/model/game-state-reducer.js\n"));

/***/ })

});