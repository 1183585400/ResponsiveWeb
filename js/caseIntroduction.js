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
	
	//动态创建案例列表
	var srr = [{
		"day": "14",
		"date": "2019.04",
		"src": "../img/case1.jpg",
		"title":"安玛思智能家居集成应用方案",
		"text":"AMX一直是世界领先的控制及自动化系统的生产厂家。是全世界最大、历史最悠久的控制系统制造商之一。AMX硬件和软件解决方案使人与技术互动变得简单。我们屡获殊荣的产品覆盖控制和自动化，切换，分配音频和视频传输，以及技术管理。..."
	},
	{
		"day": "02",
		"date": "2019.04",
		"src": "../img/case2.png",
		"title":"可视化智能会议系统助力【国泰君安证券静安总部大楼】",
		"text":"AMX安玛思可视化智能会议系统助力【国泰君安证券静安总部大楼】，此方案包含视频会议系统,视频会议软件和MAX智能会议平板集成而成。..."
	},
	{
		"day": "14",
		"date": "2019.04",
		"src": "../img/case3.png",
		"title":"G20杭州峰会 - 安玛思AMX SVSi视频解决方案案例",
		"text":"安玛思AMX SVSi分布式视频会议解决方案助力G20杭州峰会成功主办。十楚楚西湖，巍巍钱塘，世人瞩目的G20峰会，多国领导人齐聚美丽的杭州，致力于探讨解决各类短期和长期的政治经济发展问题。会议主场馆选址在新落成的杭州国际博览中心，该中心位于杭州萧山区奥体博览城，单体建筑面积达85万平方米，是目前国内最大的单体建筑。中国作为主席国不负各方期待，向世界呈现了一场完美的峰会，也画上了圆满的句号。   ..."
	},
	{
		"day": "14",
		"date": "2019.04",
		"src": "../img/case4.png",
		"title":"中国移动天津公司 - 安玛思/AMX综合楼会议系统案例",
		"text":"       天津移动通信有限责任公司拥有雄厚的移动通信建设和维护技术力量。经过十几年的探索和努力，天津移动以惊人的建设速度成就了天津地区最大的移动通信网络，覆盖已通达全市各个角落。       中国移动天津公司新建设的综合楼，设有包括大型多功能会议厅， VIP会议室，7间领导小会议室，3间高清视频会议室，2间大会议室..."
	},
	{
		"day": "14",
		"date": "2019.04",
		"src": "../img/case5.png",
		"title":"金亚光大厦智能系统项目 - 安玛思/AMX智能会议系统案例",
		"text":"       该项目位于北京金融街一号，业主是中国石油，入驻单位是昆仑银行。昆仑银行前身为成立于2005年12月31日的克拉玛依市商业银行，经中油集团两次增资控股，中石油将其收购（92%股权）后，2009年4月20日正式更名为昆仑银行。截至2010年底，昆仑银行总资产为826.04亿元，同比增长2.82倍，是重组前的21倍。为了适应公司的高速发展，昆仑银行将..."
	},
	{
		"day": "14",
		"date": "2019.04",
		"src": "../img/case6.png",
		"title":"南京青奥会成功举行 - 安玛思/AMX智能会议系统案例",
		"text":"       2014南京青奥会已经成功的落下帷幕，中国健儿取得不俗的成绩的同时，南京主办方在场馆接待及组织安排上的成功也给全世界人民留下了美好的印象。       其中南京青奥会议中心承担了大部分的接待任务，会议中心是一栋46.9米高的6层会议中心、1栋314米68层的五星级酒店及办公；还有一栋249.5米58层的会..."
	}]
	
	$.each(srr,function(index,data){

		var	str = `<li class="cases_list">
	       				<div class="cases_pic">
	       					<img src="${data.src}" class="cases_img"/>
	       				</div>
	       				<p class="left_date">
							<span class="day">${data.day}</span>
							<span class="cases_date">${data.date}</span>
	       				</p>
	       				<div class="cases_text">
	       					<a class="cases_title">${data.title}</a>
	       					<p class="cases_p">${data.text}</p>
	       					<a class="cases_a">查看全文</a>
	       				</div>
	       			</li>`;
		
		$('.cases_ul').append(str);
		
	});
	
}