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

function PlayCtrl ($scope, $http) {
  $http.get('data/playlist.json').success(function(data) {
	$scope.playlist = data;
  });
}
PlayCtrl.$inject = ['$scope', '$http'];

function PlaylistDetailCtrl ($scope, $http) {
  $http.get('data/playlist.json').success(function(data) {
	$scope.playlist = data;
  });
}
PlaylistDetailCtrl.$inject = ['$scope', '$http'];

function ArtistCtrl ($scope, $http) {
  $http.get('data/artists.json').success(function(data) {
	$scope.artists = data;
  });
}
ArtistCtrl.$inject = ['$scope', '$http'];

function ArtistDetailCtrl ($scope, $http) {
  $http.get('data/artists.json').success(function(data) {
	$scope.artists = data;
  });
}
ArtistDetailCtrl.$inject = ['$scope', '$http'];

function UserCtrl ($scope, $http) {
  $http.get('data/artists.json').success(function(data) {
	$scope.artists = data;
  });
}
UserCtrl.$inject = ['$scope', '$http'];


