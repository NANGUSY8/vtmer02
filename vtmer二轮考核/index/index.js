window.addEventListener('load',function(){
	//获取登录图标
	var loginIcon = document.querySelector(".login-icon");
	//获取表单
	var formWrapper = document.querySelector(".form-wrapper");
	//获取关闭按钮
	var closeBtn = document.getElementById("close-btn");
	
	//为鼠标点击登录图标绑定事件
	loginIcon.addEventListener('click',function(){
		//显示表单
		formWrapper.style.display = "block";
	})
	
	//为鼠标点击关闭按钮绑定事件
	closeBtn.addEventListener('click',function(){
		//取消提示文字
		tipText.style.display = 'none';
		//关闭表单
		formWrapper.style.display = "none";
	})
	
	//输入框聚焦提示文字消失
	var input = document.querySelectorAll('.input');
	    for(var i = 0;i < input.length;i++)
		{
			textChange(input[i]);
		}
		
	//搜索框聚焦提示文字消失
	var searchInput = document.querySelector(".searchInput");
	    textChange(searchInput);
		
	//获取元素
	var loginBtn = document.querySelector(".login-btn");
	var loginForm = document.getElementsByName("loginForm");
	var tipText = document.getElementById("tip-text");
	var userName = document.querySelector(".userName");
	var username = document.getElementsByName("name");
	var password = document.getElementsByName("password");
	var formLogin = document.getElementById("form-login");
	var circleArr = document.querySelectorAll(".loading-circle>li");
	//为鼠标点击登录按钮绑定事件
		
		 loginBtn.addEventListener('click',function(){
	     var result = checkLogin();
	     if(result){
			loginIcon.style.display = "none";
			userName.style.display = "block";
			formWrapper.style.display = "none";
			// 显示loading画面，有bug：小圆圈不能自动切换颜色
			document.querySelector(".loading-login").style.display="block";
			var changeColor = setInterval(function(){
			for(var i = 0;i < circleArr.length;i++){
				circleArr.num = i;
				
				for(var j = 0;j < circleArr.length;j++){
					if(i==j){
						circleArr[i].style.backgroundColor="#555555";
					}else{
						circleArr[j].style.backgroundColor="white";
					}
				}
				}
			},20)	
			//关闭loading画面，显示用户名
			setTimeout(function(){
				clearInterval(changeColor);
				document.querySelector(".loading-login").style.display="none";
				userName.innerHTML = username[0].value;
				},2000);
			
		}
		 
	})
		
	//检查用户输入
	function checkLogin(){
	 if(checkUsername() && checkPassword()){
	   tipText.style.display = 'none';
	   return true;
	  }else{  
	   return false;
	}
	}
	//
	//检查登录用户名
	function checkUsername(){
		var regName = /^[A-z]{0,}$/;
	 if(regName.test(username[0].value)){
	  return true;
	 }else if(username[0].value.length == 0){
		tipText.style.display = 'block';
		return false;
	 }else{
		 tipText.innerHTML="&nbsp;&nbsp; &nbsp; 用户名错误";
		 tipText.style.display = 'block';
	 }
	}
	//检查登录密码
	function checkPassword(){
	var regWord = /^\d{6,10}$/; 
	 if(regWord.test(password[0].value)){
	  return true;
	 }else if(password[0].value.length == 0){
	  tipText.style.display = 'block';
	  return false;
	 }else{
		 tipText.innerHTML=" &nbsp;&nbsp; &nbsp; 密码错误";
		 tipText.style.display = 'block';
	 }
	}

})
