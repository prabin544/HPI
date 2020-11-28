const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/hpigenerator"
);

const patientRecordSeed = [
  {
    apptDate: new Date(Date.now()),
    patientId: "001",
    symptom: "Trauma",
    assocSymptoms: ["back pain", "neck pain", "trouble walking"],
    palliative: ["massage", "hot compress"],
    provocative: ["arching", "bending"],
    qualityType: ["stabbing", "numbness"],
    radiation: ["lower back", "legs"],
    severity: 7,
    symptomStart: new Date(Date.now()),
  },
  {
    apptDate: new Date(Date.now()),
    patientId: "002",
    symptom: "Flu/COVID symptoms",
    assocSymptoms: ["fever", "chills", "sore throat", "congestion"],
    palliative: ["tylenol", "ibuprofen"],
    provocative: [],
    qualityType: ["aching", "sore"],
    radiation: ["chest"],
    severity: 7,
    symptomStart: new Date(Date.now()),
  },
  {
    apptDate: new Date(Date.now()),
    patientId: "003",
    symptom: "abdomen",
    assocSymptoms: ["fever", "chills", "nausea", "vomiting", "diarrhea"],
    palliative: [],
    provocative: ["eating"],
    qualityType: ["burning", "sharp"],
    radiation: ["right upper abdomen"],
    severity: 7,
    symptomStart: new Date(Date.now()),
  },
  {
    apptDate: new Date(Date.now()),
    patientId: "003",
    symptom: "fracture",
    assocSymptoms: ["fever", "chills", "nausea", "vomiting", "diarrhea"],
    palliative: [],
    provocative: ["eating"],
    qualityType: ["burning", "sharp"],
    radiation: ["right upper abdomen"],
    severity: 7,
    symptomStart: new Date(Date.now()),
  }
];

const userSeed = [
  {
    email: "admin@email.com",
    firsName: "Admin",
    lastName: "User",
    gender: "Hermaphrodite",
    userType: "admin",
    dob: "2020-11-18",
    password: "1234"
  },
  {
    email: "patient1@email.com",
    firsName: "John",
    lastName: "Doe",
    gender: "Male",
    userType: "patient",
    dob: "1980-01-31",
    password: "1234"
  },
  {
    email: "doctor1@email.com",
    firsName: "Amy",
    lastName: "Nguyen",
    gender: "Female",
    dob: "1990-12-25",
    userType: "physician",
    password: "1234"
  }
];

db.PatientRecord
  .deleteMany({})
  .then(() => db.PatientRecord.collection.insertMany(patientRecordSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.User
  .deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
