'use strict';

app.config(function ($stateProvider) {

    // Register our *about* state.
    $stateProvider.state('Song', {
        url: '/songs/:id',
        controller: 'SongController',
        templateUrl: 'js/songs/single.song.page/song.html',
        resolve: {
          Song: function(SingleSong, $stateParams){
            return SingleSong.getSong($stateParams.id);
          },
          ratings: function(SingleSong, $stateParams){
            return SingleSong.getRatings($stateParams.id);
          },
          chef: function(SingleSong, $stateParams){
            return SingleSong.getChef($stateParams.id);
          }
        }
    });

});