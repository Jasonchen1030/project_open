$(function(){
	//首页banner切换
	var len = $(".banner-change li").length;
	var i = 0;
	var autoPlay = setInterval(function(){
		$(".banner-change li").eq(i).fadeOut(1500);
		$(".banner-nav li").eq(i).removeClass('active');
		i++;
		if(i==len){
			i = 0;
			$(".banner-change li").eq(i).fadeIn(1500);
			$(".banner-nav li").eq(i).addClass('active');
		}else{
			$(".banner-change li").eq(i).fadeIn(1500);
			$(".banner-nav li").eq(i).addClass('active');
		}
	},5000);
	// 再次启动定时器
	function autoPlayAgain(){
			autoPlay = setInterval(function(){
			$(".banner-change li").eq(i).fadeOut(1500);
			$(".banner-nav li").eq(i).removeClass('active');
			i++;
			if(i==len){
				i = 0;
				$(".banner-change li").eq(i).fadeIn(1500);
				$(".banner-nav li").eq(i).addClass('active');
			}else{
				$(".banner-change li").eq(i).fadeIn(1500);
				$(".banner-nav li").eq(i).addClass('active');
			}
		},3000);
	}
	$(".banner").hover(function(){
		//鼠标悬停清除定时器
		clearInterval(autoPlay);
	},function(){
		//鼠标移开再次启动定时器
		autoPlayAgain();
	});
	// 上一页
	$(".prev").click(function(){
		$(".banner-change li").eq(i).fadeOut();
		$(".banner-nav li").eq(i).removeClass('active');
		i--;
		if(i<0){
			i = len-1;
			$(".banner-change li").eq(i).fadeIn();
			$(".banner-nav li").eq(i).addClass('active');
		}else{
			$(".banner-change li").eq(i).fadeIn();
			$(".banner-nav li").eq(i).addClass('active');
		}
	});
	// 下一页
	$(".next").click(function(){
		$(".banner-change li").eq(i).fadeOut();
		$(".banner-nav li").eq(i).removeClass('active');
		i++;
		if(i == len){
			i = 0;
			$(".banner-change li").eq(i).fadeIn();
			$(".banner-nav li").eq(i).addClass('active');
		}else{
			$(".banner-change li").eq(i).fadeIn();
			$(".banner-nav li").eq(i).addClass('active');
		}
	})
	// 底脚导航
	$(".banner-nav li").each(function(item){
		$(this).click(function(){
			$(".banner-change li").eq(item).fadeIn().siblings(".banner-change li").fadeOut();
			$(".banner-nav li").eq(item).addClass('active').siblings(".banner-nav li").removeClass('active');
		})
	})


	//服装鞋包栏目切换
	$(".clothing-title-dapai").hover(function(){
		$(".clothing-dapai-show").css('display','block');
		$(".clothing-man-show,.clothing-women-show,.clothing-shoes-show,.clothing-bag-show,.clothing-underwear-show,.clothing-jewelry-show,.clothing-gift-show,.clothing-watch-show").css('display','none');
	})
	$(".clothing-title-man").hover(function(){
		$(".clothing-man-show").css('display','block');
		$(".clothing-dapai-show,.clothing-women-show,.clothing-shoes-show,.clothing-bag-show,.clothing-underwear-show,.clothing-jewelry-show,.clothing-gift-show,.clothing-watch-show").css('display','none');
	})
	$(".clothing-title-women").hover(function(){
		$(".clothing-women-show").css('display','block');
		$(".clothing-dapai-show,.clothing-men-show,.clothing-shoes-show,.clothing-bag-show,.clothing-underwear-show,.clothing-jewelry-show,.clothing-gift-show,.clothing-watch-show").css('display','none');
	})
	$(".clothing-title-shoes").hover(function(){
		$(".clothing-shoes-show").css('display','block');
		$(".clothing-dapai-show,.clothing-women-show,.clothing-man-show,.clothing-bag-show,.clothing-underwear-show,.clothing-jewelry-show,.clothing-gift-show,.clothing-watch-show").css('display','none');
	})
	$(".clothing-title-bag").hover(function(){
		$(".clothing-bag-show").css('display','block');
		$(".clothing-dapai-show,.clothing-women-show,.clothing-shoes-show,.clothing-man-show,.clothing-underwear-show,.clothing-jewelry-show,.clothing-gift-show,.clothing-watch-show").css('display','none');
	})
	$(".clothing-title-underwear").hover(function(){
		$(".clothing-underwear-show").css('display','block');
		$(".clothing-dapai-show,.clothing-women-show,.clothing-shoes-show,.clothing-bag-show,.clothing-man-show,.clothing-jewelry-show,.clothing-gift-show,.clothing-watch-show").css('display','none');
	})
	$(".clothing-title-jewelry").hover(function(){
		$(".clothing-jewelry-show").css('display','block');
		$(".clothing-dapai-show,.clothing-women-show,.clothing-shoes-show,.clothing-bag-show,.clothing-man-show,.clothing-underwear-show,.clothing-gift-show,.clothing-watch-show").css('display','none');
	})
	$(".clothing-title-gift").hover(function(){
		$(".clothing-gift-show").css('display','block');
		$(".clothing-dapai-show,.clothing-women-show,.clothing-shoes-show,.clothing-bag-show,.clothing-man-show,.clothing-jewelry-show,.clothing-underwear-show,.clothing-watch-show").css('display','none');
	})
	$(".clothing-title-watch").hover(function(){
		$(".clothing-watch-show").css('display','block');
		$(".clothing-dapai-show,.clothing-women-show,.clothing-shoes-show,.clothing-bag-show,.clothing-man-show,.clothing-jewelry-show,.clothing-gift-show,.clothing-underwear-show").css('display','none');
	})

})