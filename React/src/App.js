

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Backgroundimage from './components/BackgroundImage/Backgroundimage';
import Countrydetails from './components/countrydetails/countrydetails';
import Navbar from "./components/Navbar/Navbarpage";
import './App.css'

function App() {
 
  return (
    <>
    <Container fluid="md">
    <Row className="apptotalstyle">
      <Col className="appstyle">
 
      
      <Navbar />
    <Backgroundimage />
    <Countrydetails />
      </Col>
      
    </Row>

    
  </Container>
    
    </>
    
  )
  
}

export default App