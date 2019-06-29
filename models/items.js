const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  restaurant: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Float32Array, required: true },
  description: { type: String, required: true },
  photo: { type: String, required: true },
  modifiers: { type: String, required: true },
  alergens: { type: String, required: true },
  dietary: { type: String, required: true },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
