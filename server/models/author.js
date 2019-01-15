var mongoose = require('mongoose')
var AuthorSchema = new mongoose.Schema({
  name: {type:String, required:true, minlength:3},
  created_at: Date,
  updated_at: Date
})
var Author = mongoose.model('Author', AuthorSchema);
module.exports = Author;
