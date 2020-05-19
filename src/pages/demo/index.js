import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import { databus } from '@lib/js/databus';
import "./page.scss";
import css from "./css.js";

databus.post("/apitest/postdemo", {
  data: {
    pageIndex: 1,
    pageSize: 5
  }
}).then(function () {
  console.log("success")
}).catch(function (e) { console.log(e) });

databus.get("/apitest/getdemo", {
  data: {
    pageIndex: 1,
    pageSize: 5
  }
}).then(function () {
  console.log("success")
}).catch(function (e) { console.log(e) });

databus.get("/mapi/m/poster/getProductPictureList", {
  data: {
    pageIndex: 1,
    pageSize: 5
  }
}).then(function () {
  console.log("success")
}).catch(function (e) { console.log(e) });

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="header2">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li style={css.he2}>Instagram</li>
          <li>WhatsApp</li>
          <li><Button type="primary">Primary</Button></li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<ShoppingList name="hc" />, document.getElementById('root'));
