/** @format */

import React from "react";

const PlayerDescription = ({
  title,
  image,
  content,
  dob,
  index,
}: {
  title: string;
  image: string;
  content: string;
  dob?: boolean;
  index: number;
}) => {
  return (
    <div
      className={`p-5 flex flex-col gap-2 justify-center ${
        index === 0 || index === 2 || index === 4
          ? "border-r-[1.5px] border-[#545974]"
          : ""
      } ${
        index == 2 || index == 3
          ? "border-t-[1.5px] border-b-[1.5px]  border-[#545974] "
          : ""
      }`}
    >
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
