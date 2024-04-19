import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import RightArrowCenter from "../components/svg/RightArrowCenter";

const Rightcard = () => {
  return (
      <Row>
        <Col>
          <Card className="main-card" style={{borderRadius:"33px"}}>
            <Card.Body id="rightCardID">
              <Card.Title className="card-title text-white">ISC + IIT JEE </Card.Title>
              <Card.Text c>
                IITs are one of the most prestigious colleges in the country.
                All Engineering aspirants wish to get into one of the IITs, but
                getting into such an institution is a challenging task. A lot of
                hard work andhard  JEE Main and
                JEE Advanced to get into IIT or some other top educational
                institution in the country.
                <br />
                <br />
                Powered by IITPACE, Universal High School Dahisar will prepare
                students for both ISC and IITJEE ( and other engineering exams)
                within the comfort of their school premises. Our coursework is
                specially created for the ISC curriculum to create a synergy
                between Board and NEET exam preparations during school hours
                <br />
                <br />
                <RightArrowCenter />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
  );
};

export default Rightcard;
