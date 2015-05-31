function rmNavColor(element) {
	var numNavBarClasses = element.className.split('').length;
	for (i=0; i<numNavBarClasses; i++) {
		$('#navbar').removeClass(element.className.split(' ').pop());
	}
	return;
}

$( document ).ready(function() {    
 	// Parallax Setup
 	$('parallax-window').parallax({
 		speed: '0.3',
		bleed: '10' 
 	});

 	// Link to each window setup
	$('#parallax1').parallax({
		imageSrc: 'static/img/headerimg.jpg',
	});

	$('#parallax1').click(function() {
		var img1 = document.createElement("img");
		img1.src = 'static/img/headerimg.jpg';
		img1.materialbox();

		var src1 = document.getElementById("parallax1");
		src1.appendChild(img1);
	});

	$('#parallax2').parallax({
		imageSrc: 'static/img/gel.jpg',
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

});
