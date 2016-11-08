function getcookie(name){
	//把分号后面的空格去掉
	var cks = document.cookie.replace(/;\s/g,";");
	var reg = new RegExp('(;|^)'+name+'=([^;].*?)(;|$)');
	var result = cks.match(reg);
	if(!result){
		result = ""
	}else{
		result = result[2];
	}
	return result;
}
function setcookie(name,value,time,domain,path){
	//如果 name 空，就不执行后面的逻辑
	if(!name){
		return false;
	}
	//如果 value 为空，就设置为一个空字符串
	value || (value = "");
	
	var cks = name + "=" + value;
	
	if(time){
		time = new Date(new Date().getTime() + 1000 * time);
		//cookie 中设置时间，需要将时间对象转换为字符串
		cks += ";expires=" + time.toGMTString();
	}
	
	//设置 域名
	if(domain){
		cks += ";domain=" + domain;
	}
	//如果 path 为空 默认 根
	if(!path){
		//将 cookie 的权限设置为所有页面可访问
		path = "/"; 
	}
	cks += ";path="+path;
	document.cookie = cks;
}


function addCar(shopInfo){
	var cars = getcookie("cars"); //获取 cookie 中的商品 通过 cars 键值获取 购物车商品信息
	//如果cookie中没有购物车商品信息
	if(cars==""){
		cars = {}; //动态创建一个对象
	}else{
		//将购物车商品信息转换为对象
		cars = JSON.parse(cars);
	}
	//判断 cars 中是否有这个商品
	if(cars[shopInfo.itemid]){
		//将以前的商品数量 加上新购买的商品数量
		cars[shopInfo.itemid].count +=  shopInfo.count;
	}
	else{
		//将新购买的商品添加到对象中
		cars[shopInfo.itemid] = shopInfo;
	}
	//将对象转换为字符串
	//将字符串保存到 cookie中
	setcookie("cars",JSON.stringify(cars));
}
function removeCar(itemId){
	var cars = getcookie("cars"); //获取 cookie 中的商品 通过 cars 键值获取 购物车商品信息
	//将对象转换为字符串
	cars = JSON.parse(cars);
	//删除itemId商品信息
	delete cars[itemId];
	setcookie("cars",JSON.stringify(cars));
}
