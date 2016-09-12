/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _ship = __webpack_require__(1);

	var _ship2 = _interopRequireDefault(_ship);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	document.addEventListener("DOMContentLoaded", function () {
	  var canvasEl = document.getElementsByTagName("canvas")[0];
	  canvasEl.width = 1000;
	  canvasEl.height = 600;

	  var ctx = canvasEl.getContext("2d");
	  var ship = new _ship2.default();
	  ship.drawOrbit(ctx);
	  ship.drawHead(ctx);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SHIP_CONSTANTS = {
	  CENTER: [100, 100],
	  RADIUS: 30,
	  HEAD_RADIUS: 8,
	  COLOR: '#FF0000',
	  TEST_COLOR: '#cdcdcd'
	};

	var Ship = function () {
	  function Ship(ctx) {
	    _classCallCheck(this, Ship);

	    this.center = SHIP_CONSTANTS.CENTER;
	    this.radius = SHIP_CONSTANTS.RADIUS;
	    this.headCenter = [SHIP_CONSTANTS.CENTER[0] + SHIP_CONSTANTS.RADIUS * Math.cos(0), SHIP_CONSTANTS.CENTER[1] + SHIP_CONSTANTS.RADIUS * Math.sin(0)];
	    this.headRadius = SHIP_CONSTANTS.HEAD_RADIUS;
	    this.tail = [];
	    this.color = SHIP_CONSTANTS.COLOR;
	    this.angle = 0;
	  }

	  _createClass(Ship, [{
	    key: 'drawOrbit',
	    value: function drawOrbit(ctx) {
	      ctx.fillStyle = SHIP_CONSTANTS.TEST_COLOR;
	      ctx.beginPath();
	      ctx.arc(this.center[0], this.center[1], this.radius, 0, 2 * Math.PI, true);
	      ctx.fill();
	    }
	  }, {
	    key: 'drawHead',
	    value: function drawHead(ctx) {
	      ctx.fillStyle = this.color;
	      ctx.beginPath();
	      ctx.arc(this.headCenter[0], this.headCenter[1], this.headRadius, 0, 2 * Math.PI, true);
	      ctx.fill();
	    }
	  }, {
	    key: 'rotate',
	    value: function rotate() {
	      this.angle = this.angle === 2 * Math.PI ? 0 : this.angle += 2 * Math.PI / 120;
	      this.headCenter = [this.center[0] + this.radius * Math.cos(this.angle), this.center[1] + this.radius * Math.sin(this.angle)];
	    }
	  }, {
	    key: 'move',
	    value: function move() {}
	  }]);

	  return Ship;
	}();

	exports.default = Ship;

/***/ }
/******/ ]);