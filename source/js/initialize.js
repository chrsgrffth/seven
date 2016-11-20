import TweenMax from 'gsap/src/uncompressed/TweenMax';
import WebFont from 'webfontloader'

$(function() {
  'use strict';


  WebFont.load({
    google: {
      families: ['Rubik']
    },
    custom: {
      families: ['Simplon']
    }
  });

  $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
    options.async = true;
  });

  const options = {
    prefetch: true,
    cacheLength: 2,
    onStart: {
      duration: 1000,
        render: function ($container) {
          TweenMax.staggerFromTo('.animate .stagger-item', 0.5, {y: 0}, {y: -50, opacity: 0}, 0.05);
        }
    },
    onReady: {
      duration: 1000,
      render: function ($container, $newContent) {
        $container.html($newContent);

        TweenMax.staggerFromTo('.animate .stagger-item', 0.5, {y: 50, opacity: 0}, {y: 0, opacity: 1}, 0.05);
      }
    }
  };

  const smoothstate = $('#main').smoothState(options).data('smoothState');

  $(document).on('click', 'a.smooth', function(e) {
    e.preventDefault();
    smoothstate.load($(this).attr('href'));
  });
});


// $(function(){
//   'use strict';
//   var options = {
//     prefetch: true,
//     cacheLength: 2,
//     onStart: {
//       duration: 250, // Duration of our animation
//       render: function ($container) {
//         // Add your CSS animation reversing class
//         $container.addClass('is-exiting');

//         // Restart your animation
//         smoothState.restartCSSAnimations();
//       }
//     },
//     onReady: {
//       duration: 0,
//       render: function ($container, $newContent) {
//         // Remove your CSS animation reversing class
//         $container.removeClass('is-exiting');

//         // Inject the new content
//         $container.html($newContent);

//       }
//     }
//   },
//   smoothState = $('#main').smoothState(options).data('smoothState');
// });