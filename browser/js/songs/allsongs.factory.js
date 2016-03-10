'use-strict'

app.factory('SongsFactory', function($http) {
	var SongsFactory = {};
	var allSongs = [];

	var cache = {
		'Songs': []
	}

	function setCache(obj){
		angular.copy(obj.data, cache[obj.type])
		return cache[obj.type]; 
	}

	SongsFactory.fetchAllSongs = function() {
		return $http.get('/api/songs')
		.then(function extractData(response) {
			return {type: 'Songs', data: response.data };
		})
		.then(setCache)

	}

	SongsFactory.updateCache = function(type, data) {
        if(data)  {
            cache[type].push(data)         
        }
        return cache[type];
    }


	return SongsFactory;

})