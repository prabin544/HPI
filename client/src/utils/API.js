import axios from "axios";

// The get patient records route to get our patient records
export default {
  getPatientRecords: function () {
    return axios.get("/api/patientrecords");
  }
};
