var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = new mongoose.Schema({
  name: {type: String, required: true},
  url: {type: String, required: true},
  price: {type: String, required: true}
})
mongoose.model('Product', ProductSchema);
