import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import weathersymbol  from '../images/download (1).jfif'
import './Navbar.css'


//this is the header part

function Navbar() {
  return (
    <Container fluid="md">
    <Row className="navbarposition">
      <Col className="navbar">
 
       <img className="logo" src={weathersymbol} alt="weather"></img>
       <p className="navbarp">Open Weather</p>
       
      
      </Col>
      
    </Row>

    
  </Container>
  )
}

export default Navbar