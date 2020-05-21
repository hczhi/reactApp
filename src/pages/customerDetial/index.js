import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Input, Button, Row, Col, Table, Breadcrumb } from 'antd';
import { databus } from '@lib/js/databus';
import XzyHeader from '@com/header/index';
import XzyNav from '@com/nav/index';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import { Chart, Geom, Axis, Tooltip, Legend, Coord } from 'bizcharts';
import logo from "@com/header/logo.png";
import "./page.scss";
import "@lib/css/base.scss";


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

// 数据源
const data = [
  { genre: 'Sports', sold: 275, income: 2300 },
  { genre: 'Strategy', sold: 115, income: 667 },
  { genre: 'Action', sold: 120, income: 982 },
  { genre: 'Shooter', sold: 350, income: 5271 },
  { genre: 'Other', sold: 150, income: 3710 }
];

// 定义度量
const cols = {
  sold: { alias: '销售量' },
  genre: { alias: '游戏种类' }
};

class CustomerDetial extends React.Component {
  render() {
    return (
      <div className='xzyPages CustomerDetial'>
        <XzyHeader></XzyHeader>
        <div className="adminCon">
          <XzyNav></XzyNav>
          <div className="adminCon_con">
            <div className="adminCon_Breadcrumb">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href="/pages/customerList?menukey=customer">客户管理</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>客户详情</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="adminCon_box">
              <div className="userInfo">
                <div className="userInfo_l">
                  <div className="userInfo_l_img">
                    <img src={logo} />
                  </div>
                  <div className="userInfo_l_info">
                    <div className="userInfo_l_userName">addd</div>
                    <div className="userInfo_l_userName_2">销售员工: <span>ddd</span></div>
                    <div className="userInfo_l_userName_2">销客:<span>dddff</span></div>
                  </div>
                </div>
                <div className="userInfo_r">
                  <div className="userInfo_r_item">
                    <div className="userInfo_r_item_title">
                      <span className="iconspan"><SearchOutlined /></span>
                        销售数据
                      </div>
                    <div className="userInfo_r_item_con userInfo_r_item_con-flex">
                      <div className="userInfo_r_item_order">
                        订单数
                            <div className="red">1222</div>
                      </div>
                      <div className="userInfo_r_item_order">
                        总金额
                            <div className="red">1222</div>
                      </div>
                    </div>
                  </div>
                  <div className="userInfo_r_item">
                    <div className="userInfo_r_item_title">
                      <span className="iconspan"><SearchOutlined /></span>
                        上次浏览
                      </div>
                    <div className="userInfo_r_item_con">
                      2020-11-22
                          <div>09:12:11</div>
                    </div>
                  </div>
                  <div className="userInfo_r_item">
                    <div className="userInfo_r_item_title">
                      <span className="iconspan"><SearchOutlined /></span>
                        建议销售
                      </div>
                    <div className="userInfo_r_item_con">
                      asddsdsa
                      </div>
                  </div>
                </div>
              </div>
              {/* <Chart width={600} height={400} data={data} scale={cols}>
      <Axis name="genre" title/>
      <Axis name="sold" title/>
      <Legend position="top" dy={-20} />
      <Tooltip />
      <Geom type="interval" position="genre*sold" color="genre" />
    </Chart> */}

            </div>
            <div className="adminCon_box">
              <div className="adminCon_head">
                <h4>直播活动管理</h4>
                <Button icon={<PlusOutlined />} type="primary" onClick={this.addLiveRoom}>新增</Button>
              </div>
              <div>
                <Table dataSource={dataSource}>
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

ReactDOM.render(<CustomerDetial name="hc" />, document.getElementById('root'));
