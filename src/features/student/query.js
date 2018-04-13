import React, { Component } from "react";

class MyQuery extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    if(this.props.type == "leftSider" && this.props.studentCode == ""){
      this.props.setField("studentName","Test Yoh");
      this.props.setField("studentCode","121351");
      this.props.setField("stendentFaculty","SiamCenter");
    }else if(this.props.type == "gradeResult"){
      this.props.setField("studentGrade",[{
        key: "1",
        courseId: "213112",
        courseName: "DB",
        credit: "3",
        grade: "A",
        semester: "2017/1"
      },
      {
        key: "2",
        courseId: "211111",
        courseName: "SA",
        credit: "3",
        grade: "A",
        semester: "2017/2"
      }]
    )

    }
    return (<div/>);
  }
}

export default MyQuery;
