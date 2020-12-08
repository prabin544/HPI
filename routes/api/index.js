const router = require("express").Router();
const userRoutes = require("./usersAPI");
const recordRoutes = require("./patientRecordsAPI");

// User routes
router.use("/users", userRoutes);
// Patient Record routes
router.use("/patientrecords", recordRoutes);

module.exports = router;
