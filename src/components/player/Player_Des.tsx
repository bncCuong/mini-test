/** @format */

import React from "react";

const PlayerDescription = ({
  title,
  image,
  content,
  dob,
}: {
  title: string;
  image: string;
  content: string;
  dob?: boolean;
}) => {
  return (
    <div className="p-5 flex flex-col gap-2">
      <p className="text-[#AAAAAA] text-[11px] font-[400]">{title}</p>
      <div className="flex gap-3 items-center">
        <img src={image} alt="image" />
        {dob ? (
          <div className="flex flex-col">
            {content}
            <p className="text-[#AAAAAA] text-[11px] font-[400]">
              27 years old
            </p>
          </div>
        ) : (
          <p className="font-[700] text-[13px] text-[#FFFFFF] uppercase">
            {content}
          </p>
        )}
      </div>
    </div>
  );
};

export default PlayerDescription;
