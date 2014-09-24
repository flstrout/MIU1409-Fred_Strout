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

// Create the Table
var openOpps = Ti.UI.createTableView({
	top: 0,
	// Conditional not needed; we're using a Navigation Window which is iOS platform specific.
	style: Ti.UI.iPhone.TableViewStyle.GROUPED
});
	
var list = [];
	// Populate Section Headers & Footers
	// for (var n in oppJSON){ 
		var tableSection = Ti.UI.createTableViewSection({
			headerTitle: "OPEN OPPORTUNITIES"
		});
		// Send Variables outside the Loop so they won't get overwritten
		list.push(tableSection);
		// Populate the Sections with Data
		for (o in oppJSON.Opportunities){ 
			var sectionDetail = Ti.UI.createTableViewRow({
				title: oppJSON.Opportunities[o].Customer,
				detail: oppJSON.Opportunities[o].DateCreated,
				image: oppJSON.Opportunities[o].Opportunity,
				strength: oppJSON.Opportunities[o].Promise,
				agility: oppJSON.Opportunities[o].PromisedBy,
				endurance: oppJSON.Opportunities[o].Quality,
				awareness: oppJSON.Opportunities[o].Service,
				intelligence: oppJSON.Opportunities[o].Safety,
				hasChild: true
			});
			tableSection.add(sectionDetail);
			//sectionDetail.addEventListener("click", showDetail);
		};
	//};
	
	openOpps.setData(list);
	openOpps.addEventListener("click", function(event){
		showDetail(event.source);
	});
	tableWindow.add(openOpps);