import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button,Table,Space } from 'antd';
import { databus } from '@lib/js/databus';
import XzyHeader from '@com/header/index';
import XzyNav from '@com/nav/index';
import { PlusOutlined } from '@ant-design/icons';
import "./page.scss";
const { Column, ColumnGroup } = Table;
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

class LiveList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pagination:{
        position:"bottomCenter"
      }
    }
  }
  addLiveRoom(){
    location.href = '/pages/liveAdd?menukey=live'
  }
  render() {
    return (
      <div className='xzyPages'>
        <XzyHeader></XzyHeader>
        <div className="adminCon">
          <XzyNav></XzyNav>
          <div  className="adminCon_con">
              <div className="adminCon_box">
                <div className="adminCon_head">
                  <h4>直播活动管理</h4>
                  <Button  icon={<PlusOutlined />} type="primary" onClick={this.addLiveRoom}>新增</Button>
                </div>
                <div>
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
              </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<LiveList name="hc" />, document.getElementById('root'));
