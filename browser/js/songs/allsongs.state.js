// meals.js

app.config(function ($stateProvider) {
    $stateProvider.state('allSongs', {
        url: '/songs',
        controller: 'AllSongsController',
        templateUrl: 'js/songs/allsongs.html', 
        resolve: {
            allSongs: function(SongsFactory) {
                return SongsFactory.fetchAllSongs();
            }
        }
    });

});
