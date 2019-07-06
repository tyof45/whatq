const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vendorSchema = new Schema({
  name: { type: String, required: true },
  photo: { type: String, required: true },
  events: Array,
  menus: Array
});

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;
