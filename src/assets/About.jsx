import React from "react";
//import "./about.css";
import { Container, Row, Col } from "react-bootstrap";
//import aboutImg from "../../assests/images/about-us.png";
import aboutImg from "/src/about-us.png"
import CountUp from "react-countup";
import ReadMore from "./ReadMore";
//import "./assets/abot.css"
//import "./index.css"


const AboutUs = () => {
  return (
    <div className="mt-5 p-3">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2 className="mt-sm-5 fw-bold ">About Us</h2>
              <p>
                Welcome to <span className="fw-bold text-warning">"CRYPTO WORLD" </span>, your gateway to mastering the world of cryptocurrencies!

                Our mission is to empower individuals with the knowledge and tools they need to confidently navigate the ever-evolving landscape of blockchain technology, digital currencies, and decentralized finance (DeFi). Whether you are a curious beginner, an experienced trader, or someone exploring the potential of Web3, we are here to guide you every step of the way.
              </p>

              <div className="about__counter fw-bold">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter fs-2">
                      <CountUp start={0} end={25} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Completed Projects</p>
                  </div>

                  <div className="single__counter fw-bold">
                    <span className="counter fs-2">
                      <CountUp start={0} end={12} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Patient Around World</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center fw-bold">
                  <div className="single__counter">
                    <span className="counter fs-2">
                      <CountUp start={0} end={95} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Ideas Raised Funds</p>
                  </div>

                  <div className="single__counter fw-bold">
                    <span className="counter fs-2">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Categories Served</p>
                  </div>
                </div>
              </div>
            </div>
            <ReadMore/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
