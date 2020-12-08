import React, { useState, useContext } from "react";
import { Button, Container, Row, Col, Nav, Tab } from "react-bootstrap";
import PainLevel from '../PainLevel/PainLevel';
import Duration from '../Duration/DurationPage';
import "./HomePage.css"
import HPIPage from "../HPI/HPIPage";
import InputContext from '../../Context/InputContext'
import { useHistory } from 'react-router-dom';


const Home = (props) => {
  const history = useHistory();
  const handleSubmit = event => {
    history.push({
        pathname: '/hpi',
        values: newUserInput
    });
  };
  const symptoms = [
    "Head",
    "Eyes",
    "Ears",
    "Nose",
    "COVID",
    "Neck",
    "Back",
    "Arms",
    "Wrist",
    "Hand",
    "Legs",
    "Ankle",
    "Foot",
    "Chest",
    "Cough",
    "Shortness of Breath",
    "Abdomen",
    "Urinary"
  ]
  const Durations = [
    "Today",
    "Yesterday",
    "2 Days ago",
    "3 Days ago",
    "4 Days ago",
    "5 Days ago",
    "6 Days ago"
  ]
    const Qualities = [
      "Sharp",
      "Burning",
      "Pressure",
      "Knifelike",
      "Sore",
      "Aching",
      "Stabbing"
  ]
    const PainLevel = [
      "0","1","2","3","4","5","6","7","8","9","10"
  ]
    const Radiations = [
      "Head",
      'Neck',
      'Arm',
      'Wrist',
      'Hand',
      'Finger',
      'Chest',
      'Upper Abdomen',
      'Lower Abdomen',
      'Upper Back',
      'Lower Back',
      'Groin',
      'Legs',
      'Calf',
      'Ankle',
      'Foot',
      'Toes',
      'N/A'
  ]
    const AssSymps = [
      '*Fatigue',
      '*Fever',
     '*Chills',
      'Abdominal Pain',
      'Nausea',
      'Vomiting',
      'Diarrhea',
      'Constipation',
      'Cough',
      'Phlegm',
      'Headache',
      'Dizziness',
      'Earache',
      'Shortness of Breath',
      'Chest Pain',
      'Trouble Eating',
      'Rash',
      'Bleeding',
      'Bruising',
      'Trouble Talking',
      'Trouble Swallowing',
      'Sore Throat',
      'Joint Pain',
      'Trouble Walking',
      'Vision Changes',
      'Eye Discharge',
      'Urinary Frequency',
      'Urinary Urgency',
      'Painful Urination'
  ]
    const Pallatives = [
        "Rest", "Ice", "Heat", "Bandage", "Elevation", "Ibuprofen", "Tylenol", "Over-the-Counter Medications", "Inhaler", "Nebulizer Treatments", "Prescribed Medications", "Anti-Nausea Medication", "Anti-Dizziness Medication", "Cough Medication", "Antibiotics", "Ear Drops", "Splinting", "Standing", "Sitting", "Walking"
  ]
    const Provocatives = [
      'movement',
      'Rest',
      'Ice',
      'Heat',
      'Bandage',
      'Elevation',
      'Ibuprofen',
      'Tylenol',
      'Over-the-Counter Medications',
      'Splinting',
      'Standing',
      'Sitting',
      'Walking',
      'Running',
      'Touching',
      'Pushing',
      'Pulling',
      'Lifting',
      'Working Out',
      'Typing',
      'Writing',
      'Cooking',
      'Washing Dishes',
      'Doing Laundry',
      'Mopping',
      'Mowing the Grass',
      'Walking Long Distances',
      'Sitting for Long Periods of Time'
  ]
    const Quantities = [
      'Intermittent',
      'Constant',
      'Gradual',
      'Acute Onset'
  ]
  
    
    const [symptomInput, setSymptomInput] = useState();
    const [durationInput, setDurationInput] = useState();
    const [durationDivInput, setdurationDivInput] = useState(false);
    const [qualityInput, setQualityInput] = useState("quality");
    const [qualityDivInput, setqualityDivInput] = useState(false);
    const [radiationInput, setRadiationInput] = useState();
    const [painInput, setPainInput] = useState();
    const [assSympInput, setAssSympInput] = useState();
    const [pallativeInput, setPallativeInput] = useState();
    const [provocativeInput, setProvocativeInput] = useState();
    const [qunatityInput, setqunatityInput] = useState();

    
    function handleInput(e) {
      //CREATE CONDITION ON THE CLICK LISTENER TO PROPERLY SET THE STATE
      
      //setqualityDivInput(qualityDivInput => ({ qualityDivInput: !qualityDivInput }));
      if(e.target.name==="symptoms"){
        setdurationDivInput(durationDivInput => ({ durationDivInput: !durationDivInput }));
        setSymptomInput( e.target.innerText)
      }
      if(e.target.name==="Qualities"){
        setQualityInput( e.target.innerText)
      }
      if(e.target.name==="PainLevel"){
        setPainInput( e.target.innerText)
      }
      if(e.target.name==="Radiations"){
        setRadiationInput( e.target.innerText)
      }
      if(e.target.name==="AssSymps"){
        setAssSympInput( e.target.innerText)
      }
      if(e.target.name==="Pallatives"){
        setPallativeInput( e.target.innerText)
      }
      if(e.target.name==="Provocatives"){
        setProvocativeInput( e.target.innerText)
      }
      if(e.target.name==="Quantities"){
        setqunatityInput( e.target.innerText)
      }
    }
    
    const inputs = [
      {symptoms: symptomInput},
      {Duration: durationInput},
      {Qualities:qualityInput},
      {PainLevel:painInput},
      {Radiations:radiationInput},
      {AssSymps:assSympInput},
      {Pallatives:pallativeInput},
      {Provocatives:provocativeInput},
      {Quantities: qunatityInput}
    ]

    let newUserInput, userInputCon;
    newUserInput = useContext(InputContext)
    userInputCon = inputs;
    newUserInput=userInputCon;

    

    
    
  return (
    <>
    {/* <InputProvider value={inputs}> */}
    {console.log("SYMP", symptomInput)}
    {console.log("INPUTS", inputs)}
    {console.log("context works!", newUserInput)}
      <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item className="tabs">
                  <Nav.Link eventKey="first">Symptom</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Duration</Nav.Link>
                </Nav.Item>
                <Nav.Item >
                  <Nav.Link eventKey="third" >Quality</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Severity</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Radiation</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sixth">Associated Symptoms</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="seventh">Pallative</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="eigth">Provocative</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="ninth">Quantity</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content >
                <Tab.Pane eventKey="first">
                  <h3>What is your main symptom today? (Pick one)</h3>
                  {symptoms.map((symptom) =>(
                    <Button  color="success" className="Btn" onClick={(e)=>{handleInput(e);  }} name="symptoms">{symptom}</Button>
                  ))}
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <a>Please answer previous question</a>
                    <div className={durationDivInput ? "" : "hidden"}>
                      <h3>How long have you been experiencing symptoms?</h3>
                        <Duration onChangeHandler={setDurationInput}/>
                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third" >
                    <div className={qualityDivInput ? "" : "hidden"}>
                      <h3>What is the quality of the symptom(s) you are experiencing?</h3>
                        {Qualities.map((Quality) =>(
                          <Button color="success" className="Btn" onClick={(e)=>handleInput(e)} name="Qualities">{Quality}</Button>
                        ))}
                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <h3>Please describe your pain level.</h3>
                    <img src="https://www.prohealth.com/wp-content/uploads/2015/04/pain-scale-859x305.jpg" alt="pain"></img>
                    {/* <PainLevel /> */}
                    {PainLevel.map((pain) =>(
                      <Button  color="success" className="Btn painBtn" onClick={(e)=>handleInput(e)} name="PainLevel">{pain}</Button>
                    ))}
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <h3>Where are the symptoms radiating from?</h3>
                    {Radiations.map((Radiation) =>(
                      <Button  multiple color="success" className="Btn" onClick={(e)=>handleInput(e)} name="Radiations">{Radiation}</Button>
                    ))}
                </Tab.Pane>
                <Tab.Pane eventKey="sixth">
                  <h3>Are you experiencing any associated symptoms?</h3>
                    {AssSymps.map((AssSymp) =>(
                      <Button  color="success" className="Btn" onClick={(e)=>handleInput(e)} name="AssSymps">{AssSymp}</Button>
                    ))}
                </Tab.Pane>
                <Tab.Pane eventKey="seventh">
                  <h3>Have you tried any of the following to ease your pain/symptoms?</h3>
                    {Pallatives.map((Pallative) =>(
                      <Button  color="success" className="Btn" onClick={(e)=>handleInput(e)} name="Pallatives">{Pallative}</Button>
                    ))}
                </Tab.Pane>
                <Tab.Pane eventKey="eigth">
                  <h3>Do any of the following things make your symptoms worse?</h3>
                    {Provocatives.map((Provocative) =>(
                      <Button  color="success" className="Btn" onClick={(e)=>handleInput(e)} name="Provocatives">{Provocative}</Button>
                    ))}
                </Tab.Pane>
                <Tab.Pane eventKey="ninth">
                  <h3>How often do you experience symptoms?</h3>
                    {Quantities.map((Quantity) =>(
                      <Button  color="success" className="Btn" onClick={(e)=>handleInput(e)} name="Quantities">{Quantity}</Button>
                    ))}
                </Tab.Pane>
                <Tab.Pane eventKey="tenth">
                  <HPIPage />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
      <Row className="submitBtn">
        <Button onClick={(e)=>handleSubmit(e)}>Submit</Button>
      </Row>
    </>
  );
};

export default Home;