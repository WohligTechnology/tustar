// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function ($ionicPlatform) {
	$ionicPlatform.ready(function () {
		if (window && window.plugins && window.plugins.socialsharing && window.plugins.socialsharing.share) {
			socialShare = window.plugins.socialsharing.share;
		}
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);
		}
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
})

.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('login', {
			url: "/login",
			templateUrl: "templates/login.html",
			controller: 'LoginCtrl'
		})

	.state('app', {
		url: '/app',
		abstract: true,
		templateUrl: 'templates/menu.html',
		controller: 'AppCtrl'
	})

	.state('app.home', {
		url: '/home',
		views: {
			'menuContent': {
				templateUrl: 'templates/home.html',
				controller: 'HomeCtrl'
			}
		}
	})

	.state('app.notification', {
		url: '/notification',
		views: {
			'menuContent': {
				templateUrl: 'templates/notification.html',
				controller: 'NotificationCtrl'
			}
		}
	})

	.state('app.advance-search', {
			url: '/advance-search',
			views: {
				'menuContent': {
					templateUrl: 'templates/advance-search.html',
					controller: 'AdvanceSearchCtrl'
				}
			}
		})
		.state('app.myprofile', {
			url: '/myprofile',
			views: {
				'menuContent': {
					templateUrl: 'templates/myprofile.html',
					controller: 'ProfileCtrl'
				}
			}
		})

	.state('app.events', {
		url: '/events',
		views: {
			'menuContent': {
				templateUrl: 'templates/events.html',
				controller: 'EventsCtrl'
			}
		}
	})


	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/home');
})

.directive('fbPost', function ($document) {
	return {
		restrict: 'EA',
		replace: false,
		link: function ($scope, element, attr) {
			(function (d, s, id) {
				var js, fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) return;
				js = d.createElement(s);
				js.id = id;
				js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4&appId=1652034465042425";
				fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));
		}
	}
})


.directive('tweetBox', function ($document) {
	return {
		restrict: 'EA',
		replace: false,
		link: function ($scope, element, attr) {
			! function (d, s, id) {
				var js, fjs = d.getElementsByTagName(s)[0],
					p = /^http:/.test(d.location) ? 'http' : 'https';
				if (!d.getElementById(id)) {
					js = d.createElement(s);
					js.id = id;
					js.src = p + "://platform.twitter.com/widgets.js";
					fjs.parentNode.insertBefore(js, fjs);
				}
			}(document, "script", "twitter-wjs");
		}
	}
});