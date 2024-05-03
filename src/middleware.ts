import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (!session) {
    return NextResponse.rewrite(new URL("/", req.url));
  }
  return res;
}
export const config = {
  // The purpose of the matcher array is to specify the routes for which the middleware function (middleware) should intercept incoming requests. When a request is made to any of the routes specified in the matcher array, the middleware function is invoked to perform its authentication logic.
  matcher: [ "/dashboard", "/reports", "/insights"],
};
