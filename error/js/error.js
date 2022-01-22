//? прелоадер  ***********************
window.setTimeout(function() {
  document.body.classList.add("loaded");
}, 3500);
// **********************************************
$(document).ready(function () {
  $('.parallaxList li').addClass('layer');
  $('.parallaxList').parallax();
  
  $('.wrapper').addClass('active');
});
function close_window() {
  if (confirm("Уже уходите, так быстро :( ...?")) {
    close();
  }
}