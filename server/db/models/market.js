'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');
var _ = require('lodash');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    creator: {
    	type: mongoose.Schema.ObjectId,
    	ref: 'User'
    },
    stocks: [{
    	type: mongoose.Schema.ObjectId,
    	ref: 'Stock'
    }],
    participants: [{
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }]

});

// virtual that gets markets average price (or however
// DOW Jones is calculated)


mongoose.model('Market', schema);