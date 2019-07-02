const router = require("express").Router();
const eventRoutes = require("./vendor");

// Vendor routes
router.use("/events", eventRoutes);

module.exports = router;