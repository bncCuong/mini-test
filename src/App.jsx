/** @format */

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/home/Home";
import PlayGame from "./components/playgame/PlayGame";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play-game" element={<PlayGame />} />
      </Routes>
    </Router>
  );
}

export default App;
