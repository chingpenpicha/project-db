import React from "react";
import { connect } from "react-redux";
import {
  setField,
  setType,
  loginVerifyStudent,
  loginVerifyTeacher,
  logOut
} from "./reducer";
import { Layout } from "antd";
import NormalLoginForm from "./NormalLoginForm";
const { Sider, Content, Footer } = Layout;

const enhance = connect(
  state => ({
    userId: state.login.userId,
    password: state.login.password,
    userType: state.login.userType,
    loginSuccess: state.login.loginSuccess,
    firstClick: state.login.firstClick
  }),
  { setType, setField, loginVerifyStudent, loginVerifyTeacher, logOut }
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
            loginVerifyStudent={(username, password) =>
              props.loginVerifyStudent(username, password)
            }
            loginVerifyTeacher={(username, password) =>
              props.loginVerifyTeacher(username, password)
            }
            onChangeRadio={e => props.setType(e)}
            onChange={(key, value) => props.setField(key, value)}
            setStudent={(key, value) => props.setField(key, value)}
            userId={props.userId}
            password={props.password}
            loginSuccess={props.loginSuccess}
            userType={props.userType}
            logOut={() => props.logOut()}
          />
        </div>
      </Content>

      <Footer style={{ height: 130, textAlign: "center" }} />
    </Layout>
  </Layout>
);

export default enhance(StudentPage);
