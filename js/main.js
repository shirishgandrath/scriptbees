jQuery(document).ready(function(){
	$('.video-btn .btn').click(function (e) {
	   e.preventDefault();
	   $(this).parent('.video-btn').fadeOut();
	   // $('.iframe-block iframe').src += "&autoplay=1";
	   $('.iframe-block iframe')[0].src += "?autoplay=1";
	   $('.video-block').addClass('video-playing');
	});
})