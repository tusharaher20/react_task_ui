import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BannerImg from "../assets/BannerImg.png";
import PaceLogo2 from "../assets/PaceLogo2.png";
import studentIcon from "../assets/studentIcon.svg";

function Banner() {
  return (
    <div className="BannerOuter ">
      <div className="bg-image vh-100 Banner ">
        <Container>
          <Row>
            <Col>
              <div class="">
                <div class="static-text">
                  <p className="Kickstart">KICKSTART YOUR</p>
                  <p className="IITJEE">IIT JEE/NEET Test Prep,</p>
                  <p className="Poweredby"> Powered by</p>
                </div>

                <img
                  src={PaceLogo2}
                  width={"132.42px"}
                  alt="notfound"
                  class="bottom-image"
                />

                <div class="row">
                  <div class="col d-flex justify-content-around align-items-end">
                    <span className="Kickstart">Admissions Open</span>
                    <button>Enquire Now</button>
                  </div>
                </div>

                <div class="image-text-row">
                  {/* <img src={PaceLogo2} alt="notfound" class="left-image" /> */}
                  <div class="right-text">
                    <p>Batch Starts From</p>
                    <p>3rd April '24</p>
                  </div>
                </div>

                <div class="image-text-row">
                  <img
                    width={"47px"}
                    src={studentIcon}
                    alt="notfound"
                    class="left-image"
                  />
                  <div class="right-text">
                    <p>Scholarship Test</p>
                    <p>23rd March '24</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              {" "}
              <span>
                <img
                  src={BannerImg}
                  className=""
                  width={"100px"}
                  alt=""
                  style={{ paddingTop: "100px" }}
                />
              </span>
            </Col>
            <Col>
              {" "}
              <h1>Tushar Aher</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="fixed-button">
        <button className="rotate-text">Enquire Now</button>
      </div>
    </div>
  );
}

export default Banner;
