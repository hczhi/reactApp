import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button,Table,Space,Tabs } from 'antd';
import { databus } from '@lib/js/databus';
import XzyHeader from '@com/header/index';
import XzyNav from '@com/nav/index';
import { PlusOutlined } from '@ant-design/icons';

import Coupon from './component/coupon.js';
import SendCoupon from './component/sendCoupon.js';
import "./page.scss";
import "@lib/css/base.scss";

const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}

class CouponList extends React.Component {
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
                  <h4>优惠券管理</h4>
                  {/* <Button  icon={<PlusOutlined />} type="primary" onClick={this.addLiveRoom}>新增</Button> */}
                </div>
                <div>
                <Tabs defaultActiveKey="1" onChange={callback} animated={false}>
                  <TabPane tab="优惠券" key="1">
                      <Coupon/>
                  </TabPane>
                  <TabPane tab="优惠券发放" key="2">
                      <SendCoupon/>
                  </TabPane>
                </Tabs>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<CouponList name="hc" />, document.getElementById('root'));
