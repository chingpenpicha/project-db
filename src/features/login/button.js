import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "antd";
import axios from "axios";

class MyButton extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    console.log("HERE");
    console.log(this.props.props);
    if (this.props.props.loginSuccess == "true") {
      this.props.props.onChange("loginSuccess", "false");
      let tmp = this.props.props.userId;
      this.props.props.onChange("userIdTmp", this.props.props.userId);
      this.props.props.onChange("password", "");
      this.props.props.onChange("userId", "");
      if (this.props.props.userType == "Student") {
        return <Redirect to={"/student/" + tmp + "/home"}>Log in</Redirect>;
      } else {
        return <Redirect to={"/teacher/" + tmp + "/home"}>Log in</Redirect>;
      }
    } else if (this.props.props.userType === "Student") {
      return (
        <Button
          onClick={e =>
            this.props.props.loginVerifyStudent(
              this.props.props.userId,
              this.props.props.password
            )
          }
          type="primary"
          htmlType="submit"
          className="login-form-button"
          style={{
            width: 200,
            textAlign: "center",
            height: 50,
            fontSize: 20,
            marginTop: 10
          }}
        >
          Log in
        </Button>
      );
    } else {
      return (
        <Button
          onClick={e =>
            this.props.props.loginVerifyTeacher(
              this.props.props.userId,
              this.props.props.password
            )
          }
          type="primary"
          htmlType="submit"
          className="login-form-button"
          style={{
            width: 200,
            textAlign: "center",
            height: 50,
            fontSize: 20,
            marginTop: 10
          }}
        >
          {" "}
          Log in{" "}
        </Button>
      );
    }
  }
}

export default MyButton;

/*
return(
  <Redirect to={"/teacher/home"}>Log in</Redirect>
)
var parent = this;
//use this.props.userId to query password
//and check condition if id and password match.
axios.post('http://localhost:8000/student_reg', {
username: this.props.props.userId,
password: this.props.props.password
})
.then(function (response) {
if(response.data.valid == "true"){
  parent.props.props.onChange("loginSuccess", "true")
  parent.props.props.setField("FName",response.data.FName)
  parent.props.props.setField("LName",response.data.LName)
  parent.props.props.setField("studentFaculty",response.data.faculty)
  parent.props.props.setField("studentCode",this.props.props.userId)
}
})
.catch(function (error) {
});*/
