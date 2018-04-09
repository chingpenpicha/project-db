import React from "react";
import { connect } from "react-redux";
import { setField } from "./reducer";
import { Layout, Menu, Form, Icon, Input, Button, Radio, Table } from "antd";
import ReactTable from "react-table";
import "react-table/react-table.css";

import { Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const FormItem = Form.Item;

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

const EditableCell = ({ editable, value, onChange }) => (
  <div>
    {editable ? (
      <Input
        style={{ margin: "-5px 0" }}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    ) : (
      value
    )}
  </div>
);

const registerPage = props => (
  <Layout style={{ background: "#fff" }}>
    <Header
      style={{
        background: "#fff",
        textAlign: "center",
        marginLeft: 200,
        marginTop: 100
      }}
    >
      <div>
        Faculty : {props.studentFaculty} Name : {props.studentName} Code :{" "}
        {props.studentCode}
        <Table
          columns={columns}
          dataSource={data}
          size="middle"
          pagination={false}
        />
        <div>Boss @Coperation</div>
      </div>
    </Header>
  </Layout>
);

export default enhance(registerPage);
