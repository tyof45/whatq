const db = require('../models');

module.exports = {
  createMenu(req, res) {
    db.Vendors
      .update({_id: req.params._id}, {$push: {}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //testing needed may work, but probably not
  createItem(req, res) {
    db.Vendors
    .update({_id: req.params._id}, {req.params.itemName: req.params.item})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
  },
  readAllVendorsFromEvent() {

  },
}

// const db = require("../models");

// // Defining methods for the vendorsController
// module.exports = {
//   findAll: function(req, res) {
//     db.Vendor
//       .find(req.query)
//       .sort({ date: -1 })
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   findMenu: function(req, res) {
//     db.Vendor
//       .findById(req.params.id)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   createMenu: function(req, res) {
//     db.Vendor
//       .create(req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   updateMenu: function(req, res) {
//     db.Vendor
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   deleteMenu: function(req, res) {
//     db.Vendor
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
// };
