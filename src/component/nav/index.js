import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  MailOutlined, UserOutlined, DownOutlined
} from '@ant-design/icons';
import { Menu, Button } from 'antd';
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import "./page.scss";
import { getPathname,GetRequest } from '@lib/js/utils.js';


const { SubMenu } = Menu;

const menuData = [
  {
    name: '订单管理',
    key: 1,
    subMenu: [
      {
        name: "我的订单",
        key: 'order',
      },
      {
        name: "订单查询",
        key: 'list',
      }
    ]
  },
  {
    name: '券号管理',
    key: 2,
    subMenu: [
      {
        name: "验销券",
        key: 'search2',
      },
      {
        name: "记录查询",
        key: 'search',
        url:"#"
      }
    ]
  },
  {
    name: '直播管理',
    key: 'live',
    subMenu: [
      {
        name: "官方直播管理",
        key:'liveList',
        url:"/pages/liveList"

      },
      {
        name: "发起直播",
        key: 'liveAdd',
        url:"/pages/liveAdd"
      }
    ]
  },
  {
    name: '分销管理',
    key: 'promoter',
    subMenu: [
      {
        name: "分销员管理",
        key:'promoterList',
        url:"/pages/promoterList"

      }
    ]
  },
  {
    name: '客户管理',
    key: 'customer',
    subMenu: [
      {
        name: "客户列表",
        key:'customerList',
        url:"/pages/customerList"

      }
    ]
  }
];




class XzyNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      width:'200px',
      defaultSelectedKeys:getPathname()[1]||'',
      defaultOpenKeys:GetRequest().menukey||'',
    }
  }
  clickMenu(item, key, keyPath, domEvent){
    if(item.key){
      location.href='/pages/'+item.key+"?menukey="+item.keyPath[1]
    }
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
        defaultSelectedKeys={[this.state.defaultSelectedKeys]}
        defaultOpenKeys={[this.state.defaultOpenKeys]}
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
