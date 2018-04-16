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
  onChangeCID(state, value) {
    return {
      ...state,
      CID: value
    };
  }

  onChangesecnumber(state, value) {
    return {
      ...state,
      secnumber: value
    };
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row gutter={24}>
        <Col span={6} key={1}>
          <FormItem>
            {getFieldDecorator("CID", {
              rules: [
                {
                  required: true,
                  message: "Please input Course ID"
                }
              ]
            })(
              <Input
                onChange={e => this.props.onChangeCID(e.target.value)}
              />
            )}
          </FormItem>
        </Col>
        <Col span={6} key={2}>
          <div>เดี๋ยวค่อย</div>
        </Col>
        <Col span={6} key={3}>
          <FormItem>
            {getFieldDecorator("secnumber", {
              rules: [
                {
                  required: true,
                  message: "Please input section"
                }
              ]
            })(
              <Input
                onChange={e => this.props.onChangesecnumber(e.target.value)}
              />
            )}
          </FormItem>
        </Col>
      </Row>
    );
  }
}

const WrappedDynamicRule = Form.create()(DynamicRule);

export default WrappedDynamicRule;
