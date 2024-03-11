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

interface DataItem {
  amount: number; 
}

interface Dprops {
  chartTable: any[];
}

const DailyChart: React.FC<Dprops> = ({ chartTable }) => {
  const [data, setData] = useState<DataItem[]>([]);
  const [off, setOff] = useState(0.5); // Initial offset for gradient

  useEffect(() => {
    if (chartTable) {
      const transformedData = chartTable.map((item) => ({
        amount: item.PnL, // Adjust this according to your data structure
      }));
      setData(transformedData);
      console.log(transformedData);
      const gradientOffset = () => {
        const dataMax = Math.max(...transformedData.map((i) => i.amount));
        const dataMin = Math.min(...transformedData.map((i) => i.amount));

        if (dataMax <= 0) {
          return 0;
        }
        if (dataMin >= 0) {
          return 1;
        }

        return dataMax / (dataMax - dataMin);
      };

      const newOffset = gradientOffset();
      setOff(newOffset);
    }
  }, [chartTable]);

  if (data.length === 0) {
    return <div>Loading your trading graph...</div>;
  }

  return (
    <ResponsiveContainer width="100%" height="80%" className="bg-white mx-2">
      
      <AreaChart
        width={320}
        height={60}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
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
  );
};

export default DailyChart;
