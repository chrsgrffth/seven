import TweenMax from 'gsap/src/uncompressed/TweenMax'
import WebFont from 'webfontloader'
import Transition from './helpers/transitions'

$(function() {
  'use strict';

  var $document = jQuery(document);

  // Transition the page in when JS has loaded.
  Transition.page('in');
  Transition.bindEventListeners();

  // Load in the fonts when JS has loaded.
  WebFont.load({
    google: {
      families: ['Rubik']
    },
    custom: {
      families: ['Simplon']
    }
  });

  // Set up SmoothState.
  $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
    options.async = true;
  });

  const options = {
    prefetch: true,
    cacheLength: 2,
    onStart: {
      duration: 1100,
        render: function ($container) {
          Transition.page('out');
        }
    },
    onReady: {
      duration: 550,
      render: function ($container, $newContent) {
        $container.html($newContent);

        Transition.page('in');
        Transition.bindEventListeners();
      }
    }
  };

  // Instantiate Smoothstate.
  const smoothstate = $('#main').smoothState(options).data('smoothState');

  // Event handlers.
  $document.on('click', 'a.smooth', function(e) {
    e.preventDefault();
    let path = $(this).attr('href');
    if (path != window.location.pathname) {
      smoothstate.load(path);
    }
  });

});

