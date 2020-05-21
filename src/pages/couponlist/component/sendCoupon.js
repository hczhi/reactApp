import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Input, Button, Row, Col, Table, Select } from 'antd';
import { databus } from '@lib/js/databus';
import XzyHeader from '@com/header/index';
import XzyNav from '@com/nav/index';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import "../page.scss";

const { Column, ColumnGroup } = Table;


const dataSource = [
  {
    key: '1',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
    hdlj: 'http://localhost:8899/pages/liveList?menukey=live',
    lbjz: 'lbjzlbjz',
    lxcb: '300'
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
    hdlj: 'http://localhost:8899/pages/liveList?menukey=live',
    lbjz: 'lbjzlbjz',
    lxcb: '300'
  },
];

class SendCoupon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pagination: {
        position: "bottomCenter"
      }
    }
  }
  render() {
    return (
      <div>
        <div className="searchForm">
          <Row>
            <Col span={6}>
              <div className="item">
                <span className="itemName">优惠券ID</span>
                <Input placeholder="请输入粉丝ID" className="itemInput" />
              </div>
            </Col>
            <Col span={6}>
              <div className="item">
                <span className="itemName">优惠券名称</span>
                <Input placeholder="请输入员工名称" className="itemInput" />
              </div>
            </Col>
            <Col span={6}>
              <div className="item">
                <span className="itemName">优惠券类型</span>
                <Select placeholder="请选择裂变机制" className="itemInput">
                  <Option value="Zhejiang">Zhejiang</Option>
                  <Option value="Jiangsu">Jiangsu</Option>
                </Select>
              </div>
            </Col>
          </Row>
        </div>
        <div className="searchForm_btns">
          <Button type="primary" icon={<SearchOutlined />} >
            查询
                    </Button>
          <Button htmlType="submit" style={{ margin: '0 10px' }}>
            重置
                    </Button>
        </div>
        <div className="adminCon_head adminCon_head—coupenList">
                  <h4>优惠券发放列表</h4>
                  <Button  icon={<PlusOutlined />} type="primary" onClick={this.addLiveRoom}>新增发放</Button>
                </div>
        <Table dataSource={dataSource} pagination={this.state.pagination}>
          <Column title="活动名称" dataIndex="name" key="name" />
          <Column title="起止时间" dataIndex="age" key="age" />
          <Column title="裂变奖励" dataIndex="hdlj" key="hdlj" />
          <Column title="拉新成本" dataIndex="lxcb" key="lxcb" />
          <Column title="参与人数" dataIndex="lxcb" key="lxcb" />
          <Column title="Age" dataIndex="age" key="age" />
          <Column
            title="操作"
            key="cz"
            fixed='right'
            width='100'
            render={(text, record) => (
              <div>
                <span className="tableAction">直播码</span>
                <span className="tableAction">导出</span>
                <span className="tableAction">删除</span>
              </div>
            )}
          />
        </Table>
      </div>
    );
  }
}

export default SendCoupon;