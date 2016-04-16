angular.module('app.controllers', [])
	// TODO: create front page loader

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
	$scope.height;
	$scope.width;
	$scope.count;
})

.controller('selectorCtrl', function ($scope, state, data, $stateParams, $location, price) {
	var id = $stateParams.id;
	if (!(id > 1 && id < 7)) {
		$location.path("#/sidemenu/start/");
	}

	$scope.selected = state.get(id).value;
	$scope.heading = state.get(id).name;
	$scope.items = data(id);
	$scope.price = price.sum();

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
		price.set(id, selected.price);
		$scope.price = price.sum();
	}
})
