angular.module('starter.controllers', ['ngCordova'])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout, MyServices) {
	console.log(MyServices.getNotification());
})

.controller('LoginCtrl', function ($scope) {})

.controller('HomeCtrl', function ($scope, $stateParams) {
	$scope.share = function (item) {
		window.plugins.socialsharing.share(item);
	}
})

.controller('NotificationCtrl', function ($scope, $stateParams, MyServices) {
	$scope.notification = MyServices.getNotification();
})

.controller('AdvanceSearchCtrl', function ($scope, $stateParams) {})

.controller('ProfileCtrl', function ($scope, $stateParams) {})

.controller('EventsCtrl', function ($scope, $stateParams) {})

;