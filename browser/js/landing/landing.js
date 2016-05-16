app.config(function ($stateProvider) {
    $stateProvider.state('landing', {
        url: '/landing',
        templateUrl: 'js/landing/landing.html',
        controller: 'landingCtrl'

    });
});

app.controller('landingCtrl',function($scope,AuthService) {

	$scope.isLoggedIn = function () {
		return AuthService.isAuthenticated();
	};
 
});