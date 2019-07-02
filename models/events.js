const mongoose = require('mongoose');

const  Schema  = mongoose.Schema;

const eventSchema = new Schema({
  name: { type: String, required: true },
  address: {type: String, required: true},
  Vendors: { type: Array, required: true },
})

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
