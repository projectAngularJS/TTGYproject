app.controller('classCtrl',['$scope','$http','cartService', '$state',function($scope,$http,cartService,$state){
		
	//默认class页的样式
		$http.get('./json/fenlei1.json').success(function(data){
			$scope.data=data.data
		})
				
	$scope.tianTian=function(){
//		$http.get('')
		console.log("天天")
		$http.get('./json/fenlei1.json').success(function(data){
			$scope.data=data.data
		})
		
//		console.log($http.get('./json/fenlei1.json'))
//		console.log($scope.data)
	};
	
	$scope.niuNai=function(){
		console.log("牛奶")
		$http.get('./json/fenlei2.json').success(function(data){
			$scope.data=data.data
		})
		
	};
	$scope.youXuan=function(){
		
		console.log("优选")
		$http.get('./json/fenlei3.json').success(function(data){
			$scope.data=data.data
		})
	};
	$scope.reXiao=function(){
		console.log("热销")
		$http.get('./json/fenlei4.json').success(function(data){
			$scope.data=data.data
		})
	}
	
	$scope.detailFn=function(){
//		console.log(this.item)
//		cartService.saveMsg=this.item;
//		$scope.saveMsg=this.item;
		
		$state.go('detail', { id: JSON.stringify(this.item) });
		
	}
	
	
}])