(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = "<div class=\"child\">{{child.name}}</div>\n";

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _childComponent = require('./child.component.html');

var _childComponent2 = _interopRequireDefault(_childComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// -------------------------------------------------------------------------------------------------
// Component bindings

var bindings = {
  /**
   * @see {ChildComponentController.name}
   */
  name: '<'
};

// -------------------------------------------------------------------------------------------------
// Component controller

var ChildComponentController = function ChildComponentController() {
  _classCallCheck(this, ChildComponentController);

  /**
   * The child's name
   * @type {string}
   */
  this.name = '';
};

// -------------------------------------------------------------------------------------------------
// Component export

exports.default = {
  bindings: bindings,
  template: _childComponent2.default,
  controller: ChildComponentController,
  controllerAs: 'child'
};

},{"./child.component.html":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _child = require('./child.component');

var _child2 = _interopRequireDefault(_child);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------------------------------------------------------------
// Module

var moduleName = 'child';
var moduleDeps = [];

angular.module(moduleName, moduleDeps).component(moduleName, _child2.default);

// -------------------------------------------------------------------------------------------------
// Export

exports.default = moduleName;

},{"./child.component":2}]},{},[2,3]);
