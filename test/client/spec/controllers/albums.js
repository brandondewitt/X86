'use strict';

describe('Controller: AlbumsCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var AlbumsCtrl,
    scope,
    $httpBackend;

  it('should attach a list of photos to the scope', inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;

    $httpBackend.expectGET('/api/albums/photos')
      .respond([{
        name : 'Live',
        type: 'photos',
        media : [
          {url : 'http://test.com/photos/1.jpg'},
          {url : 'http://test.com/photos/2.jpg'}
        ]
      }, {
        name : 'Promo',
        type: 'photos',
        media : [
          {url : 'http://test.com/photos/1.jpg'},
          {url : 'http://test.com/photos/2.jpg'}
        ]
      }]);

    scope = $rootScope.$new();

    AlbumsCtrl = $controller('AlbumsCtrl', {
      $scope: scope,
      $routeParams: {
        type: 'photos'
      }
    });

    expect(scope.albums).toBeUndefined();

    $httpBackend.flush();

    expect(scope.albums.length).toBe(2);
    expect(scope.albums[0].type).toBe('photos');
  }));

  it('should attach a list of videos to the scope', inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;

    $httpBackend.expectGET('/api/albums/videos')
      .respond([{
        name : 'Live',
        type: 'videos',
        media : [
          {url : 'http://test.com/videos/1.mov'},
          {url : 'http://test.com/videos/2.mov'}
        ]
      }]);

    scope = $rootScope.$new();

    AlbumsCtrl = $controller('AlbumsCtrl', {
      $scope: scope,
      $routeParams: {
        type: 'videos'
      }
    });

    expect(scope.albums).toBeUndefined();

    $httpBackend.flush();

    expect(scope.albums.length).toBe(1);
    expect(scope.albums[0].type).toBe('videos');
  }));
});
