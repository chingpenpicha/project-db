import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./features/login/LoginPage";
import StudentPage from "./features/student/StudentPage";
import RegisterPage from "./features/student/RegisterPage";
import SearchTablePage from "./features/common/SearchTablePage";
import LeftSider from "./features/student/LeftSider";
import GradeResultPage from "./features/student/GradeResultPage";
import DocumentRequestPage from "./features/student/DocumentRequestPage";
import AddSubWithPage from "./features/student/AddSubWithPage";
import PaymentPage from "./features/student/PaymentPage";

import LeftSiderT from "./features/teacher/LeftSider";
import SeeStudentGrade from "./features/teacher/SeeStudentGrade";
import ConfigGrade from "./features/teacher/ConfigGrade";
import ConfigEachSub from "./features/teacher/ConfigEachSub";
import TeacherPage from "./features/teacher/TeacherPage";
import SeeEachStudent from "./features/teacher/SeeEachStudent";
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
        <Route path="/student/:id/payment" component={PaymentPage} />

        <Route path="/teacher/:id" component={LeftSiderT} />
        <Route path="/teacher/:id/studentGrade" component={SeeStudentGrade} />
        <Route path="/teacher/:id/searchTable" component={SearchTablePage} />
        <Route path="/teacher/:id/configGrade" component={ConfigGrade} />
        <Route
          path="/teacher/:id/studentGrade/:sid"
          component={SeeEachStudent}
        />
        <Route path="/teacher/:id/configGrade/:cid" component={ConfigEachSub} />
        <Route path="/teacher/:id/home" component={TeacherPage} />
      </div>
    );
  }
}

export default Routes;
