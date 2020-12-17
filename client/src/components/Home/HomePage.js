import React, { useState, useContext, useEffect } from "react";
import { Button, Container, Row, Col, Nav, Tab } from "react-bootstrap";
import PainLevel from '../PainLevel/PainLevel';
import Duration from '../Duration/DurationPage';
import "./HomePage.css"
import HPIPage from "../HPI/HPIPage";
import InputContext from '../../Context/InputContext';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import UserContext from '../../Context/UserContext';
import ErrorNotice from "../Error/ErrorNotice"


const Home = (props) => {
  const history = useHistory();
  const { userData } = useContext(UserContext);
  const { setUserData } = useContext(UserContext);
  const [error, setError] = useState();
  let token = localStorage.getItem('auth-token');



  useEffect(() => {

    const loginCheck = async () => {
      // console.log(token)
      if (!token) {
        localStorage.setItem('auth-token', "");
        token = "";
        history.push("/login")
      }


      const tokenRes = await Axios.post('/api/users/validToken', null,
        { headers: { 'x-auth-token': token } }
      );
      // console.log('token response', tokenRes)
      if (tokenRes.data) {
        const userRes = await Axios.get('/api/users/', {
          headers: { 'x-auth-token': token },
        });
        setUserData({
          token,
          user: userRes.data,
        }
        )
      }
    }
    loginCheck();
  }, []);

  // useEffect(()=> {
  //     console.log(userData.user)
  //     if(!userData.user) history.push("/login")
  // })
  // console.log("Homepage: ", userData)
  //redirects user to login page if not logged in
  // useEffect( async ()=> {
  //   // e.preventDefault();
  //   try {
  //     const currentToken = userData.token;
  //     console.log('currentToken', currentToken)
  //     // await Axios.post(
  //     //   "./api/users/validToken",
  //     //   currentToken
  //     // );
  //     await localStorage.setItem("auth-token", currentToken);
  //   } catch (err) {
  //     err.response.data.msg && setError(err.response.data.msg);
  //   }
  // })

  const handleSubmit = event => {
    history.push({
      pathname: '/hpi',
      values: newUserInput
    });
  };
  const symptoms = [
    "abdominal pain",
    "arm pain",
    "ankle pain",
    "back pain",
    "chest pain",
    "confusion",
    "congestions",
    "cough",
    "COVID symptoms",
    "COVID exposure",
    "diarrhea",
    "eye pain",
    "eye discharge",
    "eye swelling",
    "ear pain",
    "ear discharge",
    "ear swelling",
    "finger pain",
    "flu-like symptoms",
    "foot pain",
    "hand pain",
    "headache",
    "leg pain",
    "neck pain",
    "nausea",
    "runny nose",
    "shortness of breath",
    "urinary",
    "vomiting",
    "wrist pain",
  ]
  const Durations = [
    "today",
    "yesterday",
    "2 Days ago",
    "3 Days ago",
    "4 Days ago",
    "5 Days ago",
    "6 Days ago"
  ]
  const Qualities = [
    "sharp",
    "burning",
    "pressure",
    "knifelike",
    "sore",
    "aching",
    "atabbing"
  ]
  const PainLevel = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"
  ]
  const Radiations = [
    "head",
    'neck',
    'arm',
    'wrist',
    'hand',
    'finger',
    'chest',
    'upper abdomen',
    'lower abdomen',
    'upper back',
    'lower back',
    'groin',
    'legs',
    'calf',
    'ankle',
    'foot',
    'toes',
    'N/A'
  ]
  const AssSymps = [
    'fatigue',
    'fever',
    'chills',
    'abdominal pain',
    'nausea',
    'vomiting',
    'diarrhea',
    'constipation',
    'cough',
    'phlegm',
    'headache',
    'dizziness',
    'earache',
    'shortness of breath',
    'chest pain',
    'trouble eating',
    'rash',
    'bleeding',
    'bruising',
    'trouble talking',
    'trouble swallowing',
    'sore throat',
    'joint pain',
    'trouble walking',
    'vision changes',
    'eye discharge',
    'urinary frequency',
    'urinary urgency',
    'painful urination',
    'N/A'
  ]
  const Pallatives = [
    "rest", "ice", "heat", "bandage", "elevation", "ibuprofen", "tylenol", "over-the-Counter medications", "inhaler", "nebulizer treatments", "prescribed medications", "anti-nausea medication", "anti-dizziness medication", "cough medication", "antibiotics", "ear drops", "dplinting", "standing", "sitting", "walking", "N/A"
  ]
  const Provocatives = [
    'movement',
    'rest',
    'splinting',
    'standing',
    'sitting',
    'walking',
    'running',
    'touching',
    'pushing',
    'pulling',
    'lifting',
    'working out',
    'typing',
    'writing',
    'activities of daily living'
  ]
  const Quantities = [
    'intermittent',
    'constant',
    'gradual',
    'acute onset',
    'N/A'
  ]


  const [symptomInput, setSymptomInput] = useState();
  const [durationInput, setDurationInput] = useState();
  //const [durationDivInput, setdurationDivInput] = useState(false);
  const [qualityInput, setQualityInput] = useState("quality");
  //const [qualityDivInput, setqualityDivInput] = useState(true);
  const [radiationInput, setRadiationInput] = useState([]);
  const [painInput, setPainInput] = useState();
  const [assSympInput, setAssSympInput] = useState([]);
  const [pallativeInput, setPallativeInput] = useState([]);
  const [provocativeInput, setProvocativeInput] = useState([]);
  const [qunatityInput, setqunatityInput] = useState([]);
  const [qunatityDivInput, setqunatityDivInput] = useState(false);
  const [tabRequest, setEnabled] = useState(true)


  function handleInput(e) {
    //CREATE CONDITION ON THE CLICK LISTENER TO PROPERLY SET THE STATE

    //setqualityDivInput(qualityDivInput => ({ qualityDivInput: !qualityDivInput }));
    if (e.target.name === "symptoms") {
      //setdurationDivInput(durationDivInput => ({ durationDivInput: !durationDivInput }));
      setSymptomInput(e.target.innerText)
    }
    if (e.target.name === "Qualities") {
      setQualityInput(e.target.innerText)
    }
    if (e.target.name === "PainLevel") {
      setPainInput(e.target.innerText)
    }
    if (e.target.name === "Radiations") {
      const radiationSymptom = e.target.innerText;
      if (!radiationInput.includes(radiationSymptom)) {
        setRadiationInput([...radiationInput, radiationSymptom]);
      }
    }
    if (e.target.name === "AssSymps") {
      //setAssSympInput( e.target.innerText)
      const assSymptom = e.target.innerText;
      if (!assSympInput.includes(assSymptom)) {
        setAssSympInput([...assSympInput, assSymptom]);
      }
    }
    if (e.target.name === "Pallatives") {
      //setPallativeInput( e.target.innerText)
      const pallativesSymptom = e.target.innerText;
      if (!pallativeInput.includes(pallativesSymptom)) {
        setPallativeInput([...pallativeInput, pallativesSymptom]);
      }
    }
    if (e.target.name === "Provocatives") {
      //setProvocativeInput( e.target.innerText)
      const provocativesSymptom = e.target.innerText;
      if (!provocativeInput.includes(provocativesSymptom)) {
        setProvocativeInput([...provocativeInput, provocativesSymptom]);
      }

    }
    if (e.target.name === "Quantities") {
      setqunatityDivInput(qunatityDivInput => ({ qunatityDivInput: !qunatityDivInput }));
      //setqunatityInput( e.target.innerText)
      const quantitiesSymptom = e.target.innerText;
      if (!qunatityInput.includes(quantitiesSymptom)) {
        setqunatityInput([...qunatityInput, quantitiesSymptom]);
      }

    }
  }

  const inputs = [
    { symptoms: symptomInput },
    { Duration: durationInput },
    { Qualities: qualityInput },
    { PainLevel: painInput },
    { Radiations: radiationInput },
    { AssSymps: assSympInput },
    { Pallatives: pallativeInput },
    { Provocatives: provocativeInput },
    { Quantities: qunatityInput }
  ]

  let newUserInput, userInputCon;
  newUserInput = useContext(InputContext)
  userInputCon = inputs;
  newUserInput = userInputCon;

  // if(symptomInput !== ""){
  //   setEnabled(false)
  // }

  return (
    <>
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item className="tabs">
                  <Nav.Link eventKey="first">Symptom</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" >Duration</Nav.Link>
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
                  {symptoms.map((symptom) => (
                    <Button color="success" className="Btn" onClick={(e) => { handleInput(e); e.target.style.background = "gray" }} name="symptoms">{symptom}</Button>
                  ))}
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div>
                    <h3>How long have you been experiencing symptoms?</h3>
                    <Duration onChangeHandler={setDurationInput} />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third" >
                  {/* <div className={qualityDivInput ? "" : "hidden"}> */}
                  <div>
                    <h3>Please select the words that best describe your symptoms.</h3>
                    {Qualities.map((Quality) => (
                      <Button color="success" className="Btn" onClick={(e) => { handleInput(e); e.target.style.background = "gray" }} name="Qualities">{Quality}</Button>
                    ))}
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <h3>Please pick the severity of your symptoms.</h3>
                  <img src="https://www.prohealth.com/wp-content/uploads/2015/04/pain-scale-859x305.jpg" alt="pain"></img>
                  {/* <PainLevel /> */}
                  {PainLevel.map((pain) => (
                    <Button color="success" className="Btn painBtn" onClick={(e) => { handleInput(e); e.target.style.background = "gray" }} name="PainLevel">{pain}</Button>
                  ))}
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <h3>Where are the symptoms radiating to?</h3>
                  {Radiations.map((Radiation) => (
                    <Button color="success" className="Btn" onClick={(e) => { handleInput(e); e.target.style.background = "gray" }} name="Radiations">{Radiation}</Button>
                  ))}
                </Tab.Pane>
                <Tab.Pane eventKey="sixth">
                  <h3>Please select other symptoms that you are experiencing</h3>
                  {AssSymps.map((AssSymp) => (
                    <Button color="success" className="Btn" onClick={(e) => { handleInput(e); e.target.style.background = "gray" }} name="AssSymps">{AssSymp}</Button>
                  ))}
                </Tab.Pane>
                <Tab.Pane eventKey="seventh">
                  <h3>Which of the following have you tried ease your pain/symptoms?</h3>
                  {Pallatives.map((Pallative) => (
                    <Button color="success" className="Btn" onClick={(e) => { handleInput(e); e.target.style.background = "gray" }} name="Pallatives">{Pallative}</Button>
                  ))}
                </Tab.Pane>
                <Tab.Pane eventKey="eigth">
                  <h3>Please let us know what makes your symptoms worse?</h3>
                  {Provocatives.map((Provocative) => (
                    <Button color="success" className="Btn" onClick={(e) => { handleInput(e); e.target.style.background = "gray" }} name="Provocatives">{Provocative}</Button>
                  ))}
                </Tab.Pane>
                <Tab.Pane eventKey="ninth">
                  <div >
                    <h3>How often do you experience symptoms?</h3>
                    {Quantities.map((Quantity) => (
                      <Button color="success" className="Btn" onClick={(e) => { handleInput(e); e.target.style.background = "gray" }} name="Quantities">{Quantity}</Button>
                    ))}
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="tenth">
                  <HPIPage />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
      {/* {error && (
    <ErrorNotice message={error} clearError={() => setError(undefined)} />
  )} */}
      <Row >
        <Col md={{ span: 6, offset: 6 }}>
          <div className={qunatityDivInput ? "" : "hidden"} style={{ paddingTop: "20px" }} >
            <Button variant="success" onClick={(e) => handleSubmit(e)}>Next</Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Home;