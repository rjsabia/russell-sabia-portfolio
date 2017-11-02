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
})