"use client";
import { Positions } from "@/api/upstoxData";
import { Card, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";

const TABLE_HEAD = ["Symbol", "value", "PnL", "quantity"];

export function DefaultTable() {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    const getPositions = async () => {
      const res = await Positions();
      const dummy = res.map(
        (item: { pnl: any; tradingsymbol: any; value: any,quantity:any, }) => ({
          PnL: item.pnl,
          Symbol: item.tradingsymbol,
          value: item.value,
          quantity:item.quantity,
        })
      );
      setData(dummy);
    };
    getPositions();
  }, []);
  return (
    <Card className="h-full w-full overflow-scroll text-black">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(({ Symbol, value, PnL,quantity}, index) => {
            const isLast = index === data.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={Symbol}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {Symbol}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {value}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {PnL}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {quantity}
                  </Typography>
                </td>
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
