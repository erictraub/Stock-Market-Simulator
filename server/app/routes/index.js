'use strict';
var router = require('express').Router();
module.exports = router;

router.use('/members', require('./members'));
router.use('/users', require('./users'));
router.use('/stocks', require('./stocks'));
router.use('/markets', require('./markets'));

// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});
