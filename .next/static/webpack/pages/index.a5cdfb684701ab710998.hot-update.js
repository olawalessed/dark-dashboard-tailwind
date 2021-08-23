self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/AuthForm.js":
/*!********************************!*\
  !*** ./components/AuthForm.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AuthForm; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/AuthForm.module.css */ "./styles/AuthForm.module.css");
/* harmony import */ var _styles_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\user-pc\\Documents\\Dev\\Next\\choouse\\components\\AuthForm.js",
    _s = $RefreshSig$();




function AuthForm() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      password = _useState2[0],
      setPassword = _useState2[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    console.log({
      email: email,
      password: password
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_2___default().auth),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: "Admin Login"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "email",
        className: (_styles_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),
        children: "Email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "email",
        id: "email",
        value: email,
        onChange: function onChange(e) {
          return setEmail(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "email",
        className: (_styles_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),
        children: "Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "password",
        id: "password",
        value: password,
        onChange: function onChange(e) {
          return setPassword(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
        className: (_styles_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn),
        secondary: true,
        fluid: true,
        children: "Log In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 7
  }, this);
}

_s(AuthForm, "3B3pqDcVnkT+z/sPK6Z9zQsLP+s=");

_c = AuthForm;

var _c;

$RefreshReg$(_c, "AuthForm");

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


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/AuthForm.module.css":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/AuthForm.module.css ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".AuthForm_auth__2lABj {\r\n    max-width: 450px;\r\n    margin: auto;\r\n    padding: 30px;\r\n    -webkit-box-shadow: 0px 10px 20px 0px #a4c2ce4b;\r\n            box-shadow: 0px 10px 20px 0px #a4c2ce4b;\r\n    border-radius: 10px;\r\n}\r\n\r\n.AuthForm_auth__2lABj label {\r\n    display: block;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.AuthForm_auth__2lABj input[type='text'],\r\n.AuthForm_auth__2lABj input[type='email'],\r\n.AuthForm_auth__2lABj input[type='password'] {\r\n  display: block;\r\n  width: 100%;\r\n  height: 40px;\r\n  padding: 5px;\r\n  font-size: 18px;\r\n  border-radius: 5px;\r\n  border-style: none;\r\n  padding-left: 15px;\r\n}\r\n\r\n.AuthForm_auth__2lABj input[type='submit'] {\r\n  margin-top: 20px;\r\n  width: 100%;\r\n  font-size: 17px;\r\n}\r\n\r\n.AuthForm_auth__2lABj div {\r\n  margin-bottom: 20px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.AuthForm_auth__2lABj a {\r\n    color: royalblue;\r\n    font-weight: 500;\r\n    text-decoration: underline;\r\n    padding-left: 5px;\r\n}\r\n\r\n.AuthForm_btn__C9exZ {\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n}", "",{"version":3,"sources":["webpack://styles/AuthForm.module.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,+CAAuC;YAAvC,uCAAuC;IACvC,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,mBAAmB;AACvB;;AAEA;;;EAGE,cAAc;EACd,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,0BAA0B;IAC1B,iBAAiB;AACrB;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;AACtB","sourcesContent":[".auth {\r\n    max-width: 450px;\r\n    margin: auto;\r\n    padding: 30px;\r\n    box-shadow: 0px 10px 20px 0px #a4c2ce4b;\r\n    border-radius: 10px;\r\n}\r\n\r\n.auth label {\r\n    display: block;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.auth input[type='text'],\r\n.auth input[type='email'],\r\n.auth input[type='password'] {\r\n  display: block;\r\n  width: 100%;\r\n  height: 40px;\r\n  padding: 5px;\r\n  font-size: 18px;\r\n  border-radius: 5px;\r\n  border-style: none;\r\n  padding-left: 15px;\r\n}\r\n\r\n.auth input[type='submit'] {\r\n  margin-top: 20px;\r\n  width: 100%;\r\n  font-size: 17px;\r\n}\r\n\r\n.auth div {\r\n  margin-bottom: 20px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.auth a {\r\n    color: royalblue;\r\n    font-weight: 500;\r\n    text-decoration: underline;\r\n    padding-left: 5px;\r\n}\r\n\r\n.btn {\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"auth": "AuthForm_auth__2lABj",
	"btn": "AuthForm_btn__C9exZ"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRoRm9ybS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0F1dGhGb3JtLm1vZHVsZS5jc3MiXSwibmFtZXMiOlsiQXV0aEZvcm0iLCJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFFTEMsK0NBQVEsQ0FBQyxFQUFELENBRkg7QUFBQSxNQUV4QkMsS0FGd0I7QUFBQSxNQUVqQkMsUUFGaUI7O0FBQUEsbUJBR0NGLCtDQUFRLENBQUMsRUFBRCxDQUhUO0FBQUEsTUFHeEJHLFFBSHdCO0FBQUEsTUFHZEMsV0FIYzs7QUFLL0IsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsQ0FBQyxFQUFJO0FBQ3RCQSxLQUFDLENBQUNDLGNBQUY7QUFHQUMsV0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBQ1IsV0FBSyxFQUFMQSxLQUFEO0FBQVFFLGNBQVEsRUFBUkE7QUFBUixLQUFaO0FBQ0gsR0FMRDs7QUFNQSxzQkFDRTtBQUFLLGFBQVMsRUFBRU8seUVBQWhCO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUdFO0FBQU0sY0FBUSxFQUFFTCxZQUFoQjtBQUFBLDhCQUNFO0FBQU8sZUFBTyxFQUFDLE9BQWY7QUFBdUIsaUJBQVMsRUFBRUssMEVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUNFLFlBQUksRUFBQyxPQURQO0FBRUUsVUFBRSxFQUFDLE9BRkw7QUFHRSxhQUFLLEVBQUVULEtBSFQ7QUFJRSxnQkFBUSxFQUFFLGtCQUFDSyxDQUFEO0FBQUEsaUJBQU9KLFFBQVEsQ0FBQ0ksQ0FBQyxDQUFDSyxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBVUU7QUFBTyxlQUFPLEVBQUMsT0FBZjtBQUF1QixpQkFBUyxFQUFFRiwwRUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRixlQWFFO0FBQ0UsWUFBSSxFQUFDLFVBRFA7QUFFRSxVQUFFLEVBQUMsVUFGTDtBQUdFLGFBQUssRUFBRVAsUUFIVDtBQUlFLGdCQUFRLEVBQUUsa0JBQUNHLENBQUQ7QUFBQSxpQkFBT0YsV0FBVyxDQUFDRSxDQUFDLENBQUNLLE1BQUYsQ0FBU0MsS0FBVixDQUFsQjtBQUFBO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGLGVBbUJFLDhEQUFDLHFEQUFEO0FBQ0UsaUJBQVMsRUFBRUYsd0VBRGI7QUFFRSxpQkFBUyxNQUZYO0FBR0UsYUFBSyxNQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBK0JIOztHQTFDdUJYLFE7O0tBQUFBLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKeEI7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxpSEFBc0Q7QUFDaEc7QUFDQTtBQUNBLGlFQUFpRSx5QkFBeUIscUJBQXFCLHNCQUFzQix3REFBd0Qsd0RBQXdELDRCQUE0QixLQUFLLHFDQUFxQyx1QkFBdUIsNEJBQTRCLEtBQUssaUpBQWlKLHFCQUFxQixrQkFBa0IsbUJBQW1CLG1CQUFtQixzQkFBc0IseUJBQXlCLHlCQUF5Qix5QkFBeUIsS0FBSyxvREFBb0QsdUJBQXVCLGtCQUFrQixzQkFBc0IsS0FBSyxtQ0FBbUMsMEJBQTBCLHVCQUF1QixLQUFLLGlDQUFpQyx5QkFBeUIseUJBQXlCLG1DQUFtQywwQkFBMEIsS0FBSyw4QkFBOEIsd0JBQXdCLDJCQUEyQixLQUFLLE9BQU8sMkZBQTJGLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGlDQUFpQyx5QkFBeUIscUJBQXFCLHNCQUFzQixnREFBZ0QsNEJBQTRCLEtBQUsscUJBQXFCLHVCQUF1Qiw0QkFBNEIsS0FBSyxpR0FBaUcscUJBQXFCLGtCQUFrQixtQkFBbUIsbUJBQW1CLHNCQUFzQix5QkFBeUIseUJBQXlCLHlCQUF5QixLQUFLLG9DQUFvQyx1QkFBdUIsa0JBQWtCLHNCQUFzQixLQUFLLG1CQUFtQiwwQkFBMEIsdUJBQXVCLEtBQUssaUJBQWlCLHlCQUF5Qix5QkFBeUIsbUNBQW1DLDBCQUEwQixLQUFLLGNBQWMsd0JBQXdCLDJCQUEyQixLQUFLLG1CQUFtQjtBQUNoZ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE1Y2RmYjY4NDcwMWFiNzEwOTk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0F1dGhGb3JtLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aEZvcm0oKSB7XHJcblxyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coe2VtYWlsLCBwYXNzd29yZH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF1dGh9PlxyXG4gICAgICAgIDxoMz5BZG1pbiBMb2dpbjwvaDM+XHJcblxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgRW1haWxcclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgUGFzc3dvcmRcclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idG59XHJcbiAgICAgICAgICAgIHNlY29uZGFyeVxyXG4gICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICA+TG9nIEluPC9CdXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkF1dGhGb3JtX2F1dGhfXzJsQUJqIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggMHB4ICNhNGMyY2U0YjtcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IDBweCAjYTRjMmNlNGI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5BdXRoRm9ybV9hdXRoX18ybEFCaiBsYWJlbCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uQXV0aEZvcm1fYXV0aF9fMmxBQmogaW5wdXRbdHlwZT0ndGV4dCddLFxcclxcbi5BdXRoRm9ybV9hdXRoX18ybEFCaiBpbnB1dFt0eXBlPSdlbWFpbCddLFxcclxcbi5BdXRoRm9ybV9hdXRoX18ybEFCaiBpbnB1dFt0eXBlPSdwYXNzd29yZCddIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5BdXRoRm9ybV9hdXRoX18ybEFCaiBpbnB1dFt0eXBlPSdzdWJtaXQnXSB7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxufVxcclxcblxcclxcbi5BdXRoRm9ybV9hdXRoX18ybEFCaiBkaXYge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5BdXRoRm9ybV9hdXRoX18ybEFCaiBhIHtcXHJcXG4gICAgY29sb3I6IHJveWFsYmx1ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uQXV0aEZvcm1fYnRuX19DOWV4WiB7XFxyXFxuICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL0F1dGhGb3JtLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYiwrQ0FBdUM7WUFBdkMsdUNBQXVDO0lBQ3ZDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7OztFQUdFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsaUJBQWlCO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYXV0aCB7XFxyXFxuICAgIG1heC13aWR0aDogNDUwcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCAwcHggI2E0YzJjZTRiO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXV0aCBsYWJlbCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXV0aCBpbnB1dFt0eXBlPSd0ZXh0J10sXFxyXFxuLmF1dGggaW5wdXRbdHlwZT0nZW1haWwnXSxcXHJcXG4uYXV0aCBpbnB1dFt0eXBlPSdwYXNzd29yZCddIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5hdXRoIGlucHV0W3R5cGU9J3N1Ym1pdCddIHtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmF1dGggZGl2IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXV0aCBhIHtcXHJcXG4gICAgY29sb3I6IHJveWFsYmx1ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImF1dGhcIjogXCJBdXRoRm9ybV9hdXRoX18ybEFCalwiLFxuXHRcImJ0blwiOiBcIkF1dGhGb3JtX2J0bl9fQzlleFpcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9