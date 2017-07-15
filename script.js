$(document).ready(function() {
  $("#btn-scroll-down").click(function() {
    $('html, body').animate({
      scrollTop: $("#recipes").offset().top
    }, 2000);
  });
})
