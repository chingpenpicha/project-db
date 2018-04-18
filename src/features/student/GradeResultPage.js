import React from "react";
import { connect } from "react-redux";
import { Layout } from "antd";

import GradeTable from "./GradeTable";
import {setField} from "./reducer"

const { Header } = Layout;

const enhance = connect(
  state => ({
    FName: state.login.userInformation.Fname,
    LName: state.login.userInformation.Lname,
    userId: state.login.userIdTmp,
    studentFaculty: state.login.userInformation.faculty,
    gradeResult : state.student.gradeResult
  }),
  {setField}
);

const GradeResultPage = props => (
  <Layout style={{ background: "#fff" }}>
    <Header
      style={{
        background: "#fff",
        textAlign: "center",
        marginLeft: 200,
        marginTop: 20
      }}
    >
      <h1>ผลการศึกษา</h1>
    </Header>
    <Layout
      style={{
        background: "#fff",
        marginLeft: 350,
        padding: 10
      }}
    >
    {props.gradeResult.map(e => (
      <li key = {e.academicyear + " " + e.term}>
        <GradeTable title= { "ปีการศึกษา " + e.academicyear + " ภาคเรียนที่ " + e.term } gradeResult = {e.courseGrade} />
      </li>
    ))  }


    </Layout>
  </Layout>
);

export default enhance(GradeResultPage);
