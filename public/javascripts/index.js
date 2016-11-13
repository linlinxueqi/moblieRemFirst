;(function(){
	active();
	function active(){
		navBg();
	}
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