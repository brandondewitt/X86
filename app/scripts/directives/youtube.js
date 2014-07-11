'use strict';

angular.module('webApp')
  .directive('youtube', function ($sce) {
    return {
    restrict: 'EA',
    scope: { code:'=' },
    replace: true,
    template: '<iframe width="960" height="720" src="{{url}}" frameborder="0" allowfullscreen></iframe>',
    link: function (scope) {
        scope.$watch('code', function (newVal) {
           if (newVal) {
               scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal);
           }
        });
    }
  };
  });
