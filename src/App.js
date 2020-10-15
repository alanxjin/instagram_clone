import React from "react";
import "./App.css";
import { PortraitPage } from "./components";
import LandscapePage from "./components/LandscapePage";

function App() {
  return (
    <div className="App">
      <LandscapePage />
      <PortraitPage />
    </div>
  );
}

export default App;
