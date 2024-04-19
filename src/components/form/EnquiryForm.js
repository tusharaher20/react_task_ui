import React from "react";
import { Container, Button } from "react-bootstrap";
import RightArrowCenterNoIcon from '../svg/RightArrowCenterNoIcon'

const EnquiryForm = () => {
  return (
    <Container className="mt-30 mb-30  col">
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2
          style={{
            color: "#292967",
            backgroundColor: "#FDDF49",
            padding: "10px",
            borderRadius: "17px 17px 0px 0px ",
            fontFamily: "Satoshi",
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "27px",
            textAlign: "center",
          }}
        >
          ENQUIRE NOW!
        </h2>
      </div>
      <div className="pt-3 pb-3 pl-3 pr-3">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
          <span className="col-4 text-left" style={{ marginRight: "auto", fontSize: "16px" }}>
            Academic Year
          </span>
          <Button className="w-full col-8 "
            style={{
              background: "#292967",
              borderRadius: "4px",
              fontSize: "13px",
            }}
            variant="secondary"
          >
            2024-2026
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
          <span
            className="col-4 text-left"
            style={{ marginRight: "auto", fontSize: "16px" }}
          >
            Your Relationship <br></br> with the Child
          </span>
          <Button
            className="col-4 text-left w-full"
            style={{
              color: "#FFFFFF",
              background: "#292967",
              borderRadius: "4px 0px 0px 4px ",
              marginRight: "0px",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
            variant="dark"
          >
            Father
          </Button>
          <Button
            className="col-4 w-full"
            style={{
              background: "white",
              color: "black",
              borderRadius: "0px 4px 4px 0px ",
              border: "1px solid black",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
            variant="light"
          >
            Mother
          </Button>
        </div>

        <div className="row text-left">
          <div className="col">
            <div style={{ marginBottom: "15px" }}>
              <span className="formHeadings col-6">Child's First Name &nbsp; &nbsp; </span>
              <Button
                variant="outline-secondary"
                className="formHeadings col-6 w-100"
                style={{ marginLeft: "10px" }}
              >
                First Name
              </Button>
            </div>
          </div>
          <div className="col">
            <div style={{ marginBottom: "15px" }}>
              <span className="formHeadings  col-6 w-100">Child's Last Name &nbsp; &nbsp;</span>
              <Button
                variant="outline-secondary"
                className="formHeadings  col-6 w-100"
                style={{ marginLeft: "10px" }}
              >
                First Name
              </Button>
            </div>
          </div>
        </div>

        <div className="col-12 text-left" style={{ marginBottom: "15px" }}>
          <span className="formHeadings col-12 text-left">Course Applying For</span>
          <Button
            variant="outline-secondary"
            className="formHeadings col-12 text-left"
            style={{ marginLeft: "10px" }}
          >
            Choose Course
          </Button>
        </div>

        <div className="col-12 text-left" style={{ marginBottom: "15px" }}>
          <span className="formHeadings col-12 text-left">Mobile Number</span>
          <Button
            variant="outline-secondary"
            className="formHeadings col-12 text-left"
            style={{ marginLeft: "10px" }}
          >
            +91 Enter your Mobile Number
          </Button>
        </div>

        <div className="col-12 text-left" style={{ marginBottom: "15px" }}>
          <span className="formHeadings col-12 text-left">Email Address</span>
          <Button
            variant="outline-secondary"
            className="formHeadings col-12 text-left"
            style={{ marginLeft: "10px" }}
          >
            yourname@example.com
          </Button>
        </div>

<RightArrowCenterNoIcon/>      </div>
    </Container>
  );
};

export default EnquiryForm;
