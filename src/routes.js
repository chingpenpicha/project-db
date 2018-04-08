import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from "./features/login/LoginPage";
import StudentPage from "./features/student/StudentPage";
import RegisterPage from "./features/student/register"

class Routes extends Component {
    render() {
        return (
          <div>
              <Route exact path="/" component={LoginPage} />
              <Route path="/student/:id" component={StudentPage} >
              </Route>
          </div>
        )
    }
}

export default Routes
