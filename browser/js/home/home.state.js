app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'HomeCtrl'
    });



	var nike = {value: 100};
	var eric = {cash: 1000};

	function action(act, stock, player) {
		if (act === 'sell') {
			player.cash += stock.value;
			stock.value -= .5;
		}
		if (act === 'buy') {
			player.cash -= stock.value;
			stock.value += .5;
		}
		stock.value = Math.round(stock.value * 10)/10
		
	};
	

});