webpackHotUpdate_N_E("pages/new-meetup",{

/***/ "./pages/new-meetup.jsx":
/*!******************************!*\
  !*** ./pages/new-meetup.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var E_Webdev_nextjs_practice_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_Webdev_nextjs_practice_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_Webdev_nextjs_practice_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_Webdev_nextjs_practice_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/meetups/NewMeetupForm */ "./components/meetups/NewMeetupForm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);





var _jsxFileName = "E:\\Webdev\\nextjs-practice\\pages\\new-meetup.jsx",
    _this = undefined;




var NewMeetup = function NewMeetup() {
  function addMeetupHandler(_x) {
    return _addMeetupHandler.apply(this, arguments);
  }

  function _addMeetupHandler() {
    var _s = $RefreshSig$();

    _addMeetupHandler = Object(E_Webdev_nextjs_practice_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(_s( /*#__PURE__*/E_Webdev_nextjs_practice_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
      var router, res, resData;
      return E_Webdev_nextjs_practice_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _s();

              router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
              _context.next = 4;
              return fetch('/api/new-meetup', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            case 4:
              res = _context.sent;
              _context.next = 7;
              return res.json();

            case 7:
              resData = _context.sent;
              console.log(resData); // does now allow you to press back button
              // router.replace('/')

              router.push('/');

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }), "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
      return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
    }));
    return _addMeetupHandler.apply(this, arguments);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onAddMeetup: addMeetupHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, _this)
  }, void 0, false);
};

_c = NewMeetup;
/* harmony default export */ __webpack_exports__["default"] = (NewMeetup);

var _c;

$RefreshReg$(_c, "NewMeetup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3LW1lZXR1cC5qc3giXSwibmFtZXMiOlsiTmV3TWVldHVwIiwiYWRkTWVldHVwSGFuZGxlciIsImRhdGEiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlcyIsImpzb24iLCJyZXNEYXRhIiwiY29uc29sZSIsImxvZyIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBLFdBQ1JDLGdCQURRO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBLHNSQUN2QixpQkFBZ0NDLElBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNPQyxvQkFEUCxHQUNnQkMsNkRBQVMsRUFEekI7QUFBQTtBQUFBLHFCQUVtQkMsS0FBSyxDQUFDLGlCQUFELEVBQW9CO0FBQzFDQyxzQkFBTSxFQUFFLE1BRGtDO0FBRTFDQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVAsSUFBZixDQUZvQztBQUcxQ1EsdUJBQU8sRUFBRTtBQUNSLGtDQUFnQjtBQURSO0FBSGlDLGVBQXBCLENBRnhCOztBQUFBO0FBRU9DLGlCQUZQO0FBQUE7QUFBQSxxQkFVdUJBLEdBQUcsQ0FBQ0MsSUFBSixFQVZ2Qjs7QUFBQTtBQVVPQyxxQkFWUDtBQVlDQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVosRUFaRCxDQWNDO0FBQ0E7O0FBQ0FWLG9CQUFNLENBQUNhLElBQVAsQ0FBWSxHQUFaOztBQWhCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUR1QjtBQUFBLGNBRVBaLHFEQUZPO0FBQUE7QUFBQTtBQUFBOztBQW1CdkIsc0JBQ0M7QUFBQSwyQkFDQyxxRUFBQyx5RUFBRDtBQUFlLGlCQUFXLEVBQUVIO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxtQkFERDtBQUtBLENBeEJEOztLQUFNRCxTO0FBMEJTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXctbWVldHVwLjQxMjExOTcyMGMyYTIwMDExOTEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV3TWVldHVwRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL21lZXR1cHMvTmV3TWVldHVwRm9ybSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IE5ld01lZXR1cCA9ICgpID0+IHtcclxuXHRhc3luYyBmdW5jdGlvbiBhZGRNZWV0dXBIYW5kbGVyKGRhdGEpIHtcclxuXHRcdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvbmV3LW1lZXR1cCcsIHtcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG5cdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvbnN0IHJlc0RhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKHJlc0RhdGEpO1xyXG5cclxuXHRcdC8vIGRvZXMgbm93IGFsbG93IHlvdSB0byBwcmVzcyBiYWNrIGJ1dHRvblxyXG5cdFx0Ly8gcm91dGVyLnJlcGxhY2UoJy8nKVxyXG5cdFx0cm91dGVyLnB1c2goJy8nKTtcclxuXHR9XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxOZXdNZWV0dXBGb3JtIG9uQWRkTWVldHVwPXthZGRNZWV0dXBIYW5kbGVyfSAvPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld01lZXR1cDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==