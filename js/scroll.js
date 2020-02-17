(function($){
    $(function(){
  
    }); // end of document ready
  })(jQuery); // end of jQuery name space
  
    // Or with jQuery
  
  
    $(document).ready(function(){
      $('.sidenav').sidenav();
    });
  
        $('#scroll a').click( function(e) {
     var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
        
    $('html, body').animate({ 
      scrollTop: targetOffset - 200
    }, 500);
    
  });
  
  $(window).scroll(function() {
    if ($(document).scrollTop() > 400) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }
  });