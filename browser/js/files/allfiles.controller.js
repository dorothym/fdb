app.controller('AllFilesController', function ($scope, allFiles, AuthService) {

    $scope.foo = "bar"
    $scope.genres = ['Old-time','Rock','Folk','Bluegrass','Oldies']

    $scope.allFiles = allFiles;
        
    $scope.resetFiles = function() {
        $scope.allFiles = allFiles;
    }


    $scope.isLoggedIn = function () {
        return AuthService.isAuthenticated();
    };


    $scope.goToArtist = function(artistName) {
        console.log("going to artist",artistName)
        $state.go('songsbyartist', {
            name: artistName
        })
    }

});
