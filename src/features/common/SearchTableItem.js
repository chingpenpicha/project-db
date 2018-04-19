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
    startTime: "8.00",
    endTime: "16.00",
    TFName: "นานา",
    count: "20/30"
  },
  {
    key: "2",
    secnumber: "2",
    day: "Tue,Thu",
    startTime: "9.00",
    endTime: "17.00",
    TFName: "อาอา",
    count: "10/40"
  }
];

const newData = data.map(e => {
  let obj = { ...e };
  obj["time"] = e.startTime + " - " + e.endTime;
  return obj;
});

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
            dataSource={newData}
            size="middle"
            pagination={false}
          />
        </Card>
      </div>
    );
  }
}
export default SearchTableItem;
