import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Button, Checkbox, DatePicker, Select,Row,Col,Upload } from 'antd';
import { databus } from '@lib/js/databus';
import XzyHeader from '@com/header/index';
import XzyNav from '@com/nav/index';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

const { MonthPicker, RangePicker } = DatePicker;
const { Option } = Select;
import "./page.scss";

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 20,
  },
};

const onFinish = values => {
  console.log('Success:', values);
};

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

class LiveAdd extends React.Component {
  render() {
    return (
      <div className='xzyPages'>
        <XzyHeader></XzyHeader>
        <div className="adminCon">
          <XzyNav></XzyNav>
          <div className="adminCon_con">
            <div className="adminCon_box">
              <div className="adminCon_head">
                <h4>发起直播</h4>
              </div>
              <div class="formCon">
                <Form
                  {...layout}
                  name="basic"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    label="直播活动名称"
                    name="cativityName"
                    
                  >
                    <Input placeholder='请输入直播活动名称' />
                  </Form.Item>
                  <Form.Item name="aciveTime" label="活动时间">
                    <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                  </Form.Item>
                  <Form.Item
                    label="直播时间"
                    name="time"
                  >
                    <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                  </Form.Item>
                  <Form.Item
                    label="直播落地页"
                    name="cativityName"
                    
                  >
                    <Input placeholder='直播落地页' />
                  </Form.Item>
                  <Form.Item name="jizhi" label="直播裂变机制">
                    <Select placeholder="请选择裂变机制">
                      <Option value="Zhejiang">Zhejiang</Option>
                      <Option value="Jiangsu">Jiangsu</Option>
                    </Select>
                    <div className="moneySetting">
                      <Row>
                        <Col span={10}>裂变奖励每拉新一个新用户，奖励</Col>  
                        <Col span={4}><Input style={{position:"relative",top:'-5px'}}/></Col>  
                        <Col span={1}> &nbsp;元</Col>  
                        <Col span={8}><div className="moneySetting_tips">账户余额 <span>122元</span></div></Col>  
                      </Row>
                    </div>
                  </Form.Item>
                  <Form.Item
                    label="直播封面"
                    name="cativityName"
                    
                  >
                    <Upload name="logo" action="/upload.do" listType="text">
                    <Button>
                      <UploadOutlined /> 点击上传
                    </Button>
                  </Upload>
                  </Form.Item>
                  <Form.Item
                    label="直播背景"
                    name="cativityName"
                    
                  >
                    <Upload name="logo" action="/upload.do" listType="text">
                    <Button>
                      <UploadOutlined /> 点击上传
                    </Button>
                  </Upload>
                  </Form.Item>
                  <Form.Item name="jizhi" label="直播活动商品">
                    <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="请选择直播活动商品"
                    defaultValue={[]}
                    onChange={handleChange}
                  >
                    {children}
                  </Select>
                  </Form.Item>
                  <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                      提交审核
                    </Button>
                    <Button  htmlType="submit" style={{margin:'0 10px'}}>
                      保存
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<LiveAdd name="hc" />, document.getElementById('root'));



