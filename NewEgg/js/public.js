$(function() {
	$('#fw1').hover(function(){
		$('#fw').css('display', 'block');
	},function(){
		$('#fw').css('display', 'none');
	});
	$('#fw').hover(function(){
		$('#fw').css('display', 'block');
	},function(){
		$('#fw').css('display', 'none');
	});
	$('#myd').hover(function(){
		$('#myd').css('display', 'block');
	} ,function(){
		$('#myd').css('display', 'none');
	});
	$('#myd1').hover(function(){
		$('#myd').css('display', 'block');
	} ,function(){
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
});
$(function() {
	var num = 1;
	var timer = setInterval(function() {
		num += 1;
		if(num > 8) {
			num = 1;
		};
		$('#list1 li').eq(num - 1).css('background', '#ff6600');
		$('#list1 li').eq(num - 2).css('background', '#737373');
		$('#pic').fadeOut(1000, function() {
			$(this).attr('src', 'img/main/banner' + num + '.png').fadeIn(1000);
		});
	}, 3000);
	$('#list1 li').hover(function() {
		clearInterval(timer);
		$('#list1 li').css('background', '#737373');
		num = $(this).index();
		$index = num;
		$(this).css('background', '#ff6600');
		var str = 'img/main/banner' + ($index + 1) + '.png';
		$('#pic').fadeOut(1000, function() {
			$(this).attr('src', str).fadeIn(1000);
		});
	}, function() {
		num = $(this).index();
		timer = setInterval(function() {
			num += 1;
			if(num > 7) {
				num = 0;
			};
			$('#list1 li').eq(num).css('background', '#ff6600');
			$('#list1 li').eq(num - 1).css('background', '#737373');
			$('#pic').fadeOut(1000, function() {
				$(this).attr('src', 'img/main/banner' + (num + 1) + '.png').fadeIn(1000);
			});
		}, 3000);
	});
});
$(function() {
	timeM();
	var Mtimer = setInterval(timeM, 1)

	function timeM() {
		var oQg = document.getElementById("qg");
		var oTime = new Date('2016/11/20 00:00:00').getTime();
		var oToday = new Date().getTime();
		var aTime = oTime - oToday;
		var oMs = aTime % 1000;
		var oS = ((aTime - oMs) / 1000) % 60;
		var oMin = ((((aTime - oMs) / 1000) - oS) / 60) % 60;
		var oH = parseInt((((((aTime - oMs) / 1000) - oS) / 60) - oMin) / 60);

		function dub(t) {
			if(t < 10) {
				t = '0' + t;
			};
			return t;
		};
		if(aTime <= 0) {
			oS = 0;
			oMin = 0;
			oH = 0;
			oT = 0;
			clearInterval(Mtimer);
		};
		oQg.innerHTML = dub(oH) + ":" + dub(oMin) + ":" + dub(oS);;
	};
});


$(function() {
	var num1 = 1;
	var oTimer = setInterval(function() {
		num1 += 1;
		if(num1 > 5) {
			num1 = 1
		};
		$('#list2 li').eq(num1 - 1).css('background', '#ff6600');
		$('#list2 li').eq(num1 - 2).css('background', '#737373');
		$('#pic2').fadeOut(1000, function() {
			$(this).attr('src', 'img/main/right' + num1 + '.png').fadeIn(500)
		});
	}, 2500);
	$('#list2 li').hover(function() {
		clearInterval(oTimer);
		$('#list2 li').css('background', '#737373')
		num1 = $(this).index();
		$index = num1;
		$(this).css('background', '#ff6600')
		var str = 'img/main/right' + ($index + 1) + '.png';
		$('#pic2').fadeOut(1000, function() {
			$(this).attr('src', str).fadeIn(1000)
		});
	}, function() {
		num1 = $(this).index();
		oTimer = setInterval(function() {
			num1 += 1;
			if(num1 > 4) {
				num1 = 0
			};
			$('#list2 li').eq(num1).css('background', '#ff6600');
			$('#list2 li').eq(num1 - 1).css('background', '#737373');
			$('#pic2').fadeOut(1000, function() {
				$(this).attr('src', 'img/main/right' + (num1 + 1) + '.png').fadeIn(500)
			});
		}, 2500);
	});
});
$(function() {
	var onOff = true;
	$('#other').click(function() {
		if(onOff) {
			onOff = false;
			$('#none').css('display', 'none');
		} else {
			onOff = true;
			$('#none').css('display', 'block');
		};
	});
});

$(function() {
	var $div = $("#hot").children();
	var $width = $div.eq(0).outerWidth();
	$div.each(function(i) {
		if(i == 0) {
			$div.eq(i).css("left", 0);
		} else {
			$div.eq(i).css("left", $width + (i - 1) * 174);
		};
	});
	$div.mouseenter(function(ev) {
		ev.stopPropagation();
		var $index = $(this).index();
		$(this).zIndex = 5;
		$div.each(function(i) {
			if(i == 0) {
				$div.eq(i).animate({
					"left": 0
				}, 300, 'linear');
			};
			if(0 < i && i <= $index) {
				$div.eq(i).animate({
					"left": i * 174
				}, 300, 'linear');
			};
			if(i > $index) {
				$div.eq(i).animate({
					"left": $width + (i - 1) * 174
				}, 300, 'linear');
			};
		});
	});
});

$(function() {
	var aDiv = $('#hotgoods').children();
	$('#aul li').each(function(i) {
		$('#aul li').eq(i).mouseenter(function() {
			$(this).css('background', '#fff');
			$(this).siblings().css('background', '#f6f6f6');
			aDiv.eq(i).css('display', 'block');
			aDiv.eq(i).siblings().css('display', 'none')
		});
	});
});

$(function() {
	$('#l li').each(function(i) {
		$('#l li').eq(i).mouseenter(function() {
			$(this).css('background', '#FF6600');
			$(this).siblings().css('background', '#ccc')
			$('#goo').attr('src', 'img/main/l' + (i + 1) + '.png')
		});
	});
});
$(function() {
	var num = 1;
	clearInterval(timer2)
	var timer2 = setInterval(function() {

		if(num >= 4) {
			num = 0;
		};
		num += 1;
		$('#ht img').attr('src', 'img/main/lb' + num + '.jpg');
		$('#ht li').eq(num - 1).css('background', '#FF6600');
		$('#ht li').eq(num - 1).siblings().css('background', '#ccc');
	}, 1000);
	timer2;
	$('#ht li').each(function(i) {
		$('#ht li').eq(i).mouseenter(function() {
			clearInterval(timer2);
			num = i;
			$(this).css('background', '#FF6600');
			$(this).siblings().css('background', '#ccc');
			$('#ht img').attr('src', 'img/main/lb' + (num + 1) + '.jpg');
		});
	});
	$('#ht').mouseleave(function() {
		clearInterval(timer2)
		timer2 = setInterval(function() {
			if(num >= 4) {
				num = 0;
			};
			num += 1;
			$('#ht img').attr('src', 'img/main/lb' + num + '.jpg');
			$('#ht li').eq(num - 1).css('background', '#FF6600');
			$('#ht li').eq(num - 1).siblings().css('background', '#ccc');
		}, 1000);
	});
});
$(function() {
	$('#rx a').each(function(i) {
		$('#rx a').eq(i).mouseenter(function() {
			$(this).css('background', '#fff').css('color', '#FF6600');
			$(this).siblings().css('background', '#bbb').css('color', '#666');
			$('#rx span').css('background', '#fff');
			$('#rxl ul').eq(i).css('display', 'block');
			$('#rxl ul').eq(i).siblings().css('display', 'none');
		});
	});
});
$(function() {
	var num = 1;
	clearInterval(timer3)
	var timer3 = setInterval(function() {

		if(num >= 8) {
			num = 0;
		};
		num += 1;
		$('#ht1 img').attr('src', 'img/main/lb2' + num + '.jpg');
		$('#ht1 li').eq(num - 1).css('background', '#FF6600');
		$('#ht1 li').eq(num - 1).siblings().css('background', '#ccc');
	}, 1000);
	timer3;
	$('#ht1 li').each(function(i) {
		$('#ht1 li').eq(i).mouseenter(function() {
			clearInterval(timer3);
			num = i;
			$(this).css('background', '#FF6600');
			$(this).siblings().css('background', '#ccc');
			$('#ht1 img').attr('src', 'img/main/lb2' + (num + 1) + '.jpg');
		});
	});
	$('#ht1').mouseleave(function() {
		clearInterval(timer3)
		timer3 = setInterval(function() {
			if(num >= 8) {
				num = 0;
			};
			num += 1;
			$('#ht1 img').attr('src', 'img/main/lb2' + num + '.jpg');
			$('#ht1 li').eq(num - 1).css('background', '#FF6600');
			$('#ht1 li').eq(num - 1).siblings().css('background', '#ccc');
		}, 1000);
	});
});
$(function() {
	var num = 1;
	clearInterval(timer4);
	var timer4 = setInterval(function() {

		if(num >= 5) {
			num = 0;
		};
		num += 1;
		$('#ht3 img').attr('src', 'img/main/lb3' + num + '.jpg');
		$('#ht3 li').eq(num - 1).css('background', '#FF6600');
		$('#ht3 li').eq(num - 1).siblings().css('background', '#ccc');
	}, 1000);
	timer4;
	$('#ht3 li').each(function(i) {
		$('#ht3 li').eq(i).mouseenter(function() {
			clearInterval(timer4);
			num = i;
			$(this).css('background', '#FF6600');
			$(this).siblings().css('background', '#ccc');
			$('#ht3 img').attr('src', 'img/main/lb3' + (num + 1) + '.jpg');
		});
	});
	$('#ht3').mouseleave(function() {
		clearInterval(timer4)
		timer4 = setInterval(function() {
			if(num >= 5) {
				num = 0;
			};
			num += 1;
			$('#ht3 img').attr('src', 'img/main/lb3' + num + '.jpg');
			$('#ht3 li').eq(num - 1).css('background', '#FF6600');
			$('#ht3 li').eq(num - 1).siblings().css('background', '#ccc');
		}, 1000);
	});
});
$(function() {
	var num = 1;
	clearInterval(timer5);
	var timer5 = setInterval(function() {

		if(num >= 4) {
			num = 0;
		};
		num += 1;
		$('#ht2 img').attr('src', 'img/main/lb4' + num + '.jpg');
		$('#ht2 li').eq(num - 1).css('background', '#FF6600');
		$('#ht2 li').eq(num - 1).siblings().css('background', '#ccc');
	}, 1000);
	timer5;
	$('#ht2 li').each(function(i) {
		$('#ht2 li').eq(i).mouseenter(function() {
			clearInterval(timer5);
			num = i;
			$(this).css('background', '#FF6600');
			$(this).siblings().css('background', '#ccc');
			$('#ht2 img').attr('src', 'img/main/lb4' + (num + 1) + '.jpg');
		});
	});
	$('#ht2').mouseleave(function() {
		clearInterval(timer5);
		timer5 = setInterval(function() {
			if(num >= 4) {
				num = 0;
			};
			num += 1;
			$('#ht2 img').attr('src', 'img/main/lb4' + num + '.jpg');
			$('#ht2 li').eq(num - 1).css('background', '#FF6600');
			$('#ht2 li').eq(num - 1).siblings().css('background', '#ccc');
		}, 1000);
	});
});
$(function() {
	var num = 1;
	clearInterval(timer6);
	var timer6 = setInterval(function() {

		if(num >= 2) {
			num = 0;
		};
		num += 1;
		$('#ht5 img').attr('src', 'img/main/lb5' + num + '.jpg');
		$('#ht5 li').eq(num - 1).css('background', '#FF6600');
		$('#ht5 li').eq(num - 1).siblings().css('background', '#ccc');
	}, 1000);
	timer6;
	$('#ht5 li').each(function(i) {
		$('#ht5 li').eq(i).mouseenter(function() {
			clearInterval(timer6);
			num = i;
			$(this).css('background', '#FF6600');
			$(this).siblings().css('background', '#ccc');
			$('#ht5 img').attr('src', 'img/main/lb5' + (num + 1) + '.jpg');
		});
	});
	$('#ht5').mouseleave(function() {
		clearInterval(timer6);
		timer6 = setInterval(function() {
			if(num >= 2) {
				num = 0;
			};
			num += 1;
			$('#ht5 img').attr('src', 'img/main/lb5' + num + '.jpg');
			$('#ht5 li').eq(num - 1).css('background', '#FF6600');
			$('#ht5 li').eq(num - 1).siblings().css('background', '#ccc');
		}, 1000);
	});
});
$(function(){ 
	$('#list li').each(function(i){
		$(this).mouseenter(function(){
			$('#form>div').eq(i).css('display' , 'block');
			$('#form>div').eq(i).siblings().css('display' , 'none');
		});
		$(this).mouseleave(function(){
			$('#form>div').eq(i).css('display' , 'none');
		});
	});
	$('#list').mouseleave(function(){
		$('#form>div').css('display' , 'none');
	});
	$('#form>div').mouseenter(function(){
		$('#form>div').css('display' , 'block');
	});
	$('#form>div').mouseleave(function(){
		$('#form>div').css('display' , 'none');
	});
});
//$(function(){
//	alert('苹果七手机处点击进入商品单页');
//})

$(function(){
	$.ajax({
		type:"get",
		url:"data/list.json",
		async:true,
		success:function(res){
			var str = '';
			for(var i = 0; i < res.length; i++) {
				str += '<div><img src=' + res[i].img + '/><p><a href="#">' + res[i].str + '</a></p><p>' + res[i].price + '</p></div>';
			};
			$('#count').html(str);
		}
	});
})



$(function() {
	$.ajax({
		type:"GET",
		url:"data/form.json",
		success:function( data ){
			
		}
	});
});












