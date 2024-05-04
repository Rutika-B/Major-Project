"use client";
import { DailyPnL, Dailydetails } from "@/Math/NetProfitLoss";
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
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { QueryDates } from "@/Filter/QueryDate";

interface DataItem {
  date: string;
  profitLoss: any;
}
const Example = () => {
  const [data, setData] = useState<DataItem[] | any>([]);
  const [off, setOff] = useState(0.67); //upward and downward graph separator
  const Range = useSelector((state: RootState) => state.reducer.dateRange);
  const fromD = Range.fromDate;
  const toD = Range.toDate;

  useEffect(() => {
    const getData = async () => {
      const Data = await DailyPnL({ fromD, toD });
      const dummyData = Data?.result;
      if (dummyData) {
        const transformedData = dummyData.map(
          (item: { date: string; profitLoss: any }) => ({
            name: item.date, // Date from API response will be mapped to name in the chart
            amount: item.profitLoss, // ProfitLoss from API response will be mapped to amount in the chart
          })
        );
        setData(transformedData);
        const gradientOffset = () => {
          const dataMax = Math.max(
            ...transformedData.map((i: { amount: any }) => i.amount)
          );
          const dataMin = Math.min(
            ...transformedData.map((i: { amount: any }) => i.amount)
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
  }, [fromD, toD]);
  if (!data) {
    return <div>Loading your trading graph...</div>;
  }
  return (
    <>
      <ResponsiveContainer width="100%" height="90%" className="bg-white mx-2">
        <AreaChart
          width={500}
          height={600}
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
            dataKey="amount"
            stroke="#000"
            fill="url(#splitColor)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default Example;
