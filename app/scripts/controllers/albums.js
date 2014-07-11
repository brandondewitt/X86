'use strict';

angular.module('webApp')
  .controller('AlbumsCtrl', function ($scope, Album, $routeParams) {
    Album.query({type: $routeParams.type}, function(albums) {
      $scope.albums = albums;
    });
  });
