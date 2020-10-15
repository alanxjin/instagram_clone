import React from "react";
import "./PortraitDesContent.css";
import MoreText from "./MoreText";

function PortraitDesContent() {
  return (
    <div className="PortraitDesContent">
      <MoreText
        user="alanxjin"
        comment="Artist Preta Wolzak’s
(@pretawolzak) textured mixed-media pieces focus on hard issues,
including gender equality, representation and race. Her collections “Ma
Petit Inuite” and “Arctic Charade” (pictured) confronts the impact of
humans’ behavior on our planet and the effects of climate change."
        limit={15}
      />

      <div className="PortraitDesContent__ViewMore bold">
        <span>View all {13} comments </span>
      </div>
      <MoreText user="alanxjin" comment="zurichef ❤️ @adobe" />
      <MoreText
        user="alanxjin"
        comment="We commissioned a graphic design
team directly from our community to make #AdobeMAX even better."
      />
    </div>
  );
}

export default PortraitDesContent;
