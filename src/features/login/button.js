import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import axios from "axios";

var check = false;

class MyButton extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    var parent = this;
    //use this.props.userId to query password
    //and check condition if id and password match.
    console.log("in");

    if (parent.props.props.userType === "student") {
      console.log("in student ");
      axios
        .post("http://localhost:8000/student_reg", {
          username: this.props.props.userId,
          password: this.props.props.password
        })
        .then(function(response) {
          console.log(parent);
          if (response.data.valid == "true") {
            console.log("in");
            parent.props.props.onChange("loginSuccess", "true");
            parent.props.props.setField("FName", response.data.FName);
            parent.props.props.setField("LName", response.data.LName);
            parent.props.props.setField(
              "studentFaculty",
              response.data.faculty
            );
            parent.props.props.setField("studentCode", this.props.props.userId);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    } else if (parent.props.props.userType === "teacher") {
      console.log("in teacher ");
      axios
        .post("http://localhost:8000/teacher_reg", {
          username: this.props.props.userId,
          password: this.props.props.password
        })
        .then(function(response) {
          console.log(parent);
          if (response.data.valid == "true") {
            console.log("in");
            parent.props.props.onChange("loginSuccess", "true");
            parent.props.props.setField("FName", response.data.FName);
            parent.props.props.setField("LName", response.data.LName);
            parent.props.props.setField(
              "studentFaculty",
              response.data.faculty
            );
            parent.props.props.setField("studentCode", this.props.props.userId);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      console.log("easy as fuc");
    }
    console.log(check);
    if (this.props.props.loginSuccess == "true") {
      return (
        <Button
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
          <Link
            to={
              "/" +
              this.props.props.userType +
              "/" +
              this.props.props.userName +
              "/home"
            }
          >
            Log in
          </Link>
        </Button>
      );
    } else {
      return (
        <Button
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
    }
  }
}

export default MyButton;
