"use client";
import { Holdings, Positions } from "../api/UpstoxAPIs/upstoxData";
import React, { useEffect, useState } from "react";
import { DefaultTable } from "../component/Table";
import axios from "axios";

function OpenPos() {
  const [data, setData] = useState([{}]);
  const columns = ["PnL", "Symbol", "LTD", "quantity"];
  useEffect(() => {
    const getPositions = async () => {
      const response = await axios.post("/api/holdings");
      const res = response.data;

      if (res) {
        const dummy = res.map(
          (item: {
            pnl: any;
            tradingsymbol: any;
            last_price: any;
            quantity: any;
          }) => ({
            PnL: item.pnl,
            Symbol: item.tradingsymbol,
            LTD: item.last_price,
            quantity: item.quantity,
          })
        );
        setData(dummy);
      }
    };
    getPositions();
  }, []);
  return <DefaultTable columns={columns} Tabdata={data} />;
}

export default OpenPos;
