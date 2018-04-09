import React from "react";
import { connect } from "react-redux";
import { setField } from "./reducer";
import { Layout, Menu, Form, Icon, Input, Button, Radio } from "antd";
import ReactTable from 'react-table';
import 'react-table/react-table.css'

import { Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const FormItem = Form.Item;
const columns = [{
   Header: 'CourseId',
   accessor: 'courseId' // String-based value accessors!
 }, {
   Header: 'CourseName',
   accessor: 'courseName'
 }, {
   Header: 'Section',
   accessor: 'section'
 }, {
   Header: 'Credit',
   accessor: 'credit'
 }
]

const enhance = connect(
  state => ({
    courseRegist: state.student.courseRegist,
    studentName : state.student.studentName,
    studentCode : state.student.studentCode,
    studentFaculty : state.student.studentFaculty
  }),
  { setField }
);

const registerPage = props => (
  <Layout style = {{background : "#fff"}}>
    <Header style = {{background : "#fff", textAlign : "center", marginLeft : 500, marginTop : 100}}>
      <div>
        Faculty : {props.studentFaculty}      Name : {props.studentName}      Code : {props.studentCode}
        <ReactTable
            style = {{width : 1000, background : "#fff", textAlign : "center"}}
            data={props.courseRegist}
            columns={columns}
            showPagination = {false}
            defaultPageSize = {10}
            width = {35}
            sortable = {false}
            />
        <div>Boss @Coperation</div>
      </div>
    </Header>
  </Layout>

)

export default enhance(registerPage);
