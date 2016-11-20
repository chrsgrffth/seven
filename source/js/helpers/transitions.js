import TweenMax from 'gsap/src/uncompressed/TweenMax'


export default {

  page (direction) {
    switch (direction) {
      case 'in':
        TweenMax.staggerFromTo('.animate .stagger-item', 0.5, {y: 50, opacity: 0}, {y: 0, opacity: 1}, 0.05);
        break;
      case 'out':
        TweenMax.staggerTo('.animate .stagger-item', 0.5, {y: -50, opacity: 0}, 0.05);
        break;
    }
  },

  focus (el, direction) {
    switch (direction) {
      case 'in':
        TweenMax.staggerTo($(el).find('.stagger-item'), 0.5, {y: -15}, 0.05);
        break;
      case 'out':
        TweenMax.staggerTo($(el).find('.stagger-item'), 0.5, {y: 0}, 0.05);
        break;
    }
  }

}