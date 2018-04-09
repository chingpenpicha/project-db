import React from "react";
import { connect } from "react-redux";
import { setField } from "./reducer";
import { Layout, Menu, Icon } from "antd";

import { Link } from "react-router-dom";


const { Header, Content, Footer, Sider } = Layout;
//import "./Search.css";

const enhance = connect(state => ({
  }),
 { setField }
);

const StudentPage = props => (
  <Layout>
    <Layout style={{ marginLeft: 200 }}>
      <Header style={{ background: "#fff", padding: 0 }} />
      <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
        <div style={{ padding: 24, background: "#fff", textAlign: "center" }}>
          ... ยินดีต้อนรับสู่ระบบ Reg Chula Chula ...
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        DB Project ©2018 Created by 3 แม่ครัว The Best
      </Footer>
    </Layout>
  </Layout>
);

export default enhance(StudentPage);
