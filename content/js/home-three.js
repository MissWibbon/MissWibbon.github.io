$(function() {
    $('.intro').addClass('go');
  
      $('.intro').removeClass('go').delay(200).queue(function(next) {
        $('.intro').addClass('go');
        next();
      });
  
    });
  })