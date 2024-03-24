import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const uurl = new URL(req.url);
    const code = uurl.searchParams.get("code");
    console.log(code);

    const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
    const client_secret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
    const url = "https://api.upstox.com/v2/login/authorization/token";
    const data = new URLSearchParams({
      client_id: client_id!,
      client_secret: client_secret!,
      redirect_uri: "http://localhost:3000/api/auth/callback/upstox",
      grant_type: "authorization_code",
      code: `${code}`,
    });
    const headers = {
      accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    };
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: data.toString(),
    });
    const responseData = await response.json();
    const accessToken = responseData.access_token;
    // const accessToken = response.data.access_token;
    console.log("Access Token:", accessToken);
    // session.accessToken = accessToken;
    // Redirect user to a protected route or perform other actions
    const absoluteURL = new URL("/dashboard", uurl.origin); // Construct absolute URL
    return NextResponse.redirect(absoluteURL.href);
  } catch (error) {
    console.error("Error fetching token:", error);
    return new Response("Error fetching token", { status: 500 });
  }
}
