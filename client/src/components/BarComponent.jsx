import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "2015",
    uv: 40,
    pv: 24,
    amt: 24,
  },
  {
    name: "Page B",
    uv: 30,
    pv: 13,
    amt: 22,
  },
  {
    name: "Page C",
    uv: 20,
    pv: 300,
    amt: 22,
  },
  {
    name: "Page D",
    uv: 27,
    pv: 39,
    amt: 20,
  },
  {
    name: "Page E",
    uv: 18,
    pv: 400,
    amt: 21,
  },
  {
    name: "Page F",
    uv: 23,
    pv: 38,
    amt: 25,
  },
  {
    name: "Page G",
    uv: 34,
    pv: 43,
    amt: 21,
  },
];

const BarComponent = () => {
  return (
    <div>
      <BarChart
        width={600}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default BarComponent;
