/** @format */

import React from "react";
import Avatar from "./Avatar";
import PlayerInfo from "./PlayerInfo";
import { Star } from "../icons";
import PlayerDescription from "./Player_Des";

import { MONTHNAME, PLAYERINFO } from "../../constant/index";
import { formatDateTime } from "../../utils";

const dataPlayer = PLAYERINFO.data.player;

const Player = () => {
  const data = [
    {
      title: "Nationality",
      image: "/Spain.png",
      content: dataPlayer.nationality.name,
    },
    {
      title: "Date of birth",
      image: "/DateOfBirth.png",
      content: formatDateTime(dataPlayer.dateOfBirthTimestamp),
      dob: true,
    },
    {
      title: "Height",
      image: "/Height.png",
      content: dataPlayer.height + " cm",
    },
    {
      title: "Preferred foot",
      image: "/Foot.png",
      content: dataPlayer.preferredFoot || "Right",
    },
    { title: "Jersey number", image: "/Jersey.png", content: "19" },
    { title: "Position", image: "Football.png", content: dataPlayer.position },
  ];
  return (
    <div className="w-full rounded-md bg-[#020c20] h-auto md:h-[204px] overflow-hidden md:flex  ">
      <div className="flex-1 px-4 flex items-center gap-2 relative md:border-r-[1.5px] md:border-r-[#545974] ">
        <Avatar />
        <PlayerInfo
          playerInfo={{
            name: dataPlayer.name,
            team: dataPlayer.team.name,
            contract: dataPlayer.contractUntilTimestamp,
            flag: dataPlayer.team.flag,
          }}
        />
        <div className="absolute right-4 top-4">
          <Star />
        </div>
      </div>

      <div className="flex-1  grid grid-cols-2 grid-rows-3 h-[204px]">
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
