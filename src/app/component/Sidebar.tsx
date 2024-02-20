"use client";
import React, { useState } from "react";
import { BsArrowLeft, BsSearch } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { IoIosJournal } from "react-icons/io";
import { TbReportSearch } from "react-icons/tb";
import { FaExclamation } from "react-icons/fa";
import { PiNotebookFill } from "react-icons/pi";
import { CgInsights } from "react-icons/cg";
import { BiSolidDashboard } from "react-icons/bi";
import { GiBull } from "react-icons/gi";
import { FcBullish } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { change } from "@/store/slice";
import Link from "next/link";

function SideBar() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const menus = [
    { title: "Dashboad", micon: <BiSolidDashboard />, id: 1, path: "/" },
    {
      title: "Daily Journel",
      micon: <IoIosJournal />,
      id: 2,
      path: "/daily-journel",
    },
    { title: "Trade Log", micon: <CgInsights />, id: 3, path: "/trade-log" },
    { title: "Reports", micon: <TbReportSearch />, id: 4, path: "/reports" },
    { title: "Insights", micon: <FaExclamation />, id: 5, path: "/insights" },
    { title: "Notebook", micon: <PiNotebookFill />, id: 6, path: "/notebook" },
  ];
  //   const [open, setOpen] = useState(true);

  return (
    <div className="relative">
      <div
        className={`bg-dark-purple z-20 insert-y-0 left-0 ${
          count ? "w-[20%]" : "w-[6%]"
        } duration-300 py-3 px-5 pt-6 fixed top-0 bottom-0`}
      >
        <BsArrowLeft
          onClick={() => {
            // setOpen(!open);
            dispatch(change(count));
          }}
          className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 border p-1 border-dark-purple cursor-pointer ${
            !count && "rotate-180"
          }`}
        />
        <div className="inline-flex">
          <FcBullish className={`bg-amber-400 text-4xl mr-2 cursor-pointer`} />
          <h1
            className={`text-white duration-300 text-2xl ${
              !count && "scale-0"
            }`}
          >
            TradeTracker
          </h1>
        </div>
        <div
          className={`flex items-center bg-light-white rounded-md mt-6 ${
            count ? "px-4" : "px-1"
          } py-2`}
        >
          <BsSearch
            className={`text-lg text-white ml-1 block float-left ${
              count && "mr-2"
            }`}
          />
          <input
            className={`bg-transparent w-full text-base text-white focus:outline-none ${
              !count && "hidden"
            }`}
            placeholder="Search"
            type={"search"}
          />
        </div>
        <ul className="pt-2">
          {menus.map(({ title, id, micon, path }) => (
            <>
              <Link href={path} key={id}>
                <li
                  className={`text-gray-300 text-sm flex py-2 items-center gap-x-4 cursor-pointer hover:bg-light-white rounded-md mt-2 ${
                    count ? "p-2" : "p-1"
                  }`}
                >
                  <span
                    className={`text-2xl block items-center float-left ${
                      !count && "ml-1"
                    }`}
                  >
                    {micon}
                  </span>
                  <span
                    className={`text-base font-medium flex-1 duration-300 ${
                      !count && "scale-0"
                    }`}
                  >
                    {title}
                  </span>
                </li>
              </Link>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
