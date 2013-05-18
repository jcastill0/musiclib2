'use strict';

/* Controllers */

/*
angular.module('myMusicLib.controllers', [])
  .controller('MyCtrl1',      [function() {}])
  .controller('MyCtrl2',      [function() {}])
  .controller('PlaylistCtrl', [function($scope) {
  }]);
*/

app.controller('MyCtrl1', function() {});
app.controller('MyCtrl2', function() {});
app.controller('WelcomeCtrl', function() {});

app.controller('PlaylistCtrl', function($scope, $http) {
  $http.get('data/playlists.json').success(function(data) {
	$scope.playlists = data;
  });
});
//PlaylistCtrl.$inject = ['$scope', '$http'];

app.controller('PlayCtrl', function($scope, $http, $routeParams) {
  $http.get('data/playlist_' + $routeParams.playlistID + '.json').success(function(data) {
	$scope.playlist = data;
  });
});
//PlayCtrl.$inject = ['$scope', '$http', '$routeParams'];

app.controller('PlaylistDetailCtrl', function($scope, $http, $routeParams) {
  $http.get('data/playlist_' + $routeParams.playlistID + '.json').success(function(data) {
	$scope.playlist = data;
  });
  $http.get('data/songs.json').success(function(data) {
	$scope.songs = data;
  });
});
//PlaylistDetailCtrl.$inject = ['$scope', '$http', '$routeParams'];

app.controller('ArtistCtrl', function($scope, $http) {
  $http.get('data/artists.json').success(function(data) {
	$scope.artists = data;
  });
});
//ArtistCtrl.$inject = ['$scope', '$http'];

app.controller('ArtistDetailCtrl', function($scope, $http, $routeParams) {
  $http.get('data/artist_' + $routeParams.artistID + '.json').success(function(data) {
	$scope.artist = data;
  });
  $http.get('data/playlists.json').success(function(data) {
	$scope.playlists = data;
  });
});
//ArtistDetailCtrl.$inject = ['$scope', '$http', '$routeParams'];

app.controller('UserDetailCtrl', function($scope, $http, $routeParams) {
  $http.get('data/user_1.json').success(function(data) {
	$scope.user = data;
  });
});
//UserDetailCtrl.$inject = ['$scope', '$http', '$routeParams'];


