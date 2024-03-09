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
import Cell from "./Cell";

function getViewList(
  date: { getDate: () => any },
  dailyData: any[] | undefined,
  exploreCell: any[] | undefined
) {
  const key = FormatDate(date);
  const list1 = dailyData?.filter((item) => {
    return item.date === key;
  });
  const list2=exploreCell?.filter((item)=>{
    return item[key];
  })
  return {list1,list2};
}

const App = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const [fromD, setfrom] = useState(currentYear);
  const [toD, setto] = useState(currentYear);

  const [dailyData, setdailydata] = useState<any[] | undefined>([]);
  const [exploreCell, setExplore] = useState<any[] | undefined>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await Dailydetails({ fromD, toD });
      setdailydata(data?.calendarData);
      setExplore(data?.dataArray);
    };
    getData();
  }, [fromD, toD]);
  function renderCell(date: { getDate: () => any }) {
    const Data = getViewList(date, dailyData, exploreCell);
    const displayList=Data.list1;
    const chartTable=Data.list2;
    if (displayList?.length) {
      const moreItem = (
        <li>
          <Whisper
            placement="top"
            trigger="click"
            speaker={
              <Popover>
                <Cell displayList={displayList} chartTable={chartTable}/>
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
    setfrom(year);
    setto(year);
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
