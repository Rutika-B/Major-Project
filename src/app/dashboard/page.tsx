import { DailyPnL } from "@/Math/NetProfitLoss";
import Example from "../charts/AreaChart";
import HalfCircle from "../charts/HalfCircle";
import HeroCard from "../component/Herocard";
import {
  BrokerageDetails,
  Holdings,
  Positions,
  ProfitLoss,
} from "@/api/upstoxData";

import App from "../charts/Calendar/Calendar";
import { ReactNode } from "react";
import Stats from "../component/Stats";
import Cummulative from "../charts/Cummlative";
import { DefaultTable } from "../component/Table";
import { Typography } from "@mui/material";
interface Props {
  children?: ReactNode;
  title: string;
}
const Home = async () => {
  return (
    <>
      <div className="flex flex-col">
        <HeroCard />
        <div className="flex flex-row items-start">
          <Stats />
          <div className="flex flex-col items-center justify-center w-auto mr-2">
            <div className="p-2 my-2 border border-slate-900 bg-slate-900/50 rounded-xl h-[400px]">
              <h3 className="text-xl font-semibold text-black mb-2">
                Net Daily P&L
              </h3>
              <Example />
            </div>
            <div className="p-2 my-2 border border-slate-900 bg-slate-900/50 rounded-xl h-[400px]">
              <h3 className="text-xl font-semibold text-black mb-2">
                Net Cummulative P&L
              </h3>
              <Cummulative />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start">
          <div className="w-2/5">
            <Typography variant="h5">Open Positions</Typography>
          <DefaultTable />
          </div>
          <App />
        </div>
      </div>
    </>
  );
};
export default Home;
