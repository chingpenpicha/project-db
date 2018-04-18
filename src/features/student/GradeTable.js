import React, {Component} from "react";
import { Card, Table } from "antd";

const columns = [
  {
    title: "CourseId",
    dataIndex: "CID"
  },
  {
    title: "CourseName",
    dataIndex: "CTname"
  },
  {
    title: "Credit",
    dataIndex: "credit"
  },
  {
    title: "Grade",
    dataIndex: "grade"
  }
];

class GradeTable extends Component {
  constructor(props) {
    super(props);
    this.props = props;

  }


  render(){
    return(
     <div style={{ padding: "10px" }}>
       <Card title={this.props.title} bordered={false} style={{ width: "80%" }}>
         <Table
           rowKey = "courseId"
           columns={columns}
           dataSource={this.props.gradeResult}
           size="middle"
           pagination={false}
         />
       </Card>
      </div>
    );
  }



}
export default GradeTable;
