import React from "react";

import "./App.css";
import GameSection from "./components/GameSection";
import HeaderSection from "./components/HeaderSection";

function App() {
  return (
    <div className="app-container">
      <HeaderSection />
      <GameSection />
    </div>
  );
}

export default App;
