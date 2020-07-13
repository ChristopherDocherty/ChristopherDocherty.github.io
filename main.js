

var bridge_card = document.getElementById("bridge-card");
var bridge_modal = document.getElementById("bridge-modal");


bridge_card.onclick = function () {
    
    var bridge_card = document.getElementById("bridge-card");

    var card_top = bridge_card.getBoundingClientRect().top;
    var card_left = bridge_card.getBoundingClientRect().left;


    var bridge_card_focused = document.getElementById("bridge-card-focused");
    bridge_card_focused.style.top = (card_top-10).toString() + "px";
    bridge_card_focused.style.left = (card_left+134).toString() + "px";
    console.log(card_top.toString() + "px", card_left.toString() + "px")

    bridge_modal.style.display = "block";

}






var crystal_card = document.getElementById("crystal-card");
var crystal_modal = document.getElementById("crystal-modal");


crystal_card.onclick = function () {
    
    
    var crystal_card = document.getElementById("crystal-card");

    var card_top = crystal_card.getBoundingClientRect().top;
    var card_left = crystal_card.getBoundingClientRect().left;


    var crystal_card_focused = document.getElementById("crystal-card-focused");
    crystal_card_focused.style.top = (card_top-10).toString() + "px";
    crystal_card_focused.style.left = (card_left+134).toString() + "px";
    console.log(card_top.toString() + "px", card_left.toString() + "px")

    crystal_modal.style.display = "block";

}





var neat_card = document.getElementById("neat-card");
var neat_modal = document.getElementById("neat-modal");


neat_card.onclick = function () {
    
    console.log("TESGT");

    var neat_card = document.getElementById("neat-card");

    var card_top = neat_card.getBoundingClientRect().top;
    var card_left = neat_card.getBoundingClientRect().left;


    var neat_card_focused = document.getElementById("neat-card-focused");
    neat_card_focused.style.top = (card_top-10).toString() + "px";
    neat_card_focused.style.left = (card_left+134).toString() + "px";
    console.log(card_top.toString() + "px", card_left.toString() + "px")

    neat_modal.style.display = "block";

}



window.onclick = function(event) {
    if (event.target == bridge_modal) {
        bridge_modal.style.display = "none";
    }
    if (event.target == crystal_modal) {
        crystal_modal.style.display = "none";
    }
    if (event.target == neat_modal) {
      neat_modal.style.display = "none";
    }
  }



//Code to reanimate waves in coffee cup
var wave1 = document.getElementById("wave");
var wave2 = document.getElementById("wave2");

//New window on-load to improve coffee animation
window.onload = function () {
    wave1.className = "wave";
    wave2.className = "wave2";
}


var waves_onclick = function () {

    if(wave2.offsetWidth > 76) {
        wave1.className = "None";
        wave2.className = "None";
        void wave2.offsetWidth;
        wave1.className = "wave";
        wave2.className = "wave2";

    }
}


wave1.onclick = waves_onclick;
wave2.onclick = waves_onclick;







var scroll_to_projects = function () {
    console.log("TEST");
    
    var projects_header = document.getElementById("section-projects");
    var projects_header_top = projects_header.getBoundingClientRect().top;
    
    window.scrollTo(0,projects_header_top);
};

var scroll_arrow = document.getElementById("scroll-arrow");
scroll_arrow.onclick = scroll_to_projects;

var projects_button = document.getElementById("project-button");
projects_button.onclick = scroll_to_projects;



var scroll_to_contact = function () {
    var contact_header = document.getElementById("section-contact");
    var contact_header_top = contact_header.getBoundingClientRect().top;
    
    window.scrollTo(0,contact_header_top);
};

var contact_button = document.getElementById("contact-button");
contact_button.onclick = scroll_to_contact;




//Email copying 

var email_span = document.getElementById("email-text");

email_span.onclick = function () {
    navigator.clipboard.writeText("christopher.docherty@gmail.com");
}


