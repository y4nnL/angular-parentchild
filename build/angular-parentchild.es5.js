(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = "<div class=\"child\">\n    <button ng-click=\"child.call()\">{{child.name}}</button>\n</div>\n";

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
  name: '<',
  /**
   * @see {ChildComponentController.call}
   */
  call: '&onCall'
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
  /**
   * Call the "on-call" html attribute as expression
   * @type {function}
   */
  this.call = angular.noop;
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

},{"./child.component":2}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _child = require('../child');

var _child2 = _interopRequireDefault(_child);

var _parent = require('./parent.component');

var _parent2 = _interopRequireDefault(_parent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------------------------------------------------------------
// Module

var moduleName = 'parent';
var moduleDeps = [
// Vendors
'arithmetic',
// Components
_child2.default];

angular.module(moduleName, moduleDeps).component(moduleName, _parent2.default);

// -------------------------------------------------------------------------------------------------
// Export

exports.default = moduleName;

},{"../child":3,"./parent.component":6}],5:[function(require,module,exports){
module.exports = "<div class=\"parent\">\n    <span class=\"parent_name\">{{parent.name}}</span> has\n    <ng-pluralize class=\"parent_count\"\n                  count=\"parent.count\"\n                  when=\"{\n                    '0' : 'no children',\n                    'one' : '1 child',\n                    'other' : '{} children'\n                  }\"></ng-pluralize>\n    <child ng-repeat=\"childName in parent.children track by $index\"\n           name=\"childName\"\n           on-call=\"parent.onChildCall(childName)\"></child>\n    <div class=\"parent_childCall\"\n         ng-repeat=\"childName in parent.childCalls track by $index\">\n        {{parent.name}} has received {{childName}}'s call\n    </div>\n</div>\n";

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parentComponent = require('./parent.component.html');

var _parentComponent2 = _interopRequireDefault(_parentComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// -------------------------------------------------------------------------------------------------
// Component bindings

var bindings = {
  /**
   * @see {ParentComponentController.name}
   */
  name: '<',
  /**
   * @see {ParentComponentController.children}
   */
  children: '<'
};

// -------------------------------------------------------------------------------------------------
// Component controller

var ParentComponentController = function () {
  function ParentComponentController(arithmetic) {
    _classCallCheck(this, ParentComponentController);

    /**
     * The parent's name
     * @type {string}
     */
    this.name = '';
    /**
     * The parent's children
     * @type {string[]}
     */
    this.children = [];
    /**
     * Push each child call into this list
     * @type {string[]}
     */
    this.childCalls = [];
    /**
     * Count the children
     * @type {number}
     */
    this.count = 0;
    /**
     * Demonstrate the angular-arithmetic dependency flagged as external
     * @type {ArithmeticService}
     */
    this.arithmetic = arithmetic;
  }

  /**
   * Implement this lifecycle hook since we use one-way bindings
   */


  _createClass(ParentComponentController, [{
    key: '$onChanges',
    value: function $onChanges() {
      var _this = this;

      this.count = 0;
      this.children.forEach(function () {
        _this.count = _this.arithmetic.add(_this.count, 1);
      });
      this.childCalls = [];
    }

    /**
     * Expose to the "on-call" child component as expression to be called
     * @param {string} child
     */

  }, {
    key: 'onChildCall',
    value: function onChildCall(child) {
      this.childCalls.push(child);
    }
  }]);

  return ParentComponentController;
}();

// -------------------------------------------------------------------------------------------------
// Component export

exports.default = {
  bindings: bindings,
  template: _parentComponent2.default,
  controller: ParentComponentController,
  controllerAs: 'parent'
};

},{"./parent.component.html":5}]},{},[2,3,4,6]);
