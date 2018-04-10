import React from "react";
import { Form, Input, Button, Col, Row } from "antd";
const FormItem = Form.Item;

class DynamicRule extends React.Component {
  check = () => {
    this.props.form.validateFields(err => {
      if (!err) {
        console.info("success");
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row gutter={24}>
        <Col span={6} key={1}>
          <FormItem>
            {getFieldDecorator("courseID", {
              rules: [
                {
                  required: true,
                  message: "Please input Course ID"
                }
              ]
            })(<Input />)}
          </FormItem>
        </Col>
        <Col span={6} key={2}>
          <FormItem>
            <Input />
          </FormItem>
        </Col>
        <Col span={6} key={3}>
          <FormItem>
            {getFieldDecorator("section", {
              rules: [
                {
                  required: true,
                  message: "Please input section"
                }
              ]
            })(<Input />)}
          </FormItem>
        </Col>
      </Row>
    );
  }
}

const WrappedDynamicRule = Form.create()(DynamicRule);

export default WrappedDynamicRule;
