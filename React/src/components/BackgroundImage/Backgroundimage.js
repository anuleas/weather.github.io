import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './backgroundimage.css'
import bckimg from '../images/photo-1601134467661-3d775b999c8b.avif'

//this page is for background image.

function Backgroundimage() {
  return (
    <Container fluid="md">
    <Row className="backgroundimagestyle">
      <Col className="backgroundimage"> 
      <img src={bckimg} alt="bckimg"></img>
      </Col>
      </Row>
    </Container>

  )
}

export default Backgroundimage