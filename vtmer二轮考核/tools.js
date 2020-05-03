// 动画函数封装 obj:对象；attr：要执行动画的样式；
// target：执行动画的目标位置；speed：移动的速度；callback：回调函数
function move(obj,attr,target,speed,callback){
    // 清除之前的定时器
    clearInterval(obj.timer);
    // 获取元素当前的位置
    var current = parseInt(getStyle(obj,attr));
    //判断速度的正负
    if(current > target){
        //此时速度为负值
        speed = -speed;
    }
     obj.timer = setInterval(function(){
			//取出有效数字，去除px
         var oldValue = parseInt(getStyle(obj,attr));
         var newValue = oldValue + speed;
         //判断是否到达target
         if((speed < 0 && newValue < target)||(speed > 0 && newValue > target)){
             newValue = target;
         }
         obj.style[attr] = newValue + "px";
        if(newValue == target){
            //停止定时器
            clearInterval(obj.timer);
            //动画执行完毕，调用回调函数
            if(callback){
                callback();
            }
        }
    },30);
}
//定义一个函数，用来获取指定元素当前的样式
//参数 obj:要获取样式的元素，name：要获取的样式名
function getStyle(obj,name){
    if(window.getComputedStyle){
        return getComputedStyle(obj,null)[name];
    }else{
        //兼容IE8
        return obj.currentStyle[name];
    }
} 

//定义一个函数，用来向一个元素中添加指定的class属性值
//参数：obj 要添加class属性的元素 cn 要添加的class值
function addClass(obj,cn){
	//检查obj是否含有cn
	if(!hasClass(obj,cn)){
		obj.className += " "+cn;
	}
}
//判断一个函数是否含有指定的class属性值
function hasClass(obj,cn){
	//创建一个正则表达式
	var reg = new RegExp("\\b"+cn+"\\b");
	return reg.test(obj.className);
}
//定义一个函数，用来删除一个元素中的指定的class属性
function removeClass(obj,cn){
	//创建一个正则表达式
	var reg = new RegExp("\\b"+cn+"\\b");
	//删除class
	obj.className = obj.className.replace(reg,"");
}
//定义一个函数，用来切换一个元素中的指定的class属性
function toggleClass(obj,cn){
	if(hasClass(obj,cn)){
		//有，删除
		removeClass(obj,cn);
	}else{
		//没有，添加
		addClass(obj,cn);
	}
}

//创建一个函数，用于对象聚焦时提示文字消失
function textChange(obj){
	var text = obj.placeholder;
	obj.addEventListener('click',function(){
		obj.placeholder = " ";
	})
	obj.addEventListener('blur',function(){
		obj.placeholder = text;
	})
}