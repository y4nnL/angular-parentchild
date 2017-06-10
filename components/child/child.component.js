import template from './child.component.html';

// -------------------------------------------------------------------------------------------------
// Component bindings

const bindings = {
  /**
   * @see {ChildComponentController.name}
   */
  name: '<',
  /**
   * @see {ChildComponentController.call}
   */
  call: '&onCall',
};

// -------------------------------------------------------------------------------------------------
// Component controller

class ChildComponentController {
  constructor() {
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
  }
}

// -------------------------------------------------------------------------------------------------
// Component export

export default {
  bindings,
  template,
  controller: ChildComponentController,
  controllerAs: 'child',
};
