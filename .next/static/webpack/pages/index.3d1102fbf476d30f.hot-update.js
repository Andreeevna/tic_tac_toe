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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/game */ \"./components/game/index.js\");\n/* harmony import */ var _components_game_game_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/game/game-field */ \"./components/game/game-field.jsx\");\n/* harmony import */ var _components_game_game_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/game/game-symbol */ \"./components/game/game-symbol.jsx\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header */ \"./components/header/index.js\");\n/* harmony import */ var _components_uikit_ui_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/uikit/ui-modal */ \"./components/uikit/ui-modal.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction App() {\n    _s();\n    const [playersCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(4);\n    const { cells, currentMove, nextMove, handleCellClick, winnerSequence, handlePlayerTimeOver, winnerSymbol } = (0,_components_game__WEBPACK_IMPORTED_MODULE_2__.useGameState)(playersCount);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-100 min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_5__.Header, {}, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\pages\\\\index.jsx\",\n                lineNumber: 22,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"pt-6 mx-auto w-max\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game__WEBPACK_IMPORTED_MODULE_2__.GameTitle, {\n                        playersCount: playersCount\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game__WEBPACK_IMPORTED_MODULE_2__.GameInfo, {\n                        className: \"mt-4\",\n                        playersCount: playersCount,\n                        currentMove: currentMove,\n                        isWinner: !!winnerSymbol,\n                        onPlayerTimeOver: handlePlayerTimeOver\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_game_symbol__WEBPACK_IMPORTED_MODULE_4__.GameSymbol, {\n                            symbol: winnerSymbol\n                        }, void 0, false, {\n                            fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\pages\\\\index.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 6\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_uikit_ui_modal__WEBPACK_IMPORTED_MODULE_6__.UImodal, {\n                        width: \"md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_uikit_ui_modal__WEBPACK_IMPORTED_MODULE_6__.UImodal.header, {}, void 0, false, {\n                                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_uikit_ui_modal__WEBPACK_IMPORTED_MODULE_6__.UImodal.body, {}, void 0, false, {\n                                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_uikit_ui_modal__WEBPACK_IMPORTED_MODULE_6__.UImodal.header, {}, void 0, false, {\n                                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_game_field__WEBPACK_IMPORTED_MODULE_3__.GameField, {\n                        className: \"mt-6\",\n                        playersCount: playersCount,\n                        cells: cells,\n                        currentMove: currentMove,\n                        nextMove: nextMove,\n                        handleCellClick: handleCellClick,\n                        winnerSequence: winnerSequence,\n                        winnerSymbol: winnerSymbol\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\pages\\\\index.jsx\",\n                lineNumber: 23,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\pages\\\\index.jsx\",\n        lineNumber: 21,\n        columnNumber: 3\n    }, this);\n}\n_s(App, \"WhueG32wFsHUT5GYA7JYwCvLyzg=\", false, function() {\n    return [\n        _components_game__WEBPACK_IMPORTED_MODULE_2__.useGameState\n    ];\n});\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ3NDO0FBQ2I7QUFDRTtBQUNkO0FBQ1M7QUFFdEQsU0FBU1E7O0lBQ1IsTUFBTSxDQUFDQyxhQUFhLEdBQUdULCtDQUFRQSxDQUFDO0lBQ2hDLE1BQU0sRUFDTFUsS0FBSyxFQUNMQyxXQUFXLEVBQ1hDLFFBQVEsRUFDUkMsZUFBZSxFQUNmQyxjQUFjLEVBQ2RDLG9CQUFvQixFQUNwQkMsWUFBWSxFQUNaLEdBQUdiLDhEQUFZQSxDQUFDTTtJQUVqQixxQkFDQyw4REFBQ1E7UUFBSUMsV0FBVTs7MEJBQ2QsOERBQUNaLHNEQUFNQTs7Ozs7MEJBQ1AsOERBQUNhO2dCQUFLRCxXQUFVOztrQ0FDZiw4REFBQ2hCLHVEQUFTQTt3QkFBQ08sY0FBY0E7Ozs7OztrQ0FDekIsOERBQUNSLHNEQUFRQTt3QkFDUmlCLFdBQVU7d0JBQ1ZULGNBQWNBO3dCQUNkRSxhQUFhQTt3QkFDYlMsVUFBVSxDQUFDLENBQUNKO3dCQUNaSyxrQkFBa0JOOzs7Ozs7a0NBRW5CLDhEQUFDRTt3QkFBSUMsV0FBVTtrQ0FDZCw0RUFBQ2Isb0VBQVVBOzRCQUFDaUIsUUFBUU47Ozs7Ozs7Ozs7O2tDQUVyQiw4REFBQ1QsK0RBQU9BO3dCQUFDZ0IsT0FBTTs7MENBQ2QsOERBQUNoQiwrREFBT0EsQ0FBQ2lCLE1BQU07Ozs7OzBDQUNmLDhEQUFDakIsK0RBQU9BLENBQUNrQixJQUFJOzs7OzswQ0FDYiw4REFBQ2xCLCtEQUFPQSxDQUFDaUIsTUFBTTs7Ozs7Ozs7Ozs7a0NBRWhCLDhEQUFDcEIsa0VBQVNBO3dCQUNUYyxXQUFVO3dCQUNWVCxjQUFjQTt3QkFDZEMsT0FBT0E7d0JBQ1BDLGFBQWFBO3dCQUNiQyxVQUFVQTt3QkFDVkMsaUJBQWlCQTt3QkFDakJDLGdCQUFnQkE7d0JBQ2hCRSxjQUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS25CO0dBN0NTUjs7UUFVSkwsMERBQVlBOzs7S0FWUks7QUErQ1QsK0RBQWVBLEdBQUdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEdhbWVJbmZvLCBHYW1lVGl0bGUsIHVzZUdhbWVTdGF0ZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvZ2FtZSdcbmltcG9ydCB7IEdhbWVGaWVsZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvZ2FtZS9nYW1lLWZpZWxkJ1xuaW1wb3J0IHsgR2FtZVN5bWJvbCB9IGZyb20gJy4uL2NvbXBvbmVudHMvZ2FtZS9nYW1lLXN5bWJvbCdcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IHsgVUltb2RhbCB9IGZyb20gJy4uL2NvbXBvbmVudHMvdWlraXQvdWktbW9kYWwnXG5cbmZ1bmN0aW9uIEFwcCgpIHtcblx0Y29uc3QgW3BsYXllcnNDb3VudF0gPSB1c2VTdGF0ZSg0KVxuXHRjb25zdCB7XG5cdFx0Y2VsbHMsXG5cdFx0Y3VycmVudE1vdmUsXG5cdFx0bmV4dE1vdmUsXG5cdFx0aGFuZGxlQ2VsbENsaWNrLFxuXHRcdHdpbm5lclNlcXVlbmNlLFxuXHRcdGhhbmRsZVBsYXllclRpbWVPdmVyLFxuXHRcdHdpbm5lclN5bWJvbCxcblx0fSA9IHVzZUdhbWVTdGF0ZShwbGF5ZXJzQ291bnQpXG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nYmctc2xhdGUtMTAwIG1pbi1oLXNjcmVlbic+XG5cdFx0XHQ8SGVhZGVyIC8+XG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9J3B0LTYgbXgtYXV0byB3LW1heCc+XG5cdFx0XHRcdDxHYW1lVGl0bGUgcGxheWVyc0NvdW50PXtwbGF5ZXJzQ291bnR9IC8+XG5cdFx0XHRcdDxHYW1lSW5mb1xuXHRcdFx0XHRcdGNsYXNzTmFtZT0nbXQtNCdcblx0XHRcdFx0XHRwbGF5ZXJzQ291bnQ9e3BsYXllcnNDb3VudH1cblx0XHRcdFx0XHRjdXJyZW50TW92ZT17Y3VycmVudE1vdmV9XG5cdFx0XHRcdFx0aXNXaW5uZXI9eyEhd2lubmVyU3ltYm9sfVxuXHRcdFx0XHRcdG9uUGxheWVyVGltZU92ZXI9e2hhbmRsZVBsYXllclRpbWVPdmVyfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbXktNCc+XG5cdFx0XHRcdFx0PEdhbWVTeW1ib2wgc3ltYm9sPXt3aW5uZXJTeW1ib2x9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8VUltb2RhbCB3aWR0aD0nbWQnPlxuXHRcdFx0XHRcdDxVSW1vZGFsLmhlYWRlcj48L1VJbW9kYWwuaGVhZGVyPlxuXHRcdFx0XHRcdDxVSW1vZGFsLmJvZHk+PC9VSW1vZGFsLmJvZHk+XG5cdFx0XHRcdFx0PFVJbW9kYWwuaGVhZGVyPjwvVUltb2RhbC5oZWFkZXI+XG5cdFx0XHRcdDwvVUltb2RhbD5cblx0XHRcdFx0PEdhbWVGaWVsZFxuXHRcdFx0XHRcdGNsYXNzTmFtZT0nbXQtNidcblx0XHRcdFx0XHRwbGF5ZXJzQ291bnQ9e3BsYXllcnNDb3VudH1cblx0XHRcdFx0XHRjZWxscz17Y2VsbHN9XG5cdFx0XHRcdFx0Y3VycmVudE1vdmU9e2N1cnJlbnRNb3ZlfVxuXHRcdFx0XHRcdG5leHRNb3ZlPXtuZXh0TW92ZX1cblx0XHRcdFx0XHRoYW5kbGVDZWxsQ2xpY2s9e2hhbmRsZUNlbGxDbGlja31cblx0XHRcdFx0XHR3aW5uZXJTZXF1ZW5jZT17d2lubmVyU2VxdWVuY2V9XG5cdFx0XHRcdFx0d2lubmVyU3ltYm9sPXt3aW5uZXJTeW1ib2x9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L21haW4+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJHYW1lSW5mbyIsIkdhbWVUaXRsZSIsInVzZUdhbWVTdGF0ZSIsIkdhbWVGaWVsZCIsIkdhbWVTeW1ib2wiLCJIZWFkZXIiLCJVSW1vZGFsIiwiQXBwIiwicGxheWVyc0NvdW50IiwiY2VsbHMiLCJjdXJyZW50TW92ZSIsIm5leHRNb3ZlIiwiaGFuZGxlQ2VsbENsaWNrIiwid2lubmVyU2VxdWVuY2UiLCJoYW5kbGVQbGF5ZXJUaW1lT3ZlciIsIndpbm5lclN5bWJvbCIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJpc1dpbm5lciIsIm9uUGxheWVyVGltZU92ZXIiLCJzeW1ib2wiLCJ3aWR0aCIsImhlYWRlciIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});