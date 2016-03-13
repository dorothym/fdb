app.controller('FileController', function ($scope, AuthService, SingleFile, oneFile, FilesFactory) {

	// var play = require('play-audio');

	$scope.file = oneFile;
	console.log("file is", $scope.file)

	$scope.goToTrack = FilesFactory.goToTrack;

	// $scope.file = oneFile;
	// console.log("Inside FileContoller scope.file is",oneFile)
	$scope.isLoggedIn = function () {
		return AuthService.isAuthenticated();
	};

 
	// // play('song.mp3').autoplay()
	// $scope.parent = document.querySelector('.my-player')
	// $scope.play(['song.mp3', 'song.ogg'], $scope.parent).autoplay.controls()

});