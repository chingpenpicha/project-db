import React from "react";
import { connect } from "react-redux";
import {} from "./reducer";
import { Layout } from "antd";
import NormalLoginForm from "./NormalLoginForm";
const { Sider, Content, Footer } = Layout;

//import "./Search.css";

const enhance = connect(state => state, {});

const StudentPage = props => (
  <Layout>
    <Sider
      style={{ overflow: "auto", height: "100vh", position: "fixed", left: 0 }}
    />
    <Layout style={{ marginLeft: 200 }}>
      <Content style={{ padding: "0 100px", marginTop: 100 }}>
        <h1> REG CHULA CHULA By 3 แม่ครัว The Best </h1>
        <div style={{ background: "#fff", padding: 100, minHeight: 380 }}>
          <h1> LOG IN </h1>
          <NormalLoginForm />
        </div>
      </Content>
      <Footer style={{ height: 130, textAlign: "center" }} />
    </Layout>
  </Layout>
);

export default enhance(StudentPage);
