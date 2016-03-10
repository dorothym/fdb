'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var dietArray = [];
var genreArray = [];

var fileSchema = new Schema({
  title:  { type: String, required: true},
  performer: {type: String, required: true},
  genre: { type: String, required: true, enum: genreArray },
  description: { type: String, required: true},
  image: { type: String},
  file: {type: String}
});

fileSchema.methods.getChef = function () {
  return mongoose.model('Chef')
        .findOne({files: {$elemMatch: {$eq : this._id} } }).exec();
}

fileSchema.methods.getAllRatings = function () {
  return mongoose.model('Rating')
        .find({file: this._id}).exec();
}

fileSchema.methods.addRating = function (ratingData) {
  ratingData.file = this._id;
  //user id??
  return mongoose.model('Rating')
        .create(ratingData)
}

fileSchema.methods.addMealToChef = function(chef) {
  var self = this;
  chef.files.push(self._id)
    return chef.save()
    .then(function() {
   return self;
})

}

module.exports = mongoose.model('Meal', fileSchema);

