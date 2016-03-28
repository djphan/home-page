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
	// Slick Initalization for Carousel
	$('.aboutme_slider').slick();
	$('.skills_slider').slick();
	$('.workHistorySlider').slick();

	// Carousel Content. Automatically make alternating lists look nice
	$('.altern li:odd').prepend($('<i class=\'orange-text mdi-navigation-chevron-right\'></i>'));
	$('.altern li:even').prepend($('<i class=\'red-text mdi-navigation-chevron-right\'></i>'));
	$('.altern li:odd span').addClass('orange-text');
	$('.altern li:even span').addClass('red-text');

});
