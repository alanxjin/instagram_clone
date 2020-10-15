import React from "react";
import Carousel from "./Carousel";
import SideContent from "./SideContent";
import "./LandscapePage.css";

function LandscapePage() {
  return (
    <div className="LandscapePage">
      <Carousel />
      <SideContent />
    </div>
  );
}

export default LandscapePage;
