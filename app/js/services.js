'use strict';

/* Services */


// In this case it is a simple value service.
//angular.module('myMusicLib.services', []).value('version', '0.1');

app.value('version', '0.2');

app.service('userService', function ($http) {
    this.getUserDetail = function (userID) {
	$http.get('data/user_' + userID + '.json')
		.success(function(data) {
			return (data);
		})
		.error(function(data) {
			return (data || "Request failed");
		});
	return null;
    };
});


app.factory('User', function ($resource) {
  var userRsrc = $resource('data/users/:userID.json', {userID:'@userID'}, {});
  return (userRsrc);
});

/*
app.factory('User', function ($resource, $routeParams) {
  var userRsrc = $resource('data/user/' + $routeParams.userID + '.json');
  return (userRsrc);
});
*/



