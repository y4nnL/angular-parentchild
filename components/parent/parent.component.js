import template from './parent.component.html';

// -------------------------------------------------------------------------------------------------
// Component bindings

const bindings = {
  /**
   * @see {ParentComponentController.name}
   */
  name: '<',
  /**
   * @see {ParentComponentController.children}
   */
  children: '<',
};

// -------------------------------------------------------------------------------------------------
// Component controller

class ParentComponentController {

  constructor() {
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
  }

  /**
   * Implement this lifecycle hook since we use one-way bindings
   */
  $onChanges() {
    this.childCalls = [];
  }

  /**
   * Expose to the "on-call" child component as expression to be called
   * @param {string} child
   */
  onChildCall(child) {
    this.childCalls.push(child);
  }

}

// -------------------------------------------------------------------------------------------------
// Component export

export default {
  bindings,
  template,
  controller: ParentComponentController,
  controllerAs: 'parent',
};
