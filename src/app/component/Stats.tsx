import { Typography } from "@mui/material";
import React from "react";
const stats = [
  {
    id: 1,
    title: "Big Win",
    value: 34,
  },
  {
    id: 1,
    title: "Big loss",
    value: 34,
  },
  {
    id: 1,
    title: "Total Fees",
    value: 34,
  },
  {
    id: 1,
    title: "Best Day",
    value: "Sunday",
  },
];
function Stats() {
  return (
    <div className="flex flex-col items-center justify-center m-2 px-2 border rounded-md bg-white border-gray-500">
      <Typography className="my-2 pt-3" variant="h4">
        Stats
      </Typography>
      <ul>
        {stats.map(({ id, title, value }) => (
          <li className="" key={id}>
            <div className="w-auto h-auto my-2 items-center justify-center p-3">
              <h1 className="text-xl font-bold">{title}</h1>
              <h1 className="text-xl">{value}</h1>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Stats;
