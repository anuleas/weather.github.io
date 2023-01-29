import Nav from 'react-bootstrap/Nav';
//import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';





function Home() {
  return (
    <>
    <div>
    <Navbar bg="primary" variant="light">
        <Container fluid="sm">
         
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Programs">Programst</Nav.Link>
            <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
     
      </div>
     
    </>
  );
}

export default Home