import React, { useState, useEffect, useContext } from "react";
import "./HPICardStyle.css";
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import UserContext from '../../Context/UserContext';
import ErrorNotice from "../Error/ErrorNotice"
import InputContext from '../../Context/InputContext';
import Axios from "axios";

const HPICard = (props) => {
   const location = useLocation();
   useEffect(() => {
      console.log(location.values);
   }, [location]);

   let radiationText = "Error";
   if (location.values && location.values[4].Radiations.includes('N/A')) {
      radiationText = "Patient has no radiation symptoms";
   } else if (location.values && location.values[4].Radiations) {
      radiationText = "Patient has radiation to their " + location.values[4].Radiations.join(", ");
   }
   let AssSymptsText = "Error";
   if (location.values && location.values[5].AssSymps.includes('N/A')) {
      AssSymptsText = "Patient has no associated symptoms";
   } else if (location.values && location.values[5].AssSymps) {
      AssSymptsText = "The patient admits to associated symptoms " + location.values[5].AssSymps.join(", ");
   }
   let pallativesText = "Error";
   if (location.values && location.values[6].Pallatives.includes('N/A')) {
      pallativesText = "Patient has no pallatives symptoms";
   } else if (location.values && location.values[6].Pallatives) {
      pallativesText = "and better with " + location.values[6].Pallatives.join(", ");
   }
   let provocativesText = "Error";
   if (location.values && location.values[7].Provocatives.includes('N/A')) {
      provocativesText = "Patient has no provocatives symptoms";
   } else if (location.values && location.values[7].Provocatives) {
      provocativesText = "The patient's symptom is worse with " + location.values[7].Provocatives.join(", ");
   }
   let quantitiesText = "Error";
   if (location.values && location.values[8].Quantities.includes('N/A')) {
      quantitiesText = "Patient has no quantities symptoms";
   } else if (location.values && location.values[8].Quantities) {
      quantitiesText = "The patient's symptom is " + location.values[8].Quantities.join(", ");
   }


   const history = useHistory();
   const { userData } = useContext(UserContext);
   const { setUserData } = useContext(UserContext);
   const [error, setError] = useState();
   const user = [userData.user]
   const patientName = user[0].firstName + " " + user[0].lastName;
   const dob = user[0].dob
   const patientId = user[0].id
   const symptom = location.values[0].symptoms
   const assocSymptoms = location.values[2].Qualities
   const palliative = location.values[6].Pallatives
   const provocative = location.values[7].Provocatives
   const radiation = location.values[4].Radiations
   const severity = location.values[3].PainLevel
   
   let token = localStorage.getItem('auth-token');
   //redirects user to login page if not logged in
   // useEffect(() => {
   //    if (!userData.user) history.push("/login")
   //    console.log("HPI Card userData: ", [userData])
   // })
   useEffect(() => {
      const loginCheck = async () => {
      //   let token = localStorage.getItem('auth-token');
        if (token === null) {
          localStorage.setItem('auth-token', "");
          token = ""
        }
        
        const tokenRes = await Axios.post('/api/users/validToken', null,
          { headers: { 'x-auth-token': token } }
        );

        if (tokenRes.data) {
          const userRes = await Axios.get('/api/users/', {
            headers: { 'x-auth-token': token },
          });
          setUserData({
            token,
            user: userRes.data,
          })
        }
               //  console.log('hpi card userData', user)
      }
      loginCheck();
    }, []);

   let age = user[0].dob
   let re = /\d{4}/
   let bornYear = re.exec(age);
   let currYear = new Date().getFullYear()
   let userAge = currYear - bornYear[0];


   const hpi = ` ${patientName} is a ${userAge}-year old ${user[0].gender} who reports ${location.values ? location.values[0].symptoms : "Error"} for ${location.values ? location.values[1].Duration : "Error"} days. 
   Patient describes their symptom as ${location.values ? location.values[2].Qualities : "Error"}. ${radiationText}.
   Patient rates their pain as a ${location.values ? location.values[3].PainLevel : "Error"}/10. ${quantitiesText}.
   ${provocativesText}. ${pallativesText}. ${AssSymptsText}. `;

   const [requestInfo, setRequestInfo] = useState("");
   
   const submit = async (e) => {
      e.preventDefault();

      try {
         const newRecord = { user, patientName, patientId, dob, symptom, assocSymptoms, palliative, provocative, radiation, severity, hpi }
         const postResponse = await Axios({
            method: 'post',
            url: './api/patientrecords/',
            data: newRecord,
            headers: {'x-auth-token': token}
         });

         if(postResponse.status === 200) {
            setRequestInfo("Submissions successful");
         }
         console.log(postResponse);
         // await Axios.post("./api/patientrecords/", newRecord)
      } catch (err) {
         err.response.data.msg && setError(err.response.data.msg)
      }
   }

   console.log("record data: ", hpi)
   return (
      
      <Container>
         {error && (
            <ErrorNotice message={error} clearError={() => setError(undefined)} />
         )}
         {requestInfo && <div>{requestInfo}</div>}
         <Row>
            <Col md={{ span: 6, offset: 3 }}>
               <div className="card card-rounded m-4">
                  <div className="card-header">
                     <h3>HPI Generated</h3>
                  </div>
                  <div className="card-body">
                     <div className="form-group">
                        <p>
                           {user[0].firstName} {user[0].lastName} is a {userAge}-year old {user[0].gender} who reports {location.values ? location.values[0].symptoms : "Error"} for {location.values ? location.values[1].Duration : "Error"} days.
                              Patient describes their symptom as {location.values ? location.values[2].Qualities : "Error"}. {radiationText}.
                              Patient rates their pain as a {location.values ? location.values[3].PainLevel : "Error"}/10. {quantitiesText}.
                              {provocativesText}. {pallativesText}. {AssSymptsText}.
                           </p>
                     </div>
                     <div class="mt-4 mb-5">
                        <button type="button" class=" btn btn-lg btn-outline-secondary mr-2" onClick={submit}>
                           <i class="far fa-copy "></i> Submit
                           </button>

                        <button type="button" class="btn btn-lg btn-outline-primary" onClick={() => history.push("/home")}>
                           <i class="fas fa-file-download"></i> Go Back
                           </button>
                     </div>
                  </div>
               </div>
            </Col>
         </Row>

      </Container>
   );
}

export default HPICard;
