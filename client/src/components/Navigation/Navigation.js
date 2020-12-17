import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Form, Jumbotron, Container, Row, Col, Card } from "react-bootstrap";
import Time from '../CurrTime/CurrTimePage'
// import LogOptions from "../LogOptions/LogOptions"
import UserContext from '../../Context/UserContext';
import { useHistory } from 'react-router-dom';
import './Navigation.css';


const Navigation = () => {
  const { userData } = useContext(UserContext);
  const { setUserData } = useContext(UserContext);
  const history = useHistory();
  const user = [userData.user];
  console.log('USER DATA:', user)

  const register = () => history.push('/register')
  const login = (e) => {
    e.preventDefault();
    history.push('/login')
  }

  const logout = (e) => {
    e.preventDefault();

    setUserData({
      token: undefined,
      user: undefined
    });
    localStorage.setItem("auth-token", "");
    history.push('/login')
  };




  return (
    <div>
      <div className="backimage mb-5">
        <Container>
          <Card.Title className="companyName">Millennial Health Inc.</Card.Title>
        </Container>
      </div>

      <Navbar collapseOnSelect expanded={true} expand="sm" className="mb-5">
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto ">


            <Nav.Link eventKey="2" href="/about"><h5>ABOUT US</h5></Nav.Link>
            {userData.user ? (
              <>
                <Nav.Link eventKey="1" href="/home"><h5>ADD APPOINTMENT</h5></Nav.Link>
                <Nav.Link eventKey="6" href="/feed"><h5>HISTORY</h5></Nav.Link>
                <Nav.Link eventKey="3" onClick={logout} href="/"><h5>LOGOUT</h5></Nav.Link>
              </>
            ) : (
                <>
                  <Nav.Link eventKey="4" onClick={login} href="/login"> <h5>LOGIN</h5></Nav.Link>
                  <Nav.Link eventKey="5" onClick={register} href="/register"><h5>SIGN UP</h5></Nav.Link>
                </>
              )}

          </Nav>
        </Navbar.Collapse>

      </Navbar>
    </div>
  )
}
export default Navigation;