import React from "react";
// react router dom
import { Link } from "react-router-dom";

const SignUpTitle = ({ title, btnText }) => {
  return (
    <>
      <div className="sign_up d-flex justify-content-center py-3">
        <h6 className="account_title mx-3">{title}</h6>
        <Link className="sign_up" to="/">{btnText}</Link>
      </div>
    </>
  );
};

export default SignUpTitle;
