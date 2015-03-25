var mongoose = require('mongoose');

var RantSchema = new mongoose.Schema({
  title: String,
  body: String
});

module.exports = mongoose.model('Rant', RantSchema);
