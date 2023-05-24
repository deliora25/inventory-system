import { DataAmount } from "@/types";
import axios from "axios";
import React, { PureComponent, useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Props = {
  item: DataAmount;
};

function BarGraph() {
  const [data, setData] = useState<DataAmount[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/dataAmount");
        if (response && response.data) {
          setData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
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
    </ResponsiveContainer>
  );
}

export default BarGraph;
