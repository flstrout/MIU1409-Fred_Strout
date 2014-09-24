// Fred L. Strout
// MIU ~ 1409
// Utility App - Customer Recovery
// Created On: 9/24/2014

var manager = "Fred Strout";
var position = "DM2";
var homeStore = "11766-10 - Rayne, LA";

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
	top: 0,
	height: 50
});

var titleMB = Ti.UI.createLabel({
	text: "Home",
	font: {fontSize: 20, fontFamily: "Helvetica Neue", fontWeight: "bold"},
	color: "#333"
});

menuBar.add(titleMB);
opportunities.setData(list);
opportunities.addEventListener("click", function(event){
	showDetail(event.source);
});
tableWindow.add(opportunities, menuBar);