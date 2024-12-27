/** @format */

import React from "react";
import { Line, Rangantle } from "../icons";
import Chelsea from "./Chelsea";

const TranferValue = () => {
  return (
    <div className="w-full md:h-[324px]  bg-[#020c20] mt-4 md:flex  ">
      <div className="flex-1 pb-2 md:pb-0 md:border-r-[1.5px] md:border-r-[#545974] md:border-b-0 border-b-[1.5px] mborder-b-[#545974] pt-4 px-4">
        <h1 className="font-bold text-sm mb-4">TRANSFER VALUE</h1>
        <img src="/Line.png" alt="chart" />
        <div className="flex items-center justify-between ">
          <div className="flex gap-2 items-center">
            <Line />
            <span className="text-[#8D8E92] text-sm ">
              Current player value
            </span>
          </div>
          <p className="text-[#8D8E92] text-sm font-[600]">11.6M $</p>
        </div>
        <div className="flex  justify-between mt-1">
          <p className="flex items-center gap-2">
            <Rangantle />
            <span className="text-[#8D8E92] text-sm ">Transfer fee</span>
          </p>
          <p className="text-[#8D8E92] text-sm font-[600]">(Highest) 66M</p>
        </div>
      </div>
      <div className="flex-1 ">
        <div className="w-full p-4 h-full">
          <Chelsea />
          <Chelsea />
          <Chelsea />
          <Chelsea />
          <Chelsea noneBorder={true} />
        </div>
      </div>
    </div>
  );
};

export default TranferValue;
