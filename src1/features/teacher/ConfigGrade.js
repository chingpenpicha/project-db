import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {} from "./reducer";

import { List, Avatar, Layout } from "antd";

const { Header } = Layout;

const enhance = connect(state => state, {});

const data = [
  {
    title: "211932 - Sing Aa"
  },
  {
    title: "231342 - Dsda Ba"
  },
  {
    title: "231444 - Dsas Sa"
  },
  {
    title: "215555 - NEqs Wa"
  }
];

const ConfigGrade = props => (
  <Layout style={{ background: "#fff" }}>
    <Header
      style={{
        background: "#fff",
        textAlign: "center",
        marginLeft: 200,
        marginTop: 20
      }}
    >
      <h1>แก้ไขผลการเรียน</h1>
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
      <h3>รายชื่อวิชาที่สอน</h3>
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

export default enhance(ConfigGrade);
