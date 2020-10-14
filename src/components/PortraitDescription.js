import React, { useState } from "react";
import SlidesIndicator from "./SlidesIndicator";
import ToolBar from "./ToolBar";
import "./PortraitDescription.css";

function PortraitDescription() {
  return (
    <div className="PortraitDescription">
      <ToolBar>
        <SlidesIndicator size={5} currentInd={4} />
      </ToolBar>
      <div className="bold">2,852 likes</div>
      <div className="text">
        <span className="bold">alan</span> We commissioned a graphic design team
        directly from our community to make #AdobeMAX even better. Swipe and tap
        to dive deep on our CoCreate
      </div>
      <div> View all {13} comments </div>
      <div className="text">
        <span className="bold">alan</span> zurichef ❤️ @adobe
      </div>
      <div className="text">
        <span className="bold">alan</span> We commissioned a graphic design team
        directly from our community to make #AdobeMAX even better.
      </div>
      <div className="text">12 Hours AGO</div>
    </div>
  );
}

export default PortraitDescription;
