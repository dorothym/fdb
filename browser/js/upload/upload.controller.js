app.controller('UploadCtrl', function ($scope, AuthService, $window, filepickerService, UploadFactory, localStorageService, $state) {

    $scope.genreArray = ['Old-time','Rock','Folk','Bluegrass','Country']

    $scope.log = function() {
            // uploadFactory.upload()
        }
    $scope.successmessage = null;

    $scope.uploadsuccess = null;

    $scope.upload = {}; // the data that will be uploaded

    $scope.error = null;

    $scope.pickFile = pickFile; // from FileStack API

    $scope.onSuccess = onSuccess; // from FileStack API

    $scope.files = JSON.parse($window.localStorage.getItem('files') || '[]'); // from FileStack API

    $scope.performers = [{id: 'performer1'}]; // allow for multiple performers

    $scope.addNewPerformer = function() {
        var newItemNo = $scope.performers.length+1;
        // console.log("adding new performer field to the form")
        $scope.performers.push({'id':'performer'+newItemNo});
    };

    $scope.submitUpload = function(form) { 
        form.performers = $scope.performers.map(function(current, index) {
            return $scope.performers[index].name;
        });
        UploadFactory.submitUpload(form)
        .then(function(newfile) {
            $state.go('oneFile', {
                successmessage: 'File uploaded successfully!',
                id: newfile._id
            })
        })
    }


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

        $scope.files.push(Blob);
        $window.localStorage.setItem('files', JSON.stringify($scope.files));
        $scope.upload.filePath = $scope.files[$scope.files.length - 1].url;
        $scope.upload.s3key = $scope.files[$scope.files.length - 1].key;
        $scope.uploadsuccess = 'File upload successful!';
        $scope.$digest();
        // $scope.upload.filePath = localStorageService.get('files').url;
        // console.log("scope upload path:",$scope.upload.filePath,"key:", $scope.upload.s3key)

    };


});
