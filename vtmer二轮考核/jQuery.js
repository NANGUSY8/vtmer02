 $(document).ready(function () {
 	$.ajax({
 		url: 'http://vtmer.cn/class',
 		type: 'get',
 		dataType: 'json'
 	}).done(function (data, status, xhr) {
 		// console.log(data);
 		// var d = data.bookclass[1].bookInfo[1].title;
 		// $(".book-name:eq(0)").text("d");
 		// var data = data.bookclass[1].bookInfo[1].title;
 		// alert(data);
 		// var data = data;

 		for (var i = 0; i < 4; i++) {
 			for (var j = 0; j < data.bookclass[i].bookInfo.length; j++) {


 				//书名
 				$(".title").eq(j).text(data.bookclass[i].bookInfo[j].title);
 				//作者
 				$(".writer").eq(j).text(data.bookclass[i].bookInfo[j].author);
 				// 出版社
 				$(".publish").eq(j).text(data.bookclass[i].bookInfo[j].publish);
 				// 出版时间
 				$(".publishDate").eq(j).text(data.bookclass[i].bookInfo[j].publishDate);
 				// 图书馆详情
 				// 数目
 				$(".total").eq(j).text(data.bookclass[i].bookInfo[j].library[0].total + "本");
 				// 位置
 				$(".position").eq(j).text(data.bookclass[i].bookInfo[j].library[0].position);
 				// 书本封面链接
 				$(".cover-img").eq(j).attr("src", data.bookclass[i].bookInfo[j].cover);
 				// 作者介绍
 				$(".ahthorIntro").eq(j).text(data.bookclass[i].bookInfo[j].ahthorIntro);
 				// 书本介绍
 				$(".bookIntro").eq(j).text(data.bookclass[i].bookInfo[j].bookIntro);
 				// 书本链接
 				$(".doubanUrl").eq(j).attr("href", data.bookclass[i].bookInfo[j].bookUrl[0].doubanUrl);
 				$(".zhihuUrl").eq(j).attr("href", data.bookclass[i].bookInfo[j].bookUrl[0].zhihuUrl);
 				// 书本购买链接
 				$(".jDUrl").eq(j).attr("href", data.bookclass[i].bookInfo[j].buyUrl[0].jDUrl);
 				$(".DangUrl").eq(j).attr("href", data.bookclass[i].bookInfo[j].buyUrl[0].DangUrl);
 				$(".AmazonUrl").eq(j).attr("href", data.bookclass[i].bookInfo[j].buyUrl[0].AmazonUrl);
 				//评分
 				var score = data.bookclass[i].bookInfo[j].score;
 				for (var a = 0; a < 5; a++) {
 					if (a < score) {
 						$(".star-list").eq(j).find("img").eq(a).attr("src", "../vtmer-img/_star-black.png");
 					} else {
 						$(".star-list").eq(j).find("img").eq(a).attr("src", "../vtmer-img/_star-white.png");
 					}
 				}
 			}
 		}
 		// 加载更多
 		// var div = document.querySelector(".book-list-wrapper");
 		// $(".loading a").click(function(){
 		// // 	// var f = document.createElement('div');
 		// // 	// $(f).html(($(".book-list-wrapper").html()));
 		// // 	$(".loading a").hide();
 		// 	$(".book-list-wrapper").append(($(".book-list-wrapper").html()));
 		// 	$(".loading a").show();
 		// $(".body-wrapper").append(($(".loading").html()));
 		// $(".loading a").hide();
 		// $(".loading a").show();
 		// })

 		$(".login-btn").on("click", function () {

 			$.ajax({
 				type: "post",
 				url: "http://vtmer.cn/login",
 				dataType: "json",
 				data: $('#form-login').serialize(),
 				success: function (data) {
 					var result = data.result;
 					//用户名和密码校验错误
 					if (result == "0") {

 					}
 				},
 				error: function () {
 					alert("请求失败！");
 				}
 			});
 			// }
 		})
 	})

 	//点击分类链接页面局部刷新
 	// $(".menu-list a").click(function(){


 	// })

 	// $(function() {
 	//   $(".login-btn").click(function(){ 
 	//     var data = new FormData($("#form-login")[0]);
 	//     $.ajax({
 	//       type: 'post',
 	//       dataType: 'json',
 	//       processData: false, // 告诉jquery不要处理数据
 	//       contentType: false, // 告诉jquery不要设置contentType
 	//       data: data,
 	//       url: 'http://vtmer.cn/login',
 	//       success: function(json, textStatus, xhr) {
 	//         //.....省略...
 	//       },
 	//       error: function(xhr, textStatus, errorThrown) {
 	// }action="../searchpage/searchPage.html"
 	//     })
 	// $(".search-icon").click(function(){
 	// 	//将搜索的内容返回到搜索banner中
 	// 	$(".search-content").text(($(".searchInput").val()));
 	// })


 })

 // });
 // })