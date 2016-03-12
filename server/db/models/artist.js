'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var artistSchema = new Schema({
  name:  { type: String, required: true}
});

module.exports = mongoose.model('Artist', artistSchema);