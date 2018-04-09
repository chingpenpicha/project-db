import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

class MyButton extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    //use this.props.userId to query password
    //and check condition if id and password match.
    if (this.props.studentName == "Boss") {
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
          <Link to={"/student/" + this.props.studentName + "/home"}>
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
          {" "}
          Log in{" "}
        </Button>
      );
    }
  }
}

export default MyButton;
