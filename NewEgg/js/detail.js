$(function(){
	var itemId = search("itemId");
	var sortId = search("sortId");
	var sdiv = ""
	$.get("data/carousel.json",function(d){
		var json = d;
		var detailJson = json[sortId]["childs"][itemId];
		var bigImg ='';
		var smallImg='';
		for (var i=0;i<detailJson.big.length;i++){
			bigImg+='<img src="'+detailJson["big"][i]+'"/>'
		}
		for (var j=0;j<detailJson.small.length;j++){
			smallImg+='<li><a href="javascript:;"><img src="'+detailJson["small"][j]+'"/></a></li>'
		}
		var smallmo = '<div class="smallmove"></div><div class="bigfixpic">'+bigImg+'</div>'
		$("#tab1>.topCont>.topContLeft>.big").html(bigImg+smallmo);
		$("#tab1>.topCont>.topContLeft>.small>.smalllist>ul").html(smallImg);
		$("#tab1>.topCont>.topContRight>h2").html(detailJson["information"]);
		$("#tab1>.topCont>.topContRight>.explain>.brand>.aft").html(detailJson["name"]);
		$("#tab1>.topCont>.topContRight>.explain>.pprice>.salepr").html(detailJson["price"]);
		//itemId存到父元素上去  
		$(".wrap").data("itemid",itemId);
		$(".wrap").data("sortid",sortId);
		
		console.log($(".wrap").data())
		//必须要在这里调用  不然获取不到li
		pic();
		//购物车数量改变
		carNum();
		//立即购买
		rightNow();
		//加入购物车
		insert();
		//放大镜
		bigbig();
	})
}) 
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
function bigbig(){
	var $smallBox =$("#tab1>.topCont>.topContLeft>.big");
	var $smallBox = $("#tab1>.topCont>.topContLeft>.big"); 
	var $smallmove = $("#tab1>.topCont>.topContLeft>.big>.smallmove"); 
//	$smallBox.css("border-color","red")
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
//		if($num.val().){
//			
//		}
		console.log(typeof $num.val() +";")
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

//立即购买
function rightNow(){
//	console.log($(".wrap").data())
	$("#rightNowBuy").click(function(){
		var shopInfo = $(".wrap").data();
		shopInfo.count = parseInt($("#num").val());
		addCar(shopInfo);
		open("car.html");
		
	})
}
function insert(){
//	console.log($(".wrap").data())
	$("#insertCars").click(function(){
		var shopInfo = $(".wrap").data();
		shopInfo.count = parseInt($("#num").val());
		console.log(shopInfo)
		addCar(shopInfo);
	})
}

































