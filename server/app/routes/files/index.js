'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var File = mongoose.model('File');

// console.log("inside routes/files");

// function logger(req,res,next) {
// 	console.log("we are in??")
// 	next();
// }

router.get('/', function(req,res,next) {
	// console.log("inside files get")
	File.find()
	.then(function(allfiles) {
		console.log("success:",allfiles.data);
		res.status(201).send('completed get request')
	}, function(err) {
		console.error("error: err")
	});
});

router.post('/', function(req,res,next) {
	// console.log("inside files post")
	File.create(req.body)
	.then(function(newfile) {
		// console.log("success:",newfile);
		res.status(201).send('completed post request')
	}, function(err) {
		console.error("Problem POSTing",err)
	})
});

router.get('/artist/:artist', function(req,res,next) {
	File.getSongsByArtist(req.params.artist)
	.then(function(songs) {
		console.log('songs:',songs)
		res.json(songs);
	})
})

router.get('/album/:album', function(req,res,next) {
	File.getSongsByAlbum(req.params.album)
	.then(function(songs) {
		console.log('songs:',songs)
		res.json(songs);
	})
})

module.exports = router;
