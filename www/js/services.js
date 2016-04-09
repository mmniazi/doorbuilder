angular.module('app.services', [])

.service('doorService', function() {
	this.laminated = false;
	this.texture = 0;
})

// TODO: http://ionicframework.com/docs/v2/native/Base64%20To%20Gallery/

.factory("textures", function($firebaseArray) {
  var fire = new Firebase("https://doorsbuilder.firebaseio.com/textures");
  return $firebaseArray(fire);
})

.factory("lemnations", function($firebaseArray) {
  var fire = new Firebase("https://doorsbuilder.firebaseio.com/lemnations");
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
