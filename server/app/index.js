'use strict';
var path = require('path');
var express = require('express');
var app = express();
var fs = require('fs');

module.exports = app;


// AWS

var AWS = require('aws-sdk');
AWS.config.region = 'us-east-1';


// Pass our express application pipeline into the configuration
// function located at server/app/configure/index.js
require('./configure')(app);
// require('./aws')(app);

// Routes that will be accessed via AJAX should be prepended with
// /api so they are isolated from our GET /* wildcard.
app.use('/api', require('./routes'));


/*
 This middleware will catch any URLs resembling a file extension
 for example: .js, .html, .css
 This allows for proper 404s instead of the wildcard '/*' catching
 URLs that bypass express.static because the given file does not exist.
 */
app.use(function (req, res, next) {

    if (path.extname(req.path).length > 0) {
        res.status(404).end();
    } else {
        next(null);
    }

});
var s3bucket = new AWS.S3({params: {Bucket: 'filestack20160310'}});
var params = {Key: 'testfile1.txt'};

app.get('/awstest', function(req,res,next) {

	s3bucket.getObject(params,function(error, data) {
	  if (error) {
	    console.log("You screwed up:",error); 
	  } else {
	    console.log("Nice job!",data); 
	    // res.send(data.body)
	  }
	});
})

app.get('/allbuckets', function(req,res,next) {
	s3bucket.listBuckets(function(err, data) {
	  if (err) { console.log("Error :-( :-(", err); }
	  else {
	    for (var index in data.Buckets) {
	      var bucket = data.Buckets[index];
	      console.log("Bucket :-) :-) ", bucket.Name, ' : ', bucket.CreationDate);
	    }
	  }
	});
});

app.get('/makebucket', function(req,res,next) {
	var s3 = new AWS.S3({
		params: {
			Bucket: 'filestack20160310', 
			Key: 'newkey2.txt'
		}
	});
	s3.createBucket(function(err) {
	  if (err) { console.log("Error!", err); }
	  else {
	    s3.upload({Body: 'Hello world!'}, function() {
	      console.log("Successfully uploaded data");
	    });
	  }
	});
})

app.get('/makefile', function(req,res,next) {


	fs.readFile('./server/filestoupload/test5.txt', function (err, data) {
	  if (err) { throw err; }

	  var binaryfile = new Buffer(data, 'binary');

	  var s3 = new AWS.S3();

	  // s3.upload({
	  //   Bucket: 'filestack20160310',
	  //   Key: 'test4.txt',
	  //   Body: binaryfile
	  // }).done(function (resp) {
	  //   console.log('Rolling!');
	  // },function(err) {
	  // 	console.log("frownyface:",err)
	  // });

	  var params = {
	    Bucket: 'filestack20160310',
	    Key: 'test5.txt',
	    Body: binaryfile
	  }

	  s3.putObject(params, function (resp) {
	    console.log('Wheeeeeeeeeee!', resp);
	  },function(err) {
	  	console.log("frownyface:",err)
	  });

	});


	// var s3 = new AWS.S3({
	// 	params: {
	// 		Bucket: 'filestack20160310', 
	// 		Key: 'newkey3.txt',
	// 		Body: '../../txtfiles/test3.txt'
	// 	}
	// });
	// console.log('working on a building...')
	// s3.createBucket(function(err) {
	//   if (err) { console.log("Frowny face:", err); }
	//   else {
	//     s3.upload({Body: 'Hello world!'}, function() {
	//       console.log("Happy face!");
	//     });
	//   }
	// });
})

app.get('/*', function (req, res) {
    res.sendFile(app.get('indexHTMLPath'));
});



// Error catching endware.
app.use(function (err, req, res, next) {
    console.error(err)
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});
