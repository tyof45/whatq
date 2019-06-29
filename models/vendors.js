const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vendorSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  photo: { type: String, required: true },
  Menus: Array
});

// [
//   {name: "food",
//   items: []
//   }
// ]
const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;
