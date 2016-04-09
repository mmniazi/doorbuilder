angular.module('app.controllers', [])

.controller('sidemenuCtrl', function ($scope, $window) {
	$scope.rSideMenuWidth =
		($window.innerWidth >= 768) $window.innerWidth * 0.3: $scope.rSideMenuWidth = $window.innerWidth * 0.7;
})

.controller('page1Ctrl', function ($scope, doorService) {
	$scope.laminated = doorService.laminated;
	$scope.setType = function (type) {
		$scope.laminated = type;
		doorService.laminated = type;
	}
})

.controller('page2Ctrl', function ($scope, doorService, textures) {
	$scope.texs = textures;
	$scope.texture = doorService.texture;
	$scope.setTex = function (tex) {
		$scope.texture = tex;
		doorService.texture = tex;
	}
})

.controller('page3Ctrl', function ($scope) {})
