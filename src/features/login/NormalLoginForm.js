import React from "react";
import "./NormalLoginForm.css";

import { Form, Icon, Input, Radio, Alert } from "antd";

import MyButton from "./button";

const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export default props => (
  <div>
    <div>
      {props.loginSuccess == "false" && (
        <Alert
          style={{ width: "45%", marginBottom: 10 }}
          message="Invalid Username or Password"
          type="error"
          showIcon
        />
      )}
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
            onChange={e => props.onChange("password", e.target.value)}
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
          />
        </FormItem>
        <FormItem>
          <MyButton props={props} />
        </FormItem>
      </Form>
    </div>
  </div>
);
