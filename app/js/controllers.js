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
  $http.get('data/playlists/playlists.json').success(function(data) {
	$scope.playlists = data;
  });
});
//PlaylistCtrl.$inject = ['$scope', '$http'];

app.controller('PlayCtrl', function($scope, $http, $routeParams, Playlist) {
  $scope.playlist = Playlist.get({playlistID:$routeParams.playlistID});
});
//PlayCtrl.$inject = ['$scope', '$http', '$routeParams'];

app.controller('PlaylistDetailCtrl', function($scope, $http, $routeParams, Playlist) {
  $scope.playlist = Playlist.get({playlistID:$routeParams.playlistID});

  $http.get('data/songs/songs.json').success(function(data) {
	$scope.songs = data;
  });
});
//PlaylistDetailCtrl.$inject = ['$scope', '$http', '$routeParams'];

app.controller('ArtistCtrl', function($scope, $http) {
  $http.get('data/artists/artists.json').success(function(data) {
	$scope.artists = data;
  });
});
//ArtistCtrl.$inject = ['$scope', '$http'];

app.controller('ArtistDetailCtrl', function($scope, $http, $routeParams, Artist) {
  $scope.artist = Artist.get({artistID:$routeParams.artistID});

  $http.get('data/playlists/playlists.json').success(function(data) {
	$scope.playlists = data;
  });
});
//ArtistDetailCtrl.$inject = ['$scope', '$http', '$routeParams'];

app.controller('UserDetailCtrl', function($scope, $routeParams, User) {
  $scope.user = User.get({userID:$routeParams.userID});
});

