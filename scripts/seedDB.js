const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/hpigenerator"
);

const patientRecordSeed = [
  {
    patientName: "Amy K",
    dob: "2020-11-18",
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
    hpi: "Patient reports back pain after coding bootcamp",
    status: 'closed'
  },
  {
    patientName: "Amy K",
    dob: "2020-11-18",
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
    hpi: "Patient reports back pain after coding bootcamp"
  },
  {
    patientName: "Marlon P",
    dob: "2020-11-18",
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
    hpi: "Patient reports brainfreeze while eating ice cream"
  },
  {
    patientName: "Robin R",
    dob: "2020-11-18",
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
    hpi: "Robin is a 22 year-old Female who reports pain for 0 days. Patient describes their symptom as quality. Patient has radiation to their . Patient rates their pain as a /10. The patient's symptom is . The patient's symptom is worse with and better with . The patient admits to . The patient denies associated symptoms** fever, chills, or fatigue."
  },
  {
    patientName: "Prabin",
    dob: "2020-11-18",
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
    hpi: "Patient reports fun times after visiting Disneyland"
  }
];

const userSeed = [
  {
    email: "admin@email.com",
    firstName: "Admin",
    lastName: "User",
    gender: "Hermaphrodite",
    userType: "admin",
    dob: "2020-11-18",
    password: "$2b$10$3fi4525qV1oTpCTuh7lX.ucASZ5yl6vysezZCHDmdVIneTuZ9.ssu"
  },
  {
    email: "patient1@email.com",
    firstName: "John",
    lastName: "Doe",
    gender: "Male",
    userType: "patient",
    dob: "1980-01-31",
    password: "$2b$10$3fi4525qV1oTpCTuh7lX.ucASZ5yl6vysezZCHDmdVIneTuZ9.ssu"
  },
  {
    email: "doctor1@email.com",
    firstName: "Amy",
    lastName: "Nguyen",
    gender: "Female",
    dob: "1990-12-25",
    userType: "physician",
    password: "$2b$10$3fi4525qV1oTpCTuh7lX.ucASZ5yl6vysezZCHDmdVIneTuZ9.ssu"
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
