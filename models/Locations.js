
var mongoose = require('mongoose');
var searchPlugin=require('mongoose-search-plugin');

var LocationSchema = new mongoose.Schema({
  name:String
  
});

LocationSchema.plugin(searchPlugin,{
  fields:['name']
});
mongoose.model('Location',LocationSchema);