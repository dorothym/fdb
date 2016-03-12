app.controller('PerformerCtrl', function($scope, songsByPerformer, $stateParams, onePerformer) {
	// console.log("songs by performer", songsByPerfomer)
	$scope.allFiles = songsByPerformer;
	$scope.performer = onePerformer;
});