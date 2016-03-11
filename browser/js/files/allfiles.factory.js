'use-strict'

app.factory('FilesFactory', function($http) {
	var FilesFactory = {};
	// var allFiles = [];

	var cache = {
		'Files': []
	}

	function setCache(obj){
		angular.copy(obj.data, cache[obj.type])
		return cache[obj.type]; 
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