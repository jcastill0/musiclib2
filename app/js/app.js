'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myMusicLib', ['ngResource', 'myMusicLib.filters', 'myMusicLib.directives']);

app.config(function($routeProvider) {
    $routeProvider
	.when('/index',
	    {
		templateUrl: 'partials/welcome.html',
		controller: 'WelcomeCtrl'
	    })
	.when('/playlists',
	    {
		templateUrl: 'partials/playlist/playlists.html',
		controller: 'PlaylistCtrl'
	    })
	.when('/playlists/add',
	    {
		templateUrl: 'partials/playlist/playlistDetail.html',
		controller: 'PlaylistDetailCtrl'
	    })
	.when('/playlists/play/:playlistID',
	    {
		templateUrl: 'partials/playlist/play.html',
		controller: 'PlayCtrl'
	    })
	.when('/playlists/edit/:playlistID',
	    {
		templateUrl: 'partials/playlist/playlistDetail.html',
		controller: 'PlaylistDetailCtrl'
	    })
	.when('/playlists/delete/:playlistID',
	    {
		templateUrl: 'partials/playlist/playlistDetail.html',
		controller: 'PlaylistDetailCtrl'
	    })
	.when('/artists',
	    {
		templateUrl: 'partials/artist/artists.html',
		controller: 'ArtistCtrl'
	    })
	.when('/artists/:artistID',
	    {
		templateUrl: 'partials/artist/artistDetail.html',
		controller: 'ArtistDetailCtrl'
	    })
	.when('/users/:userID',
	    {
		templateUrl: 'partials/profile/userDetail.html',
		controller: 'UserDetailCtrl'
	    })
	.when('/view1',
	    {
		templateUrl: 'partials/partial1.html',
		controller: 'MyCtrl1'
	    })
	.when('/view2',
	    {
		templateUrl: 'partials/partial2.html',
		controller: 'MyCtrl2'
	    })
	.otherwise({redirectTo: '/view1'});
});
