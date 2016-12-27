import TweenMax from 'gsap/src/uncompressed/TweenMax'


export default {

  page (direction) {
    switch (direction) {
      case 'in':
        TweenMax.staggerFromTo('.animate .stagger-item', 0.27, {y: 50, opacity: 0}, {y: 0, opacity: 1}, 0.05);
        break;
      case 'out':
        TweenMax.to('.animate .stagger-item', 0.27, {y: -50, opacity: 0}, 0.05);
        break;
    }
  },

  focus (el, direction) {
    switch (direction) {
      case 'in':
        TweenMax.to($('.animate').not(el), 0.36, {opacity: 0.27}, 0.05);
        TweenMax.staggerTo($(el).find('.stagger-item'), 0.36, {y: -15}, 0.05);
        break;
      case 'out':
        TweenMax.to($('.animate').not(el), 0.36, {opacity: 1}, 0.05);
        TweenMax.staggerTo($(el).find('.stagger-item'), 0.36, {y: 0}, 0.05);
        break;
    }
  },

  bindEventListeners () {
    var focusInHandle = document.getElementsByClassName('mouseenter-focusIn');
    var self = this;

    // Trying to not use jQuery.
    Array.from(focusInHandle).forEach(function(el) {
      el.addEventListener('mouseover', function() {
        self.focus(this, 'in')
      });
      el.addEventListener('mouseleave', function() {
        self.focus(this, 'out')
      });
    });
  }

}
