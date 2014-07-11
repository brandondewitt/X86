'use strict';

angular.module('webApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/bio').success(function(bio) {
      $scope.bio = bio[0].info;
    });
  });
