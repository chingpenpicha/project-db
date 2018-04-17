import React, { Component } from "react";
import { Card, Table } from "antd";

const columns = [
  {
    title: "Section",
    dataIndex: "secnumber"
  },
  {
    title: "Day",
    dataIndex: "day"
  },
  {
    title: "Time",
    dataIndex: "time"
  },
  {
    title: "Teacher",
    dataIndex: "TFName"
  },
  {
    title: "Number of Enroll",
    dataIndex: "count"
  }
];

const data = [
  {
    key: "1",
    secnumber: "1",
    day: "Mon,Wed",
    time: "8.00-16.00",
    TFName: "นานา",
    count: "20/30"
  },
  {
    key: "2",
    secnumber: "2",
    day: "Tue,Thu",
    time: "9.00-17.00",
    TFName: "อาอา",
    count: "10/40"
  }
];

class SearchTableItem extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div style={{ padding: "10px" }}>
        <Card
          title={this.props.title}
          bordered={false}
          style={{ width: "80%" }}
        >
          <Table
            columns={columns}
            dataSource={data}
            size="middle"
            pagination={false}
          />
        </Card>
      </div>
    );
  }
}
export default SearchTableItem;
