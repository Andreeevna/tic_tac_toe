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

/***/ "./components/game-new/model/compute-winner-symbol.js":
/*!************************************************************!*\
  !*** ./components/game-new/model/compute-winner-symbol.js ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computeWinnerSymbol: function() { return /* binding */ computeWinnerSymbol; }\n/* harmony export */ });\nfunction computeWinnerSymbol(gameState, param) {\n    let { winnerSequence, nextMove, timers } = param;\n    return nextMove === gameState.currentMove.filter((symbol)=>timers[symbol] > 0) ? gameState.currentMove : gameState.cells[winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence[0]];\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL2NvbXB1dGUtd2lubmVyLXN5bWJvbC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sU0FBU0Esb0JBQ2ZDLFNBQVMsRUFDVCxLQUFvQztRQUFwQyxFQUFFQyxjQUFjLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFLEdBQXBDO0lBRUEsT0FBT0QsYUFBYUYsVUFBVUksV0FBVyxDQUFDQyxNQUFNLENBQUNDLENBQUFBLFNBQVVILE1BQU0sQ0FBQ0csT0FBTyxHQUFHLEtBQ3pFTixVQUFVSSxXQUFXLEdBQ3JCSixVQUFVTyxLQUFLLENBQUNOLDJCQUFBQSxxQ0FBQUEsY0FBZ0IsQ0FBQyxFQUFFLENBQUM7QUFDeEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lLW5ldy9tb2RlbC9jb21wdXRlLXdpbm5lci1zeW1ib2wuanM/MGQxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY29tcHV0ZVdpbm5lclN5bWJvbChcclxuXHRnYW1lU3RhdGUsXHJcblx0eyB3aW5uZXJTZXF1ZW5jZSwgbmV4dE1vdmUsIHRpbWVycyB9XHJcbikge1xyXG5cdHJldHVybiBuZXh0TW92ZSA9PT0gZ2FtZVN0YXRlLmN1cnJlbnRNb3ZlLmZpbHRlcihzeW1ib2wgPT4gdGltZXJzW3N5bWJvbF0gPiAwKVxyXG5cdFx0PyBnYW1lU3RhdGUuY3VycmVudE1vdmVcclxuXHRcdDogZ2FtZVN0YXRlLmNlbGxzW3dpbm5lclNlcXVlbmNlPy5bMF1dXHJcbn1cclxuIl0sIm5hbWVzIjpbImNvbXB1dGVXaW5uZXJTeW1ib2wiLCJnYW1lU3RhdGUiLCJ3aW5uZXJTZXF1ZW5jZSIsIm5leHRNb3ZlIiwidGltZXJzIiwiY3VycmVudE1vdmUiLCJmaWx0ZXIiLCJzeW1ib2wiLCJjZWxscyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game-new/model/compute-winner-symbol.js\n"));

/***/ })

});