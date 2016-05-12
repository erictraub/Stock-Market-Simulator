app.config(function ($stateProvider) {
    $stateProvider.state('createMarket', {
        url: '/createMarket',
        templateUrl: 'js/market/createMarket.template.html',
        controller: 'CreateMarketCtrl',
        resolve: {
            currentUser: function(AuthService) {
                return AuthService.getLoggedInUser();
            },
            myMarkets: function(currentUser, MarketFactory) {
                return MarketFactory.getMyMarkets(currentUser._id);
            }
        }
    });
});

app.config(function ($stateProvider) {
    $stateProvider.state('editMarket', {
        url: '/editMarket/:marketId',
        templateUrl: 'js/market/editMarket.template.html',
        controller: 'EditMarketCtrl',
        resolve: {
            market: function($stateParams, MarketFactory) {
                return MarketFactory.getMarketById($stateParams.marketId);
            }
        }
    });
});