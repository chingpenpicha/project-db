import React from "react";
import "./LeftSider.css";
import WrappedDynamicRule from "./SearchTableForm";
import SearchTableItem from "./SearchTableItem";
import { connect } from "react-redux";
import { setFieldS, searchCourse } from "./reducer";
import { setField } from "../student/reducer";
import { Layout } from "antd";
import { bindActionCreators } from "redux";

const { Header } = Layout;

const mapStateToProps = state => {
  return {
    courseName: state.search.courseName,
    CID: state.search.CID,
    academicYear: state.search.academicYear,
    semester: state.search.semester,
    searchResult: state.search.searchResult,
    clearSearch: state.student.clearSearch
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    setField: bindActionCreators(setField, dispatch),
    setFieldS: bindActionCreators(setFieldS, dispatch),
    searchCourse: bindActionCreators(searchCourse, dispatch)
  };
};

class SearchTablePage extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    if (this.props.clearSearch === "true") {
      this.props.setField("clearSearch", false);
      this.props.setFieldS("searchResult", []);
    }
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
          <h1>ค้นหารายวิชา</h1>
        </Header>
        <Layout
          style={{
            background: "#fff",
            marginLeft: 200,
            marginTop: 50,
            paddingLeft: 200,
            paddingRight: 100
          }}
        >
          <div>
            <WrappedDynamicRule
              onChangeCID={value => this.props.setFieldS("CID", value)}
              onChangeCourseName={value =>
                this.props.setFieldS("courseName", value)
              }
              onChangeAcademyYear={value =>
                this.props.setFieldS("academicYear", value)
              }
              onChangeSemester={value =>
                this.props.setFieldS("semester", value)
              }
              search={() =>
                this.props.searchCourse(
                  this.props.CID,
                  this.props.courseName,
                  this.props.academicYear,
                  this.props.semester
                )
              }
            />
            <br />
            <h3>Search Result List</h3>
            <br />
            {this.props.searchResult.map(e => (
              <li key={e.CID}>
                <SearchTableItem
                  title={e.CID + " : " + e.CEname}
                  data={e.data}
                />
              </li>
            ))}
          </div>
        </Layout>
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchTablePage);
