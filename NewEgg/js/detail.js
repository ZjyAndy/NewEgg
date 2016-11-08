function search(name){
	var ls = location.search;
	ls = ls.replace(/^\?/,"");
	var arr = ls.split("&")
	for (var i=0,len=arr.length;i<len;i++) {
		var mm = arr[i].split("=");
		if(name == mm[0] ){
			return mm[1];
		}
	}
	return null;
}
//放大镜
bigbig();
pic()
function bigbig(){
	var $smallBox =$("#tab1>.topCont>.topContLeft>.big");
	var $smallBox = $("#tab1>.topCont>.topContLeft>.big"); 
	var $smallmove = $("#tab1>.topCont>.topContLeft>.big>.smallmove"); 
	$smallBox.css("border-color","red")
	var $bigBox = $("#tab1>.topCont>.topContLeft>.big>.bigfixpic");
	var $bigPic = $("#tab1>.topCont>.topContLeft>.big>.bigfixpic>img");
	$smallmove.css({"display":"none"});
	$bigBox.css({"display":"none"});
	$smallBox.mouseover(function(){
		$smallmove.css("display","block");
		$bigBox.css("display","block");
	}).mouseout(function(){
		$smallmove.css("display","none");
		$bigBox.css("display","none");
	})
	$smallBox.mousemove(function(ev){
		var left = ev.pageX-$(this).offset().left-$smallmove.width()/2;
		var top =  ev.pageY-$(this).offset().top-$smallmove.height()/2;
		if(ev.pageX-$(this).offset().left-$smallmove.width()/2<=0){
			left=0;
		}
		if(ev.pageX-$(this).offset().left-$smallmove.width()/2>=$(this).width()-$smallmove.width()){
			left=$(this).width()-$smallmove.width();
		}
		if(ev.pageY-$(this).offset().top-$smallmove.height()/2<=0){
			top=0;
		}
		if(ev.pageY-$(this).offset().top-$smallmove.height()/2>=$(this).height()-$smallmove.height()){
			top=$(this).height()-$smallmove.height();
		}
		var bleft=left/$(this).width()*$bigPic.width();
		var btop=top/$(this).height()*$bigPic.height();
		$bigPic.css({"left":-bleft,"top":-btop})
		$smallmove.css({"left":left,"top":top});
		
	})
}
//小图切换大图也跟着切换
function pic(){
	var $ul = $("#tab1>.topCont>.topContLeft>.small>.smalllist>ul")
	var $li = $("#tab1>.topCont>.topContLeft>.small>.smalllist>ul>li")
	var $width = $li.eq(0).outerWidth()+16;
	var $size = $li.size();
	var $img = $("#tab1>.topCont>.topContLeft>.big>img");
	
	var $imgBig = $("#tab1>.topCont>.topContLeft>.big>.bigfixpic>img");
	
	var $left = $("#left");
	var $right = $("#right");
	var num = 0;
	$img.each(function(i){
		$img.eq(i).css("display","none");
		$img.eq(0).css("display","block");
		$imgBig.eq(i).css("display","none");
		$imgBig.eq(0).css("display","block");
	})
//	console.log($img.size()+"img")
	$li.mouseover(function(){
//		console.log($(this).index())
		$(this).css("border-color","#FF6600").siblings().css("border-color","#FFFFFF")
		$img.eq($(this).index()).css("display","block").siblings("img").css("display","none");
		$imgBig.eq($(this).index()).css("display","block").siblings("img").css("display","none");
	})
	$right.click(function(){
		num++;
		if(num>=$size-4){
			num=$size-4;
		}
		$ul.animate({"left":$width*num*(-1)})
	})
	$left.click(function(){
		num--;
		if(num<=0){
			num=0;
		}
		$ul.animate({"left":$width*num*(-1)})
	})
}
carNum()
//购物车的数量
function carNum(){
	var $num = $("#num");
	var $des = $("#des");
	var $isc = $("#isc");
	var value = null;
	$isc.click(function(){
		var $val = $num.val();
		$val++;
		if($val>=200){
			$val=200;
		}
		$num.val($val);
	})
	$des.click(function(){
		var $val = $num.val();
		$val--;
		if($val<=1){
			$val=1;
		}
		$num.val($val);
	})
	$num.focus(function(){
		value=$num.val();
	}).blur(function(){
		if(isNaN($num.val())){
			$num.val(value);
		}
		if($num.val()==''){
			$num.val(value);
		}
	})
}

//nav菜单
navscroll();
function navscroll(){
	$(window).on("scroll",function(){
//		console.log($(document).scrollTop())
		if($(document).scrollTop()>=200){
			$(".topNavDis").css("display","block");
		}else{
			$(".topNavDis").css("display","none");
		}
	})
}

//点击导航栏背景图改变
bg();
function bg(){
	$(".topNavDis1 .navList li").click(function(){
		$(this).addClass("navBg").siblings().removeClass("navBg");
		$(this).find(">a").css("color","#000000");
		$(this).siblings().find(">a").css("color","#666");
		$(".topNavDis .navList li").eq($(this).index()).addClass("navBg").siblings().removeClass("navBg");
		$(".topNavDis .navList li").eq($(this).index()).siblings().find(">a").css("color","#fff");
		$(".topNavDis .navList li").eq($(this).index()).find(">a").css("color","#000000");
	})
	$(".topNavDis .navList li").click(function(){
		$(this).addClass("navBg").siblings().removeClass("navBg");
		$(this).find(">a").css("color","#000000");
		$(this).siblings().find(">a").css("color","#fff");
		$(".topNavDis1 .navList li").eq($(this).index()).addClass("navBg").siblings().removeClass("navBg");
	})
}
rightNow();
insert();
//立即购买
function rightNow(){
	$("#rightNowBuy").click(function(){
		var shopInfo = $(".wrap").data();
		shopInfo.count = parseInt($("#num").val());
		addCar(shopInfo);
		open("car.html");
	})
}
function insert(){
	$("#insertCars").click(function(){
		var shopInfo = $(".wrap").data();
		shopInfo.count = parseInt($("#num").val());
		console.log(shopInfo)
		addCar(shopInfo);
	})
}




$(function() {
	$('#fw1').mouseover(function() {
		$('#fw').css('display', 'block');
	});
	$('#fw1').mouseout(function() {
		$('#fw').css('display', 'none');
	});
	$('#fw').mouseover(function() {
		$('#fw').css('display', 'block');
	});
	$('#fw').mouseout(function() {
		$('#fw').css('display', 'none');
	});
	$('#myd1').mouseover(function() {
		$('#myd').css('display', 'block');
	});
	$('#myd1').mouseout(function() {
		$('#myd').css('display', 'none');
	});
	$('#myd').mouseover(function() {
		$('#myd').css('display', 'block');
	});
	$('#myd').mouseout(function() {
		$('#myd').css('display', 'none');
	});
});

$(function() {
	var oLi = $('#tz').find('li');
	for(var i = 0; i < oLi.length; i++) {
		$(oLi).hover(function() {
			$(this).fadeIn(2000, function() {
				$(this).css('background', '#295DD7');
			});
		}, function() {
			$(this).fadeIn(2000, function() {
				$(this).css('background', '#10286c');
			});
		});
	};
})
$(function(){
	$('#top').hover(function(){
		$(this).css('width' , '100px');
	} , function(){
		$(this).css('width' , '12px');
	});
	$('#top').click(function(){
		$("body,html").animate({'scrollTop': 0},1000)
	})
})


























