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

/***/ "./components/game-new/game.jsx":
/*!**************************************!*\
  !*** ./components/game-new/game.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _model_use_game_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/use-game-state */ \"./components/game-new/model/use-game-state.js\");\n/* harmony import */ var _ui_back_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/back-link */ \"./components/game-new/ui/back-link.jsx\");\n/* harmony import */ var _ui_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/constants */ \"./components/game-new/ui/constants.js\");\n/* harmony import */ var _ui_game_cell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/game-cell */ \"./components/game-new/ui/game-cell.jsx\");\n/* harmony import */ var _ui_game_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/game-info */ \"./components/game-new/ui/game-info.jsx\");\n/* harmony import */ var _ui_game_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/game-layout */ \"./components/game-new/ui/game-layout.jsx\");\n/* harmony import */ var _ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/game-move-info */ \"./components/game-new/ui/game-move-info.jsx\");\n/* harmony import */ var _ui_game_title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/game-title */ \"./components/game-new/ui/game-title.jsx\");\n/* harmony import */ var _ui_player_info__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/player-info */ \"./components/game-new/ui/player-info.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst PLAYERS_COUNT = 4;\nconst Game = ()=>{\n    _s();\n    const { cells, currentMove, nextMove, handleCellClick, winnerSequence, winnerSymbol } = (0,_model_use_game_state__WEBPACK_IMPORTED_MODULE_1__.useGameState)(PLAYERS_COUNT);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_layout__WEBPACK_IMPORTED_MODULE_6__.GameLayout, {\n        backLink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_back_link__WEBPACK_IMPORTED_MODULE_2__.BackLink, {}, void 0, false, void 0, void 0),\n        gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_info__WEBPACK_IMPORTED_MODULE_5__.Gameinfo, {\n            isRatingGame: true,\n            playersCount: 4,\n            timeMode: \"1 минута на ход\"\n        }, void 0, false, void 0, void 0),\n        title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_title__WEBPACK_IMPORTED_MODULE_8__.Gametitle, {}, void 0, false, void 0, void 0),\n        playersList: _ui_constants__WEBPACK_IMPORTED_MODULE_3__.players.map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_player_info__WEBPACK_IMPORTED_MODULE_9__.PlayerInfo, {\n                avatar: player.avatar,\n                name: player.name,\n                rating: player.rating,\n                seconds: 60,\n                symbol: player.symbol,\n                isRight: index % 2 === 1\n            }, player.id, false, void 0, void 0)),\n        gameMoveInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__.GameMoveInfo, {\n            currentMove: currentMove,\n            nextMove: nextMove\n        }, void 0, false, void 0, void 0),\n        gameCells: cells.map((cell, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_cell__WEBPACK_IMPORTED_MODULE_4__.GameCell, {\n                disabled: !!winnerSymbol,\n                isWinner: winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence.includes(i),\n                onClick: ()=>handleCellClick(i),\n                symbol: cell\n            }, i, false, void 0, void 0))\n    }, void 0, false, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game-new\\\\game.jsx\",\n        lineNumber: 22,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Game, \"EW++5KHSjR7TE+NbL6IhnNqTZrU=\", false, function() {\n    return [\n        _model_use_game_state__WEBPACK_IMPORTED_MODULE_1__.useGameState\n    ];\n});\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L2dhbWUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ1o7QUFDRDtBQUNDO0FBQ0E7QUFDSTtBQUNLO0FBQ1A7QUFDRTtBQUU3QyxNQUFNUyxnQkFBZ0I7QUFDZixNQUFNQyxPQUFPOztJQUNuQixNQUFNLEVBQ0xDLEtBQUssRUFDTEMsV0FBVyxFQUNYQyxRQUFRLEVBQ1JDLGVBQWUsRUFDZkMsY0FBYyxFQUNkQyxZQUFZLEVBQ1osR0FBR2hCLG1FQUFZQSxDQUFDUztJQUNqQixxQkFDQyw4REFBQ0osdURBQVVBO1FBQ1ZZLHdCQUFVLDhEQUFDaEIsbURBQVFBO1FBQ25CaUIsd0JBQ0MsOERBQUNkLG1EQUFRQTtZQUFDZSxZQUFZO1lBQUNDLGNBQWM7WUFBR0MsVUFBVTs7UUFFbkRDLHFCQUFPLDhEQUFDZixxREFBU0E7UUFDakJnQixhQUFhckIsa0RBQU9BLENBQUNzQixHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsc0JBQ2pDLDhEQUFDbEIsdURBQVVBO2dCQUVWbUIsUUFBUUYsT0FBT0UsTUFBTTtnQkFDckJDLE1BQU1ILE9BQU9HLElBQUk7Z0JBQ2pCQyxRQUFRSixPQUFPSSxNQUFNO2dCQUNyQkMsU0FBUztnQkFDVEMsUUFBUU4sT0FBT00sTUFBTTtnQkFDckJDLFNBQVNOLFFBQVEsTUFBTTtlQU5sQkQsT0FBT1EsRUFBRTtRQVNoQkMsNEJBQ0MsOERBQUM1Qiw0REFBWUE7WUFBQ00sYUFBYUE7WUFBYUMsVUFBVUE7O1FBRW5Ec0IsV0FBV3hCLE1BQU1hLEdBQUcsQ0FBQyxDQUFDWSxNQUFNQyxrQkFDM0IsOERBQUNsQyxtREFBUUE7Z0JBQ1JtQyxVQUFVLENBQUMsQ0FBQ3RCO2dCQUNadUIsUUFBUSxFQUFFeEIsMkJBQUFBLHFDQUFBQSxlQUFnQnlCLFFBQVEsQ0FBQ0g7Z0JBRW5DSSxTQUFTLElBQU0zQixnQkFBZ0J1QjtnQkFDL0JOLFFBQVFLO2VBRkhDOzs7Ozs7QUFPVixFQUFDO0dBekNZM0I7O1FBUVJWLCtEQUFZQTs7O0tBUkpVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS1uZXcvZ2FtZS5qc3g/ZTQyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VHYW1lU3RhdGUgfSBmcm9tICcuL21vZGVsL3VzZS1nYW1lLXN0YXRlJ1xyXG5pbXBvcnQgeyBCYWNrTGluayB9IGZyb20gJy4vdWkvYmFjay1saW5rJ1xyXG5pbXBvcnQgeyBwbGF5ZXJzIH0gZnJvbSAnLi91aS9jb25zdGFudHMnXHJcbmltcG9ydCB7IEdhbWVDZWxsIH0gZnJvbSAnLi91aS9nYW1lLWNlbGwnXHJcbmltcG9ydCB7IEdhbWVpbmZvIH0gZnJvbSAnLi91aS9nYW1lLWluZm8nXHJcbmltcG9ydCB7IEdhbWVMYXlvdXQgfSBmcm9tICcuL3VpL2dhbWUtbGF5b3V0J1xyXG5pbXBvcnQgeyBHYW1lTW92ZUluZm8gfSBmcm9tICcuL3VpL2dhbWUtbW92ZS1pbmZvJ1xyXG5pbXBvcnQgeyBHYW1ldGl0bGUgfSBmcm9tICcuL3VpL2dhbWUtdGl0bGUnXHJcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tICcuL3VpL3BsYXllci1pbmZvJ1xyXG5cclxuY29uc3QgUExBWUVSU19DT1VOVCA9IDRcclxuZXhwb3J0IGNvbnN0IEdhbWUgPSAoKSA9PiB7XHJcblx0Y29uc3Qge1xyXG5cdFx0Y2VsbHMsXHJcblx0XHRjdXJyZW50TW92ZSxcclxuXHRcdG5leHRNb3ZlLFxyXG5cdFx0aGFuZGxlQ2VsbENsaWNrLFxyXG5cdFx0d2lubmVyU2VxdWVuY2UsXHJcblx0XHR3aW5uZXJTeW1ib2wsXHJcblx0fSA9IHVzZUdhbWVTdGF0ZShQTEFZRVJTX0NPVU5UKVxyXG5cdHJldHVybiAoXHJcblx0XHQ8R2FtZUxheW91dFxyXG5cdFx0XHRiYWNrTGluaz17PEJhY2tMaW5rIC8+fVxyXG5cdFx0XHRnYW1lSW5mbz17XHJcblx0XHRcdFx0PEdhbWVpbmZvIGlzUmF0aW5nR2FtZSBwbGF5ZXJzQ291bnQ9ezR9IHRpbWVNb2RlPXsnMSDQvNC40L3Rg9GC0LAg0L3QsCDRhdC+0LQnfSAvPlxyXG5cdFx0XHR9XHJcblx0XHRcdHRpdGxlPXs8R2FtZXRpdGxlIC8+fVxyXG5cdFx0XHRwbGF5ZXJzTGlzdD17cGxheWVycy5tYXAoKHBsYXllciwgaW5kZXgpID0+IChcclxuXHRcdFx0XHQ8UGxheWVySW5mb1xyXG5cdFx0XHRcdFx0a2V5PXtwbGF5ZXIuaWR9XHJcblx0XHRcdFx0XHRhdmF0YXI9e3BsYXllci5hdmF0YXJ9XHJcblx0XHRcdFx0XHRuYW1lPXtwbGF5ZXIubmFtZX1cclxuXHRcdFx0XHRcdHJhdGluZz17cGxheWVyLnJhdGluZ31cclxuXHRcdFx0XHRcdHNlY29uZHM9ezYwfVxyXG5cdFx0XHRcdFx0c3ltYm9sPXtwbGF5ZXIuc3ltYm9sfVxyXG5cdFx0XHRcdFx0aXNSaWdodD17aW5kZXggJSAyID09PSAxfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdCkpfVxyXG5cdFx0XHRnYW1lTW92ZUluZm89e1xyXG5cdFx0XHRcdDxHYW1lTW92ZUluZm8gY3VycmVudE1vdmU9e2N1cnJlbnRNb3ZlfSBuZXh0TW92ZT17bmV4dE1vdmV9IC8+XHJcblx0XHRcdH1cclxuXHRcdFx0Z2FtZUNlbGxzPXtjZWxscy5tYXAoKGNlbGwsIGkpID0+IChcclxuXHRcdFx0XHQ8R2FtZUNlbGxcclxuXHRcdFx0XHRcdGRpc2FibGVkPXshIXdpbm5lclN5bWJvbH1cclxuXHRcdFx0XHRcdGlzV2lubmVyPXt3aW5uZXJTZXF1ZW5jZT8uaW5jbHVkZXMoaSl9XHJcblx0XHRcdFx0XHRrZXk9e2l9XHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVDZWxsQ2xpY2soaSl9XHJcblx0XHRcdFx0XHRzeW1ib2w9e2NlbGx9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0KSl9XHJcblx0XHQvPlxyXG5cdClcclxufVxyXG4iXSwibmFtZXMiOlsidXNlR2FtZVN0YXRlIiwiQmFja0xpbmsiLCJwbGF5ZXJzIiwiR2FtZUNlbGwiLCJHYW1laW5mbyIsIkdhbWVMYXlvdXQiLCJHYW1lTW92ZUluZm8iLCJHYW1ldGl0bGUiLCJQbGF5ZXJJbmZvIiwiUExBWUVSU19DT1VOVCIsIkdhbWUiLCJjZWxscyIsImN1cnJlbnRNb3ZlIiwibmV4dE1vdmUiLCJoYW5kbGVDZWxsQ2xpY2siLCJ3aW5uZXJTZXF1ZW5jZSIsIndpbm5lclN5bWJvbCIsImJhY2tMaW5rIiwiZ2FtZUluZm8iLCJpc1JhdGluZ0dhbWUiLCJwbGF5ZXJzQ291bnQiLCJ0aW1lTW9kZSIsInRpdGxlIiwicGxheWVyc0xpc3QiLCJtYXAiLCJwbGF5ZXIiLCJpbmRleCIsImF2YXRhciIsIm5hbWUiLCJyYXRpbmciLCJzZWNvbmRzIiwic3ltYm9sIiwiaXNSaWdodCIsImlkIiwiZ2FtZU1vdmVJbmZvIiwiZ2FtZUNlbGxzIiwiY2VsbCIsImkiLCJkaXNhYmxlZCIsImlzV2lubmVyIiwiaW5jbHVkZXMiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game-new/game.jsx\n"));

/***/ })

});