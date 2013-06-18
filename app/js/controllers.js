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

app.controller('PlaylistCtrl', function($scope, Playlist) {
  $scope.playlists = Playlist.query();
});

app.controller('PlayCtrl', function($scope, $routeParams, Playlist) {
  $scope.playlist = Playlist.get({playlistID:$routeParams.playlistID});
});

app.controller('PlaylistDetailCtrl', function($scope, $http, $routeParams, Playlist) {
  $scope.playlist = Playlist.get({playlistID:$routeParams.playlistID});

  $http.get('data/songs/songs.json').success(function(data) {
	$scope.songs = data;
  });
});

app.controller('ArtistCtrl', function($scope, Artist) {
  $scope.artists = Artist.query();
});

app.controller('ArtistDetailCtrl', function($scope, $routeParams, Artist, Playlist) {
  $scope.artist = Artist.get({artistID:$routeParams.artistID});
  $scope.playlists = Playlist.query();
});

app.controller('UserDetailCtrl', function($scope, $routeParams, User) {
  $scope.user = User.get({userID:$routeParams.userID});
});

