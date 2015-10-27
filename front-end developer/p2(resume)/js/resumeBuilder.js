/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append("Qi Zhao");
 //$("#header").append();
 var projects={
    "projects": [
        {
            "title": "Web Development Project (Udacity Front-end Nano Degree)",
            "dates": "Summer 2015",
            "description": [
                "Currently building an interactive online resume webpage",
                "Implemented knowledge of HTML, CSS and JS on the design and development of personal portfolio page project",
                "Future projects include: Neighborhood map website, Arcade game clone website and health tracker website"
            ]
        },
        {
            "title": "2048 Game Design",
            "dates": "Spring 2015",
            "description": [
                "Implemented the game mechanics(moving tiles, merge tiles etc.) with object-oriented programming language",
                "Had deeper understanding about event handling in Java programming",
                "Fortified game board GUI designing and debugging skills"
            ]
        },
        {
            "title": "Alternative Home Security System (Senior Design Project)",
            "dates": "Spring 2014",
            "description": [
                "Designed a key-less entry system which consists of height, weight and eye-blink detection modules",
                "Implemented the system using PCB board and microprocessor coding with C",
                "Reverse-engineered a commercial digital weight scale to obtain signal which can be used in the microcontroller in the project",
                "Fortified writing and presentation skills to present the design as a product"
            ]
        },
        {
            "title": "Game Design Project",
            "dates": "Spring 2013",
            "description": [
                "Designed the logic and GUI of the game, Tank Battle, by programming VHDL code on FGPA board",
                "Implemented the game by keyboard and demonstrated the content on screen using FPGA board connection",
                "Finalized the game with the physics features, keyboard input recognition, game logic, enemy AI, LED Indicator on FGPA"
            ]
        }
    ]
}




 var bio = {
    "name" : "Qi Zhao",
 	"role" : "Software Engineer",
 	"contacts" : {
 		"mobile" : "217-979-2059",
 		"email" : "qzhao1@scu.edu",
 		"github" : "zuiuc",
 		"city" : "San Jose"
 	},
 	"skills" : [
 		"Java", "JavaScript", "HTML", "CSS", "C", "VHDL", "Verilog"
 	]
 }

 var education = {
 	"schools" : [
 	  {
 	  	"name" : "University of Illinois, Urbana-Champaign",
 	  	"location" : "Champaign, IL",
 	  	"Major" : "Electrical Engineering",
 	  	"graduation date" : "May 2014"

 	  },
 	  {
 	  	"name" : "Santa Clara University",
 	  	"location" : "Santa Clara, CA",
 	  	"Major" : "Computer Science & Engineering",
 	  	"graduation date" : "Expected March 2017"
 	  }
 	]
 }



 var name = bio.name;
 var role = bio.role;
 var formattedName = HTMLheaderName.replace("%data%", name);
 var formattedRole = HTMLheaderRole.replace("%data%", role);
 $("#header").append(formattedName);
 $("#header").append(formattedRole);

 if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);

    var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[5]);
    $("#skills").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[6]);
    $("#skills").append(formattedSkills);
 }



