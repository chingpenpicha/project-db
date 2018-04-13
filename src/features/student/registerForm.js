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
  onChangeCourseId(state,value){
    console.log(value);
    return{
      ...state,
      courseId : value
    };
  }

  onChangeSection(state,value){
    return{
      ...state,
      section : value
    };
  }

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
            })(<Input onChange={e => this.props.onChangeCourseId(e.target.value)} />)}
          </FormItem>
        </Col>
        <Col span={6} key={2}>
          <div>
            เดี๋ยวค่อย
          </div>
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
            })(<Input onChange={e => this.props.onChangeSection(e.target.value)} />)}
          </FormItem>
        </Col>
      </Row>
    );
  }
}

const WrappedDynamicRule = Form.create()(DynamicRule);

export default WrappedDynamicRule;
