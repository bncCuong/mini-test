/** @format */

import React from "react";
import { MATCHLISTS } from "../../constant";
import Card from "./Card";

// Lấy data cần thiêts và sort lại theo ngày
const matches = MATCHLISTS.data.events.sort(
  (a, b) => b.startTimestamp - a.startTimestamp
);

const dataMatches = matches.map((item) => {
  return {
    id: item.id,
    startTime: item.startTimestamp,
    status: item.status.type,
    homeTeamName: item.homeTeam.name,
    homeScoreCurrent: item.homeScore.current,
    awayTeamName: item.awayTeam.name,
    awayScoreCurrent: item.awayScore.current,
  };
});

const Matches = () => {
  return (
    <div className="w-full h-auto bg-[#020c20] mt-4 p-4 ">
      <h1 className="uppercase font-bold text-[14px] leading-[17.71px] mb-4">
        MATCHES
      </h1>
      {dataMatches &&
        dataMatches.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
    </div>
  );
};

export default Matches;
