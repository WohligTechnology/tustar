angular.module('starter.controllers', ['ngCordova'])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout, MyServices) {
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

.controller('AdvanceSearchCtrl', function ($scope, $stateParams, MyServices) {
	if(MyServices.getCategoryJstorage()){
		$scope.category = MyServices.getCategoryJstorage();
	}else{
		$scope.category = MyServices.getCategory();
	}
	if(MyServices.getVillageJstorage()){
		$scope.village = MyServices.getVillageJstorage();
	}else{
		$scope.village = MyServices.getVillage();
	}
	$scope.changeCategory = function (cat) {
		MyServices.setCategory($scope.category);
	}
	$scope.changeVillage = function (vill) {
		MyServices.setVillage($scope.village);
	}
	
})

.controller('ProfileCtrl', function ($scope, $stateParams) {})

.controller('EventsCtrl', function ($scope, $stateParams) {})

;