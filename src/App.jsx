/** @format */

import Header from "./components/header/Header";
import Player from "./components/player/Player";

function App() {
  return (
    <section className=" max-w-[1440px] mx-auto h-screen">
      <Header />
      <div className="w-full h-screen px-6">
        <Player />
      </div>
    </section>
  );
}

export default App;
