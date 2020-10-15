import React, { useState } from "react";
import Carousel from "./Carousel";
import CommentBox from "./CommentBox";
import Header from "./Header";
import "./PortraitPage.css";
import Description from "./Description";
import PortraitDesContent from "./PortraitDesContent";

function PortraitPage() {
  const [currentInd, setCurrentInd] = useState(0);
  return (
    <div className="PortraitPage">
      <Header />
      <Carousel setCurrentInd={setCurrentInd} currentInd={currentInd} />
      <Description>
        <PortraitDesContent />
      </Description>
      <CommentBox />
    </div>
  );
}

export default PortraitPage;
