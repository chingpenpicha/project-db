import React from "react";
import { connect } from "react-redux";
import { setField } from "./reducer";
import WrappedDynamicRule from "./registerForm";
import { Layout, Input, Table, Row, Col, Button, Form, Popconfirm } from "antd";
const FormItem = Form.FormItem;
const { Header, Footer } = Layout;

//var cr0={courseId : "", courseName : "", section : "",credit : "" };


const enhance = connect(
  state => ({
    courseRegist: state.student.courseRegist,
    studentName: state.student.studentName,
    studentCode: state.student.studentCode,
    studentFaculty: state.student.studentFaculty,
    courseRegistTmp : [
      {courseId : state.student.ci0,courseName : state.student.cn0,section : state.student.st0,credit : state.student.cd0},
      {courseId : state.student.ci1,courseName : state.student.cn1,section : state.student.st1,credit : state.student.cd1},
      {courseId : state.student.ci2,courseName : state.student.cn2,section : state.student.st2,credit : state.student.cd2},
      {courseId : state.student.ci3,courseName : state.student.cn3,section : state.student.st3,credit : state.student.cd3},
      {courseId : state.student.ci4,courseName : state.student.cn4,section : state.student.st4,credit : state.student.cd4},
      {courseId : state.student.ci5,courseName : state.student.cn5,section : state.student.st5,credit : state.student.cd5},
      {courseId : state.student.ci6,courseName : state.student.cn6,section : state.student.st6,credit : state.student.cd6},
      {courseId : state.student.ci7,courseName : state.student.cn7,section : state.student.st7,credit : state.student.cd7},
      {courseId : state.student.ci8,courseName : state.student.cn8,section : state.student.st8,credit : state.student.cd8},
      {courseId : state.student.ci9,courseName : state.student.cn9,section : state.student.st9,credit : state.student.cd9},
    ]
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

//อันนี้ไว้ตอนยืนยันแล้ว -OO-
class registering extends React.Component {
  render() {
    return (
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
          <h3>ปีการศึกษา 2555 เทอม 2</h3>
          <Table
            columns={columns}
            dataSource={data}
            size="middle"
            pagination={false}
          />
        </Layout>
      </Layout>
    );
  }
}

/*class doneRegist extends React.Component  {

}
*/

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
        paddingLeft: 300,
        paddingRight: 200
      }}
    >
      <h3>ปีการศึกษา 2555 เทอม 2</h3>
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

        <WrappedDynamicRule
        onChangeCourseId = {(value) => props.setField("ci0",value)}
        onChangeSection = {(value) => props.setField("st0",value)}
        />
        <WrappedDynamicRule
        onChangeCourseId = {(value) => props.setField("ci1",value)}
        onChangeSection = {(value) => props.setField("st1",value)}
        /><WrappedDynamicRule
        onChangeCourseId = {(value) => props.setField("ci2",value)}
        onChangeSection = {(value) => props.setField("st2",value)}
        /><WrappedDynamicRule
        onChangeCourseId = {(value) => props.setField("ci3",value)}
        onChangeSection = {(value) => props.setField("st3",value)}
        /><WrappedDynamicRule
        onChangeCourseId = {(value) => props.setField("ci4",value)}
        onChangeSection = {(value) => props.setField("st4",value)}
        /><WrappedDynamicRule
        onChangeCourseId = {(value) => props.setField("ci5",value)}
        onChangeSection = {(value) => props.setField("st5",value)}
        /><WrappedDynamicRule
        onChangeCourseId = {(value) => props.setField("ci6",value)}
        onChangeSection = {(value) => props.setField("st6",value)}
        /><WrappedDynamicRule
        onChangeCourseId = {(value) => props.setField("ci7",value)}
        onChangeSection = {(value) => props.setField("st7",value)}
        /><WrappedDynamicRule
        onChangeCourseId = {(value) => props.setField("ci8",value)}
        onChangeSection = {(value) => props.setField("st8",value)}
        /><WrappedDynamicRule
        onChangeCourseId = {(value) => props.setField("ci9",value)}
        onChangeSection = {(value) => props.setField("st9",value)}
        />



        <div style={{ paddingRight: 200, marginTop: 10, textAlign: "center" }}>
          <Button style={{ width: 100 }} type="primary" htmlType="submit"
          onClick ={e => props.setField("courseRegist",props.courseRegistTmp)}>
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

export default enhance(registerPage);
