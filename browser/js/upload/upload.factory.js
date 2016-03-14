app.factory('UploadFactory', function($http, $state) {
	
	var UploadFactory = {};

	UploadFactory.submitUpload = function(uploadform) {
		console.log("inside uploadfactory submitupload")
		return $http.post('/api/files', uploadform)
		// .then(function(success) {
		// 	console.log("successful upload to api/files")
		// 	// $state.go('oneFile', { id: data._id, successmessage: 'Successfully uploaded file!'})
		// 	theIdToGoTo = success._id
		// },
		// function(err) {
		// 	console.error("Error:",err)
		// })
		// .then(function() {
			// return $http.put('/api/files/56e5d876b59ace134017ca75/performers', {
			// 	performers: "Alex",
			// 	performers: "Diane"
			// })
		// })
		.then(function(file) {
			console.log("success in uploadfactory submitupload", file.data)
			// res.json(file.data)
			return file.data;
		},
		function(err) {
			console.error('error...', err)
		})
	}

	return UploadFactory;
})