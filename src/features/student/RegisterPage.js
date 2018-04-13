import React from "react";
import { connect } from "react-redux";
import { setField } from "./reducer";
import WrappedDynamicRule from "./registerForm";
import { Layout, Input, Table, Row, Col, Button, Form, Popconfirm } from "antd";
import { bindActionCreators } from 'redux'

const FormItem = Form.FormItem;
const { Header, Footer } = Layout;

//var cr0={courseId : "", courseName : "", section : "",credit : "" };


const mapStateToProps = (state) => {
    return {
      courseRegist: Object.assign(state.student.courseRegist,state),
      FName: Object.assign(state.student.FName,state),
      LName: Object.assign(state.student.LName,state),
      studentCode: Object.assign(state.student.studentCode,state),
      studentFaculty: Object.assign(state.student.studentFaculty,state),
      courseRegistD : Object.assign(state.student.courseRegistD,state),
      courseRegistTmp : [
        {courseId : Object.assign(state.student.ci0,state), section : Object.assign(state.student.st0,state)},
        {courseId : Object.assign(state.student.ci1,state), section : Object.assign(state.student.st1,state)},
        {courseId : Object.assign(state.student.ci2,state), section : Object.assign(state.student.st2,state)},
        {courseId : Object.assign(state.student.ci3,state), section : Object.assign(state.student.st3,state)},
        {courseId : Object.assign(state.student.ci4,state), section : Object.assign(state.student.st4,state)},
        {courseId : Object.assign(state.student.ci5,state), section : Object.assign(state.student.st5,state)},
        {courseId : Object.assign(state.student.ci6,state), section : Object.assign(state.student.st6,state)},
        {courseId : Object.assign(state.student.ci7,state), section : Object.assign(state.student.st7,state)},
        {courseId : Object.assign(state.student.ci8,state), section : Object.assign(state.student.st8,state)},
        {courseId : Object.assign(state.student.ci9,state), section : Object.assign(state.student.st9,state)}
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
        setField: bindActionCreators(setField, dispatch)
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

  sunnai(){
    console.log(this.props);
    this.props.setField("courseRegistD",this.props.courseRegistDTmp)
  }

  render() {

    if(this.props.courseRegistD[0].courseId != "-"){
     console.log("KIN");
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
                onClick ={e => this.props.setField("courseRegist",this.props.courseRegistTmp)}>
                  Save
                </Button>
                <Popconfirm
                  onConfirm = {e => this.props.setField("courseRegistD",this.props.courseRegistDTmp)}
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
