import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setFieldT, getGrade, getStudent } from "./reducer";
import { bindActionCreators } from "redux";
import { List, Avatar, Layout } from "antd";

const { Header } = Layout;

const mapStateToProps = state => {
  return {
    studentList: state.teacher.studentList,
    queryStudent: state.teacher.queryStudent,
    userId: state.login.userIdTmp
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    setFieldT: bindActionCreators(setFieldT, dispatch),
    getGrade: bindActionCreators(getGrade, dispatch),
    getStudent: bindActionCreators(getStudent, dispatch)
  };
};

const data = [
  {
    title: "5830000121",
    description: "Demo"
  },
  {
    title: "5831011121",
    description: "Demo"
  },
  {
    title: "5831011121",
    description: "Demo"
  },
  {
    title: "5831011121",
    description: "Demo"
  }
];

class SeeStudentGrade extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    if (this.props.queryStudent === "true") {
      this.props.getStudent(this.props.userId);
      this.props.setFieldT("queryStudent", "false");
    }
    let newData = this.props.studentList.map(e => {
      let obj = { ...e };
      obj["title"] = e.SID;
      obj["description"] = e.TFname + " " + e.TLname;
      return obj;
    });
    return (
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
          <h3>รายชื่อนักเรียนในที่ปรึกษา</h3>
          <List
            style={{ width: "60%", marginLeft: 20 }}
            itemLayout="horizontal"
            dataSource={newData}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar icon="user" size="small" />}
                  title={
                    <Link
                      onClick={e => {
                        this.props.setFieldT("studentCode", item.title);
                        this.props.setFieldT("studentName", item.description);
                        this.props.getGrade(item.title);
                      }}
                      to={
                        this.props.match.url +
                        `/${item.title + " - " + item.description}`
                      }
                    >
                      {item.title + " - " + item.description}
                    </Link>
                  }
                />
              </List.Item>
            )}
          />
        </Layout>
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SeeStudentGrade);
