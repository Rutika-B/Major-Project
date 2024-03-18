import { Typography } from "@mui/material";
import React from "react";
import DdtoDate from "@/Formatting/reverseFormat";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import DailyChart from "../Dailychart";
import { DefaultTable } from "@/app/component/Table";
interface CellProps {
  displayList: any;
  chartTable: any;
  handleOpen: any;
  open: boolean;
}

const Cell: React.FC<CellProps> = ({
  displayList,
  chartTable,
  open,
  handleOpen,
}) => {
  console.log(displayList);
  console.log(chartTable);
  const date = displayList[0].date;
  const title = DdtoDate(date);
  const data = displayList[0];

  const columns = ["instrument", "PnL", "ROI", "volume"];
  const TabData = chartTable[0][`${date}`].map(
    (item: { PnL: any; instrument: any; volume: any; invested: any }) => ({
      instrument: item.instrument,
      PnL: item.PnL,
      ROI: ((item.PnL / item.invested) * 100).toFixed(2),
      volume: item.volume,
    })
  );
  console.log(TabData);
  return (
    <>
      <Dialog open={open} handler={handleOpen} size="xl">
        <DialogHeader>
          {title}
          <Typography
            className={`px-6 ${
              data.PnL > 0 ? "text-green-400" : "text-red-400"
            } `}
            variant="h5"
          >
            Net P&L ${data.PnL}{" "}
          </Typography>
          <Button className="mr-0">Add Note</Button>
        </DialogHeader>
        <DialogBody>
          <div className="flex flex-row mr-2">
            <div className="p-2 my-2 bg-slate-900/50 w-2/5 h-[250px] text-black">
              <DailyChart chartTable={chartTable[0][`${data.date}`]} />
            </div>
            <div className="grid grid-cols-4 gap-8">
              <div className="px-4 items-center">
                <div>
                  Total Trades
                  <span className="px-4 font-bold inline">{data.trade_count}</span>
                </div>
              </div>
              <div className="px-4 items-center">
                <div>Volume</div>
                <span className="px-4 font-bold inline">{data.volume}</span>
              </div>
              <div className="px-4 items-center">
                <div>Gross Profit</div>
                <span className="px-4 font-bold inline">{data.PnL}</span>
              </div>
              <div className="px-4 items-center">
                <div>Winners</div>
                <span className="px-4 font-bold inline">{data.winners}</span>
              </div>
              <div className="px-4 items-center">
                <div>Lossers</div>
                <span className="px-4 font-bold inline">
                  {data.trade_count - data.winners}
                </span>
              </div>
            </div>
          </div>
          <div>
            <DefaultTable columns={columns} Tabdata={TabData} />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>View Details</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default Cell;
