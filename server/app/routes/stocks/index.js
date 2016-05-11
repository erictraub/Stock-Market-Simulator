'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose');
var Stock = mongoose.model('Stock');


router.get('/', function(req, res, next) {
	Stock.find()
	.then(function(stocks) {
		res.send(stocks);
	})
	.catch(next);
});

router.get('/:stockId', function(req, res, next) {
	Stock.findOneById(req.params.stockId)
	.then(function(stock) {
		res.send(stock);
	})
	.catch(next);
});

router.post('/', function(req, res, next) {
	Stock.create(req.body)
	.then(function(stock) {
		res.send(stock);
	})
	.catch(next);
});

router.put('/:stockId', function(req, res, next) {
	Stock.findByIdAndUpdate(req.params.stockId, req.body, {new: true})
	.then(function(stock) {
		res.send(stock);
	})
	.catch(next);
});

router.delete('/:stockId', function(req, res, next) {
	Stock.remove({_id: req.parama.stockId})
	.then(function() {
		res.sendStatus(204);
	})
	.catch(next);
});



