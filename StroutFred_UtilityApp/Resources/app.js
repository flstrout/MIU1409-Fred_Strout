// Fred L. Strout
// MIU ~ 1409
// Utility App - Customer Recovery
// Created On: 9/23/2014

Ti.UI.setBackgroundColor('#333');

// New Window => Navigation Window
var tableWindow = Ti.UI.createWindow({
	backgroundColor: "#bf0c0c",
	title: "Customer Recovery",
	statusBarStyle: 2,
	barColor: "#333",
	titleAttributes: {color: "#ccc"}
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: tableWindow
});

 // Create Table
var opportunities = Ti.UI.createTableView({
	top: 30,
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	backgroundColor: "#bf0c0c",
	separatorColor: "#bf0c0c"
});

// json.js file link - where the rest of the app resides
var loadData = require("oppJSON");
navWindow.open();