//Smoothstate////////////////////

;(function($) {
  'use strict';
  var $body = $('html, body'),
      content = $('#main').smoothState({
        // Runs when a link has been activated
        onStart: {
          duration: 250, // Duration of our animation
          render: function (url, $container) {
            // toggleAnimationClass() is a public method
            // for restarting css animations with a class
            content.toggleAnimationClass('is-exiting');
            // Scroll user to the top
            $body.animate({
              scrollTop: 0
            });
          }
        }
      }).data('smoothState');
      //.data('smoothState') makes public methods available
})(jQuery);



//switch background images on hover////////////////////
$(document).ready(function() {
    $('.item').mouseenter(function() {
        $('.backdrop').css('background-image','url(images/'+ $(this).data('img') +')').addClass('visable');
    });

    $('.item').mouseleave(function() {
        $('.backdrop').removeClass('visable');
    });
    
    $('.item').focus(function() {
        $('.backdrop').css('background-image', 'url(images/'+ $(this).data('img') +')').addClass('visable');
    });
});

//lightbox images////////////////////////
$(document).ready(function() {
 $('.photo, .photos').on('click', function(e) {
      $('img', this).toggleClass("lightbox"); //you can list several class names 
      e.preventDefault();
    });
});

