import React, { useState } from "react";
import Carousel from "./Carousel";
import CommentBox from "./CommentBox";
import ToolBar from "./ToolBar";

function PortraitPage() {
  return (
    <div className="PortraitPage">
      <Carousel />
      <ToolBar />
      <CommentBox />
    </div>
  );
}

export default PortraitPage;
