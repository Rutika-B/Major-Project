"use client";
import { Positions } from "@/api/upstoxData";
import React, { useEffect, useState } from "react";
import { DefaultTable } from "../component/Table";

function OpenPos() {
  const [data, setData] = useState([{}]);
  const columns = ["PnL", "Symbol", "value", "quantity"];
  useEffect(() => {
    const getPositions = async () => {
      const res = await Positions();
      if (res) {
        const dummy = res.map(
          (item: {
            pnl: any;
            tradingsymbol: any;
            value: any;
            quantity: any;
          }) => ({
            PnL: item.pnl,
            Symbol: item.tradingsymbol,
            value: item.value,
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
