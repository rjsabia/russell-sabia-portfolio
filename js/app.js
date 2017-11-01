$(document).ready( function() {
	$('.owl-carousel').owlCarousel({
	  loop: true,
	  margin: 15,
	  nav: true,
	  autoplay: true,
	  autoplayHoverPause: true,
	  responsive: {
	    0: {
	      items: 1
	    },
	    800: {
	      items: 2
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

//  var angle = 0;
// function galleryspin(sign) { 
// spinner = document.querySelector("#spinner");
// if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
// spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
// }