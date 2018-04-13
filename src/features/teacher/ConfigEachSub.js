import React from "react";
import { connect } from "react-redux";
import {} from "./reducer";
import WrappedDynamicRule from "./configForm";
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
  {}
);

const ConfigEachSub = props => (
  <Layout style={{ background: "#fff" }}>
    <Header
      style={{
        background: "#fff",
        textAlign: "center",
        marginLeft: 200,
        marginTop: 20
      }}
    >
      <h1>แก้ไขผลการเรียนในวิชา... something</h1>
    </Header>
    <Layout
      style={{
        background: "#fff",
        marginLeft: 280,
        paddingLeft: 300,
        paddingRight: 200
      }}
    >
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
            <b>Student ID</b>
          </Col>
          <Col span={8} style={{ textAlign: "Left" }}>
            <b>Student Name</b>
          </Col>
          <Col span={4} style={{ textAlign: "Center" }}>
            <b>Grade</b>
          </Col>
        </Row>

        <WrappedDynamicRule sid="5124" sname="Ada Wong" />
        <WrappedDynamicRule />
        <WrappedDynamicRule />
        <WrappedDynamicRule />
        <WrappedDynamicRule />
        <WrappedDynamicRule />
        <WrappedDynamicRule />
        <WrappedDynamicRule />
        <WrappedDynamicRule />
        <WrappedDynamicRule />

        <div style={{ paddingRight: 200, marginTop: 10, textAlign: "center" }}>
          <Button style={{ width: 100 }} type="primary" htmlType="submit">
            Save
          </Button>
          <Popconfirm
            placement="right"
            title="เมื่อยืนยันแล้วจะไม่สามารถแก้ไขได้ ต้องการยืนยันใช่หรือไม่"
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
    </Layout>
  </Layout>
);

export default enhance(ConfigEachSub);
