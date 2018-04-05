import React from "react";
import "./NormalLoginForm.css";
import { Form, Icon, Input, Button, Checkbox } from "antd";
const FormItem = Form.Item;

export default () => (
  <Form onSubmit={this.handleSubmit} className="login-form ">
    <FormItem>
      <h3>Username</h3>
      <Input
        prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
        placeholder="Username"
      />
    </FormItem>
    <FormItem>
      <h3>Password</h3>
      <Input
        prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
        type="password"
        placeholder="Password"
      />
    </FormItem>
    <FormItem>
      <Button type="primary" htmlType="submit" className="login-form-button">
        Log in
      </Button>
    </FormItem>
  </Form>
);
