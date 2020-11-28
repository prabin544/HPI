import React, { useState } from "react";
import { Button, Container, Row, Col, Nav, Tab, Sonnet } from "react-bootstrap";
import PainLevel from '../PainLevel/PainLevel';
import Duration from '../Duration/DurationPage';
import HPI from '../HPI/HPIPage';
import "./HomePage.css"
import HPIPage from "../HPI/HPIPage";
import { InputProvider } from '../InputContext'


const Home = (props) => {
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
      'Toes'
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
    const [qualityInput, setQualityInput] = useState();
    const [radiationInput, setRadiationInput] = useState();
    const [assSympInput, setAssSympInput] = useState();
    const [pallativeInput, setPallativeInput] = useState();
    const [provocativeInput, setProvocativeInput] = useState();
    const [qunatityInput, setqunatityInput] = useState();

    function handleInput(e) {
      setSymptomInput({
        [e.target.name]: e.target.innerText
      });
      setQualityInput({
        [e.target.name]: e.target.innerText
      });
      setRadiationInput({
        [e.target.name]: e.target.innerText
      });
      setAssSympInput({
        [e.target.name]: e.target.innerText
      });
      setPallativeInput({
        [e.target.name]: e.target.innerText
      });
      setProvocativeInput({
        [e.target.name]: e.target.innerText
      });
      setqunatityInput({
        [e.target.name]: e.target.innerText
      });
    }
    const inputs = [
      {symptoms: symptomInput},
      {Qualities:qualityInput},
      {Radiations:radiationInput},
      {AssSymps:assSympInput},
      {Pallatives:pallativeInput},
      {Provocatives:provocativeInput},
      {Quantities: qunatityInput}
    ]
  return (
    <>
    <InputProvider value={inputs}>
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
                <Nav.Item>
                  <Nav.Link eventKey="third">Quality</Nav.Link>
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
                    <Button  color="success" className="Btn" onClick={(e)=>handleInput(e)} name="symptoms">{symptom}</Button>
                  ))}
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <h3>How long have you been experiencing symptoms?</h3>
                    <Duration />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <h3>What is the quality of the symptom(s) you are experiencing?</h3>
                    {Qualities.map((Quality) =>(
                      <Button  color="success" className="Btn" onClick={(e)=>handleInput(e)} name="Qualities">{Quality}</Button>
                    ))}
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <h3>Please describe your pain level.</h3>
                    <img src="https://www.prohealth.com/wp-content/uploads/2015/04/pain-scale-859x305.jpg"></img>
                    <PainLevel/>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <h3>Where are the symptoms radiating from?</h3>
                    {Radiations.map((Radiation) =>(
                      <Button  color="success" className="Btn" onClick={(e)=>handleInput(e)} name="Radiations">{Radiation}</Button>
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
                    {Quantities.map((Qunatity) =>(
                      <Button  color="success" className="Btn" onClick={(e)=>handleInput(e)} name="Qunatities">{Qunatity}</Button>
                    ))}
                </Tab.Pane>
                <Tab.Pane eventKey="tenth">
                  <HPI />
                </Tab.Pane>
              </Tab.Content>
            </Col>
            <Row>
              <Button className="submitBtn" >Submit</Button>
            </Row>
          </Row>
        </Tab.Container>
        
      </Container>
    </InputProvider>
    </>
  );
};

export default Home;