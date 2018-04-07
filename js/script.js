$(document).ready(function(){
  $('.top-menu__toggler-icon').on('click', function() {
    $('.top-menu__navbar-nav').slideToggle("0.5s");
  });

  $('.slider').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   nextArrow: $("#right_arrow"),
    prevArrow: $("#left_arrow"),
   focusOnSelect: true,
   centerMode: true,
   centerPadding: true,
   initialSlide: 3,
   dots: true,
   dotsClass: "my_slick-dots",
   autoplay: true,
   autoplaySpeed: 5000,
  });

  $('.center').slick({
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 4,
    speed: 500,
    variableWidth: false,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        }
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 700, 'swing', function () {
	        window.location.hash = target;
	    });
	});

  AOS.init({
    duration: 1500,
    easing: 'ease-in-out-back',
    once: true,
    disable: window.innerWidth < 991
  });
});
