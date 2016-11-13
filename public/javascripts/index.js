;(function(){
	active();
	function active(){
		navBg();
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
})();