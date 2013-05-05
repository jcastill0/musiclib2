'use strict';

/* Controllers */

/*
angular.module('myMusicLib.controllers', [])
  .controller('MyCtrl1',      [function() {}])
  .controller('MyCtrl2',      [function() {}])
  .controller('PlaylistCtrl', [function($scope) {
  }]);
*/

function MyCtrl1() {}
function MyCtrl2() {}

function WelcomeCtrl() {}

function PlaylistCtrl ($scope, $http) {
  $http.get('data/playlists.json').success(function(data) {
	$scope.playlists = data;
  });
}
PlaylistCtrl.$inject = ['$scope', '$http'];

function PlayCtrl ($scope, $http, $routeParams) {
  $http.get('data/playlist_' + $routeParams.playlistID + '.json').success(function(data) {
	$scope.playlist = data;
  });
}
PlayCtrl.$inject = ['$scope', '$http', '$routeParams'];

function PlaylistDetailCtrl ($scope, $http, $routeParams) {
  $http.get('data/playlist_' + $routeParams.playlistID + '.json').success(function(data) {
	$scope.playlist = data;
  });
  $http.get('data/songs.json').success(function(data) {
	$scope.songs = data;
  });
}
PlaylistDetailCtrl.$inject = ['$scope', '$http', '$routeParams'];

function ArtistCtrl ($scope, $http) {
  $http.get('data/artists.json').success(function(data) {
	$scope.artists = data;
  });
}
ArtistCtrl.$inject = ['$scope', '$http'];

function ArtistDetailCtrl ($scope, $http, $routeParams) {
  $http.get('data/artist_' + $routeParams.artistID + '.json').success(function(data) {
	$scope.artist = data;
  });
  $http.get('data/playlists.json').success(function(data) {
	$scope.playlists = data;
  });
}
ArtistDetailCtrl.$inject = ['$scope', '$http', '$routeParams'];

function UserDetailCtrl ($scope, $http, $routeParams) {
  $http.get('data/user_1.json').success(function(data) {
	$scope.user = data;
  });
}
UserDetailCtrl.$inject = ['$scope', '$http', '$routeParams'];


