import axios from "xior";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  try {
    const cookieStore = cookies();
    const tokenCookie = cookieStore.get("upstox_token"); // Get the upstox_token from cookies
    const Token = tokenCookie ? tokenCookie : null;

    if (!Token) {
      return new NextResponse("access token not found", { status: 401 });
    }

    const url = "https://api.upstox.com/v2/portfolio/long-term-holdings";
    const headers = {
      Accept: "application/json",
      Authorization: `Bearer ${Token.value}`,
    };

    const response = await axios.get(url, { headers });
    const res = response.data.data;

    return NextResponse.json(res);
  } catch (error) {
    console.log("[HOLDINGS_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
