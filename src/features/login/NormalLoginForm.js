import React from "react";
import "./NormalLoginForm.css";

import { Link } from "react-router-dom";

import { Form, Icon, Input, Button, Radio } from "antd";
import { width } from "window-size";
const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export default props => (

  <div>
    <div>
      <h1> Log in As</h1>
      <RadioGroup
        onChange={e => props.onChangeRadio(e.target.value)}
        defaultValue="Student"
      >
        <RadioButton
          style={{ width: 200, textAlign: "center" }}
          value="Student"
        >
          Student
        </RadioButton>
        <RadioButton
          style={{ width: 200, textAlign: "center" }}
          value="Teacher"
        >
          Teacher
        </RadioButton>
      </RadioGroup>
    </div>
    <div style={{ marginTop: 20 }}>
      <Form onSubmit={this.handleSubmit} className="login-form ">
        <FormItem>
          <h3>Username</h3>
          <Input
            onChange={e => props.onChange("userId", e.target.value)}
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Username"
          />
        </FormItem>
        <FormItem>
          <h3>Password</h3>
          <Input
            onChange={e => props.onChange("password",e.target.value)}
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
          />
        </FormItem>
        <FormItem>
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
            <Link to = {"/student/" + props.userId}>Log in</Link>
          </Button>
        </FormItem>
      </Form>
    </div>
  </div>
);
