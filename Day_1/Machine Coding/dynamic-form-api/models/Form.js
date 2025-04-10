const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  fields: [
    {
      fieldName: String,
      type: String
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Form', FormSchema);
