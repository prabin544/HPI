const router = require("express").Router();
const recordController = require("../../controllers/recordController");

// Matches with "/api/illnessRecords"
router.route("/")
  .get(recordController.findAll)
  .post(recordController.create);

// Matches with "/api/illnessRecords/:id"
router
  .route("/:id")
  .get(recordController.findById)
  .put(recordController.update)
  .delete(recordController.remove);

module.exports = router;
