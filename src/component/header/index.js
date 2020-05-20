import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  MailOutlined,UserOutlined,DownOutlined
} from '@ant-design/icons';
import {Dropdown,Menu } from 'antd';
import "./page.scss";

import logo from "./logo.png";


const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
       退出登录
      </a>
    </Menu.Item>
  </Menu>
);

class XzyHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="xzyHeader">
        <div className="left">
          <div className="logo"><img src={logo} /></div>
          <div className="name">直播SaaS营销后台-慕思品牌馆</div>
        </div>
        <div className="right">
          <div className="MailOutlined"><MailOutlined style={{ fontSize: '20px'}}/><span className="num">3</span></div>
          <div className="user">
            <div  className="userPic"><UserOutlined  style={{ fontSize: '16px'}}/> </div>
            <span  className="welcome">
             欢迎,
            </span>
            <Dropdown overlay={menu}><div>吴彦祖 <DownOutlined style={{ fontWeight:'bold'}} /></div></Dropdown>
          </div>
        </div>
      </div>
    );
  }
}

export default XzyHeader;
