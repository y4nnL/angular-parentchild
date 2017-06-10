// -------------------------------------------------------------------------------------------------
// Service

/**
 * Four methods for basic arithmetic operations exposed as AngularJS service
 * @constructor
 */
class ArithmeticService {
  /**
   * Add n1 to n2
   * @param {number} n1
   * @param {number} n2
   * @returns {number}
   */
  static add(n1, n2) {
    return n1 + n2;
  }

  /**
   * Subtract n2 from n1
   * @param {number} n1
   * @param {number} n2
   * @returns {number}
   */
  static subtract(n1, n2) {
    return n1 - n2;
  }

  /**
   * Multiply n1 by n2
   * @param {number} n1
   * @param {number} n2
   * @returns {number}
   */
  static multiply(n1, n2) {
    return n1 * n2;
  }

  /**
   * Divide n1 by n2
   * @param {number} n1
   * @param {number} n2
   * @returns {number}
   */
  static divide(n1, n2) {
    return n1 / n2;
  }
}

// -------------------------------------------------------------------------------------------------
// Export

angular.module('arithmetic', [])
  .service('arithmetic', () => ArithmeticService);
