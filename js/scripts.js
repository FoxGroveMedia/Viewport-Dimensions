/*
A BIG Thanks to CrocoDillon for the help with this script.
*/
var $window = $(window),
    viewport = $('<div id="viewPortSize"></div>').hide(),
    visible = false,
    timer;

$('body').append(viewport);

chrome.storage.sync.get({
  remain_open: '1000',
  position: 'bottom_right',
  bgcolor: '#000000',
  txtcolor: '#ffffff',
  txtsize: '12px',
  inner_size: true,
  outer_size: true
}, function(items) {
  window.remain_open = items.remain_open;
  window.inner_size = items.inner_size;
  window.outer_size = items.outer_size;
  viewport.addClass(items.position);
  document.getElementById('viewPortSize').style.backgroundColor = items.bgcolor;
  document.getElementById('viewPortSize').style.color = items.txtcolor;
  document.getElementById('viewPortSize').style.fontSize = items.txtsize;
});

function showViewportSize() {

  var sizestxt = '';
  if(window.inner_size == true){sizestxt += 'Inner: ' + window.innerWidth + ' x ' + window.innerHeight;}
  if(window.inner_size == true && window.outer_size == true){sizestxt += '<br>';}
  if(window.outer_size == true){sizestxt += 'Outer: ' + window.outerWidth + ' x ' + window.outerHeight;}
  viewport.html(sizestxt);

  if (!visible) {
    viewport.fadeIn();
    visible = true;
  }

  clearTimeout(timer);
  timer = setTimeout(function() {
    viewport.fadeOut();
    visible = false;
  }, window.remain_open);
}

$window.resize(showViewportSize);

