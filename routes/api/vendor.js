const router = require("express").Router();
const vendorsController = require("../../controllers/vendorsController");

//Vendor - Create a vendor
router.route("/api/vendor")
    .post(vendorsController.create)
    .get(vendorsController.findAll);

router.route("/api/vendor/:id")
    .get(vendorsController.findById)
    .put(vendorsController.update)
    .delete(vendorsController.remove);

// router.route("/api/vendor/:id/menus")

// router.route("/api/vendor/:id/menuItems")

module.exports = router;