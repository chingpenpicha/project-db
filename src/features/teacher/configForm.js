import React from "react";
import { Form, Input, Col, Row, Layout} from "antd";
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
    const { sid, sname, grade } = this.props;
    const { getFieldDecorator, setFields } = this.props.form;
    const selectedOptions = [
      {label: 'grade', value: grade}
    ]
    return (
      <Layout>
        <Row gutter={24}>
          <Col span={6} key={1}>
            <FormItem label = {sid}/>
          </Col>
          <Col span={6} key={2}>
            <FormItem label = {sname}/>
          </Col>
          <Col span={6} key={3}>
            <FormItem>
              {getFieldDecorator("grade", {
                initialValue : selectedOptions.map( opt => opt.value ),
                rules: [
                  {
                    required: true,
                    message: "Please input grade"
                  }
                ]
              })
              (<Input onChange = {e => this.props.onChange(e.target.value)}/>)}
            </FormItem>
          </Col>
        </Row>
      </Layout>
    );
  }
}

const WrappedDynamicRule = Form.create()(DynamicRule);

export default WrappedDynamicRule;
