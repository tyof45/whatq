const router = require("express").Router();
const eventController = require("../../controllers/eventsController");

//displays all events to the consumer
router.route("/events")
  .get(eventController.readAllEvents);

//display a list of all vendors for a specific event to the consumer
router.route("/:event/vendors")
  .get(eventController.readAllVendors);

//display menu per event per vendor
//display a list of all vendors for a specific event to the consumer
router.route("/:event/:vendor/menu")
  .get(eventController.showMenu);



module.exports = router;