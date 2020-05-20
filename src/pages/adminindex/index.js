import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Layout, Button } from 'antd';
import { databus } from '@lib/js/databus';
import XzyHeader from '@com/header/index';

import "./page.scss";

const { Header, Footer, Sider, Content } = Layout;


class ShoppingList extends React.Component {
  render() {
    return (
      <div>
        <XzyHeader></XzyHeader>
      </div>
    );
  }
}

ReactDOM.render(<ShoppingList name="hc" />, document.getElementById('root'));
