import React from "react";
import {
  AverageWinLossTrade,
  NetPnL,
  ProfitFactor,
  TradeWin,
} from "@/Math/NetProfitLoss";
import ProgressDemo from "../charts/Progress";
import HalfCircle from "../charts/HalfCircle";

const HeroCard = async () => {
  const netPL = await NetPnL();
  console.log(netPL);
  const win = await TradeWin();
  console.log(win);
  const factor = await ProfitFactor();
  const avgWinLoss = await AverageWinLossTrade();
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
