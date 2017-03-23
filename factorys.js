// 工厂
app.factory('calcFactory', function (cartService){
    return {
        calcPrice: function (){
            var money = 0;
            cartService.getAllGoods().forEach(function (item) {
                money += Number(item.price)*Number(item.count);
            });
            return money;
        }
    };
});
