$(function(){

$('.toggle1').on('click', function(){
  $(this).toggleClass("down")  ;

  $('.test').toggleClass('hide-me');
    $('.test-back').toggleClass('reveal-me');
});


});
