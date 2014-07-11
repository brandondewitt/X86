'use strict';

describe('Controller: ContactCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var ContactCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {

    $httpBackend = _$httpBackend_;

    $httpBackend.expectGET('/api/contacts')
      .respond([{
        name : 'Brandon',
        email : 'brandon@brandon.com',
        phone : '555-555-555',
        comment : 'You guys are awesome! Just saying..'
      }]);

    scope = $rootScope.$new();

    ContactCtrl = $controller('ContactCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of contacts to the scope', function () {
    expect(scope.contacts).toBeUndefined();
    $httpBackend.flush();
    expect(scope.contacts.length).toBe(1);
  });
});
