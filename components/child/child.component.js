import template from './child.component.html';

// -------------------------------------------------------------------------------------------------
// Component bindings

const bindings = {
  /**
   * @see {ChildComponentController.name}
   */
  name: '<',
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
