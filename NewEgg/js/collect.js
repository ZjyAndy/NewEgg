$(function(){
	var cars = getcookie("cars");
	cars = JSON.parse(cars)
	var str = "";
	$.get("data/carousel.json",function(d){
		for (var key in cars) {
			var sortId = cars[key]["sortid"];
			var itemId = cars[key]["itemid"];
			var count = cars[key]["count"];
			var json = d;
			var detailJson = json[sortId]["childs"][itemId];		
			var price = detailJson["price"];
			var src = detailJson["src"];
			var information = detailJson["information"];
			str+='<div data-itemid="'+itemId+'"><img class="img" src="'+src+'"/><p><a>'+information+'</a></p><span>好评度</span><img src="img/main/hp5.png"/><br /><span>新蛋价</span><span>' +price+ '</span><br /><span class="remo">取消收藏</span></div>';
			
			$("#collect").html(str);
		}
		//点击删除
		del();
	})
})
//点击删除
function del(){
	$(".remo").click(function(){
//		console.log($tr.data("sortid")+"parent");
		if(confirm("是否取消收藏")){
			//找的是最外的父元素的tr  即17行的
			var $tr = $(this).parent();
			$tr.remove();
			removeCar($tr);
		}
	})
}
