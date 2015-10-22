// Helper functions to command the slick Carousel
function nextSlide (element) {
	$(element).slick('slickNext');
}

function prevSlide (element) {
	$(element).slick('slickPrev');
}

function goToSlide (element, slide) {
	$(element).slick('slickGoTo', slide);
}

// Document Setup Block
$(document).ready(function () {
	// Standardize Text Size
	$('.content').css('font-size', '12.5pt');
	$('.content2').css('font-size', '14pt');

	// Navbar Setup
	$('.button-collapse').sideNav();

 	// Parallax Setup
	$('.parallax').parallax();

	// Add Scrolling Transitions
	var $root = $('html, body');
	$('a').click(function() {
	    $root.animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
	});

	// Slick Initalization for Carousel
	$('.aboutme_slider').slick();
	$('.skills_slider').slick();
	$('.workHistorySlider').slick();

	// Carousel Content. Automatically make alternating lists look nice
	$('.altern li:odd').prepend($('<i class=\'orange-text mdi-navigation-chevron-right\'></i>'));
	$('.altern li:even').prepend($('<i class=\'red-text mdi-navigation-chevron-right\'></i>'));
	$('.altern li:odd span').addClass('orange-text');
	$('.altern li:even span').addClass('red-text');

	$('.links li').prepend($('<i class=\'blue-text mdi-navigation-chevron-right\'></i>'));

	// Fixing spacing for H3 elements
	$('h3').wrapInner('<span class=\"col m7 s10 offset-s1"></span>');
});
