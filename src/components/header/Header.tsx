/** @format */

import React from "react";
import logo from "../../assets/header1.svg";
import sport from "../../assets/sport.svg";
import { Human } from "../icons";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const routerToGame = () => {
    navigate("/play-game");
  };
  return (
    <div className="w-full h-[62px] bg-custom-gradient flex items-center px-6 justify-between">
      <div className="flex gap-6 bg-transparent">
        <img src={logo} alt="logo" className="bg-transparent" />
        <img src={sport} alt="logo" className="bg-transparent" />
      </div>
      <div className="flex gap-2">
        <button
          onClick={routerToGame}
          className="w-[150px] border border-[#1f4ed1] cursor-pointer hover:text-[#f6b500] h-[36px] rounded-lg bg-[linear-gradient(186.86deg,_#00289F_10%,_#001F7B_28.46%,_#091557_50.54%)]">
          Football Game
        </button>
        <div className="size-9 rounded-full bg-[#02020F26] flex items-center justify-center ">
          <Human />
        </div>
      </div>
    </div>
  );
};

export default Header;
