
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../Context/UserContext';
import Axios from 'axios';
import ErrorNotice from "../Error/ErrorNotice"
import { Form, Button, Card, Row } from "react-bootstrap";
import './LoginPage.css';
import Time from '../CurrTime/CurrTimePage'


const LoginPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRes = await Axios.post(
        "./api/users/login",
        loginUser
      );
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
          <Card.Title><h4>Log In</h4></Card.Title>

        </Card.Header>
        <Card.Body>
          <Card.Text><Form className="form" onSubmit={submit}>
            <Form.Group controlId="formBasicEmail">
              {error && (
                <ErrorNotice message={error} clearError={() => setError(undefined)} />
              )}
              <Form.Label htmlFor="login-email">Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
    </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label htmlFor="login-password">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit" value="Log in">
              Submit
  </Button>
          </Form>
          </Card.Text>

        </Card.Body>
        <Time />
      </Card>
    </Row>

    //   <h1>Log in</h1>
    //   {error && (
    //     <ErrorNotice message={error} clearError={() => setError(undefined)} />
    //   )}
    //   <form className="form" onSubmit={submit}>



    //     <label htmlFor="login-email">Email</label>
    //     <input
    //       id="login-email"
    //       type="email"
    //       onChange={(e) => setEmail(e.target.value)}
    //     />

    //     <label htmlFor="login-password">Password</label>
    //     <input
    //       id="login-password"
    //       type="password"
    //       onChange={(e) => setPassword(e.target.value)}
    //     />

    //     <input type="submit" value="Log in" />
    //   </form>
    // </div>

    // <Card style={{ width: '25rem'}}>
    //     <Card.Body>

    // <Form>
    //   <Form.Group controlId="formBasicEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
    //     <Form.Text className="text-muted">
    //       We'll never share your email with anyone else.
    //     </Form.Text>
    //   </Form.Group>

    //   <Form.Group controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
    //   </Form.Group>

    //   {/* this button should take the user to the patient feed page */}
    //   <Button variant="primary" type="submit">
    //     Submit
    //   </Button>

    //   {/* this button should take the user to the Provider Login Page */}
    //   <Button variant="primary" type="submit" label="NewPatientButton">
    //     New Patient
    //   </Button>
    // </Form>
    // </Card.Body>
    // </Card>

  );
}
export default LoginPage;