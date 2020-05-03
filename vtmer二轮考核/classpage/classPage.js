

window.addEventListener('load', function() {
	//搜索框聚焦提示文字消失,失焦时文字显示
	var searchInput = document.querySelector(".searchInput");
	textChange(searchInput);

	// 获取元素
	var focus = document.querySelector('.focus');
	var ul = focus.querySelector('.focus-list');
	var ol = focus.querySelector('.circle');
	//默认显示轮播的索引
	var index = 0;

	// 动态生成小圆圈
	for (var i = 0; i < ul.children.length; i++) {
		// 创建li
		var li = document.createElement('li');
		//给小圆圈设置一个num属性
		li.num = i;

		//将li插入到ol里面
		ol.appendChild(li);

		// 设置focusList的总体宽度
		var focusList = document.querySelector('.focus-list');
		var liArr = focusList.getElementsByTagName("li");
		focusList.style.width = 1520 * (ul.children.length + 1) + "px";
		//设置小圆圈居中
		ol.style.left = (1520 - ol.offsetWidth) / 2 + "px";

		//为ol里面的第一个li设置背景颜色
		ol.children[index].style.backgroundColor = "#D9D2CF";

		// 绑定鼠标移入事件
		li.addEventListener('mouseenter', function() {

			//关闭自动切换的定时器
			clearInterval(timer);
			//记录当前的索引
			index = this.num;
			//调用函数，改变当前小圆圈的背景颜色
			setCircle();
			//调用函数，实现动画效果
			move(ul, "left", -1520 * index, 30, function() {
				//动画执行完毕，开启自动切换
				autoChange();
			});
		})
	}



	//开启自动切换图片
	autoChange();

	//创建一个方法，设置小圆圈
	function setCircle() {
		for (var i = 0; i < ol.children.length; i++) {
			//将小圆圈设置为默认颜色
			ol.children[i].style.backgroundColor = "#4D4947";
			// ol.children[i].className = '';
		}
		//改变当前小圆圈的颜色
		ol.children[index].style.backgroundColor = "#D9D2CF";

	}
	//定义一个自动切换的标识
	var timer;
	//克隆第一个轮播图的li放到ul后面
	var first = ul.children[0].cloneNode(true);
	ul.appendChild(first);
	//创建一个函数，用来开启自动轮播
	function autoChange() {
		
		//开启定时器，用来定时切换轮播
		timer = setInterval(function() {
			//索引自增
			index++;
			//判断当前索引是否为最后一张
			if (index >= ul.children.length) {
				index = 0;
				//将最后一张切换成第一张
				focusList.style.left = 0;
			}
			move(ul, "left", -1520 * index, 30, function() {
				//修改小圆圈的背景颜色
				if (index < ul.children.length-1 ) {
					setCircle();
				}
			});
		}, 2500);
	}
	// 为鼠标点击分类列表绑定事件
	var aArr = document.querySelectorAll(".menu-list a");
	for(var i = 0; i < aArr.length; i++){
		aArr[i].onclick = function(){
			// var currenta = this.index;
			for(var j = 0;j<aArr.length;j++){
				aArr[j].id = "";
			}
			
			this.id = "current-color";
		};
	}
	//获取元素
	var coverImg = document.querySelectorAll(".cover-img");
	var detailsWrapper = document.querySelector(".details-wrapper");
	var bgColor = document.querySelector('.bgcolor');
	var detailsClose = document.getElementById("details-close");
	//为鼠标点击书的图片绑定事件
	for (var i = 0; i < coverImg.length; i++) {
		coverImg[i].addEventListener('click', function() {
			//显示详情页和遮罩层
			bgColor.style.display = "block";
			// detailsWrapper.style.display = "block";
			 detailsWrapper.className = "change";
			
		})
	}

	//为鼠标点击关闭按钮绑定事件
	detailsClose.addEventListener('click', function() {
		//关闭详情页和遮罩层
		bgColor.style.display = "none";
		// detailsWrapper.className = "details-wrapper";
	})
	$(".search-icon").click(function(){
		//将搜索的内容返回到搜索banner中
		 document.location.href ='../searchpage/searchPage.html?mydata1=' + $(".searchInput").val(); 
		// $(".search-bar").attr("action","../searchpage/searchPage.html");
		// $(".search-content").text(($(".searchInput").val()));
	})
})
