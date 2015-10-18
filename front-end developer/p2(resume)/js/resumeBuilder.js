/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append("Qi Zhao");
 //$("#header").append();
 var name = "Qi Zhao";
 var role = "Software Engineer";
 var formattedName = HTMLheaderName.replace("%data%", name);
 var formattedRole = HTMLheaderRole.replace("%data%", role);
 $("#header").append(formattedName);
 $("#header").append(formattedRole);