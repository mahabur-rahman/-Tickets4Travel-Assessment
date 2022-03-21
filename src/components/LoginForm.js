import React from "react";
// style
import "./login.scss";
// react bootstrap
import { Container, Row, Col, Image } from "react-bootstrap";
// image
import manImg from "../images/man.png";
// component
import LoginCard from "./LoginCard.js/LoginCard";

const LoginForm = () => {
  return (
    <>
      <section id="loginForm">
        <Container>
          <Row className="text-center">
            <Col xl={8} lg={8} md={8} sm={10} xs={10} className="mx-auto">
              <div className="main_img">
                <Image src={manImg} alt="man" fluid />
              </div>
            </Col>
            <Col xl={4} lg={4} md={4} sm={10} xs={10} className="mx-auto">
              <LoginCard />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default LoginForm;
