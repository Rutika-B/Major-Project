"use client";
import { RootState } from "@/store/store";
import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
interface Props {
  children?: ReactNode;
}

const Allchildren = ({ children }) => {

  const toggleSide = useSelector((state: RootState) => state.reducer.toggleSide.value);
  
  return (
    <div
      className={`${
        toggleSide ? "pl-[21%]" : "pl-[7%]"
      } duration-300 w-full bg-gray-100 pt-20`}
    >
      {children}
    </div>
  );
};

export default Allchildren;
