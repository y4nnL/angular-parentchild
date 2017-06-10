describe('parent', () => {
  /**
   * @type {Object}
   */
  let scope;
  /**
   * @type {Object}
   */
  let parentElement;
  /**
   * @type {ParentComponentController}
   */
  let parentController;

  /**
   * The parent's name
   * @type {string}
   */
  const parentName = 'John';

  /**
   * List of children names
   * @type {string[]}
   */
  const children = ['Kevin', 'Steven', 'Ketty'];

  /**
   * @type {NodeList}
   */
  let childElements;

  beforeEach(angular.mock.module('parent'));
  beforeEach(angular.mock.module('child'));

  beforeEach(inject(($rootScope, $compile) => {
    scope = $rootScope.$new(true);
    scope.parentName = parentName;
    scope.children = children;
    parentElement = angular.element('<parent name="parentName" children="children"></parent>');
    parentElement = $compile(parentElement)(scope);
    parentController = parentElement.controller('parent');
    scope.$apply();
    childElements = parentElement[0].querySelectorAll('child');
  }));

  it('should have a name and children elements', () => {
    expect(parentController.name).toBe('John');
    expect(parentController.children).toBe(children);
    expect(parentElement[0].querySelector('.parent_name').textContent.trim()).toBe(parentName);
    expect(childElements.length).toBe(3);
    [].forEach.call(childElements, (childElement, i) => {
      expect(childElement.textContent.trim()).toBe(children[i]);
    });
  });

  it('should call back for each child', () => {
    spyOn(parentController, 'onChildCall');
    [].forEach.call(childElements, (childElement, i) => {
      angular.element(childElement).find('button').triggerHandler('click');
      expect(parentController.onChildCall).toHaveBeenCalledWith(children[i]);
    });
  });

  it('should display a message for each child call', () => {
    [].forEach.call(childElements, (childElement) => {
      const childButtonElement = angular.element(childElement).find('button');
      childButtonElement.triggerHandler('click');
    });
    const childCallElements = parentElement[0].querySelectorAll('.parent_childCall');
    expect(parentController.childCalls.length).toBe(3);
    expect(childCallElements.length).toBe(3);
    [].forEach.call(childCallElements, (childCallElement, i) => {
      expect(childCallElement.textContent.trim()).toBe([
        parentName,
        ' has received ',
        children[i],
        '\'s call',
      ].join(''));
    });
  });

  it('should reset the child calls at parent model change', () => {
    [].forEach.call(childElements, (childElement) => {
      const childButtonElement = angular.element(childElement).find('button');
      childButtonElement.triggerHandler('click');
    });
    expect(parentController.childCalls.length).toBe(3);
    scope.parentName = 'Willy';
    scope.children = ['John', 'Jane'];
    scope.$apply();
    expect(parentController.childCalls.length).toBe(0);
    expect(parentElement.find('button').length).toBe(2);
    expect(parentElement[0].querySelectorAll('.parent_childCall').length).toBe(0);
  });

  it('should show a pluralized child count', () => {
    expect(parentElement[0].querySelector('.parent_count').textContent.trim()).toBe('3 children');
    expect(parentController.count).toBe(3);
    scope.children = ['Kevin', 'Steven'];
    scope.$digest();
    expect(parentElement[0].querySelector('.parent_count').textContent.trim()).toBe('2 children');
    expect(parentController.count).toBe(2);
    scope.children = ['Kevin'];
    scope.$digest();
    expect(parentElement[0].querySelector('.parent_count').textContent.trim()).toBe('1 child');
    expect(parentController.count).toBe(1);
    scope.children = [];
    scope.$digest();
    expect(parentElement[0].querySelector('.parent_count').textContent.trim()).toBe('no children');
    expect(parentController.count).toBe(0);
  });
});
