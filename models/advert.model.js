const mongoose = require('mongoose');

const advertSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 10, maxlength: 50 },
  content: { type: String, required: true, minlength: 20, maxlength: 1000 },
  date: { type: Date, /*default: Date('YYYY-MM-DD'),*/ required: true }, //! Jak ustawić format daty YYYY-MM-DD bez godziny??
  image: { type: String, required: true },
  price: { type: Number, required: true },
  localisation: { type: String, required: true },
  seller: { type: String, required: true },
  // searchPhrase: { type: String, required: true }
});

module.exports = mongoose.model('Advert', advertSchema);
