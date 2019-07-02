const router = require("express").Router();
const vendorController = require("../../controllers/vendorsController");

//Vendor - Displays all events and menus
router.route("/:vendor/info")
  .get(vendorController.findAll);

//Vendor - GET/UPDATE/CREATE/DELETE all menus
router.route("/:vendor/menu")
  .get(vendorController.findMenu)
  .put(vendorController.updateMenu)
  .post(vendorController.createMenu)
  .delete(vendorController.deleteMenu);

//Vendor - GET all orders
//Customer - Create orders
router.route("/:vendor/orders")
  .get(vendorController.findOrder)
  .post(vendorController.createOrder);

//Vendor - Update orders (once an order is completed)
router.route("/:vendor/orders/:id")
  .put(vendorController.updateOrder);

//Vendor - Attach new events
//Vendor - Delete events
router.route("/:vendor/events")
  .put(vendorController.attachEvents)
  .delete(vendorController.deleteEvents);

module.exports = router;