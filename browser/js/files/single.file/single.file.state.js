'use strict';

app.config(function ($stateProvider) {
  console.log("one file state")

    $stateProvider.state('oneFile', {
        url:'/tracks/:id',
        controller: 'FileController',
        templateUrl: 'js/files/single.file/file.html',
        params: {
          id: null,
          successmessage: null
        },
        // template: '<h1>hello</h1>'
        // params: {
        //   id: null
        // }
        resolve: {
            oneFile: function(SingleFile, $stateParams, $http) {
              // console.log("inside oneFile resolve")
              return SingleFile.getFile($stateParams.id)
              // return $http.get('api/files/' + $stateParams.id)
            }
        }
    });

});