import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../Context/UserContext';
import Axios from 'axios';
import ErrorNotice from "../Error/ErrorNotice"
import { Form, Button, Card, Row } from "react-bootstrap";
import './Register.css'


const RegisterPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [gender, setGender] = useState();
  const [dob, setDob] = useState();
  const [error, setError] = useState();


  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const newUser = { email, password, passwordCheck, firstName, lastName, gender, dob };
      await Axios.post("./api/users/register", newUser);
      const loginRes = await Axios.post("./api/users/login", {
        email,
        password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/home");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <Row className="d-flex justify-content-center px-5">
    <Card className="col-md-4 bg-white">
      <Card.Header className="bg-pink">
        <Card.Title><h4>Register</h4></Card.Title>
      
      </Card.Header>
      <Card.Body>
        <Card.Text><Form className="form" onSubmit={submit}>
      <Form.Group controlId="formBasicEmail">

        <Form.Label htmlFor="register-email">Email address</Form.Label>
        <Form.Control type="email" id="register-email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
    
      <Form.Group controlId="formBasicPassword">
        <Form.Label htmlFor="register-password">Password</Form.Label>
        <Form.Control type="password" id="register-password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>

      <Form.Group controlId="formBasicConfirmPassword">
        <Form.Label htmlFor="confirm password"> Re-Enter Password</Form.Label>
        <Form.Control type="password" id="passwordCheck" placeholder="Verify Password" onChange={(e) => setPasswordCheck(e.target.value)}/>
      </Form.Group>

      <Form.Group controlId="formBasicFirst">
        <Form.Label htmlFor="register-display-firstName">First Name</Form.Label>
        <Form.Control type="text" id="register-display-firstName" placeholder="Enter First Name" onChange={(e) => setFirstName(e.target.value)}/>
      </Form.Group>

      <Form.Group controlId="formBasicLast">
        <Form.Label htmlFor="register-display-lastName">Last Name</Form.Label>
        <Form.Control type="text" id="register-display-lastName" placeholder="Enter Last Name" onChange={(e) => setLastName(e.target.value)}/>
      </Form.Group>

      <Form.Group controlId="formBasicDob">
        <Form.Label htmlFor="register-display-birthdate">Date of Birth</Form.Label>
        <Form.Control type="date" id="register-display-birthdate" placeholder="Enter Date of Birth" onChange={(e) => setDob(e.target.value)}/>
      </Form.Group>

      <Form.Group controlId="formBasicGender">
        <Form.Label htmlFor="register-display-gender">Gender</Form.Label>
        <Form.Control type="text" id="register-display-gender" placeholder="Enter Your Gender at Birth" onChange={(e) => setGender(e.target.value)}/>
      </Form.Group>
      
      <Button variant="primary" type="submit" value="Register">
        Submit
      </Button>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
    </Form>
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Row>
  );
}

export default RegisterPage;