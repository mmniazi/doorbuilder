angular.module('app.controllers', [])
// TODO: add current price to each page
// TODO: create front page loader
// TODO: create a single controller for all pages
.controller('sidemenuCtrl', function ($scope, $window) {
	$scope.sideMenuWidth =
		($window.innerWidth >= 768) ? $window.innerWidth * 0.5 : $window.innerWidth * 0.7;
})

.controller('startCtrl', function ($scope, doorService) {
	$scope.id = 1;
	$scope.isLaminated = doorService.isLaminated;
	$scope.set = function (type) {
		$scope.isLaminated = type;
		doorService.isLaminated = type;
	}
})

.controller('selectorCtrl', function ($scope, doorService, textures, $routeParams) {
	$scope.id = $routeParams.id;
	$scope.selected = doorService.texture;
	$scope.images = textures;
	$scope.set = function (texture) {
		$scope.selected = texture;
		doorService.texture = texture;
	}
})

.controller('page7Ctrl', function ($scope, doorService, handles) {
	$scope.id = 7;

})
