import React from "react";
import { connect } from "react-redux";
import { setField } from "./reducer";
import { Layout, Input, Table } from "antd";
import ReactTable from "react-table";
import "react-table/react-table.css";

const { Header, Content, Footer, Sider } = Layout;

const enhance = connect(
  state => ({
    courseRegist: state.student.courseRegist,
    studentName: state.student.studentName,
    studentCode: state.student.studentCode,
    studentFaculty: state.student.studentFaculty
  }),
  { setField }
);

const columns = [
  {
    title: "CourseId",
    dataIndex: "courseId"
  },
  {
    title: "CourseName",
    dataIndex: "courseName"
  },
  {
    title: "Section",
    dataIndex: "section"
  },
  {
    title: "Credit",
    dataIndex: "credit"
  }
];

const data = [
  {
    key: "1",
    courseId: "John Brown",
    courseName: 32,
    section: "New York No. 1 Lake Park",
    credit: "3"
  },
  {
    key: "2",
    courseId: "Jim Green",
    courseName: 42,
    section: "London No. 1 Lake Park",
    credit: "3"
  }
];

const registerPage = props => (
  <Layout style={{ background: "#fff" }}>
    <Header
      style={{
        background: "#fff",
        textAlign: "center",
        marginLeft: 200,
        marginTop: 20
      }}
    >
      <h1>ลงทะเบียนเรียน</h1>
    </Header>
    <Layout
      style={{
        background: "#fff",
        marginLeft: 200,
        marginTop: 50,
        paddingLeft: 100,
        paddingRight: 100
      }}
    >
      <p>ปีการศึกษา 2555 เทอม 2</p>
      <Table
        columns={columns}
        dataSource={data}
        size="middle"
        pagination={false}
      />
    </Layout>
  </Layout>
);

export default enhance(registerPage);
