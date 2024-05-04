"use client";
import React, { useEffect, useState } from "react";
import {
  AverageWinLossTrade,
  NetPnL,
  ProfitFactor,
  TradeWin,
} from "@/Math/NetProfitLoss";
import ProgressDemo from "../charts/Progress";
import HalfCircle from "../charts/HalfCircle";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const HeroCard = () => {
  const [netPL, setnetPL] = useState<string | null>("");
  const [win, setWin] = useState<string | null>("");
  const [factor, setfactor] = useState<string | null | 0>("");
  const [avgWinLoss, setavg] = useState<string | null>("");

  const Range = useSelector((state: RootState) => state.reducer.dateRange);
  const fromD = Range.fromDate;
  const toD = Range.toDate;
  
  useEffect(() => {
    const getStats = async () => {
     
      const netPL = await NetPnL({fromD,toD});
      setnetPL(netPL);
      
      const win = await TradeWin({fromD,toD});
      setWin(win);
      
      const factor = await ProfitFactor({fromD,toD});
      setfactor(factor);
      const avgWinLoss = await AverageWinLossTrade({fromD,toD});
      setavg(avgWinLoss);
    };
    getStats();
  }, [fromD,toD]);
  const heroData = [
    {
      id: 1,
      title: "Net P&L",
      value: `Rs. ${netPL}`,
      present: "",
    },
    {
      id: 2,
      title: "Trade Win %",
      value: `${win}%`,
      present: (
        <>
          <ProgressDemo />
        </>
      ),
    },
    {
      id: 3,
      title: "Profit Factor",
      value: factor,
      present: "",
    },
    {
      id: 4,
      title: "Day Win %",
      value: 65,
      present: <HalfCircle />,
    },
    {
      id: 5,
      title: "Avg win/loss trade",
      value: avgWinLoss,
      present: "",
    },
  ];
  return (
    <div className="flex lg:grid-cols-4 md:grid-cols-3">
      {heroData.map(({ id, title, value, present }) => (
        <div key={id} className="w-52 h-50 mx-4 my-2 px-2 py-3 bg-white">
          <div className="hero">
            <div className="hero-content lg:flex-row-reverse">
              <div className="flex-col py-2">
                <h1 className="text-sm">{title}</h1>
                <h1 className="text-lg font-bold">{value}</h1>
              </div>
              <div>{present}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroCard;
