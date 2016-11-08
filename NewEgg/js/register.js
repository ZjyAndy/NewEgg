var oText=document.getElementById("text");
var oPassOne=document.getElementById("passOne");
var oPassTwo=document.getElementById("passTwo");
var oEmail=document.getElementById("email");
var oPhone=document.getElementById("phone");
var checkNum=document.getElementById("checkNum");
var oNum=document.getElementById("num");
var oRefresh=document.getElementById("refresh");
var oRegister = document.getElementById("register");
oText.onblur=function(){
	var val=oText.value
	var reg=/^[1-9a-zA-Z][0-9a-zA-Z]{4,9}$/;
	if(reg.test(val)){
		nSibling(this,"none")
		oPassOne.disabled=false;
	}
	else{
		nSibling(this,"block")
		oPassOne.disabled=true;
		oText.value="";
	}
}
oPassOne.onblur=function(){
	var val=this.value;
	var reg=/^\w{5,10}$/;
	if(reg.test(val)){
		nSibling(this,"none")
		oPassTwo.disabled=false;
	}
	else{
		nSibling(this,"block")
		oPassTwo.disabled=true;
		this.value = ""
	}
}
oPassTwo.onblur=function(){
	var val=this.value;
	var reg=/^\w{5,10}$/;
	if(val==oPassOne.value){
		nSibling(this,"none")
		oPassTwo.disabled=false;
	}
	else{
		nSibling(this,"block");
		this.value = ""
	}
}
oEmail.onblur=function(){
	var val=this.value;
	var reg=/^\w+@[0-9a-zA-Z]{2,}\.(com|com.cn|cn|net)$/;
	if(reg.test(val)){
		nSibling(this,"none")
	}
	else{
		nSibling(this,"block");
		this.value = ""
	}
}
oPhone.onblur=function(){
	var val=this.value;
	var reg=/^[1][0-9]{10}$/;
	if(reg.test(val)){
		nSibling(this,"none")
	}
	else{
		nSibling(this,"block")
		this.value = ""
	}
}
var str=''
for (var i=0;i<4;i++) {
	var arr=[Math.floor(Math.random()*10+48),Math.floor(Math.random()*16+75),Math.floor(Math.random()*26+97)]
	var num=String.fromCharCode(arr[Math.floor(Math.random()*3)]);
	str+=num;
}
oNum.innerHTML=str;
oRefresh.onclick=function(){
	var str=''
	for (var i=0;i<4;i++) {
	var arr=[Math.floor(Math.random()*10+48),Math.floor(Math.random()*16+75),Math.floor(Math.random()*26+97)]
	var num=String.fromCharCode(arr[Math.floor(Math.random()*3)]);
	str+=num;
	}
	oNum.innerHTML=str;
}

checkNum.onblur=function(){
	if(oNum.innerHTML==this.value){
		nSibling(this,'none');
	}
	else{
		nSibling(this,'block');
		this.value = ""
	}
}
function nSibling(obj,dp){
	if(obj.nextElementSibling){
		obj.nextElementSibling.style.display=dp;
	}else{
		obj.nextSibling.style.display=dp;
	}
}
function setCookie(data,val){
	var gArr=getCookie("register");
	console.log(gArr+1)
	for (var i=0;i<gArr.length;i++) {
		console.log(gArr[i]["name"]+";"+val["name"])
		if(gArr[i]["name"]==val["name"]){
			alert("你的用户名重复，请更换用户名");
			return false;
		}
	}
	gArr.push(val);
	var strArr =JSON.stringify(gArr)
	var oDate = new Date();
	oDate.setDate(oDate.getDate()+100);
	document.cookie =data+'='+strArr +';expires='+oDate;
	return true;
}
function getCookie(name){
	if(document.cookie){
		var cks = document.cookie.replace(/;\s/g,";");
		var reg = new RegExp('(;|^)'+name+'=([^;].*?)(;|$)');
		console.log(document.cookie);
		var result = cks.match(reg);
		if(!result){
			result = []
			return result;
		}else{
			result = result[2];
		}
		console.log(result+"result")
		console.log(typeof result+"result")
		var arr = result.split('=')
		console.log(arr+"arr")
		console.log(typeof arr+"arr")
		var str = arr[0];
		console.log(str+"str")
		console.log(typeof str+"str")
		var str2=JSON.parse(str);
		console.log(str2)
		return str2;
	}else{
		var a=[];
		return a;
	}
}
oRegister.onclick = function(){
	if(oText.value&&oPassOne.value&&oPassTwo.value&&oEmail.value&&oPhone.value&&checkNum.value){
		var josn = {};
		josn["name"] =oText.value;
		josn["pass"] =oPassOne.value;
		josn["email"] =oEmail.value;
		josn["phone"] =oPhone.value;
		var bool = setCookie("register",josn);
		if(bool){
			open("logIn.html")
		}
	}
}





























