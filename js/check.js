function checkTel(){
	var tel=$('[name="tel"]').val();
	if(/^1[3|4|5|7|8]\d{9}$/.test(tel)){
		$('.res-tel img').attr('src','images/info_03.png');
		$('.res-tel span').html('');
		$('.res-tel').show();
	}else{
		$('.res-tel img').attr('src','images/info_05.png');
		$('.res-tel span').html('手机号格式错误');
		$('.res-tel').show();
	}
}
function checkName(){
	var name=$('[name="username"]').val();
	if(name.length>=6&&name.length<=16){
		$('.res-name img').attr('src','images/info_03.png');
		$('.res-name span').html('');
		$('.res-name').show();
	}else{
		$('.res-name img').attr('src','images/info_05.png');
		$('.res-name span').html('用户名长度为6~16');
		$('.res-name').show();
	}
}
function checkPass(){
	var pass=$('[name="userpass"]').val();
	if(pass.length>=6&&pass.length<=16){
		$('.res-pass img').attr('src','images/info_03.png');
		$('.res-pass span').html('');
		$('.res-pass').show();
	}else{
		$('.res-pass img').attr('src','images/info_05.png');
		$('.res-pass span').html('密码长度为6~16');
		$('.res-pass').show();
	}
}
function checkAgain(){
	var pass=$('[name="userpass"]').val();
	var again=$('[name="againpass"]').val();
	if(pass==again){
		$('.res-again img').attr('src','images/info_03.png');
		$('.res-again span').html('');
		$('.res-again').show();
	}else{
		$('.res-again img').attr('src','images/info_05.png');
		$('.res-again span').html('密码输入不一致');
		$('.res-again').show();
	}
}
function checkTrueName(){
	var name=$('[name="name"]').val();
	if(/^[\u4e00-\u9fa5]{0,}$/.test(name)&&name.length>=2){
		$('.res-trueName img').attr('src','images/info_03.png');
		$('.res-trueName span').html('');
		$('.res-trueName').show();
	}else{
		$('.res-trueName img').attr('src','images/info_05.png');
		$('.res-trueName span').html('姓名必须为汉字,并不少于2个字');
		$('.res-trueName').show();
	}
}
function checkCompany(){
	var company=$('[name="company"]').val();
	if(/^[\u4e00-\u9fa5]{0,}$/.test(company)&&company.length>=4){
		$('.res-company img').attr('src','images/info_03.png');
		$('.res-company span').html('');
		$('.res-company').show();
	}else{
		$('.res-company img').attr('src','images/info_05.png');
		$('.res-company span').html('公司名必须为汉字，并不少于4个字');
		$('.res-company').show();
	}
}