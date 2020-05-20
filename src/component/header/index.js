import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./page.scss";

class XzyHeader extends React.Component {
  render() {
    return (
      <div className="xzyHeader">
        <div  className="left">
          <div className="logo">1</div>
          <div className="name">222</div>
        </div>
        <div   className="right">
          <div className="logo"></div>
          <div className="name"></div>
        </div>
      </div>
    );
  }
}

export default XzyHeader;
