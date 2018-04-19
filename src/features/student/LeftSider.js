import React from "react";
import { connect } from "react-redux";
import "./LeftSider.css";
import {
  setField,
  menu,
  getRegist,
  getRegistW,
  getGrade,
  getDoc
} from "./reducer";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

const { Header, Sider } = Layout;

const mapStateToProps = state => {
  return {
    courseRegist: state.student.courseRegist,
    FName: state.login.userInformation.Fname,
    LName: state.login.userInformation.Lname,
    userId: state.login.userIdTmp,
    studentFaculty: state.login.userInformation.faculty,
    queryRegist: state.student.queryRegist,
    queryRegistW: state.student.queryRegistW,
    queryGrade: state.student.queryGrade,
    queryDoc: state.student.queryDoc
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setField: bindActionCreators(setField, dispatch),
    menu: bindActionCreators(menu, dispatch),
    getRegist: bindActionCreators(getRegist, dispatch),
    getRegistW: bindActionCreators(getRegistW, dispatch),
    getGrade: bindActionCreators(getGrade, dispatch),
    getDoc: bindActionCreators(getDoc, dispatch)
  };
};

class LeftSider extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    if (this.props.queryRegist === "true") {
      this.props.setField("queryRegist", "false");
      this.props.getRegist(this.props.userId);
    }
    if (this.props.queryRegistW === "true") {
      this.props.setField("queryRegistW", "false");
      this.props.getRegistW(this.props.userId);
    }
    if (this.props.queryGrade === "true") {
      this.props.setField("queryGrade", "false");
      this.props.getGrade(this.props.userId);
    }
    if (this.props.queryDoc === "true") {
      this.props.setField("queryDoc", "false");
      this.props.getDoc(this.props.userId);
    }
    return (
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0
          }}
        >
          <div className="logo" />
          <img
            style={{ height: 100, weight: 100, margin: 50 }}
            src="https://1.bp.blogspot.com/-5bPNsF5plzw/VnJWs-7RbrI/AAAAAAAARmA/DaZmn8YUjAk/s1600-r/logo_research_at_google_color_1x_web_512dp.png"
          />
          <Menu
            onSelect={e => this.props.menu(e)}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["0"]}
          >
            <Menu.Item key="1">
              <Link to={"/student/" + this.props.userId + "/normalRegister"} />
              <Icon type="user" />
              <span className="nav-text">ลงทะเบียนเรียน</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to={"/student/" + this.props.userId + "/addSubWith"} />
              <Icon type="edit" />
              <span className="nav-text">เพิ่ม/ลด</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to={"/student/" + this.props.userId + "/payment"} />
              <Icon type="edit" />
              <span className="nav-text">ชำระค่าเล่าเรียน</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to={"/student/" + this.props.userId + "/gradeResult"} />
              <Icon type="profile" />
              <span className="nav-text">ผลการเรียน</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to={"/student/" + this.props.userId + "/documentRequest"} />
              <Icon type="form" />
              <span className="nav-text">ขอใบคำร้อง</span>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to={"/student/" + this.props.userId + "/searchTable"} />
              <Icon type="table" />
              <span className="nav-text">ตารางเรียน</span>
            </Menu.Item>
            <Menu.Item key="7">
              <Link to="/" />
              <Icon type="logout" />
              <span className="nav-text">Logout</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout
          style={{
            textAlign: "right",
            width: "100%",
            marginLeft: 20
          }}
        >
          <Header
            style={{
              background: "transparent",
              padding: 0,
              marginRight: 20
            }}
          >
            <b>Faculty:</b> {this.props.studentFaculty}, <b>Name:</b>
            {this.props.FName + " " + this.props.LName}, <b>ID:</b>{" "}
            {this.props.userId}
          </Header>
        </Layout>
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftSider);
