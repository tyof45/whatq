const router = require("express").Router();
const vendorRoutes = require("./vendor");

// Vendor routes
router.use("/vendor", vendorRoutes);

module.exports = router;