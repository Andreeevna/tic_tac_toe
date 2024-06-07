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

/***/ "./components/game/game-info.jsx":
/*!***************************************!*\
  !*** ./components/game/game-info.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameInfo: function() { return /* binding */ GameInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile */ \"./components/profile/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-symbol */ \"./components/game/game-symbol.jsx\");\n/* harmony import */ var _images_avatar1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/avatar1.png */ \"./components/game/images/avatar1.png\");\n/* harmony import */ var _images_avatar2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/avatar2.png */ \"./components/game/images/avatar2.png\");\n/* harmony import */ var _images_avatar3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/avatar3.png */ \"./components/game/images/avatar3.png\");\n/* harmony import */ var _images_avatar4_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/avatar4.png */ \"./components/game/images/avatar4.png\");\n\n\n\n\n\n\n\n\n\nconst players = [\n    {\n        id: 1,\n        name: \"Paromonov\",\n        rating: \"1230\",\n        avatar: _images_avatar1_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.CROSS\n    },\n    {\n        id: 2,\n        name: \"VereIntedinglapotur\",\n        rating: \"850\",\n        avatar: _images_avatar3_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.ZERO\n    },\n    {\n        id: 3,\n        name: \"Lara\",\n        rating: \"1440\",\n        avatar: _images_avatar2_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.TRINGLE\n    },\n    {\n        id: 4,\n        name: \"Долматов\",\n        rating: \"760\",\n        avatar: _images_avatar4_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.SQUARE\n    }\n];\nconst GameInfo = (param)=>{\n    let { className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 justify-between gap-3\"),\n        children: players.map((player)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerInfo, {\n                playerInfo: player\n            }, player.id, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 51,\n                columnNumber: 12\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n        lineNumber: 44,\n        columnNumber: 3\n    }, undefined);\n};\n_c = GameInfo;\nfunction PlayerInfo(param) {\n    let { playerInfo, isRight } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"relative\", isRight && \"order-3\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_profile__WEBPACK_IMPORTED_MODULE_2__.Profile, {\n                        className: \"w-[180px]\",\n                        name: playerInfo.name,\n                        rating: playerInfo.rating,\n                        avatar: playerInfo.avatar\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_4__.GameSymbol, {\n                            symbol: playerInfo.symbol\n                        }, void 0, false, {\n                            fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                            lineNumber: 68,\n                            columnNumber: 6\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 60,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"h-6 w-px bg-slate-200\", isRight && \"order-2\")\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 71,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"text-slate-900 text-lg font-semibold\", isRight && \"order-2\"),\n                children: \"01:08\"\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 74,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\game\\\\game-info.jsx\",\n        lineNumber: 59,\n        columnNumber: 3\n    }, this);\n}\n_c1 = PlayerInfo;\nvar _c, _c1;\n$RefreshReg$(_c, \"GameInfo\");\n$RefreshReg$(_c1, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1pbmZvLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFDYTtBQUNNO0FBQ0E7QUFFRztBQUNBO0FBQ0E7QUFDQTtBQUU3QyxNQUFNUSxVQUFVO0lBQ2Y7UUFDQ0MsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsUUFBUVIsMkRBQVVBO1FBQ2xCUyxRQUFRWCxvREFBWUEsQ0FBQ1ksS0FBSztJQUMzQjtJQUNBO1FBQ0NMLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLFFBQVFOLDJEQUFVQTtRQUNsQk8sUUFBUVgsb0RBQVlBLENBQUNhLElBQUk7SUFDMUI7SUFDQTtRQUNDTixJQUFJO1FBQ0pDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxRQUFRUCwyREFBVUE7UUFDbEJRLFFBQVFYLG9EQUFZQSxDQUFDYyxPQUFPO0lBQzdCO0lBQ0E7UUFDQ1AsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsUUFBUUwsMkRBQVVBO1FBQ2xCTSxRQUFRWCxvREFBWUEsQ0FBQ2UsTUFBTTtJQUM1QjtDQUNBO0FBRU0sTUFBTUMsV0FBVztRQUFDLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxxQkFDQyw4REFBQ0M7UUFDQUQsV0FBV25CLGdEQUFJQSxDQUNkbUIsV0FDQTtrQkFHQVgsUUFBUWEsR0FBRyxDQUFDQyxDQUFBQTtZQUNaLHFCQUFPLDhEQUFDQztnQkFBMkJDLFlBQVlGO2VBQXZCQSxPQUFPYixFQUFFOzs7OztRQUNsQzs7Ozs7O0FBR0gsRUFBQztLQWJZUztBQWViLFNBQVNLLFdBQVcsS0FBdUI7UUFBdkIsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUUsR0FBdkI7SUFDbkIscUJBQ0MsOERBQUNMO1FBQUlELFdBQVU7OzBCQUNkLDhEQUFDQztnQkFBSUQsV0FBV25CLGdEQUFJQSxDQUFDLFlBQVl5QixXQUFXOztrQ0FDM0MsOERBQUN4Qiw2Q0FBT0E7d0JBQ1BrQixXQUFVO3dCQUNWVCxNQUFNYyxXQUFXZCxJQUFJO3dCQUNyQkMsUUFBUWEsV0FBV2IsTUFBTTt3QkFDekJDLFFBQVFZLFdBQVdaLE1BQU07Ozs7OztrQ0FFMUIsOERBQUNRO3dCQUFJRCxXQUFVO2tDQUNkLDRFQUFDaEIsb0RBQVVBOzRCQUFDVSxRQUFRVyxXQUFXWCxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHdkMsOERBQUNPO2dCQUNBRCxXQUFXbkIsZ0RBQUlBLENBQUMseUJBQXlCeUIsV0FBVzs7Ozs7OzBCQUVyRCw4REFBQ0w7Z0JBQ0FELFdBQVduQixnREFBSUEsQ0FDZCx3Q0FDQXlCLFdBQVc7MEJBRVo7Ozs7Ozs7Ozs7OztBQUtKO01BM0JTRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1pbmZvLmpzeD9kMDQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXHJcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tICcuLi9wcm9maWxlJ1xyXG5pbXBvcnQgeyBHQU1FX1NZTUJPTFMgfSBmcm9tICcuL2NvbnN0YW50cydcclxuaW1wb3J0IHsgR2FtZVN5bWJvbCB9IGZyb20gJy4vZ2FtZS1zeW1ib2wnXHJcblxyXG5pbXBvcnQgYXZhdGFyU3JjMSBmcm9tICcuL2ltYWdlcy9hdmF0YXIxLnBuZydcclxuaW1wb3J0IGF2YXRhclNyYzMgZnJvbSAnLi9pbWFnZXMvYXZhdGFyMi5wbmcnXHJcbmltcG9ydCBhdmF0YXJTcmMyIGZyb20gJy4vaW1hZ2VzL2F2YXRhcjMucG5nJ1xyXG5pbXBvcnQgYXZhdGFyU3JjNCBmcm9tICcuL2ltYWdlcy9hdmF0YXI0LnBuZydcclxuXHJcbmNvbnN0IHBsYXllcnMgPSBbXHJcblx0e1xyXG5cdFx0aWQ6IDEsXHJcblx0XHRuYW1lOiAnUGFyb21vbm92JyxcclxuXHRcdHJhdGluZzogJzEyMzAnLFxyXG5cdFx0YXZhdGFyOiBhdmF0YXJTcmMxLFxyXG5cdFx0c3ltYm9sOiBHQU1FX1NZTUJPTFMuQ1JPU1MsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogMixcclxuXHRcdG5hbWU6ICdWZXJlSW50ZWRpbmdsYXBvdHVyJyxcclxuXHRcdHJhdGluZzogJzg1MCcsXHJcblx0XHRhdmF0YXI6IGF2YXRhclNyYzIsXHJcblx0XHRzeW1ib2w6IEdBTUVfU1lNQk9MUy5aRVJPLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6IDMsXHJcblx0XHRuYW1lOiAnTGFyYScsXHJcblx0XHRyYXRpbmc6ICcxNDQwJyxcclxuXHRcdGF2YXRhcjogYXZhdGFyU3JjMyxcclxuXHRcdHN5bWJvbDogR0FNRV9TWU1CT0xTLlRSSU5HTEUsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogNCxcclxuXHRcdG5hbWU6ICfQlNC+0LvQvNCw0YLQvtCyJyxcclxuXHRcdHJhdGluZzogJzc2MCcsXHJcblx0XHRhdmF0YXI6IGF2YXRhclNyYzQsXHJcblx0XHRzeW1ib2w6IEdBTUVfU1lNQk9MUy5TUVVBUkUsXHJcblx0fSxcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IEdhbWVJbmZvID0gKHsgY2xhc3NOYW1lIH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9e2Nsc3goXHJcblx0XHRcdFx0Y2xhc3NOYW1lLFxyXG5cdFx0XHRcdCdiZy13aGl0ZSByb3VuZGVkLTJ4bCBzaGFkb3ctbWQgcHgtOCBweS00IGdyaWQgZ3JpZC1jb2xzLTIganVzdGlmeS1iZXR3ZWVuIGdhcC0zJ1xyXG5cdFx0XHQpfVxyXG5cdFx0PlxyXG5cdFx0XHR7cGxheWVycy5tYXAocGxheWVyID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gPFBsYXllckluZm8ga2V5PXtwbGF5ZXIuaWR9IHBsYXllckluZm89e3BsYXllcn0gLz5cclxuXHRcdFx0fSl9XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFBsYXllckluZm8oeyBwbGF5ZXJJbmZvLCBpc1JpZ2h0IH0pIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZ2FwLTMgaXRlbXMtY2VudGVyJz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2Nsc3goJ3JlbGF0aXZlJywgaXNSaWdodCAmJiAnb3JkZXItMycpfT5cclxuXHRcdFx0XHQ8UHJvZmlsZVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSd3LVsxODBweF0nXHJcblx0XHRcdFx0XHRuYW1lPXtwbGF5ZXJJbmZvLm5hbWV9XHJcblx0XHRcdFx0XHRyYXRpbmc9e3BsYXllckluZm8ucmF0aW5nfVxyXG5cdFx0XHRcdFx0YXZhdGFyPXtwbGF5ZXJJbmZvLmF2YXRhcn1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTUgaC01IHJvdW5kZWQtZnVsbCBiZy13aGl0ZSBzaGFkb3cgYWJzb2x1dGUgLWxlZnQtMSAtdG9wLTEgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInPlxyXG5cdFx0XHRcdFx0PEdhbWVTeW1ib2wgc3ltYm9sPXtwbGF5ZXJJbmZvLnN5bWJvbH0gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRjbGFzc05hbWU9e2Nsc3goJ2gtNiB3LXB4IGJnLXNsYXRlLTIwMCcsIGlzUmlnaHQgJiYgJ29yZGVyLTInKX1cclxuXHRcdFx0PjwvZGl2PlxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbHN4KFxyXG5cdFx0XHRcdFx0J3RleHQtc2xhdGUtOTAwIHRleHQtbGcgZm9udC1zZW1pYm9sZCcsXHJcblx0XHRcdFx0XHRpc1JpZ2h0ICYmICdvcmRlci0yJ1xyXG5cdFx0XHRcdCl9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQwMTowOFxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG4iXSwibmFtZXMiOlsiY2xzeCIsIlByb2ZpbGUiLCJHQU1FX1NZTUJPTFMiLCJHYW1lU3ltYm9sIiwiYXZhdGFyU3JjMSIsImF2YXRhclNyYzMiLCJhdmF0YXJTcmMyIiwiYXZhdGFyU3JjNCIsInBsYXllcnMiLCJpZCIsIm5hbWUiLCJyYXRpbmciLCJhdmF0YXIiLCJzeW1ib2wiLCJDUk9TUyIsIlpFUk8iLCJUUklOR0xFIiwiU1FVQVJFIiwiR2FtZUluZm8iLCJjbGFzc05hbWUiLCJkaXYiLCJtYXAiLCJwbGF5ZXIiLCJQbGF5ZXJJbmZvIiwicGxheWVySW5mbyIsImlzUmlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/game-info.jsx\n"));

/***/ })

});