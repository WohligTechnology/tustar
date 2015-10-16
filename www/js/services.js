var adminbase = "http://wohlig.co.in/webappbackend/";
// var adminbase = "http://localhost/apphiloback/";
var adminurl = adminbase + "index.php/json/";

var notification = [{
	"title": "Notification",
	"content": "Demo data first notification",
	"timestamp": Date(),
	"image": "news.jpg"
}, {
	"title": "second Notification",
	"content": "Demo data first notification",
	"timestamp": Date()
}, {
	"title": "Third Notification",
	"content": "Demo data first notification",
	"timestamp": Date(),
	"image": "ionic.png"
}];

var category = [{
	"name": "first"
}, {
	"name": "second"
}, {
	"name": "third"
}, {
	"name": "forth"
}];

var village = [{
	"name": "first village"
}, {
	"name": "second village"
}, {
	"name": "third village"
}, {
	"name": "fourth village"
}, {
	"name": "fifth village"
}];

angular.module('starter.services', [])
	.factory('MyServices', function ($http, $filter) {
		return {
			all: function () {
				return chats;
			},
			getNotification: function () {
				return notification;
			},
			getCategory: function () {
				return category;
			},
			getVillage: function () {
				return village;
			},
			setCategory: function (category) {
				$.jStorage.set("category", category);
			},
			setVillage: function (village) {
				$.jStorage.set("village", village);
			},
			getCategoryJstorage: function () {
				return $.jStorage.get("category");
			},
			getVillageJstorage: function () {
				return $.jStorage.get("village");
			}
		};
	});