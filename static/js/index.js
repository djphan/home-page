function rmNavColor(element) {
	var numNavBarClasses = element.className.split('').length;
	for (i=0; i<numNavBarClasses; i++) {
		$('#navbar').removeClass(element.className.split(' ').pop());
	}
	return;
}

$( document ).ready(function() {
	// Navbar Color Changing
	var navid = 0;
	var a = $("#navbar").offset().top;

	$('#navbar').addClass('blue-grey darken-2');

	$(document).scroll (function() {

	});
    
 	// Parallax Setup
 	$('parallax-window').parallax({
 		speed: '0.3',
		bleed: '10' 
 	});

 	// Link to each window setup
	$('#parallax1').parallax({
		imageSrc: 'static/img/headerimg.jpg',
	});

	// Add Scrolling Transitions
	var $root = $('html, body');
	$('a').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

});
