"use client";
import { DailyPnL } from "@/Math/NetProfitLoss";
import { RootState } from "@/store/store";
import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";

const HalfCircle = () => {
  const [val, setval] = useState<any | number>(13);
  const Range = useSelector((state: RootState) => state.reducer.dateRange);
  const fromD = Range.fromDate;
  const toD = Range.toDate;

  useEffect(() => {
    const getData = async () => {
      const Data = await DailyPnL({ fromD, toD });
      setval(Data);
    };
    getData();
  }, [fromD, toD]);

  const [state, setState] = useState({
    series: [val],
    options: {
      chart: {
        type: "radialBar",
        offsetY: -20,
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#e7e7e7",
            strokeWidth: "97%",
            margin: 5, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              color: "#999",
              opacity: 1,
              blur: 2,
            },
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: -2,
              fontSize: "20px",
            },
          },
        },
      },
      grid: {
        padding: {
          top: -10,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          shadeIntensity: 0.4,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 53, 91],
        },
      },
      labels: ["Average Results"],
    } as ApexOptions,
  });
  return (
    <ReactApexChart
      options={state.options}
      series={state.series}
      type="radialBar"
      height={120}
    />
  );
};

export default HalfCircle;
