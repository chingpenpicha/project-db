import React, { Component } from "react";
import { Link,Redirect } from "react-router-dom";
import { Button } from "antd";
import axios from "axios";

class MyButton extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    if (this.props.props.loginSuccess == "true") {
      this.props.props.onChange("loginSuccess","false");
      return (
          <Redirect to={"/student/" + this.props.props.userId + "/home"}>Log in</Redirect>
      );
    } else {
      console.log(this.props.props.userId)
      console.log(this.props.props.password)
      return (
        <Button
          onClick = {e => this.props.props.loginVerify(this.props.props.userId,this.props.props.password)}
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
console.log("in");
axios.post('http://localhost:8000/student_reg', {
username: this.props.props.userId,
password: this.props.props.password
})
.then(function (response) {
console.log(parent);
if(response.data.valid == "true"){
  console.log("in");
  parent.props.props.onChange("loginSuccess", "true")
  parent.props.props.setField("FName",response.data.FName)
  parent.props.props.setField("LName",response.data.LName)
  parent.props.props.setField("studentFaculty",response.data.faculty)
  parent.props.props.setField("studentCode",this.props.props.userId)
}
})
.catch(function (error) {
console.log(error);
});*/
