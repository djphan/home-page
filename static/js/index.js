
var sticky;

//Functions used to import HTML snippets 
$(document).ready(function() {
    // Load is ajax calls so... need to process mobile and sticky after the sections are loaded lol
    // Promises used to solve duplicate toast issue lol
    var navPromise = $.Deferred();
    var startHeroPromise = $.Deferred();
    var aboutMePromise = $.Deferred();
    var skillsPromise = $.Deferred();
    var projectsPromise = $.Deferred();

    $.when(
        navPromise, 
        startHeroPromise, 
        aboutMePromise, 
        skillsPromise,
        projectsPromise
    ).then(function(){
        setToastMessages();
    });

    $(".navbar").load("static/html/navbar.html", function() {
        sticky = $(".navbar").offset().top + 60;
        navPromise.resolve();
    });

    // Code to set sticky navbar
    $(".start-hero").load("static/html/start-hero-section.html", function() {
        mobileProcessing();
        startHeroPromise.resolve();        
    });
    
    $(".about-me").load("static/html/about-me.html", function() {
        mobileProcessing();
        aboutMePromise.resolve();
    });
    $(".skills").load("static/html/skills.html", function() {
        mobileProcessing();        
        skillsPromise.resolve(); 
    });
    $(".project").load("static/html/about-me.html", function() {
        mobileProcessing();
        projectsPromise.resolve();
    });

    // Setup For Mobile Navbar
    $(".button-collapse").sideNav();

    // Add Scrolling Transitions
	var $root = $('html, body');
	$('a').click(function() {
	    $root.animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
    });    
});

// Sticky Nav Bar Functionality
function setStickyNavbar() {
    if (window.pageYOffset >= sticky) {
        $(".navbar").addClass("sticky");
        // Account for shift to make nav bar transition smoother
        $(".start-hero").css('padding-top', '60px');
    } else {
        $(".navbar").removeClass("sticky");
        $(".start-hero").css('padding-top', '0px');
    }
}

window.onscroll = function() {
    setStickyNavbar();
};

// Mobile vs Desktop
function mobileWindowCheck() {
    // Naive width check for now to make the width look nice
    if(window.innerWidth <= 800) {
        return true;
    } else {
        return false;
    }
}

// Need to seperate this out to prevent duplicate toasts!
function setToastMessages() {
    startToastText = 'Taken in the Graffiti Park in Berlin';
    if (!mobileWindowCheck()) {
        startToastText = 'Taken in the Graffiti Park in Berlin, Germany'
    }

    $('a[data-id="start-hero-2"]').on('click', function() {
        Materialize.toast(startToastText, 3000);
    });
}

function mobileProcessing() {
    if (mobileWindowCheck()) {
        // Start Section
        $('div[data-id="start-hero-1"]').removeClass('col').removeClass('s5');
        $('div[data-id="start-hero-3"]').removeClass('col').removeClass('s7').addClass('center');

        // About Me
        $('div[data-id="mobile-about-me-1"]').removeClass('col').removeClass('s5');
        $('div[data-id="mobile-about-me-2"]').removeClass('col').removeClass('s7');
        $('div[data-id="mobile-about-me-2"]').css('padding-top', '20px');
    } else {
        // Start Section
        $('div[data-id="start-hero-1"]').addClass('col').addClass('s5')
        $('div[data-id="start-hero-3"]').addClass('col').addClass('s7').removeClass('center');

        // About Me
        $('div[data-id="mobile-about-me-1"]').addClass('col').addClass('s5');
        $('div[data-id="mobile-about-me-2"]').addClass('col').addClass('s7');
        $('div[data-id="mobile-about-me-2"]').css('padding-top', '0px');
    }   
}

window.onresize = function() {
    mobileProcessing();
}