const db = require("../models");
const mongoose = require('mongoose');
// Defining methods for the booksController
module.exports = {
  readAllEvents: function(req, res) {
    console.log("accessed");
    db.Event
      .find({})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  readAllVendors: function(req, res) {
    db.Event
      .findById(req.params.id, "Vendors")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createEvent: function(req, res) {
    db.Event
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  readMenu: function(req, res) {
    db.Event
      .find(req.params)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  updateVendors: function(req, res) {
    db.Event
      .create(req.body.vendor)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  readOrders: function(req, res) {
    console.log(`"${req.params.vendor}"`)
    db.Orders
      .findOne({restaurant: req.params.vendor})
      .then(dbModel => (res.json(dbModel.orders)))
      .catch(err => res.status(422).json(err))
  },
  createOrder: function(req, res) {
    db.Orders
      .update({restaurant: req.params.vendor}, {$push: {orders: req.body}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findVendorData: function(req, res) {
    console.log(req.body.ids);
    let searchArray = [];
    for(let i = 0; i < req.body.ids.length; i++){
      if(mongoose.Types.ObjectId.isValid(req.body.ids[i])){
        searchArray.push(req.body.ids[i])
      }
    }
    console.log(searchArray);
    db.Vendor
      .find({ '_id': { $in: [ searchArray ]}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  joinEvents: function(req, res) {
    console.log(req.body);
    db.Vendor
      .update({_id: req.params.vendor}, {events: req.body.events})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
};
