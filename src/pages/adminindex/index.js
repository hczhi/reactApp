import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Layout, Button } from 'antd';
import { databus } from '@lib/js/databus';
import XzyHeader from '@com/header/index';
import XzyNav from '@com/nav/index';

import "./page.scss";

const { Header, Footer, Sider, Content } = Layout;


class ShoppingList extends React.Component {
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
                </div>

              </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<ShoppingList name="hc" />, document.getElementById('root'));
