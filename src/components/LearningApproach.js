// import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import College from "../components/svg/College";
import Curriculum from "../components/svg/Curriculum";
import Clock from "../components/svg/Clock";
import Class from "../components/svg/Class";
import Man from "../components/svg/Man";
import DownArrow from "../components/svg/DownArrow";
import RightArrow from "../components/svg/RightArrow";
// import axios from "axios";

export const Newsletter = () => {
  return (
    <>
      <Col lg={12} className="relative">
        <DownArrow />
        <div className="newsletter-bx wow slideInUp container">
          <p
            style={{
              margin:'0px' ,
              color: "#FFFFFF",
              fontFamily: "Satoshi",
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: "32.4px",
              textAlign: "center",
            }}
          >
            OUR
          </p>

          <p
            style={{
              color: "#FDDF49",
              fontFamily: "Satoshi",
              fontSize: "36px",
              fontWeight: "700",
              lineHeight: "48.6px",
              textAlign: "center",
            }}
            className="pb-3"
          >
            Learning Approach
          </p>

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
                <Class />{" "}
              </Col>
            </Row>
           
          </Container>
          <RightArrow />
        </div>
        
      </Col>
    </>
  );
};
