// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
});

module.exports = mongoose.model('Product', productSchema);
