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
            "descriptions":
                "Currently building an interactive online resume webpage Implemented knowledge of HTML, CSS and JS on the design and development of personal portfolio page project Future projects include: Neighborhood map website, Arcade game clone website and health tracker website"

        },
        {
            "title": "2048 Game Design",
            "dates": "Spring 2015",
            "descriptions":
                "Implemented the game mechanics(moving tiles, merge tiles etc.) with object-oriented programming language \ Had deeper understanding about event handling in Java programming\ Fortified game board GUI designing and debugging skills"

        },
        {
            "title": "Alternative Home Security System (Senior Design Project)",
            "dates": "Spring 2014",
            "descriptions":
                "Designed a key-less entry system which consists of height, weight and eye-blink detection modules \ Implemented the system using PCB board and microprocessor coding with C\ Reverse-engineered a commercial digital weight scale to obtain signal which can be used in the microcontroller in the project\ Fortified writing and presentation skills to present the design as a product"

        },
        {
            "title": "Game Design Project",
            "dates": "Spring 2013",
            "descriptions":
                "Designed the logic and GUI of the game, Tank Battle, by programming VHDL code on FGPA board\ Implemented the game by keyboard and demonstrated the content on screen using FPGA board connection\ Finalized the game with the physics features, keyboard input recognition, game logic, enemy AI, LED Indicator on FGPA"

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
 		"location" : "San Jose"
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
        "degree" : "Bachelor of Science",
 	  	"major" : "Electrical Engineering",
 	  	"graduation date" : "May 2014"

 	  },
 	  {
 	  	"name" : "Santa Clara University",
 	  	"location" : "Santa Clara, CA",
        "degree" : "Master of Science",
 	  	"major" : "Computer Science & Engineering",
 	  	"graduation date" : "Expected March 2017"
 	  }
 	]
 }

 $(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
 });

 var name = bio.name;
 var role = bio.role;
 var formattedName = HTMLheaderName.replace("%data%", name);
 var formattedRole = HTMLheaderRole.replace("%data%", role);
 $("#header").append(formattedName);
 $("#header").append(formattedRole);

 //append biopic

 var formattedbiopic = HTMLbioPic.replace("%data%", "images/Qi.jpg");
 $("#header").append(formattedbiopic);




 //append the contact page



 var formattedMobile = HTMLmobile.replace("%data%", "(217)979-2059");

 $("#header").append(formattedMobile);

 var formattedEmail = HTMLemail.replace("%data%", "qzhao1@scu.edu");
 $("#header").append(formattedEmail);

 var formattedGithub = HTMLgithub.replace("%data%", "zuiuc");
 $("#header").append(formattedGithub);

 var formattedLocation = HTMLlocation.replace("%data%", "San Jose");
 $("#header").append(formattedLocation);

//append welcome message
 var formattedwelcomeMSG = HTMLwelcomeMsg.replace("%data%", "Welcome to Qi Zhao's Resume Page!");
 $("#header").append(formattedwelcomeMSG);

bio.display = function() {
 if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);

    for (skill in bio.skills){

        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);

        $("#skills").append(formattedSkills);
    }
 }
}

bio.display();



 projects.display = function() {
    for (project in projects.projects){
       $("#projects").append(HTMLprojectStart);





       if (project == 0){
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        formattedTitle = formattedTitle.replace("#", "https://github.com/zuiuc/Udacity/tree/master/front-end%20developer");
       }else if (project == 1){
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        formattedTitle = formattedTitle.replace("#", "https://github.com/zuiuc/2048-game");
       }else if (project == 2){
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        formattedTitle = formattedTitle.replace("#", "https://courses.engr.illinois.edu/ece445/getfile.asp?id=5617");
       }else{
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
       }



       $(".project-entry:last").append(formattedTitle);

       var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
       $(".project-entry:last").append(formattedDates);

       var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].descriptions);
           $(".project-entry:last").append(formattedDescription);
    }
 }

 projects.display();


 education.display = function() {
    for (school in education.schools){
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedName);

        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school]["graduation date"]);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);

        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedMajor);


    }
 }

 education.display();

 $("#mapDiv").append(googleMap);





