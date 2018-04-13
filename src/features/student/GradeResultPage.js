import React from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import MyQuery from "./query";

import GradeTable from "./GradeTable";
import {setField} from "./reducer"

const { Header } = Layout;

const enhance = connect(
  state => ({
    courseRegist: state.student.courseRegist,
    studentName: state.student.studentName,
    studentCode: state.student.studentCode,
    studentFaculty: state.student.studentFaculty,
    gradeResult : state.student.gradeResult
  }),
  {setField}
);

const GradeResultPage = props => (
  <Layout style={{ background: "#fff" }}>
  <MyQuery setField = {(key,value) => props.setField(key,value)} type = "gradeResult"/>
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
      <GradeTable title="ปีการศึกษา 2555 ภาคเรียนที่ 1" gradeResult = {props.gradeResult} />
      <GradeTable title="ปีการศึกษา 2555 ภาคเรียนที่ 2" gradeResult = {props.gradeResult} />
    </Layout>
  </Layout>
);

export default enhance(GradeResultPage);
