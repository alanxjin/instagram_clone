import React from "react";
import SlidesIndicator from "./SlidesIndicator";
import ToolBar from "./ToolBar";
import "./Description.css";

function Description({ children, mode = "portrait" }) {
  return (
    <div className="Description">
      <ToolBar>
        {mode === "portrait" && <SlidesIndicator size={5} currentInd={4} />}
      </ToolBar>
      <div className="bold">2,852 likes</div>
      {children}
      <div className="Description__Time">12 HOURS AGO</div>
    </div>
  );
}

export default Description;
