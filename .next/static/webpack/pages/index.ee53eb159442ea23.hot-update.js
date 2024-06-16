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

/***/ "./components/game/model.js":
/*!**********************************!*\
  !*** ./components/game/model.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computerWinner: function() { return /* binding */ computerWinner; },\n/* harmony export */   getNextMove: function() { return /* binding */ getNextMove; }\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n\nfunction computerWinner(cells) {\n    let sequenceSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5, filedSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 19;\n    const gap = Math.floor(sequenceSize / 2);\n    function compareElements(indexes) {\n        let result = true;\n        for(let i = 1; i < indexes.length; i++){\n            result && (result = !!cells[indexes[i]]);\n            result && (result = cells[indexes[i]] === cells[indexes[i - 1]]);\n        }\n        return result;\n    }\n    function getSequenceIndexes(i) {\n        const res = [\n            [],\n            [],\n            [],\n            []\n        ];\n        for(let j = 0; j < sequenceSize; j++){\n            res[0].push(j - gap + i);\n            res[1].push(filedSize * (j - gap) + (j - gap) + i);\n            res[2].push(-filedSize * (j - gap) + (j - gap) + i);\n            res[3].push(filedSize * (j - gap) + i);\n        }\n        const x = i % filedSize;\n        return res;\n    }\n    for(let i = 0; i < cells.length; i++){\n        if (cells[i]) {\n            const indexRows = getSequenceIndexes(i);\n            const winnerIndexes = indexRows.find((row)=>compareElements(row));\n            if (winnerIndexes) {\n                return winnerIndexes;\n            }\n        }\n    }\n    return undefined;\n}\nfunction getNextMove(currentMove, playersCount) {\n    const slicedMoveOrder = _constants__WEBPACK_IMPORTED_MODULE_0__.MOVE_ORDER.slice(0, playersCount);\n    const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;\n    var _slicedMoveOrder_nextMoveIndex;\n    return (_slicedMoveOrder_nextMoveIndex = slicedMoveOrder[nextMoveIndex]) !== null && _slicedMoveOrder_nextMoveIndex !== void 0 ? _slicedMoveOrder_nextMoveIndex : slicedMoveOrder[0];\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvbW9kZWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdDO0FBRWpDLFNBQVNDLGVBQWVDLEtBQUs7UUFBRUMsZUFBQUEsaUVBQWUsR0FBR0MsWUFBQUEsaUVBQVk7SUFDbkUsTUFBTUMsTUFBTUMsS0FBS0MsS0FBSyxDQUFDSixlQUFlO0lBRXRDLFNBQVNLLGdCQUFnQkMsT0FBTztRQUMvQixJQUFJQyxTQUFTO1FBRWIsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlGLFFBQVFHLE1BQU0sRUFBRUQsSUFBSztZQUN4Q0QsV0FBQUEsU0FBVyxDQUFDLENBQUNSLEtBQUssQ0FBQ08sT0FBTyxDQUFDRSxFQUFFLENBQUM7WUFDOUJELFdBQUFBLFNBQVdSLEtBQUssQ0FBQ08sT0FBTyxDQUFDRSxFQUFFLENBQUMsS0FBS1QsS0FBSyxDQUFDTyxPQUFPLENBQUNFLElBQUksRUFBRSxDQUFDO1FBQ3ZEO1FBRUEsT0FBT0Q7SUFDUjtJQUVBLFNBQVNHLG1CQUFtQkYsQ0FBQztRQUM1QixNQUFNRyxNQUFNO1lBQUMsRUFBRTtZQUFFLEVBQUU7WUFBRSxFQUFFO1lBQUUsRUFBRTtTQUFDO1FBRTVCLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJWixjQUFjWSxJQUFLO1lBQ3RDRCxHQUFHLENBQUMsRUFBRSxDQUFDRSxJQUFJLENBQUNELElBQUlWLE1BQU1NO1lBQ3RCRyxHQUFHLENBQUMsRUFBRSxDQUFDRSxJQUFJLENBQUNaLFlBQWFXLENBQUFBLElBQUlWLEdBQUUsSUFBTVUsQ0FBQUEsSUFBSVYsR0FBRSxJQUFLTTtZQUNoREcsR0FBRyxDQUFDLEVBQUUsQ0FBQ0UsSUFBSSxDQUFDLENBQUNaLFlBQWFXLENBQUFBLElBQUlWLEdBQUUsSUFBTVUsQ0FBQUEsSUFBSVYsR0FBRSxJQUFLTTtZQUNqREcsR0FBRyxDQUFDLEVBQUUsQ0FBQ0UsSUFBSSxDQUFDWixZQUFhVyxDQUFBQSxJQUFJVixHQUFFLElBQUtNO1FBQ3JDO1FBRUEsTUFBTU0sSUFBSU4sSUFBSVA7UUFFZCxPQUFPVTtJQUNSO0lBRUEsSUFBSyxJQUFJSCxJQUFJLEdBQUdBLElBQUlULE1BQU1VLE1BQU0sRUFBRUQsSUFBSztRQUN0QyxJQUFJVCxLQUFLLENBQUNTLEVBQUUsRUFBRTtZQUNiLE1BQU1PLFlBQVlMLG1CQUFtQkY7WUFDckMsTUFBTVEsZ0JBQWdCRCxVQUFVRSxJQUFJLENBQUNDLENBQUFBLE1BQU9iLGdCQUFnQmE7WUFFNUQsSUFBSUYsZUFBZTtnQkFDbEIsT0FBT0E7WUFDUjtRQUNEO0lBQ0Q7SUFFQSxPQUFPRztBQUNSO0FBRU8sU0FBU0MsWUFBWUMsV0FBVyxFQUFFQyxZQUFZO0lBQ3BELE1BQU1DLGtCQUFrQjFCLGtEQUFVQSxDQUFDMkIsS0FBSyxDQUFDLEdBQUdGO0lBRTVDLE1BQU1HLGdCQUFnQkYsZ0JBQWdCRyxPQUFPLENBQUNMLGVBQWU7UUFDdERFO0lBQVAsT0FBT0EsQ0FBQUEsaUNBQUFBLGVBQWUsQ0FBQ0UsY0FBYyxjQUE5QkYsNENBQUFBLGlDQUFrQ0EsZUFBZSxDQUFDLEVBQUU7QUFDNUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL21vZGVsLmpzP2U0ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTU9WRV9PUkRFUiB9IGZyb20gJy4vY29uc3RhbnRzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVyV2lubmVyKGNlbGxzLCBzZXF1ZW5jZVNpemUgPSA1LCBmaWxlZFNpemUgPSAxOSkge1xyXG5cdGNvbnN0IGdhcCA9IE1hdGguZmxvb3Ioc2VxdWVuY2VTaXplIC8gMilcclxuXHJcblx0ZnVuY3Rpb24gY29tcGFyZUVsZW1lbnRzKGluZGV4ZXMpIHtcclxuXHRcdGxldCByZXN1bHQgPSB0cnVlXHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBpbmRleGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHJlc3VsdCAmJj0gISFjZWxsc1tpbmRleGVzW2ldXVxyXG5cdFx0XHRyZXN1bHQgJiY9IGNlbGxzW2luZGV4ZXNbaV1dID09PSBjZWxsc1tpbmRleGVzW2kgLSAxXV1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcmVzdWx0XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXRTZXF1ZW5jZUluZGV4ZXMoaSkge1xyXG5cdFx0Y29uc3QgcmVzID0gW1tdLCBbXSwgW10sIFtdXVxyXG5cclxuXHRcdGZvciAobGV0IGogPSAwOyBqIDwgc2VxdWVuY2VTaXplOyBqKyspIHtcclxuXHRcdFx0cmVzWzBdLnB1c2goaiAtIGdhcCArIGkpXHJcblx0XHRcdHJlc1sxXS5wdXNoKGZpbGVkU2l6ZSAqIChqIC0gZ2FwKSArIChqIC0gZ2FwKSArIGkpXHJcblx0XHRcdHJlc1syXS5wdXNoKC1maWxlZFNpemUgKiAoaiAtIGdhcCkgKyAoaiAtIGdhcCkgKyBpKVxyXG5cdFx0XHRyZXNbM10ucHVzaChmaWxlZFNpemUgKiAoaiAtIGdhcCkgKyBpKVxyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHggPSBpICUgZmlsZWRTaXplXHJcblxyXG5cdFx0cmV0dXJuIHJlc1xyXG5cdH1cclxuXHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKykge1xyXG5cdFx0aWYgKGNlbGxzW2ldKSB7XHJcblx0XHRcdGNvbnN0IGluZGV4Um93cyA9IGdldFNlcXVlbmNlSW5kZXhlcyhpKVxyXG5cdFx0XHRjb25zdCB3aW5uZXJJbmRleGVzID0gaW5kZXhSb3dzLmZpbmQocm93ID0+IGNvbXBhcmVFbGVtZW50cyhyb3cpKVxyXG5cclxuXHRcdFx0aWYgKHdpbm5lckluZGV4ZXMpIHtcclxuXHRcdFx0XHRyZXR1cm4gd2lubmVySW5kZXhlc1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdW5kZWZpbmVkXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0TW92ZShjdXJyZW50TW92ZSwgcGxheWVyc0NvdW50KSB7XHJcblx0Y29uc3Qgc2xpY2VkTW92ZU9yZGVyID0gTU9WRV9PUkRFUi5zbGljZSgwLCBwbGF5ZXJzQ291bnQpXHJcblxyXG5cdGNvbnN0IG5leHRNb3ZlSW5kZXggPSBzbGljZWRNb3ZlT3JkZXIuaW5kZXhPZihjdXJyZW50TW92ZSkgKyAxXHJcblx0cmV0dXJuIHNsaWNlZE1vdmVPcmRlcltuZXh0TW92ZUluZGV4XSA/PyBzbGljZWRNb3ZlT3JkZXJbMF1cclxufVxyXG4iXSwibmFtZXMiOlsiTU9WRV9PUkRFUiIsImNvbXB1dGVyV2lubmVyIiwiY2VsbHMiLCJzZXF1ZW5jZVNpemUiLCJmaWxlZFNpemUiLCJnYXAiLCJNYXRoIiwiZmxvb3IiLCJjb21wYXJlRWxlbWVudHMiLCJpbmRleGVzIiwicmVzdWx0IiwiaSIsImxlbmd0aCIsImdldFNlcXVlbmNlSW5kZXhlcyIsInJlcyIsImoiLCJwdXNoIiwieCIsImluZGV4Um93cyIsIndpbm5lckluZGV4ZXMiLCJmaW5kIiwicm93IiwidW5kZWZpbmVkIiwiZ2V0TmV4dE1vdmUiLCJjdXJyZW50TW92ZSIsInBsYXllcnNDb3VudCIsInNsaWNlZE1vdmVPcmRlciIsInNsaWNlIiwibmV4dE1vdmVJbmRleCIsImluZGV4T2YiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/model.js\n"));

/***/ })

});