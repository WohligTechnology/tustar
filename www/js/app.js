// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'pascalprecht.translate'])

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

.config(function ($stateProvider, $urlRouterProvider, $translateProvider ) {
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

	$translateProvider.translations('en', {
		'Event': 'ઘટના',
		'myprofile': 'મારી પ્રોફાઇલ',
		'search': 'આગોતરી શોધ',
		'notification':'સૂચના',
		'home':'હોમ',
		'name':'વિપુલ શાહ',
		'first':'સૂચના',
		'second':'બીજું સૂચન',
		'third':'ત્રીજી સૂચના',
		'content':'Lorem Ipsum ખાલી મુદ્રણ અને ટાઇપસેટીંગ ઉદ્યોગ બનાવટી લખાણ છે. Lorem Ipsum ક્યારેય અજ્ઞાત પ્રિન્ટર પ્રકારના ગેલી લીધો છે અને તે એક પ્રકાર નમૂનો પુસ્તક બનાવવા માટે scrambled ત્યારે 1500 , ત્યારથી industrys પ્રમાણભૂત બનાવટી લખાણ કરવામાં આવ્યું છે .',
		'notificationtitle' : 'સૂચના',
		'firsttitle':'પ્રથમ ટાઇટલ',
		'secondtitle':'દ્વિતીય ટાઇટલ',
		'tag':'ટેગ',
		'vill1':'ગામ એક',
		'vill2':'ગામ બે'
	});

	$translateProvider.translations('de', {
		'Event': 'Event',
		'myprofile': 'My Profile',
		'search':'Advance Search',
		'notification':'Notification',
		'home':'Home',
		'name':'Vipul Shah',
		'first':'Notification',
		'second':'Second notification',
		'third':'Third Notification',
		'content':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
		'notificationtitle':'Notification',
		'firsttitle':'First Title',
		'secondtitle':'Second Title',
		'tag':'Tag',
		'vill1':'Village One',
		'vill2':'Village two'
	});

	$translateProvider.preferredLanguage('de');


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


.filter('serverimage', function () {
	return function (image) {
		if (image && image != null) {
			return "img/" + image;
		} else {
			return "img/default.png";
		}
	};
})

.filter('language', function () {
	return function (noti) {

		//		console.log(lang);
		//		if (lang == "true") {
		//			console.log("false");
		//			switch (noti) {
		//			case 'Event':
		//				noti = 'ઘટના';
		//			}
		//		}else{
		//			switch (noti) {
		//			case 'ઘટના':
		//				noti = 'Event';
		//			}
		//		}
		//		return noti;
	};
})


.filter('formatdate', function($filter) {
  return function(val) {
    var splitval = val.toString().split(" ");
    return $filter('date')(val, 'dd MMMM, yyyy')
  };
})

.filter('cut', function () {
		return function (value, wordwise, max, tail) {
			if (!value) return '';

			max = parseInt(max, 10);
			if (!max) return value;
			if (value.length <= max) return value;

			value = value.substr(0, max);
			if (wordwise) {
				var lastspace = value.lastIndexOf(' ');
				if (lastspace != -1) {
					value = value.substr(0, lastspace);
				}
			}

			return value + (tail || ' …');
		};
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