app.controller('CreateMarketCtrl', function($scope, MarketFactory, $log, $state, currentUser, myMarkets) {
	
	$scope.marketsTradeIn = currentUser.marketsTradeIn;
	$scope.market = {creator: currentUser._id};
	$scope.myMarkets = myMarkets;

	$scope.createMarket = function() {
		MarketFactory.createMarket($scope.market)
		.then(function(market) {
			$state.go('editMarket', {marketId: market._id});
		})
		.catch($log.error);
	};
});


app.controller('EditMarketCtrl', function($scope, market, MarketFactory, $log, StockFactory) {
	// AFTER ADD STOCK IT MARKETS COMES BACK WTIH CORRECT STOCKS
	// BUT INITAILL LOADS WITH NO STOCKS
	// WHERE IS CORRECT STOCK COMING FROM? DOES NOT HAVE STOCKS ON IT
	// IN DATABASE
	// ACTUALLY IT IS RIGHT IN DB, NOT RIGHT FROM POSTMAN THO
	$scope.market = market;
	console.log('market', market)
	$scope.stockToAdd = { market: $scope.market._id };
	$scope.stocks = $scope.market.stocks;



	$scope.addStockToMarket = function() {
		StockFactory.createNewStock($scope.stockToAdd)
		.then(function(stock) {
			return MarketFactory.addStockToMarket($scope.market._id, stock._id);
		})
		.then(function(market) {
			console.log('updated market: ', market);
		})
		.catch($log.error);
	};

});