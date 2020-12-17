import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import API from "../../utils/API";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DownloadPDFButton from "../DownloadPDFButton";
import CopyButton from "../CopyButton";


const HPIFeedCell = () => {

    const [patientRecords, setPatientRecords] = useState([]);

    useEffect(() => {
        API.getPatientRecords()
            .then(res => {
                console.log("Patient Records: ", res);
                setPatientRecords(res);
            })
            .catch(err => console.log(err));

    }, []);

    return (
        <div className="container">

            {patientRecords.data ? patientRecords.data.map((patientRecord) => {

                return (
                    <div className="card card-rounded m-4">
                        <div className="card-header">
                            <h3><i class="fa fa-user" aria-hidden="true"></i>{patientRecord.patientName}</h3>
                            <h5><FontAwesomeIcon icon="birthday-cake" className="funIcons" />DOB: {patientRecord.dob}</h5>
                            <h5><FontAwesomeIcon icon="stethoscope" className="funIcons" />Reason for Visit: {patientRecord.symptom}</h5>
                            <h5><FontAwesomeIcon icon="calendar" className="funIcons" />Date of Visit: {patientRecord.apptDate} </h5>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label for="HPItextarea">HPI</label>
                                <textarea className="form-control" rows="4">{patientRecord.hpi}
                                </textarea>
                            </div>

                            <div className="d-flex bd-highlight mb-3">
                                <div className="p-2">
                                    <CopyButton textToCopy={patientRecord.hpi}/>
                                </div>
                                <div className="p-2">
                                    <DownloadPDFButton patient={patientRecord.patientName} hpi={patientRecord.hpi}/>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            }) : "No Patients found!"}
        </div>
    );
}

export default HPIFeedCell;

