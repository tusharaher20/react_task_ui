import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import LeftArrowCenter from "../components/svg/LeftArrowCenter";

const Leftcard = () => {
  return (
    <Row>
      <Col>
        <Card className="main-card" style={{ borderRadius: "33px" }}>
          <Card.Body id="leftCardID">
            <Card.Title className="card-title text-white">
              ISC + NEET
            </Card.Title>
            <Card.Text>
              NEET is a national-level examination conducted by NTA. If you want
              to get admission to medical courses, you must qualify for the
              entrance test. NEET questions only come from Physics, Chemistry,
              Zoology, and Botany.
              <br />
              <br />
              At Universal High School Dahisar, we prepare students for both ISC
              and NEET (and other Medical exams) within the comfort of their
              school premises. Our coursework is specially created for the ISC
              curriculum to create a synergy between Board and NEET exam
              preparations during school hours.
              <br />
              <br />
              <LeftArrowCenter />
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Leftcard;
