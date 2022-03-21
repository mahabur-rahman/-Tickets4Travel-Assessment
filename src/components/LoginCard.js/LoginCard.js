import React from "react";
// style
import "./logincard.scss";
// react bootstrap
import { Card } from "react-bootstrap";
// card img
import cardImg from "../../images/logo.png";
import facebook from "../../images/facebook.png";
import gmail from "../../images/gmail.png";
import Logo from "../Logo";

// components
import Title from "../Title";
import InputType from "../InputType";
import ORTitle from "../OR";
import SocialIcon from "../SocialIcon";
import SignUpTitle from "../SignUpTitle";

const LoginCard = () => {
  return (
    <>
      <div className="loginCard">
        <div className="main_card">
          <Card>
            <Logo cardImg={cardImg} altText={"Logo"} />
            <Card.Body>
              <Title title={"Explore The Best Tours... Hurry up!!"} />
              <InputType btnText={"LOG IN"} title={"Forgot Password?"} />
              <ORTitle orTitle={"or"} />
              <SocialIcon
                facebook={facebook}
                gmail={gmail}
                altText={"Social Icon"}
              />
              <SignUpTitle
                title={"Don't have an account?"}
                btnText={"Sign Up"}
              />
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default LoginCard;
