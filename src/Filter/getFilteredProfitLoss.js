import { ProfitLoss } from "@/api/upstoxData";
import { QueryDates } from "@/Filter/QueryDate";
//To retrieve data that lies in provided date range
export const GetFilteredProfitLoss=async({fromD,toD})=>{
    const dummyData = await ProfitLoss({fromD,toD});
    const filteredDate=QueryDates({fromD,toD,dummyData});
    return filteredDate;
}