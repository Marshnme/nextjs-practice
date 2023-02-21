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
  var id = meetupData.id;
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
      children: "First Meetup"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [" ID: ", id]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS5qc3giXSwibmFtZXMiOlsiTWVldHVwRGV0YWlscyIsIm1lZXR1cERhdGEiLCJpZCIsInN0eWxlcyIsImRldGFpbFBhcmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBb0I7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCO0FBQUEsTUFDbkNDLEVBRG1DLEdBQzVCRCxVQUQ0QixDQUNuQ0MsRUFEbUM7QUFFekMsc0JBQ0M7QUFBUyxhQUFTLEVBQUVDLHVFQUFNLENBQUNDLFlBQTNCO0FBQUEsNEJBQ0M7QUFDQyxTQUFHLEVBQUMsZ0lBREw7QUFFQyxTQUFHLEVBQUM7QUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFLQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxELGVBTUM7QUFBQSwwQkFBWUYsRUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORCxlQU9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEQsZUFRQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBWUEsQ0FkRCxDLENBZ0JBOzs7S0FoQk1GLGE7O0FBa0VTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bbWVldHVwSWRdLjVmOWVjNzMxMzdiNThmNGZhMzRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL01lZXR1cERldGFpbHMubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBNZWV0dXBEZXRhaWxzID0gKHsgbWVldHVwRGF0YSB9KSA9PiB7XHJcblx0bGV0IHsgaWQgfSA9IG1lZXR1cERhdGE7XHJcblx0cmV0dXJuIChcclxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbFBhcmVudH0+XHJcblx0XHRcdDxpbWdcclxuXHRcdFx0XHRzcmM9XCJodHRwczovL3N0YXRpYzAxLm55dC5jb20vaW1hZ2VzLzIwMjIvMTIvMjAvc2NpZW5jZS8xNnRiLWNpbm5hbW9uLWJlYXIvMTZ0Yi1jaW5uYW1vbi1iZWFyLWFydGljbGVMYXJnZS5qcGc/cXVhbGl0eT03NSZhdXRvPXdlYnBcIlxyXG5cdFx0XHRcdGFsdD1cImEgYmVhciBzaXR0aW5nIGRvd25cIlxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8aDE+Rmlyc3QgTWVldHVwPC9oMT5cclxuXHRcdFx0PHNwYW4+IElEOiB7aWR9PC9zcGFuPlxyXG5cdFx0XHQ8YWRkcmVzcz53b3cgYW4gYWRkeTwvYWRkcmVzcz5cclxuXHRcdFx0PHA+RGVzY3JpcHRpb248L3A+XHJcblx0XHQ8L3NlY3Rpb24+XHJcblx0KTtcclxufTtcclxuXHJcbi8vIFlvdSBvbmx5IG5lZWQgdGhpcyBmdW5jdGlvbiBpZiB5b3VyIHVzaW5nIGdldFN0YXRpY1Byb3BzIGFuZCBpdHMgYSBkeW5hbWljIHBhZ2VcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG5cdC8vIHlvdSB3b3VsZCBnZXQgeW91ciBpZCdzIGZyb20gYSBkYXRhYmFzZSB0aGVuIHJlbmRlciB0aGVzZSBwYXJhbXMgZHluYW1pY2FsbHlcclxuXHRyZXR1cm4ge1xyXG5cdFx0Ly8gZmFsbGJhY2sgdG8gZmFsc2Ugd2lsbCByZW5kZXIgNDA0IGlmIGEgdXNlciB3ZW50IHRvIC9tNS5cclxuXHRcdC8vIGlmIGZhbGxiYWNrIHdhcyBzZXQgdG8gdHJ1ZSwgaXQgd291bGQgcmVuZGVyIHRoZSAvbTUgZXZlbiBpZiB0aGUgcGF0aCBpc250IGRlZmluZWQuIFNvLCBpZiB5b3UgaGF2ZSAxMDBzIG9mIHBhZ2VzLCB5b3UgY2FuIHNldCB5b3VyIG1vc3QgcG9wdWxhciBwYWdlcyBpbiB0aGUgcGF0aHMgYXJyYXkgZm9yIGZhc3QgbG9hZGluZywgdGhlbiByZW5kZXIgdGhlIG90aGVyIHBhZ2VzIG9uY2UgdGhlIHVzZXIgcmVxdWVzdHMgdGhlIHBhdGhcclxuXHJcblx0XHRmYWxsYmFjazogZmFsc2UsXHJcblx0XHRwYXRoczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGFyYW1zOiB7XHJcblx0XHRcdFx0XHRtZWV0dXBJZDogJ20xJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGFyYW1zOiB7XHJcblx0XHRcdFx0XHRtZWV0dXBJZDogJ20yJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGFyYW1zOiB7XHJcblx0XHRcdFx0XHRtZWV0dXBJZDogJ20zJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGFyYW1zOiB7XHJcblx0XHRcdFx0XHRtZWV0dXBJZDogJ200JyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG5cdC8vIGZldGNoIGRhdGEgZm9yIHNpbmdsZSBtZWV0dXBcclxuXHJcblx0bGV0IG1lZXR1cElkID0gY29udGV4dC5wYXJhbXMubWVldHVwSWQ7XHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdG1lZXR1cERhdGE6IHtcclxuXHRcdFx0XHRpZDogbWVldHVwSWQsXHJcblx0XHRcdFx0aW1hZ2U6ICdodHRwczovL3N0YXRpYzAxLm55dC5jb20vaW1hZ2VzLzIwMjIvMTIvMjAvc2NpZW5jZS8xNnRiLWNpbm5hbW9uLWJlYXIvMTZ0Yi1jaW5uYW1vbi1iZWFyLWFydGljbGVMYXJnZS5qcGc/cXVhbGl0eT03NSZhdXRvPXdlYnAnLFxyXG5cdFx0XHRcdHRpdGxlOiAnRmlyc3QgTWVldHVwJyxcclxuXHRcdFx0XHRhZGRyZXNzOiAnd293IGFuIGFkZHknLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiAnRGVzY3JpcHRpb24nLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBEZXRhaWxzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9