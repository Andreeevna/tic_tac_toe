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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _model_computer_winner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/computer-winner */ \"./components/game-new/model/computer-winner.js\");\n/* harmony import */ var _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/game-state-reducer */ \"./components/game-new/model/game-state-reducer.js\");\n/* harmony import */ var _model_get_next_move__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/get-next-move */ \"./components/game-new/model/get-next-move.js\");\n/* harmony import */ var _ui_back_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/back-link */ \"./components/game-new/ui/back-link.jsx\");\n/* harmony import */ var _ui_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/constants */ \"./components/game-new/ui/constants.js\");\n/* harmony import */ var _ui_game_cell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/game-cell */ \"./components/game-new/ui/game-cell.jsx\");\n/* harmony import */ var _ui_game_info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/game-info */ \"./components/game-new/ui/game-info.jsx\");\n/* harmony import */ var _ui_game_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/game-layout */ \"./components/game-new/ui/game-layout.jsx\");\n/* harmony import */ var _ui_game_move_info__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/game-move-info */ \"./components/game-new/ui/game-move-info.jsx\");\n/* harmony import */ var _ui_game_over_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/game-over-modal */ \"./components/game-new/ui/game-over-modal.jsx\");\n/* harmony import */ var _ui_game_title__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui/game-title */ \"./components/game-new/ui/game-title.jsx\");\n/* harmony import */ var _ui_player_info__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ui/player-info */ \"./components/game-new/ui/player-info.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst PLAYERS_COUNT = 2;\nconst Game = ()=>{\n    _s();\n    const [gameState, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_model_game_state_reducer__WEBPACK_IMPORTED_MODULE_3__.gameStateReducer, {\n        playersCount: PLAYERS_COUNT\n    }, _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_3__.initGameState);\n    const winnerSequence = (0,_model_computer_winner__WEBPACK_IMPORTED_MODULE_2__.computerWinner)(gameState.cells);\n    const nextMove = (0,_model_get_next_move__WEBPACK_IMPORTED_MODULE_4__.getNextMove)(gameState.currentMove, gameState.playersCount, []);\n    const winnerPlayer = _ui_constants__WEBPACK_IMPORTED_MODULE_6__.players.find((player)=>player.symbol === winnerSymbol);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_layout__WEBPACK_IMPORTED_MODULE_9__.GameLayout, {\n                backLink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_back_link__WEBPACK_IMPORTED_MODULE_5__.BackLink, {}, void 0, false, void 0, void 0),\n                gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_info__WEBPACK_IMPORTED_MODULE_8__.Gameinfo, {\n                    isRatingGame: true,\n                    playersCount: PLAYERS_COUNT,\n                    timeMode: \"1 минута на ход\"\n                }, void 0, false, void 0, void 0),\n                title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_title__WEBPACK_IMPORTED_MODULE_12__.Gametitle, {}, void 0, false, void 0, void 0),\n                playersList: _ui_constants__WEBPACK_IMPORTED_MODULE_6__.players.slice(0, PLAYERS_COUNT).map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_player_info__WEBPACK_IMPORTED_MODULE_13__.PlayerInfo, {\n                        avatar: player.avatar,\n                        name: player.name,\n                        rating: player.rating,\n                        seconds: 60,\n                        symbol: player.symbol,\n                        isRight: index % 2 === 1\n                    }, player.id, false, void 0, void 0)),\n                gameMoveInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_move_info__WEBPACK_IMPORTED_MODULE_10__.GameMoveInfo, {\n                    currentMove: currentMove,\n                    nextMove: nextMove\n                }, void 0, false, void 0, void 0),\n                gameCells: cells.map((cell, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_cell__WEBPACK_IMPORTED_MODULE_7__.GameCell, {\n                        disabled: !!winnerSymbol,\n                        isWinner: winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence.includes(index),\n                        onClick: ()=>dispatch({\n                                type: _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_3__.GAME_STATE_ACTIONS.CELL_CLICK,\n                                index\n                            }),\n                        symbol: cell\n                    }, index, false, void 0, void 0))\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 37,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_over_modal__WEBPACK_IMPORTED_MODULE_11__.GameOverModal, {\n                players: _ui_constants__WEBPACK_IMPORTED_MODULE_6__.players.slice(0, PLAYERS_COUNT).map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_player_info__WEBPACK_IMPORTED_MODULE_13__.PlayerInfo, {\n                        avatar: player.avatar,\n                        name: player.name,\n                        rating: player.rating,\n                        seconds: 60,\n                        symbol: player.symbol,\n                        isRight: index % 2 === 1\n                    }, player.id, false, void 0, void 0)),\n                winnerName: winnerPlayer === null || winnerPlayer === void 0 ? void 0 : winnerPlayer.name\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 76,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Game, \"rpVK0oe/fLMgpCLE3jtNJl0k4P4=\");\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L2dhbWUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDc0I7QUFLckI7QUFDZ0I7QUFDVjtBQUNEO0FBQ0M7QUFDQTtBQUNJO0FBQ0s7QUFDRTtBQUNUO0FBQ0U7QUFFN0MsTUFBTWUsZ0JBQWdCO0FBRWYsTUFBTUMsT0FBTzs7SUFDbkIsTUFBTSxDQUFDQyxXQUFXQyxTQUFTLEdBQUdsQixpREFBVUEsQ0FDdkNHLHVFQUFnQkEsRUFDaEI7UUFBRWdCLGNBQWNKO0lBQWMsR0FDOUJYLG9FQUFhQTtJQUVkLE1BQU1nQixpQkFBaUJuQixzRUFBY0EsQ0FBQ2dCLFVBQVVJLEtBQUs7SUFDckQsTUFBTUMsV0FBV2pCLGlFQUFXQSxDQUMzQlksVUFBVU0sV0FBVyxFQUNyQk4sVUFBVUUsWUFBWSxFQUN0QixFQUFFO0lBR0gsTUFBTUssZUFBZWpCLGtEQUFPQSxDQUFDa0IsSUFBSSxDQUFDQyxDQUFBQSxTQUFVQSxPQUFPQyxNQUFNLEtBQUtDO0lBQzlELHFCQUNDOzswQkFDQyw4REFBQ2xCLHVEQUFVQTtnQkFDVm1CLHdCQUFVLDhEQUFDdkIsbURBQVFBO2dCQUNuQndCLHdCQUNDLDhEQUFDckIsbURBQVFBO29CQUNSc0IsWUFBWTtvQkFDWlosY0FBY0o7b0JBQ2RpQixVQUFVOztnQkFHWkMscUJBQU8sOERBQUNwQixzREFBU0E7Z0JBQ2pCcUIsYUFBYTNCLGtEQUFPQSxDQUFDNEIsS0FBSyxDQUFDLEdBQUdwQixlQUFlcUIsR0FBRyxDQUFDLENBQUNWLFFBQVFXLHNCQUN6RCw4REFBQ3ZCLHdEQUFVQTt3QkFFVndCLFFBQVFaLE9BQU9ZLE1BQU07d0JBQ3JCQyxNQUFNYixPQUFPYSxJQUFJO3dCQUNqQkMsUUFBUWQsT0FBT2MsTUFBTTt3QkFDckJDLFNBQVM7d0JBQ1RkLFFBQVFELE9BQU9DLE1BQU07d0JBQ3JCZSxTQUFTTCxRQUFRLE1BQU07dUJBTmxCWCxPQUFPaUIsRUFBRTtnQkFTaEJDLDRCQUNDLDhEQUFDakMsNkRBQVlBO29CQUFDWSxhQUFhQTtvQkFBYUQsVUFBVUE7O2dCQUVuRHVCLFdBQVd4QixNQUFNZSxHQUFHLENBQUMsQ0FBQ1UsTUFBTVQsc0JBQzNCLDhEQUFDN0IsbURBQVFBO3dCQUNSdUMsVUFBVSxDQUFDLENBQUNuQjt3QkFDWm9CLFFBQVEsRUFBRTVCLDJCQUFBQSxxQ0FBQUEsZUFBZ0I2QixRQUFRLENBQUNaO3dCQUVuQ2EsU0FBUyxJQUNSaEMsU0FBUztnQ0FDUmlDLE1BQU1qRCx5RUFBa0JBLENBQUNrRCxVQUFVO2dDQUNuQ2Y7NEJBQ0Q7d0JBRURWLFFBQVFtQjt1QkFQSFQ7Ozs7OzswQkFXUiw4REFBQ3pCLCtEQUFhQTtnQkFDYkwsU0FBU0Esa0RBQU9BLENBQUM0QixLQUFLLENBQUMsR0FBR3BCLGVBQWVxQixHQUFHLENBQUMsQ0FBQ1YsUUFBUVcsc0JBQ3JELDhEQUFDdkIsd0RBQVVBO3dCQUVWd0IsUUFBUVosT0FBT1ksTUFBTTt3QkFDckJDLE1BQU1iLE9BQU9hLElBQUk7d0JBQ2pCQyxRQUFRZCxPQUFPYyxNQUFNO3dCQUNyQkMsU0FBUzt3QkFDVGQsUUFBUUQsT0FBT0MsTUFBTTt3QkFDckJlLFNBQVNMLFFBQVEsTUFBTTt1QkFObEJYLE9BQU9pQixFQUFFO2dCQVNoQlUsVUFBVSxFQUFFN0IseUJBQUFBLG1DQUFBQSxhQUFjZSxJQUFJOzs7Ozs7OztBQUlsQyxFQUFDO0dBdkVZdkI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lLW5ldy9nYW1lLmpzeD9lNDJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29tcHV0ZXJXaW5uZXIgfSBmcm9tICcuL21vZGVsL2NvbXB1dGVyLXdpbm5lcidcclxuaW1wb3J0IHtcclxuXHRHQU1FX1NUQVRFX0FDVElPTlMsXHJcblx0Z2FtZVN0YXRlUmVkdWNlcixcclxuXHRpbml0R2FtZVN0YXRlLFxyXG59IGZyb20gJy4vbW9kZWwvZ2FtZS1zdGF0ZS1yZWR1Y2VyJ1xyXG5pbXBvcnQgeyBnZXROZXh0TW92ZSB9IGZyb20gJy4vbW9kZWwvZ2V0LW5leHQtbW92ZSdcclxuaW1wb3J0IHsgQmFja0xpbmsgfSBmcm9tICcuL3VpL2JhY2stbGluaydcclxuaW1wb3J0IHsgcGxheWVycyB9IGZyb20gJy4vdWkvY29uc3RhbnRzJ1xyXG5pbXBvcnQgeyBHYW1lQ2VsbCB9IGZyb20gJy4vdWkvZ2FtZS1jZWxsJ1xyXG5pbXBvcnQgeyBHYW1laW5mbyB9IGZyb20gJy4vdWkvZ2FtZS1pbmZvJ1xyXG5pbXBvcnQgeyBHYW1lTGF5b3V0IH0gZnJvbSAnLi91aS9nYW1lLWxheW91dCdcclxuaW1wb3J0IHsgR2FtZU1vdmVJbmZvIH0gZnJvbSAnLi91aS9nYW1lLW1vdmUtaW5mbydcclxuaW1wb3J0IHsgR2FtZU92ZXJNb2RhbCB9IGZyb20gJy4vdWkvZ2FtZS1vdmVyLW1vZGFsJ1xyXG5pbXBvcnQgeyBHYW1ldGl0bGUgfSBmcm9tICcuL3VpL2dhbWUtdGl0bGUnXHJcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tICcuL3VpL3BsYXllci1pbmZvJ1xyXG5cclxuY29uc3QgUExBWUVSU19DT1VOVCA9IDJcclxuXHJcbmV4cG9ydCBjb25zdCBHYW1lID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtnYW1lU3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoXHJcblx0XHRnYW1lU3RhdGVSZWR1Y2VyLFxyXG5cdFx0eyBwbGF5ZXJzQ291bnQ6IFBMQVlFUlNfQ09VTlQgfSxcclxuXHRcdGluaXRHYW1lU3RhdGVcclxuXHQpXHJcblx0Y29uc3Qgd2lubmVyU2VxdWVuY2UgPSBjb21wdXRlcldpbm5lcihnYW1lU3RhdGUuY2VsbHMpXHJcblx0Y29uc3QgbmV4dE1vdmUgPSBnZXROZXh0TW92ZShcclxuXHRcdGdhbWVTdGF0ZS5jdXJyZW50TW92ZSxcclxuXHRcdGdhbWVTdGF0ZS5wbGF5ZXJzQ291bnQsXHJcblx0XHRbXVxyXG5cdClcclxuXHJcblx0Y29uc3Qgd2lubmVyUGxheWVyID0gcGxheWVycy5maW5kKHBsYXllciA9PiBwbGF5ZXIuc3ltYm9sID09PSB3aW5uZXJTeW1ib2wpXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxHYW1lTGF5b3V0XHJcblx0XHRcdFx0YmFja0xpbms9ezxCYWNrTGluayAvPn1cclxuXHRcdFx0XHRnYW1lSW5mbz17XHJcblx0XHRcdFx0XHQ8R2FtZWluZm9cclxuXHRcdFx0XHRcdFx0aXNSYXRpbmdHYW1lXHJcblx0XHRcdFx0XHRcdHBsYXllcnNDb3VudD17UExBWUVSU19DT1VOVH1cclxuXHRcdFx0XHRcdFx0dGltZU1vZGU9eycxINC80LjQvdGD0YLQsCDQvdCwINGF0L7QtCd9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aXRsZT17PEdhbWV0aXRsZSAvPn1cclxuXHRcdFx0XHRwbGF5ZXJzTGlzdD17cGxheWVycy5zbGljZSgwLCBQTEFZRVJTX0NPVU5UKS5tYXAoKHBsYXllciwgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdDxQbGF5ZXJJbmZvXHJcblx0XHRcdFx0XHRcdGtleT17cGxheWVyLmlkfVxyXG5cdFx0XHRcdFx0XHRhdmF0YXI9e3BsYXllci5hdmF0YXJ9XHJcblx0XHRcdFx0XHRcdG5hbWU9e3BsYXllci5uYW1lfVxyXG5cdFx0XHRcdFx0XHRyYXRpbmc9e3BsYXllci5yYXRpbmd9XHJcblx0XHRcdFx0XHRcdHNlY29uZHM9ezYwfVxyXG5cdFx0XHRcdFx0XHRzeW1ib2w9e3BsYXllci5zeW1ib2x9XHJcblx0XHRcdFx0XHRcdGlzUmlnaHQ9e2luZGV4ICUgMiA9PT0gMX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdFx0Z2FtZU1vdmVJbmZvPXtcclxuXHRcdFx0XHRcdDxHYW1lTW92ZUluZm8gY3VycmVudE1vdmU9e2N1cnJlbnRNb3ZlfSBuZXh0TW92ZT17bmV4dE1vdmV9IC8+XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGdhbWVDZWxscz17Y2VsbHMubWFwKChjZWxsLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0PEdhbWVDZWxsXHJcblx0XHRcdFx0XHRcdGRpc2FibGVkPXshIXdpbm5lclN5bWJvbH1cclxuXHRcdFx0XHRcdFx0aXNXaW5uZXI9e3dpbm5lclNlcXVlbmNlPy5pbmNsdWRlcyhpbmRleCl9XHJcblx0XHRcdFx0XHRcdGtleT17aW5kZXh9XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogR0FNRV9TVEFURV9BQ1RJT05TLkNFTExfQ0xJQ0ssXHJcblx0XHRcdFx0XHRcdFx0XHRpbmRleCxcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHN5bWJvbD17Y2VsbH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxHYW1lT3Zlck1vZGFsXHJcblx0XHRcdFx0cGxheWVycz17cGxheWVycy5zbGljZSgwLCBQTEFZRVJTX0NPVU5UKS5tYXAoKHBsYXllciwgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdDxQbGF5ZXJJbmZvXHJcblx0XHRcdFx0XHRcdGtleT17cGxheWVyLmlkfVxyXG5cdFx0XHRcdFx0XHRhdmF0YXI9e3BsYXllci5hdmF0YXJ9XHJcblx0XHRcdFx0XHRcdG5hbWU9e3BsYXllci5uYW1lfVxyXG5cdFx0XHRcdFx0XHRyYXRpbmc9e3BsYXllci5yYXRpbmd9XHJcblx0XHRcdFx0XHRcdHNlY29uZHM9ezYwfVxyXG5cdFx0XHRcdFx0XHRzeW1ib2w9e3BsYXllci5zeW1ib2x9XHJcblx0XHRcdFx0XHRcdGlzUmlnaHQ9e2luZGV4ICUgMiA9PT0gMX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdFx0d2lubmVyTmFtZT17d2lubmVyUGxheWVyPy5uYW1lfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC8+XHJcblx0KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSZWR1Y2VyIiwiY29tcHV0ZXJXaW5uZXIiLCJHQU1FX1NUQVRFX0FDVElPTlMiLCJnYW1lU3RhdGVSZWR1Y2VyIiwiaW5pdEdhbWVTdGF0ZSIsImdldE5leHRNb3ZlIiwiQmFja0xpbmsiLCJwbGF5ZXJzIiwiR2FtZUNlbGwiLCJHYW1laW5mbyIsIkdhbWVMYXlvdXQiLCJHYW1lTW92ZUluZm8iLCJHYW1lT3Zlck1vZGFsIiwiR2FtZXRpdGxlIiwiUGxheWVySW5mbyIsIlBMQVlFUlNfQ09VTlQiLCJHYW1lIiwiZ2FtZVN0YXRlIiwiZGlzcGF0Y2giLCJwbGF5ZXJzQ291bnQiLCJ3aW5uZXJTZXF1ZW5jZSIsImNlbGxzIiwibmV4dE1vdmUiLCJjdXJyZW50TW92ZSIsIndpbm5lclBsYXllciIsImZpbmQiLCJwbGF5ZXIiLCJzeW1ib2wiLCJ3aW5uZXJTeW1ib2wiLCJiYWNrTGluayIsImdhbWVJbmZvIiwiaXNSYXRpbmdHYW1lIiwidGltZU1vZGUiLCJ0aXRsZSIsInBsYXllcnNMaXN0Iiwic2xpY2UiLCJtYXAiLCJpbmRleCIsImF2YXRhciIsIm5hbWUiLCJyYXRpbmciLCJzZWNvbmRzIiwiaXNSaWdodCIsImlkIiwiZ2FtZU1vdmVJbmZvIiwiZ2FtZUNlbGxzIiwiY2VsbCIsImRpc2FibGVkIiwiaXNXaW5uZXIiLCJpbmNsdWRlcyIsIm9uQ2xpY2siLCJ0eXBlIiwiQ0VMTF9DTElDSyIsIndpbm5lck5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game-new/game.jsx\n"));

/***/ })

});