

app.controller('detailCtrl',['$scope','$stateParams','cartService',function($scope,$stateParams,cartService){
		
	$scope.id = JSON.parse($stateParams.id);
	
	//实现数量的加减
	$scope.detailNumber=1;
	$scope.add=function(){
		var detailNumber=$('#detailNumber').html()	
		console.log(detailNumber)
		$scope.detailNumber=++detailNumber
	}
	$scope.jian=function(){
		var detailNumber=$('#detailNumber').html();	
		//判断数量
		if(detailNumber==1){
			return;
		}	
		$scope.detailNumber=--detailNumber
		
	}
	
	//加入购物车
	$scope.addgood=function(){
		
		$scope.id.count=$scope.detailNumber
		console.log($scope.id)
//		var shopArr=cartService.getAllGoods()
//		console.log(shopArr)
		
//		if(shopArr==[]){
//			cartService.addGoods($scope.id)
//			console.log("111")
//		}else{		
//			for( item of shopArr){				
//				if (item.name==$scope.id.name){
//					item.count=Number(item.count)+Number($scope.id.count)
//				}else{
//					cartService.addGoods($scope.id)
//				}
//			}
//		
//		}
		cartService.addGoods($scope.id)
		
	}
	
	
	
	
	
	
	
	
	
}])