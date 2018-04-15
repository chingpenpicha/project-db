import React, {Component} from "react";
import { Card, Table } from "antd";

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
    title: "Credit",
    dataIndex: "credit"
  },
  {
    title: "Grade",
    dataIndex: "grade"
  }
];

const data = [
     {
       key: "1",
       courseId: "213112",
       courseName: "DB",
       credit: "3",
       grade: "A"
     },
     {
       key: "2",
       courseId: "211111",
       courseName: "SA",
       credit: "3",
       grade: "A"
     }
   ];

class GradeTable extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    console.log(props);

  }


  render(){
    return(
     <div style={{ padding: "10px" }}>
       <Card title={this.props.title} bordered={false} style={{ width: "80%" }}>
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
export default GradeTable;
