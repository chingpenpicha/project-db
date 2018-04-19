import React from "react";
import { connect } from "react-redux";
import { getPayment } from "./reducer";
import { Layout, Table } from "antd";

const { Header } = Layout;

const mapStateToProps = state => {
  return {
    FName: state.login.userInformation.Fname,
    LName: state.login.userInformation.Lname,
    userId: state.login.userIdTmp,
    studentFaculty: state.login.userInformation.faculty,
    paymentStatus: state.student.paymentStatus
  };
};

const mapDispatchToProps = {
  getPayment: getPayment
};

const columns = [
  {
    title: "Time Stamp",
    dataIndex: "paydate"
  },
  {
    title: "Academic Year",
    dataIndex: "academicyear"
  },
  {
    title: "Semester",
    dataIndex: "term"
  },
  {
    title: "Fee",
    dataIndex: "tuitionfee"
  },
  {
    title: "Status",
    dataIndex: "status"
  }
];

class PaymentPage extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    console.log("first get payment");
    this.props.getPayment(this.props.userId);
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
          <h1>ชำระค่าเล่าเรียน</h1>
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
          <h3>สถานะการชำระเงิน</h3>

          <Table
            columns={columns}
            dataSource={this.props.paymentStatus}
            rowKey="paydate"
            size="middle"
            pagination={false}
          />
        </Layout>
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentPage);
