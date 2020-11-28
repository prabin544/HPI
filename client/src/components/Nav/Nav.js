import React, { useState } from "react";
import { Link} from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";
import HomePage from '../Home/HomePage'
import Time from '../CurrTime/CurrTimePage'
import HPI from '../HPI/HPIPage'

const Navigation = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">HPI</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="/HPI">HPI</Nav.Link>
        </Nav>
        <Form inline className="time">
          <Time/>
        </Form>
      </Navbar>
      <HomePage />
    </>
  )
}

export default Navigation;