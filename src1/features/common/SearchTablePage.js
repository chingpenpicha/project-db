import React from "react";
import "./LeftSider.css";
import { connect } from "react-redux";
import {} from "./reducer";
import { Layout, Table } from "antd";
import { Form, Row, Col, Input, Button, Icon, Menu, Select } from "antd";

const Option = Select.Option;
const FormItem = Form.Item;
const { Header } = Layout;

const enhance = connect(
  state => ({
    courseRegist: state.student.courseRegist,
    studentName: state.student.studentName,
    studentCode: state.student.studentCode,
    studentFaculty: state.student.studentFaculty
  }),
  {}
);

class AdvancedSearchForm extends React.Component {
  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log("Received values of form: ", values);
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  // To generate mock Form.Item
  getFields() {
    const { getFieldDecorator } = this.props.form;
    const children = [];

    //form1
    children.push(
      <Col span={6} key={0}>
        <FormItem label={"CourseId"}>
          <Input placeholder="Course Id" />
        </FormItem>
      </Col>
    );

    //form2
    children.push(
      <Col span={6} key={1}>
        <FormItem label={`CourseName`}>
          <Input placeholder="Course Name" />
        </FormItem>
      </Col>
    );

    //form3
    children.push(
      <Col span={4} key={2}>
        <FormItem label={`Academic Year`}>
          {getFieldDecorator(`year`, {
            rules: [
              {
                required: true,
                message: "Input Year!"
              }
            ]
          })(<Input placeholder="Year" />)}
        </FormItem>
      </Col>
    );

    //form4
    children.push(
      <Col span={4} key={3}>
        <FormItem label={`Semester`}>
          {getFieldDecorator(`year`, {
            rules: [
              {
                required: true,
                message: "Input Year!"
              }
            ]
          })(
            <Select placeholder="Semester">
              <Option value="Option1-1">1st Semester</Option>
              <Option value="Option1-2">2nd Semester</Option>
              <Option value="Option1-2">Summer</Option>
            </Select>
          )}
        </FormItem>
      </Col>
    );
    return children;
  }

  render() {
    return (
      <Form onSubmit={this.handleSearch}>
        <Row gutter={24}>
          {this.getFields()}

          <Col span={4} style={{ textAlign: "right" }}>
            <div style={{ marginTop: 42 }}>
              <Button type="primary" htmlType="submit">
                Search
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                Clear
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    );
  }
}
const WrappedAdvancedSearchForm = Form.create()(AdvancedSearchForm);

const columns = [
  {
    title: "CourseId",
    dataIndex: "courseId"
  },
  {
    title: "CourseName",
    dataIndex: "courseName"
  },
  {
    title: "Section",
    dataIndex: "section"
  },
  {
    title: "Credit",
    dataIndex: "credit"
  }
];

const data = [
  {
    key: "1",
    courseId: "John Brown",
    courseName: 32,
    section: "New York No. 1 Lake Park",
    credit: "3"
  },
  {
    key: "2",
    courseId: "Jim Green",
    courseName: 42,
    section: "London No. 1 Lake Park",
    credit: "3"
  }
];

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
        paddingLeft: 100,
        paddingRight: 100
      }}
    >
      <div>
        <WrappedAdvancedSearchForm />
        <div className="search-result-list">Search Result List</div>
      </div>
    </Layout>
  </Layout>
);

export default enhance(SearchTablePage);
