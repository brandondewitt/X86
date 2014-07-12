'use strict';

angular.module('webApp')
  .controller('ContactCtrl', function ($scope, Contact) {
    $scope.contact = {};

    $scope.add = function(callback) {
      var cb = callback || angular.noop;
      
      return Contact.save($scope.contact,
        function(contact) {
          $scope.contact = {};
          return cb(contact);
        }, function(err) {
          return cb(err);
        }).$promise;
    };
  });
