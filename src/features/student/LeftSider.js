import React from "react";
import "./LeftSider.css";
import { Layout, Menu, Icon } from "antd";
const { Header, Content, Footer, Sider } = Layout;

export default () => (
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
        <Icon type="user" />
        <span className="nav-text">ลงทะเบียนเรียน</span>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="edit" />
        <span className="nav-text">เพิ่ม/ลด</span>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="profile" />
        <span className="nav-text">ผลการเรียน</span>
      </Menu.Item>
      <Menu.Item key="4">
        <Icon type="form" />
        <span className="nav-text">ขอใบคำร้อง</span>
      </Menu.Item>
      <Menu.Item key="5">
        <Icon type="table" />
        <span className="nav-text">ตารางเรียน</span>
      </Menu.Item>
      <Menu.Item key="6">
        <Icon type="logout" />
        <span className="nav-text">Logout</span>
      </Menu.Item>
    </Menu>
  </Sider>
);
