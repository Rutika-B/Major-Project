"use client";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./Calendar.module.css";
import Calendar from "rsuite/Calendar";
import { Whisper, Popover, Badge } from "rsuite";
import "rsuite/Calendar/styles/index.css";
import { Typography } from "@mui/material";
import HalfCircle from "../HalfCircle";
import { AreaChart } from "recharts";
import ProgressDemo from "../Progress";
import { Dailydetails } from "@/Math/NetProfitLoss";
import FormatDate from "@/Formatting/DateFormat";

function getViewList(
  date: { getDate: () => any },
  dailyData: any[] | undefined
) {
  const key = FormatDate(date);
  const result = dailyData?.filter((item) => {
    return item.date === key;
  });
  return result;
}

const App = () => {
  const currentDate = new Date();
  const currentYear = (currentDate.getFullYear());

  const [fromD, setfrom] = useState(currentYear);
  const [toD, setto] = useState(currentYear);
  const [dailyData, setdailydata] = useState<any[] | undefined>([]);
  useEffect(() => {
    const getData = async () => {
      const data = await Dailydetails({ fromD, toD });
      setdailydata(data?.calendarData);
    };
    getData();
  }, [fromD, toD]);
  function renderCell(date: { getDate: () => any }) {
    const displayList = getViewList(date, dailyData);
    if (displayList?.length) {
      const moreItem = (
        <li>
          <Whisper
            placement="top"
            trigger="hover"
            speaker={
              <Popover>
                <div className="flex flex-col">
                  <div className="flex-row">
                    <Typography variant="h4">Thu, Jun 11, 2022</Typography>
                    <Typography variant="h5" className="text-red-400">
                      | Net P&L Rs. 789
                    </Typography>
                  </div>
                  <div className="flex-row m-3 p-2">
                    <ProgressDemo />
                    <div className="">
                      <p>Total Trades 4</p>
                      <p>Total volume 12</p>
                      <p>Winrate 12</p>
                      <p>Profit Factor 12</p>
                      <p>Winners 12</p>
                      <p>Commissions 12</p>
                    </div>
                  </div>
                </div>
              </Popover>
            }
          >
            <a>Explore</a>
          </Whisper>
        </li>
      );

      return (
        <ul className="calendar-todo-list ">
          {displayList.map((item, index) => (
            <li key={index}>
              <Badge /> <b>{item.PnL}</b>
            </li>
          ))}
          {moreItem}
        </ul>
      );
    }
    return null;
  }
  const handleDateRangeChange = (value: any) => {
    const date = new Date(value);
    const year = date.getFullYear();
    setfrom((year));
    setto((year));
  };
  return (
    <div className="w-2/3 mx-2 my-4 bg-white">
      <style>
        {`
      .bg-gray {
        background-color: #32a852;
      }
      .bg-red{
        background-color:#f72d33;
      }
      `}
      </style>

      <Calendar
        bordered
        onChange={handleDateRangeChange}
        renderCell={renderCell}
        cellClassName={(date) => {
          const formattedDate = FormatDate(date);
          const pnl = dailyData?.filter(
            (item) => item.date === formattedDate
          )[0]?.PnL;

          if (pnl > 0) {
            return "bg-gray";
          } else if (pnl < 0) {
            return "bg-red";
          } else {
            return undefined;
          }
        }}
      />
    </div>
  );
};
export default App;
