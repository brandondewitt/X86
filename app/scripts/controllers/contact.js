'use strict';

angular.module('webApp')
  .controller('ContactCtrl', function ($scope, $http) {
    $http.get('/api/contacts').success(function(contacts) {
      $scope.contacts = contacts;
    });
  });
