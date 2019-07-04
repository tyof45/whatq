const router = require("express").Router();

// event routes
const eventRoutes = require("./events");
router.use("/events", eventRoutes);

// Vendor routes
const vendorRoutes = require("./vendor");
router.use("/vendor", vendorRoutes);

module.exports = router;