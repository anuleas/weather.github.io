import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./googlemap.css";
const style = {
  width: "20%",
  height: "50%",
};

//this page is google map displaying.

export class Googlemap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container fluid="md">
        <Row className="googlemapstyle">
          <Col className="googlestyle">
            <Map style={style} google={this.props.google} zoom={14}>
              <Marker onClick={this.onMarkerClick} name={"India"} />

              <InfoWindow onClose={this.onInfoWindowClose}>
                <div></div>
              </InfoWindow>
            </Map>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBRgrl2I-R_0skxzYeGvszIC87Y6Ow5xVU",
})(Googlemap);
