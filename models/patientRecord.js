const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientRecordSchema = new Schema({
  apptDate: {
    type: Date,
    default: Date.now
  },
  patientId: {
    type: String,
    required: true
  },
  symptom: {
    type: String,
    required: true
  },
  symptomStart: Date,
  assocSymptoms: [String],
  palliative: [String], 
  provocative: [String],
  qualityType: [String],
  radiation: [String],
  severity: Number,
  hpi: String,
  dob: Date,
  patientName: String,
  diagnosis: [String],
  status: {
    type: String,
    required: true,
    default: "active"
  }
});

module.exports = mongoose.model("PatientRecord", patientRecordSchema);

