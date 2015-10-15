angular.module('starter.controllers', ['ngCordova'])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {})

.controller('LoginCtrl', function ($scope) {})

.controller('HomeCtrl', function ($scope, $stateParams,$cordovaSocialSharing) {
	$scope.share = function (item) {
		window.plugins.socialsharing.share('Checkout "' + item.title + '" starting on ' + data.startdate + ', ' + data.starttime, null, data.image + 'At ' + item.venue);
	}
})

.controller('NotificationCtrl', function ($scope, $stateParams) {})

.controller('AdvanceSearchCtrl', function ($scope, $stateParams) {})

.controller('ProfileCtrl', function ($scope, $stateParams) {})

.controller('EventsCtrl', function ($scope, $stateParams) {})

;