angular.module('app.controllers', [])
	// TODO: add current price to each page
	// TODO: create front page loader
	// TODO: ask for aspect ratio of doors and images ratio should match it

.controller('sidemenuCtrl', function ($scope, $window) {
	$scope.sideMenuWidth =
		($window.innerWidth >= 768) ? $window.innerWidth * 0.5 : $window.innerWidth * 0.7;
})

.controller('startCtrl', function ($scope, state) {
	$scope.isLaminated = false;
	$scope.set = function (type) {
		$scope.isLaminated = type;
		state.set(1, type);
	}
})

.controller('selectorCtrl', function ($scope, state, images, $stateParams, $location, price) {
	var id = $stateParams.id;
	$scope.selected = state.get(id).value;
	$scope.heading = state.get(id).name;
	$scope.images = images(id);

	if (!(id > 1 && id < 7)) {
		$location.path("#/sidemenu/start/");
	}

	$scope.backUrl = function () {
		if (id == 4) {
			return '#/sidemenu/start/';
		} else if (id == 5) {
			return (state.get("1").value) ? '#/sidemenu/selector/4' : '#/sidemenu/selector/3';
		} else if (id == 2) {
			return '#/sidemenu/start/';
		} else {
			return '#/sidemenu/selector/' + (id - 1);
		}
	}

	$scope.nextUrl = function () {
		return '#/sidemenu/selector/' + ((id == 3) ? 5 : parseInt(id) + 1);
	}

	$scope.set = function (selected) {
		$scope.selected = selected;
		state.set(id, selected);
	}
})
