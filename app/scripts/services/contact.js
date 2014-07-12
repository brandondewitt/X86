'use strict';

angular.module('webApp')
  .factory('Contact', function ($resource) {
      return $resource('/api/contacts');
  });
