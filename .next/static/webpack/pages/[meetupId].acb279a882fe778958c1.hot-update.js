webpackHotUpdate_N_E("pages/[meetupId]",{

/***/ "./pages/[meetupId].jsx":
/*!******************************!*\
  !*** ./pages/[meetupId].jsx ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/MeetupDetails.module.css */ "./styles/MeetupDetails.module.css");
/* harmony import */ var _styles_MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "E:\\Webdev\\nextjs-practice\\pages\\[meetupId].jsx",
    _this = undefined;




var MeetupDetails = function MeetupDetails() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props.meetupData;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _styles_MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.detailParent,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "https://static01.nyt.com/images/2022/12/20/science/16tb-cinnamon-bear/16tb-cinnamon-bear-articleLarge.jpg?quality=75&auto=webp",
      alt: "a bear sitting down"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: ["First Meetup", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: props.meetupId
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
      children: "wow an addy"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Description"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, _this);
}; // You only need this function if your using getStaticProps and its a dynamic page


_c = MeetupDetails;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (MeetupDetails);

var _c;

$RefreshReg$(_c, "MeetupDetails");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS5qc3giXSwibmFtZXMiOlsiTWVldHVwRGV0YWlscyIsInByb3BzIiwibWVldHVwRGF0YSIsInN0eWxlcyIsImRldGFpbFBhcmVudCIsIm1lZXR1cElkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUE4QjtBQUFBLE1BQTdCQyxLQUE2Qix1RUFBckJBLEtBQUssQ0FBQ0MsVUFBZTtBQUNuRCxzQkFDQztBQUFTLGFBQVMsRUFBRUMsdUVBQU0sQ0FBQ0MsWUFBM0I7QUFBQSw0QkFDQztBQUNDLFNBQUcsRUFBQyxnSUFETDtBQUVDLFNBQUcsRUFBQztBQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUtDO0FBQUEsOENBQ2E7QUFBQSxrQkFBT0gsS0FBSyxDQUFDSTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRCxlQVFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkQsZUFTQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBYUEsQ0FkRCxDLENBZ0JBOzs7S0FoQk1MLGE7O0FBa0VTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bbWVldHVwSWRdLmFjYjI3OWE4ODJmZTc3ODk1OGMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL01lZXR1cERldGFpbHMubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBNZWV0dXBEZXRhaWxzID0gKHByb3BzID0gcHJvcHMubWVldHVwRGF0YSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxQYXJlbnR9PlxyXG5cdFx0XHQ8aW1nXHJcblx0XHRcdFx0c3JjPVwiaHR0cHM6Ly9zdGF0aWMwMS5ueXQuY29tL2ltYWdlcy8yMDIyLzEyLzIwL3NjaWVuY2UvMTZ0Yi1jaW5uYW1vbi1iZWFyLzE2dGItY2lubmFtb24tYmVhci1hcnRpY2xlTGFyZ2UuanBnP3F1YWxpdHk9NzUmYXV0bz13ZWJwXCJcclxuXHRcdFx0XHRhbHQ9XCJhIGJlYXIgc2l0dGluZyBkb3duXCJcclxuXHRcdFx0Lz5cclxuXHRcdFx0PGgxPlxyXG5cdFx0XHRcdEZpcnN0IE1lZXR1cDxzcGFuPntwcm9wcy5tZWV0dXBJZH08L3NwYW4+XHJcblx0XHRcdDwvaDE+XHJcblx0XHRcdDxhZGRyZXNzPndvdyBhbiBhZGR5PC9hZGRyZXNzPlxyXG5cdFx0XHQ8cD5EZXNjcmlwdGlvbjwvcD5cclxuXHRcdDwvc2VjdGlvbj5cclxuXHQpO1xyXG59O1xyXG5cclxuLy8gWW91IG9ubHkgbmVlZCB0aGlzIGZ1bmN0aW9uIGlmIHlvdXIgdXNpbmcgZ2V0U3RhdGljUHJvcHMgYW5kIGl0cyBhIGR5bmFtaWMgcGFnZVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcblx0Ly8geW91IHdvdWxkIGdldCB5b3VyIGlkJ3MgZnJvbSBhIGRhdGFiYXNlIHRoZW4gcmVuZGVyIHRoZXNlIHBhcmFtcyBkeW5hbWljYWxseVxyXG5cdHJldHVybiB7XHJcblx0XHQvLyBmYWxsYmFjayB0byBmYWxzZSB3aWxsIHJlbmRlciA0MDQgaWYgYSB1c2VyIHdlbnQgdG8gL201LlxyXG5cdFx0Ly8gaWYgZmFsbGJhY2sgd2FzIHNldCB0byB0cnVlLCBpdCB3b3VsZCByZW5kZXIgdGhlIC9tNSBldmVuIGlmIHRoZSBwYXRoIGlzbnQgZGVmaW5lZC4gU28sIGlmIHlvdSBoYXZlIDEwMHMgb2YgcGFnZXMsIHlvdSBjYW4gc2V0IHlvdXIgbW9zdCBwb3B1bGFyIHBhZ2VzIGluIHRoZSBwYXRocyBhcnJheSBmb3IgZmFzdCBsb2FkaW5nLCB0aGVuIHJlbmRlciB0aGUgb3RoZXIgcGFnZXMgb25jZSB0aGUgdXNlciByZXF1ZXN0cyB0aGUgcGF0aFxyXG5cclxuXHRcdGZhbGxiYWNrOiBmYWxzZSxcclxuXHRcdHBhdGhzOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRcdG1lZXR1cElkOiAnbTEnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRcdG1lZXR1cElkOiAnbTInLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRcdG1lZXR1cElkOiAnbTMnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRcdG1lZXR1cElkOiAnbTQnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcblx0Ly8gZmV0Y2ggZGF0YSBmb3Igc2luZ2xlIG1lZXR1cFxyXG5cclxuXHRsZXQgbWVldHVwSWQgPSBjb250ZXh0LnBhcmFtcy5tZWV0dXBJZDtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0bWVldHVwRGF0YToge1xyXG5cdFx0XHRcdGlkOiBtZWV0dXBJZCxcclxuXHRcdFx0XHRpbWFnZTogJ2h0dHBzOi8vc3RhdGljMDEubnl0LmNvbS9pbWFnZXMvMjAyMi8xMi8yMC9zY2llbmNlLzE2dGItY2lubmFtb24tYmVhci8xNnRiLWNpbm5hbW9uLWJlYXItYXJ0aWNsZUxhcmdlLmpwZz9xdWFsaXR5PTc1JmF1dG89d2VicCcsXHJcblx0XHRcdFx0dGl0bGU6ICdGaXJzdCBNZWV0dXAnLFxyXG5cdFx0XHRcdGFkZHJlc3M6ICd3b3cgYW4gYWRkeScsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246ICdEZXNjcmlwdGlvbicsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=