$(function animateIntro() {
	$('.head .intro').addClass('go');
	$('svg.intro .text').show();
});

$(window).on('scroll', function() {
	var pixs = $(document).scrollTop();
	pixs = pixs / 100;
  $('.out').css({ '-webkit-filter': 'blur(' + pixs + 'px)', filter: 'blur(' + pixs + 'px)' });
  console.log(pixs)
});



setTimeout(function() {$(window).scroll(function() {
  if (checkVisible($('svg.intro'))) {
    $('svg.intro').addClass('go');
  } 
});},1000)

function checkVisible( elm, eval ) {
  eval = eval || "visible";
  var vpH = $(window).height(), // Viewport Height
      st = $(window).scrollTop(), // Scroll Top
      y = $(elm).offset().top,
      elementHeight = $(elm).height();
  
  if (eval == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
  if (eval == "above") return ((y < (vpH + st)));
}