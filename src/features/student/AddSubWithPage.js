import React from "react";
import { connect } from "react-redux";
import { setField } from "./reducer";
import WrappedDynamicRule from "./registerForm";
import { Layout, Input, Table, Row, Col, Button, Form, Popconfirm } from "antd";
const FormItem = Form.FormItem;
const { Header, Footer } = Layout;

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

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: record => ({
    name: record.name
  })
};

const AddSubWithPage = props => (
  <Layout style={{ background: "#fff" }}>
    <Header
      style={{
        background: "#fff",
        textAlign: "center",
        marginLeft: 200,
        marginTop: 20
      }}
    >
      <h1>เพิ่ม/ลด/ถอน</h1>
    </Header>
    <Layout
      style={{
        background: "#fff",
        marginLeft: 200,
        marginTop: 50,
        paddingLeft: 200,
        paddingRight: 200
      }}
    >
      <h3>ลด/ถอน</h3>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        size="middle"
        pagination={false}
      />

      <div style={{ paddingRight: 100, marginTop: 10, textAlign: "center" }}>
        <Button style={{ width: 100 }} type="primary" htmlType="submit">
          ลด
        </Button>
        <Popconfirm
          placement="right"
          title="ต้องการยืนยันใช่หรือไม่"
          okText="ใช่"
          cancelText="ไม่"
        >
          <Button
            style={{ width: 100, marginLeft: 100, marginTop: 20 }}
            type="danger"
          >
            ถอน
          </Button>
        </Popconfirm>
      </div>
    </Layout>

    <Layout
      style={{
        background: "#fff",
        marginLeft: 200,
        marginTop: 50,
        paddingLeft: 300,
        paddingRight: 200
      }}
    >
      <h3>เพิ่ม</h3>
      <Form>
        <Row
          gutter={24}
          style={{
            background: "#eee",
            width: "77%",
            height: 40,
            textAlign: "left",
            padding: 10,
            marginBottom: 15
          }}
        >
          <Col span={8} style={{ textAlign: "Left" }}>
            <b>Course ID</b>
          </Col>
          <Col span={8} style={{ textAlign: "Left" }}>
            <b> Course Name</b>
          </Col>
          <Col span={4} style={{ textAlign: "Left" }}>
            <b> Section</b>
          </Col>
        </Row>

        <WrappedDynamicRule />
        <WrappedDynamicRule />

        <div style={{ paddingRight: 200, marginTop: 10, textAlign: "center" }}>
          <Button style={{ width: 100 }} type="primary" htmlType="submit">
            Save
          </Button>
          <Popconfirm
            placement="right"
            title="ต้องการยืนยันใช่หรือไม่"
            okText="ใช่"
            cancelText="ไม่"
          >
            <Button style={{ width: 100, marginLeft: 100 }} type="danger">
              ยืนยัน
            </Button>
          </Popconfirm>
          <Footer
            style={{ marginLeft: 100, width: "100%", background: "#fff" }}
          />
        </div>
      </Form>
      <Footer style={{ marginLeft: 100, width: "100%", background: "#fff" }} />
    </Layout>
  </Layout>
);

export default enhance(AddSubWithPage);
