window.onload = function() {
	//中间网页内容3轮播
	var swiper = new Swiper('.swiper-container',{
		autoplay: false,
		speed: 1000,
		autoplayDisableOnInteraction: false,
		loop: true,
		centeredSlides: true,
		slidesPerView: 2,
		pagination: '.swiper-pagination',
		paginationClickable: true,
		prevButton: '.swiper-button-prev',
		nextButton: '.swiper-button-next',
		onInit: function(swiper) {
			swiper.slides[2].className = "swiper-slide swiper-slide-active";
		},
		breakpoints: {
			668: {
				slidesPerView: 1,
			}
		}
	});
	
	//头部导航条
	$('.dropdown-toggle').click(function(){
		$(this).css('background','none')
	})
	
	//底部导航条
	$('.nav_btn_h4').click(function(){
		$(this).siblings("ul").slideToggle();
		if($(this).children().hasClass('rota')){
			$(this).children().removeClass('rota');
		}else{
			$(this).children().addClass('rota');
		}
	})
	
	//飘入页面
	wow = new WOW({
	 　　animateClass: 'animated',
	 });
	 wow.init();
	
}

