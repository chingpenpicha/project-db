import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {} from "./reducer";

import { List, Avatar, Layout } from "antd";

const { Header } = Layout;

const enhance = connect(state => state, {});

const data = [
  {
    title: "5831011121 - Sing Ja"
  },
  {
    title: "5831012321 - Asda Ja"
  },
  {
    title: "5831013421 - Fsas Ja"
  },
  {
    title: "5831014521 - WEqs Ja"
  }
];

const SeeStudentGrade = props => (
  <Layout style={{ background: "#fff" }}>
    <Header
      style={{
        background: "#fff",
        textAlign: "center",
        marginLeft: 200,
        marginTop: 20
      }}
    >
      <h1>ดูผลการเรียนของนิสิต</h1>
    </Header>
    <Layout
      style={{
        background: "#fff",
        marginLeft: 200,
        marginTop: 50,
        paddingLeft: 100,
        paddingRight: 100
      }}
    >
      <h3>รายชื่อนิสิตในที่ปรึกษา</h3>
      <List
        style={{ width: "60%", marginLeft: 20 }}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar icon="user" size="small" />}
              title={
                <Link to={props.match.url + `/${item.title}`}>
                  {item.title}
                </Link>
              }
            />
          </List.Item>
        )}
      />
    </Layout>
  </Layout>
);

export default enhance(SeeStudentGrade);
