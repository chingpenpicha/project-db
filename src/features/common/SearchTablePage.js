import React from "react";
import "./LeftSider.css";
import WrappedDynamicRule from "./SearchTableForm";
import SearchTableItem from "./SearchTableItem";
import { connect } from "react-redux";
import { setField, searchCourse } from "./reducer";
import { Layout } from "antd";
import { bindActionCreators } from "redux";

const { Header } = Layout;

const mapStateToProps = state => {
  return {
    courseName: state.search.courseName,
    CID: state.search.CID,
    academicYear: state.search.academicYear,
    term: state.search.term,
    searchResult: state.search.searchResult
  }}

const mapDispatchToProps = (dispatch, props) => {
  return {
    setField: bindActionCreators(setField, dispatch),
    searchCourse: bindActionCreators(searchCourse, dispatch)
  };
};

class SearchTablePage extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
  return(
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
          onChangeCID = {value => this.props.setField("CID",value)}
          onChangeCourseName = {value => this.props.setField("courseName",value)}
          onChangeAcademyYear = {value => this.props.setField("academicYear",value)}
          onChangeSemester = {value => this.props.setField("semester",value)}
          search = {() => this.props.searchCourse(this.props.CID, this.props.courseName,
             this.props.academicYear, this.props.semester)}
         />
        <br />
        <h3>Search Result List</h3>
        <br />
        <SearchTableItem title="2110251 : DIGITAL COMPUTER LOGIC" />
        <SearchTableItem title="2111111 : ASDADSWEQEWQEWQE WER LOGIC" />
      </div>
    </Layout>
  </Layout>)
}}

export default connect(mapStateToProps, mapDispatchToProps)(SearchTablePage);
