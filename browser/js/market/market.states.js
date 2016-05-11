app.config(function ($stateProvider) {

    $stateProvider.state('createMarket', {
        url: '/createMarket',
        templateUrl: 'js/market/createMarket.template.html',
        controller: 'CreateMarketCtrl'
    });

});