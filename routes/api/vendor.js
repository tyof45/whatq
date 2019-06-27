const router = require("express").Router();
const vendorsController = require("../../controllers/vendorsController");

//Vendor - Create a vendor
router.route("/api/vendor")
    .post(vendorsController.create)
    .get(vendorsController.findAll);

module.exports = router;