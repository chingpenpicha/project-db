import React from "react";
import { Layout } from "antd";

import { connect } from "react-redux";
import {} from "./reducer";

const { Footer } = Layout;
//import "./Search.css";

const enhance = connect(state => state, {});

const TeacherPage = props => (
  <Layout>
    <Layout style={{ marginLeft: 200 }}>
      <div
        style={{
          background: "#fff",
          textAlign: "center"
        }}
      >
        <h1
          style={{
            marginTop: 300,
            textAlign: "center"
          }}
        >
          ... ยินดีต้อนรับสู่ระบบ Reg Chula Chula ...
        </h1>
      </div>

      <Footer
        style={{
          textAlign: "center",
          position: "fixed",
          bottom: 10,
          width: "100%"
        }}
      >
        DB Project ©2018 Created by 3 แม่ครัว The Best
      </Footer>
    </Layout>
  </Layout>
);

export default enhance(TeacherPage);
