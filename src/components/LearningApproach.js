// import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
// import axios from "axios";

export const Newsletter = ({ status, message, onValidated }) => {
  //   const [email, setEmail] = useState("");
  //   //
  //   //   useEffect(() => {
  //   //     if (status === "success") clearFields();
  //   //   }, [status]);
  //   //
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     email &&
  //       email.indexOf("@") > -1 &&
  //       onValidated({
  //         EMAIL: email,
  //       });
  //   };
  //
  //   const clearFields = () => {
  //     setEmail("");
  //   };

  //   const [advice, setAdvice] = useState("");

  //   useEffect(() => {
  //     fetchAdvice();
  //   }, []);

  //   const fetchAdvice = () => {
  //     axios
  //       .get("https://api.adviceslip.com/advice")
  //       .then((response) => {
  //         const { advice } = response.data.slip;
  //         setAdvice(advice);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp container">
        <Row>
          <Col sm={12} md={12} xl={12}>
            <div className="new-email-bx">
              <button
                sm={12}
                className="newsletter-button mobile-newsletter-button"
                type="submit"
              >
                Get{" "}
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  eum dolores earum, delectus, culpa aspernatur natus velit
                  rerum deleniti sed tempora provident fugit blanditiis? Sequi
                  voluptas cupiditate est voluptatibus odit temporibus quasi
                  laudantium impedit, totam officia debitis quia reprehenderit
                  libero qui. Ducimus dignissimos velit aut quia, error itaque!
                  Accusantium, quis. Vel aperiam eum, perferendis velit hic
                  architecto reiciendis. Dolore asperiores reprehenderit
                  recusandae suscipit dolor odio exercitationem possimus
                  blanditiis, earum iste eius minus at eum omnis amet quaerat,
                  nemo repudiandae, dolores totam aspernatur sapiente alias
                  officia. Minus dignissimos nostrum, consequuntur incidunt vero
                  nobis labore quisquam hic fuga earum. Libero, incidunt.
                </p>
              </button>
              <h5 className="newsletter-advice">{}</h5>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
