$('body').append('<div id="viewPort"></div>');
$('#viewPort').hide();
function showViewportSize(){
  var the_width = $(window).width();
  var the_height = $(window).height();
  $('#viewPort').text(the_width + ' x ' + the_height).fadeIn('fast', function() {
    $(this).delay(3000).fadeOut();
  });
}
$(window).resize(function(e){
   showViewportSize();
});