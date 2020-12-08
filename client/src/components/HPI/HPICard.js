import React, { useState, useEffect  } from "react";
import "./HPICardStyle.css";
import {Container, Row, Col} from 'react-bootstrap';
import { useLocation } from "react-router-dom";

import InputContext from '../../Context/InputContext';

const HPICard = (props) => {
    const location = useLocation();
    useEffect(() => {
        console.log(location.values); 
     }, [location]);
     
    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                <div className="card card-rounded m-4">
                    <div className="card-header">
                        <h3>HPI Generated</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <p>
                                Patient is a 44-year old female who reports {location.values ? location.values[0].symptoms : "Error" } pain for {location.values ? location.values[1].Duration : "Error" } days. 
                                Patient describes their symptom as {location.values ? location.values[2].Qualities : "Error" }. Patient has radiation to their {location.values ? location.values[4].Radiations : "Error" }.
                                Patient rates their pain as a {location.values ? location.values[3].PainLevel : "Error" }/10. The patient's symptom is {location.values ? location.values[8].Quantities : "Error" }.
                                The patient's symptom is worse with {location.values ? location.values[7].Provocatives : "Error" } and better with {location.values ? location.values[6].Pallatives : "Error" }.
                                The patient admits to {location.values ? location.values[5].AssSymps : "Error" }. 
                                The patient denies associated symptoms** fever, chills, or fatigue.
                            </p>
                        </div>
                    </div>
                </div>
                </Col>
            </Row>
            
        </Container>
    );
}

export default HPICard;

