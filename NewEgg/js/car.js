$(function(){
	var cars = getcookie("cars");
	cars = JSON.parse(cars)
	var str = "";
	$.get("data/carousel.json",function(d){
		for (var key in cars) {
			console.log(cars +'cars')
			var sortId = cars[key]["sortid"];
			console.log(cars[key]["sortid"] +"lbll")
			var itemId = cars[key]["itemid"];
			var count = cars[key]["count"];
			var json = d;
			var detailJson = json[sortId]["childs"][itemId];
//			var detailJson = json[sortId+""]["childs"][itemId+""];			
			var price = detailJson["price"];
			var src = detailJson["src"];
			var information = detailJson["information"];
//			console.log(price+"price"+src+"src"+information);
			str+='<tr data-sortid="'+sortId+'" data-itemid="'+itemId+'" data-count="'+count+'">'+
				'<td width="70" height="32" class="cent tabtb">'+
				'<input type="checkbox" name="" class="sortcheck" value="" /></td><td class="tabtb"><table><tr>'+
				'<td width="80"><a href="javascript:;"><img src="'+src+'"/></a></td><td>'+
				'<div class="information"><a href="javascript:;">'+information+'</a></div></td></tr></table>'+
				'</td><td align="center" width="100" class="tabtb unitprice">'+price+'</td>'+
				'<td align="center" width="70" class="tabtb"><input type="" name="" id="" value="'+count+'" class="num" disabled="disabled"/>'+
				'<span class="spancs"><span class="span ics upCount" data-number="1">+</span><span class="span des upCount" data-number="-1">-</span></span></td>'+
				'<td align="center" width="96" class="smalladd tabtb"><span>¥</span><span class="money" data-price="'+price+'">'+((count*price)*100/100).toFixed(2)+'</span>'+
				'</td><td align="center" width="80" class="tabtb"><div class="remo">删除</div></td></tr>';
			
//				$(".tabappend").html(str);
			var str1 = '<tr class="tabbb"><td width="60" height="32">'+
			'<input type="checkbox" name="" id="allcheck" value="" class="margl"/>'+
			'全选</td><td>商品名称</td><td align="center" width="100">单价</td>'+
			'<td align="center" width="70">数量</td><td align="center" width="96">小计</td>'+
			'<td align="center" width="80">操作</td></tr>';
			$(".tabappend").html(str1+str);
		}
		//数量加减
		changeNum();
		//点击删除
		del();
		//复选框选中
		check();
	})
	
})
//复选框选中
function check(){
	$("#allcheck").prop('checked',true);
	$(".sortcheck").prop('checked',true);
//	console.log($(".sortcheck").prop('checked',true).size())
	var $allmoney = $("#allmoney");
	cNum();
	$("#allcheck").change(function(){
		if($("#allcheck").prop("checked")){
			$(".sortcheck").prop('checked',true)
		}else{
			$(".sortcheck").prop('checked',false)
		}
		cNum();
	})
	$(".sortcheck").change(function(){
		if(!$(".sortcheck").prop("checked")){
			$("#allcheck").prop("checked",false)
		}
		cNum();
	})
	
}
function cNum(){
	var num=0;
	for (var i=0;i<$(".sortcheck").size();i++) {
		if($(".sortcheck").eq(i).prop("checked")){
			num+=parseFloat($(".num").eq(i).val())*parseFloat($(".unitprice").eq(i).html())
		}
	}
	//toFixed四舍五入保留两位小数
	$("#allmoney").html(num.toFixed(2));
}
//数量加减
function changeNum(){
	//找的是最外的父元素的tr  即17行的
//	console.log($(".upCount").parent().parent().parent().data("sortid")+"parent");
	$(".upCount").click(function(){
		//找的是最外的父元素的tr  即17行的
		var $tr = $(this).parent().parent().parent();
		//加一或者减一
		var $dnum =  $(this).data("number");
		var $dcount = $tr.data("count");
		var $price = $tr.find(".money").data("price");
		$dcount = $dcount+$dnum;
		if($dcount<1){
			if(confirm("是否确认删除")){
				//找的是最外的父元素的tr  即17行的
				var itemId = $tr.data("itemid");
				$tr.remove();
				removeCar(itemId);
				open("car.html","_self");
				return;
			}else{
				$dcount=1;
				removeCar(itemId);
				$tr.data("count",$dcount);
				$tr.find(".num").val($dcount);
				$tr.find(".money").html(($dcount*$price).toFixed(2));
				var shopInfo = JSON.parse(JSON.stringify($tr.data()));
				shopInfo.count = 0;
				addCar(shopInfo);
				return;
			}
		}
		console.log($dcount+"$dcount")
		$tr.data("count",$dcount);
		$tr.find(".num").val($dcount);
		$tr.find(".money").html(($dcount*$price).toFixed(2));
		//再一次把修改过的car  存到cookie 里
		var shopInfo = JSON.parse(JSON.stringify($tr.data()));
		shopInfo.count = $dnum;
		addCar(shopInfo);
//		console.log($dcount+"parent")
		cNum();
	})
	
}

//点击删除
function del(){
	$(".remo").click(function(){
//		console.log($tr.data("sortid")+"parent");
		if(confirm("是否确认删除")){
			//找的是最外的父元素的tr  即17行的
			var $tr = $(this).parent().parent();
			var itemId = $tr.data("itemid");
			$tr.remove();
			removeCar(itemId);
			open("car.html","_self");
		}
	})
}
