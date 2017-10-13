$(function() {
//	客服聊天
	$('.start-chat').click(function(){
		$('.start-chat-box').show();
	})
	$('.close-chat').click(function(){
		$('.start-chat-box').hide();
	})
	$('.chat-write textarea').val('');
	//添加表情
	var expression='';
	for(var i=0;i<99;i++){
		expression+='<li><img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/'+i+'.gif"/></li>';
	}
	$('.expression').append(expression);
	var express=false;
	$('.open-expression').click(function(){
		if(!express){
			$('.expression').show();
			express=true;
		}else{
			$('.expression').hide();
			express=false;
		}
	})
	$('.expression li').click(function(){
		console.log('选择的表情是：'+$(this).index());
		$('.expression').hide();
		express=false;
		$('.chat-write textarea').val($('.chat-write textarea').val()+'【'+$(this).index()+'】');
		$('.chat-write textarea').focus();
	})
	//当前时间
	function nowTime(){
		var time=new Date();
	    return time.getFullYear()+'-'+bu(time.getMonth()+1)+'-'+bu(time.getDate())+' '+bu(time.getHours())+':'+bu(time.getMinutes());
	}
	
//	添加图片
	$("#picture").change(function() {
		var objUrl = getObjectURL(this.files[0]);
		if(objUrl) {
			$("#img0").attr("src", objUrl);
			var imgStr='<img src="'+objUrl+'" style="max-width: 100%;background:#fff;"/>';
			console.log(imgStr);
			
			var content='';
			content+='<li class="clear"></li>';
			content+='<li class="chat-me">';
			content+='<p><span>'+nowTime()+'</span></p>';
			content+='<div>'+imgStr+'</div>';
			content+='</li>';
			$('.chat-content ul').append(content);
			//滚动条
			$('.chat-content').scrollTop($('.chat-content section').height());
			//向后台发送ajax数据
			
			
			
			
			
			
			
			
			
			
			
			
			
			
		}
	});
	function getObjectURL(file) {
		var url = null;
		if(window.createObjectURL != undefined) {  
			url = window.createObjectURL(file);
		} else if(window.URL != undefined) { 
			url = window.URL.createObjectURL(file);
		} else if(window.webkitURL != undefined) { 
			url = window.webkitURL.createObjectURL(file);
		}
		return url;
	}
	//发送
	function bu(s){
		return s < 10 ? '0' + s: s;
	}
	$('.chat-write textarea').keyup(function(e){
		if(e.keyCode==13){
			var val=$(this).val()
			$('.chat-write textarea').val('');
			console.log(val);
			var valStr=val.replace(/【/g,'<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/');
			valStr=valStr.replace(/】/g,'.gif"/>');
			console.log(valStr);
			var content='';
			content+='<li class="clear"></li>';
			content+='<li class="chat-me">';
			content+='<p><span>'+nowTime()+'</span></p>';
			content+='<div>'+valStr+'</div>';
			content+='</li>';
			$('.chat-content ul').append(content);
			//滚动条
			$('.chat-content').scrollTop($('.chat-content section').height());
			//向后台发送ajax数据
			
			
			
			
			
			
			
			
			
			
			
			
			
		}
	})
	//定时接受数据
	setInterval(function(){
		//5秒发送一次ajax请求一次
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	},5000);
	//评分
	$('.satisfy li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.satisfy button').removeAttr('disabled');
		$('.satisfy button').css({'background':'#51a1fd','color':'#fff'});
	})
	$('.satisfy button').click(function(){
		$('.satisfy').hide();
	})
	var starArr=['','非常差','不满意','一般','满意','非常满意'];
	$('.star li').click(function(){
		var index=$(this).index()+1;
		$('.star p').html(starArr[index]);
		$('.star ul').css('background','url(images/star'+index+'.png)');
		$('.star button').removeAttr('disabled');
		$('.star button').css({'background':'#51a1fd','color':'#fff'});
	})
	$('.star button').click(function(){
		$('.star').hide();
	})
})