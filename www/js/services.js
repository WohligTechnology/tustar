var adminbase = "http://wohlig.co.in/webappbackend/";
// var adminbase = "http://localhost/apphiloback/";
var adminurl = adminbase + "index.php/json/";

var notification = [{
	"title" : "Notification",
	"content" : "Demo data first notification",
	"timestamp" : Date(),
	"image" : "news.jpg";
},{
	"title" : "second Notification",
	"content" : "Demo data first notification",
	"timestamp" : Date()
},{
	"title" : "Third Notification",
	"content" : "Demo data first notification",
	"timestamp" : Date(),
	"image" : "ionic.png"
}];

angular.module('starter.services', [])
	.factory('MyServices', function ($http, $filter) {
		return {
			all: function () {
				return chats;
			},
			getNotification: function () {
				return notification;
			}
		};
	});