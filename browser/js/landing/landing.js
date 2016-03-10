app.config(function ($stateProvider) {
    $stateProvider.state('landing', {
        url: '/',
        templateUrl: 'js/landing/landing.html',
        controller: 'landingCtrl'

    });
});

app.controller('landingCtrl',function($scope,AuthService) {

	// console.log("in landing page controller")

	$scope.isLoggedIn = function () {
	    return AuthService.isAuthenticated();
	};

	// function copyLocalCart() {

	// 	// if we have not already checked for locally stored cart
	// 	// and if user is not authenticated, copy locally stored cart to cached cart
		
	// 	if(!localStorageFactory.alreadyFetchedLocalCart && !$scope.isLoggedIn() && localStorageFactory.getLocalCart().length > 0) {
	// 		CartFactory.copyCartFromLocalStorage(localStorageFactory.getLocalCart());
	// 		// console.log("just copied cart from local to cache",localStorageFactory.getLocalCart());
	// 	}
	// 	else if ($scope.isLoggedIn()) {
	// 		// console.log("user is logged in. will not populate cache from local cart");
	// 	}
	// 	else {
	// 		// console.log("already checked for local cart");
	// 	}

	// }

	// copyLocalCart();

 
});