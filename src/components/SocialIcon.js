import React from "react";
// react router dom
import { Link } from "react-router-dom";

// react bootstrap
import { Image } from "react-bootstrap";

const SocialIcon = ({ facebook, gmail, altText }) => {
  return (
    <>
      <div className="social_img">
        <Link to="/" target="_blank">
          <Image src={facebook} alt={altText} className="facebook_img" />
        </Link>
        <Link to="/" target="_blank">
          <Image src={gmail} alt={altText} className="gmail_img" />
        </Link>
      </div>
    </>
  );
};

export default SocialIcon;
