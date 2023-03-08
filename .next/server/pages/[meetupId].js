module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[meetupId].jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/[meetupId].jsx":
/*!******************************!*\
  !*** ./pages/[meetupId].jsx ***!
  \******************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/MeetupDetails.module.css */ "./styles/MeetupDetails.module.css");
/* harmony import */ var _styles_MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "E:\\Webdev\\nextjs-practice\\pages\\[meetupId].jsx";




const MeetupDetails = ({
  meetupData
}) => {
  console.log(meetupData);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _styles_MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.detailParent,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: meetupData.image
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: meetupData.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [" ID: ", meetupData.id]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
      children: meetupData.address
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: meetupData.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }, undefined);
}; // You only need this function if your using getStaticProps and its a dynamic page


async function getStaticPaths() {
  // you would get your id's from a database then render these params dynamically
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_2__["MongoClient"].connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASS}@nextjs-practice.7mziiho.mongodb.net/?retryWrites=true&w=majority`);
  const db = client.db();
  const collection = db.collection('meetups');
  const meetups = await collection.find({}, {
    _id: 1
  }).toArray();
  client.close();
  return {
    // fallback to false will render 404 if a user went to /m5.
    // if fallback was set to true, it would render the /m5 even if the path isnt defined. So, if you have 100s of pages, you can set your most popular pages in the paths array for fast loading, then render the other pages once the user requests the path
    fallback: true,
    paths: meetups.map(meetup => ({
      params: {
        meetupId: meetup._id.toString()
      }
    }))
  };
}
async function getStaticProps(context) {
  // fetch data for single meetup
  let meetupId = context.params.meetupId;
  console.log('MEETUP ID', meetupId);
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_2__["MongoClient"].connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASS}@nextjs-practice.7mziiho.mongodb.net/?retryWrites=true&w=majority`);
  const db = client.db();
  const collection = db.collection('meetups');
  const selectedMeetup = await collection.findOne({
    _id: new mongodb__WEBPACK_IMPORTED_MODULE_2__["ObjectId"](meetupId)
  });
  client.close();
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description
      }
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (MeetupDetails);

/***/ }),

