const db = require('../models');

module.exports = {
  readAllEvents: (req, res) => {
    db.Event
    .find(req.query)
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  readAllVendors: (req, res) => {
    db.Event
    .findById(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
};
