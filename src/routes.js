import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./features/login/LoginPage";
import StudentPage from "./features/student/StudentPage";
import RegisterPage from "./features/student/RegisterPage";
import SearchTablePage from "./features/student/SearchTablePage";
import LeftSider from "./features/student/LeftSider";
import GradeResultPage from "./features/student/GradeResultPage";
import DocumentRequestPage from "./features/student/DocumentRequestPage";
import AddSubWithPage from "./features/student/AddSubWithPage";
class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={LoginPage} />
        <Route path="/student/:id" component={LeftSider} />
        <Route path="/student/:id/normalRegister" component={RegisterPage} />
        <Route path="/student/:id/gradeResult" component={GradeResultPage} />
        <Route
          path="/student/:id/documentRequest"
          component={DocumentRequestPage}
        />
        <Route path="/student/:id/searchTable" component={SearchTablePage} />
        <Route path="/student/:id/addSubWith" component={AddSubWithPage} />
        <Route path="/student/:id/home" component={StudentPage} />
      </div>
    );
  }
}

export default Routes;
