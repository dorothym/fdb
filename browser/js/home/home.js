app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'homeCtrl'

    });
});

app.controller('homeCtrl',function($scope,AuthService) {

	$scope.isLoggedIn = function () {
		return AuthService.isAuthenticated();
	};

 
});