;(function(){

	active();

	/**
	 * 页面一进入就执行的函数
	 */
	function active(){
		showFooterLink();
	}

	/**
	 * 获取url上的路由链接
	 */
	function showFooterLink(){
		var onUrl=window.location.pathname;
		console.log(onUrl);
		if(onUrl == '/'){
			$('.footer-index').addClass('active');
		}else if(onUrl =='/search'){
			$('.footer-search').addClass('active');
		}else if(onUrl =='/shop'){
			$('.footer-shop-cart').addClass('active');
			$('#index-icon').hide();
		}else if(onUrl =='/user'){
			$('.footer-user-center').addClass('active');
		}
	}

})();


