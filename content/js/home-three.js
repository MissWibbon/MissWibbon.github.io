$(function animateIntro() {
	$('.intro').addClass('go');
	$('svg.intro .text').css('display', 'block');
});

$(window).on('scroll', function() {
	var pixs = $(document).scrollTop();
	pixs = pixs / 100;
  $('.out').css({ '-webkit-filter': 'blur(' + pixs + 'px)', filter: 'blur(' + pixs + 'px)' });
  console.log(pixs)
});
