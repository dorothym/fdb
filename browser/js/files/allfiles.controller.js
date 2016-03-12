// app.controller('AllFilesController', function ($scope, allFiles, CartFactory, AuthService, localStorageFactory) {
app.controller('AllFilesController', function ($scope, allFiles, AuthService) {
    $scope.genres = ['Old-time','Rock','Folk','Bluegrass','Oldies']

    $scope.allFiles = allFiles;
        
    // Fow now this method only conssiders first element in diet array, needs refactoring
    $scope.updateFiles = function() {
    //     $scope.allFiles = $scope.allFiles.filter(function(file) {
    //         if (!$scope.cuisine) return file.diet[0] === $scope.diet;
    //         if(!$scope.diet) return file.cuisine === $scope.cuisine;
    //         return file.cuisine === $scope.cuisine && file.diet[0] === $scope.diet
    //     })
    }

    $scope.resetFiles = function() {
        $scope.allFiles = allFiles;
    }


    $scope.isLoggedIn = function () {
        return AuthService.isAuthenticated();
    };


});
