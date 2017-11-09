$(document).ready( function() {
	$('.owl-carousel').owlCarousel({
	  loop: true,
	  margin: 20,
	  nav: true,
	  autoplay: true,
	  autoplayHoverPause: true,
	  navText: [
	    "<i class='fa fa-caret-left'></i>",
	    "<i class='fa fa-caret-right'></i>"
	  ],
	  responsive: {
	    0: {
	      items: 1
	    },
	    640: {
	      items: 2
	    },
	    1100: {
	      items: 3
	    }
	  }
	})
	$(window).bind('scroll', function() {
	   var distance = 40;
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