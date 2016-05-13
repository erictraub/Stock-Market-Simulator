app.factory('StockFactory', function($http) {
	var StockFactory = {};

	StockFactory.createNewStock = function(stockInfo) {
		return $http.post('/api/stocks', stockInfo)
		.then(function(stock) {
			return stock.data;
		});
	};





	return StockFactory;
});