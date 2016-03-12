app.controller('FileController', function ($scope, AuthService, SingleFile, oneFile) {

	$scope.file = oneFile;
	console.log("file is", $scope.file)

  // $scope.file = oneFile;
  // console.log("Inside FileContoller scope.file is",oneFile)
  $scope.isLoggedIn = function () {
      return AuthService.isAuthenticated();
  };

});