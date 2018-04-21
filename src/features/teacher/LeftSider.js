import React from "react";
import { connect } from "react-redux";
import "./LeftSider.css";
import { setFieldT, menu } from "./reducer";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const { Header, Sider } = Layout;

//import "./Search.css";

const enhance = connect(
  state => ({
    userId: state.login.userIdTmp,
    FName: state.login.userInformation.Fname,
    LName: state.login.userInformation.Lname,
    faculty: state.login.userInformation.faculty
  }),
  { setFieldT, menu }
);

const LeftSider = props => (
  <Layout>
    <Sider
      style={{ overflow: "auto", height: "100vh", position: "fixed", left: 0 }}
    >
      <div className="logo" />
      <img
        style={{ height: 100, weight: 100, margin: 50 }}
        src="https://1.bp.blogspot.com/-5bPNsF5plzw/VnJWs-7RbrI/AAAAAAAARmA/DaZmn8YUjAk/s1600-r/logo_research_at_google_color_1x_web_512dp.png"
      />
      <Menu
        onSelect={e => props.menu(e)}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["0"]}
      >
        <Menu.Item key="1">
          <Link to={"/teacher/" + props.userId + "/configGrade"} />
          <Icon type="edit" />
          <span className="nav-text">แก้ไขเกรดในวิชาที่สอน</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={"/teacher/" + props.userId + "/studentGrade"} />
          <Icon type="user" />
          <span className="nav-text">ผลการเรียนของนิสิต</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to={"/teacher/" + props.userId + "/searchTable"} />
          <Icon type="table" />
          <span className="nav-text">ค้นหาตารางเรียน</span>
        </Menu.Item>
        <Menu.Item key="4">
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
        <b>Faculty:</b> {props.faculty}, <b>Name:</b>
        {props.FName + " " + props.LName}, <b>ID:</b> {props.userId}
      </Header>
    </Layout>
  </Layout>
);

export default enhance(LeftSider);
