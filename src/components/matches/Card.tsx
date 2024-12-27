/** @format */

import React, { useEffect, useState } from "react";
import { formatDateMonth } from "../../utils";

interface Data {
  id: string;
  startTime: number;
  status: string;
  homeTeamName: string;
  homeScoreCurrent: number;
  awayTeamName: string;
  awayScoreCurrent: number;
}

const Card = ({ item }: { item: Data }) => {
  const [homeTeamResult, setHomeTeamResult] = useState<string>(""); // win, draw, or lose
  const [awayTeamResult, setAwayTeamResult] = useState<string>("");
  useEffect(() => {
    const result = item.homeScoreCurrent - item.awayScoreCurrent;

    if (result > 0) {
      // Home team wins
      setHomeTeamResult("win");
      setAwayTeamResult("lose");
    } else if (result < 0) {
      // Away team wins
      setHomeTeamResult("lose");
      setAwayTeamResult("win");
    } else {
      // Draw
      setHomeTeamResult("draw");
      setAwayTeamResult("draw");
    }
  }, [item.awayScoreCurrent, item.homeScoreCurrent]);

  return (
    <div className="w-full h-[66px] justify-between rounded-md bg-gradient-to-r from-custom-blue-1 via-custom-blue-2 to-custom-blue-3 mb-2 p-2 flex items-center">
      <div className="flex gap-4 items-center ">
        <div className="flex flex-col gap-1 ">
          <p className="text-[#8D8E92] text-sm">
            {formatDateMonth(item.startTime)}
          </p>
          <p className="text-[#8D8E92] text-sm">
            {item.status === "finished" ? "FNS" : item.status}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5">
            <img src="/Spain.png" alt="flag" />
            <p
              className={`${
                homeTeamResult === "win" || homeTeamResult === "draw"
                  ? "text-white"
                  : "text-[#8D8E92]"
              }`}>
              {item.homeTeamName}
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <img src="/Spain.png" alt="flag" />
            <p
              className={`${
                awayTeamResult === "win" || awayTeamResult === "draw"
                  ? "text-white"
                  : "text-[#8D8E92]"
              }`}>
              {item.awayTeamName}
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-1.5 items-center">
        <div className="flex flex-col">
          <p
            className={`size-[23px] text-[11px] leading-[16px] font-[400] flex items-center justify-center rounded-t-md  ${
              homeTeamResult === "win"
                ? "  bg-[#2187E5]"
                : homeTeamResult === "draw"
                ? "bg-[#0038E0]"
                : "bg-[linear-gradient(186.86deg,_#00289F_10%,_#001F7B_28.46%,_#091557_50.54%)]"
            }`}>
            {item.homeScoreCurrent}
          </p>
          <p
            className={`size-[23px] text-[11px] leading-[16px] font-[400] flex items-center justify-center rounded-b-md ${
              awayTeamResult === "win"
                ? " bg-[#2187E5]"
                : awayTeamResult === "draw"
                ? "bg-[#0038E0]"
                : "bg-[linear-gradient(186.86deg,_#00289F_10%,_#001F7B_28.46%,_#091557_50.54%)]"
            } `}>
            {item.awayScoreCurrent}
          </p>
        </div>

        <div className="size-6 rounded-sm flex items-center justify-center bg-[#DA6900]">
          <p className="font-bold">6.1</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
