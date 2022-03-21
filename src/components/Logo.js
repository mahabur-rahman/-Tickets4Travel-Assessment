import React from "react";
// react router dom
import { useHistory } from "react-router-dom";

// react bootstrap
import { Image } from "react-bootstrap";

const Logo = ({ cardImg, altText }) => {
  const history = useHistory();

  // handleClick
  const handleClick = () => {
    history.push("/");
  };
  return (
    <Image
      src={cardImg}
      alt={altText}
      className="logo mb-2"
      onClick={handleClick}
    />
  );
};

export default Logo;
