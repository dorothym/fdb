// app.controller('AllSongsController', function ($scope, allSongs, CartFactory, AuthService, localStorageFactory) {
app.controller('AllSongsController', function ($scope, allSongs, AuthService) {
    $scope.ratings = [1,2,3,4,5]
    $scope.diets = ['Vegetarian','Vegan','Paleo','Gluten-free','Kosher','Halal', 'None', 'Dairy-free'];
    $scope.cuisines = ['Italian','Indian','French', 'Mediterrenean', 'Brazilian', 'Thai','New American','Chinese','Japanese','Vietnamese','Mexican','Peruvian','Food truck','Sandwiches','Pub food', 'Spanish'];


    $scope.allSongs =  allSongs;
        
    // Fow now this method only conssiders first element in diet array, needs refactoring
    $scope.updateSongs = function() {
        $scope.allSongs = $scope.allSongs.filter(function(song) {
            if (!$scope.cuisine) return song.diet[0] === $scope.diet;
            if(!$scope.diet) return song.cuisine === $scope.cuisine;
            return song.cuisine === $scope.cuisine && song.diet[0] === $scope.diet
        })
    }

    $scope.resetSongs = function() {
        $scope.allSongs =  allSongs;
    }
    
    $scope.addSong = function (song){
      CartFactory.addSongToCart(song);
    }

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
