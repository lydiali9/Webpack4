/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./src/a.js":
/*!******************!*\
  !*** ./src/a.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/lynnli91/Workspaces/Webpack4/src/a.js: Unterminated string constant (1:17)\\n\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 1 | \\u001b[39mmodule\\u001b[33m.\\u001b[39mexports \\u001b[33m=\\u001b[39m \\u001b[32m'I am LynnLi, Hello!\\\";\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m                 \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 2 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 3 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 4 | \\u001b[39m\\u001b[36mclass\\u001b[39m \\u001b[33mB\\u001b[39m {\\u001b[0m\\n    at Parser.raise (/Users/lynnli91/Workspaces/Webpack4/node_modules/@babel/parser/lib/index.js:6420:17)\\n    at Parser.readString (/Users/lynnli91/Workspaces/Webpack4/node_modules/@babel/parser/lib/index.js:7395:14)\\n    at Parser.getTokenFromCode (/Users/lynnli91/Workspaces/Webpack4/node_modules/@babel/parser/lib/index.js:7057:14)\\n    at Parser.nextToken (/Users/lynnli91/Workspaces/Webpack4/node_modules/@babel/parser/lib/index.js:6630:12)\\n    at Parser.next (/Users/lynnli91/Workspaces/Webpack4/node_modules/@babel/parser/lib/index.js:6559:10)\\n    at Parser.parseMaybeAssign (/Users/lynnli91/Workspaces/Webpack4/node_modules/@babel/parser/lib/index.js:8361:12)\\n    at Parser.parseExpression (/Users/lynnli91/Workspaces/Webpack4/node_modules/@babel/parser/lib/index.js:8275:23)\\n    at Parser.parseStatementContent (/Users/lynnli91/Workspaces/Webpack4/node_modules/@babel/parser/lib/index.js:10138:23)\\n    at Parser.parseStatement (/Users/lynnli91/Workspaces/Webpack4/node_modules/@babel/parser/lib/index.js:10009:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/lynnli91/Workspaces/Webpack4/node_modules/@babel/parser/lib/index.js:10585:25)\\n    at Parser.parseBlockBody (/Users/lynnli91/Workspaces/Webpack4/node_modules/@babel/parser/lib/index.js:10572:10)\\n    at Parser.parseTopLevel (/Users/lynnli91/Workspaces/Webpack4/node_modules/@babel/parser/lib/index.js:9940:10)\\n    at Parser.parse (/Users/lynnli91/Workspaces/Webpack4/node_modules/@babel/parser/lib/index.js:11447:17)\\n    at parse (/Users/lynnli91/Workspaces/Webpack4/node_modules/@babel/parser/lib/index.js:11483:38)\\n    at parser (/Users/lynnli91/Workspaces/Webpack4/node_modules/@babel/core/lib/transformation/normalize-file.js:168:34)\\n    at normalizeFile (/Users/lynnli91/Workspaces/Webpack4/node_modules/@babel/core/lib/transformation/normalize-file.js:102:11)\\n    at runSync (/Users/lynnli91/Workspaces/Webpack4/node_modules/@babel/core/lib/transformation/index.js:44:43)\\n    at runAsync (/Users/lynnli91/Workspaces/Webpack4/node_modules/@babel/core/lib/transformation/index.js:35:14)\\n    at process.nextTick (/Users/lynnli91/Workspaces/Webpack4/node_modules/@babel/core/lib/transform.js:34:34)\\n    at process._tickCallback (internal/process/next_tick.js:61:11)\");\n\n//# sourceURL=webpack:///./src/a.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar _class, _temp;\n\nvar str = __webpack_require__(/*! ./a.js */ \"./src/a.js\");\n\n__webpack_require__(/*! ./index.css */ \"./src/index.css\");\n\n__webpack_require__(/*! ./index.less */ \"./src/index.less\");\n\nconsole.log(str);\n\nvar fn = function fn() {\n  console.log('ES6 function');\n};\n\nfn();\n\nvar A = log(_class = (_temp = function A() {\n  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, A);\n\n  this.a = 1;\n}, _temp)) || _class;\n\nvar a = new A();\nconsole.log(a.a);\n\nfunction log(target) {\n  console.log(target, 23);\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/index.less":
/*!************************!*\
  !*** ./src/index.less ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/index.less?");

/***/ })

/******/ });