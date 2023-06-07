const mongoose = require('mongoose');

const advertSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 10, maxlength: 50 },
  content: { type: String, required: true, minlength: 20, maxlength: 1000 },
  date: { type: Date, default: Date.now(), required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  localisation: { type: String, required: true },
  user: { type: String, required: true, ref: 'User' },
  // searchPhrase: { type: String, required: true }
});

module.exports = mongoose.model('Advert', advertSchema);
