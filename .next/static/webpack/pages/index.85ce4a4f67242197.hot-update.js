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

/***/ "./components/uikit/ui-modal.jsx":
/*!***************************************!*\
  !*** ./components/uikit/ui-modal.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UImodal: function() { return /* binding */ UImodal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n\n\n/**\r\n *\r\n * @param{{\r\n * width: 'md' | 'full'\r\n * }} props\r\n *\r\n */ const UImodal = (param)=>{\n    let { width = \"md\", className, children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"fixed inset-0 bg-slate-900/60 backdrop-blur pt-10 pb-10\", className),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"bg-white rounded-lg min-h-[320px] mx-auto relative\", \"flex flex-col \", {\n                md: \"max-w-[640px] w-full\",\n                full: \"mx-5\"\n            }[width]),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-8 h-8 rounded flex items-center justify-center bg-white/10 hover:bg-white/40 absolute top-0 -right-16 transition-colors\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CrossLightIcon, {\n                        className: \"w-4 h-4 text-white\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\uikit\\\\ui-modal.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\uikit\\\\ui-modal.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 5\n                }, undefined),\n                children\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\uikit\\\\ui-modal.jsx\",\n            lineNumber: 19,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\uikit\\\\ui-modal.jsx\",\n        lineNumber: 13,\n        columnNumber: 3\n    }, undefined);\n};\n_c = UImodal;\nUImodal.header = function UImodalHeader(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"px-6 pt-6 pb-4 text-2xl\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\uikit\\\\ui-modal.jsx\",\n        lineNumber: 37,\n        columnNumber: 3\n    }, this);\n};\nUImodal.body = function UImodalBody(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"px-6\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\uikit\\\\ui-modal.jsx\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, this);\n};\nUImodal.footer = function UImodalFooter(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"mt-auto px-6 flex gap-4 justify-end\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\uikit\\\\ui-modal.jsx\",\n        lineNumber: 47,\n        columnNumber: 3\n    }, this);\n};\nfunction CrossLightIcon(param) {\n    let { className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        className: className,\n        width: \"16\",\n        height: \"16\",\n        viewBox: \"0 0 16 16\",\n        fill: \"none\",\n        xmlns: \"http://www.w3.org/2000/svg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                d: \"M0.781396 16.0001C0.626858 16.0001 0.475783 15.9543 0.347281 15.8685C0.218778 15.7826 0.118621 15.6606 0.0594776 15.5178C0.00033466 15.3751 -0.0151369 15.218 0.0150198 15.0664C0.0451766 14.9148 0.119607 14.7756 0.228896 14.6664L14.6664 0.228853C14.8129 0.0823209 15.0117 0 15.2189 0C15.4261 0 15.6249 0.0823209 15.7714 0.228853C15.9179 0.375385 16.0002 0.574125 16.0002 0.781353C16.0002 0.988581 15.9179 1.18732 15.7714 1.33385L1.3339 15.7714C1.26141 15.844 1.17528 15.9016 1.08047 15.9408C0.985653 15.9801 0.884016 16.0002 0.781396 16.0001Z\",\n                fill: \"currentColor\"\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\uikit\\\\ui-modal.jsx\",\n                lineNumber: 63,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                d: \"M15.2189 16.0001C15.1163 16.0002 15.0146 15.9801 14.9198 15.9408C14.825 15.9016 14.7389 15.844 14.6664 15.7714L0.228896 1.33385C0.0823639 1.18732 4.30364e-05 0.988581 4.30364e-05 0.781353C4.30364e-05 0.574125 0.0823639 0.375385 0.228896 0.228853C0.375428 0.0823209 0.574168 0 0.781396 0C0.988624 0 1.18736 0.0823209 1.3339 0.228853L15.7714 14.6664C15.8807 14.7756 15.9551 14.9148 15.9853 15.0664C16.0154 15.218 16 15.3751 15.9408 15.5178C15.8817 15.6606 15.7815 15.7826 15.653 15.8685C15.5245 15.9543 15.3734 16.0001 15.2189 16.0001Z\",\n                fill: \"currentColor\"\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\uikit\\\\ui-modal.jsx\",\n                lineNumber: 67,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react\\\\REACT 2024\\\\ПРОЕКТЫ\\\\tic_tac_toe\\\\components\\\\uikit\\\\ui-modal.jsx\",\n        lineNumber: 55,\n        columnNumber: 3\n    }, this);\n}\n_c1 = CrossLightIcon;\nvar _c, _c1;\n$RefreshReg$(_c, \"UImodal\");\n$RefreshReg$(_c1, \"CrossLightIcon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Vpa2l0L3VpLW1vZGFsLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1QjtBQUV2Qjs7Ozs7O0NBTUMsR0FFTSxNQUFNQyxVQUFVO1FBQUMsRUFBRUMsUUFBUSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxFQUFFO0lBQzVELHFCQUNDLDhEQUFDQztRQUNBRixXQUFXSCxnREFBSUEsQ0FDZCwyREFDQUc7a0JBR0QsNEVBQUNFO1lBQ0FGLFdBQVdILGdEQUFJQSxDQUNkLHNEQUNBLGtCQUNBO2dCQUFFTSxJQUFJO2dCQUF3QkMsTUFBTTtZQUFPLENBQUMsQ0FBQ0wsTUFBTTs7OEJBR3BELDhEQUFDTTtvQkFBT0wsV0FBVTs4QkFDakIsNEVBQUNNO3dCQUFlTixXQUFVOzs7Ozs7Ozs7OztnQkFFMUJDOzs7Ozs7Ozs7Ozs7QUFJTCxFQUFDO0tBdEJZSDtBQXdCYkEsUUFBUVMsTUFBTSxHQUFHLFNBQVNDLGNBQWMsS0FBdUI7UUFBdkIsRUFBRVAsUUFBUSxFQUFFRCxTQUFTLEVBQUUsR0FBdkI7SUFDdkMscUJBQ0MsOERBQUNFO1FBQUlGLFdBQVdILGdEQUFJQSxDQUFDRyxXQUFXO2tCQUE2QkM7Ozs7OztBQUUvRDtBQUVBSCxRQUFRVyxJQUFJLEdBQUcsU0FBU0MsWUFBWSxLQUF1QjtRQUF2QixFQUFFVCxRQUFRLEVBQUVELFNBQVMsRUFBRSxHQUF2QjtJQUNuQyxxQkFBTyw4REFBQ0U7UUFBSUYsV0FBV0gsZ0RBQUlBLENBQUNHLFdBQVc7a0JBQVVDOzs7Ozs7QUFDbEQ7QUFFQUgsUUFBUWEsTUFBTSxHQUFHLFNBQVNDLGNBQWMsS0FBdUI7UUFBdkIsRUFBRVgsUUFBUSxFQUFFRCxTQUFTLEVBQUUsR0FBdkI7SUFDdkMscUJBQ0MsOERBQUNFO1FBQUlGLFdBQVdILGdEQUFJQSxDQUFDRyxXQUFXO2tCQUM5QkM7Ozs7OztBQUdKO0FBRUEsU0FBU0ssZUFBZSxLQUFhO1FBQWIsRUFBRU4sU0FBUyxFQUFFLEdBQWI7SUFDdkIscUJBQ0MsOERBQUNhO1FBQ0FiLFdBQVdBO1FBQ1hELE9BQU07UUFDTmUsUUFBTztRQUNQQyxTQUFRO1FBQ1JDLE1BQUs7UUFDTEMsT0FBTTs7MEJBRU4sOERBQUNDO2dCQUNBQyxHQUFFO2dCQUNGSCxNQUFLOzs7Ozs7MEJBRU4sOERBQUNFO2dCQUNBQyxHQUFFO2dCQUNGSCxNQUFLOzs7Ozs7Ozs7Ozs7QUFJVDtNQXBCU1YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aWtpdC91aS1tb2RhbC5qc3g/OGFhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbXt7XHJcbiAqIHdpZHRoOiAnbWQnIHwgJ2Z1bGwnXHJcbiAqIH19IHByb3BzXHJcbiAqXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IFVJbW9kYWwgPSAoeyB3aWR0aCA9ICdtZCcsIGNsYXNzTmFtZSwgY2hpbGRyZW4gfSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT17Y2xzeChcclxuXHRcdFx0XHQnZml4ZWQgaW5zZXQtMCBiZy1zbGF0ZS05MDAvNjAgYmFja2Ryb3AtYmx1ciBwdC0xMCBwYi0xMCcsXHJcblx0XHRcdFx0Y2xhc3NOYW1lXHJcblx0XHRcdCl9XHJcblx0XHQ+XHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRjbGFzc05hbWU9e2Nsc3goXHJcblx0XHRcdFx0XHQnYmctd2hpdGUgcm91bmRlZC1sZyBtaW4taC1bMzIwcHhdIG14LWF1dG8gcmVsYXRpdmUnLFxyXG5cdFx0XHRcdFx0J2ZsZXggZmxleC1jb2wgJyxcclxuXHRcdFx0XHRcdHsgbWQ6ICdtYXgtdy1bNjQwcHhdIHctZnVsbCcsIGZ1bGw6ICdteC01JyB9W3dpZHRoXVxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0ndy04IGgtOCByb3VuZGVkIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLXdoaXRlLzEwIGhvdmVyOmJnLXdoaXRlLzQwIGFic29sdXRlIHRvcC0wIC1yaWdodC0xNiB0cmFuc2l0aW9uLWNvbG9ycyc+XHJcblx0XHRcdFx0XHQ8Q3Jvc3NMaWdodEljb24gY2xhc3NOYW1lPSd3LTQgaC00IHRleHQtd2hpdGUnIC8+XHJcblx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuVUltb2RhbC5oZWFkZXIgPSBmdW5jdGlvbiBVSW1vZGFsSGVhZGVyKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzTmFtZSwgJ3B4LTYgcHQtNiBwYi00IHRleHQtMnhsJyl9PntjaGlsZHJlbn08L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcblVJbW9kYWwuYm9keSA9IGZ1bmN0aW9uIFVJbW9kYWxCb2R5KHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSB7XHJcblx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzTmFtZSwgJ3B4LTYnKX0+e2NoaWxkcmVufTwvZGl2PlxyXG59XHJcblxyXG5VSW1vZGFsLmZvb3RlciA9IGZ1bmN0aW9uIFVJbW9kYWxGb290ZXIoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3NOYW1lLCAnbXQtYXV0byBweC02IGZsZXggZ2FwLTQganVzdGlmeS1lbmQnKX0+XHJcblx0XHRcdHtjaGlsZHJlbn1cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZnVuY3Rpb24gQ3Jvc3NMaWdodEljb24oeyBjbGFzc05hbWUgfSkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8c3ZnXHJcblx0XHRcdGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG5cdFx0XHR3aWR0aD0nMTYnXHJcblx0XHRcdGhlaWdodD0nMTYnXHJcblx0XHRcdHZpZXdCb3g9JzAgMCAxNiAxNidcclxuXHRcdFx0ZmlsbD0nbm9uZSdcclxuXHRcdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG5cdFx0PlxyXG5cdFx0XHQ8cGF0aFxyXG5cdFx0XHRcdGQ9J00wLjc4MTM5NiAxNi4wMDAxQzAuNjI2ODU4IDE2LjAwMDEgMC40NzU3ODMgMTUuOTU0MyAwLjM0NzI4MSAxNS44Njg1QzAuMjE4Nzc4IDE1Ljc4MjYgMC4xMTg2MjEgMTUuNjYwNiAwLjA1OTQ3NzYgMTUuNTE3OEMwLjAwMDMzNDY2IDE1LjM3NTEgLTAuMDE1MTM2OSAxNS4yMTggMC4wMTUwMTk4IDE1LjA2NjRDMC4wNDUxNzY2IDE0LjkxNDggMC4xMTk2MDcgMTQuNzc1NiAwLjIyODg5NiAxNC42NjY0TDE0LjY2NjQgMC4yMjg4NTNDMTQuODEyOSAwLjA4MjMyMDkgMTUuMDExNyAwIDE1LjIxODkgMEMxNS40MjYxIDAgMTUuNjI0OSAwLjA4MjMyMDkgMTUuNzcxNCAwLjIyODg1M0MxNS45MTc5IDAuMzc1Mzg1IDE2LjAwMDIgMC41NzQxMjUgMTYuMDAwMiAwLjc4MTM1M0MxNi4wMDAyIDAuOTg4NTgxIDE1LjkxNzkgMS4xODczMiAxNS43NzE0IDEuMzMzODVMMS4zMzM5IDE1Ljc3MTRDMS4yNjE0MSAxNS44NDQgMS4xNzUyOCAxNS45MDE2IDEuMDgwNDcgMTUuOTQwOEMwLjk4NTY1MyAxNS45ODAxIDAuODg0MDE2IDE2LjAwMDIgMC43ODEzOTYgMTYuMDAwMVonXHJcblx0XHRcdFx0ZmlsbD0nY3VycmVudENvbG9yJ1xyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8cGF0aFxyXG5cdFx0XHRcdGQ9J00xNS4yMTg5IDE2LjAwMDFDMTUuMTE2MyAxNi4wMDAyIDE1LjAxNDYgMTUuOTgwMSAxNC45MTk4IDE1Ljk0MDhDMTQuODI1IDE1LjkwMTYgMTQuNzM4OSAxNS44NDQgMTQuNjY2NCAxNS43NzE0TDAuMjI4ODk2IDEuMzMzODVDMC4wODIzNjM5IDEuMTg3MzIgNC4zMDM2NGUtMDUgMC45ODg1ODEgNC4zMDM2NGUtMDUgMC43ODEzNTNDNC4zMDM2NGUtMDUgMC41NzQxMjUgMC4wODIzNjM5IDAuMzc1Mzg1IDAuMjI4ODk2IDAuMjI4ODUzQzAuMzc1NDI4IDAuMDgyMzIwOSAwLjU3NDE2OCAwIDAuNzgxMzk2IDBDMC45ODg2MjQgMCAxLjE4NzM2IDAuMDgyMzIwOSAxLjMzMzkgMC4yMjg4NTNMMTUuNzcxNCAxNC42NjY0QzE1Ljg4MDcgMTQuNzc1NiAxNS45NTUxIDE0LjkxNDggMTUuOTg1MyAxNS4wNjY0QzE2LjAxNTQgMTUuMjE4IDE2IDE1LjM3NTEgMTUuOTQwOCAxNS41MTc4QzE1Ljg4MTcgMTUuNjYwNiAxNS43ODE1IDE1Ljc4MjYgMTUuNjUzIDE1Ljg2ODVDMTUuNTI0NSAxNS45NTQzIDE1LjM3MzQgMTYuMDAwMSAxNS4yMTg5IDE2LjAwMDFaJ1xyXG5cdFx0XHRcdGZpbGw9J2N1cnJlbnRDb2xvcidcclxuXHRcdFx0Lz5cclxuXHRcdDwvc3ZnPlxyXG5cdClcclxufVxyXG4iXSwibmFtZXMiOlsiY2xzeCIsIlVJbW9kYWwiLCJ3aWR0aCIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiZGl2IiwibWQiLCJmdWxsIiwiYnV0dG9uIiwiQ3Jvc3NMaWdodEljb24iLCJoZWFkZXIiLCJVSW1vZGFsSGVhZGVyIiwiYm9keSIsIlVJbW9kYWxCb2R5IiwiZm9vdGVyIiwiVUltb2RhbEZvb3RlciIsInN2ZyIsImhlaWdodCIsInZpZXdCb3giLCJmaWxsIiwieG1sbnMiLCJwYXRoIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/uikit/ui-modal.jsx\n"));

/***/ })

});