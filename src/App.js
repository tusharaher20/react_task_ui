import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import { Newsletter } from "./components/LearningApproach";
import { AboutUniversal } from "./components/AboutUniversal";
import { AboutIIT } from "./components/AboutIIT";
import Leftcard from "./components/LeftCard";
import Rightcard from "./components/Rightcard";
import EnquiryForm from "./components/form/EnquiryForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Newsletter />
      <AboutUniversal />
      <AboutIIT />
      <Container className="mt-20 mb-20 ">
        <Row>
          <Col md={6}>
            <Leftcard />
          </Col>
          <Col md={6}>
            <Rightcard />
          </Col>
        </Row>
      </Container>
      <EnquiryForm />
    </div>
  );
}

export default App;
