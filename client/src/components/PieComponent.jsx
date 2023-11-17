import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell } from "recharts";
import api from "../configs/axios-base-url";

const PieComponent = () => {
  const [alumnidata, setAlumniData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAlumniData = async () => {
    try {
      const res = await api.get("/register");
      setAlumniData(res.data);
    } catch (err) {
      console.error("Error fetching alumni data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlumniData();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // or some loading indicator
  }

  const AlumniEmployed = alumnidata.filter(
    (item) => item.employment_status === "Employed"
  ).length;

  const AlumniUnemployed = alumnidata.filter(
    (item) => item.employment_status === "Unemployed"
  ).length;

  const data = [
    { name: "Employed", value: AlumniEmployed },
    { name: "Unemployed", value: AlumniUnemployed },
  ];

  const COLORS = ["#0088FE", "#FFBB28"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="black" // Set the text color to black
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${data[index].name} ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className="grid grid-cols-4">
        {alumnidata.map((item, index) => (
          <p key={index} className="cursor-pointer font-bold">
            {item.name}
          </p>
        ))}
      </div>
      <div className="grid grid-cols-4 mt-[15px]">
        {COLORS.map((item, index) => (
          <div
            className="h-[30px] w-[30px]"
            style={{ backgroundColor: item }}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PieComponent;
