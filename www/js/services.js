angular.module('app.services', [])

.service('doorService', function() {
	this.laminated = false;
})

.factory("wtexsFactory", function($firebaseArray) {
  var itemsRef = new Firebase("https://doorsbuilder.firebaseio.com/wtexs");
  return $firebaseArray(itemsRef);
})
