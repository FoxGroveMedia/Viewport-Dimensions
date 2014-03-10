/*
A BIG Thanks to CrocoDillon for the help with this script.
*/
var $window = $(window),
    viewport = $('<div id="viewPort"></div>').hide(),
    visible = false,
    timer;

$('body').append(viewport);

function showViewportSize() {
  viewport.html('Inner: ' + window.innerWidth + ' x ' + window.innerHeight + '<br>Outer: ' + window.outerWidth + ' x ' + window.outerHeight);

  if (!visible) {
    viewport.fadeIn();
    visible = true;
  }

  clearTimeout(timer);
  timer = setTimeout(function() {
    viewport.fadeOut();
    visible = false;
  }, 1000);
}

$window.resize(showViewportSize);