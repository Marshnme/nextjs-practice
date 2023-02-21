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




var MeetupDetails = function MeetupDetails(_ref) {
  var meetupData = _ref.meetupData;
  console.log(meetupData);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _styles_MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.detailParent,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "https://static01.nyt.com/images/2022/12/20/science/16tb-cinnamon-bear/16tb-cinnamon-bear-articleLarge.jpg?quality=75&auto=webp",
      alt: "a bear sitting down"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: ["First Meetup", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: [" ID:", meetupData.id]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
      children: "wow an addy"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Description"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS5qc3giXSwibmFtZXMiOlsiTWVldHVwRGV0YWlscyIsIm1lZXR1cERhdGEiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiZGV0YWlsUGFyZW50IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQW9CO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjtBQUN6Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLFVBQVo7QUFDQSxzQkFDQztBQUFTLGFBQVMsRUFBRUcsdUVBQU0sQ0FBQ0MsWUFBM0I7QUFBQSw0QkFDQztBQUNDLFNBQUcsRUFBQyxnSUFETDtBQUVDLFNBQUcsRUFBQztBQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUtDO0FBQUEsOENBQ2E7QUFBQSwyQkFBV0osVUFBVSxDQUFDSyxFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRCxlQVFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkQsZUFTQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBYUEsQ0FmRCxDLENBaUJBOzs7S0FqQk1OLGE7O0FBbUVTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bbWVldHVwSWRdLmFhNWViNzk2OWVjMTU4M2FlMTA0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL01lZXR1cERldGFpbHMubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBNZWV0dXBEZXRhaWxzID0gKHsgbWVldHVwRGF0YSB9KSA9PiB7XHJcblx0Y29uc29sZS5sb2cobWVldHVwRGF0YSk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbFBhcmVudH0+XHJcblx0XHRcdDxpbWdcclxuXHRcdFx0XHRzcmM9XCJodHRwczovL3N0YXRpYzAxLm55dC5jb20vaW1hZ2VzLzIwMjIvMTIvMjAvc2NpZW5jZS8xNnRiLWNpbm5hbW9uLWJlYXIvMTZ0Yi1jaW5uYW1vbi1iZWFyLWFydGljbGVMYXJnZS5qcGc/cXVhbGl0eT03NSZhdXRvPXdlYnBcIlxyXG5cdFx0XHRcdGFsdD1cImEgYmVhciBzaXR0aW5nIGRvd25cIlxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8aDE+XHJcblx0XHRcdFx0Rmlyc3QgTWVldHVwPHNwYW4+IElEOnttZWV0dXBEYXRhLmlkfTwvc3Bhbj5cclxuXHRcdFx0PC9oMT5cclxuXHRcdFx0PGFkZHJlc3M+d293IGFuIGFkZHk8L2FkZHJlc3M+XHJcblx0XHRcdDxwPkRlc2NyaXB0aW9uPC9wPlxyXG5cdFx0PC9zZWN0aW9uPlxyXG5cdCk7XHJcbn07XHJcblxyXG4vLyBZb3Ugb25seSBuZWVkIHRoaXMgZnVuY3Rpb24gaWYgeW91ciB1c2luZyBnZXRTdGF0aWNQcm9wcyBhbmQgaXRzIGEgZHluYW1pYyBwYWdlXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuXHQvLyB5b3Ugd291bGQgZ2V0IHlvdXIgaWQncyBmcm9tIGEgZGF0YWJhc2UgdGhlbiByZW5kZXIgdGhlc2UgcGFyYW1zIGR5bmFtaWNhbGx5XHJcblx0cmV0dXJuIHtcclxuXHRcdC8vIGZhbGxiYWNrIHRvIGZhbHNlIHdpbGwgcmVuZGVyIDQwNCBpZiBhIHVzZXIgd2VudCB0byAvbTUuXHJcblx0XHQvLyBpZiBmYWxsYmFjayB3YXMgc2V0IHRvIHRydWUsIGl0IHdvdWxkIHJlbmRlciB0aGUgL201IGV2ZW4gaWYgdGhlIHBhdGggaXNudCBkZWZpbmVkLiBTbywgaWYgeW91IGhhdmUgMTAwcyBvZiBwYWdlcywgeW91IGNhbiBzZXQgeW91ciBtb3N0IHBvcHVsYXIgcGFnZXMgaW4gdGhlIHBhdGhzIGFycmF5IGZvciBmYXN0IGxvYWRpbmcsIHRoZW4gcmVuZGVyIHRoZSBvdGhlciBwYWdlcyBvbmNlIHRoZSB1c2VyIHJlcXVlc3RzIHRoZSBwYXRoXHJcblxyXG5cdFx0ZmFsbGJhY2s6IGZhbHNlLFxyXG5cdFx0cGF0aHM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdFx0bWVldHVwSWQ6ICdtMScsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdFx0bWVldHVwSWQ6ICdtMicsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdFx0bWVldHVwSWQ6ICdtMycsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdFx0bWVldHVwSWQ6ICdtNCcsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuXHQvLyBmZXRjaCBkYXRhIGZvciBzaW5nbGUgbWVldHVwXHJcblxyXG5cdGxldCBtZWV0dXBJZCA9IGNvbnRleHQucGFyYW1zLm1lZXR1cElkO1xyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRtZWV0dXBEYXRhOiB7XHJcblx0XHRcdFx0aWQ6IG1lZXR1cElkLFxyXG5cdFx0XHRcdGltYWdlOiAnaHR0cHM6Ly9zdGF0aWMwMS5ueXQuY29tL2ltYWdlcy8yMDIyLzEyLzIwL3NjaWVuY2UvMTZ0Yi1jaW5uYW1vbi1iZWFyLzE2dGItY2lubmFtb24tYmVhci1hcnRpY2xlTGFyZ2UuanBnP3F1YWxpdHk9NzUmYXV0bz13ZWJwJyxcclxuXHRcdFx0XHR0aXRsZTogJ0ZpcnN0IE1lZXR1cCcsXHJcblx0XHRcdFx0YWRkcmVzczogJ3dvdyBhbiBhZGR5JyxcclxuXHRcdFx0XHRkZXNjcmlwdGlvbjogJ0Rlc2NyaXB0aW9uJyxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlscztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==