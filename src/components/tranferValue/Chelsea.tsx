/** @format */

import React from "react";

const Chelsea = ({ noneBorder }: { noneBorder?: boolean }) => {
  return (
    <div
      className={`${
        noneBorder ? "" : "border-b-[1.5px] border-b-[#545974]"
      }  h-[56px] flex justify-between  py-[11.5px]`}
    >
      <div className="flex gap-2">
        <div>
          <img src="/Chelsea.png" alt="chelsea" />
        </div>
        <div className="flex flex-col">
          <p className="text-[13px] font-[400] text-[#ffffff]">Chelsea</p>
          <p className="text-[#8D8E92] text-sm">30 Jun 2020</p>
        </div>
      </div>
      <div>
        <p className="text-[#48FF5A] text-end">-</p>
        <p className="text-[#48FF5A] text-[11px] font-[400]">End of loan</p>
      </div>
    </div>
  );
};

export default Chelsea;
