app.controller('AllFilesController', function ($scope, allFiles, AuthService) {

    $scope.genres = ['Old-time','Rock','Folk','Bluegrass','Country']

    $scope.allFiles = allFiles;
        
    $scope.resetFiles = function() {
        $scope.allFiles = allFiles;
    }


    $scope.isLoggedIn = function () {
        return AuthService.isAuthenticated();
    };

    $scope.goToArtist = function(artistName) {
        $state.go('songsbyartist', {
            name: artistName
        })
    }

});
