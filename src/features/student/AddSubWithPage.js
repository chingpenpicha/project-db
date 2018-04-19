import React from "react";
import { connect } from "react-redux";
import {
  setField,
  confirmRegist,
  dropCourse,
  withDrawCourse,
  addSubject
} from "./reducer";
import WrappedDynamicRule from "./registerForm";
import { bindActionCreators } from "redux";
import { Layout, Table, Row, Col, Button, Form, Popconfirm } from "antd";
const { Header, Footer } = Layout;

const mapStateToProps = state => {
  return {
    dropCourseVar: state.student.dropCourse,
    courseRegistW: state.student.courseRegistW,
    studentName: state.student.studentName,
    studentCode: state.student.studentCode,
    studentFaculty: state.student.studentFaculty,
    userId: state.student.userIdTmp,
    courseRegistTmp: [{ CID: state.student.ci0, secnumber: state.student.st0 }]
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    addSubject: bindActionCreators(addSubject, dispatch),
    setField: bindActionCreators(setField, dispatch),
    confirmRegist: bindActionCreators(confirmRegist, dispatch),
    dropCourse: bindActionCreators(dropCourse, dispatch),
    withDrawCourse: bindActionCreators(withDrawCourse, dispatch)
  };
};

const columns = [
  {
    title: "CourseId",
    dataIndex: "CID"
  },
  {
    title: "CourseName",
    dataIndex: "CABname"
  },
  {
    title: "Section",
    dataIndex: "secnumber"
  },
  {
    title: "Credit",
    dataIndex: "credit"
  }
];

// rowSelection object indicates the need for row selection
class AddSubWithPage extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      /*console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );*/
      this.props.setField("dropCourse", selectedRows);
    },
    getCheckboxProps: record => ({
      name: record.name
    })
  };

  render() {
    var dataSource = this.props.courseRegistW;
    if (this.props.courseRegistW == "-") {
      dataSource = [];
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
          <h1>เพิ่ม/ลด/ถอน</h1>
        </Header>
        <Layout
          style={{
            background: "#fff",
            marginLeft: 200,
            marginTop: 50,
            paddingLeft: 200,
            paddingRight: 200
          }}
        >
          <h3>ลด/ถอน</h3>
          <Table
            rowKey="CID"
            rowSelection={this.rowSelection}
            columns={columns}
            dataSource={dataSource}
            size="middle"
            pagination={false}
          />

          <div
            style={{ paddingRight: 100, marginTop: 10, textAlign: "center" }}
          >
            <Button
              style={{ width: 100 }}
              type="primary"
              htmlType="submit"
              onClick={e =>
                this.props.dropCourse(
                  this.props.userId,
                  this.props.dropCourseVar
                )
              }
            >
              ลด
            </Button>
            <Popconfirm
              onConfirm={e =>
                this.props.withDrawCourse(
                  this.props.userId,
                  this.props.dropCourseVar
                )
              }
              placement="right"
              title="ต้องการยืนยันใช่หรือไม่"
              okText="ใช่"
              cancelText="ไม่"
            >
              <Button
                style={{ width: 100, marginLeft: 100, marginTop: 20 }}
                type="danger"
              >
                ถอน
              </Button>
            </Popconfirm>
          </div>
        </Layout>

        <Layout
          style={{
            background: "#fff",
            marginLeft: 200,
            marginTop: 50,
            paddingLeft: 300,
            paddingRight: 200
          }}
        >
          <h3>เพิ่ม</h3>
          <Form>
            <Row
              gutter={24}
              style={{
                background: "#eee",
                width: "77%",
                height: 40,
                textAlign: "left",
                padding: 10,
                marginBottom: 15
              }}
            >
              <Col span={12} style={{ textAlign: "Left" }}>
                <b>Course ID</b>
              </Col>

              <Col span={4} style={{ textAlign: "Left" }}>
                <b>Section</b>
              </Col>
            </Row>

            <WrappedDynamicRule
              onChangeCID={value => this.props.setField("ci0", value)}
              onChangesecnumber={value => this.props.setField("st0", value)}
            />

            <div
              style={{ paddingRight: 200, marginTop: 10, textAlign: "center" }}
            >
              <Button
                style={{ width: 100 }}
                type="primary"
                htmlType="submit"
                onClick={e =>
                  this.props.addSubject(
                    this.props.courseRegistTmp,
                    this.props.userId
                  )
                }
              >
                Save
              </Button>

              <Footer
                style={{ marginLeft: 100, width: "100%", background: "#fff" }}
              />
            </div>
          </Form>
          <Footer
            style={{ marginLeft: 100, width: "100%", background: "#fff" }}
          />
        </Layout>
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSubWithPage);
