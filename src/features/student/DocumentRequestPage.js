import React from "react";
import { connect } from "react-redux";
import { setField } from "./reducer";
import { Layout, Table, Select, Button, Icon, Popconfirm } from "antd";

const Option = Select.Option;
const { Header } = Layout;

const enhance = connect(
  state => ({
    courseRegist: state.student.courseRegist,
    studentName: state.student.studentName,
    studentCode: state.student.studentCode,
    studentFaculty: state.student.studentFaculty
  }),
  { setField }
);

const columns = [
  {
    title: "Date",
    dataIndex: "date"
  },
  {
    title: "Document Name",
    dataIndex: "docName"
  },
  {
    title: "Status",
    dataIndex: "status"
  }
];

const data = [
  {
    key: "1",
    date: "19-02-2014",
    docName: "Transcript",
    status: "Processing"
  },
  {
    key: "2",
    date: "19-02-2016",
    docName: "ComfirmNisit",
    status: "Complete"
  }
];

const DocumentRequestPage = props => (
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
          placeholder="Please select the document"
          style={{ width: "60%" }}
        >
          <Option value="transcript">
            CR25: ใบแสดงผลการศึกษา (Transcript)
          </Option>
          <Option value="statusCertificate">
            CR23: หนังสือรับรองการเป็นนิสิต (Certificate of student status)
          </Option>
          <Option value="politeCertificate">
            CR24: หนังสือรับรองความประพฤติ (Thai Police Clearance Certificate)
          </Option>
          <Option value="qualificationCertificate">
            CR26: หนังสือรับรองคุณวุฒิ (Qualification Certificate)
          </Option>
          <Option value="finalGuarantee">
            CR27: หนังสือรับรองสำเร็จการศึกษา (Final semester guarantee)
          </Option>
        </Select>

        <Popconfirm
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
          columns={columns}
          dataSource={data}
          size="middle"
          pagination={false}
        />
      </div>
    </Layout>
  </Layout>
);

export default enhance(DocumentRequestPage);
