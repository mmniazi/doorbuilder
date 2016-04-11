angular.module('app.controllers', [])
// TODO: add current price to each page
// TODO: create front page loader
.controller('sidemenuCtrl', function ($scope, $window) {
	$scope.rSideMenuWidth =
		($window.innerWidth >= 768) ? $window.innerWidth * 0.5 : $window.innerWidth * 0.7;
})

.controller('page1Ctrl', function ($scope, doorService) {
	$scope.isLaminated = doorService.isLaminated;
	$scope.set = function (type) {
		$scope.isLaminated = type;
		doorService.isLaminated = type;
	}
})

.controller('page2Ctrl', function ($scope, doorService, textures) {
	$scope.selected = doorService.texture;
	$scope.images = textures;
	$scope.set = function (texture) {
		$scope.selected = texture;
		doorService.texture = texture;
	}
})

.controller('page3Ctrl', function ($scope, doorService, designs) {
	$scope.selected = doorService.design;
	$scope.images = designs;
	$scope.set = function (design) {
		$scope.selected = design;
		doorService.lamination = design;
	}
})

.controller('page4Ctrl', function ($scope, doorService, lamination) {
	$scope.selected = doorService.lamination;
	$scope.images = lamination;
	$scope.set = function (lamination) {
		$scope.selected = lamination;
		doorService.lamination = lamination;
	}
})

.controller('page5Ctrl', function ($scope, doorService, hinges) {
	$scope.selected = doorService.hinge;
	$scope.images = hinges;
	$scope.set = function (hinge) {
		$scope.selected = hinge;
		doorService.hinge = hinge;
	}
})

.controller('page6Ctrl', function ($scope, doorService, handles) {
	$scope.selected = doorService.handle;
	$scope.images = handles;
	$scope.set = function (handle) {
		$scope.selected = handle;
		doorService.handle = handle;
	}
})

.controller('page7Ctrl', function ($scope, doorService, handles) {

})
