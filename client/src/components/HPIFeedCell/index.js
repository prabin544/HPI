import React, { useState, useEffect, useRef } from "react";
import { UncontrolledAlert } from 'reactstrap';
import "./style.css";
import API from "../../utils/API";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const HPIFeedCell = () => {

    const [patientRecords, setPatientRecords] = useState([]);

    
    useEffect(()=> {
        API.getPatientRecords()
        .then(res => {
            console.log("Patient Records: ", res);
            setPatientRecords(res);
        })
        .catch(err => console.log(err));

    }, []);

    //usestate to copy 

    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

    //function to copy
    function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess(<UncontrolledAlert color="success" fade={true}>Copied!</UncontrolledAlert>);
    };

    return (
        <div className="container">

            {patientRecords.data ? patientRecords.data.map((patientRecord) => {

                return (
                    <div className="card card-rounded m-4">
                        <div className="card-header">
                <h3><i class="fa fa-user" aria-hidden="true"></i>{patientRecord.patientName}</h3>
                            <h5><FontAwesomeIcon icon="birthday-cake" className="funIcons"/>DOB: {patientRecord.dob}</h5>
                            <h5><FontAwesomeIcon icon="stethoscope" className="funIcons" />Reason for Visit: {patientRecord.symptom}</h5>
                            <h5><FontAwesomeIcon icon="calendar"className="funIcons" />Date of Visit: {patientRecord.apptDate} </h5>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label for="HPItextarea">HPI</label>
                                <textarea className="form-control" rows="4" ref={textAreaRef}>{patientRecord.hpi}
                                </textarea>
                            </div>

                            <div className="d-flex bd-highlight mb-3">
                                <div className="p-2">
                                    <button type="button" patientId={patientRecord.id} className=" btn btn-lg btn-outline-secondary mr-2" onClick={copyToClipboard}>
                                        <i className="far fa-copy "></i> Copy
                            </button>{copySuccess}
                                </div>
                                <div className="p-2">
                                    <button type="button" className="btn btn-lg btn-outline-primary">
                                        <i className="fas fa-file-download"></i> Download PDF
                            </button>
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

