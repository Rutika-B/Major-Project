'use client';
import { DailyPnL } from "@/Math/NetProfitLoss";
import { tradeCharges } from "../api/UpstoxAPIs/upstoxData";
import { RootState } from "@/store/store";
import { Typography } from "@mui/material";
import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";


function Stats() {
  const Range = useSelector((state: RootState) => state.reducer.dateRange);
  const fromD = Range.fromDate;
  const toD = Range.toDate;
  
  const [win, setWin] = useState<number|undefined>(0);
  const [loss, setLoss] = useState<number|undefined>(0);
  const [charge,setcharge]=useState<any|undefined>(0);
  
  useEffect(() => {
    const getStats = async () => {
      const Data = await DailyPnL({ fromD, toD });
      const mxWin = Data?.maxProfit;
      const mxloss = Data?.maxLoss;
      setWin(mxWin);
      setLoss(mxloss);
      // const charges=await tradeCharges({fromD,toD});
      const payload = {
        fromD,
        toD,
      };
      const res=await axios.post("/api/tradecharges", payload);
      const charges=res.data
      // console.log(res);
      setcharge(charges);
    };
    getStats();
  }, [fromD, toD]);

  const stats = [
    {
      id: 1,
      title: "Big Win",
      value: win,
    },
    {
      id: 1,
      title: "Big loss",
      value: loss,
    },
    {
      id: 1,
      title: "Total Fees",
      value: charge,
    },
  ];
  return (
    <div className="flex flex-col items-center w-1/6 justify-center m-2 px-2 border rounded-md bg-white border-gray-500">
      <Typography className="my-2 pt-3" variant="h4">
        Stats
      </Typography>
      <ul>
        {stats.map(({ id, title, value }) => (
          <li className="" key={id}>
            <div className="w-auto h-auto my-2 items-center justify-center p-3">
              <h1 className="text-xl font-bold">{title}</h1>
              <h1 className="text-xl">{value}</h1>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Stats;
