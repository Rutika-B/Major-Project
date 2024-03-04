'use client'
import { Filter } from "@/Filter/AscendingDate";
import { ProfitLoss } from "@/api/upstoxData";
import { QueryDates } from "@/Filter/QueryDate";

export const NetPnL = async ({fromD,toD}) => {
  const tradesData = await ProfitLoss({fromD,toD});
  console.log(tradesData)
  const filteredDate=QueryDates({fromD,toD,tradesData});
  console.log(filteredDate);
  if (filteredDate) {
    let netProfitLoss = 0;
    filteredDate.forEach((trade) => {
      const profitLoss =
         trade.sell_amount -  trade.buy_amount;
      netProfitLoss += profitLoss;
    });
    // console.log("Net profit/loss:", netProfitLoss);
    const rounded = netProfitLoss.toFixed(2);
    console.log(rounded);
    return rounded;
  } else {
    console.log("Failed to fetch trades data. Check console for error.");
    return null;
  }
};
export const TradeWin = async ({fromD,toD}) => {
  const tradesData = await ProfitLoss({fromD,toD});
  if (tradesData) {
    let profitableTradesCount = 0;

    for (const trade of tradesData) {
      const profitLoss = trade.sell_amount - trade.buy_amount;
      if (profitLoss > 0) {
        profitableTradesCount++;
      }
    }
    const totalTrades = tradesData.length;
    const winPercentage = (profitableTradesCount / totalTrades) * 100;
    console.log(winPercentage);
    return winPercentage.toFixed(2);
  } else {
    console.log("Failed to fetch trades data. Check console for error.");
    return null;
  }
};
export const ProfitFactor = async ({fromD,toD}) => {
  const tradesData = await ProfitLoss({fromD,toD});
  if (tradesData) {
    let totalProfit = 0;
    let totalLoss = 0;

    for (const trade of tradesData) {
      const profitLoss = trade.sell_amount - trade.buy_amount;
      if (profitLoss > 0) {
        totalProfit += profitLoss;
      } else {
        totalLoss -= profitLoss; // Convert negative profit loss to positive for loss calculation
      }
    }

    if (totalLoss === 0) {
      return 0; // Return Infinity if there are no losses
    }

    const profitFactor = totalProfit / totalLoss;
    console.log(profitFactor.toFixed(2));
    return profitFactor.toFixed(2);
  } else {
    console.log("Failed to fetch trades data. Check console for error.");
    return null;
  }
};
export const AverageWinLossTrade = async ({fromD,toD}) => {
  const tradesData = await ProfitLoss({fromD,toD});
  if (tradesData) {
    let totalProfit = 0;
    let totalLoss = 0;
    let totalWinQuantity = 0;
    let totalLossQuantity = 0;

    for (const trade of tradesData) {
      const profitLoss =
        (trade.sell_average - trade.buy_average) * trade.quantity;
      if (profitLoss > 0) {
        totalProfit += profitLoss;
        totalWinQuantity += trade.quantity;
      } else {
        totalLoss -= profitLoss; // Convert negative profit loss to positive for loss calculation
        totalLossQuantity += trade.quantity;
      }
    }

    const averageWin =
      totalWinQuantity > 0 ? (totalProfit / totalWinQuantity).toFixed(2) : 0;
    const averageLoss =
      totalLossQuantity > 0 ? (totalLoss / totalLossQuantity).toFixed(2) : 0;
    const ratio = (averageWin / averageLoss).toFixed(2);
    console.log(ratio);
    return ratio;
  } else {
    console.log("Failed to fetch trades data. Check console for error.");
    return null;
  }
};
export const DailyPnL = async ({fromD,toD}) => {
  const tradesData = await ProfitLoss({fromD,toD});
  console.log("----------------Profit Losss in sorted order------------");

  // console.log(tradesData);
  if (tradesData) {
    const dailyProfitLoss = {};

    // Iterate through trades and calculate profit/loss for each date
    tradesData.forEach((trade) => {
      const date = trade.buy_date;
      const profitLoss = trade.sell_amount - trade.buy_amount;
      if (!dailyProfitLoss[date]) {
        dailyProfitLoss[date] = profitLoss;
      } else {
        dailyProfitLoss[date] += profitLoss;
      }
    });

    // Convert object to array of objects containing date and profit/loss amount
    const result = Object.keys(dailyProfitLoss).map((date) => ({
      date,
      profitLoss: dailyProfitLoss[date],
    }));
    // console.log(result);
    return result;
  } else {
    console.log("Failed to fetch trades data. Check console for error.");
    return null;
  }
};

export const CummulativePnL = async ({fromD,toD}) => {
  const tradesData = await ProfitLoss({fromD,toD});
  const dailyProfitLoss = {};

  // Iterate through trades and calculate profit/loss for each date
  if (tradesData) {
    tradesData.forEach((trade) => {
      const date = trade.buy_date;
      const profitLoss = trade.sell_amount - trade.buy_amount;
      if (!dailyProfitLoss[date]) {
        dailyProfitLoss[date] = profitLoss;
      } else {
        dailyProfitLoss[date] += profitLoss;
      }
    });

    const result = [];
    let cumulativeProfitLoss = 0;
    // console.log(dailyProfitLoss);
    Object.keys(dailyProfitLoss)
    .forEach((date) => {
      // console.log(date);
      cumulativeProfitLoss += dailyProfitLoss[date];
      result.push({ date, cumulativeProfitLoss });
    });
    console.log("-----------------CummulativePnL---------------------");
    // console.log(result);
    return result;
  } else {
    console.log("Failed to fetch trades data. Check console for error.");
    return null;
  }
};
