import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const EnquiryForm = () => {
  return (
    <Container >
      <Form className="col-4 pt-30 pb-130 h-screen">
        <Form.Group controlId="academicYear">
          <Form.Label>ENQUIRE NOW!</Form.Label>
          <Form.Control
            type="text"
            placeholder="ENQUIRE NOW! 2024-2026"
            readOnly
          />
        </Form.Group>

        <Form.Group controlId="relationship">
          <Form.Label>Your Relationship with the Child</Form.Label>
          <Form.Control as="select">
            <option value="father">Father</option>
            <option value="mother">Mother</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="childFirstName">
          <Form.Label>Child's First Name</Form.Label>
          <Form.Control type="text" placeholder="Type Here" />
        </Form.Group>

        <Form.Group controlId="childLastName">
          <Form.Label>Child's Last Name</Form.Label>
          <Form.Control type="text" placeholder="Type Here" />
        </Form.Group>

        <Form.Group controlId="yourName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Type Here" />
        </Form.Group>

        <Form.Group controlId="yourLastName">
          <Form.Label>Your Last Name</Form.Label>
          <Form.Control type="text" placeholder="Type Here" />
        </Form.Group>

        <Form.Group controlId="course">
          <Form.Label>Course Applying For</Form.Label>
          <Form.Control as="select">
            <option value="chooseCourse">Choose Course</option>
            {/* Add options for available courses */}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="mobileNumber">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="+91 Enter your Mobile Number"
          />
        </Form.Group>

        <Form.Group controlId="emailAddress">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="yourname@example.com" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enquire Now
        </Button>
      </Form>
    </Container>
  );
};

export default EnquiryForm;
