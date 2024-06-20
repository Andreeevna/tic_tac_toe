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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _model_use_game_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/use-game-state */ \"./components/game-new/model/use-game-state.js\");\n/* harmony import */ var _ui_back_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/back-link */ \"./components/game-new/ui/back-link.jsx\");\n/* harmony import */ var _ui_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/constants */ \"./components/game-new/ui/constants.js\");\n/* harmony import */ var _ui_game_cell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/game-cell */ \"./components/game-new/ui/game-cell.jsx\");\n/* harmony import */ var _ui_game_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/game-info */ \"./components/game-new/ui/game-info.jsx\");\n/* harmony import */ var _ui_game_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/game-layout */ \"./components/game-new/ui/game-layout.jsx\");\n/* harmony import */ var _ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/game-move-info */ \"./components/game-new/ui/game-move-info.jsx\");\n/* harmony import */ var _ui_game_over_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/game-over-modal */ \"./components/game-new/ui/game-over-modal.jsx\");\n/* harmony import */ var _ui_game_title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/game-title */ \"./components/game-new/ui/game-title.jsx\");\n/* harmony import */ var _ui_player_info__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/player-info */ \"./components/game-new/ui/player-info.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst PLAYERS_COUNT = 2;\nconst Game = ()=>{\n    _s();\n    const { cells, currentMove, nextMove, handleCellClick, winnerSequence, winnerSymbol } = (0,_model_use_game_state__WEBPACK_IMPORTED_MODULE_1__.useGameState)(PLAYERS_COUNT);\n    const winnerPlayer = _ui_constants__WEBPACK_IMPORTED_MODULE_3__.players.find((player)=>player.symbol === winnerSymbol);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_layout__WEBPACK_IMPORTED_MODULE_6__.GameLayout, {\n                backLink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_back_link__WEBPACK_IMPORTED_MODULE_2__.BackLink, {}, void 0, false, void 0, void 0),\n                gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_info__WEBPACK_IMPORTED_MODULE_5__.Gameinfo, {\n                    isRatingGame: true,\n                    playersCount: PLAYERS_COUNT,\n                    timeMode: \"1 минута на ход\"\n                }, void 0, false, void 0, void 0),\n                title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_title__WEBPACK_IMPORTED_MODULE_9__.Gametitle, {}, void 0, false, void 0, void 0),\n                playersList: _ui_constants__WEBPACK_IMPORTED_MODULE_3__.players.slice(0, PLAYERS_COUNT).map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_player_info__WEBPACK_IMPORTED_MODULE_10__.PlayerInfo, {\n                        avatar: player.avatar,\n                        name: player.name,\n                        rating: player.rating,\n                        seconds: 60,\n                        symbol: player.symbol,\n                        isRight: index % 2 === 1\n                    }, player.id, false, void 0, void 0)),\n                gameMoveInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__.GameMoveInfo, {\n                    currentMove: currentMove,\n                    nextMove: nextMove\n                }, void 0, false, void 0, void 0),\n                gameCells: cells.map((cell, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_cell__WEBPACK_IMPORTED_MODULE_4__.GameCell, {\n                        disabled: !!winnerSymbol,\n                        isWinner: winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence.includes(i),\n                        onClick: ()=>handleCellClick(i),\n                        symbol: cell\n                    }, i, false, void 0, void 0))\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 26,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_over_modal__WEBPACK_IMPORTED_MODULE_8__.GameOverModal, {\n                players: _ui_constants__WEBPACK_IMPORTED_MODULE_3__.players.slice(0, PLAYERS_COUNT).map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_player_info__WEBPACK_IMPORTED_MODULE_10__.PlayerInfo, {\n                        avatar: player.avatar,\n                        name: player.name,\n                        rating: player.rating,\n                        seconds: 60,\n                        symbol: player.symbol,\n                        isRight: index % 2 === 1\n                    }, player.id, false, void 0, void 0)),\n                winnerName: winnerPlayer === null || winnerPlayer === void 0 ? void 0 : winnerPlayer.name\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 60,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Game, \"EW++5KHSjR7TE+NbL6IhnNqTZrU=\", false, function() {\n    return [\n        _model_use_game_state__WEBPACK_IMPORTED_MODULE_1__.useGameState\n    ];\n});\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L2dhbWUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRDtBQUNaO0FBQ0Q7QUFDQztBQUNBO0FBQ0k7QUFDSztBQUNFO0FBQ1Q7QUFDRTtBQUU3QyxNQUFNVSxnQkFBZ0I7QUFDZixNQUFNQyxPQUFPOztJQUNuQixNQUFNLEVBQ0xDLEtBQUssRUFDTEMsV0FBVyxFQUNYQyxRQUFRLEVBQ1JDLGVBQWUsRUFDZkMsY0FBYyxFQUNkQyxZQUFZLEVBQ1osR0FBR2pCLG1FQUFZQSxDQUFDVTtJQUVqQixNQUFNUSxlQUFlaEIsa0RBQU9BLENBQUNpQixJQUFJLENBQUNDLENBQUFBLFNBQVVBLE9BQU9DLE1BQU0sS0FBS0o7SUFDOUQscUJBQ0M7OzBCQUNDLDhEQUFDWix1REFBVUE7Z0JBQ1ZpQix3QkFBVSw4REFBQ3JCLG1EQUFRQTtnQkFDbkJzQix3QkFDQyw4REFBQ25CLG1EQUFRQTtvQkFDUm9CLFlBQVk7b0JBQ1pDLGNBQWNmO29CQUNkZ0IsVUFBVTs7Z0JBR1pDLHFCQUFPLDhEQUFDbkIscURBQVNBO2dCQUNqQm9CLGFBQWExQixrREFBT0EsQ0FBQzJCLEtBQUssQ0FBQyxHQUFHbkIsZUFBZW9CLEdBQUcsQ0FBQyxDQUFDVixRQUFRVyxzQkFDekQsOERBQUN0Qix3REFBVUE7d0JBRVZ1QixRQUFRWixPQUFPWSxNQUFNO3dCQUNyQkMsTUFBTWIsT0FBT2EsSUFBSTt3QkFDakJDLFFBQVFkLE9BQU9jLE1BQU07d0JBQ3JCQyxTQUFTO3dCQUNUZCxRQUFRRCxPQUFPQyxNQUFNO3dCQUNyQmUsU0FBU0wsUUFBUSxNQUFNO3VCQU5sQlgsT0FBT2lCLEVBQUU7Z0JBU2hCQyw0QkFDQyw4REFBQ2hDLDREQUFZQTtvQkFBQ08sYUFBYUE7b0JBQWFDLFVBQVVBOztnQkFFbkR5QixXQUFXM0IsTUFBTWtCLEdBQUcsQ0FBQyxDQUFDVSxNQUFNQyxrQkFDM0IsOERBQUN0QyxtREFBUUE7d0JBQ1J1QyxVQUFVLENBQUMsQ0FBQ3pCO3dCQUNaMEIsUUFBUSxFQUFFM0IsMkJBQUFBLHFDQUFBQSxlQUFnQjRCLFFBQVEsQ0FBQ0g7d0JBRW5DSSxTQUFTLElBQU05QixnQkFBZ0IwQjt3QkFDL0JwQixRQUFRbUI7dUJBRkhDOzs7Ozs7MEJBTVIsOERBQUNsQyw4REFBYUE7Z0JBQ2JMLFNBQVNBLGtEQUFPQSxDQUFDMkIsS0FBSyxDQUFDLEdBQUduQixlQUFlb0IsR0FBRyxDQUFDLENBQUNWLFFBQVFXLHNCQUNyRCw4REFBQ3RCLHdEQUFVQTt3QkFFVnVCLFFBQVFaLE9BQU9ZLE1BQU07d0JBQ3JCQyxNQUFNYixPQUFPYSxJQUFJO3dCQUNqQkMsUUFBUWQsT0FBT2MsTUFBTTt3QkFDckJDLFNBQVM7d0JBQ1RkLFFBQVFELE9BQU9DLE1BQU07d0JBQ3JCZSxTQUFTTCxRQUFRLE1BQU07dUJBTmxCWCxPQUFPaUIsRUFBRTtnQkFTaEJTLFVBQVUsRUFBRTVCLHlCQUFBQSxtQ0FBQUEsYUFBY2UsSUFBSTs7Ozs7Ozs7QUFJbEMsRUFBQztHQS9EWXRCOztRQVFSWCwrREFBWUE7OztLQVJKVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUtbmV3L2dhbWUuanN4P2U0MmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlR2FtZVN0YXRlIH0gZnJvbSAnLi9tb2RlbC91c2UtZ2FtZS1zdGF0ZSdcclxuaW1wb3J0IHsgQmFja0xpbmsgfSBmcm9tICcuL3VpL2JhY2stbGluaydcclxuaW1wb3J0IHsgcGxheWVycyB9IGZyb20gJy4vdWkvY29uc3RhbnRzJ1xyXG5pbXBvcnQgeyBHYW1lQ2VsbCB9IGZyb20gJy4vdWkvZ2FtZS1jZWxsJ1xyXG5pbXBvcnQgeyBHYW1laW5mbyB9IGZyb20gJy4vdWkvZ2FtZS1pbmZvJ1xyXG5pbXBvcnQgeyBHYW1lTGF5b3V0IH0gZnJvbSAnLi91aS9nYW1lLWxheW91dCdcclxuaW1wb3J0IHsgR2FtZU1vdmVJbmZvIH0gZnJvbSAnLi91aS9nYW1lLW1vdmUtaW5mbydcclxuaW1wb3J0IHsgR2FtZU92ZXJNb2RhbCB9IGZyb20gJy4vdWkvZ2FtZS1vdmVyLW1vZGFsJ1xyXG5pbXBvcnQgeyBHYW1ldGl0bGUgfSBmcm9tICcuL3VpL2dhbWUtdGl0bGUnXHJcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tICcuL3VpL3BsYXllci1pbmZvJ1xyXG5cclxuY29uc3QgUExBWUVSU19DT1VOVCA9IDJcclxuZXhwb3J0IGNvbnN0IEdhbWUgPSAoKSA9PiB7XHJcblx0Y29uc3Qge1xyXG5cdFx0Y2VsbHMsXHJcblx0XHRjdXJyZW50TW92ZSxcclxuXHRcdG5leHRNb3ZlLFxyXG5cdFx0aGFuZGxlQ2VsbENsaWNrLFxyXG5cdFx0d2lubmVyU2VxdWVuY2UsXHJcblx0XHR3aW5uZXJTeW1ib2wsXHJcblx0fSA9IHVzZUdhbWVTdGF0ZShQTEFZRVJTX0NPVU5UKVxyXG5cclxuXHRjb25zdCB3aW5uZXJQbGF5ZXIgPSBwbGF5ZXJzLmZpbmQocGxheWVyID0+IHBsYXllci5zeW1ib2wgPT09IHdpbm5lclN5bWJvbClcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PEdhbWVMYXlvdXRcclxuXHRcdFx0XHRiYWNrTGluaz17PEJhY2tMaW5rIC8+fVxyXG5cdFx0XHRcdGdhbWVJbmZvPXtcclxuXHRcdFx0XHRcdDxHYW1laW5mb1xyXG5cdFx0XHRcdFx0XHRpc1JhdGluZ0dhbWVcclxuXHRcdFx0XHRcdFx0cGxheWVyc0NvdW50PXtQTEFZRVJTX0NPVU5UfVxyXG5cdFx0XHRcdFx0XHR0aW1lTW9kZT17JzEg0LzQuNC90YPRgtCwINC90LAg0YXQvtC0J31cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRpdGxlPXs8R2FtZXRpdGxlIC8+fVxyXG5cdFx0XHRcdHBsYXllcnNMaXN0PXtwbGF5ZXJzLnNsaWNlKDAsIFBMQVlFUlNfQ09VTlQpLm1hcCgocGxheWVyLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0PFBsYXllckluZm9cclxuXHRcdFx0XHRcdFx0a2V5PXtwbGF5ZXIuaWR9XHJcblx0XHRcdFx0XHRcdGF2YXRhcj17cGxheWVyLmF2YXRhcn1cclxuXHRcdFx0XHRcdFx0bmFtZT17cGxheWVyLm5hbWV9XHJcblx0XHRcdFx0XHRcdHJhdGluZz17cGxheWVyLnJhdGluZ31cclxuXHRcdFx0XHRcdFx0c2Vjb25kcz17NjB9XHJcblx0XHRcdFx0XHRcdHN5bWJvbD17cGxheWVyLnN5bWJvbH1cclxuXHRcdFx0XHRcdFx0aXNSaWdodD17aW5kZXggJSAyID09PSAxfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0XHRnYW1lTW92ZUluZm89e1xyXG5cdFx0XHRcdFx0PEdhbWVNb3ZlSW5mbyBjdXJyZW50TW92ZT17Y3VycmVudE1vdmV9IG5leHRNb3ZlPXtuZXh0TW92ZX0gLz5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Z2FtZUNlbGxzPXtjZWxscy5tYXAoKGNlbGwsIGkpID0+IChcclxuXHRcdFx0XHRcdDxHYW1lQ2VsbFxyXG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17ISF3aW5uZXJTeW1ib2x9XHJcblx0XHRcdFx0XHRcdGlzV2lubmVyPXt3aW5uZXJTZXF1ZW5jZT8uaW5jbHVkZXMoaSl9XHJcblx0XHRcdFx0XHRcdGtleT17aX1cclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlQ2VsbENsaWNrKGkpfVxyXG5cdFx0XHRcdFx0XHRzeW1ib2w9e2NlbGx9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8R2FtZU92ZXJNb2RhbFxyXG5cdFx0XHRcdHBsYXllcnM9e3BsYXllcnMuc2xpY2UoMCwgUExBWUVSU19DT1VOVCkubWFwKChwbGF5ZXIsIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHQ8UGxheWVySW5mb1xyXG5cdFx0XHRcdFx0XHRrZXk9e3BsYXllci5pZH1cclxuXHRcdFx0XHRcdFx0YXZhdGFyPXtwbGF5ZXIuYXZhdGFyfVxyXG5cdFx0XHRcdFx0XHRuYW1lPXtwbGF5ZXIubmFtZX1cclxuXHRcdFx0XHRcdFx0cmF0aW5nPXtwbGF5ZXIucmF0aW5nfVxyXG5cdFx0XHRcdFx0XHRzZWNvbmRzPXs2MH1cclxuXHRcdFx0XHRcdFx0c3ltYm9sPXtwbGF5ZXIuc3ltYm9sfVxyXG5cdFx0XHRcdFx0XHRpc1JpZ2h0PXtpbmRleCAlIDIgPT09IDF9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHRcdHdpbm5lck5hbWU9e3dpbm5lclBsYXllcj8ubmFtZX1cclxuXHRcdFx0Lz5cclxuXHRcdDwvPlxyXG5cdClcclxufVxyXG4iXSwibmFtZXMiOlsidXNlR2FtZVN0YXRlIiwiQmFja0xpbmsiLCJwbGF5ZXJzIiwiR2FtZUNlbGwiLCJHYW1laW5mbyIsIkdhbWVMYXlvdXQiLCJHYW1lTW92ZUluZm8iLCJHYW1lT3Zlck1vZGFsIiwiR2FtZXRpdGxlIiwiUGxheWVySW5mbyIsIlBMQVlFUlNfQ09VTlQiLCJHYW1lIiwiY2VsbHMiLCJjdXJyZW50TW92ZSIsIm5leHRNb3ZlIiwiaGFuZGxlQ2VsbENsaWNrIiwid2lubmVyU2VxdWVuY2UiLCJ3aW5uZXJTeW1ib2wiLCJ3aW5uZXJQbGF5ZXIiLCJmaW5kIiwicGxheWVyIiwic3ltYm9sIiwiYmFja0xpbmsiLCJnYW1lSW5mbyIsImlzUmF0aW5nR2FtZSIsInBsYXllcnNDb3VudCIsInRpbWVNb2RlIiwidGl0bGUiLCJwbGF5ZXJzTGlzdCIsInNsaWNlIiwibWFwIiwiaW5kZXgiLCJhdmF0YXIiLCJuYW1lIiwicmF0aW5nIiwic2Vjb25kcyIsImlzUmlnaHQiLCJpZCIsImdhbWVNb3ZlSW5mbyIsImdhbWVDZWxscyIsImNlbGwiLCJpIiwiZGlzYWJsZWQiLCJpc1dpbm5lciIsImluY2x1ZGVzIiwib25DbGljayIsIndpbm5lck5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game-new/game.jsx\n"));

/***/ })

});