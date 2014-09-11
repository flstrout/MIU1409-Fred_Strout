// Fred L. Strout
// MIU ~ 1409
// About Me JSON Data
// Created On: 9/9/2014

// Data
var jsonData = {
	"GroupA":{
		"headerText": "The First Six Questions",
		"Questions": [
			{
				"Question": "What is your name?",
				"Answer": "Fred L. Strout"
			},
			{
				"Question": "What is your chat username, including the host?",
				"Answer": "I don't remember. I never use it."
			},
			{
				"Question": "In which time zone do you reside?",
				"Answer": "Central"
			},
			{
				"Question": "Why are you in the Mobile Development Program?",
				"Answer": "I think it's high time that retail establishments embrace the digital revolution. I intend to create apps that provide real, frequently used business tools to enhance the retail workers ability to provide excellent customer service."
			},
			{
				"Question": "How comfortable are you with JavaScript?",
				"Answer": "I'm comfortable working in JavaScript but I still have a lot to learn. I still use the textbook I received for SDI a lot, especially when I'm trying something new or something I haven't tried in a while."
			},
			{
				"Question": "How comfortable are you with Titanium?",
				"Answer": "I'm fairly comfortable working with Titanium. I find the documentation pretty simple to use and I'm not afraid to experiment."
			}
		]
	},
	"GroupB":{
		"headerText": "The Next Five or More Questions",
		"Questions": [
			{
				"Question": "What is your favorite food?",
				"Answer": "Crawfish Etouffe served over White Rice or a nice hot Chicken and Sausage Gumbo also served over White Rice."
			},
			{
				"Question": "What is your favorite color?",
				"Answer": "I like dark greens and blues-i.e. a dark forest green (#014421) or a dark navy blue (#000065)."
			},
			{
				"Question": "Do you have a family?",
				"Answer": "I am married with 4 kids. My lovely wife, Racheal (not a typo-that's really how she spells it) has blessed me with 3 handsome boys and 1 lovely girl. My oldest son, Blake is a Machinist in the Air Force. He is stationed at Mildenhall RAF Base in the UK. Dennis and Kassandra are not twins but they are both in the seventh grade. My youngest, Stephen, is in the third grade."
			},
			{
				"Question": "Do you have any pets?",
				"Answer": "I own 2 dogs, 12 cats, a ferret and a turtle. It's a bit like Noah's Ark around this place. It seems like Butch, my 3 year old Rottweiler, likes to find strays. I found the turtle. In the past, he has also found 2 baby squirrels and one baby duckling. It sometimes feels like animals are attracted to my house. I don't know, maybe I should start building a boat. If I start to receive shipments of gopher wood, I think I might.'"
			},
			{
				"Question": "What are your hobbies?",
				"Answer": "I used to Scuba Dive a lot. Then I became a Commercial Diver working on oil rigs in the gulf so I don't do that anymore. It kind of took the fun out of it. Now I like to create 3D models using Blender. I'm pretty good, too. I don't want to loose the play angle on this hobby so I am trying to keep it out of my professional life, but it is a skill that might make me more marketable down the road."
			}
		]
	}
};

// Open the Answer Window
var showDetail = function(dataSource){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "#000",
		title: "Answer"
	});
	
	var detailViewText = Ti.UI.createLabel({
		text: dataSource.detail,
		font: {fontSize: 20, fontFamily: "Arial", fontWeight: "bold"},
		color: "#fff",
		top: 20,
		left: 10,
		right: 10
	});
	detailWindow.add(detailViewText);
	navWindow.openWindow(detailWindow);
};

var lists = [];
// Set the Headers
for (var n in jsonData){ 
	var tableSection = Ti.UI.createTableViewSection({
		headerTitle: jsonData[n].headerText
	});
	
	// *Important* Send Variables outside the Loop so they won't get overwritten
	lists.push(tableSection);
	
	// Fill in the Sections with Data
	for (o in jsonData[n].Questions){ 
		var sectionDetail = Ti.UI.createTableViewRow({
			font: {fontSize: 12, fontFamily: "Arial"},
			title: jsonData[n].Questions[o].Question,
			detail: jsonData[n].Questions[o].Answer,
			hasChild: true
		});
		tableSection.add(sectionDetail);
	};
};

questions.setData(lists);
questions.addEventListener("click", function(event){
	showDetail(event.source);
});
tableWindow.add(questions);