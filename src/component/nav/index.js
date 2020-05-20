import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  MailOutlined, UserOutlined, DownOutlined
} from '@ant-design/icons';
import { Menu, Button } from 'antd';
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import "./page.scss";

const { SubMenu } = Menu;

const menuData = [
  {
    name: '订单管理',
    key: 1,
    subMenu: [
      {
        name: "我的订单",
        key: 1.1,
      },
      {
        name: "订单查询",
        key: 1.2,
      }
    ]
  },
  {
    name: '券号管理',
    key: 2,
    subMenu: [
      {
        name: "验销券",
        key: 2.1,
      },
      {
        name: "记录查询",
        key: 2.2,
      }
    ]
  }
];




class XzyNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      width:'200px'
    }
  }
  clickMenu(item, key, keyPath, domEvent){
    console.log(item);
  }

  render() {
    function formSubmenuChild(obj) {
      let cHtml = '';
      let childArray = obj.subMenu;
      if (obj.subMenu && obj.subMenu.length > 0) {
        cHtml = childArray.map((item, index) => {
          return formSubmenuChild(item);
        });
        return <SubMenu key={obj.key} title={obj.name} icon={<SettingOutlined style={{color:"#FF6000"}}/>}>{cHtml}</SubMenu>
      } else {
        return <Menu.Item key={obj.key}>{obj.name}</Menu.Item>
      }
    }
  
    const menuItems = menuData.map((item, index) => {
      if(!item.subMenu || item.subMenu.length == 0) {
      return <Menu.Item key={item.key} icon={<SettingOutlined style={{color:"#FF6000"}} />}>{item.name}</Menu.Item>
      } else {
        return formSubmenuChild(item)
      }
    });
    return (
      <div className="XzyNav">
      <Menu

        style={{width:this.state.width,border:0,boxShadow: '0 0 3px #ccc',minHeight: '100vh'}}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        inlineCollapsed= {this.state.collapsed}
        onClick = {this.clickMenu}
      >
        {menuItems}
      </Menu>
      </div>
    );
  }
}

export default XzyNav;
