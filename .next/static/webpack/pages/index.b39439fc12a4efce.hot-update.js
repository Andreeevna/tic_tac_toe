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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\nvar _s = $RefreshSig$();\n\n\nfunction getNextMove(currentMove, playersCount) {\n    const slicedMoveOrder = _constants__WEBPACK_IMPORTED_MODULE_1__.MOVE_ORDER.slice(0, playersCount);\n    const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;\n    var _slicedMoveOrder_nextMoveIndex;\n    return (_slicedMoveOrder_nextMoveIndex = slicedMoveOrder[nextMoveIndex]) !== null && _slicedMoveOrder_nextMoveIndex !== void 0 ? _slicedMoveOrder_nextMoveIndex : slicedMoveOrder[0];\n}\nfunction computerWinner(cells) {\n    let sequenceSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5, filedSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 19;\n    const gap = Math.floor(sequenceSize / 2);\n    function compareElements(indexes) {\n        let result = true;\n        for(let i = 1; i < indexes.length; i++){\n            result && (result = !!cells[indexes[i]]);\n            result && (result = cells[indexes[i]] === cells[indexes[i - 1]]);\n        }\n        return result;\n    }\n    function getSequenceIndexes(i) {\n        const res = [\n            [],\n            [],\n            [],\n            []\n        ];\n        for(let j = 0; j < sequenceSize; j++){\n            res[0].push(j - gap + i);\n            res[1].push(filedSize * (j - gap) + (j - gap) + i);\n            res[2].push(-filedSize * (j - gap) + (j - gap) + i);\n            res[3].push(filedSize * (j - gap) + i);\n        }\n        return res;\n    }\n    for(let i = 0; i < cells.length; i++){\n        if (cells[i]) {\n            // console.log(getSequenceIndexes(i))\n            const indexRows = getSequenceIndexes(i);\n            const winnerIndexes = indexRows.find((row)=>compareElements(row));\n        }\n    }\n}\nfunction useGameState(playersCount) {\n    _s();\n    const [{ cells, currentMove }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentMove: _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.CROSS\n        }));\n    console.log(computerWinner(cells));\n    const nextMove = getNextMove(currentMove, playersCount);\n    const handleCellClick = (index)=>{\n        setGameState((lastGameState)=>({\n                ...lastGameState,\n                currentMove: getNextMove(lastGameState.currentMove, playersCount),\n                cells: lastGameState.cells.map((cell, i)=>i === index ? lastGameState.currentMove : cell)\n            }));\n    };\n    return {\n        cells,\n        currentMove,\n        nextMove,\n        handleCellClick\n    };\n}\n_s(useGameState, \"r7lgRFFnZ/n3D4FO8o+7WEzjWZs=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDtJQUVBLE9BQU87UUFDTi9CO1FBQ0FQO1FBQ0FpQztRQUNBQztJQUNEO0FBQ0Q7R0ExQmdCUiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvdXNlR2FtZVN0YXRlLmpzPzc4NzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgR0FNRV9TWU1CT0xTLCBNT1ZFX09SREVSIH0gZnJvbSAnLi9jb25zdGFudHMnXHJcblxyXG5mdW5jdGlvbiBnZXROZXh0TW92ZShjdXJyZW50TW92ZSwgcGxheWVyc0NvdW50KSB7XHJcblx0Y29uc3Qgc2xpY2VkTW92ZU9yZGVyID0gTU9WRV9PUkRFUi5zbGljZSgwLCBwbGF5ZXJzQ291bnQpXHJcblxyXG5cdGNvbnN0IG5leHRNb3ZlSW5kZXggPSBzbGljZWRNb3ZlT3JkZXIuaW5kZXhPZihjdXJyZW50TW92ZSkgKyAxXHJcblx0cmV0dXJuIHNsaWNlZE1vdmVPcmRlcltuZXh0TW92ZUluZGV4XSA/PyBzbGljZWRNb3ZlT3JkZXJbMF1cclxufVxyXG5cclxuZnVuY3Rpb24gY29tcHV0ZXJXaW5uZXIoY2VsbHMsIHNlcXVlbmNlU2l6ZSA9IDUsIGZpbGVkU2l6ZSA9IDE5KSB7XHJcblx0Y29uc3QgZ2FwID0gTWF0aC5mbG9vcihzZXF1ZW5jZVNpemUgLyAyKVxyXG5cclxuXHRmdW5jdGlvbiBjb21wYXJlRWxlbWVudHMoaW5kZXhlcykge1xyXG5cdFx0bGV0IHJlc3VsdCA9IHRydWVcclxuXHJcblx0XHRmb3IgKGxldCBpID0gMTsgaSA8IGluZGV4ZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0cmVzdWx0ICYmPSAhIWNlbGxzW2luZGV4ZXNbaV1dXHJcblx0XHRcdHJlc3VsdCAmJj0gY2VsbHNbaW5kZXhlc1tpXV0gPT09IGNlbGxzW2luZGV4ZXNbaSAtIDFdXVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiByZXN1bHRcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGdldFNlcXVlbmNlSW5kZXhlcyhpKSB7XHJcblx0XHRjb25zdCByZXMgPSBbW10sIFtdLCBbXSwgW11dXHJcblxyXG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBzZXF1ZW5jZVNpemU7IGorKykge1xyXG5cdFx0XHRyZXNbMF0ucHVzaChqIC0gZ2FwICsgaSlcclxuXHRcdFx0cmVzWzFdLnB1c2goZmlsZWRTaXplICogKGogLSBnYXApICsgKGogLSBnYXApICsgaSlcclxuXHRcdFx0cmVzWzJdLnB1c2goLWZpbGVkU2l6ZSAqIChqIC0gZ2FwKSArIChqIC0gZ2FwKSArIGkpXHJcblx0XHRcdHJlc1szXS5wdXNoKGZpbGVkU2l6ZSAqIChqIC0gZ2FwKSArIGkpXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJlc1xyXG5cdH1cclxuXHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKykge1xyXG5cdFx0aWYgKGNlbGxzW2ldKSB7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKGdldFNlcXVlbmNlSW5kZXhlcyhpKSlcclxuXHJcblx0XHRcdGNvbnN0IGluZGV4Um93cyA9IGdldFNlcXVlbmNlSW5kZXhlcyhpKVxyXG5cdFx0XHRjb25zdCB3aW5uZXJJbmRleGVzID0gaW5kZXhSb3dzLmZpbmQocm93ID0+IGNvbXBhcmVFbGVtZW50cyhyb3cpKVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdhbWVTdGF0ZShwbGF5ZXJzQ291bnQpIHtcclxuXHRjb25zdCBbeyBjZWxscywgY3VycmVudE1vdmUgfSwgc2V0R2FtZVN0YXRlXSA9IHVzZVN0YXRlKCgpID0+ICh7XHJcblx0XHRjZWxsczogbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCksXHJcblx0XHRjdXJyZW50TW92ZTogR0FNRV9TWU1CT0xTLkNST1NTLFxyXG5cdH0pKVxyXG5cclxuXHRjb25zb2xlLmxvZyhjb21wdXRlcldpbm5lcihjZWxscykpXHJcblxyXG5cdGNvbnN0IG5leHRNb3ZlID0gZ2V0TmV4dE1vdmUoY3VycmVudE1vdmUsIHBsYXllcnNDb3VudClcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2VsbENsaWNrID0gaW5kZXggPT4ge1xyXG5cdFx0c2V0R2FtZVN0YXRlKGxhc3RHYW1lU3RhdGUgPT4gKHtcclxuXHRcdFx0Li4ubGFzdEdhbWVTdGF0ZSxcclxuXHRcdFx0Y3VycmVudE1vdmU6IGdldE5leHRNb3ZlKGxhc3RHYW1lU3RhdGUuY3VycmVudE1vdmUsIHBsYXllcnNDb3VudCksXHJcblx0XHRcdGNlbGxzOiBsYXN0R2FtZVN0YXRlLmNlbGxzLm1hcCgoY2VsbCwgaSkgPT5cclxuXHRcdFx0XHRpID09PSBpbmRleCA/IGxhc3RHYW1lU3RhdGUuY3VycmVudE1vdmUgOiBjZWxsXHJcblx0XHRcdCksXHJcblx0XHR9KSlcclxuXHR9XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRjZWxscyxcclxuXHRcdGN1cnJlbnRNb3ZlLFxyXG5cdFx0bmV4dE1vdmUsXHJcblx0XHRoYW5kbGVDZWxsQ2xpY2ssXHJcblx0fVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkdBTUVfU1lNQk9MUyIsIk1PVkVfT1JERVIiLCJnZXROZXh0TW92ZSIsImN1cnJlbnRNb3ZlIiwicGxheWVyc0NvdW50Iiwic2xpY2VkTW92ZU9yZGVyIiwic2xpY2UiLCJuZXh0TW92ZUluZGV4IiwiaW5kZXhPZiIsImNvbXB1dGVyV2lubmVyIiwiY2VsbHMiLCJzZXF1ZW5jZVNpemUiLCJmaWxlZFNpemUiLCJnYXAiLCJNYXRoIiwiZmxvb3IiLCJjb21wYXJlRWxlbWVudHMiLCJpbmRleGVzIiwicmVzdWx0IiwiaSIsImxlbmd0aCIsImdldFNlcXVlbmNlSW5kZXhlcyIsInJlcyIsImoiLCJwdXNoIiwiaW5kZXhSb3dzIiwid2lubmVySW5kZXhlcyIsImZpbmQiLCJyb3ciLCJ1c2VHYW1lU3RhdGUiLCJzZXRHYW1lU3RhdGUiLCJBcnJheSIsImZpbGwiLCJDUk9TUyIsImNvbnNvbGUiLCJsb2ciLCJuZXh0TW92ZSIsImhhbmRsZUNlbGxDbGljayIsImluZGV4IiwibGFzdEdhbWVTdGF0ZSIsIm1hcCIsImNlbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/useGameState.js\n"));

/***/ })

});