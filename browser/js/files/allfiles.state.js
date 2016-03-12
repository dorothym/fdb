app.config(function ($stateProvider) {
    console.log("allfiles state")
    
    $stateProvider.state('allFiles', {
        url: '/tracks',
        controller: 'AllFilesController',
        templateUrl: 'js/files/allfiles.html', 
        resolve: {
            allFiles: function(FilesFactory) {
                return FilesFactory.fetchAllFiles();
            }
        }
    });
});
