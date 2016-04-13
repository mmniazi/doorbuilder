angular.module('app.services', [])

.factory('state', function () {
	var _isLaminated = {
		name: "isLaminated",
		value: false
	};
	var _textures = {
		name: "Texture",
		value: 1
	};
	var _designs = {
		name: "Design",
		value: 1
	};
	var _lamination = {
		name: "Lamination",
		value: 1
	};
	var _handles = {
		name: "Handle",
		value: 1
	};
	var _hinges = {
		name: "Hinge",
		value: 1
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

// TODO: http://ionicframework.com/docs/v2/native/Base64%20To%20Gallery/

.factory("images", function ($firebaseArray) {
	var _textures = $firebaseArray(new Firebase("https://doorsbuilder.firebaseio.com/textures"));
	var _lamination = $firebaseArray(new Firebase("https://doorsbuilder.firebaseio.com/lamination"));
	var _hinges = $firebaseArray(new Firebase("https://doorsbuilder.firebaseio.com/hinges"));
	var _handles = $firebaseArray(new Firebase("https://doorsbuilder.firebaseio.com/handles"));
	var _designs = $firebaseArray(new Firebase("https://doorsbuilder.firebaseio.com/designs"));

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

.factory("price", function () {
	var _textures = 0;
	var _designs = 0;
	var _lamination = 0;
	var _handles = 0;
	var _hinges = 0;
	var _labour = 500;
	var _total = 0;

	this.sum = function (id) {
		switch (id) {
			case "2":
				return _textures;
			case "3":
				return _textures + _designs;
			case "4":
				return _textures + _designs + _lamination;
			case "5":
				return _textures + _designs + _lamination + _handles;
			case "6":
				return _textures + _designs + _lamination + _handles + _hinges;
			case "7":
				return _textures + _designs + _lamination + _handles + _hinges + _labour;
		}
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
				_textures = price;
			case "3":
				_designs = price;
			case "4":
				_lamination = price;
			case "5":
				_handles = price;
			case "6":
				_hinges = price;
		}
	}

	return this;
})
