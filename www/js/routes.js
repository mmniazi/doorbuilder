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
	}).state('sidemenu.page1', {
		url: "/page1",
		views: {
			'content': {
				templateUrl: "templates/start.html",
				controller: 'page1Ctrl'
			}
		}
	}).state('sidemenu.page2', {
		url: "/page2",
		views: {
			'content': {
				templateUrl: "templates/selector.html",
				controller: 'page2Ctrl'
			}
		}
	}).state('sidemenu.page3', {
		url: "/page3",
		views: {
			'content': {
				templateUrl: "templates/selector.html",
				controller: 'page3Ctrl'
			}
		}
	}).state('sidemenu.page4', {
		url: "/page4",
		views: {
			'content': {
				templateUrl: "templates/selector.html",
				controller: 'page4Ctrl'
			}
		}
	}).state('sidemenu.page5', {
		url: "/page5",
		views: {
			'content': {
				templateUrl: "templates/selector.html",
				controller: 'page5Ctrl'
			}
		}
	}).state('sidemenu.page6', {
		url: "/page6",
		views: {
			'content': {
				templateUrl: "templates/selector.html",
				controller: 'page6Ctrl'
			}
		}
	});


	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/sidemenu/page1');

});
