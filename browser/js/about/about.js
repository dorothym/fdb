app.config(function ($stateProvider) {

    $stateProvider.state('about', {
        url: '/about',
        controller: 'AboutController',
        templateUrl: 'js/about/about.html'
    });

});

app.controller('AboutController', function ($scope, FullstackPics) {

	// $rootScope.$state = $state;

	// $rootScope.isHomepage = function() {
	// 	// $rootScope.$apply(function() {
	// 		return false;
	// 	// });
	// }

    // Images of beautiful Fullstack people.
    $scope.images = _.shuffle(FullstackPics);

});