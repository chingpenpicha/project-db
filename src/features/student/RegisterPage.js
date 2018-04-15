import React from "react";
import { connect } from "react-redux";
import { setField, confirmRegist, getRegist } from "./reducer";
import WrappedDynamicRule from "./registerForm";
import { Layout, Input, Table, Row, Col, Button, Form, Popconfirm } from "antd";
import { bindActionCreators } from 'redux'

const FormItem = Form.FormItem;
const { Header, Footer } = Layout;

//var cr0={courseId : "", courseName : "", section : "",credit : "" };


const mapStateToProps = (state) => {
    return {
      courseRegist: Object.assign(state.student.courseRegist),
      FName: Object.assign(state.login.userInformation.Fname),
      LName: Object.assign(state.login.userInformation.Lname),
      userId: Object.assign(state.login.userId),
      studentFaculty: Object.assign(state.login.userInformation.faculty),
      courseRegistD : Object.assign(state.student.courseRegistD),
      courseRegistTmp : [
        {courseId : Object.assign(state.student.ci0), section : Object.assign(state.student.st0)},
        {courseId : Object.assign(state.student.ci1), section : Object.assign(state.student.st1)},
        {courseId : Object.assign(state.student.ci2), section : Object.assign(state.student.st2)},
        {courseId : Object.assign(state.student.ci3), section : Object.assign(state.student.st3)},
        {courseId : Object.assign(state.student.ci4), section : Object.assign(state.student.st4)},
        {courseId : Object.assign(state.student.ci5), section : Object.assign(state.student.st5)},
        {courseId : Object.assign(state.student.ci6), section : Object.assign(state.student.st6)},
        {courseId : Object.assign(state.student.ci7), section : Object.assign(state.student.st7)},
        {courseId : Object.assign(state.student.ci8), section : Object.assign(state.student.st8)},
        {courseId : Object.assign(state.student.ci9), section : Object.assign(state.student.st9)}
      ],
      courseRegistDTmp : [
        {courseId : "te", courseName : "12", section : "34", credit : "56"},
        {courseId : "tes", courseName : "12", section : "34", credit : "56"},
        {courseId : "tea", courseName : "12", section : "34", credit : "56"}
      ]
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        setField: bindActionCreators(setField, dispatch),
        confirmRegist : bindActionCreators(confirmRegist, dispatch),
        getRegist : bindActionCreators(getRegist,dispatch)
    }
}

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


//อันนี้ไว้ตอนยืนยันแล้ว -OO-
class registering extends React.Component {
  constructor(props) {
      super(props);
      this.props = props;
  }

  render() {
    console.log(this.props.courseRegistTmp)
    if(this.props.courseRegistD[0].courseId != "-"){
     console.log("this.props.userId");
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
                  dataSource={this.props.courseRegistD}
                  rowKey = "courseId"
                  size="middle"
                  pagination={false}
                />
              </Layout>
        </Layout>
      );
    }else {
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
              onChangeCourseId = {(value) => this.props.setField("ci0",value)}
              onChangeSection = {(value) => this.props.setField("st0",value)}
              />
              <WrappedDynamicRule
              onChangeCourseId = {(value) => this.props.setField("ci1",value)}
              onChangeSection = {(value) => this.props.setField("st1",value)}
              /><WrappedDynamicRule
              onChangeCourseId = {(value) => this.props.setField("ci2",value)}
              onChangeSection = {(value) => this.props.setField("st2",value)}
              /><WrappedDynamicRule
              onChangeCourseId = {(value) => this.props.setField("ci3",value)}
              onChangeSection = {(value) => this.props.setField("st3",value)}
              /><WrappedDynamicRule
              onChangeCourseId = {(value) => this.props.setField("ci4",value)}
              onChangeSection = {(value) => this.props.setField("st4",value)}
              /><WrappedDynamicRule
              onChangeCourseId = {(value) => this.props.setField("ci5",value)}
              onChangeSection = {(value) => this.props.setField("st5",value)}
              /><WrappedDynamicRule
              onChangeCourseId = {(value) => this.props.setField("ci6",value)}
              onChangeSection = {(value) => this.props.setField("st6",value)}
              /><WrappedDynamicRule
              onChangeCourseId = {(value) => this.props.setField("ci7",value)}
              onChangeSection = {(value) => this.props.setField("st7",value)}
              /><WrappedDynamicRule
              onChangeCourseId = {(value) => this.props.setField("ci8",value)}
              onChangeSection = {(value) => this.props.setField("st8",value)}
              /><WrappedDynamicRule
              onChangeCourseId = {(value) => this.props.setField("ci9",value)}
              onChangeSection = {(value) => this.props.setField("st9",value)}
              />



              <div style={{ paddingRight: 200, marginTop: 10, textAlign: "center" }}>
                <Button style={{ width: 100 }} type="primary" htmlType="submit"
                onClick ={e => this.props.getRegist(this.props.userId)}>
                  Save
                </Button>
                <Popconfirm
                  onConfirm = {e => this.props.confirmRegist(this.props.courseRegistTmp,this.props.userId)}
                  placement="right"
                  title="เมื่อยืนยันแล้วจะไม่สามารถแก้ไขได้ ต้องการยืนยันใช่หรือไม่"
                  okText="ใช่"
                  cancelText="ไม่"
                >
                  <Button
                    style={{ width: 100, marginLeft: 100 }} type="danger">
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
      )
    }
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(registering);
