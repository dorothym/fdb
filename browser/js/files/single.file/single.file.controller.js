app.controller('FileController', function ($scope, AuthService, SingleFile, oneFile, FilesFactory, ngAudio) {

	// ngAudio testing


	$scope.file = oneFile;
	// $scope.file.path = "https://cdn.filepicker.io/api/file/" + oneFile._id
	// console.log("scope file path is ",$scope.file.path)
    // $scope.audioObject = ngAudio.load($scope.file.path); // returns NgAudioObject
	// $scope.audioObject = ngAudio.load("https://cdn.filepicker.io/api/file/MckPdgJgQFSoRSkwApCh"); // returns NgAudioObject
    // $scope.audioObject = ngAudio.load($scope.file.filePath);
	console.log("file is", $scope.file)
	console.log("filepath is", $scope.file.filePath)
	$scope.audioObject = ngAudio.load($scope.file.filePath); // returns NgAudioObject

	$scope.goToTrack = FilesFactory.goToTrack;

	$scope.isLoggedIn = function () {
		return AuthService.isAuthenticated();
	};

 
});