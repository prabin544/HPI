const router = require("express").Router(),
      recordController = require("../../controllers/recordController"),
      PatientRecord = require('../../models/patientRecord'),
      auth = require("../../middleware/auth");

// Matches with "/api/patientRecords"
router.route("/")
  .get(recordController.findAll)
  // .post(recordController.create)
router.post("/", auth, async (req, res) => {
    try {
      const { symptom, symptomStart  } = req.body;

      if (!symptom )
      return res
        .status(400)
        .json({ msg: "Missing required fields" });
      
      const newRecord = new PatientRecord ({
        ...req.body,
        patientId: req.user,
      })
      const savedRecord = await newRecord.save();
      res.json(savedRecord);
    } catch (err){
      res.status(500).json({error: err.message})
    }
  });

// Matches with "/api/patientRecords/:id"
router
  .route("/:id")
  .get(recordController.findById)
  .put(recordController.update)
  .delete(recordController.remove);

module.exports = router;
