import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./features/login/LoginPage";
import StudentPage from "./features/student/StudentPage";
import RegisterPage from "./features/student/RegisterPage";
import LeftSider from "./features/student/LeftSider";

class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={LoginPage} />
        <Route path="/student/:id" component={LeftSider} />
        <Route path="/student/:id/normalRegister" component={RegisterPage} />
        <Route path="/student/:id/home" component={StudentPage} />
      </div>
    );
  }
}

export default Routes;
