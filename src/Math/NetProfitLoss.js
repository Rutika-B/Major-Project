import { Filter } from "@/Filter/AscendingDate";
import { ProfitLoss } from "@/api/upstoxData";
import { QueryDates } from "@/Filter/QueryDate";
import { GetFilteredProfitLoss } from "@/Filter/getFilteredProfitLoss";

export const NetPnL = async ({ fromD, toD }) => {
  const filteredDate = await GetFilteredProfitLoss({ fromD, toD });
  if (filteredDate) {
    //algo to calculate Net profit and loss
    let netProfitLoss = 0;
    filteredDate.forEach((trade) => {
      const profitLoss = trade.sell_amount - trade.buy_amount;
      netProfitLoss += profitLoss;
    });
    const rounded = netProfitLoss.toFixed(2);
    console.log(rounded);
    return rounded;
  } else {
    console.log("Failed to fetch trades data. Check console for error.");
    return null;
  }
};
export const TradeWin = async ({ fromD, toD }) => {
  const filteredDate = await GetFilteredProfitLoss({ fromD, toD });
  if (filteredDate) {
    //to calculate tradewin percentage
    let profitableTradesCount = 0;
    for (const trade of filteredDate) {
      const profitLoss = trade.sell_amount - trade.buy_amount;
      if (profitLoss > 0) {
        profitableTradesCount++;
      }
    }
    const totalTrades = filteredDate.length;
    const winPercentage = (profitableTradesCount / totalTrades) * 100;
    console.log(winPercentage);
    return winPercentage.toFixed(2);
  } else {
    console.log("Failed to fetch trades data. Check console for error.");
    return null;
  }
};
export const ProfitFactor = async ({ fromD, toD }) => {
  const filteredDate = await GetFilteredProfitLoss({ fromD, toD });
  if (filteredDate) {
    let totalProfit = 0;
    let totalLoss = 0;

    for (const trade of filteredDate) {
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
export const AverageWinLossTrade = async ({ fromD, toD }) => {
  const filteredDate = await GetFilteredProfitLoss({ fromD, toD });
  if (filteredDate) {
    let totalProfit = 0;
    let totalLoss = 0;
    let totalWinQuantity = 0;
    let totalLossQuantity = 0;

    for (const trade of filteredDate) {
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
export const DailyPnL = async ({ fromD, toD }) => {
  const tradesData = await GetFilteredProfitLoss({ fromD, toD });
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
    var maxProfit = 0,
      maxLoss = 999999999;
    Object.keys(dailyProfitLoss).map((date) => {
      maxProfit = Math.max(maxProfit, dailyProfitLoss[date]);
      maxLoss = Math.min(maxLoss, dailyProfitLoss[date]);
    });
    console.log(maxProfit);
    console.log(maxLoss);
    // console.log(result);
    return {result,maxProfit,maxLoss};
  } else {
    console.log("Failed to fetch trades data. Check console for error.");
    return null;
  }
};

export const CummulativePnL = async ({ fromD, toD }) => {
  const tradesData = await GetFilteredProfitLoss({ fromD, toD });
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
    Object.keys(dailyProfitLoss).forEach((date) => {
      cumulativeProfitLoss += dailyProfitLoss[date];
      result.push({ date, cumulativeProfitLoss });
    });
    return result;
  } else {
    console.log("Failed to fetch trades data. Check console for error.");
    return null;
  }
};
