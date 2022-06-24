/*This is the Javascript*/

/*This function allows the works to toggle the subnav when on mobile mode*/

 window.onscroll = function() {scrollFunction()};

 //let y = document.querySelector("#cpu_screen")
//  function scrollFunction() {
//    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 80) {
//      document.querySelector("#cpu_screen").style.top = "-70px";
//      //document.querySelector(".nav_container").style.paddingTop = "30px";
//    } 
  
//    else {
//      document.querySelector("#cpu_screen").style.top = "0";
//      //document.querySelector(".nav_container").style.paddingTop = "40px";
//    }

//  }

function nav_button() {
    let x = document.querySelector(".nav_container"); //Grab the subnav for mobile
    if (x.style.display === "none") {
        x.style.display = "block";  

    }  
    else {
        x.style.display = "none";
    }
}


// This code is created by w3schools.
// Source: https://www.w3schools.com/howto/howto_js_slideshow.asp

/***********************************************************
------------------- JQuery --------------------------------
*****************************************************************/

//This JQuery allow to animate toggle on my side bar.
$(document).ready(function(){


    $("#hamberger_icon").click(function(){
        $(".nav_container").toggle(300);});

    $("#toggle_button0").click(function(){
        $("#sub_section").toggle(300);});

    $(".toggle_button").click(function(){
        $(this).next(".section").slideToggle(300);});

    /* This is used for the side bar */

    /* Scrolling animation */
    
    //This code is credited by: Joseph Silber
    //Source: https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
    $(document).on('click', 'a[href^="#"]', function (event) { //this tells the user, For every
                                                               // a tag that links to an
                                                               //id, use this function
        event.preventDefault(); //Prevent default from happening
    
        $('html, body').animate({ //Use animation
            scrollTop: $($.attr(this, 'href')).offset().top //Scrolling at an attribute this with link
        }, 500);
    });
});