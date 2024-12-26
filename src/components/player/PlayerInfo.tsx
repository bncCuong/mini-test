/** @format */

import React from "react";

const PlayerInfo = () => {
  return (
    <div className="flex flex-col">
      <h6 className="text-[32px] text-white font-[500]">AIvaro Morata</h6>
      <div className="flex gap-2">
        <img src="/aletico.png" className="bg-transparent" />
        <div className="flex flex-col">
          <p className="text-sm ">Atletico Madrid</p>
          <p className="text-[11px] text-[#8D8E92] font-[400]">
            Contract until 30 Jun 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
