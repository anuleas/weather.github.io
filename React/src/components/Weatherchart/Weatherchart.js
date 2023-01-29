import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Weatherchart.css";


//This is the weather chart.here we desttructiong the object sfrom the props.
//inside the data=> object 1:forecast:2forecast day:3array hour:4:object:hour
//this hour object pass to the line chart.
//x-axis time ,y axis:degree celsius.

const Weatherchart = (props) => {
  const { data: { forecast: { forecastday = "anu" } = {} } = {} } = props;
  console.log("forecastday");
  const [hour1] = forecastday;
  console.log(hour1);
  const { hour } = hour1;
  console.log(hour);

  return (
    <Container fluid="md">
      <Row className="weatherchartstyle">
        <Col className="chart">
          <LineChart
            width={350}
            height={300}
            data={hour}
            margin={{
              top: 5,
              right: 30,
              left: 1,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis dataKey="temp_c" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="temp_c"
              stroke="#8884d8"
              strokeDasharray="5 5"
            />
          </LineChart>
        </Col>
      </Row>
    </Container>
  );
};
export default Weatherchart;
