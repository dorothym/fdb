app.factory('PerformerFactory', function($http) {
	var PerformerFactory = {};

	PerformerFactory.getSongsByPerformer = function(name){
		console.log("in PerformerFactory getSongsByPerformer. Name:",name)
		return $http.get('/api/files/artist/' + name)
		.then(function(response) {
			// return {type: 'Files', data: response.data };
			return response.data
		})
		// .then(function(tracks){
		// 	console.log("retrieved array of tracks:",tracks.data)
		// 	// return tracks.data;
		// },
		// function(err) {
		//   console.error("Error in getPerformer",err)
		// });
	}

	return PerformerFactory;
})