import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(req: NextRequest) {
  try {
    const uurl = new URL(req.url);
    const code = uurl.searchParams.get("code");
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
    cookies().set('upstox_token', accessToken);  
    const absoluteURL = new URL("/dashboard", uurl.origin);

    return NextResponse.redirect(absoluteURL.href);
    
  } catch (error) {
    console.error("Error fetching token:", error);
    return new Response("Error fetching token", { status: 500 });
  }
}
