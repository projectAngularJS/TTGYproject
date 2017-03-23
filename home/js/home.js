app.controller("HomeCtrl", ['$scope', '$http', '$interval','cartService',function ($scope, $http, $interval,cartService) {
	
	// 轮播
	var mySwiper = new Swiper ('.lunbo_img .swiper-container', {
		direction: 'horizontal',
		loop: true,
		autoplay: 1000,
		autoplayDisableOnInteraction:false,
		// 如果需要分页器
		pagination: '.swiper-pagination'
	})  

	var swiper = new Swiper('.letters_right .swiper-container', {
		direction: 'vertical',
//      paginationClickable:true,
        loop: true,
        /*无限轮播*/
        autoplayDisableOnInteraction: false,
        autoplay : 1000
   });
	
	$http.get("./json/bottom2.json").success(function (data){
		$scope.data =data.data.goods;
//		console.log($scope.data)

	})
	
	
	
	$(window).scroll(function () {
		if( $('body').scrollTop() > $('.header').height()){
			$('.header').css('background-color', 'rgba(101, 160, 50, 0.9)') 
		} else if( $('body').scrollTop() < $('.header').height()){
			$('.header').css('background-color', 'rgba(101, 160, 50, 0)') 
		}
	})
			
	$scope.city = cartService.getCityName();
	if($scope.city==""){
		$scope.city="北京";
	}
}]);