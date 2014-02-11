'use strict';


describe('Controller: ListCtrl', function () {

  // load the controller's module
  beforeEach(module('ftpAccountMgmtApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('ListCtrl', {
      $scope: scope
    });
  }));

  it('should attach something to the scope', function(){
    expect(scope.something).toBe('hello');
  });

});
