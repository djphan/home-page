// Helper functions to command the slick Carousel
function nextSlide(element) {
	$(element).slick('slickNext');
}


function prevSlide(element) {
	$(element).slick('slickPrev');
}

$( document ).ready(function() {   

	// Navbar Setup
	$(".button-collapse").sideNav();

 	// Parallax Setup
 	$('parallax-window').parallax({
 		speed: '0.3',
		bleed: '10' 
 	});

 	// Link to each window setup
	$('#parallax1').parallax({
		imageSrc: 'static/img/headerimg.jpg',
	});

	$('#parallax2').parallax({
		imageSrc: 'static/img/gel.jpg',
	});

	$('#parallaxf').parallax({
		imageSrc: 'static/img/footerimg.png	',
	});

	// Standardize Text Size
	$('.content').css("font-size", "12.5pt");

	// Add Scrolling Transitions
	var $root = $('html, body');
	$('a').click(function() {
	    $root.animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
	});

	//Slick Initalization for Carousel
	$('.aboutme_slider').slick();

});




function rmNavColor(element) {
	var numNavBarClasses = element.className.split('').length;
	for (i=0; i<numNavBarClasses; i++) {
		$('#navbar').removeClass(element.className.split(' ').pop());
	}
	return;
}