import React from "react";
import { connect } from "react-redux";
import { getDoc, requestDoc, onChangeDocName } from "./reducer";
import { Layout, Table, Select, Button, Icon, Popconfirm } from "antd";

const Option = Select.Option;
const { Header } = Layout;

//import "./Search.css";
const mapStateToProps = state => {
  return {
    FName: state.login.userInformation.Fname,
    LName: state.login.userInformation.Lname,
    userId: state.login.userIdTmp,
    studentFaculty: state.login.userInformation.faculty,
    docStatus: state.student.docStatus,
    docName: state.student.docName
  };
};

const mapDispatchToProps = {
  getDoc: getDoc,
  requestDoc: requestDoc,
  onChangeDocName: onChangeDocName
};

const columns = [
  {
    title: "Date",
    dataIndex: "timestamp"
  },
  {
    title: "Document Name",
    dataIndex: "type"
  },
  {
    title: "Status",
    dataIndex: "docStatus"
  }
];

class DocumentRequestPage extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    console.log("first get doc");
    this.props.getDoc(this.props.userId);
  }

  render() {
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
          <h1>ขอใบคำร้อง</h1>
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
            <h3>ขอใบคำร้อง</h3>
            <Select
              onChange={e => this.props.onChangeDocName(e)}
              placeholder="Please select the document"
              style={{ width: "60%" }}
            >
              <Option value="Transcript">
                CR25: ใบแสดงผลการศึกษา (Transcript)
              </Option>
              <Option value="Certificate of student status">
                CR23: หนังสือรับรองการเป็นนิสิต (Certificate of student status)
              </Option>
              <Option
                value="Thai Police Clearance
                Certificate"
              >
                CR24: หนังสือรับรองความประพฤติ (Thai Police Clearance
                Certificate)
              </Option>
              <Option value="Qualification Certificate">
                CR26: หนังสือรับรองคุณวุฒิ (Qualification Certificate)
              </Option>
              <Option value="Final semester guarantee">
                CR27: หนังสือรับรองสำเร็จการศึกษา (Final semester guarantee)
              </Option>
            </Select>

            <Popconfirm
              onConfirm={e =>
                this.props.requestDoc(this.props.userId, this.props.docName)
              }
              placement="right"
              title="ต้องการทำรายการใช่หรือไม่"
              okText="ใช่"
              cancelText="ไม่"
            >
              <Button type="primary">ยืนยัน</Button>
            </Popconfirm>
          </div>
          <div style={{ marginTop: 50 }}>
            <h3>สถานะใบคำร้อง</h3>
            <Table
              rowKey="timestamp"
              columns={columns}
              dataSource={this.props.docStatus}
              size="middle"
              pagination={false}
            />
          </div>
        </Layout>
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  DocumentRequestPage
);
