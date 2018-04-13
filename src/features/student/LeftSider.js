import React from "react";
import { connect } from "react-redux";
import "./LeftSider.css";
import { setField } from "./reducer";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import MyQuery from "./query";

const { Header, Sider } = Layout;

//import "./Search.css";

const enhance = connect(
  state => ({
    userId: state.login.userId,
    courseRegist: state.student.courseRegist,
    studentName: state.student.studentName,
    studentCode: state.student.studentCode,
    studentFaculty: state.student.studentFaculty
  }),
  { setField }
);

const LeftSider = props => (
  <Layout>
    <MyQuery
      setField={(key, value) => props.setField(key, value)}
      type="leftSider"
    />
    <Sider
      style={{ overflow: "auto", height: "100vh", position: "fixed", left: 0 }}
    >
      <div className="logo" />
      <img
        style={{ height: 100, weight: 100, margin: 50 }}
        src="https://1.bp.blogspot.com/-5bPNsF5plzw/VnJWs-7RbrI/AAAAAAAARmA/DaZmn8YUjAk/s1600-r/logo_research_at_google_color_1x_web_512dp.png"
      />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
        <Menu.Item key="1">
          <Link to={"/student/" + props.userId + "/normalRegister"} />
          <Icon type="user" />
          <span className="nav-text">ลงทะเบียนเรียน</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={"/student/" + props.userId + "/addSubWith"} />
          <Icon type="edit" />
          <span className="nav-text">เพิ่ม/ลด</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to={"/student/" + props.userId + "/gradeResult"} />
          <Icon type="profile" />
          <span className="nav-text">ผลการเรียน</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to={"/student/" + props.userId + "/documentRequest"} />
          <Icon type="form" />
          <span className="nav-text">ขอใบคำร้อง</span>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to={"/student/" + props.userId + "/searchTable"} />
          <Icon type="table" />
          <span className="nav-text">ค้นหาตารางเรียน</span>
        </Menu.Item>
        <Menu.Item key="6">
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
        <b>Faculty:</b> {props.studentFaculty}, <b>Name:</b>
        {props.studentName}, <b>ID:</b> {props.studentCode}
      </Header>
    </Layout>
  </Layout>
);

export default enhance(LeftSider);
