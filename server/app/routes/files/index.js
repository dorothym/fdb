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
	// console.log("retrieving file by ID",req.params.id)
	File.findById(req.params.id)
	.then(function(file) {
		// console.log("found file",file)
		res.json(file);
	},
	function(err) {
		console.error("error in get file route",err)
	});
});

router.get('/', function(req,res,next) {
	// console.log("inside files get")
	File.find()
	.then(function(allfiles) {
		// console.log("success:",allfiles);
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

router.put('/:id/performers', function (req,res,next) {
	var perfArray = ['Dasher','Dancer'];
	File.findByIdAndUpdate(
		req.params.id, 
		{ $pushAll: { performers: perfArray }},
		{new: true}	
	)
	.then(function() {
		console.log("success")
		},
		function(err) {
			console.error("error:",err)
		}
	)
});


	// File.findById(req.params.id)
	// .then(function(track) {
	// 	console.log("found track:", track)
	// 	track.set(req.body)
	// 	return track.save();
	// })
// });


router.post('/', function(req,res,next) {
	var perfArray = req.body.performers;

	return File.create({
		'title' : req.body.title,
		'album' : req.body.album,
		'genre' : req.body.genre,
		'description' : req.body.description,
		// 'dateRecorded': ,
		// 'locationRecorded': ,
		// 'image': ,
		// 'file': ,
		'composer': req.body.composer,
		// 'relatedFile': ,
		// 'recordedBy' : ,
		'filePath': req.body.filePath,
		's3key': req.body.s3key
		// 's3bucket': ,
		})
	.then(function(newfile) {
		console.log("inside newfile then",newfile)
		return File.findByIdAndUpdate(newfile._id,{ $pushAll: { performers: perfArray }}, {new: true})
		.then(function(updatedFile) {
			console.log("updated file:",updatedFile)
		},
			function(err) {
				console.error("problem updating file",err)
			})
	})
	.then(function() {
		res.send("finished creating and updating file")
	},
		function(err) {
			res.send("error:",err)
		})
});

router.get('/artist/:name', function(req,res,next) {
	console.log("getting artist by name",req.params.name)
	File.getSongsByArtist(req.params.name)
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
