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

const Home = async () => {
  const info = await ProfitLoss();
  const data = await Holdings();

  return (
    <>
      <div className="w-full bg-gray-100">
        <HeroCard />
        <Example />
        <App />
        {/* {!info ? <p>Loading...</p> : <pre>{JSON.stringify(info, null, 2)}</pre>} */}
        {/* {!data ? <p>Loading...</p> : <pre>{JSON.stringify(data, null, 2)}</pre>} */}
      </div>
    </>
  );
};
export default Home;
