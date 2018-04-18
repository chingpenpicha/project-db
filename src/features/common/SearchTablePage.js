import React from "react";
import "./LeftSider.css";
import WrappedDynamicRule from "./SearchTableForm";
import SearchTableItem from "./SearchTableItem";
import { connect } from "react-redux";
import { setField, setType, searchCourse } from "./reducer";
import { Layout } from "antd";

const { Header } = Layout;

const enhance = connect(
  state => ({
    CABname: state.search.CABname,
    CID: state.search.CID,
    academicYear: state.search.academicYear,
    term: state.search.term,
    searchResult: state.search.searchResult
  }),
  { setField, setType, searchCourse }
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
        <WrappedDynamicRule
          onSearch={(CID, CABname, academicYear, term) =>
            props.searchCourse(CID, CABname, academicYear, term)
          }
          onChangeSelect={e => props.setType(e)}
          onChangeCID={value => this.props.setField("CID", value)}
          onChangeCABname={value => this.props.setField("CABname", value)}
          onChangeAcademicYear={value =>
            this.props.setField("academicYear", value)
          }
        />
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
