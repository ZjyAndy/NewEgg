$(function(){
	$.get("data/carousel.json",function(data){
		var main = "";
		for (var key in data) {
			main = "";
			
			var children = data[key].childs
			for (var k in children) {
				main += '<dl data-itemid="'+k+'" data-sortid="'+key+'"><dt><a href="###"><img src="'+children[k]["src"]+'"/></a></dt>'+
				'<dd class="pdinfo">'+
				'<p class="info"><a href="detail.html?itemId='+k+'&sortId='+key+'" target="_blank">'+children[k].information+'</a></p>'+
				'<p class="prom"></p><p class="extraIcon"></p></dd>'+
				'<dd class="price"><strong><span id="">¥'+children[k].price+'</span></strong></dd>'+
				'<dd class="collect"><a href="javascript:;">收藏</a></dd>'+
				'<dd class="rightNow"><a href="javascript:;">立即抢购</a></dd></dl>'
			};
			$(".floor"+key+" .main").html(main)
		};
		$(".main dl").on("click",".collect",function(){
			var shopInfo = $(this).parent().data();
			shopInfo.count = 1;
			addCar(shopInfo);
			open("collect.html");
		}); 
		$(".main dl").on("click",".rightNow",function(){
			var shopInfo = $(this).parent().data();
			shopInfo.count = 1;
			addCar(shopInfo);
			open("car.html");
		});                            
	});
});
$(function(){
	$('#fw1').mouseover(function(){
		$('#fw').css('display' , 'block');
	});
	$('#fw1').mouseout(function(){
		$('#fw').css('display' , 'none');
	});
	$('#fw').mouseover(function(){
		$('#fw').css('display' , 'block');
	});
	$('#fw').mouseout(function(){
		$('#fw').css('display' , 'none');
	});
	$('#myd1').mouseover(function(){
		$('#myd').css('display' , 'block');
	});
	$('#myd1').mouseout(function(){
		$('#myd').css('display' , 'none');
	});
	$('#myd').mouseover(function(){
		$('#myd').css('display' , 'block');
	});
	$('#myd').mouseout(function(){
		$('#myd').css('display' , 'none');
	});
})

$(function(){
	var oLi = $('#tz').find('li');
	for ( var i = 0; i < oLi.length ; i++ ) {
		$(oLi).hover(function(){
			$(this).fadeIn(2000,function(){
				$(this).css('background' ,'#295DD7');
			});
		} , function(){
			$(this).fadeIn(2000,function(){
				$(this).css('background' ,'#10286c');
			});
		});
	};
})