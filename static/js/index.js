
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

	$('.links li').prepend($('<i class=\'blue-text mdi-navigation-chevron-right\'></i>'));

	// Fixing spacing for H3 elements
	$('h3').wrapInner('<span class=\"col m7 s10 offset-s1"></span>');
});
