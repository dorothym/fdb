app.controller('FileController', function ($scope, AuthService, SingleFile, oneFile, FilesFactory, ngAudio, $stateParams, filepickerService) {

	$scope.successmessage = $stateParams.successmessage;

	$scope.file = oneFile;
	$scope.audioObject = ngAudio.load($scope.file.filePath); // returns NgAudioObject

	$scope.goToTrack = FilesFactory.goToTrack;

	$scope.isLoggedIn = function () {
		return AuthService.isAuthenticated();
	};

     $scope.downloadFile = function(file) {
     	var locationOfDot = file.s3key.indexOf('.')
     	var suggestedExtension = file.s3key.substring(locationOfDot)
        console.log("in downloadFile",file)
        filepickerService.exportFile(file.filePath,
            {
            suggestedFilename: file.title,
            extension: suggestedExtension
            },
        function(Blob){
	        console.log(Blob.url);
	        }
        );
    };
});