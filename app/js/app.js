'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myMusicLib', [
		'ngResource',
		'myMusicLib.filters',
		'myMusicLib.directives'
		]);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
	.when('/index', {
		templateUrl: 'partials/welcome.html',
		controller: 'WelcomeCtrl'
	    })
	.when('/playlists', {
		templateUrl: 'partials/playlist/playlists.html',
		controller: 'PlaylistCtrl'
	    })
	.when('/playlists/add', {
		templateUrl: 'partials/playlist/playlistDetail.html',
		controller: 'PlaylistDetailCtrl'
	    })
	.when('/playlists/play/:playlistID', {
		templateUrl: 'partials/playlist/play.html',
		controller: 'PlayCtrl'
	    })
	.when('/playlists/edit/:playlistID', {
		templateUrl: 'partials/playlist/playlistDetail.html',
		controller: 'PlaylistDetailCtrl'
	    })
	.when('/playlists/delete/:playlistID', {
		templateUrl: 'partials/playlist/playlists.html',
		controller: 'PlaylistDCtrl'
	    })
	.when('/artists', {
		templateUrl: 'partials/artist/artists.html',
		controller: 'ArtistCtrl'
	    })
	.when('/artists/:artistID', {
		templateUrl: 'partials/artist/artistDetail.html',
		controller: 'ArtistDetailCtrl'
	    })
	.when('/users/:userID', {
		templateUrl: 'partials/profile/userDetail.html',
		controller: 'UserDetailCtrl'
	    })
	.when('/auth/login', {
		templateUrl: 'partials/welcome.html',
		controller: 'AuthCtrl'
	    })
	.when('/auth/logout', {
		templateUrl: 'partials/welcome.html',
		controller: 'AuthCtrl'
	    })
	.otherwise({redirectTo: '/index'});

    //$locationProvider.html5Mode(true);
});
