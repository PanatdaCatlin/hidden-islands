$(function() {
  $("#azoresClickable").click(function() {
    $("#hideAzores").fadeToggle();
    $("#showAzores").slideToggle();
  });
  $("#scotlandClickable").click(function() {
    $("#hideScotland").toggle();
    $("#showScotland").slideUp();
});
  $("#columbiaClickable").click(function() {
    $("#hideColumbia").toggle();
    $("#showColumbia").slideDown();
  });
});
