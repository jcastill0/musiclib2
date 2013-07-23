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

/////////////////////////////////

app.controller('PlayCtrl', function($scope, $routeParams, Playlist, $log, audioControl) {
  $scope.playlist = Playlist.get({playlistID:$routeParams.playlistID});
  var ix = 0;
  $scope.currentlyPlaying = null;
  audioControl.addEventListener('ended', function() {
      ix = ix + 1;
      if (ix >= $scope.playlist.songs.length) {
	  return;
      }
      var song = $scope.playlist.songs[ix];
      $log.log("Play["+ix+"]: " + song.name);
      audioControl.src = song.path;
      audioControl.play();
      $scope.currentlyPlaying = song.name;
  });

  $scope.startPlaying = function () {
      ix = 0;
      if ($scope.playlist.songs.length == 0) {
	  alert("Empty Playlist");
	  return;
      }
      var song = $scope.playlist.songs[ix];
      $log.log("Play["+ix+"]: " + song.name);
      audioControl.src = song.path;
      audioControl.play();
      $scope.currentlyPlaying = song.name;
  };
});

//////////////////////////////////

app.controller('PlaylistDetailCtrl', function($scope, $routeParams, Playlist, Song, $location, $log) {
  $scope.playlist = Playlist.get({playlistID:$routeParams.playlistID});
  $scope.songs = Song.query();

  $scope.addSong = function(song) {
    $scope.playlist.songs.push(song);	// add to playlist
  };
  $scope.removeSong = function(song) {
    var songIDtoBeRemoved = song.id;
    var index = 0;
    angular.forEach($scope.playlist.songs, function(song) {
	if (song.id == songIDtoBeRemoved) {
	    $scope.playlist.songs.splice(index, 1);
	}
	index++;
    });
  };

  $scope.save = function() {
    $log.log($scope.playlist.name);
    Playlist.save({playlistID:$routeParams.playlistID}, $scope.playlist, function (playlist) {
	$log.log(playlist);
	$location.path('/');
    });
  };
});

/////////////////////////////////////

app.controller('ArtistCtrl', function($scope, Artist) {
  $scope.artists = Artist.query();
});


app.controller('ArtistDetailCtrl', function($scope, $routeParams, $log, $location, Artist, Playlist) {
  $scope.artist = Artist.get({artistID:$routeParams.artistID});
  $scope.playlists = Playlist.query();
  var songs = [];
  var selectedPlaylist = null;

  $scope.save = function() {
    if (selectedPlaylist == null) {
	alert("Must select a Playlist first");
	return;
    }
    if (songs.length <= 0) {
	alert("No songs added");
	return;
    }
    $log.log(selectedPlaylist.name);
    angular.forEach (songs, function (song) {
	selectedPlaylist.songs.push (song);
    });
    Playlist.save({playlistID:selectedPlaylist.id}, selectedPlaylist, function (playlist) {
	$log.log(playlist);
	$location.path('/');
    });
  };

  function addSongToPlaylist(song) {
    songs.push(song); 
  };
  function removeSongFromPlaylist(song) {
    var songIDtoBeRemoved = song.id;
    var index = 0;
    angular.forEach(songs, function(song) {
	if (song.id == songIDtoBeRemoved) {
	    songs.splice(index, 1);
	}
	index++;
    });
  };

  $scope.songChecked = function(song, checkedValue) {
    if (checkedValue) {
	addSongToPlaylist(song);
    } else {
	removeSongFromPlaylist(song);
    }
  };

  $scope.playlistSelected = function (playlist) {
    selectedPlaylist = Playlist.get({playlistID:playlist.id});
  };
});


app.controller('UserDetailCtrl', function($scope, $routeParams, $log, $location, User) {
  $scope.user = User.get({userID:$routeParams.userID});

  $scope.save = function () {
	$log.log($scope.user.firstName);
	User.save({userID:$routeParams.userID}, $scope.user, function(user) {
		$log.log (user);
	});
	$location.path('/');
  };
});

