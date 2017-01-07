export default {

  trackPageview: function (url) {
    if (window.ga) {
      window.ga('send', 'pageview', window.location.pathname || url);
    }
  }

}
