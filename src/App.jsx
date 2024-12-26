/** @format */

import Header from "./components/header/Header";
import Matches from "./components/matches/Matches";
import Player from "./components/player/Player";
import TranferValue from "./components/tranferValue/TranferValue";

function App() {
  return (
    <section className=" max-w-[1440px] mx-auto h-auto bg-black">
      <Header />
      <div className="w-full h-screen px-6 h-auto pb-10">
        <Player />
        <TranferValue />
        <Matches />
      </div>
    </section>
  );
}

export default App;
