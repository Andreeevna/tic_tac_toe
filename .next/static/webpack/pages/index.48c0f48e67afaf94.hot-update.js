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

/***/ "./components/game/useGameState.js":
/*!*****************************************!*\
  !*** ./components/game/useGameState.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\nvar _s = $RefreshSig$();\n\n\nfunction getNextMove(currentMove, playersCount) {\n    const slicedMoveOrder = _constants__WEBPACK_IMPORTED_MODULE_1__.MOVE_ORDER.slice(0, playersCount);\n    const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;\n    var _slicedMoveOrder_nextMoveIndex;\n    return (_slicedMoveOrder_nextMoveIndex = slicedMoveOrder[nextMoveIndex]) !== null && _slicedMoveOrder_nextMoveIndex !== void 0 ? _slicedMoveOrder_nextMoveIndex : slicedMoveOrder[0];\n}\nfunction computerWinner(cells) {\n    let sequenceSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5, filedSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 19;\n    const gap = Math.floor(sequenceSize / 2);\n    function getSequenceIndexes(i) {\n        const res = [\n            [],\n            [],\n            [],\n            []\n        ];\n        for(let j = 0; j < sequenceSize; j++){\n            res[0].push(j - gap + i);\n            res[1].push(filedSize * (j - gap) + (j - gap) + i);\n            res[2].push(-filedSize * (j - gap) + (j - gap) + i);\n            res[3].push(filedSize * (j - gap));\n        }\n    }\n    for(let i = 0; i < cells.length; i++){\n        if (cells[i]) {}\n    }\n}\nfunction useGameState(playersCount) {\n    _s();\n    const [{ cells, currentMove }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentMove: _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.CROSS\n        }));\n    const nextMove = getNextMove(currentMove, playersCount);\n    const handleCellClick = (index)=>{\n        setGameState((lastGameState)=>({\n                ...lastGameState,\n                currentMove: getNextMove(lastGameState.currentMove, playersCount),\n                cells: lastGameState.cells.map((cell, i)=>i === index ? lastGameState.currentMove : cell)\n            }));\n    };\n    return {\n        cells,\n        currentMove,\n        nextMove,\n        handleCellClick\n    };\n}\n_s(useGameState, \"r7lgRFFnZ/n3D4FO8o+7WEzjWZs=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvdXNlR2FtZVN0YXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQ3NCO0FBRXRELFNBQVNHLFlBQVlDLFdBQVcsRUFBRUMsWUFBWTtJQUM3QyxNQUFNQyxrQkFBa0JKLGtEQUFVQSxDQUFDSyxLQUFLLENBQUMsR0FBR0Y7SUFFNUMsTUFBTUcsZ0JBQWdCRixnQkFBZ0JHLE9BQU8sQ0FBQ0wsZUFBZTtRQUN0REU7SUFBUCxPQUFPQSxDQUFBQSxpQ0FBQUEsZUFBZSxDQUFDRSxjQUFjLGNBQTlCRiw0Q0FBQUEsaUNBQWtDQSxlQUFlLENBQUMsRUFBRTtBQUM1RDtBQUVBLFNBQVNJLGVBQWVDLEtBQUs7UUFBRUMsZUFBQUEsaUVBQWUsR0FBR0MsWUFBQUEsaUVBQVk7SUFDNUQsTUFBTUMsTUFBTUMsS0FBS0MsS0FBSyxDQUFDSixlQUFlO0lBRXRDLFNBQVNLLG1CQUFtQkMsQ0FBQztRQUM1QixNQUFNQyxNQUFNO1lBQUMsRUFBRTtZQUFFLEVBQUU7WUFBRSxFQUFFO1lBQUUsRUFBRTtTQUFDO1FBRTVCLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJUixjQUFjUSxJQUFLO1lBQ3RDRCxHQUFHLENBQUMsRUFBRSxDQUFDRSxJQUFJLENBQUNELElBQUlOLE1BQU1JO1lBQ3RCQyxHQUFHLENBQUMsRUFBRSxDQUFDRSxJQUFJLENBQUNSLFlBQWFPLENBQUFBLElBQUlOLEdBQUUsSUFBTU0sQ0FBQUEsSUFBSU4sR0FBRSxJQUFLSTtZQUNoREMsR0FBRyxDQUFDLEVBQUUsQ0FBQ0UsSUFBSSxDQUFDLENBQUNSLFlBQWFPLENBQUFBLElBQUlOLEdBQUUsSUFBTU0sQ0FBQUEsSUFBSU4sR0FBRSxJQUFLSTtZQUNqREMsR0FBRyxDQUFDLEVBQUUsQ0FBQ0UsSUFBSSxDQUFDUixZQUFhTyxDQUFBQSxJQUFJTixHQUFFO1FBQ2hDO0lBQ0Q7SUFFQSxJQUFLLElBQUlJLElBQUksR0FBR0EsSUFBSVAsTUFBTVcsTUFBTSxFQUFFSixJQUFLO1FBQ3RDLElBQUlQLEtBQUssQ0FBQ08sRUFBRSxFQUFFLENBQ2Q7SUFDRDtBQUNEO0FBRU8sU0FBU0ssYUFBYWxCLFlBQVk7O0lBQ3hDLE1BQU0sQ0FBQyxFQUFFTSxLQUFLLEVBQUVQLFdBQVcsRUFBRSxFQUFFb0IsYUFBYSxHQUFHeEIsK0NBQVFBLENBQUMsSUFBTztZQUM5RFcsT0FBTyxJQUFJYyxNQUFNLEtBQUssSUFBSUMsSUFBSSxDQUFDO1lBQy9CdEIsYUFBYUgsb0RBQVlBLENBQUMwQixLQUFLO1FBQ2hDO0lBRUEsTUFBTUMsV0FBV3pCLFlBQVlDLGFBQWFDO0lBRTFDLE1BQU13QixrQkFBa0JDLENBQUFBO1FBQ3ZCTixhQUFhTyxDQUFBQSxnQkFBa0I7Z0JBQzlCLEdBQUdBLGFBQWE7Z0JBQ2hCM0IsYUFBYUQsWUFBWTRCLGNBQWMzQixXQUFXLEVBQUVDO2dCQUNwRE0sT0FBT29CLGNBQWNwQixLQUFLLENBQUNxQixHQUFHLENBQUMsQ0FBQ0MsTUFBTWYsSUFDckNBLE1BQU1ZLFFBQVFDLGNBQWMzQixXQUFXLEdBQUc2QjtZQUU1QztJQUNEO0lBRUEsT0FBTztRQUNOdEI7UUFDQVA7UUFDQXdCO1FBQ0FDO0lBQ0Q7QUFDRDtHQXhCZ0JOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS91c2VHYW1lU3RhdGUuanM/Nzg3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBHQU1FX1NZTUJPTFMsIE1PVkVfT1JERVIgfSBmcm9tICcuL2NvbnN0YW50cydcclxuXHJcbmZ1bmN0aW9uIGdldE5leHRNb3ZlKGN1cnJlbnRNb3ZlLCBwbGF5ZXJzQ291bnQpIHtcclxuXHRjb25zdCBzbGljZWRNb3ZlT3JkZXIgPSBNT1ZFX09SREVSLnNsaWNlKDAsIHBsYXllcnNDb3VudClcclxuXHJcblx0Y29uc3QgbmV4dE1vdmVJbmRleCA9IHNsaWNlZE1vdmVPcmRlci5pbmRleE9mKGN1cnJlbnRNb3ZlKSArIDFcclxuXHRyZXR1cm4gc2xpY2VkTW92ZU9yZGVyW25leHRNb3ZlSW5kZXhdID8/IHNsaWNlZE1vdmVPcmRlclswXVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb21wdXRlcldpbm5lcihjZWxscywgc2VxdWVuY2VTaXplID0gNSwgZmlsZWRTaXplID0gMTkpIHtcclxuXHRjb25zdCBnYXAgPSBNYXRoLmZsb29yKHNlcXVlbmNlU2l6ZSAvIDIpXHJcblxyXG5cdGZ1bmN0aW9uIGdldFNlcXVlbmNlSW5kZXhlcyhpKSB7XHJcblx0XHRjb25zdCByZXMgPSBbW10sIFtdLCBbXSwgW11dXHJcblxyXG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBzZXF1ZW5jZVNpemU7IGorKykge1xyXG5cdFx0XHRyZXNbMF0ucHVzaChqIC0gZ2FwICsgaSlcclxuXHRcdFx0cmVzWzFdLnB1c2goZmlsZWRTaXplICogKGogLSBnYXApICsgKGogLSBnYXApICsgaSlcclxuXHRcdFx0cmVzWzJdLnB1c2goLWZpbGVkU2l6ZSAqIChqIC0gZ2FwKSArIChqIC0gZ2FwKSArIGkpXHJcblx0XHRcdHJlc1szXS5wdXNoKGZpbGVkU2l6ZSAqIChqIC0gZ2FwKSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdGlmIChjZWxsc1tpXSkge1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdhbWVTdGF0ZShwbGF5ZXJzQ291bnQpIHtcclxuXHRjb25zdCBbeyBjZWxscywgY3VycmVudE1vdmUgfSwgc2V0R2FtZVN0YXRlXSA9IHVzZVN0YXRlKCgpID0+ICh7XHJcblx0XHRjZWxsczogbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCksXHJcblx0XHRjdXJyZW50TW92ZTogR0FNRV9TWU1CT0xTLkNST1NTLFxyXG5cdH0pKVxyXG5cclxuXHRjb25zdCBuZXh0TW92ZSA9IGdldE5leHRNb3ZlKGN1cnJlbnRNb3ZlLCBwbGF5ZXJzQ291bnQpXHJcblxyXG5cdGNvbnN0IGhhbmRsZUNlbGxDbGljayA9IGluZGV4ID0+IHtcclxuXHRcdHNldEdhbWVTdGF0ZShsYXN0R2FtZVN0YXRlID0+ICh7XHJcblx0XHRcdC4uLmxhc3RHYW1lU3RhdGUsXHJcblx0XHRcdGN1cnJlbnRNb3ZlOiBnZXROZXh0TW92ZShsYXN0R2FtZVN0YXRlLmN1cnJlbnRNb3ZlLCBwbGF5ZXJzQ291bnQpLFxyXG5cdFx0XHRjZWxsczogbGFzdEdhbWVTdGF0ZS5jZWxscy5tYXAoKGNlbGwsIGkpID0+XHJcblx0XHRcdFx0aSA9PT0gaW5kZXggPyBsYXN0R2FtZVN0YXRlLmN1cnJlbnRNb3ZlIDogY2VsbFxyXG5cdFx0XHQpLFxyXG5cdFx0fSkpXHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0Y2VsbHMsXHJcblx0XHRjdXJyZW50TW92ZSxcclxuXHRcdG5leHRNb3ZlLFxyXG5cdFx0aGFuZGxlQ2VsbENsaWNrLFxyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJHQU1FX1NZTUJPTFMiLCJNT1ZFX09SREVSIiwiZ2V0TmV4dE1vdmUiLCJjdXJyZW50TW92ZSIsInBsYXllcnNDb3VudCIsInNsaWNlZE1vdmVPcmRlciIsInNsaWNlIiwibmV4dE1vdmVJbmRleCIsImluZGV4T2YiLCJjb21wdXRlcldpbm5lciIsImNlbGxzIiwic2VxdWVuY2VTaXplIiwiZmlsZWRTaXplIiwiZ2FwIiwiTWF0aCIsImZsb29yIiwiZ2V0U2VxdWVuY2VJbmRleGVzIiwiaSIsInJlcyIsImoiLCJwdXNoIiwibGVuZ3RoIiwidXNlR2FtZVN0YXRlIiwic2V0R2FtZVN0YXRlIiwiQXJyYXkiLCJmaWxsIiwiQ1JPU1MiLCJuZXh0TW92ZSIsImhhbmRsZUNlbGxDbGljayIsImluZGV4IiwibGFzdEdhbWVTdGF0ZSIsIm1hcCIsImNlbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/useGameState.js\n"));

/***/ })

});