app.controller('UploadCtrl', function ($scope, AuthService, $window, filepickerService, UploadFactory, localStorageService) {

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

    $scope.pickFile = pickFile;

    $scope.onSuccess = onSuccess;

    $scope.files = JSON.parse($window.localStorage.getItem('files') || '[]');


    // $scope.getFileUrl = function(myUrl) {
    //     $scope.fileUrl = myUrl;
    //     console.log("fileUrl is now", $scope.fileUrl)
    // }


    $scope.isLoggedIn = function () {
        return AuthService.isAuthenticated();
    };



    function pickFile(){
        filepickerService.pick(
            // would like to set another param to write to user-specific bucket
            {mimetype: 'audio/*'},
            onSuccess
        );
    };

    function onSuccess(Blob){
        // would like to move this to a factory, when I have time to refactor
        console.log("get file info in Upload Controller")
        $scope.files.push(Blob);
        $window.localStorage.setItem('files', JSON.stringify($scope.files));
        $scope.upload.filePath = $scope.files[$scope.files.length - 1].url;
        $scope.upload.s3key = $scope.files[$scope.files.length - 1].key;
        // console.log(localStorageService.get('files'))
        // $scope.upload.filePath = localStorageService.get('files').url;
        console.log("scope upload path:",$scope.upload.filePath,"key:", $scope.upload.s3key)

    };

});
