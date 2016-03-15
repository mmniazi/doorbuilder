angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

	// Ionic uses AngularUI Router which uses the concept of states
	// Learn more here: https://github.com/angular-ui/ui-router
	// Set up the various states which the app can be in.
	// Each state's controller can be found in controllers.js
	$stateProvider.
	state('sidemenu', {
		url: '/sidemenu',
		abstract: true,
		templateUrl: 'templates/sidemenu.html',
    controller: 'sidemenuCtrl'
	}).

	state('sidemenu.page1', {
		url: "/page1",
		views: {
			'content': {
				templateUrl: "templates/page1.html",
				controller: 'page1Ctrl'
			}
		}
	}).

	state('sidemenu.page2', {
		url: "/page2",
		views: {
			'content': {
				templateUrl: "templates/page2.html",
				controller: 'page2Ctrl'
			}
		}
	}).

	state('sidemenu.page3', {
		url: "/page3",
		views: {
			'content': {
				templateUrl: "templates/page3.html",
				controller: 'page3Ctrl'
			}
		}
	});

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/sidemenu/page1');

});
