'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');
var _ = require('lodash');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    market: {
        type: mongoose.Schema.ObjectId,
        ref: 'Market'
    }

});



mongoose.model('Stock', schema);