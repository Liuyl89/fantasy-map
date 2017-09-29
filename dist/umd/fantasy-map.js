var FantasyMap =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(2))(9);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvcmVhY3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIGZhbnRhc3lSZWFjdERsbD84NGQ1Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC9yZWFjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgZmFudGFzeVJlYWN0RGxsXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(2))(8);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgZmFudGFzeVJlYWN0RGxsP2I1YzUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGZhbnRhc3lSZWFjdERsbFxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("module.exports = fantasyReactDll;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImZhbnRhc3lSZWFjdERsbFwiP2RlYjkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmYW50YXN5UmVhY3REbGw7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmYW50YXN5UmVhY3REbGxcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.isArcgis4 = undefined;\n\nvar _env = __webpack_require__(9);\n\nvar _env2 = _interopRequireDefault(_env);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nif (window.require) {\n    window.require(['esri/kernel'], function (esriNS) {\n        _env2.default.platform.type = 'arcgis';\n        _env2.default.platform.version = esriNS.version;\n    });\n}\nfunction isArcgis4() {\n    return _env2.default.platform.type === 'arcgis' && _env2.default.platform.version[0] && _env2.default.platform.version[0] === '4';\n}\n\nexports.isArcgis4 = isArcgis4;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbGliL3BsYXRmb3JtRGV0ZWN0LmpzPzE5YjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVudiBmcm9tICcuLi9lbnYnXHJcblxyXG5pZiAod2luZG93LnJlcXVpcmUpIHtcclxuICAgIHdpbmRvdy5yZXF1aXJlKFsnZXNyaS9rZXJuZWwnXSwgKGVzcmlOUykgPT4ge1xyXG4gICAgICAgIGVudi5wbGF0Zm9ybS50eXBlID0gJ2FyY2dpcydcclxuICAgICAgICBlbnYucGxhdGZvcm0udmVyc2lvbiA9IGVzcmlOUy52ZXJzaW9uXHJcbiAgICB9KVxyXG59XHJcbmZ1bmN0aW9uIGlzQXJjZ2lzNCgpIHtcclxuICAgIHJldHVybiBlbnYucGxhdGZvcm0udHlwZSA9PT0gJ2FyY2dpcydcclxuICAgICAgICAmJiBlbnYucGxhdGZvcm0udmVyc2lvblswXVxyXG4gICAgICAgICYmIGVudi5wbGF0Zm9ybS52ZXJzaW9uWzBdID09PSAnNCdcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGlzQXJjZ2lzNCxcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2xpYi9wbGF0Zm9ybURldGVjdC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _index = __webpack_require__(6);\n\nvar fantasyMap = _interopRequireWildcard(_index);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nmodule.exports = _extends({}, fantasyMap);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdW1kLmpzPzI4ZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZmFudGFzeU1hcCBmcm9tICcuL2luZGV4J1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICAuLi5mYW50YXN5TWFwLFxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvdW1kLmpzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQURBO0FBQ0E7OztBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Map = undefined;\n\nvar _Map = __webpack_require__(7);\n\nObject.defineProperty(exports, 'Map', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Map).default;\n  }\n});\n\n__webpack_require__(3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vbGliL3BsYXRmb3JtRGV0ZWN0J1xyXG4vLyBjb21wb25lbnRzXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFwIH0gZnJvbSAnLi9jb21wb25lbnRzL01hcCdcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7QUFGQTtBQUNBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = undefined;\n\nvar _Map = __webpack_require__(8);\n\nvar _Map2 = _interopRequireDefault(_Map);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Map2.default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9NYXAvaW5kZXguanM/ZDdlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL01hcCdcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9NYXAvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(1);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _platformDetect = __webpack_require__(3);\n\nvar platformDetect = _interopRequireWildcard(_platformDetect);\n\nvar _MapNoMatch = __webpack_require__(10);\n\nvar _MapNoMatch2 = _interopRequireDefault(_MapNoMatch);\n\nvar _MapArcgis = __webpack_require__(11);\n\nvar _MapArcgis2 = _interopRequireDefault(_MapArcgis);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction getMatch() {\n    if (platformDetect.isArcgis4()) {\n        return _MapArcgis2.default;\n    }\n    return _MapNoMatch2.default;\n}\n\nvar Map = function (_React$Component) {\n    _inherits(Map, _React$Component);\n\n    function Map() {\n        _classCallCheck(this, Map);\n\n        var _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this));\n\n        _this.mapClass = getMatch();\n        return _this;\n    }\n\n    _createClass(Map, [{\n        key: 'render',\n        value: function render() {\n            var MapClass = this.mapClass;\n            return _react2.default.createElement(MapClass, this.props);\n        }\n    }]);\n\n    return Map;\n}(_react2.default.Component);\n\nMap.propTypes = {\n    children: _propTypes2.default.array\n};\nMap.defaultProps = {};\nexports.default = Map;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9NYXAvTWFwLmpzPzRmNmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCAqIGFzIHBsYXRmb3JtRGV0ZWN0IGZyb20gJy4uLy4uL2xpYi9wbGF0Zm9ybURldGVjdCdcclxuaW1wb3J0IE1hcE5vTWF0Y2ggZnJvbSAnLi9NYXBOb01hdGNoJ1xyXG5pbXBvcnQgTWFwQXJjZ2lzNCBmcm9tICcuL01hcEFyY2dpczQnXHJcblxyXG5mdW5jdGlvbiBnZXRNYXRjaCgpIHtcclxuICAgIGlmIChwbGF0Zm9ybURldGVjdC5pc0FyY2dpczQoKSkge1xyXG4gICAgICAgIHJldHVybiBNYXBBcmNnaXM0XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTWFwTm9NYXRjaFxyXG59XHJcblxyXG5jbGFzcyBNYXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgfVxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHt9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMubWFwQ2xhc3MgPSBnZXRNYXRjaCgpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IE1hcENsYXNzID0gdGhpcy5tYXBDbGFzc1xyXG4gICAgICAgIHJldHVybiAoPE1hcENsYXNzIHsuLi50aGlzLnByb3BzfS8+KVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1hcFxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvTWFwL01hcC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFNQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBZEE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQURBO0FBZ0JBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar env = {\n    platform: {\n        type: 'unknown',\n        version: 'unknown'\n    }\n};\nexports.default = env;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZW52LmpzP2Y4ZWEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZW52PXtcclxuICAgIHBsYXRmb3JtOntcclxuICAgICAgICB0eXBlOid1bmtub3duJyxcclxuICAgICAgICB2ZXJzaW9uOid1bmtub3duJyxcclxuICAgIH0sXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZW52XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9lbnYuanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(1);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar MapNoMatch = function (_React$Component) {\n    _inherits(MapNoMatch, _React$Component);\n\n    function MapNoMatch() {\n        _classCallCheck(this, MapNoMatch);\n\n        return _possibleConstructorReturn(this, (MapNoMatch.__proto__ || Object.getPrototypeOf(MapNoMatch)).apply(this, arguments));\n    }\n\n    _createClass(MapNoMatch, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                { style: { width: '100%', height: '100%' } },\n                _react2.default.createElement(\n                    'p',\n                    null,\n                    '\\u5F53\\u524D\\u8FD0\\u884C\\u73AF\\u5883\\u4E0B\\u672A\\u627E\\u5230\\u5339\\u914D\\u7684Map\\u7EC4\\u4EF6'\n                )\n            );\n        }\n    }]);\n\n    return MapNoMatch;\n}(_react2.default.Component);\n\nMapNoMatch.propTypes = {\n    children: _propTypes2.default.array\n};\nMapNoMatch.defaultProps = {};\nexports.default = MapNoMatch;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTWFwL01hcE5vTWF0Y2guanM/ZjE4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuXHJcbmNsYXNzIE1hcE5vTWF0Y2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgfVxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHt9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICA8cD7lvZPliY3ov5DooYznjq/looPkuIvmnKrmib7liLDljLnphY3nmoRNYXDnu4Tku7Y8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNYXBOb01hdGNoXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9NYXAvTWFwTm9NYXRjaC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7Ozs7QUFaQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBREE7QUFjQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(1);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar MapArcgis4 = function (_React$Component) {\n    _inherits(MapArcgis4, _React$Component);\n\n    function MapArcgis4() {\n        _classCallCheck(this, MapArcgis4);\n\n        return _possibleConstructorReturn(this, (MapArcgis4.__proto__ || Object.getPrototypeOf(MapArcgis4)).apply(this, arguments));\n    }\n\n    _createClass(MapArcgis4, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            var _this2 = this;\n\n            window.require(['esri/Map', 'esri/views/MapView'], function (EsriMap, MapView) {\n                _this2.map = new EsriMap({\n                    basemap: _this2.props.basemap,\n                    layers: _this2.props.layers\n                });\n\n                _this2.view = new MapView({\n                    container: _this2.dom,\n                    map: _this2.map,\n                    extent: _this2.props.extent\n                });\n                _this2.view.on('click', function (event) {\n                    console.log(event.mapPoint.x + ',' + event.mapPoint.y);\n                });\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this3 = this;\n\n            return _react2.default.createElement('div', { style: { width: '100%', height: '100%' },\n                ref: function ref(dom) {\n                    _this3.dom = dom;\n                }\n            });\n        }\n    }]);\n\n    return MapArcgis4;\n}(_react2.default.Component);\n\nMapArcgis4.propTypes = {\n    children: _propTypes2.default.array,\n    layers: _propTypes2.default.array,\n    basemap: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])\n};\nMapArcgis4.defaultProps = {\n    basemap: null,\n    layers: []\n};\nexports.default = MapArcgis4;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTWFwL01hcEFyY2dpczQuanM/Y2FhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuXHJcbmNsYXNzIE1hcEFyY2dpczQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgICAgIGxheWVyczogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgICAgIGJhc2VtYXA6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgICAgICBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIF0pLFxyXG4gICAgfVxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBiYXNlbWFwOiBudWxsLFxyXG4gICAgICAgIGxheWVyczogW10sXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgd2luZG93LnJlcXVpcmUoWydlc3JpL01hcCcsICdlc3JpL3ZpZXdzL01hcFZpZXcnXSwgKEVzcmlNYXAsIE1hcFZpZXcpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tYXAgPSBuZXcgRXNyaU1hcCh7XHJcbiAgICAgICAgICAgICAgICBiYXNlbWFwOiB0aGlzLnByb3BzLmJhc2VtYXAsXHJcbiAgICAgICAgICAgICAgICBsYXllcnM6IHRoaXMucHJvcHMubGF5ZXJzLFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgdGhpcy52aWV3ID0gbmV3IE1hcFZpZXcoe1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiB0aGlzLmRvbSxcclxuICAgICAgICAgICAgICAgIG1hcDogdGhpcy5tYXAsXHJcbiAgICAgICAgICAgICAgICBleHRlbnQ6IHRoaXMucHJvcHMuZXh0ZW50LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnZpZXcub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtldmVudC5tYXBQb2ludC54fSwke2V2ZW50Lm1hcFBvaW50Lnl9YClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICByZWY9eyhkb20pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbSA9IGRvbVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTWFwQXJjZ2lzNFxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvTWFwL01hcEFyY2dpczQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFjQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BOzs7O0FBeENBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFVQTtBQUNBO0FBRkE7QUFpQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n");

/***/ })
/******/ ]);