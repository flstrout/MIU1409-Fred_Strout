// Fred L. Strout
// MIU ~ 1409
// About Me App
// Created On: 9/9/2014

Ti.UI.setBackgroundColor('#333');

// New Window => Navigation Window
var tableWindow = Ti.UI.createWindow({
	title: "Questions About Me",
	backgroundColor: "#014421",
	statusBarStyle: 2,
	barColor: "#014421",
	titleAttributes: {color: "#ccc"}
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: tableWindow
});

 // Create Table
var questions = Ti.UI.createTableView({
	top: 0,
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	backgroundColor: "#8fbc8f",
	separatorColor: "#014421"
});

// json.js file link - where the rest of the app resides
var loadData = require("json");
navWindow.open();