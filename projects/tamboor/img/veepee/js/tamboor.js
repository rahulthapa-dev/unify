// Sticky section profitez
var didScroll;

$(document).ready(function(){
   $(window).one("scroll",(function(event){
      didScroll = true;
      $('.profitez').addClass('fixed-bottom').hide().fadeTo('slow','1');
   }));
})