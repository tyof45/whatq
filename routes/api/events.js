const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

//displays all events to the consumer
router.route("/api/events")
  .get(eventsController.readAllEvents)
  .post(eventsController.createEvent)
  // .put()
  // .delete()
  // eventController.readAllEvents

//display a list of all vendors for a specific event to the consumer
router.route("/:event/vendors")
  .get(eventsController.readAllVendors)
  .put(eventsController.updateVendors)
//display menu per event per vendor
//display a list of all vendors for a specific event to the consumer

router.route("/:vendor/menu")
  // .get(eventsController.showMenu)

router.route("/:event/:vendor/order")
  .get(eventsController.readOrders) 
  .post(eventsController.createOrder)

module.exports = router;
