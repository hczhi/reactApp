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
  },
  {
    name: '营销活动',
    key: 'activity',
    subMenu: [
      {
        name: "优惠券管理",
        key:'couponlist',
        url:"/pages/couponlist"

      }
    ]
  },
  {
    name: '商城运营',
    key: 'shopmall',
    url:"/pages/shopmall"
  },
  {
    name: '销售数据',
    key: 'selldata',
    url:"/pages/selldata"
  },
  {
    name: '订单管理',
    key: 'order',
    subMenu: [
      {
        name: "成品订单管理",
        key:'orderList',
        url:"/pages/orderList"

      },
      {
        name: "预付订单管理",
        key:'preOrderList',
        url:"/pages/preOrderList"

      }
    ]
  },
  {
    name: '商品管理',
    key: 'products',
    subMenu: [
      {
        name: "成品商品管理",
        key:'product',
        url:"/pages/product"

      },
      {
        name: "预付商品管理",
        key:'preProduct',
        url:"/pages/preProduct"

      }
    ]
  },
  {
    name: '帐号管理',
    key: 'account',
    subMenu: [
      {
        name: "经销商管理",
        key:'agentlist',
        url:"/pages/agentlist"

      },
      {
        name: "门店管理",
        key:'shoplist',
        url:"/pages/shoplist"

      },
      {
        name: "员工管理",
        key:'stafflist',
        url:"/pages/stafflist"

      },
      {
        name: "帐号管理",
        key:'accountlist',
        url:"/pages/accountlist"

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
    var menukey = item.keyPath[1] || item.keyPath[0];
    if(item.key){
      location.href='/pages/'+item.key+"?menukey="+menukey
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
