'use-strict'

app.factory('FilesFactory', function($http, $state) {
	var FilesFactory = {};
	// var allFiles = [];

	var cache = {
		'Files': []
	}

	function setCache(obj){
		angular.copy(obj.data, cache[obj.type])
		return cache[obj.type]; 
	}

	FilesFactory.goToTrack = function(trackid) {
		console.log("FilesFactory.goToTrack", trackid)
		// $state.go('oneFile', {id: trackid})
	}

	FilesFactory.fetchAllFiles = function() {
		return $http.get('/api/files')
		.then(function extractData(response) {
			return {type: 'Files', data: response.data };
		})
		.then(setCache)

	}

	FilesFactory.updateCache = function(type, data) {
        if(data) {
            cache[type].push(data)         
        }
        return cache[type];
    }


	return FilesFactory;

})