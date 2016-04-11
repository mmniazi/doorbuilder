angular.module('app.services', [])

.service('doorService', function() {
	this.isLaminated = true;
	this.texture = 1;
	this.lamination = 1;
	this.design = 1;
	this.hinge = 1;
	this.handle = 1;
})

// TODO: http://ionicframework.com/docs/v2/native/Base64%20To%20Gallery/

.factory("textures", function($firebaseArray) {
  var fire = new Firebase("https://doorsbuilder.firebaseio.com/textures");
  return $firebaseArray(fire);
})

.factory("lamination", function($firebaseArray) {
  var fire = new Firebase("https://doorsbuilder.firebaseio.com/lamination");
  return $firebaseArray(fire);
})

.factory("hinges", function($firebaseArray) {
  var fire = new Firebase("https://doorsbuilder.firebaseio.com/hinges");
  return $firebaseArray(fire);
})

.factory("handles", function($firebaseArray) {
  var fire = new Firebase("https://doorsbuilder.firebaseio.com/handles");
  return $firebaseArray(fire);
})

.factory("frames", function($firebaseArray) {
  var fire = new Firebase("https://doorsbuilder.firebaseio.com/frames");
  return $firebaseArray(fire);
})

.factory("designs", function($firebaseArray) {
  var fire = new Firebase("https://doorsbuilder.firebaseio.com/designs");
  return $firebaseArray(fire);
})

.factory("colors", function($firebaseArray) {
  var fire = new Firebase("https://doorsbuilder.firebaseio.com/colors");
  return $firebaseArray(fire);
})
