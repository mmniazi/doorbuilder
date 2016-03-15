angular.module('app.controllers', [])

.controller('sidemenuCtrl', function($scope, $window) {
	$scope.page = 1;

	if ($window.innerWidth >= 768) {
		$scope.lSideMenuWidth = $window.innerWidth * 0.2;
		$scope.rSideMenuWidth = $window.innerWidth * 0.3;
	} else {
		$scope.lSideMenuWidth = $window.innerWidth * 0.6;
		$scope.rSideMenuWidth = $window.innerWidth * 0.7;
	}

	$scope.setPage = function(page) {
		$scope.page = page;
	}

	$scope.getMenuClass = function(page) {
		return ($scope.page == page) ? "selectedMenu" : "deSelectedMenu";
	}
})

.controller('page1Ctrl', function($scope, doorService) {
	$scope.laminated = doorService.laminated;

	$scope.setType = function(type) {
		$scope.laminated = type;
		doorService.laminated = type;
	}
})

.controller('page2Ctrl', function($scope, doorService, wtexsFactory) {
	$scope.wtexs = wtexsFactory;

})

.controller('page3Ctrl', function($scope) {

})
