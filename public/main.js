/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/components/test.ts":
/*!***********************************!*\
  !*** ./src/ts/components/test.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar helpers_1 = __webpack_require__(/*! ../snippets/helpers */ \"./src/ts/snippets/helpers.ts\");\r\nvar test = function () {\r\n    var newArr = (0, helpers_1.createArr)(10);\r\n    console.log(newArr);\r\n};\r\nexports[\"default\"] = test;\r\n\n\n//# sourceURL=webpack://webpack_starter_boilerplate/./src/ts/components/test.ts?");

/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar test_1 = __webpack_require__(/*! ./components/test */ \"./src/ts/components/test.ts\");\r\nvar app = function () {\r\n    (0, test_1.default)();\r\n};\r\napp();\r\n\n\n//# sourceURL=webpack://webpack_starter_boilerplate/./src/ts/main.ts?");

/***/ }),

/***/ "./src/ts/snippets/helpers.ts":
/*!************************************!*\
  !*** ./src/ts/snippets/helpers.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.splitNum = exports.transform = exports.clamp = exports.lerp = exports.createArr = void 0;\r\nvar createArr = function (n) {\r\n    var newArr = [];\r\n    for (var i = 1; i <= n; i++) {\r\n        newArr.push(i);\r\n    }\r\n    return newArr;\r\n};\r\nexports.createArr = createArr;\r\nvar lerp = function (start, end, amt) {\r\n    return (1 - amt) * start + amt * end;\r\n};\r\nexports.lerp = lerp;\r\nvar clamp = function (value, min, max) {\r\n    return Math.min(Math.max(value, min), max);\r\n};\r\nexports.clamp = clamp;\r\nfunction transform(el, transformValue) {\r\n    el.style.webkitTransform = transformValue;\r\n    el.style.msTransform = transformValue;\r\n    el.style.transform = transformValue;\r\n}\r\nexports.transform = transform;\r\nvar splitNum = function (num) {\r\n    return String(Math.abs(Math.floor(num)))\r\n        .split('')\r\n        .map(function (o) { return parseInt(o); });\r\n};\r\nexports.splitNum = splitNum;\r\n\n\n//# sourceURL=webpack://webpack_starter_boilerplate/./src/ts/snippets/helpers.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/main.ts");
/******/ 	
/******/ })()
;