'use strict';


// Declare app level module which depends on filters, and services
angular.module('myMusicLib', ['myMusicLib.filters', 'myMusicLib.services', 'myMusicLib.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/index',		{templateUrl: 'partials/welcome.html',		controller: 'WelcomeCtrl'});
    $routeProvider.when('/playlists',			{templateUrl: 'partials/playlist/playlists.html',	controller: 'PlaylistCtrl'});
    $routeProvider.when('/playlists/add',		{templateUrl: 'partials/playlist/playlistDetail.html',	controller: 'PlaylistDetailCtrl'});
    $routeProvider.when('/playlists/play/:playlistID',	{templateUrl: 'partials/playlist/play.html',		controller: 'PlayCtrl'});
    $routeProvider.when('/playlists/edit/:playlistID',	{templateUrl: 'partials/playlist/playlistDetail.html',	controller: 'PlaylistDetailCtrl'});
    $routeProvider.when('/playlists/delete/:playlistID',{templateUrl: 'partials/playlist/playlistDetail.html',	controller: 'PlaylistDetailCtrl'});
    $routeProvider.when('/artists',		{templateUrl: 'partials/artist/artists.html',		controller: 'ArtistCtrl'});
    $routeProvider.when('/artists/:artistID',	{templateUrl: 'partials/artist/artistDetail.html',	controller: 'ArtistDetailCtrl'});
    $routeProvider.when('/user/:userID',	{templateUrl: 'partials/profile/userDetail.html',	controller: 'UserDetailCtrl'});
    $routeProvider.when('/view1',	{templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
    $routeProvider.when('/view2',	{templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
