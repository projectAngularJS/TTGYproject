app.controller("locationCtrl", ['$scope', '$http', '$interval','cartService', 
function ($scope, $http, $interval,cartService) {
	
			
			$scope.city = '北京';
			var citys = document.querySelectorAll(".province li");
			$scope.changeCity = function(cityName){
				$scope.city = cityName;
				cartService.changeCityName(cityName);
			}
			
	
	
			var map = new AMap.Map('container',{
			    zoom: 10,
			    center: [116.39,39.9]//new AMap.LngLat(116.39,39.9)
			});

			
			
			AMap.plugin(['AMap.ToolBar','AMap.Scale','AMap.OverView'],
			    function(){
			        map.addControl(new AMap.ToolBar());
			
			        map.addControl(new AMap.Scale());
			
			        map.addControl(new AMap.OverView({isOpen:true}));
			});

			//创建标记
			var marker = new AMap.Marker({
			    position: [116.480983, 39.989628],//marker所在的位置
			    map:map//创建时直接赋予map属性
			});
			//也可以在创建完成后通过setMap方法执行地图对象
			marker.setMap(map);

			map.plugin(["AMap.ToolBar"],function(){
			    //加载工具条
			    var tool = new AMap.ToolBar();
			    map.addControl(tool);   
			 	
			});
		   
		
		$http.get("./json/city.json").success(function (citydata){
			
			$scope.citydata = citydata;

		})
		
		$scope.flag = false;
		$scope.changePageFn = function () {

			var ul = document.querySelector('.city').querySelectorAll('ul')[this.$index];
			if( ul.style.display == "none" ){
				ul.style.display = "block";
			}else{
				ul.style.display = "none";
			}
		}

}]);	
