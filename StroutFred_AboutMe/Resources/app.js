// Fred L. Strout
// MIU ~ 1409
// About Me App
// Created On: 9/9/2014

Ti.UI.setBackgroundColor('#333');

// New Window => Navigation Window
var tableWindow = Ti.UI.createWindow({
	title: "Questions About Me",
	backgroundColor: "#ccc"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: tableWindow
});

 // Create Table
var questions = Ti.UI.createTableView({
	top: 0,
	style: Ti.UI.iPhone.TableViewStyle.GROUPED
});

// json.js file link - where the rest of the app resides
var loadData = require("json");
navWindow.open();