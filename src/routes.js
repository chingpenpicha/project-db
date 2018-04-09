import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from "./features/login/LoginPage";
import StudentPage from "./features/student/StudentPage";
import RegisterPage from "./features/student/RegisterPage"

class Routes extends Component {
    render() {
        return (
          <div>
              <Route exact path="/" component = {LoginPage} />
              <Route path = "/student/:id" component = {StudentPage} />
              <Route path = "/student/:id/normalRegister" component = {RegisterPage} />
          </div>
        )
    }
}

export default Routes
