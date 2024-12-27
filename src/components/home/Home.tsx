/** @format */

import React from "react";
import Header from "../header/Header";
import Player from "../player/Player";
import Matches from "../matches/Matches";
import TranferValue from "../tranferValue/TranferValue";

const Home = () => {
  return (
    <section className=" max-w-[1440px] mx-auto h-auto bg-black">
      <Header />
      <div className="w-full px-6  pb-10">
        <Player />
        <TranferValue />
        <Matches />
      </div>
    </section>
  );
};

export default Home;
