"use client";
import React, { useEffect, useState } from "react";
import "./Calendar.module.css";
import Calendar from "rsuite/Calendar";
import "rsuite/Calendar/styles/index.css";
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
  const list2 = exploreCell?.filter((item) => {
    return item[key];
  });
  return { list1, list2 };
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
    const displayList = Data.list1;
    const chartTable = Data.list2;

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    if (displayList?.length) {
      return (
        <ul className="calendar-todo-list overflow-y-auto">
          {displayList.map((item, index) => (
            <li key={index}>
              <div>{item.PnL}</div>
              <div>{displayList[0].trade_count} trades</div>
              <p onClick={handleOpen}>explore</p>
              <Cell
                key={currentDate.toString()}
                displayList={displayList}
                chartTable={chartTable}
                open={open}
                handleOpen={handleOpen}
              />
            </li>
          ))}
        </ul>
      );
    }
    return null;
  }
  const handleDateRangeChange = (value: any) => {
    const date = new Date(value);
    const year = date.getFullYear();
   
  };
  return (
    <div className="w-2/3 mx-2 my-4 bg-white">
      <style>
        {`
      .bg-gray {
        background-color: #74b47e;
        margin:4px;
        padding:4px;
      }
      .bg-red{
        background-color:#f13b60;
        margin:4px;
        padding:4px;

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