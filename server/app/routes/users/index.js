'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose');
var User = mongoose.model('User');


router.get('/', function(req, res, next) {
	User.find()
	.then(function(users) {
		res.send(users);
	})
	.catch(next);
});

router.get('/:userId', function(req, res, next) {
	User.findOneById(req.params.userId)
	.then(function(user) {
		res.send(user);
	})
	.catch(next);
});

router.post('/', function(req, res, next) {
	User.create(req.body)
	.then(function(user) {
		res.send(user);
	})
	.catch(next);
});

router.put('/:userId', function(req, res, next) {
	User.findByIdAndUpdate(req.params.userId, req.body, {new: true})
	.then(function(user) {
		res.send(user);
	})
	.catch(next);
});

router.delete('/:userId', function(req, res, next) {
	User.remove({_id: req.parama.userId})
	.then(function() {
		res.sendStatus(204);
	})
	.catch(next);
});