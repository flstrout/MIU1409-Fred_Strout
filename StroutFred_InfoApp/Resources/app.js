// Fred L. Strout
// MIU ~ 1409
// Info App
// Created On: 9/15/2014

Ti.UI.setBackgroundColor('#333');

// New Window => Navigation Window
var tableWindow = Ti.UI.createWindow({
	backgroundColor: "#1174c1",
	title: "The Pet Store",
	statusBarStyle: 2,
	barColor: "#000065",
	titleAttributes: {color: "#d6ff5f"}
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: tableWindow
});

 // Create Table
var breeds = Ti.UI.createTableView({
	top: 0,
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	backgroundColor: "#1174c1",
	separatorColor: "#000065"
});

// json.js file link - where the rest of the app resides
var loadData = require("jsondata");
navWindow.open();