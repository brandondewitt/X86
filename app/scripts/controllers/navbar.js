'use strict';

angular.module('webApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'About',
      'link': '/'
    }, {
      'title': 'Photos',
      'link': '/albums/photos'
    }, {
      'title': 'Videos',
      'link': '/albums/videos'
    }];
    
    $scope.logout = function() {
      Auth.logout()
      .then(function() {
        $location.path('/login');
      });
    };
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
