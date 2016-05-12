'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose');
var Market = mongoose.model('Market');



router.get('/', function(req, res, next) {
	console.log('HIT ROUTE 1')
	Market.find(req.query)
	.then(function(markets) {
		res.send(markets);
	})
	.catch(next);
});

router.get('/:marketId', function(req, res, next) {
	console.log('HIT ROUTE 2')
	Market.findById(req.params.marketId)
	.populate('stocks')
	.then(function(market) {
		res.send(market);
	})
	.catch(next);
});


router.post('/', function(req, res, next) {
	Market.create(req.body)
	.then(function(market) {
		res.send(market);
	})
	.catch(next);
});

router.put('/:marketId', function(req, res, next) {
	Market.findByIdAndUpdate(req.params.marketId, req.body, {new: true})
	.then(function(market) {
		res.send(market);
	})
	.catch(next);
});

router.delete('/:marketId', function(req, res, next) {
	Market.remove({_id: req.parama.marketId})
	.then(function() {
		res.sendStatus(204);
	})
	.catch(next);
});