import React, { useState } from "react";
import SlidesIndicator from "./SlidesIndicator";
import ToolBar from "./ToolBar";
import "./PortraitDescription.css";
import MoreText from "./MoreText";

function PortraitDescription() {
  return (
    <div className="PortraitDescription">
      <ToolBar>
        <SlidesIndicator size={5} currentInd={4} />
      </ToolBar>
      <div className="bold">2,852 likes</div>

      <MoreText
        user="alanxjin"
        comment="Artist Preta Wolzak’s
        (@pretawolzak) textured mixed-media pieces focus on hard issues,
        including gender equality, representation and race. Her collections “Ma
        Petit Inuite” and “Arctic Charade” (pictured) confronts the impact of
        humans’ behavior on our planet and the effects of climate change."
        limit={15}
      />

      <div className="PortraitDescription__ViewMore bold">
        <span>View all {13} comments </span>
      </div>
      <MoreText user="alanxjin" comment="zurichef ❤️ @adobe" />
      <MoreText
        user="alanxjin"
        comment="We commissioned a graphic design
        team directly from our community to make #AdobeMAX even better."
      />
      <div className="PortraitDescription__Time">12 HOURS AGO</div>
    </div>
  );
}

export default PortraitDescription;
