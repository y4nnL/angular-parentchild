'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// -------------------------------------------------------------------------------------------------
// Service

/**
 * Four methods for basic arithmetic operations exposed as AngularJS service
 * @constructor
 */
var ArithmeticService = function () {
  function ArithmeticService() {
    _classCallCheck(this, ArithmeticService);
  }

  _createClass(ArithmeticService, null, [{
    key: 'add',

    /**
     * Add n1 to n2
     * @param {number} n1
     * @param {number} n2
     * @returns {number}
     */
    value: function add(n1, n2) {
      return n1 + n2;
    }

    /**
     * Subtract n2 from n1
     * @param {number} n1
     * @param {number} n2
     * @returns {number}
     */

  }, {
    key: 'subtract',
    value: function subtract(n1, n2) {
      return n1 - n2;
    }

    /**
     * Multiply n1 by n2
     * @param {number} n1
     * @param {number} n2
     * @returns {number}
     */

  }, {
    key: 'multiply',
    value: function multiply(n1, n2) {
      return n1 * n2;
    }

    /**
     * Divide n1 by n2
     * @param {number} n1
     * @param {number} n2
     * @returns {number}
     */

  }, {
    key: 'divide',
    value: function divide(n1, n2) {
      return n1 / n2;
    }
  }]);

  return ArithmeticService;
}();

// -------------------------------------------------------------------------------------------------
// Export

angular.module('arithmetic', []).service('arithmetic', function () {
  return ArithmeticService;
});
//# sourceMappingURL=angular-arithmetic.es5.js.map
