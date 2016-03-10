// meals.js

app.config(function ($stateProvider) {
    $stateProvider.state('allFiles', {
        url: '/files',
        controller: 'AllFilesController',
        templateUrl: 'js/files/allfiles.html', 
        resolve: {
            allFiles: function(FilesFactory) {
                return FilesFactory.fetchAllFiles();
            }
        }
    });

});
