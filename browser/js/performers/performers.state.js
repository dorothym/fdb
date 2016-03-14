app.config(function($stateProvider) {
	console.log("artist name state")

	$stateProvider.state('songsbyartist', {
		url: '/artist/:name',
		controller: 'PerformerCtrl',
		templateUrl: 'js/performers/performer.html',
		resolve: {
			songsByPerformer: function($stateParams, PerformerFactory) {
				return PerformerFactory.getSongsByPerformer($stateParams.name)
			},
			onePerformer: function($stateParams) {
				return $stateParams.name;
			}
		},
		params: {
			name: null
		}
	})
})
