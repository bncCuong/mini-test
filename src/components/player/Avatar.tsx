/** @format */

import React from "react";

const Avatar = () => {
  return (
    <div className="size-[90px] bg-white rounded-full flex items-center justify-center ">
      <img
        src="/player.png"
        alt="player"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  );
};

export default Avatar;
