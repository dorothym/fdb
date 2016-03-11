app.config(function ($stateProvider) {

    $stateProvider.state('upload', {
        url: '/upload',
        templateUrl: 'js/upload/upload.html',
        controller: 'UploadCtrl'
    });

});

// app.controller('uploadCtrl', function ($scope, AuthService, $state, $http, $stateParams,localStorageFactory, CartFactory) {
// app.controller('UploadCtrl', function ($scope, AuthService, $state, $http, $stateParams) {
    // app.controller('UploadCtrl', function ($scope, AuthService, $state, $http) {

app.controller('UploadCtrl', function ($scope, AuthService) {

    // $scope.cuisines = ['Italian','Indian','French', 'Mediterrenean', 'Brazilian', 'Thai','New American','Chinese','Japanese','Vietnamese','Mexican','Peruvian','Food truck','Sandwiches','Pub food', 'Spanish'];

    $scope.fileUrl = "";

    $scope.log = function() {
        // uploadFactory.upload()
    }
    $scope.successmessage = null;
    

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

    // if we have not already checked for locally stored cart
    // and if user is not authenticated, copy locally stored cart to cached cart

    // function copyLocalCart() {
    //     if(!localStorageFactory.alreadyFetchedLocalCart && !$scope.isLoggedIn() && localStorageFactory.getLocalCart().length > 0) {
    //         CartFactory.copyCartFromLocalStorage(localStorageFactory.getLocalCart());
    //     }
    // }

    // copyLocalCart();
});
