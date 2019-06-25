const router = require("express").Router();
const eventController = require("../../controllers/eventsController");

//displays all events to the consumer
router.route("/:events")
  .get(eventController.findAllEvents);

//display a list of all vendors for a specific event to the consumer
router.route("/:events/vendors")
  .get(eventController.findAllVendors);

module.exports = router;