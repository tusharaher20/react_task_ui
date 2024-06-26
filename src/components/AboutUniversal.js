import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Aboutbuilding from "../assets/aboutbuilding.jpeg";
import RightArrowBlue from "../components/svg/RightArrowBlue";

export const AboutUniversal = () => {
  return (
    <section className="about-universal ">
      <Container>
        <Row className="relative">
          {/* Left side: Image */}
          <Col sm={12} md={4} className="d-flex align-items-center">
            <div className="image-container">
              <div className="yellow-gradient "></div>
              <img
                style={{
                  position: "relative",
                  left: "100px",
                  zIndex: "2",
                  borderRadius: "25px",
                  boxShadow:
                    "10px 10px 10px #FDDF49" /* Adjust shadow as needed */,
                }}
                className=""
                src={Aboutbuilding}
                alt=""
                width={"525px"}
                height={"34px"}
              />{" "}
            </div>
          </Col>

          {/* Right side: Text */}
          <Col
            sm={12}
            md={8}
            className="d-flex align-items-center h-full"
            style={{
              background: "#FFF9DA",
              borderRadius: "33px",
              paddingTop: "80px",
              paddingLeft: "280px",
              paddingRight: "70px",
              paddingBottom: "80px",
              position: "relative",
              right: "120px",
            }}
          >
            <div className="text-container bg-yellow">
              <Container>
                <h4
                  style={{
                    fontFamily: "Satoshi",
                    fontSize: "24px",
                    fontWeight: 400,
                    lineHeight: "32.4px",
                    textAlign: "left",
                  }}
                >
                  About
                </h4>

                <h1
                  style={{
                    fontFamily: "Satoshi",
                    fontSize: "36px",
                    fontWeight: 700,
                    lineHeight: "48.6px",
                    textAlign: "left",
                  }}
                >
                  Universal High School
                </h1>
                <p className="text-left">
                  Universal High School, Dahisar equips every student with the
                  right attitude and skills to help them find their unique place
                  in the world by providing a wholesome and ever-evolving
                  learning environment. So that they can fearlessly pursue a
                  better tomorrow. In line with this mission, Universal is
                  launching the best IIT JEE/NEET test prep program powered by
                  PACE IIT & MEDICAL. PACE IIT & Medical is India's best IIT
                  JEE/NEET test prep program and has helped more than{" "}
                  <strong>xxx</strong>+ students prepare for IIT JEE and{" "}
                  <strong>xxx</strong> students in NEET for the last few years.
                </p>
                <RightArrowBlue />
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
