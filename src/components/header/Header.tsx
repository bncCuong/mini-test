/** @format */

import React from "react";
import logo from "../../assets/header1.svg";
import sport from "../../assets/sport.svg";
import { Human } from "../icons";

const Header = () => {
  return (
    <div className="w-full h-[62px] bg-custom-gradient flex items-center px-6 justify-between">
      <div className="flex gap-6 bg-transparent">
        <img src={logo} alt="logo" className="bg-transparent" />
        <img src={sport} alt="logo" className="bg-transparent" />
      </div>
      <div className="size-9 rounded-full bg-[#02020F26] flex items-center justify-center ">
        <Human />
      </div>
    </div>
  );
};

export default Header;
