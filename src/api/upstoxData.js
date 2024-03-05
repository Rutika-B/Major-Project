import axios from "axios";
import { Filter } from "@/Filter/AscendingDate";
const Token = process.env.NEXT_PUBLIC_APP_TOKEN;

export const BrokerageDetails = async () => {
  const url = "https://api.upstox.com/v2/charges/brokerage";
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${Token}`,
  };

  const params = {
    instrument_token: "NSE_EQ|INE669E01016",
    quantity: "10",
    product: "D",
    transaction_type: "BUY",
    price: "13.7",
  };
 
  try {
    const response = await axios.get(url, { headers, params });
    return response.data.data; 
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const Holdings = async () => {
  const url = "https://api.upstox.com/v2/portfolio/long-term-holdings";
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${Token}`,
  };

  try {
    const response = await axios.get(url, { headers });
    return response.data.data; 
  } catch (error) {
    console.error(error);
    return null; 
  }
};

export const Positions = async () => {
  const url = "https://api.upstox.com/v2/portfolio/short-term-positions";
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${Token}`,
  };
  try {
    const response = await axios.get(url, { headers });
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const ProfitLoss = async ({fromD,toD}) => {
  var lastTwoDigits1 = String(fromD).slice(-2);
  var lastTwoDigits2 = String(toD).slice(-2);
  var concatenated = lastTwoDigits1 + lastTwoDigits2;
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  console.log(currentYear)
  console.log(toD.slice(-4));
  console.log(typeof currentYear)
  console.log(typeof toD.slice(-4))
  if(lastTwoDigits1===lastTwoDigits2 && String(currentYear)!==toD.slice(-4) )
  {
    concatenated=Number(concatenated)+1;
    concatenated=String(concatenated);
  }
  else if(lastTwoDigits1===lastTwoDigits2 && String(currentYear)===toD.slice(-4) )
  {
    lastTwoDigits1-=1;
    concatenated=lastTwoDigits1+lastTwoDigits2;
  }


  const url = "https://api.upstox.com/v2/trade/profit-loss/data";
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${Token}`,
  };
 
  const params = {
    segment: "FO",
    // from_date:{fromD},
    // from_date:"27-08-2021",
    // to_date:{toD},
    // to_date:"22-02-2022",
    financial_year: concatenated,
    page_number: 1,
    page_size: 600,
  };

  try {
    const response = await axios.get(url, { headers, params });

    const tradesData = response.data.data;
    const sortedData = Filter(tradesData);//filter tradesData in ascending order of buy dates
    return sortedData;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const tradeCharges = async ({fromD,toD}) => {
  const url = "https://api.upstox.com/v2/trade/profit-loss/charges";
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${Token}`,
  };

  const params = {
    segment: "FO",
    financial_year: "2122",
    from_date:{fromD},
    to_date:{toD},
    page_number: 1,
    page_size: 500,
  };

  try {
    const response = await axios.get(url, { headers, params });
    const tradesData = response.data.data;
    console.log(tradesData)
    return tradesData.charges_breakdown.total;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const ReportMetaData = async () => {
  const url = "https://api.upstox.com/v2/trade/profit-loss/metadata";
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${Token}`,
  };
  const params = {
    segment: "FO",
    financial_year: "2223",
  };
  try {
    const response = await axios.get(url, { headers, params });
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
