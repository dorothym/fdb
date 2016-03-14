'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var genreArray = ['Old-time','Rock','Folk','Bluegrass','Oldies', 'Country']

var fileSchema = new Schema({
  title:  { type: String}, // DC title
  performers: {type: [String]}, // DC creator // Creator="Shakespeare, William"
  album: {type: String}, // 
  genre: { type: String, enum: genreArray},
  description: { type: String}, // DC description
  dateRecorded: {type: Date, default: Date.now}, // DC date
  locationRecorded: {type: String},
  image: { type: String },
  file: {type: String},
  composer: { type: String},
  relatedFile: { type: mongoose.Schema.Types.ObjectId, ref: 'File'}, // DC Relation ?
  recordedBy: { type: String}, // DC Contributor?
  filePath: {type: String},
  s3key: {type: String},
  s3bucket: {type: String}
});

fileSchema.statics.getSongsByArtist = function (artist) {
  return this.find({performers: artist }).exec();
}

module.exports = mongoose.model('File', fileSchema);

