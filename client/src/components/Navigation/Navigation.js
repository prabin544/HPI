import React from "react";
import { NavLink} from "react-router-dom";
import { Navbar, Nav, Form, Jumbotron, Container, Row, Col} from "react-bootstrap";
import Time from '../CurrTime/CurrTimePage'
import LogOptions from "../LogOptions/LogOptions"
import bgimage from "./header.png"



const jumbotronStyles = 
{ 
    height: '250px',  
    backgroundImage: `url(${bgimage})`, 
    backgroundSize: 'cover',
    backgroundwidth: '100%',
    backgroundheight: 'auto',
    backgroundRepeat: 'no repeat',
    backgroundPosition: 'center',

}
            


const Navigation = () => {
  return (
    <>
    
    <Jumbotron bg-cover style={jumbotronStyles} >

    </Jumbotron>

    <Navbar expand="lg" className="mb-5">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mx-auto ">
    <Nav.Link href="/home"><h5>HOME</h5></Nav.Link>
      <Nav.Link href="/register"><h5>REGISTER</h5></Nav.Link>
      <Nav.Link href="/login"><h5>LOGIN</h5></Nav.Link>
      <Nav.Link href="/about"><h5>ABOUT US</h5></Nav.Link>  
       
    </Nav>
    {/* <LogOptions className="mx-auto"/> */}
    {/* <Time/> */}
  </Navbar.Collapse>

</Navbar>


      {/* <Navbar bg="primary" variant="light">
        <Navbar.Brand href="#home" Text style={{color: "white" , fontSize: 50 , fontFamily: "Sacromento" }}>Millennial Health Inc.</Navbar.Brand>
       
          
     
      </Navbar> */}
    </>
  )
}

export default Navigation;