$(document).ready( function() {
	$(window).bind('scroll', function() {
	   var distance = 50;
			 if ($(window).scrollTop() > distance) {
				$('.nav-wrapper').addClass('scrolled');
            	$('header').addClass('scrolled');
			 }
			 else {
				$('.nav-wrapper').removeClass('scrolled');
            	$('header').removeClass('scrolled');
			 }
	});
})
