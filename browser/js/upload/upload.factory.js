app.factory('UploadFactory', function($http) {
	var UploadFactory = {};


	UploadFactory.submitUpload = function(data) {
		return $http.post('/api/files', data)
		.then(function() {
			console.log("successful upload to api/files")
		},
		function(err) {
			console.error("Error:",err)
		})
	}

	return UploadFactory;
})