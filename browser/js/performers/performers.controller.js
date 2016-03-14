app.controller('PerformerCtrl', function($scope, songsByPerformer, $stateParams, onePerformer) {
	// console.log("songs by performer", songsByPerfomer)

	$scope.performerFiles = songsByPerformer;

	$scope.performer = onePerformer;

	$scope.goToArtist = function(artistName) {
		console.log("going to artist",artistName)
		$state.go('songsbyartist', {
			name: artistName
		})
	}
});