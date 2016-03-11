// app.controller('AllFilesController', function ($scope, allFiles, CartFactory, AuthService, localStorageFactory) {
app.controller('AllFilesController', function ($scope, allFiles, AuthService) {
    $scope.ratings = [1,2,3,4,5]
    $scope.diets = ['Vegetarian','Vegan','Paleo','Gluten-free','Kosher','Halal', 'None', 'Dairy-free'];
    $scope.cuisines = ['Italian','Indian','French', 'Mediterrenean', 'Brazilian', 'Thai','New American','Chinese','Japanese','Vietnamese','Mexican','Peruvian','Food truck','Sandwiches','Pub food', 'Spanish'];


    $scope.allFiles = allFiles;
        
    // Fow now this method only conssiders first element in diet array, needs refactoring
    $scope.updateFiles = function() {
        $scope.allFiles = $scope.allFiles.filter(function(file) {
            if (!$scope.cuisine) return file.diet[0] === $scope.diet;
            if(!$scope.diet) return file.cuisine === $scope.cuisine;
            return file.cuisine === $scope.cuisine && file.diet[0] === $scope.diet
        })
    }

    $scope.resetFiles = function() {
        $scope.allFiles = allFiles;
    }
    
    // $scope.addSong = function (file){
    //   CartFactory.addSongToCart(file);
    // }

    $scope.isLoggedIn = function () {
        return AuthService.isAuthenticated();
    };

    // if we have not already checked for locally stored cart
    // and if user is not authenticated, copy locally stored cart to cached cart

    // function copyLocalCart() {
    //     if(!localStorageFactory.alreadyFetchedLocalCart && !$scope.isLoggedIn() && localStorageFactory.getLocalCart().length > 0) {
    //         CartFactory.copyCartFromLocalStorage(localStorageFactory.getLocalCart());
    //     }
    // }

    // copyLocalCart();

});
