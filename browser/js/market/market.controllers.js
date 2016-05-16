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


app.controller('EditMarketCtrl', function($scope, market, MarketFactory, $log, StockFactory, allUsers) {

	$scope.users = allUsers;
	console.log('users: ', $scope.users)
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

	$scope.participantsToAdd = [];


	$scope.addPart = function(user) {
		user.inAddArray = true;
		$scope.participantsToAdd.push(user);
	};

	$scope.addPartsToMarket = function() {
		var partsToAdd = $scope.participantsToAdd.map(function(participant) {
			return participant._id;
		});
		console.log('adddd',partsToAdd)
		MarketFactory.addPartsToMarket($scope.market._id, partsToAdd);
	};

});