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
    image: "",
    content: "24 OCT 1996",
    dob: true,
  },
  { title: "Height", image: "/Height.png", content: "189 cm" },
  { title: "Preferred foot", image: "", content: "Right" },
  { title: "Jersey number", image: "", content: "19" },
  { title: "Position", image: "", content: "FW" },
];

const Player = () => {
  return (
    <div className="w-full rounded-md bg-[#171B2E] h-[204px] flex ">
      <div className="flex-1 pl-3 flex items-center gap-2 relative">
        <Avatar />
        <PlayerInfo />
        <div className="absolute right-4 top-4">
          <Star />
        </div>
      </div>

      <div className="flex-1  grid grid-cols-2 grid-rows-3">
        {data.map((item) => {
          return (
            <PlayerDescription
              title={item.title}
              content={item.content}
              image={item.image}
              dob={item.dob}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Player;
