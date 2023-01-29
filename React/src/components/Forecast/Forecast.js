import React from "react";
import moment from "moment";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//this page is for forecast of this day.
//her also destructuring the data fro the props.

function Forecast(props) {
  const { data: { current: { wind_degree = "2" } = {} } = {} } = props;

  const { data: { forecast: { forecastday = "anu" } = {} } = {} } = props;
  console.log("forecastday");
  const [astro1] = forecastday;
  console.log(astro1);
  const { astro } = astro1;
  console.log(astro);

  //console.log(sunrise)

  /* let days = [];
let daysRequired = 7

for (let i = 1; i <= daysRequired; i++) {
    days.push( moment().add(i, 'days').format('dddd, Do MMMM YYYY') )
  }*/

  // console.log(days)
  return (
    <Container fliud>
      <Row>
        <Col>
          <h6> Forecast of this day</h6>
          {astro ? <p>Sunrise:{astro.sunrise}</p> : ""}
          {astro ? <p>Sunset:{astro.sunset}</p> : ""}
          {astro ? <p>Moonrise:{astro.moonrise}</p> : ""}
          {astro ? <p>Moonset:{astro.moonset}</p> : ""}
          {astro ? <p>Moon_phase:{astro.moon_phase}</p> : ""}
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Forecast;
