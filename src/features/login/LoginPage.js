import React from "react";
import { connect } from "react-redux";
import { setField, setType } from "./reducer";
import { Layout } from "antd";
import NormalLoginForm from "./NormalLoginForm";
const { Sider, Content, Footer } = Layout;

//import "./Search.css";

const enhance = connect(
  state => ({
    userId: state.userId,
    password: state.password,
    userType: state.userType
  }),
  { setField, setType }
);

const StudentPage = props => (
  <Layout>
    <Sider
      style={{ overflow: "auto", height: "100vh", position: "fixed", left: 0 }}
    />
    <Layout style={{ marginLeft: 200 }}>
      <Content style={{ padding: "0 100px", marginTop: 100 }}>
        <h1> REG CHULA CHULA By 3 แม่ครัว The Best </h1>
        <div style={{ background: "#fff", padding: 50 }}>
          <div style={{ minHeight: 30 }} />
          <NormalLoginForm
            onChangeRadio={e => props.setType(e)}
            onChange={(key, value) => props.setField(key, value)}
            userId={props.userId}
            password={props.password}
          />
        </div>
      </Content>

      <Footer style={{ height: 130, textAlign: "center" }} />
    </Layout>
  </Layout>
);

export default enhance(StudentPage);
