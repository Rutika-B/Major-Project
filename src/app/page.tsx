import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { Navebar } from "./component/Navebar";
import BlogList from "./component/BlogCards/BlogCard";
import Footer from "./component/Footer/Footer";
import { Button } from "@/components/ui/button";
interface Database {
  Database: any;
}
const page = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session) {
    redirect(
      "https://api.upstox.com/v2/login/authorization/dialog?response_type=code&client_id=88b1eb14-832c-4328-917b-9094278ec0ef&redirect_uri=http://localhost:3000/api/auth/callback/upstox"
    );
  }
  return (
    <div>
      <div>
        <Navebar />
        <div className=" flex justify-center items-center ">
          <div className=" w-3/5 text-center  pt-14">
            <h1 className="text-6xl text-gray-900  font-extrabold leading-normal">
              All in one Trading Journal for the derivative market traders{" "}
            </h1>
            <span className="text-xl text-gray-800 ">
              A platform for a stock market FnO traders to improve their trading
              skill and performance by analysing there previous trades
            </span>
            <br />
            <Link href={"/signup"}>
              <Button size={`lg`} className="mt-10">
                Start..
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <BlogList />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default page;
