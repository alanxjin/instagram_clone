import React, { useState } from "react";
import Carousel from "./Carousel";
import CommentBox from "./CommentBox";
import PortraitDescription from "./PortraitDescription";
import "./PortraitPage.css";

function PortraitPage() {
  const [currentInd, setCurrentInd] = useState(0);
  return (
    <div className="PortraitPage">
      <Carousel setCurrentInd={setCurrentInd} currentInd={currentInd} />
      <PortraitDescription />
      <CommentBox />
    </div>
  );
}

export default PortraitPage;
