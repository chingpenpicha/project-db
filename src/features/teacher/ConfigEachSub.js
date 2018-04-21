import React from "react";
import { connect } from "react-redux";
import { setFieldT, saveGrade } from "./reducer";
import WrappedDynamicRule from "./configForm";
import { Layout, Row, Col, Button, Form } from "antd";
import { bindActionCreators } from "redux";
const { Header, Footer } = Layout;

const mapStateToProps = state => {
  return {
    studentInSecList: state.teacher.studentInSecList,
    userId: state.login.userIdTmp,
    CID: state.teacher.CID,
    courseDetail: state.teacher.courseDetail,
    configStudentInSecList: state.teacher.configStudentInSecList
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    setFieldT: bindActionCreators(setFieldT, dispatch),
    saveGrade: bindActionCreators(saveGrade, dispatch)
  };
};

class ConfigEachSub extends React.Component {
  studentInSecListTmp;
  studentInSecListTmpIt;
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    if (this.props.configStudentInSecList === "true") {
      this.studentInSecListTmpIT = 0;
      this.props.setFieldT("configStudentList", "false");
      let useData = [];
      let newData = this.props.studentInSecList.map(e => {
        let obj = { ...e };
        obj["order"] = this.studentInSecListTmpIT;
        obj["SID"] = parseInt(e.SID);
        if(obj["grade"] !== "W"){
          useData.push(obj);
          this.studentInSecListTmpIT++;
        }
        //this.studentInSecListTmpIT++;
        return obj;
      });
      this.studentInSecListTmp = useData;
    }
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
          <h1>
            {this.props.CID} - {this.props.courseDetail.courseName}
            Year: {this.props.courseDetail.academicyear}/
            {this.props.courseDetail.term} Section:{" "}
            {this.props.courseDetail.section}
          </h1>
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

            {this.studentInSecListTmp.map(e => (
              <li key={e.TFname}>
                <WrappedDynamicRule
                  sid={e.SID}
                  sname={e.TFname + " " + e.TLname}
                  grade={e.grade}
                  onChange={value => {
                    e.grade = value;
                    console.log(value);
                    console.log(e.order);
                    this.studentInSecListTmp[e.order] = e;
                    this.studentInSecListTmpIT++;
                  }}
                />
              </li>
            ))}

            <div
              style={{ paddingRight: 200, marginTop: 10, textAlign: "center" }}
            >
              <Button
                onClick={e => {
                  console.log("test",this.studentInSecListTmp)
                  this.props.setFieldT(
                    "studentInSecList",
                    this.studentInSecListTmp
                  );
                  this.props.saveGrade(
                    this.studentInSecListTmp,
                    this.props.CID,
                    this.props.courseDetail.academicyear,
                    this.props.courseDetail.term
                  );
                }}
                style={{ width: 100 }}
                type="primary"
                htmlType="submit"
              >
                Save
              </Button>

              <Footer
                style={{ marginLeft: 100, width: "100%", background: "#fff" }}
              />
            </div>
          </Form>
        </Layout>
      </Layout>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ConfigEachSub);
