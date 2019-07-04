const router = require("express").Router();
const vendorsController = require("../../controllers/vendorsController");

//Vendor - Create a vendor
router.route("/")
    .post(vendorsController.create)
    .get(vendorsController.findAll);

router.route("/:id")
    .get(vendorsController.findById)
    .put(vendorsController.update)
    .delete(vendorsController.remove);

router.route("/:id/menus")
    .get(vendorsController.getMenus)
    .put(vendorsController.updateMenu)
    .delete(vendorsController.deleteMenu);

router.route("/:id/:title/items")
    .get(vendorsController.getItems)
    .put(vendorsController.updateItem)
    .delete(vendorsController.deleteItem);

module.exports = router;