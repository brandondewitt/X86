'use strict';

angular.module('webApp')
  .factory('Album', function ($resource) {
    return $resource('/api/albums/:type');
  });
