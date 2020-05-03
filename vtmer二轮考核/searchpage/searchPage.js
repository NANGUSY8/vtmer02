window.addEventListener('load',function(){
	//获取元素
	var searchInput = document.querySelector(".searchInput");
	var navClass = document.querySelector('.nav-class');
	var navClassList = document.querySelector('.nav-class-list');
	var Lilist = navClassList.getElementsByTagName('li');
	
	//搜索框聚焦提示文字消失,失焦时文字显示
	textChange(searchInput);
	
	//绑定鼠标移入事件
	navClass.addEventListener('mouseenter',function(){
		//下拉列表
		move(navClassList,"height",120,10);
		
	})
	navClassList.addEventListener('mouseenter',function(){
		//关闭之前的定时器
		clearInterval(navClassList.timer);
	})
	
	//绑定鼠标移出事件
	navClass.addEventListener('mouseleave',function(){
		//上拉列表
		move(navClassList,"height",0,10);
	})	
	navClassList.addEventListener('mouseleave',function(){
		//上拉列表
		move(navClassList,"height",0,10);
	})
	
	
	
	
})