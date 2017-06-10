describe('Child', () => {
  /**
   * @type {Object}
   */
  let scope;
  /**
   * @type {Object}
   */
  let childElement;
  /**
   * @type {ChildComponentController}
   */
  let childController;

  beforeEach(angular.mock.module('child'));

  beforeEach(inject(($rootScope, $compile) => {
    scope = $rootScope.$new();
    childElement = angular.element('<child name="childName"></child>');
    childElement = $compile(childElement)(scope);
    childController = childElement.controller('child');
  }));

  it('should have a name property', () => {
    scope.childName = 'John';
    scope.$digest();
    expect(childController.name).toBeTruthy();
    expect(childController.name).toBe('John');
    expect(childElement.text().trim()).toBe('John');
  });
});
