'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var MainCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {

    $httpBackend = _$httpBackend_;

    $httpBackend.expectGET('/api/bio')
      .respond([{info: 'Awesome stuff about X86.'}]);

    scope = $rootScope.$new();

    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a bio to the scope', function () {
    expect(scope.bio).toBeUndefined();
    $httpBackend.flush();
    expect(scope.bio).toBe('Awesome stuff about X86.');
  });
});
