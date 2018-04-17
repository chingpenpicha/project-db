import React from "react";
import "./LeftSider.css";
import WrappedDynamicRule from "./SearchTableForm";
import SearchTableItem from "./SearchTableItem";
import { connect } from "react-redux";
import { setField } from "./reducer";
import { Layout } from "antd";

const { Header } = Layout;

const enhance = connect(
  state => ({
    courseName: state.search.courseName,
    CID: state.search.CID,
    academicYear: state.search.academicYear,
    semester: state.search.semester,
    searchResult: state.search.searchResult
  }),
  { setField }
);

const SearchTablePage = props => (
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
        <WrappedDynamicRule />
        <br />
        <h3>Search Result List</h3>
        <br />
        <SearchTableItem title="2110251 : DIGITAL COMPUTER LOGIC" />
        <SearchTableItem title="2111111 : ASDADSWEQEWQEWQE WER LOGIC" />
      </div>
    </Layout>
  </Layout>
);

export default enhance(SearchTablePage);
