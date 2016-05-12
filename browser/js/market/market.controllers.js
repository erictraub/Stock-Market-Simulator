app.controller('CreateMarketCtrl', function($scope, MarketFactory, $log, $state, currentUser, myMarkets) {
	
	$scope.marketsTradeIn = currentUser.marketsTradeIn;
	$scope.market = {creator: currentUser._id};
	$scope.myMarkets = myMarkets;

	$scope.createMarket = function() {
		MarketFactory.createMarket($scope.market)
		.then(function(market) {
			$state.go('editMarket', {marketId: market._id})
		})
		.catch($log.error);
	};
});


app.controller('EditMarketCtrl', function($scope, market) {
	$scope.market = market;
	console.log(market);
});