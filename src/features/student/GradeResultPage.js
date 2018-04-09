import React from "react";
import { connect } from "react-redux";
import { Layout, Menu, Form, Icon, Input, Button, Radio, Table } from "antd";
import ReactTable from "react-table";
import "react-table/react-table.css";

import { Link } from "react-router-dom";
import GradeTable from "./GradeTable";

const { Header, Content, Footer, Sider } = Layout;

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
      <div>Boss @Coperation</div>
    </Layout>
  </Layout>
);

export default enhance(GradeResultPage);
