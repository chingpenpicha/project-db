import React from "react";
import { Form, Input, Col, Row, Select } from "antd";
const FormItem = Form.Item;
const Option = Select.Option;

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
            })(
              <Select
                onChange={}
                showSearch
                style={{ width: 100 }}
                placeholder="Grade"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="4.0">4.0</Option>
                <Option value="3.5">3.5</Option>
                <Option value="3.0">3.0</Option>
                <Option value="2.5">2.5</Option>
                <Option value="2.0">2.0</Option>
                <Option value="1.5">1.5</Option>
                <Option value="1.0">1.0</Option>
                <Option value="0">0</Option>
              </Select>
            )}
          </FormItem>
        </Col>
      </Row>
    );
  }
}

const WrappedDynamicRule = Form.create()(DynamicRule);

export default WrappedDynamicRule;
