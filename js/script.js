$(document).ready(function(){
  $('.navbar-btn').on('click', function() {
    $('.navbar-inner').toggleClass('in');
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
 });
});
