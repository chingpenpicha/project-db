import React from "react";
import { connect } from "react-redux";
import { setField, confirmRegist, getRegist } from "./reducer";
import WrappedDynamicRule from "./registerForm";
import { Layout, Input, Table, Row, Col, Button, Form, Popconfirm } from "antd";
import { bindActionCreators } from 'redux'

const FormItem = Form.FormItem;
const { Header, Footer } = Layout;

//var cr0={CID : "", CABname : "", secnumber : "",credit : "" };


const mapStateToProps = (state) => {
    return {
      courseRegist: state.student.courseRegist,
      FName: state.login.userInformation.Fname,
      LName: state.login.userInformation.Lname,
      userId: state.login.userId,
      studentFaculty: state.login.userInformation.faculty,
      courseRegistD : state.student.courseRegistD,
      courseRegistTmp : [
        {CID : state.student.ci0, secnumber : state.student.st0},
        {CID : state.student.ci1, secnumber : state.student.st1},
        {CID : state.student.ci2, secnumber : state.student.st2},
        {CID : state.student.ci3, secnumber : state.student.st3},
        {CID : state.student.ci4, secnumber : state.student.st4},
        {CID : state.student.ci5, secnumber : state.student.st5},
        {CID : state.student.ci6, secnumber : state.student.st6},
        {CID : state.student.ci7, secnumber : state.student.st7},
        {CID : state.student.ci8, secnumber : state.student.st8},
        {CID : state.student.ci9, secnumber : state.student.st9}
      ],
      courseRegistDTmp : [
        {CID : "te", CABname : "12", secnumber : "34", credit : "56"},
        {CID : "tes", CABname : "12", secnumber : "34", credit : "56"},
        {CID : "tea", CABname : "12", secnumber : "34", credit : "56"}
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
    dataIndex: "CID"
  },
  {
    title: "CourseName",
    dataIndex: "CABname"
  },
  {
    title: "Section",
    dataIndex: "secnumber"
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
    if(this.props.courseRegist[0].CID != "-"){
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
                  dataSource={this.props.courseRegist}
                  rowKey = "CID"
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
                  <b> secnumber</b>
                </Col>
              </Row>

              <WrappedDynamicRule
              onChangeCID = {(value) => this.props.setField("ci0",value)}
              onChangesecnumber = {(value) => this.props.setField("st0",value)}
              />
              <WrappedDynamicRule
              onChangeCID = {(value) => this.props.setField("ci1",value)}
              onChangesecnumber = {(value) => this.props.setField("st1",value)}
              /><WrappedDynamicRule
              onChangeCID = {(value) => this.props.setField("ci2",value)}
              onChangesecnumber = {(value) => this.props.setField("st2",value)}
              /><WrappedDynamicRule
              onChangeCID = {(value) => this.props.setField("ci3",value)}
              onChangesecnumber = {(value) => this.props.setField("st3",value)}
              /><WrappedDynamicRule
              onChangeCID = {(value) => this.props.setField("ci4",value)}
              onChangesecnumber = {(value) => this.props.setField("st4",value)}
              /><WrappedDynamicRule
              onChangeCID = {(value) => this.props.setField("ci5",value)}
              onChangesecnumber = {(value) => this.props.setField("st5",value)}
              /><WrappedDynamicRule
              onChangeCID = {(value) => this.props.setField("ci6",value)}
              onChangesecnumber = {(value) => this.props.setField("st6",value)}
              /><WrappedDynamicRule
              onChangeCID = {(value) => this.props.setField("ci7",value)}
              onChangesecnumber = {(value) => this.props.setField("st7",value)}
              /><WrappedDynamicRule
              onChangeCID = {(value) => this.props.setField("ci8",value)}
              onChangesecnumber = {(value) => this.props.setField("st8",value)}
              /><WrappedDynamicRule
              onChangeCID = {(value) => this.props.setField("ci9",value)}
              onChangesecnumber = {(value) => this.props.setField("st9",value)}
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
