jQuery(function ($) {
	"use strict";

	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */


	$("#navigation").sticky({
		topSpacing: 0,
		zIndex: ''
	});

});
// End Jquery Function


/* ========================================================================= */
/*	Animated section
/* ========================================================================= */

var wow = new WOW({
	offset: 100, // distance to the element when triggering the animation (default is 0)
	mobile: false // trigger animations on mobile devices (default is true)
});

//https://github.com/matthieua/WOW/issues/196#issuecomment-348734401
var scrolled = false;
$(window).on('scroll', function() {
	if (!scrolled) {
		scrolled = true;
		wow.init();
	}
})

/* ========================================================================= */
/*	Smooth Scroll
/* ========================================================================= */
var scroll = new SmoothScroll('a[href*="#"]');


// https://varvy.com/pagespeed/defer-images.html

function init() {
	var imgDefer = document.getElementsByTagName('img');
	for (var i=0; i<imgDefer.length; i++) {
		if(imgDefer[i].getAttribute('data-src')) {
			imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
		} } }
		window.onload = init;