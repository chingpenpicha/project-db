import React from "react";
import { Form, Input, Col, Row, Select, Button } from "antd";
const Option = Select.Option;
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

  onChangeCABName(state, value) {
    return {
      ...state,
      CABname: value
    };
  }

  onChangeAcademicYear(state, value) {
    return {
      ...state,
      academicyear: value
    };
  }

  onChangeSemester(state, value) {
    return {
      ...state,
      term: value
    };
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row gutter={24}>
        <Col span={4} key={1}>
          <FormItem label="Course ID">
            <Input
              placeholder="Course ID"
              onChange={e => this.props.onChangeCID(e.target.value)}
            />
          </FormItem>
        </Col>
        <Col span={4} key={2}>
          <FormItem label="Course Name">
            <Input
              placeholder="Course Name"
              onChange={e => this.props.onChangeCABName(e.target.value)}
            />
          </FormItem>
        </Col>
        <Col span={4} key={3}>
          <FormItem label="Academic Year">
            {getFieldDecorator("academicyear", {
              rules: [
                {
                  required: true,
                  message: "Input Year!"
                }
              ]
            })(
              <Input
                placeholder="Year"
                onChange={e => this.props.onChangeAcademicYear(e.target.value)}
              />
            )}
          </FormItem>
        </Col>
        <Col span={4} key={4}>
          <FormItem label="Semester">
            {getFieldDecorator(`term`, {
              rules: [
                {
                  required: true,
                  message: "Input Semester!"
                }
              ]
            })(
              <Select placeholder="Semester" style={{ width: 150 }}>
                <Option value="1">1st Semester</Option>
                <Option value="2">2nd Semester</Option>
                <Option value="3">Summer</Option>
              </Select>
            )}
          </FormItem>
        </Col>
        <Col span={4} key={5}>
          <FormItem
            style={{
              marginTop: 39
            }}
          >
            <Button type="primary">Search</Button>
          </FormItem>
        </Col>
      </Row>
    );
  }
}

const WrappedDynamicRule = Form.create()(DynamicRule);

export default WrappedDynamicRule;
