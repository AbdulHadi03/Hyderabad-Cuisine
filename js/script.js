$(document).ready(function($) {

$('.js--nav').click(function(){
      
      $('.js--main-nav').slideToggle(200);
});

$('.js--btn-hero').click(function(){
$('html,body').animate({scrollTop:$('.js--intro').offset().top},1000);
});
$('.js--startBtn').click(function(){
$('html,body').animate({scrollTop:$('.js--starter').offset().top},1000);
});
$('.js--mainBtn').click(function(){
$('html,body').animate({scrollTop:$('.js--main-menu').offset().top},1000);
});
$('.js--dessertBtn').click(function(){
$('html,body').animate({scrollTop:$('.js--dessert').offset().top},1000);
});
$('.js--card1').click(function(){
$('html,body').animate({scrollTop:$('.js--card1Taker').offset().top},1000);
});
$('.js--card2').click(function(){
$('html,body').animate({scrollTop:$('.js--card2Taker').offset().top},1000);
});
$('.js--card3').click(function(){
$('html,body').animate({scrollTop:$('.js--card3Taker').offset().top},1000);
});
$('.js--fade').waypoint(function(direction){
$('.js--fade').addClass('animated fadeIn');
},{offset:'25%'});
$('.js--fade').waypoint(function(direction){
$('.js--main').addClass('animated bounceIn');
},{offset:'25%'});

  jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 2000  // 2 seconds
  $('.carousel').carousel({
  interval: 1500
});

});
