$(document).ready( function() {

	$('.owl-carousel').owlCarousel({
		  loop: true,
		  margin: 10,
		  nav: true,
		  autoplay: true,
		  autoplayHoverPause: true,
		  responsive: {
		    0: {
		      items: 1
		    },
		    600: {
		      items: 3
		    },
		    1000: {
		      items: 3
		    }
		  }
	})

	$(window).bind('scroll', function() {
	   var distance = 60;
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