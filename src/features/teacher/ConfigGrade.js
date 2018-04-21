import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setFieldT, getCourse, getStudentInSec } from "./reducer";
import { bindActionCreators } from "redux";
import { List, Avatar, Layout } from "antd";

const { Header } = Layout;

const mapStateToProps = state => {
  return {
    courseList: state.teacher.courseList,
    queryCourse: state.teacher.queryCourse,
    userId: state.login.userIdTmp
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    setFieldT: bindActionCreators(setFieldT, dispatch),
    getStudentInSec: bindActionCreators(getStudentInSec, dispatch),
    getCourse: bindActionCreators(getCourse, dispatch)
  };
};

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

class ConfigGrade extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    if (this.props.queryCourse === "true") {
      this.props.getCourse(this.props.userId);
      this.props.setFieldT("queryCourse", "false");
    }
    let newData = this.props.courseList.map(e => {
      let obj = { ...e };
      obj["title"] = e.CID;
      obj["description"] = {
        courseName: e.CABname,
        academicyear: e.academicyear,
        term: e.term,
        section: e.secnumber
      };
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
            dataSource={newData}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar icon="user" size="small" />}
                  title={
                    <Link
                      onClick={e => {
                        this.props.setFieldT("CID", item.title);
                        this.props.setFieldT("courseDetail", item.description);
                        this.props.getStudentInSec(
                          item.title,
                          item.description.academicyear,
                          item.description.term,
                          item.description.section
                        );
                      }}
                      //${item.title}
                      to={this.props.match.url + `/${item.title}`}
                    >
                      {item.title +
                        " - " +
                        item.description.courseName +
                        " Year " +
                        item.description.academicyear +
                        "/" +
                        item.description.term +
                        " Section " +
                        item.description.section}
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

export default connect(mapStateToProps, mapDispatchToProps)(ConfigGrade);
