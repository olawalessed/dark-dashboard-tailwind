self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/body/Landing.js":
/*!************************************!*\
  !*** ./components/body/Landing.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _SignupForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignupForm */ "./components/body/SignupForm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\user-pc\\Documents\\Dev\\Next\\choouse\\components\\body\\Landing.js",
    _this = undefined;




var Landing = function Landing() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {
      columns: "equal",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Row, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
          width: true,
          verticalAlign: "middle",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Header, {
            as: "h1",
            icon: true,
            textAlign: "left",
            children: ["Welcome to Choouse", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Header.Subheader, {
              children: "Reading premium content just got better, the more you read, the more you are rewarded."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignupForm__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
          width: 9,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
            src: "https://res.cloudinary.com/choouse/image/upload/v1627514320/image-from-rawpixel-id-479762-recolor.png",
            fluid: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, _this);
};

_c = Landing;
/* harmony default export */ __webpack_exports__["default"] = (Landing);

var _c;

$RefreshReg$(_c, "Landing");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ib2R5L0xhbmRpbmcuanMiXSwibmFtZXMiOlsiTGFuZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsc0JBQ1o7QUFBQSwyQkFDSSw4REFBQyxtREFBRDtBQUFNLGFBQU8sRUFBQyxPQUFkO0FBQUEsNkJBQ0ksOERBQUMsdURBQUQ7QUFBQSxnQ0FDSSw4REFBQywwREFBRDtBQUFhLGVBQUssTUFBbEI7QUFBbUIsdUJBQWEsRUFBQyxRQUFqQztBQUFBLGtDQUNBLDhEQUFDLHFEQUFEO0FBQVEsY0FBRSxFQUFDLElBQVg7QUFBZ0IsZ0JBQUksTUFBcEI7QUFBcUIscUJBQVMsRUFBQyxNQUEvQjtBQUFBLDBEQUVJLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEQSxlQU9BLDhEQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBV0ksOERBQUMsMERBQUQ7QUFBYSxlQUFLLEVBQUUsQ0FBcEI7QUFBQSxpQ0FDQSw4REFBQyxvREFBRDtBQUFPLGVBQUcsRUFBQyx1R0FBWDtBQUFtSCxpQkFBSztBQUF4SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURZO0FBQUEsQ0FBaEI7O0tBQU1BLE87QUF5QkosK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWExZDUwZDE2OGNiZjJkMmJkZWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlYWRlciwgSWNvbiwgSW1hZ2UsIEdyaWQsIEltYWdlR3JvdXAgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IFNpZ251cEZvcm0gZnJvbSAnLi9TaWdudXBGb3JtJ1xyXG5cclxuY29uc3QgTGFuZGluZyA9ICgpID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPEdyaWQgY29sdW1ucz0nZXF1YWwnPlxyXG4gICAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGggdmVydGljYWxBbGlnbj0nbWlkZGxlJz5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gxJyBpY29uIHRleHRBbGlnbj0nbGVmdCcgPlxyXG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWUgdG8gQ2hvb3VzZVxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIuU3ViaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWRpbmcgcHJlbWl1bSBjb250ZW50IGp1c3QgZ290IGJldHRlciwgdGhlIG1vcmUgeW91IHJlYWQsIHRoZSBtb3JlIHlvdSBhcmUgcmV3YXJkZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9IZWFkZXIuU3ViaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8U2lnbnVwRm9ybSAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezl9PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz0naHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vY2hvb3VzZS9pbWFnZS91cGxvYWQvdjE2Mjc1MTQzMjAvaW1hZ2UtZnJvbS1yYXdwaXhlbC1pZC00Nzk3NjItcmVjb2xvci5wbmcnIGZsdWlkIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IExhbmRpbmciXSwic291cmNlUm9vdCI6IiJ9