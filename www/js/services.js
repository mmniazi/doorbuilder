angular.module('app.services', [])

.factory("data", function ($firebaseArray) {
  // Initialize Firebase
  var config = {
  	apiKey: "AIzaSyCjOc-2Q1uMZ4vGJioe9snaoFgEpE3zjlQ",
  	authDomain: "doorsbuilder.firebaseapp.com",
  	databaseURL: "https://doorsbuilder.firebaseio.com",
  	storageBucket: "doorsbuilder.appspot.com",
  };

  firebase.initializeApp(config);
  var fire = firebase.database().ref();
  var _textures = $firebaseArray(fire.child("textures"));
  var _colors = $firebaseArray(fire.child("colors"));
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
  		return _colors;
  		case "5":
  		return _handles;
  		case "6":
  		return _hinges;
  	}
  };
})

.factory('state', function () {
	var _isColored = {
		name: "isColored",
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
	var _colors = {
		name: "Color",
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

	var _dimensions = {
		name: "Dimensions",
		value: null
	};

	var _units = {
		name: "Units",
		value: 'Inches'
	};

	this.set = function (id, value) {
		switch (id) {
			case "1":
			_isColored.value = value;
			break;
			case "2":
			_textures.value = value;
			break;
			case "3":
			_designs.value = value;
			break;
			case "4":
			_colors.value = value;
			break;
			case "5":
			_handles.value = value;
			break;
			case "6":
			_hinges.value = value;
			break;
			case "7":
			_dimensions.value = value;
			break;
			case "8":
			_units.value = value;
			break;
		}
	}

	this.get = function (id) {
		switch (id) {
			case "1":
			return _isColored;
			case "2":
			return _textures;
			case "3":
			return _designs;
			case "4":
			return _colors;
			case "5":
			return _handles;
			case "6":
			return _hinges;
			case "7":
			return _dimensions;
			case "8":
			return _units;
		}
	}

	return this;
})

.factory("price", function () {
	var _textures = 0;
	var _designs = 0;
	var _colors = 0;
	var _handles = 0;
	var _hinges = 0;
	var _labour = 500;

	this.sum = function () {
		return _textures + _designs + _colors + _handles + _hinges + _labour;
	}

	this.get = function (id) {
		switch (id) {
			case "2":
			return _textures;
			case "3":
			return _designs;
			case "4":
			return _colors;
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
			_colors = parseInt(price);
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
