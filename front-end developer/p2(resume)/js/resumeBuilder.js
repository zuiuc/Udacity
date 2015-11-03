// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.
/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append("Qi Zhao");
//$("#header").append();
var projects = {
    "projects": [{
        "title": "Web Development Project (Udacity Front-end Nano Degree)",
        "dates": "Summer 2015",
        "descriptions": "A nanodegree program helps to sharp Font-end programming skills using HTML, CSS, JS, Bootstrap, AJAX and Jquey. The degree program consits of six individual projects: Portfolio Site, Interactive Resume, Classic Arcade Game Clone, Website Optimization, Neighborhood Map, and Feed Reader Testing. Currently building the Classic Arcade Game. Finished projects: Personal Portfolio and Interactive Resume"

    }, {
        "title": "2048 Game Design",
        "dates": "Spring 2015",
        "descriptions": "A class project to make my own 2048 game based on the original game using java. Game machanics is the same. Implemented the game logic and GUI design."
    }, {
        "title": "Alternative Home Security System (Senior Design Project)",
        "dates": "Spring 2014",
        "descriptions": "Designed a key-less entry system which consists of height, weight and eye-blink detection modules Implemented the system using PCB board and microprocessor coding with C. Reverse-engineered a commercial digital weight scale to obtain signal which can be used in the microcontroller in the project. Fortified writing and presentation skills to present the design as a product"
    }, {
        "title": "Game Design Project",
        "dates": "Spring 2013",
        "descriptions": "Designed the logic and GUI of the game, Tank Battle, by programming VHDL code on FGPA board. Implemented the game by keyboard and demonstrated the content on screen using FPGA board connection. Finalized the game with the physics features, keyboard input recognition, game logic, enemy AI, LED Indicator on FGPA"

    }]
};




var bio = {
    "name": "Qi Zhao",
    "role": "Software Engineer",
    "contacts": {
        "mobile": "217-979-2059",
        "email": "qzhao1@scu.edu",
        "github": "zuiuc",
        "location": "San Jose"
    },
    "skills": [
        "Java", "JavaScript", "HTML", "CSS", "C", "VHDL", "Verilog"
    ]
};

var education = {
    "schools": [{
        "name": "University of Illinois, Urbana-Champaign",
        "location": "Champaign, IL",
        "degree": "Bachelor of Science",
        "major": "Electrical Engineering",
        "graduation date": "May 2014"

    }, {
        "name": "Santa Clara University",
        "location": "Santa Clara, CA",
        "degree": "Master of Science",
        "major": "Computer Science & Engineering",
        "graduation date": "Expected March 2017"
    }]
};

var works = {
    "works": [{
            "employer": "University of Illinois, Urbana-Champaign ECE Department",
            "title": "Undergraduate Teaching Assistant",
            "dates": "Fall 2013",
            "location": "Champaign",
            "description": "Helped undergraduate students with understanding of course materials. Reponsible for collecting and grading of the homework."
        }

    ]
};

/*$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});*/



bio.display = function() {

    var name = bio.name;
    var role = bio.role;
    var formattedName = HTMLheaderName.replace("%data%", name);
    var formattedRole = HTMLheaderRole.replace("%data%", role);
    $("#header").append(formattedName);
    $("#header").append(formattedRole);

    //append biopic

    var formattedbiopic = HTMLbioPic.replace("%data%", "images/Qi.jpg");
    $("#header").append(formattedbiopic);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

    $("#header").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#header").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#header").append(formattedGithub);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#header").append(formattedLocation);

    //append welcome message
    var formattedwelcomeMSG = HTMLwelcomeMsg.replace("%data%", "Welcome to Qi Zhao's Resume Page!");
    $("#header").append(formattedwelcomeMSG);

    //append skills
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (i=0;i<bio.skills.length;i++) {

            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);

            $("#skills").append(formattedSkills);
        }
    }
    //footer display

    $("#footerContacts").append(formattedMobile);


    $("#footerContacts").append(formattedEmail);


    $("#footerContacts").append(formattedGithub);


    $("#footerContacts").append(formattedLocation);


};

bio.display();

works.display = function() {
    for (i=0;i < works.works.length;i++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", works.works[i].employer);
        if (i === 0) {
            formattedEmployer = formattedEmployer.replace("#", "https://www.ece.illinois.edu/");
        }
        $(".work-entry:last").append(formattedEmployer);

        var formattedTitle = HTMLworkTitle.replace("%data%", works.works[i].title);
        $(".work-entry:last").append(formattedTitle);

        var formattedDates = HTMLworkDates.replace("%data%", works.works[i].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", works.works[i].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", works.works[i].description);
        $(".work-entry:last").append(formattedDescription);


    }
};

works.display();

projects.display = function() {
    for (i=0;i<projects.projects.length;i++) {
        $("#projects").append(HTMLprojectStart);
        if (i === 0) {
            var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            formattedprojectTitle = formattedprojectTitle.replace("#", "https://github.com/zuiuc/Udacity/tree/master/front-end%20developer");
        } else if (i === 1) {
            var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            var formattedprojectTitle = formattedprojectTitle.replace("#", "https://github.com/zuiuc/2048-game");
        } else if (i === 2) {
            var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            var formattedprojectTitle = formattedprojectTitle.replace("#", "https://courses.engr.illinois.edu/ece445/getfile.asp?id=5617");
        } else {
            var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        }

        $(".project-entry:last").append(formattedprojectTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].descriptions);
        $(".project-entry:last").append(formattedDescription);
    }
};

projects.display();


education.display = function() {
    for (i=0;i<education.schools.length;i++) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        $(".education-entry:last").append(formattedName);

        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(formattedDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i]["graduation date"]);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedLocation);

        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
        $(".education-entry:last").append(formattedMajor);


    }
};

education.display();

$("#mapDiv").append(googleMap);

