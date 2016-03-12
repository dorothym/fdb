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
			performer: function($stateParams) {
				return $stateParams.name;
			}
		}
	})
})
