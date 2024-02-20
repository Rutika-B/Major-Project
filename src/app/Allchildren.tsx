"use client";
import { RootState } from "@/store/store";
import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
interface Props {
  children?: ReactNode;
}

function Allchildren({ children }) {
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <div className={`${count ? "pl-[21%]" : "pl-[7%]"} duration-300 bg-gray-100 pt-20`}>{children}</div>
  );
}

export default Allchildren;
