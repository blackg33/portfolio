$(document).ready(function(){


	$('a[href^="#"]').on('click', function(event) {

	        event.preventDefault();
	        var target = $(this).data('target');
	            $('html, body').animate({
	            scrollTop: $(target).offset().top
	        }, 800);
	 });

	$(window).scroll(function () {
	    var scrollTop = $(window).scrollTop();
	    var height = $(window).height();

	    $('#title').css({
	        //'opacity': ((height - scrollTop) / height)
	        'opacity': (( 250-scrollTop )/250)+0.1
	    }); 
	});

});
