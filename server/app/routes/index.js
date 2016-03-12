'use strict';
var router = require('express').Router();

module.exports = router;

router.use('/members', require('./members'));

router.use('/files', require('./files'))

// function logger(req,res,next) {
// 	console.log("we are in??")
// 	next();
// }

// router.get('/', function(req,res,next) {
// 	console.log("just testing")
// })
// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});
