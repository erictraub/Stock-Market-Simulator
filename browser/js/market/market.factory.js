app.factory('MarketFactory', function($http) {
	var MarketFactory = {};

	MarketFactory.createMarket = function(marketData) {
		return $http.post('/api/markets', marketData)
		.then(function(market) {
			return market.data;
		});
	};

	MarketFactory.getMyMarkets = function(userId) {
		return $http.get('/api/markets/?creator=' + userId)
		.then(function(markets) {
			return markets.data;
		})
	};

	MarketFactory.getMarketById = function(marketId) {
		return $http.get('/api/markets/' + marketId)
		.then(function(market) {
			console.log('market from db: ', market.data)
			return market.data;
		});
	};

	MarketFactory.addStockToMarket = function(marketId, stockId) {
		console.log('stockid:', stockId)
		return $http.put('/api/markets/' + marketId + '/stocks', {stockId: stockId})
		.then(function(market) {
			return market.data;
		});
	};


	return MarketFactory;
});