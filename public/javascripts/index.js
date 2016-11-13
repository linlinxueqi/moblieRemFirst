;(function(){
	active();
	function active(){
		navBg();
		var content = $(".goods-desc p");
		for(var i=0;i<content.length;i++){
			content[i].innerText = word_ellipsis(content[i].innerText,60);
			
		}
		
	}
	/**
	 * 鼠标滚动，改变Nav的背景颜色
	 */
	function navBg(){
		$(window).scroll(function(){
			var navScrollTop = $(window).scrollTop();
			if(navScrollTop>0){
				$('.nav').addClass('bgOrange');
			}else{
				$('.nav').removeClass('bgOrange');
			}
		});	
	}

	/**
	 * 超出范围省略
	 * 默认截取前面40个字
	 */
	function word_ellipsis(str,num){
		if(typeof num === 'undefined'){
			num = 40;
		}
		if(str.length>num){
			str = str.substring(0,num)+"...";
		}
		return str;
	}
})();