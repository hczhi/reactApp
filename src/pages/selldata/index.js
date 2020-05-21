import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Table, Space } from 'antd';
import { databus } from '@lib/js/databus';
import XzyHeader from '@com/header/index';
import XzyNav from '@com/nav/index';
import SellGeom from './Geom.js';
import { PlusOutlined } from '@ant-design/icons';
import "./page.scss";
const { Column, ColumnGroup } = Table;
import { Chart, Geom, Axis, Tooltip, Legend, Coord } from 'bizcharts';
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

class Selldata extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pagination: {
        position: "bottomCenter"
      }
    }
  }
  addLiveRoom() {
    location.href = '/pages/liveAdd?menukey=live'
  }
  render() {
    return (
      <div className='xzyPages selldata'>
        <XzyHeader></XzyHeader>
        <div className="adminCon">
          <XzyNav></XzyNav>
          <div className="adminCon_con">

            <div className="sellData_item1">
              <div className="sellData_item1_l">
                <div className="total">
                  销售额:<span>200333</span>
                </div>
                <div className="typeBox">
                  <div className="item">
                    订单数
                          <div className="num">122ww</div>
                  </div>
                  <div className="item">
                    订单数
                          <div className="num">122ww</div>
                  </div>
                </div>
                <div className="bizchartsbox">
                  <Chart width={600} height={400} data={data} scale={cols}>
                    <Axis name="genre" title />
                    <Axis name="sold" title />
                    <Legend position="top" dy={-20} />
                    <Tooltip />
                    <Geom type="interval" position="genre*sold" color="genre" />
                  </Chart>
                </div>
              </div>
              <div className="sellData_item1_r">
                <div className="sellData_item1_r_item">
                  <div>
                      <SellGeom/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Selldata name="hc" />, document.getElementById('root'));
