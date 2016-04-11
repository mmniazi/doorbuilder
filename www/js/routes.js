angular.module('app.routes', [])

.config(function ($stateProvider, $urlRouterProvider) {
	// Set up the various states which the app can be in.
	// Each state's controller can be found in controllers.js
	$stateProvider.
	state('sidemenu', {
		url: '/sidemenu',
		abstract: true,
		templateUrl: 'templates/sidemenu.html',
		controller: 'sidemenuCtrl'
	}).state('sidemenu.start', {
		url: "/start",
		views: {
			'content': {
				templateUrl: "templates/start.html",
				controller: 'startCtrl'
			}
		}
	}).state('sidemenu.selector', {
		url: "/selector/:id",
		views: {
			'content': {
				templateUrl: "templates/selector.html",
				controller: 'selectorCtrl'
			}
		}
	});
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/sidemenu/start');

});
