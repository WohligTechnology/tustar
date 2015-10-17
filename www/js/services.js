var adminbase = "http://wohlig.co.in/webappbackend/";
// var adminbase = "http://localhost/apphiloback/";
var adminurl = adminbase + "index.php/json/";
//var language = true;

var notification = [{
	"id":1,
	"title": "first",
	"content": "content",
	"timestamp": moment().format("YYYY-MM-DD"),
	"image": "news.jpg",
	"category" : [3,2],
	"village" : [1]
}, {
	"id": 2,
	"title": "second",
	"content": "content",
	"timestamp": moment().format("YYYY-MM-DD")
}, {
	"id":3,
	"title": "third",
	"content": "content",
	"timestamp": moment().format("YYYY-MM-DD"),
	"image": "ionic.png",
	"category" : [4],
	"village" : [3]
}];

var homedata = [{
	'title':"firsttitle",
	'content':"content",
	'image':"news.jpg"
},{
	'title':"secondtitle",
	'content':"content"
}]

var category = [{
	"id" : 1,
	"name": "first"
}, {
	"id" : 2,
	"name": "second"
}, {
	"id" : 3,
	"name": "third"
}, {
	"id" : 4,
	"name": "forth"
}];

var village = [{
	"id" : 1,
	"name": "first village"
}, {
	"id" : 2,
	"name": "second village"
}, {
	"id" : 3,
	"name": "third village"
}, {
	"id" : 4,
	"name": "fourth village"
}, {
	"id" : 5,
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