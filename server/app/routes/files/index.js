'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var File = mongoose.model('File');

// console.log("inside routes/files");

// function logger(req,res,next) {
// 	console.log("we are in??")
// 	next();
// }


router.get('/:id', function(req, res, next){
	console.log("retrieving file by ID",req.params.id)
	File.findById(req.params.id)
	.then(function(file) {
		console.log("found file",file)
		res.json(file);
	},
	function(err) {
		console.error("error in get file route",err)
	});
});

router.get('/', function(req,res,next) {
	console.log("inside files get")
	File.find()
	.then(function(allfiles) {
		console.log("success:",allfiles);
		// res.status(201).send('completed get request')
		res.json(allfiles)
	}, function(err) {
		console.error("error: err")
	});
});

// router.param('fileId', function (req, res, next, fileId) {
// 	console.log("inside fileId param")
//   File.findById(fileId)
//   .then(function(file){
//     req.file = file;
//     next();
//   })
// });



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
