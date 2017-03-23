	//配置服务
		app.service('cartService', function (){
		    // 定义数组，用于保存所有购物车数据
		    var arr = [];		
		    // 添加商品的方法
//		    console.log(this)
//			 this.addGoods = function (obj) {
//		        arr.push(obj);
//		        console.log(arr);
//		    }	

		    this.addGoods = function (obj) {
		    	if(arr.length==0){
		    		arr.push(obj);
		    		console.log("kongde ")
		    	}else{
		    		for( item of arr){
		    			if(item.name==obj.name){
		    				item.count=Number(item.count)+Number(obj.count)
		    				return;
		    			}		    				
		    		}
					arr.push(obj);
		    	}		       
		    };	    
		    // 获取所有商品的方法
		    this.getAllGoods = function () {
		        return arr;
		    };	
		    
		    //城市
		    var City = '';
		    this.changeCityName = function(city){
		    	City = city;
		    }
		    this.getCityName = function(){
		    	return City;
		    }

		});

