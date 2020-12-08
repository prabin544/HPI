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
  diagnosis: [String],
  status: {
    type: String,
    required: true,
    default: "active"
  }
});

const PatientRecord = mongoose.model("Patient Record", patientRecordSchema);

module.exports = PatientRecord;