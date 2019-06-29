window.onload = function() {
//	//引用公共部分
//	$('header').load("CommHtml/header.html");
//	
//	$('footer').load("CommHtml/footer.html");
	
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
	
	//导航菜单
	$('.menu_li').click(function(){
			$('.menu_li').eq($('.menu_li').index(this)).addClass('all').siblings().removeClass('all');
	})
	
	//分页
	$('.btn').click(function(){
			$('.btn').eq($('.btn').index(this)).addClass('first_btn').siblings().removeClass('first_btn');
	})
	
//	$('.next').click(function(){
//		var len = $('.btn').length;
//		var i = $('.btn').index(this)+2
//		alert(i);
//		if($('.btn').css("background")=="#F1501A"){
//			$('.btn').index(i).css('background':'#F1501A');
//		}
		
		
//	})
}