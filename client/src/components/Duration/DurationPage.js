import React, { useState } from "react";
import { Row, Container, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import './Duration.css'
 
import "react-datepicker/dist/react-datepicker.css";
 
const Duration = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  console.log(startDate);

  const timeDiff = endDate.getTime() - startDate.getTime();
  const daysDiff = timeDiff/(1000 * 3600 *24);

  const sdate = new Date(startDate).toDateString();
  const edate = new Date(endDate).toDateString();
  
  return (
    <Container>
        <Row>
            <Col md={{ span: 2, offset: 1 }}><DatePicker selected={startDate} onChange={date => setStartDate(date)} />Start Date</Col>
            <Col md={{ span: 3, offset: 3 }}><DatePicker selected={endDate} onChange={date => setEndDate(date)} />End Date</Col>
        </Row>
        <Row className="dates">
            <p>Start Date: {sdate} </p><br/>
        </Row>
        <Row>
            <p>End Date: {edate} </p>
        </Row>
        <Row>
            <p>Total Days: {daysDiff}</p>
        </Row>
    </Container>
  );
};

export default Duration;