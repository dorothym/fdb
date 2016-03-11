'use strict';

app.config(function ($stateProvider) {

    // Register our *about* state.
    $stateProvider.state('File', {
        url: '/files/:id',
        controller: 'FileController',
        templateUrl: 'js/files/single.file.page/file.html',
        resolve: {
          File: function(SingleFile, $stateParams){
            return SingleFile.getFile($stateParams.id);
          },
          ratings: function(SingleFile, $stateParams){
            return SingleFile.getRatings($stateParams.id);
          },
          chef: function(SingleFile, $stateParams){
            return SingleFile.getChef($stateParams.id);
          }
        }
    });

});