
$('.slider-wrap').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false
   
});



$(".menu-small-icon").click(function(){
	$(".main-list").slideToggle();
});

$(window).resize(function(){
	var winwidth = $(window).innerWidth();
	if(winwidth < 992){
		$(".main-list").css("display", "none")
	}
	if(winwidth > 992){
		$(".main-list").css("display", "inline-block")
	}
});
