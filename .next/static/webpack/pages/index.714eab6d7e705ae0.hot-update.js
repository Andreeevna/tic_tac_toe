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

/***/ "./components/game-new/model/get-next-move.js":
/*!****************************************************!*\
  !*** ./components/game-new/model/get-next-move.js ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getNextMove: function() { return /* binding */ getNextMove; }\n/* harmony export */ });\n// export function getNextMove(currentMove, playersCount, playersTimeOver) {\n// \t// const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount).filter(\n// \t// \tsymbol => !playersTimeOver.includes(symbol)\n// \t// )\n// \t// const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1\n// \t// return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0]\n// }\nfunction getNextMove(param) {\n    let { currentMove, playersCount } = param;\n// const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount)\n// const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1\n// return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0]\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL2dldC1uZXh0LW1vdmUuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDRFQUE0RTtBQUM1RSx3RUFBd0U7QUFDeEUsbURBQW1EO0FBQ25ELFFBQVE7QUFDUixxRUFBcUU7QUFDckUsa0VBQWtFO0FBQ2xFLElBQUk7QUFFRyxTQUFTQSxZQUFZLEtBQTZCO1FBQTdCLEVBQUVDLFdBQVcsRUFBRUMsWUFBWSxFQUFFLEdBQTdCO0FBQzNCLDREQUE0RDtBQUM1RCxpRUFBaUU7QUFDakUsOERBQThEO0FBQy9EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS1uZXcvbW9kZWwvZ2V0LW5leHQtbW92ZS5qcz8xNTFiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4cG9ydCBmdW5jdGlvbiBnZXROZXh0TW92ZShjdXJyZW50TW92ZSwgcGxheWVyc0NvdW50LCBwbGF5ZXJzVGltZU92ZXIpIHtcclxuLy8gXHQvLyBjb25zdCBzbGljZWRNb3ZlT3JkZXIgPSBNT1ZFX09SREVSLnNsaWNlKDAsIHBsYXllcnNDb3VudCkuZmlsdGVyKFxyXG4vLyBcdC8vIFx0c3ltYm9sID0+ICFwbGF5ZXJzVGltZU92ZXIuaW5jbHVkZXMoc3ltYm9sKVxyXG4vLyBcdC8vIClcclxuLy8gXHQvLyBjb25zdCBuZXh0TW92ZUluZGV4ID0gc2xpY2VkTW92ZU9yZGVyLmluZGV4T2YoY3VycmVudE1vdmUpICsgMVxyXG4vLyBcdC8vIHJldHVybiBzbGljZWRNb3ZlT3JkZXJbbmV4dE1vdmVJbmRleF0gPz8gc2xpY2VkTW92ZU9yZGVyWzBdXHJcbi8vIH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0TW92ZSh7IGN1cnJlbnRNb3ZlLCBwbGF5ZXJzQ291bnQgfSkge1xyXG5cdC8vIGNvbnN0IHNsaWNlZE1vdmVPcmRlciA9IE1PVkVfT1JERVIuc2xpY2UoMCwgcGxheWVyc0NvdW50KVxyXG5cdC8vIGNvbnN0IG5leHRNb3ZlSW5kZXggPSBzbGljZWRNb3ZlT3JkZXIuaW5kZXhPZihjdXJyZW50TW92ZSkgKyAxXHJcblx0Ly8gcmV0dXJuIHNsaWNlZE1vdmVPcmRlcltuZXh0TW92ZUluZGV4XSA/PyBzbGljZWRNb3ZlT3JkZXJbMF1cclxufVxyXG4iXSwibmFtZXMiOlsiZ2V0TmV4dE1vdmUiLCJjdXJyZW50TW92ZSIsInBsYXllcnNDb3VudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game-new/model/get-next-move.js\n"));

/***/ })

});