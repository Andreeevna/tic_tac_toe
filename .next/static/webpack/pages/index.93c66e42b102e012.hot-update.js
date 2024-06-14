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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\nvar _s = $RefreshSig$();\n\n\nfunction getNextMove(currentMove, playersCount) {\n    const slicedMoveOrder = _constants__WEBPACK_IMPORTED_MODULE_1__.MOVE_ORDER.slice(0, playersCount);\n    const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;\n    var _slicedMoveOrder_nextMoveIndex;\n    return (_slicedMoveOrder_nextMoveIndex = slicedMoveOrder[nextMoveIndex]) !== null && _slicedMoveOrder_nextMoveIndex !== void 0 ? _slicedMoveOrder_nextMoveIndex : slicedMoveOrder[0];\n}\nfunction computerWinner(cells) {\n    let sequenceSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5, filedSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 19;\n    const gap = Math.floor(sequenceSize / 2);\n    function compareElements(indexes) {}\n    function getSequenceIndexes(i) {\n        const res = [\n            [],\n            [],\n            [],\n            []\n        ];\n        for(let j = 0; j < sequenceSize; j++){\n            res[0].push(j - gap + i);\n            res[1].push(filedSize * (j - gap) + (j - gap) + i);\n            res[2].push(-filedSize * (j - gap) + (j - gap) + i);\n            res[3].push(filedSize * (j - gap) + i);\n        }\n        return res;\n    }\n    for(let i = 0; i < cells.length; i++){\n        if (cells[i]) {\n            console.log(getSequenceIndexes(i));\n        }\n    }\n}\nfunction useGameState(playersCount) {\n    _s();\n    const [{ cells, currentMove }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentMove: _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.CROSS\n        }));\n    console.log(computerWinner(cells));\n    const nextMove = getNextMove(currentMove, playersCount);\n    const handleCellClick = (index)=>{\n        setGameState((lastGameState)=>({\n                ...lastGameState,\n                currentMove: getNextMove(lastGameState.currentMove, playersCount),\n                cells: lastGameState.cells.map((cell, i)=>i === index ? lastGameState.currentMove : cell)\n            }));\n    };\n    return {\n        cells,\n        currentMove,\n        nextMove,\n        handleCellClick\n    };\n}\n_s(useGameState, \"r7lgRFFnZ/n3D4FO8o+7WEzjWZs=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvdXNlR2FtZVN0YXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQ3NCO0FBRXRELFNBQVNHLFlBQVlDLFdBQVcsRUFBRUMsWUFBWTtJQUM3QyxNQUFNQyxrQkFBa0JKLGtEQUFVQSxDQUFDSyxLQUFLLENBQUMsR0FBR0Y7SUFFNUMsTUFBTUcsZ0JBQWdCRixnQkFBZ0JHLE9BQU8sQ0FBQ0wsZUFBZTtRQUN0REU7SUFBUCxPQUFPQSxDQUFBQSxpQ0FBQUEsZUFBZSxDQUFDRSxjQUFjLGNBQTlCRiw0Q0FBQUEsaUNBQWtDQSxlQUFlLENBQUMsRUFBRTtBQUM1RDtBQUVBLFNBQVNJLGVBQWVDLEtBQUs7UUFBRUMsZUFBQUEsaUVBQWUsR0FBR0MsWUFBQUEsaUVBQVk7SUFDNUQsTUFBTUMsTUFBTUMsS0FBS0MsS0FBSyxDQUFDSixlQUFlO0lBRXRDLFNBQVNLLGdCQUFnQkMsT0FBTyxHQUFHO0lBRW5DLFNBQVNDLG1CQUFtQkMsQ0FBQztRQUM1QixNQUFNQyxNQUFNO1lBQUMsRUFBRTtZQUFFLEVBQUU7WUFBRSxFQUFFO1lBQUUsRUFBRTtTQUFDO1FBRTVCLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJVixjQUFjVSxJQUFLO1lBQ3RDRCxHQUFHLENBQUMsRUFBRSxDQUFDRSxJQUFJLENBQUNELElBQUlSLE1BQU1NO1lBQ3RCQyxHQUFHLENBQUMsRUFBRSxDQUFDRSxJQUFJLENBQUNWLFlBQWFTLENBQUFBLElBQUlSLEdBQUUsSUFBTVEsQ0FBQUEsSUFBSVIsR0FBRSxJQUFLTTtZQUNoREMsR0FBRyxDQUFDLEVBQUUsQ0FBQ0UsSUFBSSxDQUFDLENBQUNWLFlBQWFTLENBQUFBLElBQUlSLEdBQUUsSUFBTVEsQ0FBQUEsSUFBSVIsR0FBRSxJQUFLTTtZQUNqREMsR0FBRyxDQUFDLEVBQUUsQ0FBQ0UsSUFBSSxDQUFDVixZQUFhUyxDQUFBQSxJQUFJUixHQUFFLElBQUtNO1FBQ3JDO1FBRUEsT0FBT0M7SUFDUjtJQUVBLElBQUssSUFBSUQsSUFBSSxHQUFHQSxJQUFJVCxNQUFNYSxNQUFNLEVBQUVKLElBQUs7UUFDdEMsSUFBSVQsS0FBSyxDQUFDUyxFQUFFLEVBQUU7WUFDYkssUUFBUUMsR0FBRyxDQUFDUCxtQkFBbUJDO1FBQ2hDO0lBQ0Q7QUFDRDtBQUVPLFNBQVNPLGFBQWF0QixZQUFZOztJQUN4QyxNQUFNLENBQUMsRUFBRU0sS0FBSyxFQUFFUCxXQUFXLEVBQUUsRUFBRXdCLGFBQWEsR0FBRzVCLCtDQUFRQSxDQUFDLElBQU87WUFDOURXLE9BQU8sSUFBSWtCLE1BQU0sS0FBSyxJQUFJQyxJQUFJLENBQUM7WUFDL0IxQixhQUFhSCxvREFBWUEsQ0FBQzhCLEtBQUs7UUFDaEM7SUFFQU4sUUFBUUMsR0FBRyxDQUFDaEIsZUFBZUM7SUFFM0IsTUFBTXFCLFdBQVc3QixZQUFZQyxhQUFhQztJQUUxQyxNQUFNNEIsa0JBQWtCQyxDQUFBQTtRQUN2Qk4sYUFBYU8sQ0FBQUEsZ0JBQWtCO2dCQUM5QixHQUFHQSxhQUFhO2dCQUNoQi9CLGFBQWFELFlBQVlnQyxjQUFjL0IsV0FBVyxFQUFFQztnQkFDcERNLE9BQU93QixjQUFjeEIsS0FBSyxDQUFDeUIsR0FBRyxDQUFDLENBQUNDLE1BQU1qQixJQUNyQ0EsTUFBTWMsUUFBUUMsY0FBYy9CLFdBQVcsR0FBR2lDO1lBRTVDO0lBQ0Q7SUFFQSxPQUFPO1FBQ04xQjtRQUNBUDtRQUNBNEI7UUFDQUM7SUFDRDtBQUNEO0dBMUJnQk4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL3VzZUdhbWVTdGF0ZS5qcz83ODc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEdBTUVfU1lNQk9MUywgTU9WRV9PUkRFUiB9IGZyb20gJy4vY29uc3RhbnRzJ1xyXG5cclxuZnVuY3Rpb24gZ2V0TmV4dE1vdmUoY3VycmVudE1vdmUsIHBsYXllcnNDb3VudCkge1xyXG5cdGNvbnN0IHNsaWNlZE1vdmVPcmRlciA9IE1PVkVfT1JERVIuc2xpY2UoMCwgcGxheWVyc0NvdW50KVxyXG5cclxuXHRjb25zdCBuZXh0TW92ZUluZGV4ID0gc2xpY2VkTW92ZU9yZGVyLmluZGV4T2YoY3VycmVudE1vdmUpICsgMVxyXG5cdHJldHVybiBzbGljZWRNb3ZlT3JkZXJbbmV4dE1vdmVJbmRleF0gPz8gc2xpY2VkTW92ZU9yZGVyWzBdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXB1dGVyV2lubmVyKGNlbGxzLCBzZXF1ZW5jZVNpemUgPSA1LCBmaWxlZFNpemUgPSAxOSkge1xyXG5cdGNvbnN0IGdhcCA9IE1hdGguZmxvb3Ioc2VxdWVuY2VTaXplIC8gMilcclxuXHJcblx0ZnVuY3Rpb24gY29tcGFyZUVsZW1lbnRzKGluZGV4ZXMpIHt9XHJcblxyXG5cdGZ1bmN0aW9uIGdldFNlcXVlbmNlSW5kZXhlcyhpKSB7XHJcblx0XHRjb25zdCByZXMgPSBbW10sIFtdLCBbXSwgW11dXHJcblxyXG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBzZXF1ZW5jZVNpemU7IGorKykge1xyXG5cdFx0XHRyZXNbMF0ucHVzaChqIC0gZ2FwICsgaSlcclxuXHRcdFx0cmVzWzFdLnB1c2goZmlsZWRTaXplICogKGogLSBnYXApICsgKGogLSBnYXApICsgaSlcclxuXHRcdFx0cmVzWzJdLnB1c2goLWZpbGVkU2l6ZSAqIChqIC0gZ2FwKSArIChqIC0gZ2FwKSArIGkpXHJcblx0XHRcdHJlc1szXS5wdXNoKGZpbGVkU2l6ZSAqIChqIC0gZ2FwKSArIGkpXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJlc1xyXG5cdH1cclxuXHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKykge1xyXG5cdFx0aWYgKGNlbGxzW2ldKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGdldFNlcXVlbmNlSW5kZXhlcyhpKSlcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VHYW1lU3RhdGUocGxheWVyc0NvdW50KSB7XHJcblx0Y29uc3QgW3sgY2VsbHMsIGN1cnJlbnRNb3ZlIH0sIHNldEdhbWVTdGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PiAoe1xyXG5cdFx0Y2VsbHM6IG5ldyBBcnJheSgxOSAqIDE5KS5maWxsKG51bGwpLFxyXG5cdFx0Y3VycmVudE1vdmU6IEdBTUVfU1lNQk9MUy5DUk9TUyxcclxuXHR9KSlcclxuXHJcblx0Y29uc29sZS5sb2coY29tcHV0ZXJXaW5uZXIoY2VsbHMpKVxyXG5cclxuXHRjb25zdCBuZXh0TW92ZSA9IGdldE5leHRNb3ZlKGN1cnJlbnRNb3ZlLCBwbGF5ZXJzQ291bnQpXHJcblxyXG5cdGNvbnN0IGhhbmRsZUNlbGxDbGljayA9IGluZGV4ID0+IHtcclxuXHRcdHNldEdhbWVTdGF0ZShsYXN0R2FtZVN0YXRlID0+ICh7XHJcblx0XHRcdC4uLmxhc3RHYW1lU3RhdGUsXHJcblx0XHRcdGN1cnJlbnRNb3ZlOiBnZXROZXh0TW92ZShsYXN0R2FtZVN0YXRlLmN1cnJlbnRNb3ZlLCBwbGF5ZXJzQ291bnQpLFxyXG5cdFx0XHRjZWxsczogbGFzdEdhbWVTdGF0ZS5jZWxscy5tYXAoKGNlbGwsIGkpID0+XHJcblx0XHRcdFx0aSA9PT0gaW5kZXggPyBsYXN0R2FtZVN0YXRlLmN1cnJlbnRNb3ZlIDogY2VsbFxyXG5cdFx0XHQpLFxyXG5cdFx0fSkpXHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0Y2VsbHMsXHJcblx0XHRjdXJyZW50TW92ZSxcclxuXHRcdG5leHRNb3ZlLFxyXG5cdFx0aGFuZGxlQ2VsbENsaWNrLFxyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJHQU1FX1NZTUJPTFMiLCJNT1ZFX09SREVSIiwiZ2V0TmV4dE1vdmUiLCJjdXJyZW50TW92ZSIsInBsYXllcnNDb3VudCIsInNsaWNlZE1vdmVPcmRlciIsInNsaWNlIiwibmV4dE1vdmVJbmRleCIsImluZGV4T2YiLCJjb21wdXRlcldpbm5lciIsImNlbGxzIiwic2VxdWVuY2VTaXplIiwiZmlsZWRTaXplIiwiZ2FwIiwiTWF0aCIsImZsb29yIiwiY29tcGFyZUVsZW1lbnRzIiwiaW5kZXhlcyIsImdldFNlcXVlbmNlSW5kZXhlcyIsImkiLCJyZXMiLCJqIiwicHVzaCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VHYW1lU3RhdGUiLCJzZXRHYW1lU3RhdGUiLCJBcnJheSIsImZpbGwiLCJDUk9TUyIsIm5leHRNb3ZlIiwiaGFuZGxlQ2VsbENsaWNrIiwiaW5kZXgiLCJsYXN0R2FtZVN0YXRlIiwibWFwIiwiY2VsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/useGameState.js\n"));

/***/ })

});