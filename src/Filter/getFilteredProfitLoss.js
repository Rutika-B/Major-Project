import { ProfitLoss } from "../app/api/UpstoxAPIs/upstoxData";
import { QueryDates } from "@/Filter/QueryDate";
import axios from "axios";
//To retrieve data that lies in provided date range
export const GetFilteredProfitLoss = async ({ fromD, toD }) => {
  const payload = {
    fromD,
    toD,
  };
  const res=await axios.post("/api/profit-loss", payload);
  const dummyData=res.data;
  const filteredDate = QueryDates({ fromD, toD, dummyData });
  return filteredDate;
};
