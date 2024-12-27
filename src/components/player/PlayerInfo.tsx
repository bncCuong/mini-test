/** @format */

import React from "react";
import { formatDateTime } from "../../utils";

const PlayerInfo = ({
  playerInfo,
}: {
  playerInfo: {
    name: string;
    team: string;
    contract: number;
    flag: string;
  };
}) => {
  return (
    <div className="flex flex-col">
      <h6 className="text-[24px] md:text-[32px] text-white font-[500]">
        {playerInfo.name}
      </h6>
      <div className="flex gap-2">
        <img
          src={playerInfo.flag || "/Logo_Como_1907_2019.png"}
          className="bg-transparent size-10"
        />
        <div className="flex flex-col">
          <p className="text-sm ">{playerInfo.team}</p>
          <p className="text-[11px] text-[#8D8E92] font-[400]">
            Contract until {formatDateTime(playerInfo.contract)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
