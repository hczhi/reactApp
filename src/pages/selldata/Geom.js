import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./page.scss";
import { Chart, Geom, Axis, Tooltip, Legend, Coord, Guide, Label } from 'bizcharts';
import DataSet from "@antv/data-set";
const { DataView } = DataSet;
const { Html } = Guide;
const data = [
  {
    item: "新增推广员",
    count: 40
  },
  {
    item: "新增粉丝",
    count: 43
  }
];
const dv = new DataView();
dv.source(data).transform({
  type: "percent",
  field: "count",
  dimension: "item",
  as: "percent"
});
const cols = {
  percent: {
    formatter: val => {
      val = val * 100 + "%";
      return val;
    }
  }
};

class SellGeom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pagination: {
        position: "bottomCenter"
      }
    }
  }
  render() {
    return (
      <div className='SellGeom'>
        <Chart
          height={400}
          data={dv}
          scale={cols}
          padding={[80, 20, 80, 20]}
          forceFit
        >
          <Coord type={"theta"} radius={0.75} innerRadius={0.6} />
          <Axis name="percent" />
          <Legend
            position="bottom"
          />
          <Tooltip
            showTitle={false}
            itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
          />

          <Geom
            type="intervalStack"
            position="percent"
            color="item"
            tooltip={[
              "item*percent",
              (item, percent) => {
                percent = percent * 100 + "%";
                return {
                  name: item,
                  value: percent
                };
              }
            ]}
            style={{
              lineWidth: 1,
              stroke: "#fff"
            }}
          >
           
          </Geom>
        </Chart>
      </div>
    );
  }
}

export default SellGeom;