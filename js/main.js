function showBanner() {
  /* change opacity on scroll */
  $(window).scroll(function() {
  var scrollPercent = ($(window).scrollTop() / $('#wrapper').outerHeight());
      if ($(window).scrollTop() > 100) {
          $('#top-bar').css("opacity", scrollPercent*2.0);
      }
      else{
          $('#top-bar').css("opacity", scrollPercent*2.0);
      }
  });
}
