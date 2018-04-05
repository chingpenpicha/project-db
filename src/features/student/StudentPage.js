import React from "react";
import { connect } from "react-redux";
import { searchType, searchReq } from "./reducer";
import { Layout, Menu, Icon } from "antd";
import LeftSider from "./LeftSider";

const { Header, Content, Footer, Sider } = Layout;
//import "./Search.css";

const enhance = connect(state => state, { searchType, searchReq });

const StudentPage = props => (
  <Layout>
    <LeftSider />
    <Layout style={{ marginLeft: 200 }}>
      <Header style={{ background: "#fff", padding: 0 }} />
      <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
        <div style={{ padding: 24, background: "#fff", textAlign: "center" }}>
          ...
          <br />
          Really
          <br />...<br />...<br />...<br />
          long
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />
          content
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2016 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
);

export default enhance(StudentPage);
