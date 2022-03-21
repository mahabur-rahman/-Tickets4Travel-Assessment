import React, { useState } from "react";
// react router dom
import { Link } from "react-router-dom";
// react bootstrap
import { Form, Button } from "react-bootstrap";

const InputType = ({ btnText, title }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [storeData, setStoreData] = useState([]);

  // form submit
  const formSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      const newData = { email, password };
      setStoreData([...storeData, newData]);
    } else {
      alert("Please fill the field");
    }
  };

  return (
    <>
      <div className="main_form">
        <Form onSubmit={formSubmit}>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email Address"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="password_title my-2">
              <Link to="/">{title}</Link>
            </div>
          </Form.Group>
          {/* login button */}
          <Button variant="primary" type="submit" className="login_btn">
            {btnText}
          </Button>
        </Form>
      </div>
    </>
  );
};

export default InputType;
