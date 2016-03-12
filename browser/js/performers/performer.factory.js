app.factory('PerformerFactory', function($http) {
	var PerformerFactory = {};

	PerformerFactory.getSongsByPerformer = function(name){
		console.log("in PerformerFactory getSongsByPerformer. Name:",name)
		return $http.get('/api/files/artist/' + name)
		.then(function(res){
			console.log("returning data:",res)
			return res.data;
		},
		function(err) {
		  console.error("Error in getPerformer",err)
		});
	}

	return PerformerFactory;
})