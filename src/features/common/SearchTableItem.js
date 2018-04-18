import React, { Component } from "react";
import { Card, Table } from "antd";

const columns = [
  {
    title: "Section",
    dataIndex: "secnumber"
  },
  {
    title: "Day",
    dataIndex: "Sday"
  },
  {
    title: "Time",
    dataIndex: "time"
  },
  {
    title: "Teacher",
    dataIndex: "TFname"
  },
  {
    title: "Room",
    dataIndex : "room"
  },
  {
    title: "Number of Enroll",
    dataIndex: "enroll"
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
    let newData = this.props.data.map(e => {
      let obj = {...e};
      obj["room"] = e.BABname + " " + e.roomNumber;
      obj["time"] = e.starttime+" - "+e.endtime;
      obj["enroll"] = e.currentNumberStudent + "/" + e.maxnumberstudent;
      return obj;
    })  ;/*
    let prevSec = 1;
    let useData = [];
    useData.push(newData[0]);
    for(var i = 1 ; i < newData.length ; i++){
      let check = true;
      if(newData[i].secnumber === prevSec){
        useData[useData.length-1].Sday = useData[useData.length-1].Sday + ", " + newData[i].Sday;
        check = false;
      }
      prevSec = newData[i].secnumber;
      if(check){
        useData.push(newData[i]);
      }
    }
    console.log(useData)*/
    return (
      <div style={{ padding: "10px" }}>
        <Card
          title={this.props.title}
          bordered={false}
          style={{ width: "80%" }}
        >
          <Table
            rowKey = "secnumber"
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
