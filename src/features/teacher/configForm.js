import React from "react";
import { Form, Input, Col, Row } from "antd";
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
    const { sid, sname } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <Row gutter={24}>
        <Col span={6} key={1}>
          <FormItem>{sid}</FormItem>
        </Col>
        <Col span={6} key={2}>
          <FormItem>{sname}}</FormItem>
        </Col>
        <Col span={6} key={3}>
          <FormItem>
            {getFieldDecorator("grade", {
              rules: [
                {
                  required: true,
                  message: "Please input grade"
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
