import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Input, Button, Row, Col,Table ,Select,DatePicker} from 'antd';
import { databus } from '@lib/js/databus';
import XzyHeader from '@com/header/index';
import XzyNav from '@com/nav/index';
import { SearchOutlined } from '@ant-design/icons';

import "./page.scss";

const { Column, ColumnGroup } = Table;
const { RangePicker } = DatePicker;

const { Option } = Select;

const dataSource = [
  {
    key: '1',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
    hdlj:'http://localhost:8899/pages/liveList?menukey=live',
    lbjz:'lbjzlbjz',
    lxcb:'300'
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
    hdlj:'http://localhost:8899/pages/liveList?menukey=live',
    lbjz:'lbjzlbjz',
    lxcb:'300'
  },
];

const columns = [
  {
    title: '活动名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '起止时间',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '活动链接',
    dataIndex: 'hdlj',
    key: 'hdlj',
  },
  {
    title: '裂变机制',
    dataIndex: 'lbjz',
    key: 'lbjz',
  },
  {
    title: '裂变奖励',
    dataIndex: 'lbjl',
    key: 'lbjl',
  },
  {
    title: '拉新成本    ',
    dataIndex: 'lxcb',
    key: 'lxcb',
  },
  {
    title: '参与人数',
    dataIndex: 'cyrs',
    key: 'cyrs',
  },
  {
    title: '下单人数    ',
    dataIndex: 'xdrs',
    key: 'xdrs',
  },
  {
    title: '操作',
    dataIndex: 'cz',
    key: 'cz',
  },
];


class PromoterList extends React.Component {
  gotoDetial(e){
    location.href='/pages/customerDetial?menukey=customer&id=1';
  }
  render() {
    return (
      <div className='xzyPages PromoterList'>
        <XzyHeader></XzyHeader>
        <div className="adminCon">
          <XzyNav></XzyNav>
          <div className="adminCon_con">
            <div className="adminCon_box">
              <div className="adminCon_head">
                <h4>成品商品管理</h4>
              </div>
              <div className="searchForm">
                <Row>
                  <Col span={6}>
                    <div className="item">
                      <span className="itemName">商品标题</span>
                      <Input placeholder="请输入商品标题" className="itemInput"/>
                    </div>
                  </Col>
                  <Col span={7}>
                    <div className="item">
                      <span className="itemName">展示时间</span>
                      <RangePicker className="itemInput" placeholder={['开始时间','结束时间']}/>
                    </div>
                  </Col>
                  <Col span={7}>
                  <div className="item">
                      <span className="itemName">售卖时间</span>
                      <RangePicker className="itemInput" placeholder={['开始时间','结束时间']}/>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col span={6}>
                    <div className="item">
                      <span className="itemName">状态</span>
                      <Select placeholder="请选择裂变机制" className="itemInput">
                      <Option value="Zhejiang">Zhejiang</Option>
                      <Option value="Jiangsu">Jiangsu</Option>
                    </Select>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="searchForm_btns">
                    <Button type="primary" icon={<SearchOutlined />}  style={{background:'#ff7031',borderColor:'#ff7031',margin:'0 10px'}}>
                    新建产品
                    </Button>
                    <Button type="primary" icon={<SearchOutlined />} style={{margin:'0 10px'}} >
                      查询
                    </Button>
                    <Button  htmlType="submit" style={{margin:'0 10px'}}>
                      导出
                    </Button>
              </div>
              <div>
              <Table dataSource={dataSource} >
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
                            <span className="tableAction" onClick={this.gotoDetial}>管理</span>
                            <span className="tableAction">删除</span>
                          </div>
                        )}
                    />
                  </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<PromoterList name="hc" />, document.getElementById('root'));
