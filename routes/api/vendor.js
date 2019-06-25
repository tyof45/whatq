const router = require("express").Router();
const vendorController = require("../../controllers/vendorsController");

//Vendor - Displays all events and menus
router.route("/:vendor")
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

//Vendor - GET all events per vendor
//Vendor - Attach new events
//Vendor - Delete events
router.route("/:vendor/events")
  .get(vendorController.findEvents)
  .put(vendorController.attachEvents)
  .delete(vendorController.deleteEvents);

//Customers - display all events for a specific vendor
router.route("/:vendor/events")
  .get(vendorController.eventById);

module.exports = router;