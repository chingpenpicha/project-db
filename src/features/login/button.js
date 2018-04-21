import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "antd";

class MyButton extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.props.props.logOut();
  }

  render() {
    if (this.props.props.loginSuccess == "true") {
      this.props.props.onChange("loginSuccess", "false");
      let tmp = this.props.props.userId;
      this.props.props.onChange("userIdTmp", this.props.props.userId);
      this.props.props.onChange("password", "");
      this.props.props.onChange("userId", "");
      this.props.props.onChange("userType","Student");
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
          Log in
        </Button>
      );
    }
  }
}

export default MyButton;
