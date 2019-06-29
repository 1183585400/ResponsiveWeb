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
//	$('.menu_li').click(function(){
//			$('.menu_li').eq($('.menu_li').index(this)).addClass('all').siblings().removeClass('all');
//	})
	
	//分页
	$('.btn').click(function(){
			$('.btn').eq($('.btn').index(this)).addClass('first_btn').siblings().removeClass('first_btn');
	})
	
	//动态创建
	
	var srr = [{
		"src": "../img/product1.jpg",
		"title": "MAXHUB智能会议平板增强版",
		"text": "MAXHUB智能会议平板增强版"
	},
	{
		"src": "../img/product2.png",
		"title": "安玛思/AMX - 10.1寸桌面有线式触摸屏  MXT-1000",
		"text": "10.1寸桌面有线式触摸屏  MXT-1000"
	},
	{
		"src": "../img/product3.png",
		"title": "Condeco - 会议预约屏幕",
		"text": "会议预约屏幕"
	},
	{
		"src": "../img/product4.png",
		"title": "Condeco - 会议室预定",
		"text": "会议室预定,会议室预约,会议室预订"
	},
	{
		"src": "../img/product5.jpg",
		"title": "Condeco - 视频会议系统",
		"text": "视频会议系统,智能会议系统,远程会议系统"
	},
	{
		"src": "../img/product6.png",
		"title": "小白机器人",
		"text": "小白机器人"
	},
	{
		"src": "../img/product7.png",
		"title": "安玛思AVS 4K单路无缝混合插卡式矩阵",
		"text": "音视频切换矩阵|安玛思AVS 4K单路无缝混合插卡式矩阵|AVS-MX-2408(可定义输入输出/8路固定输出)"
	},
	{
		"src": "../img/product8.png",
		"title": "安玛思AVS 4K单路无缝混合插卡式矩阵",
		"text": "音视频切换矩阵|安玛思AVS 4K单路无缝混合插卡式矩阵|AVS-MX-1204(可定义输入输出/4路固定输出)"
	}]
	
	$.each(srr,function(index,data){
//		var	str = `<div class="goods"">
//					<img src="${data.src}" class="gPic"/>
//					<h4 class="gName">${data.name}</h4>
//					<p class="gInf">${data.inf}</p>
//					<div class="bottom">
//						<span class="price">${data.price}</span>
//						<div class="buy">立即购买</div>
//					</div>			
//				</div>`;
//		
//		$('#gBox').append(str);
		
		var	str = `<li class="col-xs-6 col-md-3 product_btn">
					<div class="card">
						<img src="${data.src}"/>
						<a class="icon">
							<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
						</a>
					</div>
					<h4 class="card_title">
						<a href="#" title="${data.title}">${data.title}</a>
						<p>${data.text}</p>
					</h4>
				</li>`;
		
		$('.product_list').append(str);
		
	});
	

}