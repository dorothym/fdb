app.factory('FilesFactory', function($http, $state) {
	var FilesFactory = {};


	FilesFactory.goToTrack = function(trackid) {
		console.log("FilesFactory.goToTrack", trackid)
		// $state.go('oneFile', {id: trackid})
	}

	FilesFactory.fetchAllFiles = function() {
		console.log("fetching all files in FilesFactory")
		return $http.get('/api/files')
		.then(function(response) {
			console.log("extracting data",response)
			// return {type: 'Files', data: response.data };
			return response.data;
			// res.json(response.data)
		},
		function(err) {
			console.error("failing",err)
		})

	}

	return FilesFactory;

})