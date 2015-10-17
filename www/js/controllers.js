var trans = [];
	trans.language = true;

angular.module('starter.controllers', ['ngCordova'])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout, MyServices, $translate) {
	$scope.fnc = function (language) {
		console.log(language);

		if (language == true) {
			$translate.use('de');
		} else {
			$translate.use('en');
		}
	}
})

.controller('LoginCtrl', function ($scope) {})

.controller('HomeCtrl', function ($scope, $stateParams) {
	$scope.homecont = homedata;
	$scope.share = function (item) {
		window.plugins.socialsharing.share(item);
	}
})

.controller('NotificationCtrl', function ($scope, $stateParams, MyServices, $filter, $cordovaSocialSharing) {
	$scope.allnotification = MyServices.getNotification();
	$scope.category = MyServices.getCategoryJstorage();
	$scope.notification = [];

	//	var getgal = function(m){
	//		var state = false;
	//		_.each($scope.notification, function(s){
	//			if(s.id == m.id){
	//				state = true;
	//				exit();
	//			}
	//		});
	//		if(state == true){
	//			return m;
	//		}else{
	//			return '';
	//		}
	//	}
	//	
	//	_.each($scope.category, function(n){
	//		if(n.state && n.state == true){
	//			_.each($scope.allnotification, function(m){
	//				_.each(m.category, function(l){
	//					if(n.id == l){
	//						console.log(getgal(m));
	//						$scope.notification.push(getgal(m));
	//					}
	//				})
	//			})
	//		}
	//	})
	$scope.share = function (item) {
		$cordovaSocialSharing
			.share(item.content, item.title, "", "") // Share via native share sheet
			.then(function (result) {
				// Success!
			}, function (err) {
				// An error occured. Show a message to the user
			});
//		window.plugins.socialsharing.share(item.title + it);
	}

})

.controller('AdvanceSearchCtrl', function ($scope, $stateParams, MyServices) {
	if (MyServices.getCategoryJstorage()) {
		$scope.category = MyServices.getCategoryJstorage();
	} else {
		$scope.category = MyServices.getCategory();
	}
	if (MyServices.getVillageJstorage()) {
		$scope.village = MyServices.getVillageJstorage();
	} else {
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