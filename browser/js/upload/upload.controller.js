app.controller('UploadCtrl', function ($scope, AuthService, $window, filepickerService, UploadFactory, localStorageService) {

 // $scope.choices = [{id: 'choice1'}, {id: 'choice2'}];
    $scope.performers = [{id: 'performer1'}];

    $scope.genreArray = ['Old-time','Rock','Folk','Bluegrass','Oldies', 'Country']


    // $scope.performers=[];

    // for (var i = 0; i < $scope.performers.length; i++) {
    //     uploadform.performers.push($scope.performers[i])
    // }


    $scope.addNewPerformer = function() {
        var newItemNo = $scope.performers.length+1;
        console.log("adding new performer field to the form")
        // $scope.performers.push({'id':'performer'+newItemNo});
        $scope.performers.push({'id':'performer'+newItemNo});
    };

 

    $scope.submitUpload = function(form) { 
        console.log("inside submitUpload. form data is",form)
        form.performers = $scope.performers.map(function(current, index) {
            return $scope.performers[index].name;
        });
        console.log("form.performers is", form.performers)
        UploadFactory.submitUpload(form);
    }


    $scope.fileUrl = "";

    $scope.log = function() {
        // uploadFactory.upload()
    }
    $scope.successmessage = null;
    

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
