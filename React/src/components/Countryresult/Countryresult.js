import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Countryresult.css'

//this page is for display temperarture ,humidity
//here we destructring the data from the props.


function Countryresult(props) {
    const{data:{current:{last_updated}={last_updated:"no=match"}}}=props
    const{data:{location:{country}={country:"no=match"}}}=props
    //const{data:{current:{condition:{icon}={icon:"no=match"}}}}=props

    const {data: {current:{condition:{icon = 'Dunno'}={}} = {}} = {}} = props;
    const{data:{current:{temp_c="2"}= {}}= {}}=props
    const{data:{current:{feelslike_c="2"}={}}={}}=props
    const{data:{current:{humidity="2"}={}}={}}=props
    const{data:{current:{wind_degree="2"}={}}={}}=props
   
    console.log(wind_degree);
  
    //console.log(temp_c);
   
    return(
    <Container fluid="md">
    <Row className="counrtyresultstyle">
      <Col className="resultstyle"> 
        <p>{last_updated?last_updated:""}</p>
        <h4>{country?country:""}</h4>
        <Col className="icondegree">
       <span> {icon?<img src={icon}alt=""></img>:""}</span>
       <span>{temp_c? <p>{temp_c}deg C</p>:""}</span>
       </Col>
       {feelslike_c? <p>Feels like{feelslike_c}deg C</p>:""}
       {humidity? <p>Humidity:{humidity}%</p>:""}
       {wind_degree? <p>Wind_degree:{wind_degree}</p>:""}


      </Col>
      </Row>
    </Container>
    )
}

export default Countryresult