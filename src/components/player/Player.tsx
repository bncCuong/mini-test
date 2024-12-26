/** @format */

import React from "react";
import Avatar from "./Avatar";
import PlayerInfo from "./PlayerInfo";
import { Star } from "../icons";
import PlayerDescription from "./Player_Des";

const data = [
  { title: "Nationality", image: "/Spain.png", content: "SPAIN" },
  {
    title: "Date of birth",
    image: "/DateOfBirth.png",
    content: "24 OCT 1996",
    dob: true,
  },
  { title: "Height", image: "/Height.png", content: "189 cm" },
  { title: "Preferred foot", image: "/Foot.png", content: "Right" },
  { title: "Jersey number", image: "/Jersey.png", content: "19" },
  { title: "Position", image: "Football.png", content: "FW" },
];

const Player = () => {
  return (
    <div className="w-full rounded-md bg-[#020c20] h-[204px] flex  overflow-hidden ">
      <div className="flex-1 px-4 flex items-center gap-2 relative border-r-[1.5px] border-r-[#545974]">
        <Avatar />
        <PlayerInfo />
        <div className="absolute right-4 top-4">
          <Star />
        </div>
      </div>

      <div className="flex-1  grid grid-cols-2 grid-rows-3">
        {data.map((item, index) => {
          return (
            <PlayerDescription
              key={item.title}
              title={item.title}
              content={item.content}
              image={item.image}
              dob={item.dob}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Player;
