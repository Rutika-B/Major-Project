"use client";
import { RootState } from "@/store/store";
import React, { ReactNode } from "react";
import { useSelector } from "react-redux";

interface childrenProps {
  children?: ReactNode;
  session: any | null;
}

const Allchildren: React.FC<childrenProps> = ({ children, session }) => {
  const toggleSide = useSelector(
    (state: RootState) => state.reducer.toggleSide.value
  );

  return (
    <div
      className={`${
        !session ? undefined : toggleSide ? "pl-[21%] pt-20" : "pl-[7%] pt-20"
      } duration-300 w-full bg-gray-100`}
    >
      {children}
    </div>
  );
};

export default Allchildren;
