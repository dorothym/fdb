app.controller('UploadCtrl', function ($scope, AuthService, $window, filepickerService, UploadFactory) {

    $scope.fileUrl = "";

    $scope.log = function() {
        // uploadFactory.upload()
    }
    $scope.successmessage = null;
    

    $scope.submitUpload = UploadFactory.submitUpload;
    // console.log("stateparams:",$stateParams)

    $scope.upload = {};
    // $scope.error = null;
    $scope.error = null;

    $scope.getFileUrl = function(myUrl) {
        $scope.fileUrl = myUrl;
        console.log("fileUrl is now", $scope.fileUrl)
    }


    $scope.isLoggedIn = function () {
        return AuthService.isAuthenticated();
    };


    $scope.files = JSON.parse($window.localStorage.getItem('files') || '[]');

    $scope.pickFile = pickFile;

    $scope.onSuccess = onSuccess;

    function pickFile(){
        filepickerService.pick(
            {mimetype: 'audio/*'},
            onSuccess
        );
    };

    function onSuccess(Blob){
        $scope.files.push(Blob);
        $window.localStorage.setItem('files', JSON.stringify($scope.files));
    };

});
