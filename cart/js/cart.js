
app.controller('cartCtrl',['$scope','cartService','calcFactory',function($scope,cartService,calcFactory){

	//从服务中读取所有的数据
	$scope.data=cartService.getAllGoods();	
	//从工厂中读取商品总价格	
	$scope.allMoney=calcFactory.calcPrice().toFixed(2);
	//实现购物车的加减功能
	$scope.add=function(){
		this.item.count++;
		$scope.allMoney=calcFactory.calcPrice().toFixed(2)
	}
	
	$scope.jian=function(){
		if(this.item.count==1){
			var self = this;
			cartService.getAllGoods().forEach(function(items,index){
				if(items.name==self.item.name){
					
					cartService.getAllGoods().splice((index),1);
				}
			})
			return;
		
		};
		
		this.item.count--;
		$scope.allMoney=calcFactory.calcPrice().toFixed(2)
	}
	
//	删除商品
	$scope.del=function(){
//		console.log(this.item)
        var self=this;
		cartService.getAllGoods().forEach(function(items,index){
				if(self.item.name==items.name){
					cartService.getAllGoods().splice((index),1);
				}
				$scope.allMoney=calcFactory.calcPrice().toFixed(2)
				return;				
		})
	}
	
	 

}])