/***/ "./styles/MeetupDetails.module.css":
/*!*****************************************!*\
  !*** ./styles/MeetupDetails.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"detailParent": "MeetupDetails_detailParent__27iQS"
};


/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvW21lZXR1cElkXS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL01lZXR1cERldGFpbHMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJNZWV0dXBEZXRhaWxzIiwibWVldHVwRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJkZXRhaWxQYXJlbnQiLCJpbWFnZSIsInRpdGxlIiwiaWQiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJnZXRTdGF0aWNQYXRocyIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VU0VSTkFNRSIsIk1PTkdPX1BBU1MiLCJkYiIsImNvbGxlY3Rpb24iLCJtZWV0dXBzIiwiZmluZCIsIl9pZCIsInRvQXJyYXkiLCJjbG9zZSIsImZhbGxiYWNrIiwicGF0aHMiLCJtYXAiLCJtZWV0dXAiLCJwYXJhbXMiLCJtZWV0dXBJZCIsInRvU3RyaW5nIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0Iiwic2VsZWN0ZWRNZWV0dXAiLCJmaW5kT25lIiwiT2JqZWN0SWQiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtR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LFVBQVUsQ0FBQ2dCLE9BQVgsQ0FBbUI7QUFDL0NiLE9BQUcsRUFBRSxJQUFJYyxnREFBSixDQUFhTixRQUFiO0FBRDBDLEdBQW5CLENBQTdCO0FBR0FuQixRQUFNLENBQUNhLEtBQVA7QUFFQSxTQUFPO0FBQ05hLFNBQUssRUFBRTtBQUNOckMsZ0JBQVUsRUFBRTtBQUNYTyxVQUFFLEVBQUUyQixjQUFjLENBQUNaLEdBQWYsQ0FBbUJTLFFBQW5CLEVBRE87QUFFWHpCLGFBQUssRUFBRTRCLGNBQWMsQ0FBQzVCLEtBRlg7QUFHWEUsZUFBTyxFQUFFMEIsY0FBYyxDQUFDMUIsT0FIYjtBQUlYSCxhQUFLLEVBQUU2QixjQUFjLENBQUM3QixLQUpYO0FBS1hJLG1CQUFXLEVBQUV5QixjQUFjLENBQUN6QjtBQUxqQjtBQUROO0FBREQsR0FBUDtBQVdBO0FBRWNWLDRFQUFmLEU7Ozs7Ozs7Ozs7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9bbWVldHVwSWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9bbWVldHVwSWRdLmpzeFwiKTtcbiIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQsIE9iamVjdElkIH0gZnJvbSAnbW9uZ29kYic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL01lZXR1cERldGFpbHMubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBNZWV0dXBEZXRhaWxzID0gKHsgbWVldHVwRGF0YSB9KSA9PiB7XHJcblx0Y29uc29sZS5sb2cobWVldHVwRGF0YSk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbFBhcmVudH0+XHJcblx0XHRcdDxpbWcgc3JjPXttZWV0dXBEYXRhLmltYWdlfSAvPlxyXG5cdFx0XHQ8aDE+e21lZXR1cERhdGEudGl0bGV9PC9oMT5cclxuXHRcdFx0PHNwYW4+IElEOiB7bWVldHVwRGF0YS5pZH08L3NwYW4+XHJcblx0XHRcdDxhZGRyZXNzPnttZWV0dXBEYXRhLmFkZHJlc3N9PC9hZGRyZXNzPlxyXG5cdFx0XHQ8cD57bWVldHVwRGF0YS5kZXNjcmlwdGlvbn08L3A+XHJcblx0XHQ8L3NlY3Rpb24+XHJcblx0KTtcclxufTtcclxuXHJcbi8vIFlvdSBvbmx5IG5lZWQgdGhpcyBmdW5jdGlvbiBpZiB5b3VyIHVzaW5nIGdldFN0YXRpY1Byb3BzIGFuZCBpdHMgYSBkeW5hbWljIHBhZ2VcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG5cdC8vIHlvdSB3b3VsZCBnZXQgeW91ciBpZCdzIGZyb20gYSBkYXRhYmFzZSB0aGVuIHJlbmRlciB0aGVzZSBwYXJhbXMgZHluYW1pY2FsbHlcclxuXHRjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG5cdFx0YG1vbmdvZGIrc3J2Oi8vJHtwcm9jZXNzLmVudi5NT05HT19VU0VSTkFNRX06JHtwcm9jZXNzLmVudi5NT05HT19QQVNTfUBuZXh0anMtcHJhY3RpY2UuN216aWloby5tb25nb2RiLm5ldC8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5YFxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblx0Y29uc3QgY29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcclxuXHRjb25zdCBtZWV0dXBzID0gYXdhaXQgY29sbGVjdGlvbi5maW5kKHt9LCB7IF9pZDogMSB9KS50b0FycmF5KCk7XHJcblx0Y2xpZW50LmNsb3NlKCk7XHJcblx0cmV0dXJuIHtcclxuXHRcdC8vIGZhbGxiYWNrIHRvIGZhbHNlIHdpbGwgcmVuZGVyIDQwNCBpZiBhIHVzZXIgd2VudCB0byAvbTUuXHJcblx0XHQvLyBpZiBmYWxsYmFjayB3YXMgc2V0IHRvIHRydWUsIGl0IHdvdWxkIHJlbmRlciB0aGUgL201IGV2ZW4gaWYgdGhlIHBhdGggaXNudCBkZWZpbmVkLiBTbywgaWYgeW91IGhhdmUgMTAwcyBvZiBwYWdlcywgeW91IGNhbiBzZXQgeW91ciBtb3N0IHBvcHVsYXIgcGFnZXMgaW4gdGhlIHBhdGhzIGFycmF5IGZvciBmYXN0IGxvYWRpbmcsIHRoZW4gcmVuZGVyIHRoZSBvdGhlciBwYWdlcyBvbmNlIHRoZSB1c2VyIHJlcXVlc3RzIHRoZSBwYXRoXHJcblxyXG5cdFx0ZmFsbGJhY2s6IHRydWUsXHJcblx0XHRwYXRoczogbWVldHVwcy5tYXAoKG1lZXR1cCkgPT4gKHtcclxuXHRcdFx0cGFyYW1zOiB7IG1lZXR1cElkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCkgfSxcclxuXHRcdH0pKSxcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG5cdC8vIGZldGNoIGRhdGEgZm9yIHNpbmdsZSBtZWV0dXBcclxuXHJcblx0bGV0IG1lZXR1cElkID0gY29udGV4dC5wYXJhbXMubWVldHVwSWQ7XHJcblx0Y29uc29sZS5sb2coJ01FRVRVUCBJRCcsIG1lZXR1cElkKTtcclxuXHRjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG5cdFx0YG1vbmdvZGIrc3J2Oi8vJHtwcm9jZXNzLmVudi5NT05HT19VU0VSTkFNRX06JHtwcm9jZXNzLmVudi5NT05HT19QQVNTfUBuZXh0anMtcHJhY3RpY2UuN216aWloby5tb25nb2RiLm5ldC8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5YFxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblx0Y29uc3QgY29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcclxuXHRjb25zdCBzZWxlY3RlZE1lZXR1cCA9IGF3YWl0IGNvbGxlY3Rpb24uZmluZE9uZSh7XHJcblx0XHRfaWQ6IG5ldyBPYmplY3RJZChtZWV0dXBJZCksXHJcblx0fSk7XHJcblx0Y2xpZW50LmNsb3NlKCk7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRtZWV0dXBEYXRhOiB7XHJcblx0XHRcdFx0aWQ6IHNlbGVjdGVkTWVldHVwLl9pZC50b1N0cmluZygpLFxyXG5cdFx0XHRcdHRpdGxlOiBzZWxlY3RlZE1lZXR1cC50aXRsZSxcclxuXHRcdFx0XHRhZGRyZXNzOiBzZWxlY3RlZE1lZXR1cC5hZGRyZXNzLFxyXG5cdFx0XHRcdGltYWdlOiBzZWxlY3RlZE1lZXR1cC5pbWFnZSxcclxuXHRcdFx0XHRkZXNjcmlwdGlvbjogc2VsZWN0ZWRNZWV0dXAuZGVzY3JpcHRpb24sXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbHM7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRldGFpbFBhcmVudFwiOiBcIk1lZXR1cERldGFpbHNfZGV0YWlsUGFyZW50X18yN2lRU1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==