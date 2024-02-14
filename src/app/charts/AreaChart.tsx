"use client";
import { DailyPnL } from "@/Math/NetProfitLoss";
import React, { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from "recharts";
import Loader from "../component/Loader/Loader";

interface DataItem {
  date: string;
  profitLoss: any;
}
const Example = () => {
  const [data, setData] = useState<DataItem[] | any>([]);
  const [off, setOff] = useState(0.67);

  useEffect(() => {
    const getData = async () => {
      const dummyData = await DailyPnL();

      console.log(dummyData);
      if (dummyData) {
        const transformedData = dummyData.map(
          (item: { date: string; profitLoss: any }) => ({
            name: item.date, // Date from API response will be mapped to name in the chart
            uv: item.profitLoss, // ProfitLoss from API response will be mapped to uv in the chart
          })
        );
        setData(transformedData);
        console.log(data);
        const gradientOffset = () => {
          const dataMax = Math.max(
            ...transformedData.map((i: { uv: any }) => i.uv)
          );
          const dataMin = Math.min(
            ...transformedData.map((i: { uv: any }) => i.uv)
          );

          if (dataMax <= 0) {
            return 0;
          }
          if (dataMin >= 0) {
            return 1;
          }

          return dataMax / (dataMax - dataMin);
        };

        const off = gradientOffset();
        setOff(off);
      }
    };
    getData();
    // const dummyOffset = 0.67;
    // setOff(dummyOffset);
  }, []);
  if (!data) {
    return <Loader />;
  }
  return (
    
      <ResponsiveContainer width="70%" height="30%" className="bg-white mx-2">
        <AreaChart
          width={50}
          height={60}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <defs>
            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset={off} stopColor="green" stopOpacity={1} />
              <stop offset={off} stopColor="red" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#000"
            fill="url(#splitColor)"
          />
        </AreaChart>
      </ResponsiveContainer>
  
  );
};

export default Example;
