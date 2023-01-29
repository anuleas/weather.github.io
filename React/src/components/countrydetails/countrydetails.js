import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import "./countrydatils.css";
import Countryresult from "../Countryresult/Countryresult";
//import Googlemap from '../googlemaps/googlemap';
import Weatherchart from "../Weatherchart/Weatherchart";
import Forecast from "../Forecast/Forecast";
import Googlemap from "../googlemaps/googlemap";

//for intial rendering time india climate data fetch from third party api and display it

// in this page i  take the county name from the node js and insert into drop down.
//According to dropdown selction ,the correspong country climate data come. and pass tho the corresponding pages.

function Countrydetails() {
  const [place, setPlace] = useState("India");
  const [country, setCountry] = useState([]);

  const [weather, setWeather] = useState([]);
 

  useEffect(() => {
   
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=8ced876cd6804df7aa560051232501&q=${place}`
      )

      .then((response1, err) => {
        setWeather(response1.data);
        console.log(response1.data);
        axios.get("http://localhost:8081/get_data").then((response2, err) => {
          setCountry(response2.data);
          console.log(response2.data);
        });
      })
      .catch((err) => {
        console.log("error");
      });
   
  }, []);

  //based on dropdown value climate data fetch

  const ondrpdownChangecountry = (event) => {
    console.log("h");
    const dropdownvalue = event.target.value;
    console.log(dropdownvalue);
    //setPlace(dropdownvalue);
    console.log(place);
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=8ced876cd6804df7aa560051232501&q=${dropdownvalue}`
      )

      .then((response1, err) => {
        setWeather(response1.data);
        console.log("acording to dropdown");
        console.log(response1.data);
      });
  };
  return (
    <Container fluid="md">
      <Row className="countrydetails">
        <Col className="dropdownstyle">

          {/* Add country to dropdown*/}

          <Form.Group className="mb-3">
            <Form.Label>Country</Form.Label>
            <Form.Select
              onChange={ondrpdownChangecountry}
              name="Country"
              id="Country"
            >
              <option value="" checked>
                Please select Menu
              </option>

              {country.map((data) => {
                return <option value={data.name}>{data.name}</option>;
              })}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

       {/* weathe data send to countryresult page */}

      <Row className="resultgoogleresultstyle">
        <Col className="resultgoogle">
          <Col className="resultstyle">
            {weather ? <Countryresult data={weather} /> : ""}
          </Col>

          <Col>
            <Googlemap />
          </Col>
        </Col>
      </Row>
      <br></br>

       {/*char display acoording to time and degree celsius*/}

      <Row className="positionchartforecast">
        <Col className="CHARTFORECAST">
          {weather ? <Weatherchart data={weather} /> : ""}
        </Col>

        <Col>{weather ? <Forecast data={weather} /> : ""}</Col>
      </Row>
    </Container>
  );
}

export default Countrydetails;
