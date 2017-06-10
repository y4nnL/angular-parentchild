describe('child', () => {
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
    scope = $rootScope.$new(true);
    childElement = angular.element('<child name="childName" on-call="onChildCall()"></child>');
    childElement = $compile(childElement)(scope);
    childController = childElement.controller('child');
  }));

  it('should have a name property', () => {
    scope.childName = 'John';
    scope.onChildCall = () => {};
    scope.$digest();
    spyOn(scope, 'onChildCall');
    expect(childController.name).toBeTruthy();
    expect(childController.name).toBe('John');
    expect(childElement.text().trim()).toBe('John');
    console.log(childElement.find('button'));
    console.log(childElement.find('button').triggerHandler);
    childElement.find('button').triggerHandler('click');
    expect(scope.onChildCall).toHaveBeenCalled();
  });
});
