"use client";
import React from "react";
import ReactDOM from "react-dom";
import "./Calendar.module.css";
import Calendar from "rsuite/Calendar";
import { Whisper, Popover, Badge } from "rsuite";
import "rsuite/Calendar/styles/index.css";
import { Typography } from "@mui/material";
import HalfCircle from "../HalfCircle";
import { AreaChart } from "recharts";
import ProgressDemo from "../Progress";

function getTodoList(date: { getDate: () => any }) {
  const day = date.getDate();

  switch (day) {
    case 10:
      return [{ time: "Rs. 391" }];
    case 15:
      return [{ time: "Rs. 9348" }];
    case 3:
      return [{ time: "Rs. -980" }];
    default:
      return [];
  }
}

const App = () => {
  function renderCell(date: { getDate: () => any }) {
    const list = getTodoList(date);
    const displayList = list.filter((item, index) => index < 1);

    if (list.length) {
      const moreCount = list.length - displayList.length;
      console.log(moreCount);
      const moreItem = (
        <li>
          <Whisper
            placement="top"
            trigger="click"
            speaker={
              <Popover>
                {/* {list.map((item, index) => (
                  <p key={index}>
                    <b>{item.time}</b> 
                  </p>
                ))} */}
                <div className="flex flex-col">
                  <div className="flex-row">
                    <Typography variant="h4">Thu, Jun 11, 2022</Typography>
                    <Typography variant="h5" className="text-red-400">
                      | Net P&L Rs. 789
                    </Typography>
                  </div>
                  <div className="flex-row m-3 p-2">
                    <ProgressDemo/>
                    <div className="">
                        <p>Total Trades     4</p>
                        <p>Total volume     12</p>
                        <p>Winrate     12</p>
                        <p>Profit Factor     12</p>
                        <p>Winners     12</p>
                        <p>Commissions     12</p>
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
              <Badge /> <b>{item.time}</b>
            </li>
          ))}
          {moreItem}
        </ul>
      );
    }

    return null;
  }

  return (
    <div className="w-2/3 mx-2 my-4 bg-white">
      <Calendar
        bordered
        renderCell={renderCell}
        cellClassName={(date) => (date.getDay() % 2 ? "bg-gray" : undefined)}
      />
    </div>
  );
};
export default App;
