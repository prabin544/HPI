import React from 'react';
import { Row, CardDeck, Card } from "react-bootstrap";
import './About.css';

const AboutPage = () => {

return(

<body className="backimage">
 
    <Card.Title className="companyName">Millennial Health Inc.</Card.Title> 
    <Row className="companyImage"></Row>

      <Row className="companyRow">
            <Card>
              <Card.Body>
                <img src={require ("./DoctorOne.png")} alt="Doctor" className="leftFloat"/>
                <Card.Title className="descriptionHeader">OPTIMIZE PROVIDER TIME!</Card.Title> 
                <Card.Text>
                  The History of Present Illness (HPI) is a piece of documentation required by medical providers in their patient’s chart. Currently, providers are using dictation devices like Nuance that act like “Siri” to write the patient's HPI after meeting with the patient or while the patient is still in the room. Though the voice to text feature offers the provider some relief, we want to do more.  
                </Card.Text> 
              </Card.Body>
            </Card>
      </Row>

      <Row className="companyRow">
            <Card>
              <Card.Body>
              <img src={require ("./DoctorTwo.png")} alt="Doctor" className="rightFloat"/>
              <Card.Title className="descriptionHeader">A SOLUTION IS HERE . . . </Card.Title> 
                <Card.Text>
                <p>With our application, the patient will complete their own HPI prior to speaking with the provider. The patient will complete the HPI on a tablet provided by the hospital or doctors office. They can also use their own personal smart device. No speical app needed! They will log in or create an account to complete the HPI for each visit. The HPI is then generated. The provider is able to log into their admin profile and see the patients HPI. This ables the provider to review the HPI prior to walking into the room with the patient!</p>
                </Card.Text>        
              </Card.Body>
            </Card>
      </Row>

      <Row className="companyRow">
            <Card>
              <Card.Body>
              <img src={require ("./DoctorThree.png")} alt="Doctor" className="leftFloat"/>
              <Card.Title className="descriptionHeader">PROVIDERS ARE INFORMED BEFORE SEEING THE PATIENT!</Card.Title> 
                <Card.Text>
                <p>The provider is able to optimize their time with the patient. Oppose to spending 5-10 minutes with the patient obtaining and documenting the PHI, they will know the reason for the visit before seeing the actual patient. The provider is now able to spend the time with the patient diving deeper in the health concern or moveing to the next patient faster. </p>
                </Card.Text>        
              </Card.Body>
            </Card>
      </Row>

      <Row className="companyRow">
            <Card>
              <Card.Body>
              <img src={require ("./DoctorFour.png")} alt="Doctor" className="rightFloat"/>
              <Card.Title className="descriptionHeader">THIS IS ONLY THE START</Card.Title> 
                <Card.Text>
                <p>The HPI is just a fraction of the patients overall medical chart. This app is just touching the surface of ways to optimize the patient to provider relationship.</p>
                </Card.Text>        
              </Card.Body>
            </Card>
      </Row>

      <Row className="companyRow">
            <Card>
              <Card.Body>
              <Card.Title>ABOUT THE DEVELOPERS</Card.Title> 
                <Card.Text>
                <p>Below is information about the developers. We are students of SMU Coding Bootcamp, winter class of 2020. Please follow our success as we revolutionize healthcare one app at at time.</p>
                </Card.Text>        
              </Card.Body>
            </Card>
      </Row>



      <Row className="teamRow">
          <CardDeck>
          <Card>
              <Card.Body className="teamCard"> 
                  <Card.Title>Amy Keneson</Card.Title>
                  <Card.Text>
                  Amy is a Board Certified Family Nurse Practitioner with emergency room and urgent care background. She has a passion for advanced healthcare technology with a vision of efficient and effective medical applications to improve patient care.
                  </Card.Text>
              </Card.Body>

              <Card.Footer>
                  <Card.Link href="https://github.com/akeneson">Github Profile</Card.Link>
              </Card.Footer>
          </Card>
  
          <Card>
              <Card.Body className="teamCard">
                  <Card.Title>Andrew Freire</Card.Title>
                  <Card.Text>
                  Andrew is a Product Manager and UI/UX Designer at KIS Technologies. He has over six years of experience working for enterprise companies and start-ups. In his spare time, he  enjoys a variety of activities including reading, cooking, and gaming.
                  </Card.Text>
              </Card.Body>

              <Card.Footer>
                  <Card.Link href="https://github.com/AndyFreire">Github Profile</Card.Link>
              </Card.Footer>
          </Card>

          <Card>
              <Card.Body className="teamCard">
                  <Card.Title>Marlon Pacheco</Card.Title>
                  <Card.Text>
                  Marlon has a solid understanding of business processes, accounting and office technology with years of experience in Business Management, Finance and Government work. He is a detail oriented and problem solver who is cognizant of the big picture.
                  </Card.Text>
              </Card.Body>

              <Card.Footer>
                  <Card.Link href="https://github.com/marlonpacheco">Github Profile</Card.Link>
              </Card.Footer>
          </Card>

          </CardDeck>
    </Row>


    <Row className="teamRow">
          <CardDeck>
  
          <Card>
              <Card.Body className="teamCard">
                  <Card.Title>Prabin Singh</Card.Title>
                  <Card.Text>
                  Prabin is from Keller, Texas. He is currently enrolled in Southern Methodist University as Full Stack Web Developer program. He will need to provide some content about himself to fill this space as I was not able to find much about him after a sad attempt at stocking.
                  </Card.Text>
              </Card.Body>

              <Card.Footer>
                  <Card.Link href="https://github.com/prabin544">Github Profile</Card.Link>
              </Card.Footer>
          </Card>
  
          <Card>
              <Card.Body className="teamCard">
                  <Card.Title>Robin Renneke</Card.Title>
                  <Card.Text>
                  Robin has years of professional experience in client facing roles representing both the client needs and her employer. She has experience leading project requirements gathering sessions and transferring that into user stories that meet both client and internal needs.
                   </Card.Text>
              </Card.Body>

              <Card.Footer>
                  <Card.Link href="https://github.com/RRenneke">Github Profile</Card.Link>
              </Card.Footer>
          </Card>

          <Card>
              <Card.Body className="SMUCard">
                  <Card.Title>SMU BootCamp</Card.Title>
                  <Card.Text>
                  This team, are students at Southern Methodist University in the SMU Coding Boot Camp program. The full-stack curriculum includes: HTML5, CSS3, JavaScript, jQuery, Express.js, React.js, Node.js, progressive web apps, agile methodology, MongoDB, MySQL, Git, and more.
                  </Card.Text>
              </Card.Body>

              <Card.Footer>
                  <Card.Link href="https://techbootcamps.smu.edu/">Website</Card.Link>
              </Card.Footer>
          </Card>
          </CardDeck>
    </Row>


</body>

);
}
export default AboutPage;