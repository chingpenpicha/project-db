import React from "react";
import GradeTable from "./GradeTable";
import { Layout, Table } from "antd";
const { Header, Footer } = Layout;

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

export default props => (
  <Layout style={{ background: "#fff" }}>
    <Header
      style={{
        background: "#fff",
        textAlign: "center",
        marginLeft: 200,
        marginTop: 20
      }}
    >
      <h1>ผลการศึกษาของนักเรียน</h1>
    </Header>

    <Layout
      style={{
        background: "#fff",
        marginTop: 20,
        marginLeft: 350,
        padding: 10
      }}
    >
      <h3>ของนักเรียนชื่อ ABCD EFG รหัส 5831023921 </h3>
      <GradeTable title="ปีการศึกษา 2555 ภาคเรียนที่ 1" />
      <GradeTable title="ปีการศึกษา 2555 ภาคเรียนที่ 2" />
    </Layout>
  </Layout>
);
