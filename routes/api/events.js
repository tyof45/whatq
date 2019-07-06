const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

//displays all events to the consumer
router.route("/all")
  .get(eventsController.readAllEvents)
  .post(eventsController.createEvent)
  // .put()
  // .delete()
  // eventController.readAllEvents

//display a list of all vendors for a specific event to the consumer
router.route("/:id/vendors")
  .patch(eventsController.findVendorData)
  .put(eventsController.updateVendors)
//display menu per event per vendor
//display a list of all vendors for a specific event to the consumer

router.route("/:vendor/menu")
  // .get(eventsController.showMenu)

router.route("/:event/:vendor/order")
  .get(eventsController.readOrders)
  .post(eventsController.createOrder)

module.exports = router;
