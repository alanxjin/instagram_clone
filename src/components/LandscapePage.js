import React, { useState } from "react";
import Carousel from "./Carousel";
import SideContent from "./SideContent";
import "./LandscapePage.css";

function LandscapePage() {
  const [currentInd, setCurrentInd] = useState(0);
  return (
    <div className="LandscapePage">
      <Carousel
        mode="landscape"
        currentInd={currentInd}
        setCurrentInd={setCurrentInd}
      />
      <SideContent />
    </div>
  );
}

export default LandscapePage;
