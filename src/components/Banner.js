import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BannerImg from "../assets/BannerImg.png";
import PaceLogo2 from "../assets/PaceLogo2.png";
import studentIcon from "../assets/studentIcon.svg";
import RightArrowBlue from "./svg/RightArrowBlue";
import EnquiryForm from "./form/EnquiryForm";


function Banner() {
  return (
    <div className="BannerOuter relative">
      <div className="bg-image pt-32 pb-60 Banner ">
        <Container>
          <Row>
            <Col>
              <div class="">
                <div class="static-text">
                  <p className="Kickstart">KICKSTART YOUR</p>
                  <p className="IITJEE text-nowrap">IIT JEE/NEET Test Prep,</p>
                  <p className="Poweredby"> Powered by</p>
                </div>
                <div className="col-12 bannerImage text-center m-auto">
                  {" "}
                  <img
                    src={PaceLogo2}
                    width={"132.42px"}
                    alt="notfound"
                    class="bottom-image text-center items-center"
                  />
                </div>

                <div class="row pt-4">
                  <div class="col d-flex justify-content-left align-items-end">
                    <span className="Kickstart p-1">ADMISSIONS OPEN</span>
                    <RightArrowBlue />{" "}
                  </div>
                </div>

                <div className="image-text-row row pt-4">
                  <img
                    style={{ width: "70px" }}
                    src={studentIcon}
                    alt="notfound"
                    className="left-image col-3"
                  />
                  <div className="right-text col-9">
                    <span
                      style={{ fontWeight: "bolder" }}
                      className="col-8 d-block border-l  uppercase text-left"
                    >
                      Batch Starts From
                    </span>
                    <span
                      style={{ fontWeight: "bolder" }}
                      className="col-8 d-block  uppercase text-left"
                    >
                      3rd April '24
                    </span>
                  </div>
                </div>

                <div className="image-text-row row">
                  <img
                    style={{ width: "70px" }}
                    src={studentIcon}
                    alt="notfound"
                    className="left-image col-3"
                  />
                  <div className="right-text col-9">
                    <span
                      style={{ fontWeight: "bolder" }}
                      className="col-8 d-block border-l  uppercase text-left"
                    >
                      Batch Starts From
                    </span>
                    <span
                      style={{ fontWeight: "bolder" }}
                      className="col-8 d-block  uppercase text-left"
                    >
                      3rd April '24
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="relative">
              {" "}
              <span>
                <img
                  src={BannerImg}
                  className=""
                  width={"600px"}
                  alt=""
                  style={{
                    paddingTop: "56px",
                    marginTop: "auto",
                    position: "absolute",
                    left: "-38px",
                    top: "170px",


                  }}
                />
              </span>
            </Col>
            <Col>
              {" "}
              <EnquiryForm />
            </Col>
          </Row>
        </Container>
      </div>

    </div>
  );
}

export default Banner;
