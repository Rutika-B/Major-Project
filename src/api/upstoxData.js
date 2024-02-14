import Token from "../constant/config";
import axios from "axios";
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
  //   const data;
  try {
    const response = await axios.get(url, { headers, params });
    console.log(response.data);
    return response.data.data; // Return the data from the response
  } catch (error) {
    console.error(error);
    return null; // Return null or handle the error accordingly
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
    console.log(response.data);
    return response.data.data; // Return the data from the response
  } catch (error) {
    console.error(error);
    return null; // Return null or handle the error accordingly
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
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const ProfitLoss = async () => {
  const url = "https://api.upstox.com/v2/trade/profit-loss/data";
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${Token}`,
  };

  const params = {
    segment: "FO",
    financial_year: "2122",
    page_number: 1,
    page_size: 30,
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
export const ReportMetaData = async () => {
  const url = "https://api.upstox.com/v2/trade/profit-loss/metadata";
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${Token}`,
  };
  const params = {
    segment: "FO",
    financial_year: "2122",
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