import axios from "xior";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    const cookieStore = cookies();
    const tokenCookie = cookieStore.get("upstox_token"); // Get the upstox_token from cookies
    const Token = tokenCookie ? tokenCookie : null;

    if (!Token) {
      return new NextResponse("access token not found", { status: 401 });
    }

    const body = await req.json();
    const { fromD, toD } = body;

    var lastTwoDigits1 = String(fromD).slice(-2);
    var lastTwoDigits2 = String(toD).slice(-2);
    var concatenated = lastTwoDigits1 + lastTwoDigits2;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    if (
      lastTwoDigits1 === lastTwoDigits2 &&
      String(currentYear) !== toD.slice(-4)
    ) {
      concatenated = Number(concatenated) + 1;
      concatenated = String(concatenated);
    } else if (
      lastTwoDigits1 === lastTwoDigits2 &&
      String(currentYear) === toD.slice(-4)
    ) {
      lastTwoDigits1 -= 1;
      concatenated = lastTwoDigits1 + lastTwoDigits2;
    }

    const url = "https://api.upstox.com/v2/trade/profit-loss/charges";
    const headers = {
      Accept: "application/json",
      Authorization: `Bearer ${Token.value}`,
    };

    const params = {
      segment: "FO",
      financial_year: "2122",
      from_date: { fromD },
      to_date: { toD },
      page_number: 1,
      page_size: 500,
    };
    const response = await axios.get(url, { headers, params });
    const tradesData = response.data.data;    
    const data = tradesData.charges_breakdown.total;

    return NextResponse.json(data);
  } catch (error) {
    console.log("[CHARGES_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
