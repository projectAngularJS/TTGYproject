	
	//配置路由
	app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
			//初始化页面
			//设置默认为home页
			$urlRouterProvider.when('','home');
			//设置home页的默认页面
//			$urlRouterProvider.when('/home','home/rexiao');
			//设置分类页得默认页面
//				$urlRouterProvider.when('/class','class/rexiao');
			//设置购物车的默认页面
			
			//设置我的页面的默认页面
			 
			//配置各个分页面
             $stateProvider.state('home', {
                url: '/home',
                templateUrl: './home/home.html',
              	controller : 'HomeCtrl'
            }).state('class',{
            	url:'/class',
            	templateUrl:'./class/class.html',
            	controller:'classCtrl'
            	
            }).state('cart', {
                url: '/cart',
                templateUrl: './cart/cart.html',
                controller:'cartCtrl'
            })
//          .state('mine', {
//              url: '/mine',
//              templateUrl: './mine/mine.html'
//          })
			.state('detail', {
                url: '/detail/:id',
                templateUrl: './detail/detail.html',
                controller:'detailCtrl'
            })
			   //mine相关 
             .state('mine', {
                url: '/mine',
                templateUrl: './mine/mine.html'
            })            
            //关于我们
            .state('about',{
            	url:'/mine',
            	templateUrl:'./mine/about.html',
            	controller:'classCtrl'
            })
            //优惠券
            .state('coupon',{
            	url:'/mine',
            	templateUrl:'./mine/coupon.html',
            	controller:'classCtrl'
            })
           
            //赠送 presenter
            .state('presenter',{
            	url:'/mine',
            	templateUrl:'./mine/presenter.html',
            	controller:'classCtrl'
            })
            //orderForm  我的订单
             .state('orderForm',{
            	url:'/mine',
            	templateUrl:'./mine/orderForm.html',
//          	controller:'classCtrl'
            })              
             //登录
            .state('login',{
            	url:'/login',
            	templateUrl:'./login/login.html',
//          	controller:'logCtrl'
            })            
            //注册
            .state('login-Phone',{
            	url:'/login',
            	templateUrl:'./login/login-Phone.html',
//          	controller:'regist'
            })
            
            //找回密码
             .state('seachPassword',{
            	url:'/login',
            	templateUrl:'./login/seachPassword.html',
//          	controller:'classCtrl'
            })

			
            //home模块的二级路由
            .state('home.welconBuy',{
                url: '/welconBuy',
                templateUrl: './home/welconBuy.html'
            }).state('home.two', {
                url: '/two',
                templateUrl: './home/two.html'
            }).state('home.three', {
                url: '/three',
                templateUrl: './home/three.html'
            }).state('location', {
                url: '/location',
                templateUrl: './location/location.html',
                controller:'locationCtrl'
            }).state('search', {
		        url: '/search',
		        templateUrl: './home/search.html',
//		        controller: 'searchCtrl'
		    })
		    
//		    .state('seafoods', {
//		        url: '/seafoods',
//		        templateUrl: './seafoods/seafoods.html',
////		        controller: 'seafoodsCtrl'
//		    })
            //cart模块的二级路由
            .state('cart.freshFruit',{
            	url:'/freshFruit',
            	templateUrl:'./cart/freshFruit.html',
            	controller:'cartCtrl'
            })
            

        }]);
            