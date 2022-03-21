import React from "react";
// global scss
import "./global.scss";
// react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// react router dom
import { Switch, Route } from "react-router-dom";

// components
import { LoginForm } from "./components";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LoginForm} />
      </Switch>
    </>
  );
};

export default App;
