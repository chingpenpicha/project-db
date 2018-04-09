import React from "react";
import { connect } from "react-redux";
import { Layout } from "antd";

import GradeTable from "./GradeTable";

const { Header } = Layout;

const enhance = connect(
  state => ({
    courseRegist: state.student.courseRegist,
    studentName: state.student.studentName,
    studentCode: state.student.studentCode,
    studentFaculty: state.student.studentFaculty
  }),
  {}
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
      <GradeTable title="ปีการศึกษา 2555 ภาคเรียนที่ 1" />
      <GradeTable title="ปีการศึกษา 2555 ภาคเรียนที่ 2" />
    </Layout>
  </Layout>
);

export default enhance(GradeResultPage);
