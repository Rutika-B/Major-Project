import { DailyPnL } from "@/Math/NetProfitLoss";
import Example from "./charts/AreaChart";
import HalfCircle from "./charts/HalfCircle";
import HeroCard from "./component/Herocard";
import {
  BrokerageDetails,
  Holdings,
  Positions,
  ProfitLoss,
} from "@/api/upstoxData";
import App from "./charts/Calendar/Calendar";
import { ReactNode } from "react";
import Stats from "./component/Stats";
interface Props {
  children?: ReactNode;
  title: string;
  // any props that come into the component
}
const Home = async () => {
  const info = await ProfitLoss();
  const data = await Holdings();

  return (
    <>
      <div className="flex flex-col">
        <HeroCard />
        <div className="flex flex-row items-center">
          <Stats />
          <div className="flex flex-col items-center justify-center p-2 border border-slate-900 bg-slate-900/50 rounded-xl h-[400px] w-1/2 mr-2">
            <h3 className="text-xl font-semibold text-black mb-2">
              Net Daily P&L
            </h3>
            <Example />
          </div>
          <div className="flex flex-col items-center justify-center p-2 border border-slate-900 bg-slate-900/50 rounded-xl h-[400px] w-1/2">
            <h3 className="text-xl font-semibold text-black mb-2">
              Net Cummulative P&L
            </h3>
            <Example />
          </div>
        </div>

        <App />
      </div>
    </>
  );
};
export default Home;
