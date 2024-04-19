// import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import College from "../components/svg/College";
import Curriculum from "../components/svg/Curriculum";
import Clock from "../components/svg/Clock";
import Man from "../components/svg/Man";
// import axios from "axios";

export const Newsletter = () => {
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp container">
        <Container>
          <Row>
            <Col className="section borderRight">
              <College />
            </Col>
            <Col className="section borderRight">
              <Curriculum />
            </Col>
            <Col className="section borderRight">
              <Clock />
            </Col>{" "}
            <Col className="section borderRight">
              <Man />
            </Col>{" "}
            <Col className="section">
              <p>Line 1</p>
              <p>Line 2</p>
            </Col>
          </Row>
        </Container>
      </div>
    </Col>
  );
};
