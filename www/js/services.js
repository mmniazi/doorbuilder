angular.module('app.services', [])

.factory("data", function ($firebaseArray) {
	var fire = new Firebase("https://doorsbuilder.firebaseio.com/");
	var _textures = $firebaseArray(fire.child("textures"));
	var _lamination = $firebaseArray(fire.child("lamination"));
	var _hinges = $firebaseArray(fire.child("hinges"));
	var _handles = $firebaseArray(fire.child("handles"));
	var _designs = $firebaseArray(fire.child("designs"));

	this.ready = function (success, failed) {
		var obj = $firebaseObject(fire);
		obj.$loaded(
			function (data) {
				callback();
			},
			function (error) {
				failed();
			}
		);
	}

	return function (id) {
		switch (id) {
			case "2":
				return _textures;
			case "3":
				return _designs;
			case "4":
				return _lamination;
			case "5":
				return _handles;
			case "6":
				return _hinges;
		}
	};
})

.factory('state', function () {
	var _isLaminated = {
		name: "isLaminated",
		value: false
	};
	var _textures = {
		name: "Texture",
		value: null
	};
	var _designs = {
		name: "Design",
		value: null
	};
	var _lamination = {
		name: "Lamination",
		value: null
	};
	var _handles = {
		name: "Handle",
		value: null
	};
	var _hinges = {
		name: "Hinge",
		value: null
	};

	this.set = function (id, selected) {
		switch (id) {
			case "1":
				_isLaminated.value = selected;
				break;
			case "2":
				_textures.value = selected;
				break;
			case "3":
				_designs.value = selected;
				break;
			case "4":
				_lamination.value = selected;
				break;
			case "5":
				_handles.value = selected;
				break;
			case "6":
				_hinges.value = selected;
				break;
		}
	}

	this.get = function (id) {
		switch (id) {
			case "1":
				return _isLaminated;
			case "2":
				return _textures;
			case "3":
				return _designs;
			case "4":
				return _lamination;
			case "5":
				return _handles;
			case "6":
				return _hinges;
		}
	}

	return this;
})

.factory("price", function () {
	var _textures = 0;
	var _designs = 0;
	var _lamination = 0;
	var _handles = 0;
	var _hinges = 0;
	var _labour = 500;

	this.sum = function () {
		return _textures + _designs + _lamination + _handles + _hinges + _labour;
	}

	this.get = function (id) {
		switch (id) {
			case "2":
				return _textures;
			case "3":
				return _designs;
			case "4":
				return _lamination;
			case "5":
				return _handles;
			case "6":
				return _hinges;
			case "7":
				return _labour;
		}
	}

	this.set = function (id, price) {
		switch (id) {
			case "2":
				_textures = parseInt(price);
				break;
			case "3":
				_designs = parseInt(price);
				break;
			case "4":
				_lamination = parseInt(price);
				break;
			case "5":
				_handles = parseInt(price);
				break;
			case "6":
				_hinges = parseInt(price);
				break;
		}
	}

	return this;
})
