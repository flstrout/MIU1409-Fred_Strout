// Fred L. Strout
// MIU ~ 1409
// Utility App - Customer Recovery
// Created On: 9/24/2014

var manager = "Fred Strout";
var position = "DM2";
var homeStore = "11766-10 (Rayne, LA)";
var eid = "e1213048";
var password = "Dennis01";

var oppJSON = {
	"Opportunities": [
			  {
			  	"Customer":"Ken Kastner",
			    "DateCreated":"12/29/2013",
			    "Opportunity":"Ordered a Big Mac, received a Qrtr Pounder.",
			    "Promise":"One Big Mac Value Meal",
			    "PromisedBy":"Fred Strout",
			    "Quality":"No",
			    "Service":"Yes",
			    "Safety":"No",
			  },
			  {
			  	"Customer":"Jason Stelly",
			    "DateCreated":"12/24/2013",
			    "Opportunity":"Hair in his Food.",
			    "Promise":"Refund if he has the receipt; replace product otherwise.",
			    "PromisedBy":"Sierra LaBorde",
			    "Quality":"Yes",
			    "Service":"No",
			    "Safety":"Yes",
			  },
			  {
			  	"Customer":"Chris",
			    "DateCreated":"11/18/2013",
			    "Opportunity":"Fries were Cold",
			    "Promise":"Free Fresh Fry with a Free Upsize.",
			    "PromisedBy":"Mackenzie David",
			    "Quality":"Yes",
			    "Service":"No",
			    "Safety":"No",
			  }
		]
};
var showAdd = function(){
	
	var addWindow = Ti.UI.createWindow({
		backgroundColor: "#bf0c0c",
		title: "Customer Recovery",
		statusBarStyle: 2,
		barColor: "#333",
		titleAttributes: {color: "#ccc"},
		backButtonTitle: "Back"
	});
	
	// Create Menu Bar
	var addMenuBar = Ti.UI.createView({
		backgroundColor: "#ffcc00",
		borderColor: "#333",
		borderWidth: 2,
		top: 0,
		height: 50
	});
	
	var titleAMB = Ti.UI.createLabel({
		text: "Opportunity",
		font: {fontSize: 20, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#333"
	});

	// Labels
	var lblOpportunity = Ti.UI.createLabel({
		text: "Opportunity:",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#eee",
		top: addMenuBar.height + 10,
		height: 14,
		left: 13
	});
	
	var lblRequired1 = Ti.UI.createLabel({
		text: "*Required",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#fc0",
		top: addMenuBar.height + 10,
		height: 14,
		right: 13
	});
	
	var lblCustomer = Ti.UI.createLabel({
		text: "Customer:",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#eee",
		top: lblOpportunity.top + lblOpportunity.height + 110,
		height: 14,
		left: 13
	});
	
	var lblRequired2 = Ti.UI.createLabel({
		text: "*Required",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#fc0",
		top: lblOpportunity.top + lblOpportunity.height + 110,
		height: 14,
		right: 13
	});
	
	var lblPromise = Ti.UI.createLabel({
		text: "Promised Resolution:",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#eee",
		top: lblCustomer.top + lblCustomer.height + 60,
		height: 14,
		left: 13
	});
	
	var lblRequired3 = Ti.UI.createLabel({
		text: "*Required",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#fc0",
		top: lblCustomer.top + lblCustomer.height + 60,
		height: 14,
		right: 13
	});
	
	// Input Fields
	var txtOpportunity = Ti.UI.createTextField({
		hintText: "What Was Wrong?",
		verticalAlign: 1,
		font: {fontSize: 18, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		top: lblOpportunity.top + 20,
		left: 10,
		right: 10,
		height: 100,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: "#eee"
	});
	
	var txtCustomer = Ti.UI.createTextField({
		hintText: "Customers Name",
		font: {fontSize: 18, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		top: lblCustomer.top + 20,
		left: 10,
		right: 10,
		height: 40,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: "#eee"
	});
	
	var txtPromise = Ti.UI.createTextField({
		hintText: "Make Them Happy!!!",
		verticalAlign: 1,
		font: {fontSize: 18, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		top: lblPromise.top + 20,
		left: 10,
		right: 10,
		height: 100,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: "#eee"
	});
	
	var butSave = Ti.UI.createLabel({
		text: "Save",
		borderColor: "#333",
		borderWidth: 2,
		borderRadius: 5,
		backgroundColor: "#0f0",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#333",
		top: 425,
		left: 10,
		width: 120,
		height: 35,
		textAlign: "center"
	});
	
	var butCancel = Ti.UI.createLabel({
		text: "-Cancel-",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#fc0",
		top: 425,
		left: 135,
		width: 120,
		height: 35,
		textAlign: "center"
	});
	
	addMenuBar.add(titleAMB);
	addWindow.add(addMenuBar, lblOpportunity, lblCustomer, lblPromise, lblRequired1, lblRequired2,
				lblRequired3, txtOpportunity, txtCustomer, txtPromise, butSave, butCancel, tagline);
	navWindow.openWindow(addWindow);
};
	

// Settings Window
var showSettings = function(){
	
	var settingsWindow = Ti.UI.createWindow({
		backgroundColor: "#bf0c0c",
		title: "Customer Recovery",
		statusBarStyle: 2,
		barColor: "#333",
		titleAttributes: {color: "#ccc"},
		backButtonTitle: "Back"
	});
	
	// Create Menu Bar
	var settingsMenuBar = Ti.UI.createView({
		backgroundColor: "#ffcc00",
		borderColor: "#333",
		borderWidth: 2,
		top: 0,
		height: 50
	});
	
	var titleSMB = Ti.UI.createLabel({
		text: "Settings",
		font: {fontSize: 20, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#333"
	});
	
	// Labels
	var lblManager = Ti.UI.createLabel({
		text: "Manager:",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#eee",
		top: settingsMenuBar.height + 10,
		height: 14,
		left: 13
	});
	
	var lblPosition = Ti.UI.createLabel({
		text: "Position:",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#eee",
		top: lblManager.top + lblManager.height + 60,
		height: 14,
		left: 13
	});
	
	var lblHomeStore = Ti.UI.createLabel({
		text: "Home Store:",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#eee",
		top: lblPosition.top + lblPosition.height + 60,
		height: 14,
		left: 13
	});
	
	var lblEID = Ti.UI.createLabel({
		text: "EID:",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#eee",
		top: lblHomeStore.top + lblHomeStore.height + 60,
		height: 14,
		left: 13
	});
	
	var lblPassword = Ti.UI.createLabel({
		text: "Password:",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#eee",
		top: lblEID.top + lblEID.height + 60,
		height: 14,
		left: 13
	});
	
	// Input Fields
	var txtManager = Ti.UI.createTextField({
		value: manager,
		font: {fontSize: 18, fontFamily: "Helvetica Neue"},
		top: lblManager.top + 20,
		left: 10,
		right: 10,
		height: 40,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: "#eee"
	});
	
	var txtPosition = Ti.UI.createTextField({
		value: position,
		font: {fontSize: 18, fontFamily: "Helvetica Neue"},
		top: lblPosition.top + 20,
		left: 10,
		right: 10,
		height: 40,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: "#eee"
	});
	
	var txtHomeStore = Ti.UI.createTextField({
		value: homeStore,
		font: {fontSize: 18, fontFamily: "Helvetica Neue"},
		top: lblHomeStore.top + 20,
		left: 10,
		right: 10,
		height: 40,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: "#eee"
	});
	
	var txtEID = Ti.UI.createTextField({
		value: eid,
		font: {fontSize: 18, fontFamily: "Helvetica Neue"},
		top: lblEID.top + 20,
		left: 10,
		right: 10,
		height: 40,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: "#eee"
	});
	
	var txtPassword = Ti.UI.createTextField({
		value: password,
		font: {fontSize: 18, fontFamily: "Helvetica Neue"},
		top: lblPassword.top + 20,
		left: 10,
		right: 10,
		height: 40,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: "#eee"
	});
	
	var butSave = Ti.UI.createLabel({
		text: "Save",
		borderColor: "#333",
		borderWidth: 2,
		borderRadius: 5,
		backgroundColor: "#0f0",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#333",
		top: 425,
		left: 10,
		width: 120,
		height: 35,
		textAlign: "center"
	});
	
	var butCancel = Ti.UI.createLabel({
		text: "-Cancel-",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#fc0",
		top: 425,
		left: 135,
		width: 120,
		height: 35,
		textAlign: "center"
	});
	
	settingsMenuBar.add(titleSMB);
	settingsWindow.add(settingsMenuBar, lblManager, lblPosition, lblHomeStore, lblEID, lblPassword,
						txtManager, txtPosition, txtHomeStore, txtEID, txtPassword, butSave, butCancel, tagline);
	navWindow.openWindow(settingsWindow);
};
	
var showDetail = function(dataSource){
	
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "#bf0c0c",
		title: "Customer Recovery",
		statusBarStyle: 2,
		barColor: "#333",
		titleAttributes: {color: "#ccc"},
		backButtonTitle: "Back"
	});
	
	// Create Menu Bar
	var menuBar = Ti.UI.createView({
		backgroundColor: "#ffcc00",
		borderColor: "#333",
		borderWidth: 2,
		top: 0,
		height: 50
	});
	
	var titleMB = Ti.UI.createLabel({
		text: "Opportunity",
		font: {fontSize: 20, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#333"
	});
	
	var lblCustomer = Ti.UI.createLabel({
		text: "Customer:",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#eee",
		top: menuBar.height + 10,
		height: 14,
		left: 13
	});
	
	var lblDate = Ti.UI.createLabel({
		text: "Date:",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#eee",
		top: menuBar.height + 10,
		height: 14,
		left: 213
	});
	
	var lblOpportunity = Ti.UI.createLabel({
		text: "Opportunity:",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#eee",
		top: lblCustomer.top + lblCustomer.height + 45,
		height: 14,
		left: 13
	});
	
	var lblPromise = Ti.UI.createLabel({
		text: "Promised Resolution:",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#eee",
		top: lblOpportunity.top + lblOpportunity.height + 75,
		height: 14,
		left: 13
	});
	
	var lblPromisedBy = Ti.UI.createLabel({
		text: "Promised By:",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#eee",
		top: lblPromise.top + lblPromise.height + 75,
		height: 14,
		left: 13
	});
	
	var dataCustomer = Ti.UI.createLabel({
		text: dataSource.title,
		font: {fontSize: 18, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#ffcc00",
		top: lblCustomer.top + 16,
		left: 8
	});
	
	var dataDate = Ti.UI.createLabel({
		text: dataSource.DateCreated,
		font: {fontSize: 18, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#ffcc00",
		top: lblCustomer.top + 16,
		left: 208
	});
	
	var dataOpportunity = Ti.UI.createLabel({
		text: dataSource.Opportunity,
		font: {fontSize: 18, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#ffcc00",
		top: lblOpportunity.top + 16,
		left: 8
	});
	var customBackground = Ti.UI.createView({
		borderColor: "#222",
		borderWidth: 2,
		borderRadius: 7,
		backgroundColor: "#ffcc00",
		top: lblPromise.top + 18,
		height: 70,
		left: 4,
		width: 308,
		zIndex: 1
	});
	
	var dataPromise = Ti.UI.createLabel({
		text: dataSource.Promise,
		font: {fontSize: 18, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#bf0c0c",
		textAlign: "left",
		verticalAlign: 1,
		top: lblPromise.top + 20,
		height: 66,
		left: 8,
		width: 300,
		zIndex: 2
	});
	
	var dataPromisedBy = Ti.UI.createLabel({
		text: dataSource.PromisedBy,
		font: {fontSize: 18, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#ffcc00",
		top: lblPromisedBy.top + 16,
		left: 8
	});
	
	var butMakeItRight = Ti.UI.createLabel({
		text: "Make it Right!",
		borderColor: "#333",
		borderWidth: 2,
		borderRadius: 5,
		backgroundColor: "#0f0",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#333",
		top: 425,
		left: 10,
		width: 120,
		height: 35,
		textAlign: "center"
	});
	
	var butCancel = Ti.UI.createLabel({
		text: "-Cancel-",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#fc0",
		top: 425,
		left: 135,
		width: 120,
		height: 35,
		textAlign: "center"
	});
	
	menuBar.add(titleMB);
	detailWindow.add(menuBar, lblCustomer, lblDate, lblOpportunity, lblPromise, lblPromisedBy, dataCustomer,
					dataDate, dataOpportunity, dataPromise, dataPromisedBy, butMakeItRight, butCancel, customBackground, tagline);
	navWindow.openWindow(detailWindow);
};

var list = [];

 // Header
var headView = Ti.UI.createView({ // Base View
	backgroundColor: "#bf0c0c"
});

var headLabel = Ti.UI.createLabel({ // Label applied to the Base View
	text: "OPEN OPPORTUNITIES",
	color: "#ffcc00",
	font: {fontWeight: "bold"},
	left: 5
});
headView.add(headLabel);

var tableSection = Ti.UI.createTableViewSection({ // Set the Sections Header to the headView variable
	headerView: headView
});

// Send Variables outside the Loop so they won't get overwritten
list.push(tableSection);

// Populate the Sections with Data
for (o in oppJSON.Opportunities){ 
	var sectionDetail = Ti.UI.createTableViewRow({
		title: oppJSON.Opportunities[o].Customer,
		DateCreated: oppJSON.Opportunities[o].DateCreated,
		Opportunity: oppJSON.Opportunities[o].Opportunity,
		Promise: oppJSON.Opportunities[o].Promise,
		PromisedBy: oppJSON.Opportunities[o].PromisedBy,
		Quality: oppJSON.Opportunities[o].Quality,
		Service: oppJSON.Opportunities[o].Service,
		Safety: oppJSON.Opportunities[o].Safety,
		hasChild: true,
		backgroundColor: "#eee"
	});
	
	tableSection.add(sectionDetail);
	//sectionDetail.addEventListener("click", showDetail);
};

// Create Menu Bar
var menuBar = Ti.UI.createView({
	backgroundColor: "#ffcc00",
	borderColor: "#333",
	borderWidth: 2,
	top: 0,
	height: 50
});

var titleMB = Ti.UI.createLabel({
	text: "Home",
	font: {fontSize: 20, fontFamily: "Helvetica Neue", fontWeight: "bold"},
	color: "#333"
});

var butAdd = Ti.UI.createButton({
	title: "Add",
	left: 15
});

var butSettings = Ti.UI.createButton({
	title: "Settings",
	right: 15
});

var tagline = Ti.UI.createLabel({
	borderColor: "#333",
	borderWidth: 2,
	backgroundColor: "#fc0",
	font: {fontSize: 12, fontFamily: "Helvetica Neue", fontWeight: "bold"},
	color: "#333",
	text: "Fast   |   Accurate   |   Get It Right   |   Make It Right",
	textAlign: "center",
	top: 474,
	width: "100%",
	height: 22
});

menuBar.add(titleMB, butAdd, butSettings);
butAdd.addEventListener("click", showAdd);
butSettings.addEventListener("click", showSettings);
opportunities.setData(list);
opportunities.addEventListener("click", function(event){
	showDetail(event.source);
});
tableWindow.add(opportunities, menuBar, tagline);