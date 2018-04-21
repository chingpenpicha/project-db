import React from "react";
import { connect } from "react-redux";
import { Layout } from "antd";

import GradeTable from "./GradeTable";
import {} from "./reducer";

const { Header } = Layout;

const enhance = connect(
  state => ({
    studentName: state.teacher.studentName,
    studentCode: state.teacher.userIdTmp,
    gradeResult: state.teacher.gradeResult,
    gpax: state.teacher.gpax
  }),
  {}
);

const GradeResultPage = props => (
  <Layout style={{ background: "#fff" }}>
    <Header
      style={{
        background: "#fff",
        textAlign: "center",
        marginLeft: 300,
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
        <li key={e.academicyear + " " + e.term}>
          <GradeTable
            title={"ปีการศึกษา " + e.academicyear + " ภาคเรียนที่ " + e.term}
            gradeResult={e.courseGrade}
            gpa={e.gpa}
          />
        </li>
      ))}
    </Layout>

    <h2 style={{ textAlign: "right" }}>
      GPAX :
      <b style={{ marginTop: 20, marginRight: 250, color: "#253947" }}>
        {props.gpax}
      </b>
    </h2>
  </Layout>
);

export default enhance(GradeResultPage);
